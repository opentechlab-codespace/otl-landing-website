import React from 'react';

const TechStack = () => {
  const technologies = [
    {
      category: "Frontend",
      techs: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS"]
    },
    {
      category: "Backend",
      techs: ["Node.js", "Python", "Java", "Go", "PostgreSQL"]
    },
    {
      category: "Cloud & DevOps",
      techs: ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD"]
    },
    {
      category: "AI & ML",
      techs: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenAI", "Computer Vision"]
    }
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {technologies.map((tech, index) => (
        <div key={index} className="p-6 rounded-2xl bg-zinc-900 hover:bg-zinc-800 transition-colors">
          <h3 className="text-xl font-bold mb-4 text-purple-400">{tech.category}</h3>
          <ul className="space-y-2">
            {tech.techs.map((t, i) => (
              <li key={i} className="text-gray-300">{t}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default TechStack;