import { useRouter } from "next/router";
import React from "react";

const ProductIdPage = () => {
  const { query, pathname, route } = useRouter();
  const { productId } = query;
  return (
    <div>
      <h1>
        This is dummy component without fetching data, but usage of next.js
        hooks
      </h1>
      <ul>
        <li>Product id: {productId}</li>
        <li>Pathname: {pathname}</li>
        <li>Route: {route}</li>
      </ul>
    </div>
  );
};

export default ProductIdPage;
