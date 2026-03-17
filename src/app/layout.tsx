import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Anusaya Care (AHCS) | 24/7 Home Nursing & Care in Pune",
  description:
    "Anusaya Care — Care You Can Trust at Home. Professional 24/7 nursing, elderly care, baby care, physiotherapy & ambulance services in Pune & PCMC.",
  keywords: [
    "Anusaya Care",
    "AHCS",
    "home nursing Pune",
    "healthcare services Pimpri-Chinchwad",
    "patient care taker Pune",
    "elderly care Pune",
    "baby care services Pune",
    "physiotherapy at home Pune",
    "ambulance service Pune",
    "24/7 nursing care",
  ],
  openGraph: {
    title: "Anusaya Care (AHCS) | Care You Can Trust at Home",
    description:
      "Trusted home healthcare services in Pune & PCMC. Patient care, nursing, elderly care, baby care & more.",
    type: "website",
    locale: "en_IN",
    siteName: "Anusaya Care",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-gray-800 antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <ScrollReveal />
      </body>
    </html>
  );
}
