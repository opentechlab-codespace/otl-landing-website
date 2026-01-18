"use client";

import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { courses } from "@/data/courses";
import { courseModules } from "@/data/courseModules";
import { courseResources } from "@/data/courseResources";
import CourseProgress from "@/components/academy/CourseProgress";
import ModuleList from "@/components/academy/ModuleList";
import CourseResources from "@/components/academy/CourseResources";

export default function CourseDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  const course = courses.find(c => c.slug === slug);
  const modules = courseModules[slug as keyof typeof courseModules] || [];
  const resources = courseResources[slug as keyof typeof courseResources] || [];

  if (!course) {
    return (
      <div className="min-h-screen bg-background pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold">Course Not Found</h1>
        </div>
      </div>
    );
  }

  const completedModules = modules.filter(m => m.isCompleted).length;

  return (
    <div className="min-h-screen bg-background pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">{course.title}</h1>
          <p className="text-xl text-muted-foreground mb-8">{course.description}</p>
          <CourseProgress
            totalModules={modules.length}
            completedModules={completedModules}
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-6">Course Modules</h2>
            <ModuleList modules={modules} />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-6">Resources</h2>
            <CourseResources resources={resources} />
          </div>
        </div>
      </motion.div>
    </div>
  );
}