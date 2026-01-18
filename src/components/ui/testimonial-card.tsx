"use client";

import Image from "next/image";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  testimonial: string;
  image: string;
  rating: number;
}

export function TestimonialCard({ name, role, company, testimonial, image, rating }: TestimonialCardProps) {
  return (
    <div className="w-full h-full bg-secondary/50 p-4 sm:p-6 rounded-lg sm:rounded-xl backdrop-blur-sm hover:bg-secondary/60 transition-colors duration-300 flex flex-col">
      <div className="flex items-center gap-3 mb-4">
        <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden shrink-0">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
        <div className="min-w-0">
          <h4 className="font-semibold text-sm sm:text-base truncate">{name}</h4>
          <p className="text-xs sm:text-sm text-muted-foreground truncate">
            {role} at {company}
          </p>
        </div>
      </div>
      <div className="flex mb-3 sm:mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star
            key={i}
            className="w-3 h-3 sm:w-4 sm:h-4 fill-primary text-primary"
          />
        ))}
      </div>
      <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed line-clamp-4 sm:line-clamp-5 flex-grow">
        {testimonial}
      </p>
    </div>
  );
}