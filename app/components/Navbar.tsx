import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b">
      <ul className="flex items-center justify-between px-5 py-5 mx-auto lg:px-10">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/products">Products</Link>
        </li>
        <input
          type="text"
          placeholder="Search"
          className="border p-2 rounded"
        />
      </ul>
    </nav>
  );
}
