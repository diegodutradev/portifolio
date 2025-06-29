export interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  category: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce API",
    description: "RESTful API built with Node.js and Express, featuring user authentication, product management, and payment integration.",
    image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Node.js", "Express", "MongoDB", "JWT", "Stripe"],
    githubUrl: "https://github.com/yourusername/ecommerce-api",
    liveUrl: "https://api.yourproject.com",
    category: "Backend"
  },
  {
    id: 2,
    title: "Task Automation Bot",
    description: "Python automation script that handles repetitive tasks, data processing, and report generation with scheduling capabilities.",
    image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Python", "Selenium", "Pandas", "Celery", "Redis"],
    githubUrl: "https://github.com/yourusername/automation-bot",
    category: "Automação"
  },
  {
    id: 3,
    title: "Real-time Chat Application",
    description: "Full-stack chat application with WebSocket support, user authentication, and message history persistence.",
    image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Vue.js", "Socket.io", "Node.js", "PostgreSQL"],
    githubUrl: "https://github.com/yourusername/chat-app",
    liveUrl: "https://chat.yourproject.com",
    category: "Full Stack"
  },
  {
    id: 4,
    title: "Data Analytics Dashboard",
    description: "Interactive dashboard for visualizing business metrics with real-time data updates and export functionality.",
    image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React", "D3.js", "Python", "FastAPI", "PostgreSQL"],
    githubUrl: "https://github.com/yourusername/analytics-dashboard",
    liveUrl: "https://dashboard.yourproject.com",
    category: "Frontend"
  },
  {
    id: 5,
    title: "Microservices Architecture",
    description: "Scalable microservices system with Docker containerization, API gateway, and service mesh implementation.",
    image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Docker", "Kubernetes", "Go", "gRPC", "Consul"],
    githubUrl: "https://github.com/yourusername/microservices",
    category: "DevOps"
  },
  {
    id: 6,
    title: "Machine Learning Pipeline",
    description: "End-to-end ML pipeline for data preprocessing, model training, and deployment with monitoring capabilities.",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Python", "TensorFlow", "Apache Airflow", "MLflow", "AWS"],
    githubUrl: "https://github.com/yourusername/ml-pipeline",
    category: "Machine Learning"
  }
]

export const categories = [
  "Todos",
  "Backend",
  "Frontend", 
  "Full Stack",
  "Automação",
  // "DevOps",
  // "Machine Learning"
]