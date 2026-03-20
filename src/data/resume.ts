export const personal = {
  name: "Zhitong (Payton) Guo",
  title: "Software Engineer",
  tagline: "Building infrastructure for large-scale AI systems",
  email: "zhitongguo99@gmail.com",
  linkedin: "https://www.linkedin.com/in/zhitong-guo",
  github: "https://github.com/zhitongguo",
  location: "Menlo Park, CA",
};

export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  highlights: string[];
}

export const experiences: Experience[] = [
  {
    company: "Meta",
    role: "Software Engineer",
    location: "Menlo Park, CA",
    period: "Jan 2025 — Present",
    highlights: [
      "Building ML infrastructure for large-scale model training on the Llama Research Platform team",
      "Developing end-to-end test infrastructure (Granary) for nightly benchmark validation across GPU architectures",
      "Enabling training workloads on next-generation hardware (GB200/GB300)",
    ],
  },
  {
    company: "Meta",
    role: "Software Engineer Intern",
    location: "Menlo Park, CA",
    period: "May 2024 — Aug 2024",
    highlights: [
      "Implemented YaRN positional encoding for context length extension during supervised fine-tuning",
      "Worked on the Llama model training pipeline, contributing to infrastructure improvements",
    ],
  },
  {
    company: "Alibaba Cloud",
    role: "Software Engineer Intern",
    location: "Hangzhou, China",
    period: "May 2022 — Aug 2022",
    highlights: [
      "Developed cloud-native solutions for distributed computing infrastructure",
      "Built internal tooling to improve developer productivity and deployment workflows",
    ],
  },
];

export interface Research {
  institution: string;
  advisor: string;
  role: string;
  period: string;
  description: string;
}

export const research: Research[] = [
  {
    institution: "Carnegie Mellon University",
    advisor: "Prof. Graham Neubig",
    role: "Research Assistant",
    period: "Jan 2024 — Dec 2024",
    description:
      "Worked on LLM-based agents for software engineering tasks, contributing to the TheAgentCompany benchmark for evaluating AI agents in realistic workplace scenarios.",
  },
  {
    institution: "Columbia University",
    advisor: "Prof. Zhou Yu",
    role: "Research Assistant",
    period: "Sep 2023 — Dec 2023",
    description:
      "Researched dialogue systems and conversational AI, focusing on task-oriented dialogue and natural language understanding.",
  },
  {
    institution: "New York University",
    advisor: "Research Lab",
    role: "Research Assistant",
    period: "Jan 2023 — May 2023",
    description:
      "Conducted research on machine learning applications, exploring novel approaches to model training and evaluation.",
  },
];

export interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: number;
  link?: string;
}

export const publications: Publication[] = [
  {
    title:
      "TheAgentCompany: Benchmarking LLM Agents on Consequential Real World Tasks",
    authors:
      "Frank F. Xu, Yufan Song, Boxuan Li, Yuxuan Tang, Kritanjali Jain, Mengxue Bao, Zhitong Guo, et al.",
    venue: "ICLR 2025",
    year: 2025,
    link: "https://arxiv.org/abs/2412.14161",
  },
  {
    title:
      "DAsk: A Domain-Specific Knowledge-Guided Dialogue Dataset for Multi-Professional Scenarios",
    authors: "Zhitong Guo, et al.",
    venue: "Preprint",
    year: 2024,
  },
  {
    title:
      "Machine Learning Approaches for Photovoltaic Performance Prediction",
    authors: "Zhitong Guo, et al.",
    venue: "Conference Paper",
    year: 2023,
  },
];

export interface Education {
  school: string;
  degree: string;
  period: string;
  details?: string;
}

export const education: Education[] = [
  {
    school: "Carnegie Mellon University",
    degree: "M.S. in Intelligent Information Systems",
    period: "Aug 2023 — Dec 2024",
    details: "School of Computer Science, Language Technologies Institute",
  },
  {
    school: "New York University",
    degree: "B.S. in Computer Science & Data Science",
    period: "Sep 2019 — May 2023",
    details: "Courant Institute of Mathematical Sciences",
  },
];

export interface Competition {
  name: string;
  result: string;
  year: number;
}

export const competitions: Competition[] = [
  {
    name: "Citadel Rockstar Datathon",
    result: "Top Finalist",
    year: 2022,
  },
  {
    name: "BUD Challenge — NeurIPS Workshop",
    result: "Participant",
    year: 2023,
  },
];

export const skills = {
  languages: ["Python", "TypeScript", "JavaScript", "C++", "Hack", "SQL"],
  frameworks: [
    "PyTorch",
    "React",
    "Next.js",
    "Node.js",
    "FastAPI",
    "Flask",
  ],
  infrastructure: [
    "Docker",
    "Kubernetes",
    "AWS",
    "GCP",
    "CI/CD",
    "Linux",
  ],
  ml: [
    "LLMs",
    "Transformers",
    "Distributed Training",
    "NLP",
    "Reinforcement Learning",
  ],
  tools: ["Git", "Vim/Neovim", "Jupyter", "Weights & Biases", "MLflow"],
};
