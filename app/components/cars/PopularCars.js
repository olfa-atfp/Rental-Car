"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function PopularCars() {
  const [popularCars, setPopularCars] = useState([]);

  useEffect(() => {
    const fetchPopularCars = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/cars/popular", {
          cache: "no-store",
        });
        const data = await res.json();
        setPopularCars(data);
      } catch (error) {
        console.log("Erreur de récupération :", error);
      }
    };

    fetchPopularCars();
  }, []);

  return (
    <section className="p-10">
      <h2 className="text-4xl font-bold mb-8">Voitures Populaires</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {popularCars.map((car) => (
          <div
            key={car.id}
            className="border rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <Image
              src={car.image}
              width={400}
              height={250}
              alt={car.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{car.name}</h3>
              <p className="text-gray-500">{car.category}</p>
              <p className="mt-2 font-bold">{car.price} DT / jour</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
