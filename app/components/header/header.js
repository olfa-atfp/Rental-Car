import { FaCar } from "react-icons/fa";
import Navbar from "../nav/Navbar";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-text flex justify-between items-center p-6 shadow ">
      <Link href="/" className="flex items-center gap-2 text-xl font-bold">
        <FaCar className="text-yellow-300 w-6 h-6" />
        <span className="text-primary">MyCarRental</span>
      </Link>

      <Navbar />
    </header>
  );
}
