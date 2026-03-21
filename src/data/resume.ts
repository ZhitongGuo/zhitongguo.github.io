export const personal = {
  name: "Zhitong (Payton) Guo",
  bio: `My work focuses on ML infrastructure and systems for large-scale model training. I am currently a Software Engineer at <a href="https://about.meta.com/" target="_blank" rel="noopener noreferrer">Meta Superintelligence Labs</a>, on the Kernels & Optimizations team. I'm particularly interested in <strong>Computer Use Agents</strong> and <strong>agent harnesses</strong> — building the systems that enable LLM-powered agents to autonomously interact with software environments and complete real-world tasks.`,
  bio2: `Previously, I interned at <a href="https://about.meta.com/" target="_blank" rel="noopener noreferrer">Meta</a> on YaRN positional encoding for context length extension, at <a href="https://www.alibabacloud.com/" target="_blank" rel="noopener noreferrer">Alibaba Cloud</a> on distributed computing, and conducted research on LLM agents at <a href="https://www.cmu.edu/" target="_blank" rel="noopener noreferrer">Carnegie Mellon University</a> and dialogue systems at <a href="https://www.columbia.edu/" target="_blank" rel="noopener noreferrer">Columbia University</a>. I'm driven by building reliable infrastructure that makes AI agents practical at scale.`,
  email: "zhitongg@alumni.cmu.edu",
  linkedin: "https://www.linkedin.com/in/zhitong-guo",
  github: "https://github.com/zhitongguo",
  scholar: "https://scholar.google.com/citations?user=PLACEHOLDER",
  profileImage: "/profile.jpg",
};

export interface NewsItem {
  date: string;
  content: string;
}

export const news: NewsItem[] = [
  {
    date: "2025/12",
    content:
      'Our paper <em>TheAgentCompany</em> was accepted at <strong>NeurIPS 2025</strong>!',
  },
  {
    date: "2025/02",
    content:
      "Joined Meta full-time as a Software Engineer at Superintelligence Labs!",
  },
  {
    date: "2024/12",
    content:
      "Graduated from Carnegie Mellon University with M.S. in Intelligent Information Systems.",
  },
  {
    date: "2024/08",
    content:
      "Wrapped up an exciting summer internship at Meta, working on YaRN positional encoding for LLM context extension.",
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

export interface ExperienceEntry {
  company: string;
  companyUrl?: string;
  roles: {
    title: string;
    period: string;
    bullets: string[];
  }[];
}

export const experiences: ExperienceEntry[] = [
  {
    company: "Meta",
    companyUrl: "https://about.meta.com/",
    roles: [
      {
        title: "Software Engineer, Kernels & Optimizations, Superintelligence Labs",
        period: "Feb 2025 — Present",
        bullets: [
          "Building ML infrastructure for large-scale model training across GPU architectures.",
          "Developing end-to-end test infrastructure (Granary) for nightly benchmark validation.",
          "Enabling training workloads on next-generation hardware (GB200/GB300).",
        ],
      },
      {
        title: "Software Engineer Intern, Llama Model Training",
        period: "May 2024 — Aug 2024",
        bullets: [
          "Implemented YaRN positional encoding for context length extension during supervised fine-tuning.",
        ],
      },
    ],
  },
  {
    company: "Alibaba Cloud",
    companyUrl: "https://www.alibabacloud.com/",
    roles: [
      {
        title: "Software Engineer Intern, Distributed Computing",
        period: "May 2022 — Aug 2022",
        bullets: [
          "Developed cloud-native solutions for distributed computing infrastructure and internal tooling.",
        ],
      },
    ],
  },
];

export interface ResearchEntry {
  institution: string;
  institutionUrl?: string;
  role: string;
  period: string;
  bullets: string[];
}

export const research: ResearchEntry[] = [
  {
    institution: "Carnegie Mellon University",
    institutionUrl: "https://www.cmu.edu/",
    role: "Research Assistant",
    period: "Jan 2024 — Dec 2024",
    bullets: [
      'Advised by Prof. <a href="https://www.phontron.com/" target="_blank" rel="noopener noreferrer">Graham Neubig</a>.',
      "Worked on LLM-based agents for software engineering tasks, contributing to the TheAgentCompany benchmark for evaluating AI agents in realistic workplace scenarios.",
    ],
  },
  {
    institution: "Columbia University",
    institutionUrl: "https://www.columbia.edu/",
    role: "Research Assistant",
    period: "Sep 2023 — Dec 2023",
    bullets: [
      'Advised by Prof. <a href="https://zhouyu.cs.columbia.edu/" target="_blank" rel="noopener noreferrer">Zhou Yu</a>.',
      "Researched dialogue systems and conversational AI, focusing on task-oriented dialogue and natural language understanding.",
    ],
  },
  {
    institution: "New York University",
    institutionUrl: "https://www.nyu.edu/",
    role: "Research Assistant",
    period: "Jan 2023 — May 2023",
    bullets: [
      "Conducted research on machine learning applications for domain-specific knowledge-guided dialogue systems.",
    ],
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
      "Frank F. Xu, Yufan Song, Boxuan Li, Yuxuan Tang, Kritanjali Jain, Mengxue Bao, <strong>Zhitong Guo</strong>, et al.",
    venue: "NeurIPS 2025",
    year: 2025,
    link: "https://arxiv.org/abs/2412.14161",
  },
  {
    title:
      "DAsk: A Domain-Specific Knowledge-Guided Dialogue Dataset for Multi-Professional Scenarios",
    authors: "<strong>Zhitong Guo</strong>, et al.",
    venue: "Preprint",
    year: 2024,
  },
  {
    title:
      "Machine Learning Approaches for Photovoltaic Performance Prediction",
    authors: "<strong>Zhitong Guo</strong>, et al.",
    venue: "Conference Paper",
    year: 2023,
  },
];
