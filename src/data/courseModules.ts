export const courseModules = {
  "web-development": [
    {
      title: "Introduction to Web Development",
      duration: "2 hours",
      isCompleted: true,
      isLocked: false
    },
    {
      title: "HTML5 Fundamentals",
      duration: "3 hours",
      isCompleted: true,
      isLocked: false
    },
    {
      title: "CSS3 & Modern Layouts",
      duration: "4 hours",
      isCompleted: false,
      isLocked: false
    },
    {
      title: "JavaScript Essentials",
      duration: "5 hours",
      isCompleted: false,
      isLocked: true
    }
  ],
  "mobile-development": [
    {
      title: "Mobile Development Overview",
      duration: "2 hours",
      isCompleted: false,
      isLocked: false
    },
    {
      title: "iOS Development Basics",
      duration: "4 hours",
      isCompleted: false,
      isLocked: true
    },
    {
      title: "Android Development Fundamentals",
      duration: "4 hours",
      isCompleted: false,
      isLocked: true
    }
  ]
} as const;