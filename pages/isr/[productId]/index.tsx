import { Product } from "@/types/product";
import {
  GetStaticPathsResult,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";
import { useRouter } from "next/router";
import React from "react";

export const getStaticPaths = async (): Promise<GetStaticPathsResult> => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data: Product[] = await res.json();
  return {
    paths: data.map((product) => {
      return {
        params: {
          productId: product.id.toString(),
        },
      };
    }),
    // fallback: false, it means that only above prepared paths will be valid
    fallback: true, // it means that i can pregenerate some of the most rare paths, and others still will be valid but not pre generated in build time.
  };
};

// Dynamic pre generation doesn't finish instantly, it must be handled with fallback component (fallback set to true)
// But it's also an option to set fallback to "blocking", then fallback component is not needed, because app awaits for data

export const getStaticProps = async ({
  params,
}: GetStaticPropsContext<{ productId: string }>) => {
  try {
    if (!params?.productId)
      return {
        props: {},
        notFound: true,
      };
    const res = await fetch(
      `https://fakestoreapi.com/products/${params?.productId}`
    );
    const data: Product = await res.json();

    return {
      props: {
        data,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

const ProductIdPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { query } = useRouter();

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      ProductId: {query.productId}
      Product title: {data?.title}
    </div>
  );
};

export default ProductIdPage;
