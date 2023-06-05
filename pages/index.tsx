import { GraphqlCard } from "@/components/graphql_card/GraphqlCard";
import {
  GetProductListDocument,
  GetProductListQuery,
} from "@/generated/graphql";
import { client } from "@/graphql/apolloClient";

import { InferGetStaticPropsType } from "next";
import Script from "next/script";
import dynamic from "next/dynamic";
import { useState } from "react";
import Head from "next/head";

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
  } catch (error) {
    throw new Error("Cos poszlo nie tak z pobieraniem danych");
  }
};

const DynamicBadge = dynamic(() => import("../components/badge/Badge"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

export default function Home({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [isBadgeVisible, setIsBadgeVisible] = useState(false);
  const toggleBadge = () => setIsBadgeVisible((prev) => !prev);
  return (
    <>
      <Head>
        {/* W tym miejscu istnieje mozliwość umieszczenia meta tagów pod SEO */}
        <title>SSG - STRONA GŁÓWNA</title>
        <meta name="description" title="Opis strony" />
        <meta name="og:title" title="Tytul dla twittera" />
        <meta name="og:description" title="Opis dla twittera" />
      </Head>
      <h1
        className="font-bold text-primary text-3xl py-6 cursor-pointer"
        onClick={toggleBadge}
      >
        Static Site Generation - with Apollo and GraphQL
      </h1>
      {isBadgeVisible && <DynamicBadge />}
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 relative">
        {data?.products.map((product) => (
          <GraphqlCard key={product.slug} product={product as any} />
        ))}
        <Script src="/scripts/emoji.js" />
      </main>
    </>
  );
}
