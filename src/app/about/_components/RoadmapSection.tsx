"use client";

import { motion } from "framer-motion";
import { Milestone } from "./RoadmapSection/Milestone";

const milestones = [
  {
    year: "2014",
    title: "Company Founded",
    description: "Started with a small team of passionate developers focused on web development.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
  },
  {
    year: "2016",
    title: "Cloud Division Launch",
    description: "Expanded services to include cloud solutions and enterprise architecture.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
  },
  {
    year: "2018",
    title: "AI/ML Integration",
    description: "Introduced artificial intelligence and machine learning solutions.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80"
  },
  {
    year: "2020",
    title: "Global Expansion",
    description: "Expanded operations to multiple countries and established global presence.",
    image: "https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?auto=format&fit=crop&w=800&q=80"
  },
  {
    year: "2022",
    title: "TechStudio Academy",
    description: "Launched our educational platform to nurture next-gen tech talent.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80"
  },
  {
    year: "2024",
    title: "Innovation Hub",
    description: "Established innovation centers focused on emerging technologies.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
  }
];

export function RoadmapSection() {
  return (
    <section className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <h2 className="text-4xl font-bold mb-16">Our Journey So Far</h2>
        <div className="relative">
          {/* Fixed timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/10" />
          
          {/* Animated timeline line that follows scroll */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false }}
            className="absolute left-1/2 top-0 transform -translate-x-1/2 w-0.5 bg-primary origin-top"
          />
          
          {/* Milestones */}
          <div className="space-y-32">
            {milestones.map((milestone, index) => (
              <Milestone
                key={milestone.year}
                {...milestone}
                index={index}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}