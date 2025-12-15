"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Validation Yup
const schema = yup.object().shape({
  name: yup.string().required("Votre nom est requis"),
  email: yup
    .string()
    .email("Email invalide")
    .required("Votre email est requis"),
  message: yup
    .string()
    .min(10, "Le message doit contenir au moins 10 caractères")
    .required("Message obligatoire"),
});

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Message envoyé :", data);
    alert("Votre message a été envoyé avec succès !");
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg space-y-5"
    >
      <h1 className="text-3xl font-bold text-center mb-3">Contactez-nous</h1>

      <div>
        <label className="block mb-1 font-medium">Nom complet</label>
        <input
          type="text"
          {...register("name")}
          className={`w-full p-3 border rounded-lg ${
            errors.name ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Votre nom"
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label className="block mb-1 font-medium">Email</label>
        <input
          type="email"
          {...register("email")}
          className={`focus:border-primary focus:ring-primary w-full p-3  border rounded-lg ${
            errors.email ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Votre email"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label className="block mb-1 font-medium">Message</label>
        <textarea
          {...register("message")}
          rows="5"
          className={`w-full p-3 border rounded-lg ${
            errors.message ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Votre message..."
        />
        {errors.message && (
          <p className="text-red-500 text-sm">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-black text-white p-3 rounded-lg font-semibold hover:bg-primary"
      >
        Envoyer
      </button>
    </form>
  );
}
