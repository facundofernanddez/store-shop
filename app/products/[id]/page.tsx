import OneProductCard from "@/app/components/OneProductCard";

export default async function OneProductPage({
  params,
}: {
  params: { id: string };
}) {
  const data = await fetch(
    `https://fakestoreapi.com/products/${params.id}`
  ).then((res) => res.json());
  return <OneProductCard product={data} />;
}
