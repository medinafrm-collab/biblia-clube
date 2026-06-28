import type { Metadata } from "next";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { Footer } from "@/components/Footer";
import { FutureSection } from "@/components/FutureSection";
import { GamesSection } from "@/components/GamesSection";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { PremiumSection } from "@/components/PremiumSection";
import { Quiz } from "@/components/Quiz";

const title = "Jogos Bíblicos Grátis e Quiz Bíblico Online | Bíblia Clube";
const description =
  "Jogue quiz bíblico grátis online, escolha desafios por tema e aprenda com perguntas, respostas e referências bíblicas.";

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
      "@id": "https://bibliaclube.com.br/#organization",
      name: "Bíblia Clube",
      url: "https://bibliaclube.com.br",
      logo: {
        "@type": "ImageObject",
        url: "https://bibliaclube.com.br/icon.svg",
      },
      email: "bibliaclubeweb@gmail.com",
    },
    {
      "@type": "WebSite",
      "@id": "https://bibliaclube.com.br/#website",
      url: "https://bibliaclube.com.br",
      name: "Bíblia Clube",
      description,
      inLanguage: "pt-BR",
      publisher: {
        "@id": "https://bibliaclube.com.br/#organization",
      },
    },
    {
      "@type": "WebApplication",
      "@id": "https://bibliaclube.com.br/#app",
      name: "Bíblia Clube",
      alternateName: "Quiz Bíblico Grátis",
      url: "https://bibliaclube.com.br/#quiz",
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
        "@id": "https://bibliaclube.com.br/#organization",
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
        <AdPlaceholder />
        <Quiz />
        <GamesSection />
        <PremiumSection />
        <FutureSection />
      </main>
      <Footer />
    </>
  );
}
