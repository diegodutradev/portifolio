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
    title: "PAMPS - API RESTFUL ",
    description: "Pamps é uma API de microblogs inspirada no antigo Twitter, onde usuários publicam posts curtos chamados pamps. Desenvolvida com FastAPI, utiliza PostgreSQL, autenticação JWT,  100% Dockerizado e testes automatizados com Pytest.",
    image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["FastAPI", "Docker", "PostgreSQL", "JWT", "Pytest"],
    githubUrl: "https://github.com/diegodutradev/pamps",
    category: "Backend"
  },
  {
    id: 2,
    title: "AUTOMAÇÃO DE ENVIO DE IMAGENS EM MASSA ",
    description: "Automação que permite encaminhar uma imagem pré-definida para milhares de contatos via WhatsApp. Projeto modular com envio em lotes e pausas aleatórias para evitar possíveis bloqueios e simular o comportamento humano.",
    image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Python", "Selenium"],
    githubUrl: "https://github.com/diegodutradev/wpp-automation",
    category: "Automação"
  },
  {
    id: 3,
    title: "AUTOMAÇÃO QUE SALVA CONTATOS NÃO SALVOS NO WHATSAPP",
    description: "Automação que identifica todos os contatos não salvos no WhatsApp e cria um arquivo .CSV com todos para serem salvos de uma vez só.",
    image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Python", "Selenium"],
    githubUrl: "https://github.com/diegodutradev/salvar_contatos_wpp",
    category: "Backend"
  },
  {
    id: 4,
    title: "INVISTA-ME - CRUD COM DJANGO",
    description: "Invista-me é um app feito com Django para verificar e controlar seus gastos.",
    image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Python", "Django", "Bootstrap", "PostgreSQL"],
    githubUrl: "https://github.com/diegodutradev/invista-me",
    category: "Backend"
  },
  {
    id: 5,
    title: "BOOK API",
    description: "Uma API REST criada com FASTAPI que possui função CRUD para livros.",
    image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Python", "FastAPI", "PostgreSQL"],
    githubUrl: "https://github.com/diegodutradev/book_api",
    category: "Backend"
  },
  // {
  //   id: 6,
  //   title: "Fazer depois",
  //   description: "End-to-end ML pipeline for data preprocessing, model training, and deployment with monitoring capabilities.",
  //   image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
  //   technologies: ["Python", "TensorFlow", "Apache Airflow", "MLflow", "AWS"],
  //   githubUrl: "https://github.com/yourusername/ml-pipeline",
  //   category: "Machine Learning"
  // }
]

export const categories = [
  "Todos",
  "Backend",
  // "Frontend", 
  // "Full Stack",
  "Automação",
  // "DevOps",
  // "Machine Learning"
]