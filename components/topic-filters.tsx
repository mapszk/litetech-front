"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { X } from "lucide-react"

const topics = ["All", "Diversity & Inclusion", "Tech companies", "Crypto", "Security", "Global", "Leaks"]

export function TopicFilters() {
  const [selectedTopics, setSelectedTopics] = useState<string[]>(["All", "Tech companies"])

  const toggleTopic = (topic: string) => {
    if (topic === "All") {
      setSelectedTopics(["All"])
      return
    }

    setSelectedTopics((prev) => {
      const withoutAll = prev.filter((t) => t !== "All")
      if (prev.includes(topic)) {
        const newSelection = withoutAll.filter((t) => t !== topic)
        return newSelection.length === 0 ? ["All"] : newSelection
      }
      return [...withoutAll, topic]
    })
  }

  return (
    <section className="px-6 mb-8">
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-foreground text-sm mr-2">Topics</span>
        {topics.map((topic) => {
          const isSelected = selectedTopics.includes(topic)
          return (
            <Badge
              key={topic}
              variant={isSelected ? "default" : "secondary"}
              className={`cursor-pointer transition-all text-xs px-3 py-1 ${
                isSelected
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
              onClick={() => toggleTopic(topic)}
            >
              {topic}
              {isSelected && topic !== "All" && <X className="w-3 h-3 ml-1" />}
            </Badge>
          )
        })}
      </div>
    </section>
  )
}
