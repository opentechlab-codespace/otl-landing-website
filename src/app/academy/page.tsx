"use client";

import { motion } from "framer-motion";
import { Code2, Smartphone, Tool, Brain, Database, ChartBar, Shield, Bitcoin } from "lucide-react";
import CourseCard from "@/components/academy/CourseCard";
import { courses } from "@/data/courses";

export default function AcademyPage() {
  return (
    <div className="min-h-screen bg-background pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Learning Hub</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our comprehensive courses and enhance your technical skills with industry-relevant curriculum and hands-on projects.
          </p>
        </div>

        <div className="grid gap-8">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}