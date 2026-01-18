"use client";

import { motion } from "framer-motion";
import { Book, CheckCircle, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Module {
  title: string;
  duration: string;
  isCompleted: boolean;
  isLocked: boolean;
}

interface ModuleListProps {
  modules: Module[];
}

export default function ModuleList({ modules }: ModuleListProps) {
  return (
    <div className="space-y-4">
      {modules.map((module, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className={`p-4 rounded-lg border ${
            module.isCompleted
              ? "bg-primary/10 border-primary/20"
              : "bg-secondary/50 border-secondary"
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {module.isCompleted ? (
                <CheckCircle className="w-5 h-5 text-primary" />
              ) : module.isLocked ? (
                <Lock className="w-5 h-5 text-muted-foreground" />
              ) : (
                <Book className="w-5 h-5 text-muted-foreground" />
              )}
              <div>
                <h4 className="font-medium">{module.title}</h4>
                <p className="text-sm text-muted-foreground">{module.duration}</p>
              </div>
            </div>
            <Button
              variant={module.isCompleted ? "outline" : "default"}
              disabled={module.isLocked}
            >
              {module.isCompleted ? "Review" : module.isLocked ? "Locked" : "Start"}
            </Button>
          </div>
        </motion.div>
      ))}
    </div>
  );
}