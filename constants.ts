import { Project, SkillCategory, Education, Certification } from './types';

export const PROFILE = {
  name: "Surendra Alla",
  roles: ["Software Engineer", "Full-Stack Developer", "ML Engineer", "Agentic AI Developer"],
  tagline: "Building intelligent systems that bridge the gap between human intent and machine execution.",
  about: "I am a passionate BTech graduate in CSE–AIML with a deep focus on Full-Stack Development and Agentic AI. My journey involves architecting smart applications that solve real-world problems, from agricultural tech to automated disease detection. I thrive on complex challenges and am constantly exploring the frontiers of Generative AI and automation.",
  email: "contact@surendraalla.dev", // Placeholder
  socials: {
    linkedin: "https://linkedin.com/in/placeholder",
    github: "https://github.com/placeholder"
  }
};

export const EDUCATION: Education[] = [
  {
    degree: "B.Tech",
    institution: "Vasireddy Venkatadri Institute of Technology (VVIT)",
    specialization: "Computer Science & Engineering (AIML)",
    duration: "2020 - 2024",
    gpa: "8.5/10"
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Frontend",
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "React", "Tailwind CSS"]
  },
  {
    category: "Backend",
    skills: ["Python", "Java", "Node.js", "Express", "FastAPI"]
  },
  {
    category: "Databases",
    skills: ["SQL", "MySQL", "MongoDB", "PostgreSQL"]
  },
  {
    category: "AI / ML",
    skills: ["Machine Learning", "Deep Learning", "NLP", "Computer Vision", "Agentic AI", "LangChain", "Google Vertex AI"]
  },
  {
    category: "Tools & DevOps",
    skills: ["Git", "GitHub", "VS Code", "Docker", "AWS (Basic)"]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Eye Disease Detection System",
    description: "An advanced ML model utilizing Convolutional Neural Networks (CNN) to detect various ocular diseases from retinal fundus images with high accuracy.",
    technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "Flask"],
    category: "ML",
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "AgriGuide – Smart Farming",
    description: "AI-powered platform providing crop recommendations and disease diagnosis for farmers based on soil parameters and weather data.",
    technologies: ["React", "Node.js", "Scikit-learn", "OpenWeather API"],
    category: "AI",
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "AI Job Recommendation System",
    description: "A personalized recommendation engine that matches candidates with job openings based on resume parsing and skill vectorization.",
    technologies: ["Python", "NLP", "Spacy", "Cosine Similarity", "Streamlit"],
    category: "AI",
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "Fake News Detection System",
    description: "Natural Language Processing (NLP) application designed to classify news articles as real or fake using LSTM networks.",
    technologies: ["Python", "NLTK", "TensorFlow", "React"],
    category: "ML",
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "Traffic Prediction & Optimization",
    description: "Data-driven system analyzing historical traffic patterns to predict congestion and suggest optimal routes.",
    technologies: ["Python", "Pandas", "XGBoost", "Google Maps API"],
    category: "ML",
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "Mental Health Chatbot",
    description: "Empathetic conversational agent capable of providing initial support and resources, built with generative AI capabilities.",
    technologies: ["Gemini API", "React", "Node.js"],
    category: "AI",
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "Personalized Learning Path",
    description: "Generates custom educational roadmaps for students based on their current knowledge level and career goals.",
    technologies: ["React", "OpenAI API", "Graph Database"],
    category: "Web",
    githubUrl: "#",
    liveUrl: "#"
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: "TensorFlow Developer Certificate",
    platform: "Google / Coursera",
    description: "Professional certification demonstrating proficiency in building and deploying deep learning models."
  },
  {
    name: "AWS Certified Cloud Practitioner",
    platform: "Amazon Web Services",
    description: "Foundational understanding of AWS cloud services and terminology."
  },
  {
    name: "Full Stack Web Development",
    platform: "Udemy",
    description: "Comprehensive bootcamp covering the MERN stack."
  }
];