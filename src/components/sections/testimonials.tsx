"use client";

import { motion } from "framer-motion";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { Slider } from "@/components/ui/slider";

const testimonials = [
  {
    id: 1,
    name: "John Smith",
    role: "CTO",
    company: "Tech Innovations Inc.",
    testimonial: "TechStudio delivered exceptional results. Their expertise in web development and AI solutions helped us transform our business processes. The team's dedication to quality and innovation was impressive.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80",
    rating: 5
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "CEO",
    company: "Digital Solutions Co.",
    testimonial: "Working with TechStudio was a game-changer. Their team's dedication and technical expertise exceeded our expectations. They truly understand modern technology trends and business needs.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
    rating: 5
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Product Manager",
    company: "Innovation Labs",
    testimonial: "The cloud migration project was seamless. TechStudio's team showed exceptional professionalism and technical knowledge. Their attention to detail and proactive communication made the process smooth.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    rating: 5
  },
  {
    id: 4,
    name: "Emily Davis",
    role: "Marketing Director",
    company: "Growth Ventures",
    testimonial: "Their digital marketing strategies transformed our online presence. The results were beyond our expectations. The data-driven approach and creative solutions set them apart from others.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80",
    rating: 5
  },
  {
    id: 5,
    name: "David Wilson",
    role: "Founder",
    company: "NextGen Startups",
    testimonial: "The AI implementation revolutionized our data analysis. TechStudio's expertise is unmatched. They not only delivered the solution but also ensured our team was well-trained to utilize it effectively.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    rating: 5
  }
];

export function TestimonialsSection() {
  const testimonialCards = testimonials.map((testimonial) => (
    <TestimonialCard key={testimonial.id} {...testimonial} />
  ));

  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-background/50">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">Client Testimonials</h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            What our clients say about working with us
          </p>
        </motion.div>

        <Slider
          items={testimonialCards}
          autoRotate={true}
          rotateInterval={5000}
        />
      </div>
    </section>
  );
}