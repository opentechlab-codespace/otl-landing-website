import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CourseHeader } from "../CourseHeader";
import { CourseTopics } from "../CourseTopics";
import { CourseCardProps } from "@/types/academy";

export default function CourseCard({ icon, title, slug, description, topics }: CourseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-secondary/50 p-8 rounded-xl"
    >
      <CourseHeader icon={icon} title={title} description={description} />
      <CourseTopics topics={topics} />
      
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