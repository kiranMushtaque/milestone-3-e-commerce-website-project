import { NextResponse } from "next/server";

const products = [
  {
    id: 1,
    title: "Chicken Burger",
    price: 5.99,
    description: "Tasty burger",
    src: "/3-removebg-preview.png",
  },
  {
    id: 2,
    title: "Zinger Burger",
    price: 6.99,
    description: "Crispy zinger",
    src: "/2-removebg-preview.png",
  },
  {
    id: 3,
    title: "Chicken Bucket",
    price: 15.99,
    description: "Crispy chicken bucket",
    src: "/bucket-removebg-preview.png",
  },
];

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const product = products.find((p) => p.id === parseInt(params.id));
  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }
  return NextResponse.json(product);
}
