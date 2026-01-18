"use client";

import { motion } from "framer-motion";
import { Award, Users, Globe, Rocket } from "lucide-react";
import { TeamSection } from "@/app/about/_components/TeamSection";
import { VisionSection } from "@/app/about/_components/VisionSection";
import { RoadmapSection } from "@/app/about/_components/RoadmapSection";

const stats = [
  { icon: <Award className="w-6 h-6" />, label: "Years of Experience", value: "10+" },
  { icon: <Users className="w-6 h-6" />, label: "Team Members", value: "50+" },
  { icon: <Globe className="w-6 h-6" />, label: "Countries Served", value: "20+" },
  { icon: <Rocket className="w-6 h-6" />, label: "Projects Completed", value: "200+" }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-8">About Us</h1>
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <p className="text-xl text-muted-foreground mb-8">
                We are a team of passionate technologists dedicated to transforming businesses through innovative digital solutions.
              </p>
              <p className="text-muted-foreground mb-8">
                Founded in 2014, our mission is to help organizations leverage cutting-edge technology to achieve their business objectives and stay ahead in the digital age.
              </p>
            </motion.div>
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="p-6 bg-secondary rounded-lg text-center"
                >
                  <div className="flex justify-center mb-4 text-primary">{stat.icon}</div>
                  <motion.div
                    initial={{ scale: 0.5 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold mb-2"
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Vision, Mission, Story Section */}
        <VisionSection />

        {/* Roadmap Section */}
        <RoadmapSection />

        {/* Team Section */}
        <TeamSection />
      </div>
    </div>
  );
}