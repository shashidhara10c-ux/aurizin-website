import imgAI from "@/assets/blog-ai.png";
import imgCloud from "@/assets/blog-cloud.png";
import imgSoft from "@/assets/blog-software.png";

export interface BlogSection {
  heading?: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  category: string;
  image: string;
  date: string;
  readTime: string;
  author: string;
  authorRole: string;
  excerpt: string;
  intro: string;
  content: BlogSection[];
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "future-of-ai-in-enterprise-software-development",
    title: "The Future of AI in Enterprise Software Development",
    category: "AI & Automation",
    image: imgAI,
    date: "Oct 15, 2024",
    readTime: "5 min read",
    author: "Aravind Kumar",
    authorRole: "Head of AI Engineering",
    excerpt:
      "Explore how artificial intelligence is reshaping the way large organizations build, deploy, and maintain software systems.",
    intro:
      "Artificial intelligence has moved from a research curiosity to a core engineering capability. For enterprises, the question is no longer whether to adopt AI, but how to embed it responsibly across the entire software lifecycle.",
    content: [
      {
        heading: "From Autocomplete to Autonomous Workflows",
        paragraphs: [
          "The first wave of AI in software development showed up as smarter autocomplete. Today, large language models review pull requests, generate test suites, write documentation, and even propose architectural changes. The productivity gains are real, but the bigger shift is cultural: engineering teams are learning to treat AI as a collaborator rather than a tool.",
          "At Aurizin, we have seen teams reduce boilerplate work by up to 40% by integrating AI assistants directly into their CI/CD pipelines. That freed engineers to focus on the problems that actually move the business forward — domain modelling, performance, and customer experience.",
        ],
      },
      {
        heading: "Where AI Delivers the Most Value Today",
        paragraphs: [
          "Not every problem is an AI problem. The enterprises seeing the strongest return are deliberate about where they apply it.",
        ],
        bullets: [
          "Code review and quality gates that catch regressions before they reach production",
          "Automated test generation for legacy systems with little existing coverage",
          "Intelligent observability that surfaces the root cause of incidents in minutes, not hours",
          "Natural language interfaces that let non-technical staff query complex internal systems",
        ],
      },
      {
        heading: "The Governance Imperative",
        paragraphs: [
          "With great capability comes the need for guardrails. Data privacy, model bias, and intellectual-property leakage are board-level concerns. Successful organizations pair every AI initiative with a clear governance framework: documented data lineage, human-in-the-loop checkpoints, and continuous evaluation against fairness and accuracy benchmarks.",
          "We help clients stand up these frameworks early, so that innovation and compliance grow together rather than in tension.",
        ],
      },
      {
        heading: "Looking Ahead",
        paragraphs: [
          "The next five years will blur the line between writing software and describing intent. Engineers will increasingly specify outcomes and constraints, while AI systems generate, test, and optimize implementations. The winners will be the organizations that build the right foundations now — clean data, modular architecture, and a culture of disciplined experimentation.",
        ],
      },
    ],
  },
  {
    id: 2,
    slug: "cloud-migration-strategies-comprehensive-guide",
    title: "Cloud Migration Strategies: A Comprehensive Guide",
    category: "Cloud Computing",
    image: imgCloud,
    date: "Oct 10, 2024",
    readTime: "8 min read",
    author: "Sneha Reddy",
    authorRole: "Principal Cloud Architect",
    excerpt:
      "A step-by-step approach to moving your legacy infrastructure to the cloud with zero downtime and maximum security.",
    intro:
      "Cloud migration is rarely a single event — it is a program of work that touches architecture, operations, security, and culture. A clear strategy turns a risky lift-and-shift into a controlled, value-driven transformation.",
    content: [
      {
        heading: "Start With Why, Not How",
        paragraphs: [
          "Before choosing a provider or a tool, define the business outcomes you expect: lower operating costs, faster release cycles, improved resilience, or global scale. These goals shape every downstream decision and give you a yardstick to measure success.",
        ],
      },
      {
        heading: "The Six Rs of Migration",
        paragraphs: [
          "Each workload deserves a deliberate migration path. We assess applications against six common strategies:",
        ],
        bullets: [
          "Rehost — lift and shift with minimal changes for speed",
          "Replatform — small optimizations such as managed databases",
          "Refactor — re-architect for cloud-native scalability",
          "Repurchase — move to a SaaS alternative",
          "Retain — keep on-premise where it makes sense",
          "Retire — decommission what is no longer needed",
        ],
      },
      {
        heading: "Designing for Zero Downtime",
        paragraphs: [
          "Mission-critical systems cannot afford an outage during migration. We use techniques like blue-green deployments, database replication with change-data-capture, and phased traffic shifting to cut over with confidence. Every step is reversible, so a problem never becomes a crisis.",
        ],
      },
      {
        heading: "Security and Cost Discipline",
        paragraphs: [
          "Security must be built in from day one — least-privilege IAM, encryption in transit and at rest, and continuous compliance scanning. Equally important is cost governance: tagging, budgets, and rightsizing prevent the bill shock that derails many cloud programs.",
          "The cloud rewards good engineering hygiene. Teams that automate infrastructure-as-code and bake observability into every service realize the full promise of elasticity and resilience.",
        ],
      },
    ],
  },
  {
    id: 3,
    slug: "why-nextjs-is-the-ultimate-framework",
    title: "Why Next.js is the Ultimate Framework for Modern Web Apps",
    category: "Web Development",
    image: imgSoft,
    date: "Oct 05, 2024",
    readTime: "4 min read",
    author: "Rahul Verma",
    authorRole: "Lead Frontend Engineer",
    excerpt:
      "An in-depth look at the performance, SEO, and developer experience benefits of using Next.js for modern web applications.",
    intro:
      "Choosing a frontend framework is a long-term commitment. Next.js has become our default for production web applications because it balances developer happiness with the performance and SEO that businesses demand.",
    content: [
      {
        heading: "Performance by Default",
        paragraphs: [
          "Next.js gives you server-side rendering, static generation, and incremental regeneration out of the box. That means fast first paints, great Core Web Vitals, and pages that stay fresh without rebuilding the entire site. Image optimization, code splitting, and edge rendering all come included.",
        ],
      },
      {
        heading: "SEO That Just Works",
        paragraphs: [
          "Because content can be rendered on the server, search engines see fully formed HTML rather than an empty shell waiting for JavaScript. Combined with structured metadata and clean routing, this gives marketing teams the discoverability they need without bolting on workarounds.",
        ],
      },
      {
        heading: "A Developer Experience Teams Love",
        paragraphs: [
          "File-based routing, built-in API routes, and first-class TypeScript support let teams ship features quickly and safely. The framework's conventions reduce bikeshedding, so new engineers become productive in days rather than weeks.",
        ],
        bullets: [
          "Hot reloading and instant feedback during development",
          "A vast ecosystem and active community",
          "Seamless deployment to edge networks",
          "Strong defaults that scale from prototype to enterprise",
        ],
      },
      {
        heading: "When It Is the Right Choice",
        paragraphs: [
          "Next.js shines for content-rich marketing sites, e-commerce, dashboards, and any application where performance and SEO matter. For our clients, it consistently shortens time to market while keeping long-term maintenance costs low.",
        ],
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
