export type TechIcon = {
  name: string;
  icon: "react" | "nextjs" | "nodejs" | "typescript" | "postgresql" | "tailwind";
  color: string;
};

export const heroTech: TechIcon[] = [
  { name: "React", icon: "react", color: "#61DAFB" },
  { name: "Next.js", icon: "nextjs", color: "#FFFFFF" },
  { name: "Node.js", icon: "nodejs", color: "#3FCF6F" },
  { name: "TypeScript", icon: "typescript", color: "#3B82F6" },
  { name: "PostgreSQL", icon: "postgresql", color: "#A78BFA" },
  { name: "Tailwind", icon: "tailwind", color: "#38BDF8" },
];

export const terminalLines = [
  "Initializing project...",
  "Connecting PostgreSQL...",
  "Building API services...",
  "Automating workflows...",
  "Deploying AI features...",
  "Production ready.",
];

export type Project = {
  id: string;
  title: string;
  worldName: string;
  description: string;
  tags: string[];
  href?: string;
  palette: [string, string];
  glow: string;
};

export const projects: Project[] = [
  {
    id: "crm",
    title: "CRM Dashboard",
    worldName: "Outreach Pro World",
    description:
      "A Minecraft village transformed into a business automation city — lead management, campaign tracking, and bulk email dispatch.",
    tags: ["Next.js", "PostgreSQL", "Prisma"],
    palette: ["#1f3d2b", "#3fcf6f"],
    glow: "#3fcf6f",
  },
  {
    id: "instagram",
    title: "Instagram Automation",
    worldName: "Messenger Tower World",
    description:
      "Magical communication towers and messenger birds — automated DM and comment outreach replacing manual creator engagement.",
    tags: ["Node.js", "SMTP/IMAP", "Background Jobs"],
    palette: ["#3d1f3d", "#c084fc"],
    glow: "#c084fc",
  },
  {
    id: "analytics",
    title: "Reels Analytics Dashboard",
    worldName: "Crystal Mountain World",
    description:
      "Crystal mountains with glowing data streams — automated creator research and engagement reporting for campaign managers.",
    tags: ["React", "Data Pipelines", "Reporting"],
    palette: ["#1f2d3d", "#60a5fa"],
    glow: "#60a5fa",
  },
  {
    id: "pathora",
    title: "Pathora — AI Travel Planner",
    worldName: "Floating Isles World",
    description:
      "Floating islands connected by magical routes — AI-generated itineraries with live maps and real-time sync.",
    tags: ["Next.js", "Supabase", "Gemini AI"],
    href: "https://pathora.netlify.app/",
    palette: ["#2d1f3d", "#a78bfa"],
    glow: "#a78bfa",
  },
];

export type OreBlock = {
  name: string;
  description: string;
  color: string;
  emissive: string;
};

export const oreBlocks: OreBlock[] = [
  { name: "React", description: "Diamond Block — component-driven UI", color: "#7fd9f0", emissive: "#3fc8ec" },
  { name: "Next.js", description: "Obsidian Block — full-stack framework", color: "#1a1a22", emissive: "#7c3aed" },
  { name: "Node.js", description: "Emerald Block — runtime & services", color: "#2fae5e", emissive: "#34d399" },
  { name: "TypeScript", description: "Sapphire Block — typed safety", color: "#3b6fd6", emissive: "#3b82f6" },
  { name: "PostgreSQL", description: "Enchanted Ore — relational data", color: "#5b3fae", emissive: "#a855f7" },
  { name: "Tailwind", description: "Ice Crystal Block — utility styling", color: "#7fd0e8", emissive: "#22d3ee" },
];

export const profile = {
  name: "SREEHARI T",
  role: "FULL STACK DEVELOPER",
  tagline:
    "I build scalable web applications, automate workflows and turn ideas into real products.",
  email: "sreeharisasikumart@gmail.com",
  linkedin: "https://linkedin.com/in/sreeharit27/",
  github: "https://github.com/Sreehari2710/",
  location: "Malappuram, Kerala",
};

export const missionStatement = {
  lines: ["I DON'T JUST WRITE CODE.", "I BUILD PRODUCTS THAT SCALE."],
  cta: "Let's Build Something Amazing",
};

export type AboutStat = {
  icon: "name" | "class" | "quest" | "origin" | "base";
  label: string;
  value: string;
  color: string;
};

export const aboutStats: AboutStat[] = [
  { icon: "name", label: "Name", value: "Sreehari T", color: "#f0a868" },
  { icon: "class", label: "Class", value: "Full Stack Developer", color: "#4dd0c4" },
  {
    icon: "quest",
    label: "Current Quest",
    value: "Full Stack Developer Intern @ Vuducom",
    color: "#7fd96b",
  },
  {
    icon: "origin",
    label: "Origin World",
    value:
      "Lovely Professional University, Punjab — B.Tech, Computer Science & Engineering (2022–2026)",
    color: "#6fa8f5",
  },
  { icon: "base", label: "Base", value: "Malappuram, Kerala", color: "#f0a868" },
];
