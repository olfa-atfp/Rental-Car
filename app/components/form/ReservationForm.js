"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

// Schéma de validation
const schema = Yup.object().shape({
  name: Yup.string().required("Le nom est obligatoire"),
  email: Yup.string()
    .email("Email invalide")
    .required("L’email est obligatoire"),
  date: Yup.date().required("La date est obligatoire"),
});

export default function ReservationForm({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-lg mx-auto bg-white shadow-md rounded p-6 space-y-4"
    >
      {/* Nom */}
      <div>
        <label className="block text-sm font-medium">Nom complet</label>
        <input
          type="text"
          {...register("name")}
          className={`mt-1 block w-full p-2 border ${
            errors.name ? "border-red-500" : "border-gray-300"
          } rounded`}
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium">Email</label>
        <input
          type="email"
          {...register("email")}
          className={`mt-1 block w-full p-2 border ${
            errors.email ? "border-red-500" : "border-gray-300"
          } rounded`}
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>

      {/* Date */}
      <div>
        <label className="block text-sm font-medium">Date de réservation</label>
        <input
          type="date"
          {...register("date")}
          className={`mt-1 block w-full p-2 border ${
            errors.date ? "border-red-500" : "border-gray-300"
          } rounded`}
        />
        {errors.date && (
          <p className="text-red-500 text-sm">{errors.date.message}</p>
        )}
      </div>

      {/* Bouton */}
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Réserver
      </button>
    </form>
  );
}
