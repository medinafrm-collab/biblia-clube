import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { GroupMode } from "@/components/GroupMode";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Modo Grupo — Quiz Bíblico para Equipes",
  description:
    "Crie equipes, escolha um tema e jogue quiz bíblico em grupo com turnos, cronômetro, rebote e placar.",
  alternates: { canonical: "/modo-grupo" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/modo-grupo",
    title: "Modo Grupo — Quiz Bíblico para Equipes",
    description:
      "Quiz bíblico para famílias, células e grupos jogarem no mesmo aparelho.",
  },
};

export default function ModoGrupoPage() {
  return (
    <>
      <Header />
      <main>
        <GroupMode />
      </main>
      <Footer />
    </>
  );
}
