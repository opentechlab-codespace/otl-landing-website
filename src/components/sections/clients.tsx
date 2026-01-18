"use client";

import { motion } from "framer-motion";
import { ClientsSlider } from "@/components/ui/clients-slider";
import { clientsData } from "@/data/clients";

export function ClientsSection() {
  const { title, subtitle, clients, stats } = clientsData;

  return (
    <section id="clients" className="py-16 sm:py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">{title}</h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground">{subtitle}</p>
        </motion.div>

        <div className="relative overflow-hidden">
          {/* First Row */}
          <div className="mb-6 sm:mb-8">
            <ClientsSlider clients={clients} direction="left" speed={30} />
          </div>

          {/* Second Row */}
          <div>
            <ClientsSlider clients={clients} direction="right" speed={25} />
          </div>
        </div>

        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={`stat-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-background/50 rounded-lg sm:rounded-xl backdrop-blur-sm"
            >
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm sm:text-base text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}