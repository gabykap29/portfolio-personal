export const projects = [
  {
    title: "Whisper y PHI3 Integration Project",
    description:
      "Proyecto que integra Whisper para la transcripción automática de audio juntamente con el modelo de lenguaje PHI3. Incluye un servidor FastAPI para la transcripción de audio y un servidor Express.js para la integración con PHI3, junto con un frontend construido con React y Vite.",
    tech: ["React", "Vite", "FastAPI", "Express.js", "Whisper", "PHI3"],
    github: "https://github.com/gabykap29/whisper_phi3-py-js.git",
    demo: "Por el momento no disponible",
  },
  {
    title: "Sistema de Gestión de Expedientes Judiciales",
    description:
      "Un sistema integral para la gestión de expedientes judiciales que permite la administración eficiente de casos, documentos y seguimiento del estado de los expedientes. Implementado utilizando tecnologías robustas para asegurar la integridad y disponibilidad de la información.",
    tech: ["Node.js", "PostgreSQL", "Sequelize", "Express", "EJS", "Bootstrap"],
    github: "https://github.com/gabykap29/SGE.git",
    demo: "Por el momento no disponible",
  },
  {
    title: "Sistema de Gestión de Informes",
    description:
      "Desarrollado para facilitar la creación, edición y seguimiento de informes. Incluye funcionalidades avanzadas para la colaboración y análisis de datos, optimizando la generación de informes y la visualización de resultados.",
    tech: ["NextJS", "Bootstrap", "Go", "GIN", "GORM", "POSTGRESQL"],
    github: "https://github.com/gabykap29/SGI-GO.git",
    demo: "Por el momento no disponible",
  },
  {
    title: "Plataforma de Cursos con Mentor Inteligente (IA)(PRIVADO)",
    description:
      "Una plataforma de aprendizaje en línea que combina cursos interactivos con un mentor inteligente basado en IA. La plataforma proporciona recomendaciones personalizadas, feedback en tiempo real y una experiencia de aprendizaje adaptativa.",
    tech: ["React", "Python", "TensorFlow", "FastAPI", "MongoDB"],
    github: "https://github.com/gabykap29/ai-mentor-platform",
    demo: "Por el momento no disponible",
  },
  {
    title: "Sistema de Alumnado - Proyecto DJANGO",
    description:
      "Un sistema completo para la gestión de estudiantes, incluyendo registro, seguimiento de rendimiento académico y generación de informes. Facilita la administración eficiente de datos y la comunicación entre estudiantes y administradores.",
    tech: ["Django", "Python", "SQLite", "Bootstrap"],
    github: "https://github.com/gabykap29/ProyectoFinal-Arg-Prog",
    demo: "Por el momento no disponible",
  },
  {
    title: "CHATBOT IA - Retrieval Augmented Generation (RAG)",
    description:
      "Un sistema de chatbot que utiliza técnicas de Retrieval Augmented Generation para proporcionar respuestas precisas y contextuales. Este proyecto combina el procesamiento del lenguaje natural con la recuperación de información para mejorar la interacción con el usuario.",
    tech: ["Python", "FastAPI", "Langchain", "Ollama", "Chromadb", "Express.js", "React"],
    github: "https://github.com/gabykap29/proyecto_final_chatbot.git",
    demo: "https://chatbot-rag.example.com",
  },
];

// Import React Icons
import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3, FaJs, FaGitAlt } from 'react-icons/fa';
import {
  SiTypescript,
  SiFastapi,
  SiMongodb,
  SiPostgresql,
  SiDjango,
  SiDocker,
  SiLangchain,
  SiTensorflow,
  SiPytorch,
  SiGo,
  SiOllama,
  SiHuggingface,
  SiScikitlearn,
  SiKeras,
  SiExpress,
  SiNestjs,
  SiVite,
  SiNextdotjs,
  SiReact,
} from "react-icons/si";
import { GiArtificialIntelligence } from 'react-icons/gi';

