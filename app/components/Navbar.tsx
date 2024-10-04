"use client";

import Link from "next/link";
import { useContext } from "react";
import { TotalPriceContext } from "./provider/TotalPriceProvider";

export default function Navbar() {
  const { totalPrice } = useContext(TotalPriceContext);
  const roundedPrice = Math.round((totalPrice + Number.EPSILON) * 100) / 100;

  return (
    <nav className="w-full border-b">
      <ul className="flex items-center justify-between px-5 py-5 mx-auto lg:px-10">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/products">Products</Link>
        </li>
        <li>
          <input
            type="text"
            placeholder="Search"
            className="border p-2 rounded"
          />
        </li>
        <li>
          Cart <span className="font-semibold">${roundedPrice}</span>
        </li>
      </ul>
    </nav>
  );
}
