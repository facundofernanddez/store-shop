"use client";

import Image from "next/image";
import { IProducts } from "../interface/products";
import Link from "next/link";

export default function ProductsCards({ products }: { products: IProducts[] }) {
  return (
    <div className="mx-5 mt-4">
      <div className="grid gap-y-8 gap-x-2 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col border p-1 items-center rounded-lg justify-center h-full text-center"
          >
            <Link href={`/products/${product.id}`}>
              <Image
                src={product.image}
                alt={product.title}
                className="w-32 h-32 object-fill p-1"
                width={24}
                height={24}
              />
              <h2 className="font-semibold line-clamp-1">{product.title}</h2>
              <p className="line-clamp-2 text-gray-600">
                {product.description}
              </p>
            </Link>
            <p>Price: $ {product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
