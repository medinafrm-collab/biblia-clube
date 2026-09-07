import type { Metadata } from "next";
import { SiteIntegrations } from "@/components/SiteIntegrations";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bibliaclube.com.br"),
  title: {
    default: "Bíblia Clube — Jogos e Quiz Online",
    template: "%s | Bíblia Clube",
  },
  description:
    "Quiz grátis, jogos online e dinâmicas para aprender mais sobre a Bíblia de forma leve e divertida.",
  authors: [{ name: "Bíblia Clube" }],
  creator: "Bíblia Clube",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.bibliaclube.com.br",
    siteName: "Bíblia Clube",
    title: "Bíblia Clube — Jogos e Quiz Online",
    description:
      "Jogue quiz bíblico grátis e desafios sobre a Bíblia diretamente no navegador.",
  },
  twitter: {
    card: "summary_large_image",
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
    <html lang="pt-BR" data-scroll-behavior="smooth">
      <body>
        {children}
        <SiteIntegrations />
      </body>
    </html>
  );
}
