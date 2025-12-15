export async function GET() {
  const reviews = [
    {
      id: 1,
      name: "Ahmed",
      comment: "Service impeccable et voitures en excellent état.",
      rating: 5,
    },
    {
      id: 2,
      name: "Sara",
      comment: "Très bonne expérience, je recommande vivement.",
      rating: 4,
    },
    {
      id: 3,
      name: "Mohamed",
      comment: "Voitures propres et équipe professionnelle.",
      rating: 5,
    },
  ];

  return Response.json(reviews);
}
