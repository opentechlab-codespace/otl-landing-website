"use client";

import { CourseHeaderProps } from "@/types/academy";

export default function CourseHeader({ icon, title, description }: CourseHeaderProps) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <div className="p-3 bg-primary/10 rounded-lg">
        {icon}
      </div>
      <div>
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}