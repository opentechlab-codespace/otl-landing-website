import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function ContactSection() {
  return (
    <section className="px-4 md:px-20 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to transform your business?</h2>
        <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto">
          Let's discuss how our technical expertise can help you achieve your digital goals.
        </p>
        <Link href="/schedule-consultation">
          <button className="group flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-medium mx-auto hover:bg-purple-500 hover:text-white transition-all duration-300">
            Schedule a consultation
            <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </Link>
      </div>
    </section>
  );
}