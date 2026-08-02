import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { FutureSection } from "@/components/FutureSection";
import { GamesSection } from "@/components/GamesSection";
import { GuidesPreviewSection } from "@/components/GuidesPreviewSection";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { PremiumSection } from "@/components/PremiumSection";

const title = "Jogos Bíblicos Grátis e Quiz Online | Bíblia Clube";
const description =
  "Jogue quiz grátis online, escolha desafios por tema e aprenda com perguntas, respostas e referências.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Bíblia Clube",
    title,
    description,
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.bibliaclube.com.br/#organization",
      name: "Bíblia Clube",
      url: "https://www.bibliaclube.com.br",
      logo: {
        "@type": "ImageObject",
        url: "https://www.bibliaclube.com.br/icon.svg",
      },
      email: "bibliaclubeweb@gmail.com",
      sameAs: ["https://www.instagram.com/bibliaclube.br/"],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.bibliaclube.com.br/#website",
      url: "https://www.bibliaclube.com.br",
      name: "Bíblia Clube",
      description,
      inLanguage: "pt-BR",
      publisher: {
        "@id": "https://www.bibliaclube.com.br/#organization",
      },
    },
    {
      "@type": "WebApplication",
      "@id": "https://www.bibliaclube.com.br/#app",
      name: "Bíblia Clube",
      alternateName: "Quiz Bíblico Grátis",
      url: "https://www.bibliaclube.com.br/quiz-biblico",
      description,
      applicationCategory: "GameApplication",
      operatingSystem: "Qualquer dispositivo com navegador",
      inLanguage: "pt-BR",
      isAccessibleForFree: true,
      offers: {
        "@type": "Offer",
        price: 0,
        priceCurrency: "BRL",
      },
      publisher: {
        "@id": "https://www.bibliaclube.com.br/#organization",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <GamesSection />
        <GuidesPreviewSection />
        <PremiumSection />
        <FutureSection />
      </main>
      <Footer />
    </>
  );
}
