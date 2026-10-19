import type { Metadata } from "next";
import { SiteIntegrations } from "@/components/SiteIntegrations";
import { cellDynamics } from "@/data/cellDynamics";
import { editorialArticles } from "@/data/editorialContent";
import { libraryItems } from "@/data/libraryItems";
import "./globals.css";

const adEligiblePaths = [
  "/",
  ...editorialArticles.map((article) => `/biblioteca/${article.slug}`),
  ...cellDynamics.map((dynamic) => `/dinamicas-para-celulas/${dynamic.id}`),
  ...libraryItems.filter((item) => item.type === "Guia").map((item) => item.href),
];

export const metadata: Metadata = {
  verification: { google: "jqSoT54Y_R4s63ZPRGN3k4CDvwvB31Qtn2P4mCu-FD4" },
  other: { "google-adsense-account": "ca-pub-8150008386108071" },
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
        <SiteIntegrations adEligiblePaths={adEligiblePaths} />
      </body>
    </html>
  );
}
