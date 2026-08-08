export const profile = {
  displayName: "Amsyar Rasyiq",
  summary: "I'm a computer science college student who likes building things that are useful for me and hopefully for others too. Most of what I work on or create involves modding, so I'm more into reverse-engineering than software development. These days, my focus is on web development as a way to get into \"proper software development\".",
  email: "me@amsryq.dev",
  socials: {
    github: "https://github.com/amsryq",
    x: "https://x.com/amsryq",
    threads: "https://threads.net/@amsryq",
    instagram: "https://instagram.com/amsryq",
    linkedin: "https://linkedin.com/in/amsryq",
  },
  current: {
    shortInstitution: "UiTM",
    program: "Diploma in Computer Science",
    cgpa: "3.96 / 4.00",
  },
  projects: [
    {
      slug: "weekview",
      name: "weekview",
      type: "Student utility / web application",
      stack: "TypeScript, TanStack Start, Cloudflare Workers, Turso",
      metric: "30,000+ UiTM students",
      summary:
        "A modern web application for generating and customizing weekly schedules for students.",
    },
    {
      slug: "uwrench",
      name: "uwrench",
      type: "Browser extension / UX tooling",
      stack: "TypeScript, Browser Extension APIs",
      metric: "7+ quality-of-life features",
      summary:
        "A browser extension that resolves common UX pain points on the UiTM UFuture portal.",
    },
    {
      slug: "wintry",
      name: "wintry",
      type: "Open-source Android tooling",
      stack: "TypeScript, Kotlin, Xposed API",
      metric: "Runtime patching + privacy tooling",
      summary:
        "An experimental Discord mod built with simplicity and a seamless experience in mind.",
    },
  ],
} as const;
