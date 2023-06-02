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
    fallback: false,
  };
};

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
  } catch (error) {}
};

const ProductIdPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { query } = useRouter();
  return (
    <div>
      ProductId: {query.productId}
      Product title: {data?.title}
    </div>
  );
};

export default ProductIdPage;
