"use client";

import { motion } from "framer-motion";
import { VisionSection } from "@/components/about/VisionSection";
import { TeamSection } from "@/components/about/TeamSection";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hero Section */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-background/95">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-pattern" />
          <div className="max-w-7xl mx-auto relative">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
              About Us
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              We are a team of like-minded developers whose vision is to provide a community of developers 
              and deliver exceptional services to consumers, creating financial stability and economic 
              balance in society by providing meaningful employment opportunities.
            </p>
          </div>
        </section>

        {/* Vision, Mission, Story Section */}
        <VisionSection />

        {/* Team Section */}
        <TeamSection />
      </motion.div>
    </div>
  );
}