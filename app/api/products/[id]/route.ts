// app/api/products/[id]/route.ts

import { NextResponse } from "next/server";

// Define your handler with the correct types
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  // Your logic to handle the product fetching
  const product = await getProductById(id);

  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  return NextResponse.json({ product });
}

// Example function to simulate fetching a product by id
async function getProductById(id: string) {
  // Your database logic or external API logic
  return { id, name: "Example Product", price: 19.99 }; // Example response
}
