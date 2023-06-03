import { Product } from "@/types/product";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import React from "react";

export const getServerSideProps = async (
  context: GetServerSidePropsContext<{ productId: string }>
) => {
  try {
    const productId = context.params?.productId;

    if (!productId) {
      return {
        notFound: true,
      };
    }

    const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
    const data: Product = await res.json();

    if (!data) {
      return {
        redirect: {
          destination: "/no-data",
        },
      };
    }

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
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <div>{data.id}</div>;
};

export default ProductIdPage;
