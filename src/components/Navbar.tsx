"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const mainMenuItems = [
    { title: "Services", href: "/#services" },
    { title: "Projects", href: "/#projects" },
    { title: "Clients", href: "/#clients" },
    { title: "Testimonials", href: "/#testimonials" },
    { title: "Contact", href: "/#contact" },
  ];

  const secondaryMenuItems = [
    { title: "About Us", href: "/about-us" },
    { title: "Academy", href: "/academy" },
    { title: "Community", href: "/community" },
  ];

  const isHomePage = pathname === "/";

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    if (!isHomePage) {
      window.location.href = href;
      return;
    }

    const element = document.querySelector(href.replace("/", ""));
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-background/80 backdrop-blur-md shadow-lg" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
              TechStudio
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <div className="flex space-x-4">
              {mainMenuItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.title}
                </a>
              ))}
            </div>
            <div className="h-4 w-px bg-border" />
            <div className="flex space-x-4">
              {secondaryMenuItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.title}
                </Link>
              ))}
            </div>
            <Link href="/get-started">
              <Button size="sm">Get Started</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-foreground focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        className={`md:hidden ${isOpen ? "block" : "hidden"}`}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -10 }}
        transition={{ duration: 0.2 }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-background/80 backdrop-blur-md">
          {mainMenuItems.map((item) => (
            <a
              key={item.title}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
              className="block px-3 py-2 text-base text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.title}
            </a>
          ))}
          <div className="my-2 h-px bg-border" />
          {secondaryMenuItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="block px-3 py-2 text-base text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.title}
            </Link>
          ))}
          <Link href="/get-started">
            <Button className="w-full mt-4">Get Started</Button>
          </Link>
        </div>
      </motion.div>
    </nav>
  );
}