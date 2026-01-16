"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";

const topics = [
  "All",
  "Diversity & Inclusion",
  "Tech companies",
  "Crypto",
  "Security",
  "Global",
  "Leaks",
];

export function TopicFilters() {
  const [selectedTopics, setSelectedTopics] = useState<string[]>([
    "All",
    "Tech companies",
  ]);

  const toggleTopic = (topic: string) => {
    if (topic === "All") {
      setSelectedTopics(["All"]);
      return;
    }

    setSelectedTopics((prev) => {
      const withoutAll = prev.filter((t) => t !== "All");
      if (prev.includes(topic)) {
        const newSelection = withoutAll.filter((t) => t !== topic);
        return newSelection.length === 0 ? ["All"] : newSelection;
      }
      return [...withoutAll, topic];
    });
  };

  return (
    <section className="mb-8">
      <div className="flex items-center gap-2 flex-nowrap overflow-x-auto hide-scrollbar md:flex-wrap md:overflow-x-visible">
        <span className="text-lg font-bold mr-2">Topics</span>
        {topics.map((topic) => {
          const isSelected = selectedTopics.includes(topic);
          return (
            <Badge
              key={topic}
              variant={isSelected ? "default" : "outline"}
              onClick={() => toggleTopic(topic)}
              className="py-2.5 px-5 cursor-pointer"
            >
              {topic}
              {isSelected && topic !== "All" && <X className="!size-4 ml-1" />}
            </Badge>
          );
        })}
      </div>
    </section>
  );
}
