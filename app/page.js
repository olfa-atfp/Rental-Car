import Image from "next/image";
import AvisClientCard from "./components/clients/AvisClientCard";
/*import { popularCars } from "./data/popularCars";*/
import { testimonials } from "./data/testimonial";
import { Star } from "lucide-react";
import PopularCars from "./components/cars/PopularCars";
import ProductCard from "./components/productcard";
async function getPopularCars() {
  const res = await fetch("http://localhost:3000/api/cars/popular", {
    cache: "no-store",
  });
  return res.json();
}

export default async function HomePage() {
  const popularCars = await getPopularCars();
  const res = await fetch("http://localhost:3000/api/reviews", {
    cache: "no-store",
  });

  const reviews = await res.json();
  return (
    <div>
      <section className="relative flex items-start justify-start px-10 h-screen pt-50 pl-40">
        {/* Image en arrière-plan */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-90 z-0"
          style={{ backgroundImage: "url('/images/images.jpeg')" }}
        ></div>

        {/* Contenu au-dessus */}
        <div className="relative z-10 p-8 mb-0 flex flex-col gap-4 text-secondary items-start">
          <h1 className="text-4xl font-bold">Bienvenue sur notre site</h1>

          <p className="text-lg text-p max-w-md">
            Découvrez nos voitures, nos services et profitez d’une expérience
            simple, rapide et moderne pour réserver votre véhicule.
          </p>

          <div className="flex gap-4 text-p">
            <a
              href="/contact"
              className="px-6 py-3 bg-text hover:text-primary rounded"
            >
              Contact
            </a>

            <a
              href="/cars"
              className="px-6 py-3 bg-text hover:text-primary rounded"
            >
              Cars
            </a>
          </div>
        </div>
      </section>

      <PopularCars />
      <section className="py-20 px-10 bg-black text-white">
        <h2 className="text-4xl font-bold text-center mb-12">
          Nos Avis Clients
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-gray-900 p-6 shadow-lg rounded-xl border border-gray-700 hover:scale-105 transition duration-300"
            >
              {/* ⭐ Étoiles */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="text-yellow-400 fill-yellow-400"
                  />
                ))}

                {[...Array(5 - review.rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-gray-600" />
                ))}
              </div>

              {/* Commentaire */}
              <p className="text-gray-300 mb-4">{review.comment}</p>

              {/* Nom */}
              <h3 className="font-semibold text-lg">{review.name}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
