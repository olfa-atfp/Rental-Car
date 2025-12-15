import ContactForm from "../components/form/ContactForm";
export const metadata = {
  title: "Contact | Location de voitures en Tunisie",
  description:
    "Contactez-nous pour toute demande de location de voitures en Tunisie. Nous sommes à votre écoute.",
};
export default function ContactPage() {
  return (
    <div className="py-10 px-6">
      <ContactForm />
    </div>
  );
}
