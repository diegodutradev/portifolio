export interface Skill {
  name: string
  level: number
  icon: string
}

export interface TechStack {
  name: string
  icon: string
  color: string
}

export const skills: Skill[] = [
  { name: "Python", level: 90, icon: "logos:python" },
  { name: "Django", level: 85, icon: "logos:django" },
  { name: "FastAPI", level: 90, icon: "logos:fastapi" },
  { name: "Docker", level: 85, icon: "logos:docker-icon" },
  { name: "PostgreSQL", level: 85, icon: "logos:postgresql" },
  { name: "Vue.js", level: 80, icon: "logos:vue" },
  { name: "Selenium", level: 85, icon: "logos:selenium" },
  { name: "Pandas", level: 80, icon: "logos:pandas" },
  { name: "Git", level: 90, icon: "logos:git-icon" },
  { name: "GitHub", level: 90, icon: "logos:github" },
  // { name: "AWS", level: 75, icon: "logos:aws" }
  // { name: "JavaScript", level: 88, icon: "logos:javascript" },
  // { name: "Node.js", level: 95, icon: "logos:nodejs" },
  // { name: "TypeScript", level: 85, icon: "logos:typescript-icon" },
  // { name: "React", level: 75, icon: "logos:react" },
  // { name: "MongoDB", level: 80, icon: "logos:mongodb" },
]

export const techStack: TechStack[] = [
  { name: "Python", icon: "logos:python", color: "#3776AB" },
  { name: "Django", icon: "logos:django", color: "#F05032" },
  { name: "FastAPI", icon: "logos:fastapi", color: "#F05032" },
  { name: "Docker", icon: "logos:docker-icon", color: "#2496ED" },
  { name: "PostgreSQL", icon: "logos:postgresql", color: "#336791" },
  { name: "Vue.js", icon: "logos:vue", color: "#4FC08D" },
  { name: "Selenium", icon: "logos:selenium", color: "#F05032" },
  { name: "Pandas", icon: "logos:pandas", color: "#F05032" },
  { name: "Git", icon: "logos:git-icon", color: "#F05032" },
  // { name: "GitHub", icon: "logos:github", color: "#F05032" },
  // { name: "Node.js", icon: "logos:nodejs", color: "#339933" },
  // { name: "React", icon: "logos:react", color: "#61DAFB" },
  // { name: "TypeScript", icon: "logos:typescript-icon", color: "#3178C6" },
  // { name: "MongoDB", icon: "logos:mongodb", color: "#47A248" },
]