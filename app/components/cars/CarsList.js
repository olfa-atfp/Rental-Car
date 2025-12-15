import { cars } from "../../data/cars"; // ton fichier cars.js
import CarsCard from "./CarsCard";

export default function CarsList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {cars.map((car) => (
        // Passe l'objet complet `car` en prop
        <CarsCard key={car.id} car={car} />
      ))}
    </div>
  );
}
