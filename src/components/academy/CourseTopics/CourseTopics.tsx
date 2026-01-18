import { CourseTopicsProps } from "@/types/academy";

export function CourseTopics({ topics }: CourseTopicsProps) {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {topics.map((topic, i) => (
        <div key={i} className="bg-background p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">{topic.title}</h3>
          <ul className="space-y-3">
            {topic.items.map((item, j) => (
              <li key={j} className="flex items-start gap-2 text-muted-foreground">
                <span className="text-primary mt-1">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}