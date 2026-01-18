"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    title: "AI-Powered Analytics Platform",
    category: "Machine Learning",
    description: "Advanced analytics platform using machine learning algorithms for predictive insights."
  },
  {
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    title: "Enterprise Cloud Migration",
    category: "Cloud Solutions",
    description: "Seamless migration of legacy systems to modern cloud infrastructure."
  },
  {
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "Full-featured e-commerce solution with advanced inventory management."
  },
  {
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    title: "Digital Marketing Dashboard",
    category: "Analytics",
    description: "Comprehensive marketing analytics and reporting platform."
  }
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Our Projects</h1>
        <p className="text-xl text-muted-foreground mb-16 max-w-3xl">
          Explore our portfolio of successful projects and digital transformations.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}