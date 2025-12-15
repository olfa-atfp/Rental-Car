import { NextResponse } from "next/server";

const cars = [
  {
    id: 1,
    image: "/cars/car1.jpeg",
    name: "BMW",
    category: "Golden Thunder",
    color: "Black",
    matricule: "210 TN 5050",
    price: 350,
  },
  {
    id: 2,
    image: "/cars/car2.jpeg",
    name: "Rolls Royce",
    category: "La Rose Noir",
    color: "Red",
    matricule: "150 TN 9999",
    price: 400,
  },
  {
    id: 3,
    image: "/cars/car3.jpeg",
    name: "Alpha Romeo",
    category: "Tonale",
    color: "Green",
    matricule: "220 TN 2040",
    price: 300,
  },
];

export async function GET(request, { params }) {
  try {
    // Await params
    const { id: paramId } = await params;
    const id = parseInt(paramId, 10);

    console.log("API: Recherche voiture ID:", id);

    if (isNaN(id)) {
      console.log(" API: ID invalide");
      return NextResponse.json({ error: "ID invalide" }, { status: 400 });
    }

    const car = cars.find((c) => c.id === id);

    if (!car) {
      console.log(" API: Voiture non trouvée");
      return NextResponse.json(
        { error: "Voiture non trouvée" },
        { status: 404 }
      );
    }

    console.log(" API: Voiture trouvée:", car);
    return NextResponse.json(car);
  } catch (error) {
    console.error(" API Error:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
