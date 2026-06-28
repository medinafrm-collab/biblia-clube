import type { Metadata } from "next";
import { QuizTopicPage } from "@/components/QuizTopicPage";
import { getQuizTopic } from "@/data/quizTopics";

const topic = getQuizTopic("geral")!;

export const metadata: Metadata = {
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

export default function QuizBiblicoPage() {
  return <QuizTopicPage topic={topic} />;
}
