"use client";

import { motion } from "framer-motion";
import { Code2, Brain, Cloud, Laptop, BarChart, Users } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";

const services = [
  {
    icon: <Code2 size={32} />,
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

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Our Services</h1>
        <p className="text-xl text-muted-foreground mb-16 max-w-3xl">
          We offer a comprehensive suite of technology solutions to help your business thrive in the digital age.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}