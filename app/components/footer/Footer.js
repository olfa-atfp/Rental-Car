import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-text text-p text-center p-6 flex justify-between items-center ">
      {/* Lien contact */}
      <div className="mb-4">
        <Link href="/contact" className=" hover:text-primary">
          Contactez-nous
        </Link>
      </div>

      {/* Réseaux sociaux */}
      <div className="flex justify-center gap-6 mb-4 transition duration-3000 ease-in-out">
        <a
          href="#"
          aria-label="Facebook"
          className="hover:scale-125 text-secondary"
        >
          <FaFacebookF size={24} />
        </a>
        <a
          href="#"
          aria-label="Twitter"
          className="hover:scale-125 text-secondary"
        >
          <FaTwitter size={24} />
        </a>
        <a
          href="#"
          aria-label="Instagram"
          className=" hover:scale-125  text-secondary"
        >
          <FaInstagram size={24} />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-primary">© 2025 Rent Car - Tous droits réservés</p>
    </footer>
  );
}
