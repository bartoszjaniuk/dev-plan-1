import { Card } from "@/components/card/Card";
import { Product } from "@/types/product";
import { InferGetStaticPropsType } from "next";
import React from "react";

export const getStaticProps = async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const data: Product[] = await res.json();

    return {
      props: {
        data,
      },
      revalidate: 10,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

const IsrPage = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <h1 className="font-bold text-primary text-3xl py-6">
        Incremental Site Generation
      </h1>
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {data.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </main>
    </>
  );
};

export default IsrPage;
