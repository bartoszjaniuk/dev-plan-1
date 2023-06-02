import { Card } from "@/components/card/Card";
import { Product } from "@/types/product";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const getProducts = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data: Product[] = await res.json();
  return data;
};

const CsrPage = () => {
  const { data, isFetching } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  return (
    <>
      <h1 className="font-bold text-primary text-3xl py-6">
        Client Side Rendering
      </h1>
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {isFetching && <div>Loading...</div>}
        {!isFetching &&
          data &&
          data.map((product) => <Card key={product.id} {...product} />)}
      </main>
    </>
  );
};

export default CsrPage;
