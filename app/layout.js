import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/header/header";
import Footer from "./components/footer/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});
export const metadata = {
  title: "Location de voitures en Tunisie",
  description: " Louez des voitures au meilleur prix",
  icons: {
    icon: "/car-svgrepo-com.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased m-0 p-0 flex flex-col min-h-screen `}
      >
        <Header />

        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
