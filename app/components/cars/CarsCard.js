import Link from "next/link";

export default function CarsCard({ car }) {
  if (!car) return null; // protection contre car undefined

  return (
    <article className="overflow-hidden rounded-2xl shadow-lg border transition-transform hover:scale-105 duration-300">
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-48 object-cover transition-transform duration-700 ease-in-out hover:scale-110"
        />
      </div>

      {/* Contenu */}
      <div className="p-5 space-y-2">
        <h3 className="text-xl font-bold text-gray-800">{car.name}</h3>
        <p className="text-gray-600 text-sm">Catégorie : {car.category}</p>
        <p className="text-gray-600 text-sm">Couleur : {car.color}</p>
        <p className="text-gray-800 text-sm font-semibold">
          Matricule : {car.matricule}
        </p>
        {car.price && (
          <p className="text-blue-600 font-semibold">{car.price} TND / jour</p>
        )}

        {/* Bouton Voir détails */}
        <Link
          href={`/cars/${car.id}`}
          className="mt-3 inline-block bg-black text-white px-5 py-2 rounded-xl font-medium hover:bg-gray-900 transition-transform hover:scale-105"
        >
          Voir détails →
        </Link>
      </div>
    </article>
  );
}
