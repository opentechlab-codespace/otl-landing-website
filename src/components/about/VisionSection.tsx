import { motion } from "framer-motion";
import { Target, Heart, Eye } from "lucide-react";

export function VisionSection() {
  const sections = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Our Story",
      content:
        "Founded by a group of passionate developers in 2014, OpenTech Lab emerged from a shared vision to create meaningful impact through technology. What started as a small team has grown into a thriving community of innovators, developers, and digital creators.",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Our Mission",
      content:
        "To empower individuals and organizations through technology, creating sustainable employment opportunities and fostering economic growth. We strive to make quality tech education accessible and build a supportive community for developers worldwide.",
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Our Vision",
      content:
        "To establish a global ecosystem where technology drives social and financial stability. We aim to create a world where every individual has access to quality tech education and opportunities, contributing to a more equitable and prosperous society.",
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background/50 backdrop-blur-sm p-8 rounded-xl border border-border/50"
            >
              <div className="text-primary mb-4">{section.icon}</div>
              <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {section.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
