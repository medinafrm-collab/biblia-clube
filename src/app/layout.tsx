import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://bibliaclube.com.br"),
  title: {
    default: "Bíblia Clube — Jogos e Dinâmicas Bíblicas",
    template: "%s | Bíblia Clube",
  },
  description:
    "Quizzes, jogos e dinâmicas bíblicas para grupos, igrejas, células, famílias e todos que desejam aprender mais sobre a Bíblia de forma leve e divertida.",
  keywords: [
    "quiz bíblico",
    "jogos bíblicos",
    "dinâmicas bíblicas",
    "jovens cristãos",
    "células",
    "escola bíblica",
  ],
  authors: [{ name: "Bíblia Clube" }],
  creator: "Bíblia Clube",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://bibliaclube.com.br",
    siteName: "Bíblia Clube",
    title: "Bíblia Clube — Jogos e Dinâmicas Bíblicas",
    description:
      "Aprenda, jogue e se conecte com a Bíblia de um jeito leve e divertido.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bíblia Clube — Jogos e Dinâmicas Bíblicas",
    description:
      "Quizzes, jogos e dinâmicas bíblicas para aprender de forma leve.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
