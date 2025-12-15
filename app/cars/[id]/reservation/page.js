"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import ReservationForm from "@/app/components/form/ReservationForm";

export default function ReservationPage() {
  const params = useParams();
  const router = useRouter();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Charger les données de la voiture
  useEffect(() => {
    const id = params?.id;

    if (!id) {
      setError("ID manquant");
      setLoading(false);
      return;
    }

    fetch(`/api/cars/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Voiture non trouvée");
        }
        return res.json();
      })
      .then((data) => {
        setCar(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [params?.id]);

  // Gérer la soumission du formulaire
  const handleReservationSubmit = (data) => {
    console.log("Données de réservation :", data);
    console.log("Voiture :", car);

    // Calculer les jours et le total
    const debut = new Date(data.dateDebut);
    const fin = new Date(data.dateFin);
    const jours = Math.ceil((fin - debut) / (1000 * 60 * 60 * 24));
    const total = jours * car.price;

    // Afficher une confirmation
    alert(
      ` Réservation confirmée !\n\n` +
        `Voiture: ${car.name}\n` +
        `Nom: ${data.nom}\n` +
        `Email: ${data.email}\n` +
        `Du: ${data.dateDebut}\n` +
        `Au: ${data.dateFin}\n` +
        `Durée: ${jours} jours\n` +
        `Total: ${total} DT\n\n` +
        `Nous vous contacterons bientôt !`
    );

    // Rediriger vers la liste des voitures
    router.push("/cars");
  };

  // États de chargement et d'erreur
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Chargement...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="text-6xl mb-4">❌</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{error}</h2>
          <Link href="/cars" className="text-blue-600 hover:underline">
            ← Retour à la liste
          </Link>
        </div>
      </div>
    );
  }

  if (!car) return null;

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* En-tête */}
        <Link
          href={`/cars/${car.id}`}
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6 transition"
        >
          <span className="mr-2">←</span>
          Retour aux détails
        </Link>

        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Réserver {car.name}
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Carte de la voiture */}
          <div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden sticky top-6">
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {car.name}
                </h2>
                <p className="text-gray-600 mb-4">{car.category}</p>

                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <span className="mr-2">🎨</span>
                    <span>Couleur: {car.color}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">📋</span>
                    <span>Matricule: {car.matricule}</span>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-3xl font-bold text-blue-600">
                    {car.price} DT
                    <span className="text-lg text-gray-600 ml-2">/ jour</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulaire de réservation */}
          <div>
            <ReservationForm car={car} onSubmit={handleReservationSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
}
