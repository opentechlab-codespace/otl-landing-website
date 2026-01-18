"use client";

import { motion } from "framer-motion";
import { MessageSquare, Users, Search, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const forumCategories = [
  "Web Development",
  "Mobile Development",
  "AI/ML",
  "Data Science",
  "Blockchain",
  "Career Advice"
];

const recentDiscussions = [
  {
    title: "Best practices for React performance optimization",
    author: "John Doe",
    replies: 23,
    category: "Web Development"
  },
  {
    title: "Getting started with TensorFlow",
    author: "Sarah Smith",
    replies: 15,
    category: "AI/ML"
  },
  {
    title: "Mobile app deployment strategies",
    author: "Mike Johnson",
    replies: 8,
    category: "Mobile Development"
  }
];

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-background pt-16 sm:pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16"
      >
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-8">Developer Community</h1>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Join our vibrant community of developers. Ask questions, share knowledge, and grow together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Left Sidebar - Categories */}
          <div className="space-y-6">
            <div className="bg-secondary/50 p-4 sm:p-6 rounded-lg sm:rounded-xl">
              <h2 className="text-lg sm:text-xl font-bold mb-4 flex items-center gap-2">
                <MessageSquare className="w-5 h-5" /> Categories
              </h2>
              <div className="space-y-2">
                {forumCategories.map((category, index) => (
                  <button
                    key={index}
                    className="w-full text-left px-3 sm:px-4 py-2 rounded-lg hover:bg-secondary transition-colors text-sm sm:text-base text-muted-foreground hover:text-foreground"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content - Discussions */}
          <div className="md:col-span-2 space-y-6">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search discussions..."
                className="w-full pl-10 pr-4 py-2 sm:py-3 rounded-lg bg-secondary/50 border border-input focus:outline-none focus:ring-2 focus:ring-primary text-sm sm:text-base"
              />
            </div>

            {/* Recent Discussions */}
            <div className="bg-secondary/50 p-4 sm:p-6 rounded-lg sm:rounded-xl">
              <h2 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Recent Discussions</h2>
              <div className="space-y-3 sm:space-y-4">
                {recentDiscussions.map((discussion, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-3 sm:p-4 bg-background rounded-lg"
                  >
                    <h3 className="font-semibold text-sm sm:text-base mb-2">{discussion.title}</h3>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
                      <span>By {discussion.author}</span>
                      <div className="flex items-center gap-2 sm:gap-4">
                        <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs sm:text-sm">
                          {discussion.category}
                        </span>
                        <span>{discussion.replies} replies</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Start Discussion Button */}
            <Button className="w-full">
              Start a New Discussion
              <Send className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}