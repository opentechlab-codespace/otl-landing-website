"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface TopicItem {
  title: string;
  items: string[];
}

interface CourseCardProps {
  icon: React.ReactNode;
  title: string;
  slug: string;
  description: string;
  topics: TopicItem[];
}

export default function CourseCard({ icon, title, slug, description, topics }: CourseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-secondary/50 p-8 rounded-xl"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 bg-primary/10 rounded-lg">
          {icon}
        </div>
        <div>
          <h2 className="text-2xl font-bold">{title}</h2>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {topics.map((topic, i) => (
          <div key={i} className="bg-background p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">{topic.title}</h3>
            <ul className="space-y-3">
              {topic.items.map((item, j) => (
                <li key={j} className="flex items-start gap-2 text-muted-foreground">
                  <span className="text-primary mt-1">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-end">
        <Link href={`/academy/${slug}`}>
          <Button>
            Explore {title}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}