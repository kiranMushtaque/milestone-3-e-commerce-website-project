

import { NextResponse } from "next/server";


export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;


  const product = await getProductById(id);

  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  return NextResponse.json({ product });
}


async function getProductById(id: string) {

  return { id, name: "Example Product", price: 19.99 }; 
}
