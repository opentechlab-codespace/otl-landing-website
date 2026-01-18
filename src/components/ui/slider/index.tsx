"use client";

import { useState, useCallback, ReactNode, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMediaQuery } from "@/lib/hooks/useMediaQuery";

interface SliderProps {
  items: ReactNode[];
  autoRotate?: boolean;
  rotateInterval?: number;
}

export function Slider({
  items,
  autoRotate = true,
  rotateInterval = 5000
}: SliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const isLargeScreen = useMediaQuery("(min-width: 1024px)");
  const isMediumScreen = useMediaQuery("(min-width: 768px)");

  const showCount = isLargeScreen ? 3 : isMediumScreen ? 2 : 1;

  const next = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((current) => {
      const nextIndex = (current + 1) % Math.max(1, items.length - showCount + 1);
      return nextIndex;
    });
    setTimeout(() => setIsAnimating(false), 500);
  }, [items.length, showCount, isAnimating]);

  const previous = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((current) => {
      const prevIndex = current === 0 ? Math.max(0, items.length - showCount) : current - 1;
      return prevIndex;
    });
    setTimeout(() => setIsAnimating(false), 500);
  }, [items.length, showCount, isAnimating]);

  useEffect(() => {
    if (autoRotate) {
      const interval = setInterval(next, rotateInterval);
      return () => clearInterval(interval);
    }
  }, [autoRotate, rotateInterval, next]);

  return (
    <div className="relative">
      <div className="overflow-hidden px-4 sm:px-8 lg:px-12">
        <motion.div
          className="flex gap-4 sm:gap-6"
          initial={false}
          animate={{
            x: `${-currentIndex * (100 / showCount)}%`,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0"
              style={{ width: `${100 / showCount}%` }}
            >
              {item}
            </div>
          ))}
        </motion.div>
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10"
        onClick={previous}
        disabled={currentIndex === 0 || isAnimating}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10"
        onClick={next}
        disabled={currentIndex >= items.length - showCount || isAnimating}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
}