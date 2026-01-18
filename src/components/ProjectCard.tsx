"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ProjectCardProps {
  image: string;
  title: string;
  category: string;
  description?: string;
}

export default function ProjectCard({ image, title, category, description }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-xl bg-secondary"
    >
      <div className="relative h-[300px] w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      </div>
      <div className="absolute bottom-0 p-6">
        <p className="text-primary mb-2">{category}</p>
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        {description && (
          <p className="text-muted-foreground">{description}</p>
        )}
      </div>
    </motion.div>
  );
}