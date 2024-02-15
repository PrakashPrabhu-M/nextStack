import React from "react";
import { Badge } from "@/components/ui/badge";

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

const QuestionCard = ({ question }: { question: Question }) => {
  return (
    <div className="flex w-full flex-col rounded-md bg-slate-100 p-5 dark:bg-slate-800">
      <h2 className="h2-bold">{question.title}</h2>
      <div className="m-2 flex space-x-2">
        {question.tags.map((tag) => (
          <Badge
            key={tag._id}
            className="subtle-medium w-min cursor-pointer rounded-md
          border-none bg-light-700 px-4 py-2 uppercase"
          >
            {tag.name}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
