"use client";

import Image from "next/image";
import { IProducts } from "../interface/products";
import { MouseEvent, useContext } from "react";
import { TotalPriceContext } from "./provider/TotalPriceProvider";

export default function OneProductCard({ product }: { product: IProducts }) {
  const { totalPrice, setTotalPrice } = useContext(TotalPriceContext);

  const handleClick = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
    price: number
  ) => {
    e.preventDefault();

    setTotalPrice(totalPrice + price);
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-xl rounded overflow-hidden shadow-lg">
        <div className="grid grid-cols-2">
          <Image
            className="w-full p-2 flex items-center justify-center"
            width={24}
            height={24}
            src={product.image}
            alt={product.title}
          />
          <div className="px-6 py-6">
            <div className="font-bold text-xl mb-2">{product.title}</div>
            <p className="text-gray-700 text-base">{product.description}</p>
            <p className="text-gray-500 text-md">Price: ${product.price}</p>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
              onClick={(e) => handleClick(e, product.price)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
