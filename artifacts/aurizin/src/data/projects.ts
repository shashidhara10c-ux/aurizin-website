import imgBot from "@/assets/portfolio-ai-bot.png";
import imgEdu from "@/assets/portfolio-edutech.png";
import imgFin from "@/assets/portfolio-finance.png";
import imgBlogAI from "@/assets/blog-ai.png";
import imgBlogCloud from "@/assets/blog-cloud.png";

export interface ProjectMetric {
  value: string;
  label: string;
}

export interface Project {
  id: number;
  slug: string;
  title: string;
  category: string;
  image: string;
  client: string;
  industry: string;
  timeline: string;
  excerpt: string;
  overview: string;
  challenge: string;
  solution: string[];
  results: string[];
  metrics: ProjectMetric[];
  stack: string[];
  techIcons: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "ai-powered-customer-support-bot",
    title: "AI-Powered Customer Support Bot",
    category: "AI Solutions",
    image: imgBot,
    client: "GrowthMart",
    industry: "Retail & E-commerce",
    timeline: "4 months",
    excerpt:
      "An intelligent chatbot integrating custom LLMs to handle 80% of tier-1 support queries automatically.",
    overview:
      "GrowthMart's support team was overwhelmed by repetitive questions about orders, returns, and shipping. We designed an AI assistant that understands natural language, retrieves answers from their knowledge base, and escalates gracefully to humans when needed.",
    challenge:
      "The client received over 12,000 support tickets a month, with 70% being repetitive tier-1 questions. Response times stretched to 18 hours during peak season, hurting customer satisfaction and retention.",
    solution: [
      "Built a retrieval-augmented generation (RAG) pipeline grounded in GrowthMart's product and policy data",
      "Integrated securely with their order management system for real-time, personalized answers",
      "Designed a confidence-based escalation flow that hands complex cases to human agents with full context",
      "Added an analytics dashboard so the support team can spot trends and improve content",
    ],
    results: [
      "80% of tier-1 queries now resolved instantly without human involvement",
      "Average first-response time dropped from 18 hours to under 30 seconds",
      "Customer satisfaction (CSAT) improved by 22 percentage points",
      "Support team refocused on high-value, complex customer relationships",
    ],
    metrics: [
      { value: "80%", label: "Queries Automated" },
      { value: "30s", label: "Avg Response Time" },
      { value: "+22pt", label: "CSAT Increase" },
    ],
    stack: ["Python", "React", "AWS", "PostgreSQL", "LangChain"],
    techIcons: ["SiPython", "SiReact", "FaAws"],
  },
  {
    id: 2,
    slug: "edutech-learning-platform",
    title: "Edutech Learning Platform",
    category: "Web Development",
    image: imgEdu,
    client: "EduNext",
    industry: "Education",
    timeline: "6 months",
    excerpt:
      "A scalable e-learning platform with video streaming, progress tracking, and interactive quizzes for 50k+ students.",
    overview:
      "EduNext wanted to move beyond pre-recorded videos into a fully interactive learning experience. We built a platform that scales to tens of thousands of concurrent learners while keeping the experience fast and engaging.",
    challenge:
      "Their legacy LMS could not handle traffic spikes during exam season, lacked mobile support, and offered no meaningful insight into how students were actually progressing.",
    solution: [
      "Architected a modular platform with adaptive video streaming for any device and bandwidth",
      "Built interactive quizzes, assignments, and real-time progress tracking",
      "Implemented a recommendation engine that suggests next lessons based on performance",
      "Designed an instructor dashboard with cohort analytics and engagement metrics",
    ],
    results: [
      "Scaled smoothly to 50,000+ active students with no downtime during peak loads",
      "Course completion rates increased by 35%",
      "Mobile usage grew to 60% of all sessions within three months",
      "Instructors gained actionable insight into learner engagement",
    ],
    metrics: [
      { value: "50k+", label: "Active Students" },
      { value: "+35%", label: "Completion Rate" },
      { value: "99.9%", label: "Uptime" },
    ],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    techIcons: ["SiNextdotjs", "SiTypescript", "SiPostgresql", "SiTailwindcss"],
  },
  {
    id: 3,
    slug: "finance-management-app",
    title: "Finance Management App",
    category: "Mobile Apps",
    image: imgFin,
    client: "FinEdge",
    industry: "Finance & Banking",
    timeline: "5 months",
    excerpt:
      "Secure mobile application for personal finance tracking, expense categorization, and wealth management.",
    overview:
      "FinEdge set out to help everyday users take control of their finances. We delivered a polished, bank-grade mobile app that turns scattered financial data into clear, actionable insight.",
    challenge:
      "Users juggled multiple accounts with no unified view, and the client needed to meet strict financial-data security and compliance standards from launch.",
    solution: [
      "Built a cross-platform app with secure aggregation of bank accounts and cards",
      "Implemented automatic expense categorization powered by machine learning",
      "Added budgeting tools, goal tracking, and personalized savings recommendations",
      "Achieved end-to-end encryption and compliance with financial data regulations",
    ],
    results: [
      "Reached 100k downloads within the first quarter after launch",
      "Users reported saving an average of 15% more each month",
      "Maintained a 4.8-star rating across app stores",
      "Passed independent security audit with zero critical findings",
    ],
    metrics: [
      { value: "100k", label: "Downloads (Q1)" },
      { value: "4.8★", label: "App Store Rating" },
      { value: "+15%", label: "Avg User Savings" },
    ],
    stack: ["React Native", "Node.js", "MongoDB"],
    techIcons: ["SiReact", "SiNodedotjs", "SiMongodb"],
  },
  {
    id: 4,
    slug: "cloud-infrastructure-migration",
    title: "Cloud Infrastructure Migration",
    category: "Cloud Solutions",
    image: imgBlogCloud,
    client: "LogiFlow",
    industry: "Logistics",
    timeline: "7 months",
    excerpt:
      "Migrated legacy on-premise infrastructure to a highly available, auto-scaling cloud architecture.",
    overview:
      "LogiFlow's growth was capped by aging on-premise servers. We re-platformed their core systems to the cloud, unlocking elasticity, resilience, and significant cost savings.",
    challenge:
      "Frequent outages, manual scaling, and rising hardware costs were limiting the business. A migration had to happen without disrupting 24/7 logistics operations.",
    solution: [
      "Assessed every workload and selected the right migration path for each",
      "Re-architected critical services for auto-scaling and high availability",
      "Implemented infrastructure-as-code for repeatable, auditable deployments",
      "Executed a phased, zero-downtime cutover with full rollback safety",
    ],
    results: [
      "Cut infrastructure costs by 42% through rightsizing and elasticity",
      "Eliminated unplanned outages with multi-zone redundancy",
      "Reduced deployment time from days to minutes",
      "Gave the team real-time observability across all services",
    ],
    metrics: [
      { value: "-42%", label: "Infra Cost" },
      { value: "99.99%", label: "Availability" },
      { value: "0", label: "Downtime Migration" },
    ],
    stack: ["AWS", "Python", "Terraform", "Kubernetes"],
    techIcons: ["FaAws", "SiPython"],
  },
  {
    id: 5,
    slug: "erp-system-for-manufacturing",
    title: "ERP System for Manufacturing",
    category: "Enterprise",
    image: imgBlogAI,
    client: "BuildTech",
    industry: "Manufacturing",
    timeline: "9 months",
    excerpt:
      "Comprehensive ERP system to manage supply chain, inventory, and production lines in real-time.",
    overview:
      "BuildTech ran their operations across disconnected spreadsheets and legacy tools. We delivered a unified ERP that gives leadership a single, real-time view of the entire business.",
    challenge:
      "Siloed data made forecasting impossible, inventory was frequently mismanaged, and production planning relied on guesswork rather than live data.",
    solution: [
      "Built a modular ERP covering procurement, inventory, production, and finance",
      "Integrated IoT sensors on the factory floor for real-time production tracking",
      "Created custom dashboards and forecasting tools for leadership",
      "Automated reordering and supplier workflows to prevent stockouts",
    ],
    results: [
      "Reduced inventory carrying costs by 28%",
      "Improved on-time order fulfillment to 98%",
      "Cut monthly financial close from two weeks to three days",
      "Unified six disconnected systems into one source of truth",
    ],
    metrics: [
      { value: "-28%", label: "Inventory Cost" },
      { value: "98%", label: "On-Time Fulfillment" },
      { value: "6→1", label: "Systems Unified" },
    ],
    stack: ["React", "Node.js", "PostgreSQL"],
    techIcons: ["SiReact", "SiNodedotjs", "SiPostgresql"],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
