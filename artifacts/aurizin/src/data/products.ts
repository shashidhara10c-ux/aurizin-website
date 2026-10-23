import inboxShot from "@/assets/wanexa-inbox.jpg";
import workflowShot from "@/assets/wanexa-workflows.jpg";
import crmShot from "@/assets/wanexa-crm.jpg";

export interface ProductFeature {
  title: string;
  desc: string;
}

export interface Product {
  slug: string;
  name: string;
  category: string;
  status: "Live" | "Beta" | "Coming soon";
  tagline: string;
  summary: string;
  url: string;
  signupUrl: string;
  accent: string;
  hero: string;
  gallery: { src: string; caption: string }[];
  audience: string[];
  features: ProductFeature[];
  plans: { name: string; price: string; note: string }[];
}

export const products: Product[] = [
  {
    slug: "wanexa",
    name: "Wanexa",
    category: "WhatsApp Business Platform",
    status: "Live",
    tagline: "Sell, support and follow up with customers on WhatsApp — from one shared inbox.",
    summary:
      "Wanexa is Aurizin's software-as-a-service platform on the official WhatsApp Business Platform (Cloud API). Businesses use it to answer customer chats as a team, send broadcast campaigns, automate replies with chatbots and an AI agent, track sales leads and take orders inside WhatsApp.",
    url: "https://pokie.in",
    signupUrl: "https://pokie.in/signup",
    accent: "#0E7C86",
    hero: inboxShot,
    gallery: [
      { src: inboxShot, caption: "Shared team inbox with contact details, tags, deals and orders beside every chat" },
      { src: workflowShot, caption: "No-code chatbot workflows with questions, buttons and hand-off to a person" },
      { src: crmShot, caption: "Sales pipeline that turns conversations into tracked deals" },
    ],
    audience: ["D2C and e-commerce brands", "Education and coaching", "Clinics and healthcare", "Real estate", "Travel and hospitality", "Agencies serving many brands"],
    features: [
      { title: "Shared team inbox", desc: "Every WhatsApp conversation in one place, with assignment, private notes, saved replies and the 24-hour reply window handled for you." },
      { title: "Broadcast campaigns", desc: "Send approved templates to segments, tags or imported lists, personalise each message, schedule sends and track delivered, read and replied." },
      { title: "Chatbots and automation", desc: "Welcome and away messages, keyword replies and step-by-step workflows with questions, buttons and conditions — no code needed." },
      { title: "AI agent", desc: "Answers customer questions from the business’s own knowledge base, in the customer’s language, and hands over to a person when unsure." },
      { title: "Sales CRM", desc: "A drag-and-drop pipeline linked to contacts and chats, with reports on value by stage and win rate." },
      { title: "WhatsApp commerce", desc: "Share the catalog as a tappable list, confirm orders with a checkout bot and manage them in an order panel." },
      { title: "Integrations and API", desc: "Shopify, WooCommerce, Razorpay, Zapier and a developer API for messages, contacts and events." },
      { title: "Built for compliance", desc: "Runs on Meta’s official Cloud API with opt-in tracking, template approval and role-based access for teams." },
    ],
    plans: [
      { name: "Starter", price: "₹999/month", note: "Shared inbox for 3 agents, campaigns, basic automations" },
      { name: "Growth", price: "₹2,499/month", note: "10 agents, workflows, CRM, catalog and reports" },
      { name: "Advanced", price: "₹4,999/month", note: "Unlimited agents, AI agent, API and webhooks" },
    ],
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
