"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface MilestoneProps {
  year: string;
  title: string;
  description: string;
  image: string;
  index: number;
  isLeft: boolean;
}

export function Milestone({ year, title, description, image, index, isLeft }: MilestoneProps) {
  return (
    <div className="relative">
      {/* Dot on timeline */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ 
          duration: 0.5,
          delay: 0.2,
          type: "spring",
          stiffness: 200,
          damping: 20
        }}
        viewport={{ once: true, margin: "-100px" }}
        className="absolute left-1/2 top-24 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full"
      />

      <div className={`flex items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'} gap-8`}>
        {/* Content */}
        <motion.div
          initial={{ 
            opacity: 0,
            x: isLeft ? -100 : 100,
            y: 50
          }}
          whileInView={{ 
            opacity: 1,
            x: 0,
            y: 0
          }}
          transition={{ 
            duration: 0.8,
            delay: 0.3,
            type: "spring",
            stiffness: 100,
            damping: 20
          }}
          viewport={{ once: true, margin: "-100px" }}
          className="w-1/2 p-6"
        >
          <span className="text-primary font-bold text-xl mb-2 block">{year}</span>
          <h3 className="text-2xl font-bold mb-4">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ 
            opacity: 0,
            scale: 0.8,
            x: isLeft ? 100 : -100,
            y: 50
          }}
          whileInView={{ 
            opacity: 1,
            scale: 1,
            x: 0,
            y: 0
          }}
          transition={{ 
            duration: 0.8,
            delay: 0.4,
            type: "spring",
            stiffness: 100,
            damping: 20
          }}
          viewport={{ once: true, margin: "-100px" }}
          className="w-1/2 relative h-[300px] rounded-xl overflow-hidden group"
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-80" />
        </motion.div>
      </div>
    </div>
  );
}