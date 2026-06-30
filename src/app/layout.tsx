import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { CookieConsent } from "@/components/CookieConsent";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bibliaclube.com.br"),
  title: {
    default: "Bíblia Clube — Jogos Bíblicos e Quiz Online",
    template: "%s | Bíblia Clube",
  },
  description:
    "Quiz bíblico grátis, jogos bíblicos online e dinâmicas para aprender mais sobre a Bíblia de forma leve e divertida.",
  keywords: [
    "quiz bíblico grátis",
    "quiz bíblico online",
    "jogos bíblicos grátis",
    "jogos bíblicos online",
    "dinâmicas bíblicas",
    "perguntas bíblicas",
    "desafio bíblico",
  ],
  authors: [{ name: "Bíblia Clube" }],
  creator: "Bíblia Clube",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.bibliaclube.com.br",
    siteName: "Bíblia Clube",
    title: "Bíblia Clube — Jogos Bíblicos e Quiz Online",
    description:
      "Jogue quiz bíblico grátis e desafios sobre a Bíblia diretamente no navegador.",
  },
  twitter: {
    card: "summary",
    title: "Bíblia Clube — Jogos Bíblicos e Quiz Online",
    description:
      "Quiz bíblico grátis e jogos online para aprender de forma leve.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8150008386108071"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        {children}
        <CookieConsent />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
