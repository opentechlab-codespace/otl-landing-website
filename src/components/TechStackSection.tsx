import { Code2, Database, Cloud, Shield } from 'lucide-react';

export default function TechStackSection() {
  const technologies = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Frontend",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Backend",
      items: ["Node.js", "Python", "PostgreSQL", "MongoDB"]
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud",
      items: ["AWS", "Azure", "Google Cloud", "Docker"]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security",
      items: ["OAuth", "JWT", "HTTPS", "WAF"]
    }
  ];

  return (
    <section className="px-4 md:px-20 py-20 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16">Our Tech Stack</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <div key={index} className="space-y-4">
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center text-purple-400">
                {tech.icon}
              </div>
              <h3 className="text-xl font-semibold">{tech.title}</h3>
              <ul className="space-y-2 text-gray-400">
                {tech.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}