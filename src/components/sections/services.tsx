"use client";

import { motion } from "framer-motion";
import { Globe, Brain, Cloud, Laptop, BarChart, Users } from "lucide-react";
import { ServiceCard } from "@/components/ui/service-card";

const services = [
  {
    icon: <Globe size={32} />,
    title: "Web Development",
    description: "Full-stack web applications, responsive websites, and progressive web apps using React, Node.js, and modern frameworks."
  },
  {
    icon: <Brain size={32} />,
    title: "AI & Machine Learning",
    description: "Custom AI solutions, machine learning models, and intelligent automation for business optimization."
  },
  {
    icon: <Cloud size={32} />,
    title: "Cloud Solutions",
    description: "Cloud architecture, migration services, and scalable infrastructure using AWS, Azure, and Google Cloud."
  },
  {
    icon: <Laptop size={32} />,
    title: "Technical Training",
    description: "Specialized training programs in web development, cloud computing, AI/ML, and emerging technologies."
  },
  {
    icon: <BarChart size={32} />,
    title: "Digital Marketing",
    description: "SEO optimization, analytics implementation, and data-driven marketing strategies."
  },
  {
    icon: <Users size={32} />,
    title: "IT Consulting",
    description: "Strategic technology consulting, digital transformation, and IT roadmap planning."
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="py-16 sm:py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">Our Services</h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technical solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}