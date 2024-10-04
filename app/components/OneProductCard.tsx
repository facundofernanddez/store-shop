import Image from "next/image";
import { IProducts } from "../interface/products";

export default function OneProductCard({ product }: { product: IProducts }) {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <Image
          className="w-full h-56"
          width={24}
          height={24}
          src={product.image}
          alt={product.title}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{product.title}</div>
          <p className="text-gray-700 text-base">{product.description}</p>
          <p className="text-gray-500 text-sm">Price: ${product.price}</p>
        </div>
      </div>
    </div>
  );
}
