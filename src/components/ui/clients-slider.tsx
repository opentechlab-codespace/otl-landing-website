"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Client } from "@/types/clients";

interface ClientsSliderProps {
  clients: Client[];
  speed?: number;
  direction?: "left" | "right";
}

export function ClientsSlider({ 
  clients, 
  speed = 30,
  direction = "left" 
}: ClientsSliderProps) {
  const animate = direction === "left" 
    ? { x: [0, -1920] }
    : { x: [-1920, 0] };

  return (
    <div className="relative overflow-hidden py-12">
      <motion.div
        className="flex gap-8"
        animate={animate}
        transition={{
          x: {
            duration: speed,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        {[...clients, ...clients].map((client, index) => (
          <motion.div
            key={`${client.name}-${index}`}
            whileHover={{ y: -5 }}
            className="flex-shrink-0 w-48 h-24 bg-secondary/30 rounded-lg p-4 backdrop-blur-sm flex items-center justify-center group hover:bg-secondary/50 transition-all duration-300"
          >
            <div className="relative w-full h-full">
              <Image
                src={client.logo}
                alt={client.name}
                fill
                className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Gradient Overlays */}
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10" />
    </div>
  );
}