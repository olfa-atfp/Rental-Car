export async function GET() {
  const popularCars = [
    {
      id: 1,
      image: "/cars/car1.jpeg",
      name: "BMW",
      category: "Golden Thunder",
      color: "Black",
      matricule: "210 TN 5050",
    },
    {
      id: 2,
      image: "/cars/car2.jpeg",
      name: "Rolls Royce",
      category: "La Rose Noir",
      color: "Red",
      matricule: "150 TN 9999",
    },
    {
      id: 3,
      image: "/cars/car3.jpeg",
      name: "Alpha Romeo",
      category: "Tonale",
      color: "Green",
      matricule: "220 TN 2040",
    },
  ];

  return Response.json(popularCars);
}
