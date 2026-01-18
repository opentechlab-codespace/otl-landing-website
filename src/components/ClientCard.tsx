"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { clientsData } from "@/data/clients";
import type { Client } from "@/types/clients";

interface ClientLogoProps {
  client: Client;
  index: number;
  rowIndex: number;
}

const ClientLogo = ({ client, index, rowIndex }: ClientLogoProps) => (
  <div
    key={`${client.name}-${index}-row${rowIndex}`}
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
  </div>
);

const ClientsRow = ({ clients, direction = "left", speed = 30 }: {
  clients: Client[];
  direction?: "left" | "right";
  speed?: number;
}) => {
  const animate = direction === "left" 
    ? { x: [0, -1920] }
    : { x: [-1920, 0] };

  return (
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
        <ClientLogo
          key={`${client.name}-${index}-${direction}`}
          client={client}
          index={index}
          rowIndex={direction === "left" ? 1 : 2}
        />
      ))}
    </motion.div>
  );
};

export default function ClientsSection() {
  const { title, subtitle, clients, stats } = clientsData;

  return (
    <section className="py-24 bg-background/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{title}</h2>
          <p className="text-xl text-muted-foreground">
            {subtitle}
          </p>
        </div>

        <div className="relative overflow-hidden">
          {/* First Row */}
          <div className="mb-8">
            <ClientsRow clients={clients} direction="left" speed={30} />
          </div>

          {/* Second Row */}
          <div>
            <ClientsRow clients={clients} direction="right" speed={30} />
          </div>

          {/* Gradient Overlays */}
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10" />
        </div>

        <div className="mt-16 grid grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div
              key={`stat-${index}`}
              className="p-6 bg-secondary/30 rounded-xl backdrop-blur-sm"
            >
              <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}