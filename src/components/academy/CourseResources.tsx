"use client";

import { motion } from "framer-motion";
import { FileText, Video, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Resource {
  type: "document" | "video" | "download";
  title: string;
  description: string;
  url: string;
}

interface CourseResourcesProps {
  resources: Resource[];
}

export default function CourseResources({ resources }: CourseResourcesProps) {
  const getIcon = (type: Resource["type"]) => {
    switch (type) {
      case "document":
        return <FileText className="w-5 h-5" />;
      case "video":
        return <Video className="w-5 h-5" />;
      case "download":
        return <Download className="w-5 h-5" />;
    }
  };

  return (
    <div className="grid md:grid-cols-2 gap-4">
      {resources.map((resource, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="p-4 bg-secondary/50 rounded-lg"
        >
          <div className="flex items-start gap-3">
            <div className="p-2 bg-primary/10 rounded-lg text-primary">
              {getIcon(resource.type)}
            </div>
            <div className="flex-1">
              <h4 className="font-medium mb-1">{resource.title}</h4>
              <p className="text-sm text-muted-foreground mb-3">
                {resource.description}
              </p>
              <Button variant="outline" size="sm" asChild>
                <a href={resource.url} target="_blank" rel="noopener noreferrer">
                  Access Resource
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}