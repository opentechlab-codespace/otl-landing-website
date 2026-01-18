import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name?: string;
  role?: string;
  company?: string;
  testimonial?: string;
  image?: string;
  rating?: number;
  index?: number;
}

const defaultTestimonials = [
  {
    id: 1,
    name: "John Smith",
    role: "CTO",
    company: "Tech Innovations Inc.",
    testimonial: "TechStudio delivered exceptional results. Their expertise in web development and AI solutions helped us transform our business processes.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80",
    rating: 5
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "CEO",
    company: "Digital Solutions Co.",
    testimonial: "Working with TechStudio was a game-changer. Their team's dedication and technical expertise exceeded our expectations.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
    rating: 5
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Product Manager",
    company: "Innovation Labs",
    testimonial: "The cloud migration project was seamless. TechStudio's team showed exceptional professionalism and technical knowledge.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    rating: 5
  },
  {
    id: 4,
    name: "Emily Davis",
    role: "Marketing Director",
    company: "Growth Ventures",
    testimonial: "Their digital marketing strategies transformed our online presence. The results were beyond our expectations.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80",
    rating: 5
  },
  {
    id: 5,
    name: "David Wilson",
    role: "Founder",
    company: "NextGen Startups",
    testimonial: "The AI implementation revolutionized our data analysis. TechStudio's expertise is unmatched.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    rating: 5
  }
];

export default function TestimonialCard(props: TestimonialCardProps) {
  const testimonials = props.name ? [{ ...props, id: props.index || 0 }] : defaultTestimonials;

  return testimonials.map((testimonial) => (
    <div
      key={`testimonial-${testimonial.id}`}
      className="w-[280px] bg-secondary/50 p-6 rounded-xl"
    >
      <div className="flex items-center mb-4">
        {testimonial.image && (
          <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
            <Image
              src={testimonial.image}
              alt={testimonial.name || ""}
              fill
              className="object-cover"
            />
          </div>
        )}
        <div>
          <h4 className="font-semibold">{testimonial.name}</h4>
          <p className="text-sm text-muted-foreground">
            {testimonial.role} at {testimonial.company}
          </p>
        </div>
      </div>
      <div className="flex mb-4">
        {[...Array(testimonial.rating || 5)].map((_, i) => (
          <Star key={`star-${testimonial.id}-${i}`} className="w-4 h-4 fill-primary text-primary" />
        ))}
      </div>
      <p className="text-muted-foreground text-sm">{testimonial.testimonial}</p>
    </div>
  ));
}