/*Version fichier data et composant client
"use client"; // nécessaire pour utiliser useParams côté client

import { useParams } from "next/navigation";
import { cars } from "../../data/cars"; // chemin vers ton fichier cars.js
import Link from "next/link";

export default function CarDetailPage() {
  const { id } = useParams(); // récupère l'id depuis l'URL

  // recherche la voiture correspondante
  const car = cars.find((c) => c.id === id || c.id === Number(id));

  if (!car) {
    return (
      <div className="text-center mt-20 text-3xl font-bold">
        Voiture introuvable
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
    
      <img
        src={car.image}
        alt={car.name}
        className="w-full h-96 object-cover rounded-2xl shadow-lg"
      />

    
      <h1 className="text-4xl font-bold mt-6">{car.name}</h1>
      <p className="text-gray-600 mt-3">{car.desc}</p>

      <p className="text-3xl font-semibold text-primary mt-4">
        {car.price} TND / jour
      </p>

      <div className="mt-6 grid grid-cols-3 gap-4 text-gray-700">
        <p>
          <strong>Année :</strong> {car.year}
        </p>
        <p>
          <strong>Carburant :</strong> {car.fuel}
        </p>
        <p>
          <strong>Places :</strong> {car.seats}
        </p>
        <p>
          <strong>Catégorie :</strong> {car.category}
        </p>
        <p>
          <strong>Couleur :</strong> {car.color}
        </p>
        <p>
          <strong>Matricule :</strong> {car.matricule}
        </p>
      </div>

      
      <div className="mt-8 flex gap-4">
        <button className="bg-text text-white px-6 py-3 rounded-xl hover:bg-primary transition">
          Réserver maintenant
        </button>
        <Link
          href="/cars"
          className="bg-gray-300 text-gray-800 px-6 py-3 rounded-xl hover:bg-gray-400 transition"
        >
          Retour à la liste
        </Link>
      </div>
    </div>
  );
}
*/
// Client Component pour afficher les détails d'une voiture apartir d'un API
// app/cars/[id]/page.js
/*"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function CarDetailPage() {
  const params = useParams();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Vérifier que params.id existe
    const id = params?.id;

    if (!id) {
      setError("ID manquant");
      setLoading(false);
      return;
    }

    console.log("Fetching car with ID:", id); // Debug

    fetch(`/api/cars/${id}`)
      .then((res) => {
        console.log("Response status:", res.status); // Debug
        if (!res.ok) {
          throw new Error(`Erreur ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("Data received:", data); // Debug
        setCar(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err); // Debug
        setError(err.message);
        setLoading(false);
      });
  }, [params?.id]);

  if (loading) return <div> Chargement...</div>;
  if (error) return <div> Erreur : {error}</div>;
  if (!car) return <div>Aucune voiture trouvée</div>;

  return (
    <div className="p-8">
      <img src={car.image} alt={car.name} className="w-full max-w-2xl mb-4" />
      <h1 className="text-3xl font-bold">{car.name}</h1>
      <p className="text-gray-600">{car.category}</p>
      <p className="text-xl">Couleur: {car.color}</p>
      <p className="text-xl">Matricule: {car.matricule}</p>
      <p className="text-2xl font-bold text-primary mt-4">
        {car.price} DT / jour
      </p>
      <Link href={`/cars/${car.id}/reservation`}>
        <button className="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-4 px-6 rounded-xl transition shadow-lg">
          Réserver maintenant
        </button>
      </Link>
    </div>
  );
}*/
//  Server component pour afficher les détails d'une voiture apartir d'un API app/cars/[id]/page.js
import Link from "next/link";
export async function generateMetadata({ params }) {
  const { id } = await params;

  const res = await fetch(
    `${
      process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
    }/api/cars/${id}`,
    { cache: "no-store" }
  );

  const car = await res.json();

  return {
    title: `${car.name} - Location`,
    description: `Réservez ${car.name}`,
  };
}
export default async function CarDetailPage({ params }) {
  //  Await params (Next.js 15+)
  const { id } = await params;

  if (!id) {
    return <div className="p-8">ID manquant</div>;
  }

  console.log("Fetching car with ID:", id); // Debug

  // Fetch côté serveur
  const res = await fetch(
    `${
      process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
    }/api/cars/${id}`,
    {
      cache: "no-store",
    }
  );

  console.log("Response status:", res.status); // Debug

  if (!res.ok) {
    return (
      <div className="p-8">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          Erreur : Impossible de charger la voiture (Status: {res.status})
        </div>
      </div>
    );
  }

  const car = await res.json();
  console.log("Car data:", car); // Debug

  if (!car) {
    return <div className="p-8">Aucune voiture trouvée</div>;
  }

  return (
    <div className="p-8">
      <img
        src={car.image}
        alt={car.name}
        className="w-full max-w-2xl mb-4 rounded-lg"
      />
      <h1 className="text-3xl font-bold">{car.name}</h1>
      <p className="text-gray-600">{car.category}</p>
      <p className="text-xl">Couleur: {car.color}</p>
      <p className="text-xl">Matricule: {car.matricule}</p>
      <p className="text-2xl font-bold text-primary mt-4">
        {car.price} DT / jour
      </p>

      <Link href={`/cars/${car.id}/reservation`}>
        <button className="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-4 px-6 rounded-xl transition shadow-lg mt-6">
          Réserver maintenant
        </button>
      </Link>
    </div>
  );
}
