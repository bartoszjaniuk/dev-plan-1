import { Card } from "@/components/card/Card";
import { Product } from "@/types/product";
import { InferGetServerSidePropsType } from "next";
import { NextSeo } from "next-seo";
import React from "react";

export const getServerSideProps = async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const data: Product[] = await res.json();

    if (!data) {
      return {
        redirect: {
          destination: "/no-data",
        },
      };
    }
    if (data.length === 0) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        data,
      },
    };
  } catch (error) {}
};

const SsrPage = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <NextSeo
        title="Server Side Rendering"
        description="Strona które renderuje dane po stronie serwera"
        // itd...
      />
      <h1 className="font-bold text-primary text-3xl py-6">
        Server Side Rendering
      </h1>
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {data.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </main>
    </>
  );
};

export default SsrPage;
