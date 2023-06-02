import { Card } from "@/components/card/Card";
import { GraphqlCard } from "@/components/graphql_card/GraphqlCard";
import {
  GetProductByIdQuery,
  GetProductListDocument,
  GetProductListQuery,
} from "@/generated/graphql";
import { client } from "@/graphql/apolloClient";
import { Product } from "@/types/product";
import { GetStaticPropsResult, InferGetStaticPropsType } from "next";
import Script from "next/script";

export const getStaticProps = async () => {
  try {
    const { data } = await client.query<GetProductListQuery>({
      query: GetProductListDocument,
    });

    if (!data)
      return {
        props: {},
        notFound: true,
      };

    return {
      props: {
        data,
      },
    };
  } catch (error) {}
};

export default function Home({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <h1 className="font-bold text-primary text-3xl py-6">
        Static Site Generation - with Apollo and GraphQL
      </h1>
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 relative">
        {data?.products.map((product) => (
          <GraphqlCard key={product.slug} product={product as any} />
        ))}
        <Script src="/scripts/emoji.js" />
      </main>
    </>
  );
}
