import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { QuizTopicPage } from "@/components/QuizTopicPage";
import { getQuizTopicBySlug, quizTopics } from "@/data/quizTopics";

type QuizThemePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return quizTopics
    .filter((topic) => topic.id !== "geral")
    .map((topic) => ({ slug: topic.path.split("/").at(-1)! }));
}

export async function generateMetadata({
  params,
}: QuizThemePageProps): Promise<Metadata> {
  const { slug } = await params;
  const topic = getQuizTopicBySlug(slug);

  if (!topic || topic.id === "geral") return {};

  return {
    title: topic.title,
    description: topic.description,
    alternates: { canonical: topic.path },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      url: topic.path,
      title: topic.title,
      description: topic.description,
    },
  };
}

export default async function QuizThemePage({ params }: QuizThemePageProps) {
  const { slug } = await params;
  const topic = getQuizTopicBySlug(slug);

  if (!topic || topic.id === "geral") notFound();

  return <QuizTopicPage topic={topic} />;
}
