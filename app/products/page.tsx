import Image from "next/image";

interface productsProps {
  id: string;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

export default async function ProductPage() {
  const products: productsProps[] = await fetch(
    "https://fakestoreapi.com/products"
  ).then((res) => res.json());

  return (
    <div className="flex gap-x-10 mt-5 w-full overflow-x-scroll">
      {products.map((product) => (
        <div
          key={product.id}
          className="flex flex-col items-center w-1/3 p-5"
        >
          <Image
            src={product.image}
            alt={product.title}
            className="w-32 h-32 object-cover"
            width={24}
            height={24}
          />
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>$ {product.price}</p>
        </div>
      ))}
    </div>
  );
}