export const technologies = [
  // Frontend Technologies
  {
    name: "HTML5",
    icon: FaHtml5,
    level: 90,
    levelText: "Avanzado",
    category: "frontend"
  },
  {
    name: "CSS3",
    icon: FaCss3,
    level: 85,
    levelText: "Avanzado",
    category: "frontend"
  },
  {
    name: "JavaScript",
    icon: FaJs,
    level: 85,
    levelText: "Avanzado",
    category: "frontend"
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    level: 80,
    levelText: "Avanzado",
    category: "frontend"
  },
  {
    name: "React",
    icon: FaReact,
    level: 85,
    levelText: "Avanzado",
    category: "frontend"
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    level: 75,
    levelText: "Intermedio-Avanzado",
    category: "frontend"
  },
  {
    name: "Vite.js",
    icon: SiVite,
    level: 80,
    levelText: "Avanzado",
    category: "frontend"
  },
  {
    name: "React Native",
    icon: SiReact,
    level: 70,
    levelText: "Intermedio",
    category: "frontend"
  },

  // Backend Technologies
  {
    name: "Node.js",
    icon: FaNodeJs,
    level: 85,
    levelText: "Avanzado",
    category: "backend"
  },
  {
    name: "Python",
    icon: FaPython,
    level: 90,
    levelText: "Avanzado",
    category: "backend"
  },
  {
    name: "Go",
    icon: SiGo,
    level: 75,
    levelText: "Intermedio-Avanzado",
    category: "backend"
  },
  {
    name: "Express.js",
    icon: SiExpress,
    level: 85,
    levelText: "Avanzado",
    category: "backend"
  },
  {
    name: "Nest.js",
    icon: SiNestjs,
    level: 70,
    levelText: "Intermedio",
    category: "backend"
  },
  {
    name: "FastAPI",
    icon: SiFastapi,
    level: 85,
    levelText: "Avanzado",
    category: "backend"
  },
  {
    name: "Django",
    icon: SiDjango,
    level: 80,
    levelText: "Avanzado",
    category: "backend"
  },

  // Databases
  {
    name: "MongoDB",
    icon: SiMongodb,
    level: 80,
    levelText: "Avanzado",
    category: "database"
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    level: 85,
    levelText: "Avanzado",
    category: "database"
  },
  {
    name: "ChromaDB",
    icon: SiHuggingface,
    level: 75,
    levelText: "Intermedio-Avanzado",
    category: "database"
  },

  // DevOps & Tools
  {
    name: "Docker",
    icon: SiDocker,
    level: 80,
    levelText: "Avanzado",
    category: "devops"
  },
  {
    name: "Git",
    icon: FaGitAlt,
    level: 85,
    levelText: "Avanzado",
    category: "devops"
  },

  // AI/ML Technologies
  {
    name: "TensorFlow",
    icon: SiTensorflow,
    level: 80,
    levelText: "Avanzado",
    category: "ai"
  },
  {
    name: "PyTorch",
    icon: SiPytorch,
    level: 75,
    levelText: "Intermedio-Avanzado",
    category: "ai"
  },
  {
    name: "Keras",
    icon: SiKeras,
    level: 80,
    levelText: "Avanzado",
    category: "ai"
  },
  {
    name: "Scikit-Learn",
    icon: SiScikitlearn,
    level: 85,
    levelText: "Avanzado",
    category: "ai"
  },
  {
    name: "LangChain",
    icon: SiLangchain,
    level: 80,
    levelText: "Avanzado",
    category: "ai"
  },
  {
    name: "Ollama",
    icon: SiOllama,
    level: 85,
    levelText: "Avanzado",
    category: "ai"
  },
  {
    name: "Hugging Face",
    icon: SiHuggingface,
    level: 75,
    levelText: "Intermedio-Avanzado",
    category: "ai"
  },

  // Automation
  {
    name: "n8n",
    icon: GiArtificialIntelligence,
    level: 80,
    levelText: "Avanzado",
    category: "automation"
  },
];