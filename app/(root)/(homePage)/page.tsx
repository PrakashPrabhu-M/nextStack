"use client";
import Filters from "@/components/shared/Filters";
import LocalSearch from "@/components/shared/search/LocalSearch";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { HomePageFilter } from "@/constants/filters";
import QuestionCard from "@/components/HomePage/QuestionCard";

interface Question {
  _id: string;
  title: string;
  author: string;
  tags: { _id: string; name: string }[];
  upvotes: number;
  downvotes: number;
  views: number;
  answers: number;
  createdAt: Date;
}

const questions: Question[] = [
  {
    _id: "1",
    title: "How to learn TypeScript?",
    author: "Alice",
    tags: [
      { _id: "tag1", name: "TypeScript" },
      { _id: "tag2", name: "Programming" },
    ],
    upvotes: 10,
    downvotes: 2,
    views: 150,
    answers: 5,
    createdAt: new Date("2023-01-15"),
  },
  {
    _id: "2",
    title: "Best practices for React hooks?",
    author: "Bob",
    tags: [
      { _id: "tag3", name: "React" },
      { _id: "tag4", name: "JavaScript" },
    ],
    upvotes: 20,
    downvotes: 1,
    views: 200,
    answers: 8,
    createdAt: new Date("2023-02-28"),
  },
  {
    _id: "3",
    title: "How to deploy Node.js app on AWS?",
    author: "Charlie",
    tags: [
      { _id: "tag5", name: "Node.js" },
      { _id: "tag6", name: "AWS" },
    ],
    upvotes: 15,
    downvotes: 3,
    views: 180,
    answers: 6,
    createdAt: new Date("2023-04-10"),
  },
  // Add more questions as needed
];

export default function Home() {
  const router = useRouter();
  return (
    <main className="flex flex-col gap-4 p-6">
      <div className="flex flex-col-reverse items-center gap-4 xs:flex-row xs:justify-between">
        <h1 className="h1-bold dark:text-white">All Questions </h1>
        <Button className="btn" onClick={() => router.push("/ask-question")}>
          Ask a question
        </Button>
      </div>
      <div className="flex max-w-full flex-col items-center justify-between gap-2 md:flex-row lg:flex-col">
        <LocalSearch
          iconPosition="left"
          placeholder="local search"
          className="min-w-full grow md:min-w-min lg:min-w-full"
        />
        <Filters
          className="max-md:min-w-full lg:hidden"
          values={HomePageFilter}
        />
        <div className="mt-2 hidden flex-wrap justify-between gap-2 lg:flex lg:w-2/3">
          {HomePageFilter.map((item) => (
            <Badge
              key={item.value}
              className="subtle-medium cursor-pointer rounded-md border-none bg-light-700 px-4 py-2 uppercase"
            >
              {item.value}
            </Badge>
          ))}
        </div>
      </div>
      <div className="mt-5 flex flex-col items-center space-y-2">
        {questions.length !== 0 ? (
          questions.map((question) => (
            <QuestionCard key={question._id} question={question} />
          ))
        ) : (
          <h2 className="text-2xl">No Results found</h2>
        )}
      </div>
    </main>
  );
}
