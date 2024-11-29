import { NextResponse } from "next/server";

const products = [
  {
    src: "/3-removebg-preview.png",
    title: "Chicken Burger",
    description: "Indulge in the ultimate comfort food.",
    price: "$5.99",
  },
  {
    src: "/2-removebg-preview.png",
    title: "Zinger Burger",
    description: "Crispy and delicious for the perfect bite!",
    price: "$6.99",
  },
  {
    src: "/3-removebg-preview.png",
    title: "Crispy Burger",
    description: "Crunchy and savory for the ultimate flavor!",
    price: "$7.99",
  },
  {
    src: "/brost-removebg-preview.png",
    title: "Chicken Broast",
    description: "Indulge in the ultimate comfort food.",
    price: "$5.99",
  },
  {
    src: "/crisp-removebg-preview.png",
    title: "Crispy Chicken",
    description: "Indulge in the ultimate comfort food.",
    price: "$5.99",
  },
  {
    src: "/bucket-removebg-preview.png",
    title: "Chicken Bucket",
    description: "09 Pcs Chicken Bucket (3 Thigh, 3 Legs, 3 Wings).",
    price: "$5.99",
  },
  {
    src: "/drink-removebg-preview.png",
    title: "1 Litre",
    price: "$5.99",
  },
  {
    src: "/ml-removebg-preview.png",
    title: "345 ML",
    price: "$5.99",
  },
];


export async function GET() {
  return NextResponse.json(products);
}
