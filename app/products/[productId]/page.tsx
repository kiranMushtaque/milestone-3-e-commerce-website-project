import React from "react";

const ProductDetails = async ({
  params,
}: {
  params: { productId: string };
}) => {
  const res = await fetch(`/api/products/${params.productId}`);
  const product = await res.json();

  if (!product) return <p>Product not found!</p>;

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold">{product.title}</h1>
      <p>{product.description}</p>
      <p className="text-2xl font-bold">Price: ${product.price}</p>
    </div>
  );
};

export default ProductDetails;
