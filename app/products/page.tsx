import { IProducts } from "../interface/products";
import ProductsCards from "../components/ProductsCards";

export default async function ProductPage() {
  const products: IProducts[] = await fetch(
    "https://fakestoreapi.com/products"
  ).then((res) => res.json());

  return <ProductsCards products={products} />;
}
