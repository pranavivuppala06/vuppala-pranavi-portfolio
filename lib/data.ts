export const profile = {
  name: "Vuppala Pranavi",
  title: "Information Technology Student | Software Developer | AI & Full-Stack Developer | Problem Solver",
  intro: "Information Technology student with a strong foundation in programming, problem-solving, and Data Structures & Algorithms. Passionate about Full Stack Development, Artificial Intelligence, and Machine Learning, with an interest in building innovative applications. Focused on leveraging emerging technologies to develop efficient solutions for real-world challenges.",
  email: "pranavivuppala06@gmail.com",
  phone: "+918019790096",
  location: "Suryapet, Telangana, India",
  github: "https://github.com/pranavivuppala06",
  linkedin: "https://www.linkedin.com/in/vuppala-pranavi/",
  leetcode: "https://leetcode.com/u/pranavi_vuppala/",
  codechef: "https://www.codechef.com/users/pranavivuppala",
  codeforces: "https://codeforces.com/profile/pranavivuppala06"
};

export const projects = [
  {
    id: "medalign",
    title: "MedAlign AI",
    subtitle: "Drug–Drug & Drug–Food Interaction Chatbot",
    category: "AI & RAG",
    description: "An AI-powered mobile application that helps users understand potential Drug–Drug and Drug–Food interactions using Retrieval-Augmented Generation (RAG). It combines OCR, semantic vector retrieval, and LLM-based response generation to process medicine-related text and prescription images.",
    stack: ["Flutter", "Flask", "PostgreSQL", "pgvector", "RAG", "Google ML Kit OCR", "Ollama"],
    features: ["Drug–Drug and Drug–Food interaction analysis", "Prescription image processing using OCR", "Medicine information extraction", "Semantic vector retrieval", "LLM-based response generation", "Interaction severity and safety precautions", "Medication timing recommendations", "Conversational chatbot interface"],
    highlights: ["Developed an AI-powered mobile application", "Integrated a multi-stage OCR and RAG pipeline", "Combined semantic retrieval with LLM-based response generation", "Designed a user-friendly conversational interface"],
    github: "https://github.com/pranavivuppala06/medalign-ai"
  },
  {
    id: "outpass",
    title: "OUTPASS",
    subtitle: "Hostel Outing Management System",
    category: "Full Stack",
    description: "A full-stack web application that digitizes hostel outing requests through an online approval system. It streamlines the process with role-based access, secure authentication, request management, and approval tracking.",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB"],
    features: ["Student authentication", "Role-based access for Student, Parent, and Warden", "Online outing request submission", "Permission-based access", "Multi-level approval workflow", "Request management", "Approval status tracking", "Database integration"],
    highlights: ["Developed a full-stack web application", "Implemented role-based access control for three user roles", "Designed RESTful APIs using Express.js", "Integrated MongoDB for authentication and request management", "Implemented an online approval and tracking workflow"],
    github: "https://github.com/pranavivuppala06/outpass"
  }
];

export const skillGroups = [
  { title: "Programming Languages", icon: "code", skills: ["Python", "C", "C++", "Java", "SQL"] },
  { title: "Technologies & Tools", icon: "layers", skills: ["HTML", "CSS", "JavaScript", "React.js", "Flutter", "Flask", "Node.js", "MongoDB", "PostgreSQL", "Git"] },
  { title: "AI & Machine Learning", icon: "brain", skills: ["Retrieval-Augmented Generation (RAG)", "OCR", "LLM Integration", "pgvector", "Ollama"] },
  { title: "Core Computer Science", icon: "terminal", skills: ["Data Structures & Algorithms", "DBMS", "Object-Oriented Programming", "Operating Systems", "Computer Networks"] },
  { title: "Soft Skills", icon: "users", skills: ["Leadership", "Communication", "Teamwork", "Event Management", "Time Management", "Problem Solving"] }
];

export const certifications = [
  { name: "Python Essentials 1", org: "Cisco Networking Academy", category: "Programming" },
  { name: "Smart Coder", org: "Smart Interviews", category: "Programming and Problem Solving" },
  { name: "Cybersecurity Analyst Job Simulation", org: "Deloitte – Forage", category: "Cybersecurity" },
  { name: "Python for Data Science", org: "IBM Cognitive Class", category: "Python and Data Science" }
];
