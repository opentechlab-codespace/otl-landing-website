import Image from 'next/image';
import ProjectCard from './ProjectCard';

export default function FeaturedProjects() {
  const projects = [
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      title: "AI-Powered Analytics Platform",
      category: "Machine Learning"
    },
    {
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
      title: "Enterprise Cloud Migration",
      category: "Cloud Solutions"
    }
  ];

  return (
    <section className="px-4 md:px-20 py-20 bg-zinc-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}