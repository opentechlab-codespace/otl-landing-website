"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "@/components/ui/project-card";

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
  }
];

export function FeaturedProjects() {
  return (
    <section id="projects" className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">Featured Projects</h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl">
            Explore our portfolio of successful projects and digital transformations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}