import { Globe, Brain, Cloud, Laptop, BarChart, Users } from 'lucide-react';
import ServiceCard from './ServiceCard';

export default function ServiceSection() {
  const services = [
    {
      icon: <Globe size={32} />,
      title: "Web Development",
      description: "Full-stack web applications, responsive websites, and progressive web apps using React, Node.js, and modern frameworks."
    },
    {
      icon: <Brain size={32} />,
      title: "AI & Machine Learning",
      description: "Custom AI solutions, machine learning models, and intelligent automation for business optimization."
    },
    {
      icon: <Cloud size={32} />,
      title: "Cloud Solutions",
      description: "Cloud architecture, migration services, and scalable infrastructure using AWS, Azure, and Google Cloud."
    },
    {
      icon: <Laptop size={32} />,
      title: "Technical Training",
      description: "Specialized training programs in web development, cloud computing, AI/ML, and emerging technologies."
    },
    {
      icon: <BarChart size={32} />,
      title: "Digital Marketing",
      description: "SEO optimization, analytics implementation, and data-driven marketing strategies."
    },
    {
      icon: <Users size={32} />,
      title: "IT Consulting",
      description: "Strategic technology consulting, digital transformation, and IT roadmap planning."
    }
  ];

  return (
    <section className="px-4 md:px-20 py-20 bg-zinc-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Services</h2>
        <p className="text-gray-400 text-xl mb-16 max-w-2xl">
          Comprehensive technical solutions tailored to your business needs
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}