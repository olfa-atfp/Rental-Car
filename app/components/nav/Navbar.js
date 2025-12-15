import Link from "next/link";

export default function Navbar() {
  return (
    <nav className=" text-p p-4">
      <ul className="flex gap-6">
        <li>
          <Link href="/" className="hover:text-secondary">
            Home
          </Link>
        </li>
        <li>
          <Link href="/cars" className="hover:text-secondary">
            Cars
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-secondary">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
