import { CourseData } from "@/types/academy";
import { CourseIcons } from "@/components/academy/icons/CourseIcons";

export const courses: CourseData[] = [
  {
    icon: CourseIcons.webDev,
    title: "Web Development",
    slug: "web-development",
    description: "Master modern web development with React, Node.js, and other cutting-edge technologies.",
    topics: [
      {
        title: "Frontend Development",
        items: [
          "HTML5, CSS3, JavaScript ES6+",
          "React.js & Next.js",
          "State Management (Redux, Context)",
          "Responsive Design & CSS Frameworks"
        ]
      },
      {
        title: "Backend Development",
        items: [
          "Node.js & Express.js",
          "RESTful APIs & GraphQL",
          "Database Design & ORM",
          "Authentication & Authorization"
        ]
      },
      {
        title: "Full Stack Development",
        items: [
          "MERN Stack Development",
          "API Integration",
          "Deployment & DevOps",
          "Performance Optimization"
        ]
      }
    ]
  },
  {
    icon: CourseIcons.mobileDev,
    title: "Mobile Development",
    slug: "mobile-development",
    description: "Build native and cross-platform mobile applications for iOS and Android.",
    topics: [
      {
        title: "iOS Development",
        items: [
          "Swift Programming",
          "UIKit & SwiftUI",
          "iOS App Architecture",
          "App Store Deployment"
        ]
      },
      {
        title: "Android Development",
        items: [
          "Kotlin Programming",
          "Android SDK & Jetpack",
          "Material Design",
          "Google Play Store"
        ]
      },
      {
        title: "Cross-Platform",
        items: [
          "React Native",
          "Flutter Development",
          "Code Sharing Strategies",
          "Platform-Specific Features"
        ]
      }
    ]
  },
  {
    icon: CourseIcons.tools,
    title: "Tools Exploration",
    slug: "tools-exploration",
    description: "Learn essential developer tools and improve your workflow efficiency.",
    topics: [
      {
        title: "Version Control",
        items: [
          "Git Fundamentals",
          "Branching Strategies",
          "Collaboration Workflows",
          "CI/CD Integration"
        ]
      },
      {
        title: "DevOps Tools",
        items: [
          "Docker & Containers",
          "Kubernetes Basics",
          "Cloud Platforms",
          "Monitoring & Logging"
        ]
      },
      {
        title: "Development Tools",
        items: [
          "IDE & Extensions",
          "Package Managers",
          "Build Tools",
          "Testing Frameworks"
        ]
      }
    ]
  }
];