"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

interface CourseProgressProps {
  totalModules: number;
  completedModules: number;
}

export default function CourseProgress({ totalModules, completedModules }: CourseProgressProps) {
  const progress = (completedModules / totalModules) * 100;

  return (
    <div className="bg-secondary/30 p-4 rounded-lg">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium">Course Progress</span>
        <span className="text-sm text-muted-foreground">
          {completedModules}/{totalModules} modules
        </span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5 }}
          className="h-full bg-primary"
        />
      </div>
      <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
        <CheckCircle className="w-4 h-4 text-primary" />
        <span>{Math.round(progress)}% Complete</span>
      </div>
    </div>
  );
}