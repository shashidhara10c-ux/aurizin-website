import hcHero3d from "@/assets/hc-hero-3d.png";
import hcHms from "@/assets/hc-hms.png";
import hcPatientApp from "@/assets/hc-patient-app.png";
import hcDoctor from "@/assets/hc-doctor.png";
import hcPharmacy from "@/assets/hc-pharmacy.png";
import hcChatbot from "@/assets/hc-chatbot.png";
import hcAnalytics from "@/assets/hc-analytics.png";
import eduHero from "@/assets/edu-hero.png";
import edu1 from "@/assets/edu-1.png";
import edu2 from "@/assets/edu-2.png";
import edu3 from "@/assets/edu-3.png";
import edu4 from "@/assets/edu-4.png";
import edu5 from "@/assets/edu-5.png";
import edu6 from "@/assets/edu-6.png";
import rtHero from "@/assets/rt-hero.png";
import rt1 from "@/assets/rt-1.png";
import rt2 from "@/assets/rt-2.png";
import rt3 from "@/assets/rt-3.png";
import rt4 from "@/assets/rt-4.png";
import rt5 from "@/assets/rt-5.png";
import rt6 from "@/assets/rt-6.png";
import mfgHero from "@/assets/mfg-hero.png";
import mfg1 from "@/assets/mfg-1.png";
import mfg2 from "@/assets/mfg-2.png";
import mfg3 from "@/assets/mfg-3.png";
import mfg4 from "@/assets/mfg-4.png";
import mfg5 from "@/assets/mfg-5.png";
import mfg6 from "@/assets/mfg-6.png";
import finHero from "@/assets/fin-hero.png";
import fin1 from "@/assets/fin-1.png";
import fin2 from "@/assets/fin-2.png";
import fin3 from "@/assets/fin-3.png";
import fin4 from "@/assets/fin-4.png";
import fin5 from "@/assets/fin-5.png";
import fin6 from "@/assets/fin-6.png";
import hspHero from "@/assets/hsp-hero.png";
import hsp1 from "@/assets/hsp-1.png";
import hsp2 from "@/assets/hsp-2.png";
import hsp3 from "@/assets/hsp-3.png";
import hsp4 from "@/assets/hsp-4.png";
import hsp5 from "@/assets/hsp-5.png";
import hsp6 from "@/assets/hsp-6.png";
import gmHero from "@/assets/gm-hero.png";
import gm1 from "@/assets/gm-1.png";
import gm2 from "@/assets/gm-2.png";
import gm3 from "@/assets/gm-3.png";
import gm4 from "@/assets/gm-4.png";
import gm5 from "@/assets/gm-5.png";
import gm6 from "@/assets/gm-6.png";
import reHero from "@/assets/re-hero.png";
import re1 from "@/assets/re-1.png";
import re2 from "@/assets/re-2.png";
import re3 from "@/assets/re-3.png";
import re4 from "@/assets/re-4.png";
import re5 from "@/assets/re-5.png";
import re6 from "@/assets/re-6.png";
import logHero from "@/assets/log-hero.png";
import log1 from "@/assets/log-1.png";
import log2 from "@/assets/log-2.png";
import log3 from "@/assets/log-3.png";
import log4 from "@/assets/log-4.png";
import log5 from "@/assets/log-5.png";
import log6 from "@/assets/log-6.png";
import govHero from "@/assets/gov-hero.png";
import gov1 from "@/assets/gov-1.png";
import gov2 from "@/assets/gov-2.png";
import gov3 from "@/assets/gov-3.png";
import gov4 from "@/assets/gov-4.png";
import gov5 from "@/assets/gov-5.png";
import gov6 from "@/assets/gov-6.png";
import suHero from "@/assets/su-hero.png";
import su1 from "@/assets/su-1.png";
import su2 from "@/assets/su-2.png";
import su3 from "@/assets/su-3.png";
import su4 from "@/assets/su-4.png";
import su5 from "@/assets/su-5.png";
import su6 from "@/assets/su-6.png";
import entHero from "@/assets/ent-hero.png";
import ent1 from "@/assets/ent-1.png";
import ent2 from "@/assets/ent-2.png";
import ent3 from "@/assets/ent-3.png";
import ent4 from "@/assets/ent-4.png";
import ent5 from "@/assets/ent-5.png";
import ent6 from "@/assets/ent-6.png";

export interface IndustryBenefit {
  icon: string;
  text: string;
}

export interface IndustrySolutionCard {
  title: string;
  desc: string;
  image: string;
}

export interface Industry {
  slug: string;
  name: string;
  heroTitle: string;
  badge: string;
  iconKey: string;
  color: string;
  heroImage?: string;
  shortDesc: string;
  intro: string;
  problems: string[];
  solutions: string[];
  solutionCards?: IndustrySolutionCard[];
  techIcons: string[];
  benefits: IndustryBenefit[];
}

export const industries: Industry[] = [
  {
    slug: "healthcare",
    name: "Healthcare",
    heroTitle: "Healthcare Software Solutions",
    badge: "HEALTHCARE",
    iconKey: "HeartPulse",
    color: "text-red-400",
    heroImage: hcHero3d,
    shortDesc: "Telemedicine, EHR systems, and health tracking apps.",
    intro:
      "Aurizin builds secure, compliant healthcare platforms that connect patients, doctors, and administrators. From telemedicine to AI-assisted diagnostics, we help providers digitize care, automate operations, and protect sensitive medical data with custom software, cloud, and intelligent automation.",
    problems: [
      "Appointment scheduling and no-show management",
      "Fragmented patient records (EHR/EMR)",
      "Hospital billing and insurance claims",
      "Doctor and patient portals",
      "Telemedicine and remote consultations",
      "Data security and HIPAA-grade compliance",
    ],
    solutions: [
      "Hospital management system (HMS)",
      "Clinic management software",
      "Patient mobile app with health tracking",
      "Doctor dashboard and scheduling",
      "Pharmacy management software",
      "AI medical chatbot and symptom checker",
      "Analytics and reporting dashboard",
    ],
    solutionCards: [
      {
        title: "Hospital Management System",
        desc: "End-to-end HMS to manage admissions, beds, departments, billing, and staff from a single dashboard.",
        image: hcHms,
      },
      {
        title: "Patient Mobile App",
        desc: "Health tracking, appointment booking, reports, and medication reminders in a sleek patient-facing app.",
        image: hcPatientApp,
      },
      {
        title: "Doctor Dashboard & Scheduling",
        desc: "Smart calendars, availability management, and patient queues that keep clinicians in control of their day.",
        image: hcDoctor,
      },
      {
        title: "Pharmacy Management",
        desc: "Real-time inventory, prescription queues, and low-stock alerts to keep the pharmacy running smoothly.",
        image: hcPharmacy,
      },
      {
        title: "AI Medical Chatbot",
        desc: "24/7 symptom checker and assistant that triages queries and guides patients to the right care.",
        image: hcChatbot,
      },
      {
        title: "Analytics & Reporting",
        desc: "Live dashboards turning clinical and operational data into clear, actionable insights for leadership.",
        image: hcAnalytics,
      },
    ],
    techIcons: [
      "SiReact",
      "SiNextdotjs",
      "SiNodedotjs",
      "DiJava",
      "SiPython",
      "FaAws",
      "FaMicrosoft",
      "SiPostgresql",
      "SiMongodb",
      "SiOpenai",
    ],
    benefits: [
      { icon: "Gauge", text: "Faster clinical operations" },
      { icon: "Smile", text: "Better patient experience" },
      { icon: "ShieldCheck", text: "Secure, compliant data" },
      { icon: "TrendingUp", text: "Scalable infrastructure" },
      { icon: "Bot", text: "Automated workflows" },
      { icon: "PiggyBank", text: "Lower operational costs" },
    ],
  },
  {
    slug: "education",
    name: "Education",
    heroTitle: "Education & E-Learning Software Solutions",
    badge: "EDUCATION",
    iconKey: "GraduationCap",
    color: "text-blue-400",
    heroImage: eduHero,
    shortDesc: "LMS, e-learning platforms, and virtual classrooms.",
    intro:
      "Aurizin helps schools, universities, and edtech companies deliver engaging digital learning. We build LMS platforms, virtual classrooms, and AI tutoring tools that automate administration, personalize learning, and scale to thousands of students on the cloud.",
    problems: [
      "Course and content management",
      "Student enrollment and records",
      "Virtual classrooms and live teaching",
      "Assignments, quizzes, and exams",
      "Student engagement and progress tracking",
      "Fee collection and administration",
    ],
    solutions: [
      "Learning Management System (LMS)",
      "E-learning mobile app",
      "Virtual classroom and live streaming",
      "Online examination and proctoring",
      "Student and parent portal",
      "AI tutoring and doubt-solving chatbot",
      "Performance analytics dashboard",
    ],
    solutionCards: [
      {
        title: "Learning Management System",
        desc: "A complete LMS to manage courses, content, enrollment, and grading from one platform.",
        image: edu1,
      },
      {
        title: "E-Learning Mobile App",
        desc: "On-the-go learning with video lessons, quizzes, and progress tracking in a sleek student app.",
        image: edu2,
      },
      {
        title: "Virtual Classroom",
        desc: "Live streaming classes with interactive whiteboards, chat, and breakout rooms.",
        image: edu3,
      },
      {
        title: "Online Examination & Proctoring",
        desc: "Secure online exams with auto-grading and AI proctoring to maintain integrity.",
        image: edu4,
      },
      {
        title: "AI Tutoring Assistant",
        desc: "A 24/7 doubt-solving chatbot that personalizes learning for every student.",
        image: edu5,
      },
      {
        title: "Performance Analytics",
        desc: "Dashboards revealing student progress, engagement, and outcomes at a glance.",
        image: edu6,
      },
    ],

    techIcons: [
      "SiReact",
      "SiNextdotjs",
      "SiNodedotjs",
      "SiPython",
      "SiFlutter",
      "FaAws",
      "SiFirebase",
      "SiPostgresql",
      "SiMongodb",
      "SiOpenai",
    ],
    benefits: [
      { icon: "Sparkles", text: "Engaging learning experiences" },
      { icon: "TrendingUp", text: "Reach a wider audience" },
      { icon: "Bot", text: "Automated grading and admin" },
      { icon: "Layers", text: "Scalable platform" },
      { icon: "Eye", text: "Data-driven insights" },
      { icon: "PiggyBank", text: "Reduced overhead" },
    ],
  },
  {
    slug: "retail-ecommerce",
    name: "Retail & E-commerce",
    heroTitle: "Retail & E-Commerce Software Solutions",
    badge: "RETAIL & E-COMMERCE",
    iconKey: "ShoppingCart",
    color: "text-orange-400",
    heroImage: rtHero,
    shortDesc: "Marketplaces, inventory management, and POS.",
    intro:
      "Aurizin builds high-converting online stores and retail systems that scale. From custom storefronts and POS to AI recommendations and real-time inventory, we help retailers sell across every channel and turn shoppers into loyal customers.",
    problems: [
      "Online storefront and checkout",
      "Inventory and stock management",
      "Order and delivery tracking",
      "Payments, refunds, and reconciliation",
      "Customer retention and loyalty",
      "Multi-channel and omnichannel selling",
    ],
    solutions: [
      "Custom e-commerce platform",
      "Point-of-sale (POS) system",
      "Inventory management software",
      "Mobile shopping app",
      "AI product recommendations",
      "CRM and loyalty programs",
      "Sales and revenue analytics dashboard",
    ],
    solutionCards: [
      {
        title: "Custom E-Commerce Platform",
        desc: "High-converting online storefronts built to scale across every channel.",
        image: rt1,
      },
      {
        title: "Point-of-Sale (POS)",
        desc: "Fast, reliable in-store checkout synced with online inventory in real time.",
        image: rt2,
      },
      {
        title: "Inventory Management",
        desc: "Real-time stock tracking, alerts, and reordering across all locations.",
        image: rt3,
      },
      {
        title: "Mobile Shopping App",
        desc: "A beautiful shopping app with personalized feeds and one-tap checkout.",
        image: rt4,
      },
      {
        title: "AI Product Recommendations",
        desc: "Smart recommendations that boost basket size and conversions.",
        image: rt5,
      },
      {
        title: "Sales & Revenue Analytics",
        desc: "Live dashboards turning sales data into clear, actionable insights.",
        image: rt6,
      },
    ],

    techIcons: [
      "SiReact",
      "SiNextdotjs",
      "SiNodedotjs",
      "SiTypescript",
      "FaAws",
      "SiPostgresql",
      "SiMongodb",
      "SiRedis",
      "SiOpenai",
    ],
    benefits: [
      { icon: "TrendingUp", text: "Higher conversions" },
      { icon: "Sparkles", text: "Personalized shopping" },
      { icon: "Eye", text: "Real-time inventory" },
      { icon: "Layers", text: "Scalable storefront" },
      { icon: "Bot", text: "Automated marketing" },
      { icon: "Coins", text: "Increased revenue" },
    ],
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    heroTitle: "Manufacturing & Industrial Software Solutions",
    badge: "MANUFACTURING",
    iconKey: "Factory",
    color: "text-gray-400",
    heroImage: mfgHero,
    shortDesc: "ERP solutions, supply chain, and IoT integration.",
    intro:
      "Aurizin digitizes the factory floor with ERP, IoT, and AI. We connect machines, supply chains, and teams into a single system that reduces downtime, optimizes production, and gives leaders real-time visibility into every operation.",
    problems: [
      "Production planning and scheduling",
      "Supply chain visibility",
      "Inventory and raw material tracking",
      "Unplanned machine downtime",
      "Quality control and compliance",
      "Manual, error-prone reporting",
    ],
    solutions: [
      "Enterprise Resource Planning (ERP) system",
      "Supply chain management software",
      "IoT and machine monitoring",
      "Inventory and warehouse management",
      "AI predictive maintenance",
      "Production analytics dashboard",
    ],
    solutionCards: [
      {
        title: "ERP System",
        desc: "A unified ERP connecting production, inventory, finance, and teams.",
        image: mfg1,
      },
      {
        title: "Supply Chain Management",
        desc: "End-to-end visibility across suppliers, shipments, and demand.",
        image: mfg2,
      },
      {
        title: "IoT & Machine Monitoring",
        desc: "Real-time machine telemetry to spot issues before they cause downtime.",
        image: mfg3,
      },
      {
        title: "Warehouse Management",
        desc: "Smart warehouse management with real-time material tracking.",
        image: mfg4,
      },
      {
        title: "AI Predictive Maintenance",
        desc: "AI that predicts equipment failures and schedules maintenance proactively.",
        image: mfg5,
      },
      {
        title: "Production Analytics",
        desc: "Dashboards giving leaders real-time visibility into every operation.",
        image: mfg6,
      },
    ],

    techIcons: [
      "SiReact",
      "SiNodedotjs",
      "DiJava",
      "SiPython",
      "FaAws",
      "FaMicrosoft",
      "SiPostgresql",
      "SiMongodb",
      "SiTensorflow",
    ],
    benefits: [
      { icon: "Gauge", text: "Optimized production" },
      { icon: "Clock", text: "Reduced downtime" },
      { icon: "Eye", text: "Real-time visibility" },
      { icon: "Layers", text: "Scalable operations" },
      { icon: "Bot", text: "Predictive automation" },
      { icon: "PiggyBank", text: "Lower costs" },
    ],
  },
  {
    slug: "finance-banking",
    name: "Finance & Banking",
    heroTitle: "Finance & Banking Software Solutions",
    badge: "FINANCE & BANKING",
    iconKey: "Banknote",
    color: "text-green-400",
    heroImage: finHero,
    shortDesc: "Fintech apps, secure gateways, and trading platforms.",
    intro:
      "Aurizin builds secure, compliant fintech and banking platforms. From digital banking and payment gateways to AI fraud detection and trading systems, we deliver bank-grade security, real-time performance, and seamless customer experiences.",
    problems: [
      "Secure, high-volume transactions",
      "Regulatory compliance and auditing",
      "Fraud detection and prevention",
      "Customer onboarding and KYC",
      "Loan and account management",
      "Real-time financial reporting",
    ],
    solutions: [
      "Digital banking platform",
      "Fintech and payment app",
      "Secure payment gateway",
      "Loan management system",
      "AI fraud detection engine",
      "Trading and investment platform",
      "Financial analytics dashboard",
    ],
    solutionCards: [
      {
        title: "Digital Banking Platform",
        desc: "Secure, seamless digital banking for accounts, transfers, and payments.",
        image: fin1,
      },
      {
        title: "Fintech & Payment App",
        desc: "A slick mobile app for payments, wallets, and money management.",
        image: fin2,
      },
      {
        title: "Loan Management System",
        desc: "Streamlined loan origination, approval, and repayment tracking.",
        image: fin3,
      },
      {
        title: "AI Fraud Detection",
        desc: "Real-time AI that detects and prevents fraudulent transactions.",
        image: fin4,
      },
      {
        title: "Trading & Investment Platform",
        desc: "Real-time trading with portfolios, charts, and market data.",
        image: fin5,
      },
      {
        title: "Financial Analytics",
        desc: "Live dashboards delivering bank-grade financial insights.",
        image: fin6,
      },
    ],

    techIcons: [
      "SiReact",
      "SiNextdotjs",
      "DiJava",
      "SiSpringboot",
      "SiNodedotjs",
      "FaAws",
      "FaMicrosoft",
      "SiPostgresql",
      "SiRedis",
      "SiOpenai",
    ],
    benefits: [
      { icon: "ShieldCheck", text: "Bank-grade security" },
      { icon: "Gauge", text: "Faster transactions" },
      { icon: "Lock", text: "Regulatory compliance" },
      { icon: "Layers", text: "Scalable systems" },
      { icon: "Bot", text: "Fraud prevention" },
      { icon: "Smile", text: "Greater customer trust" },
    ],
  },
  {
    slug: "hospitality",
    name: "Hospitality",
    heroTitle: "Hospitality & Travel Software Solutions",
    badge: "HOSPITALITY",
    iconKey: "UtensilsCrossed",
    color: "text-yellow-400",
    heroImage: hspHero,
    shortDesc: "Booking systems, POS, and CRM solutions.",
    intro:
      "Aurizin helps hotels, restaurants, and travel businesses deliver memorable guest experiences. We build booking engines, property management systems, and AI concierge tools that automate operations and boost occupancy and revenue.",
    problems: [
      "Reservations and online bookings",
      "Front-desk and check-in/out",
      "Guest experience and personalization",
      "Restaurant ordering and POS",
      "Channel and rate management",
      "Reviews, feedback, and loyalty",
    ],
    solutions: [
      "Hotel and restaurant booking system",
      "Property management system (PMS)",
      "POS and order management software",
      "Guest mobile app",
      "CRM and loyalty programs",
      "AI concierge chatbot",
      "Revenue and occupancy dashboard",
    ],
    solutionCards: [
      {
        title: "Booking System",
        desc: "Smart booking engines that maximize occupancy and revenue.",
        image: hsp1,
      },
      {
        title: "Property Management System",
        desc: "Run the front desk, housekeeping, and check-ins from one place.",
        image: hsp2,
      },
      {
        title: "POS & Order Management",
        desc: "Fast restaurant ordering and POS synced across the venue.",
        image: hsp3,
      },
      {
        title: "Guest Mobile App",
        desc: "A personalized guest app for bookings, services, and concierge.",
        image: hsp4,
      },
      {
        title: "AI Concierge Chatbot",
        desc: "A 24/7 AI concierge that personalizes every guest experience.",
        image: hsp5,
      },
      {
        title: "Revenue & Occupancy Dashboard",
        desc: "Live insights into occupancy, rates, and revenue performance.",
        image: hsp6,
      },
    ],

    techIcons: [
      "SiReact",
      "SiNextdotjs",
      "SiNodedotjs",
      "SiFlutter",
      "FaAws",
      "SiFirebase",
      "SiPostgresql",
      "SiMongodb",
      "SiOpenai",
    ],
    benefits: [
      { icon: "Gauge", text: "Smoother bookings" },
      { icon: "Smile", text: "Better guest experience" },
      { icon: "Bot", text: "Automated operations" },
      { icon: "Layers", text: "Scalable platform" },
      { icon: "TrendingUp", text: "Higher occupancy" },
      { icon: "Coins", text: "Increased revenue" },
    ],
  },
  {
    slug: "gaming-entertainment",
    name: "Gaming & Entertainment",
    heroTitle: "Gaming & Entertainment Software Solutions",
    badge: "GAMING & ENTERTAINMENT",
    iconKey: "Gamepad2",
    color: "text-purple-400",
    heroImage: gmHero,
    shortDesc: "Streaming platforms, game servers, and communities.",
    intro:
      "Aurizin builds high-performance gaming and streaming platforms that scale to millions. From real-time multiplayer backends to OTT streaming and monetization, we deliver low-latency, immersive experiences that keep players and viewers engaged.",
    problems: [
      "Game server scalability",
      "Real-time multiplayer and matchmaking",
      "Streaming and content delivery",
      "Monetization and in-app purchases",
      "Community and social features",
      "User retention and engagement",
    ],
    solutions: [
      "Multiplayer game backend",
      "OTT and video streaming platform",
      "Live streaming and chat",
      "In-app purchases and payments",
      "Matchmaking and leaderboards",
      "AI content moderation",
      "Engagement analytics dashboard",
    ],
    solutionCards: [
      {
        title: "Multiplayer Game Backend",
        desc: "Scalable, low-latency backends for real-time multiplayer games.",
        image: gm1,
      },
      {
        title: "OTT Streaming Platform",
        desc: "High-performance video streaming that scales to millions.",
        image: gm2,
      },
      {
        title: "In-App Purchases",
        desc: "Seamless monetization with in-app purchases and payments.",
        image: gm3,
      },
      {
        title: "Matchmaking & Leaderboards",
        desc: "Fair matchmaking and competitive leaderboards that drive engagement.",
        image: gm4,
      },
      {
        title: "AI Content Moderation",
        desc: "AI that keeps communities safe with real-time moderation.",
        image: gm5,
      },
      {
        title: "Engagement Analytics",
        desc: "Dashboards revealing player behavior, retention, and revenue.",
        image: gm6,
      },
    ],

    techIcons: [
      "SiReact",
      "SiNodedotjs",
      "SiTypescript",
      "SiKotlin",
      "SiSwift",
      "FaAws",
      "SiGooglecloud",
      "SiRedis",
      "SiMongodb",
      "SiOpenai",
    ],
    benefits: [
      { icon: "Gauge", text: "Low-latency gameplay" },
      { icon: "Layers", text: "Massive scalability" },
      { icon: "Sparkles", text: "Immersive experiences" },
      { icon: "Eye", text: "Smooth streaming" },
      { icon: "Bot", text: "Automated moderation" },
      { icon: "Coins", text: "Higher monetization" },
    ],
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    heroTitle: "Real Estate Software Solutions",
    badge: "REAL ESTATE",
    iconKey: "Building2",
    color: "text-cyan-400",
    heroImage: reHero,
    shortDesc: "Property portals, CRM, and virtual tours.",
    intro:
      "Aurizin builds property portals, CRMs, and immersive virtual tour platforms for real estate. We help agencies and proptech firms generate leads, close deals faster, and give buyers rich, interactive property experiences.",
    problems: [
      "Property listings and search",
      "Lead and client management",
      "Virtual tours and property viewing",
      "Document and contract handling",
      "Agent and broker collaboration",
      "Market insights and pricing",
    ],
    solutions: [
      "Property listing portal",
      "Real estate CRM",
      "Virtual tour and 3D walkthrough",
      "Agent and broker dashboard",
      "Document management system",
      "AI property recommendations",
      "Market analytics dashboard",
    ],
    solutionCards: [
      {
        title: "Property Listing Portal",
        desc: "Rich property portals with powerful search and lead capture.",
        image: re1,
      },
      {
        title: "Real Estate CRM",
        desc: "Manage leads, clients, and deals through every stage.",
        image: re2,
      },
      {
        title: "Virtual Tours & 3D",
        desc: "Immersive 3D walkthroughs that sell properties remotely.",
        image: re3,
      },
      {
        title: "Agent & Broker Dashboard",
        desc: "Tools that help agents collaborate and close deals faster.",
        image: re4,
      },
      {
        title: "AI Property Recommendations",
        desc: "Smart matching that connects buyers with the right homes.",
        image: re5,
      },
      {
        title: "Market Analytics",
        desc: "Live market insights and pricing intelligence for smarter decisions.",
        image: re6,
      },
    ],

    techIcons: [
      "SiReact",
      "SiNextdotjs",
      "SiNodedotjs",
      "SiTypescript",
      "FaAws",
      "SiPostgresql",
      "SiMongodb",
      "SiFirebase",
      "SiOpenai",
    ],
    benefits: [
      { icon: "Gauge", text: "Faster deal closures" },
      { icon: "TrendingUp", text: "Better lead conversion" },
      { icon: "Sparkles", text: "Immersive tours" },
      { icon: "Layers", text: "Scalable portal" },
      { icon: "Bot", text: "Automated workflows" },
      { icon: "Eye", text: "Data-driven decisions" },
    ],
  },
  {
    slug: "logistics-transportation",
    name: "Logistics & Transportation",
    heroTitle: "Logistics & Transportation Software Solutions",
    badge: "LOGISTICS & TRANSPORTATION",
    iconKey: "Truck",
    color: "text-teal-400",
    heroImage: logHero,
    shortDesc: "Fleet management, tracking, and delivery apps.",
    intro:
      "Aurizin builds logistics platforms that move goods faster and cheaper. From fleet management and real-time GPS tracking to AI route optimization and warehouse systems, we help carriers and 3PLs streamline every mile.",
    problems: [
      "Fleet management and maintenance",
      "Route planning and optimization",
      "Real-time shipment tracking",
      "Warehouse and inventory operations",
      "Delivery scheduling and dispatch",
      "Fuel and cost control",
    ],
    solutions: [
      "Fleet management system",
      "Real-time GPS tracking",
      "AI route optimization",
      "Warehouse management system (WMS)",
      "Delivery and courier app",
      "Driver mobile app",
      "Logistics analytics dashboard",
    ],
    solutionCards: [
      {
        title: "Fleet Management",
        desc: "Track, maintain, and optimize your entire fleet in one system.",
        image: log1,
      },
      {
        title: "Real-Time GPS Tracking",
        desc: "Live shipment and vehicle tracking across every mile.",
        image: log2,
      },
      {
        title: "AI Route Optimization",
        desc: "AI that plans the fastest, cheapest delivery routes.",
        image: log3,
      },
      {
        title: "Warehouse Management",
        desc: "Smart WMS for inbound, storage, and outbound operations.",
        image: log4,
      },
      {
        title: "Delivery & Courier App",
        desc: "A driver and customer app for seamless last-mile delivery.",
        image: log5,
      },
      {
        title: "Logistics Analytics",
        desc: "Dashboards optimizing cost, speed, and delivery performance.",
        image: log6,
      },
    ],

    techIcons: [
      "SiReact",
      "SiNodedotjs",
      "SiPython",
      "DiJava",
      "FaAws",
      "FaMicrosoft",
      "SiPostgresql",
      "SiMongodb",
      "SiTensorflow",
    ],
    benefits: [
      { icon: "Gauge", text: "Optimized routes" },
      { icon: "Eye", text: "Real-time tracking" },
      { icon: "PiggyBank", text: "Lower fuel costs" },
      { icon: "Layers", text: "Scalable operations" },
      { icon: "Bot", text: "Automated dispatch" },
      { icon: "Clock", text: "Faster deliveries" },
    ],
  },
  {
    slug: "government",
    name: "Government",
    heroTitle: "Government & Public Sector Software Solutions",
    badge: "GOVERNMENT",
    iconKey: "Landmark",
    color: "text-indigo-400",
    heroImage: govHero,
    shortDesc: "Citizen portals, secure data management, and e-gov.",
    intro:
      "Aurizin helps public sector organizations serve citizens better through digital governance. We build secure citizen portals, e-governance platforms, and digital identity systems that modernize legacy infrastructure and increase transparency.",
    problems: [
      "Citizen service delivery",
      "Secure data management",
      "Legacy system modernization",
      "Inter-department coordination",
      "Digital identity and records",
      "Transparency and reporting",
    ],
    solutions: [
      "Citizen service portal",
      "E-governance platform",
      "Secure document management",
      "Digital identity system",
      "Grievance and ticketing system",
      "AI citizen assistant",
      "Public dashboard and analytics",
    ],
    solutionCards: [
      {
        title: "Citizen Service Portal",
        desc: "A single portal for citizens to access every public service.",
        image: gov1,
      },
      {
        title: "Secure Document Management",
        desc: "Secure handling of records, applications, and approvals.",
        image: gov2,
      },
      {
        title: "Digital Identity System",
        desc: "Trusted digital identity and records for every citizen.",
        image: gov3,
      },
      {
        title: "Grievance & Ticketing",
        desc: "Transparent grievance handling with end-to-end tracking.",
        image: gov4,
      },
      {
        title: "AI Citizen Assistant",
        desc: "An AI assistant that guides citizens to the right services.",
        image: gov5,
      },
      {
        title: "Public Analytics Dashboard",
        desc: "Transparent dashboards that surface public-sector insights.",
        image: gov6,
      },
    ],

    techIcons: [
      "SiReact",
      "SiNextdotjs",
      "DiJava",
      "SiSpringboot",
      "SiPython",
      "FaAws",
      "FaMicrosoft",
      "SiPostgresql",
      "SiRedis",
    ],
    benefits: [
      { icon: "Smile", text: "Better citizen services" },
      { icon: "ShieldCheck", text: "Bank-grade security" },
      { icon: "Layers", text: "Modernized systems" },
      { icon: "TrendingUp", text: "Scalable infrastructure" },
      { icon: "Eye", text: "Transparent governance" },
      { icon: "Bot", text: "Reduced paperwork" },
    ],
  },
  {
    slug: "startups",
    name: "Startups",
    heroTitle: "Startup Software Development & MVP Solutions",
    badge: "STARTUPS",
    iconKey: "Rocket",
    color: "text-pink-400",
    heroImage: suHero,
    shortDesc: "MVP development, scaling, and tech consulting.",
    intro:
      "Aurizin is the technical partner founders trust to go from idea to launch. We build investor-ready MVPs, scalable cloud architectures, and AI-powered products fast — so you can validate, iterate, and grow without a large in-house team.",
    problems: [
      "Rapid MVP development",
      "Limited budget and runway",
      "Scaling architecture as you grow",
      "Iterating toward product-market fit",
      "Hiring and retaining tech talent",
      "Building an investor-ready product",
    ],
    solutions: [
      "MVP development",
      "Web and mobile app development",
      "Cloud-native architecture",
      "Scalable backend and APIs",
      "AI feature integration",
      "DevOps and CI/CD setup",
      "Product analytics dashboard",
    ],
    solutionCards: [
      {
        title: "MVP Development",
        desc: "Investor-ready MVPs built fast to validate your idea.",
        image: su1,
      },
      {
        title: "Cloud-Native Architecture",
        desc: "Scalable cloud foundations that grow with your traction.",
        image: su2,
      },
      {
        title: "Scalable Backend & APIs",
        desc: "Robust APIs and backends ready for rapid growth.",
        image: su3,
      },
      {
        title: "AI Feature Integration",
        desc: "Add intelligent AI features that set your product apart.",
        image: su4,
      },
      {
        title: "DevOps & CI/CD",
        desc: "Automated pipelines for fast, reliable shipping.",
        image: su5,
      },
      {
        title: "Product Analytics",
        desc: "Insights into users, funnels, and growth from day one.",
        image: su6,
      },
    ],

    techIcons: [
      "SiReact",
      "SiNextdotjs",
      "SiNodedotjs",
      "SiTypescript",
      "SiFlutter",
      "FaAws",
      "SiFirebase",
      "SiPostgresql",
      "SiMongodb",
      "SiOpenai",
    ],
    benefits: [
      { icon: "Gauge", text: "Faster time-to-market" },
      { icon: "PiggyBank", text: "Lean and cost-effective" },
      { icon: "Layers", text: "Scalable from day one" },
      { icon: "Sparkles", text: "Investor-ready quality" },
      { icon: "TrendingUp", text: "Rapid iteration" },
      { icon: "Bot", text: "Built-in automation" },
    ],
  },
  {
    slug: "enterprises",
    name: "Enterprises",
    heroTitle: "Enterprise Software Solutions",
    badge: "ENTERPRISES",
    iconKey: "Building",
    color: "text-blue-600",
    heroImage: entHero,
    shortDesc: "Digital transformation, legacy modernization, and automation.",
    intro:
      "Aurizin partners with enterprises to modernize legacy systems and unlock new efficiency. We deliver digital transformation, custom enterprise software, and seamless integrations that connect data, automate workflows, and scale across the organization.",
    problems: [
      "Legacy system modernization",
      "Siloed systems and data",
      "Complex, manual workflows",
      "Security and compliance at scale",
      "Scalability across teams and regions",
      "Integration with existing tools",
    ],
    solutions: [
      "Digital transformation consulting",
      "Custom enterprise software",
      "Legacy system modernization",
      "API and systems integration",
      "Workflow automation",
      "Cloud migration",
      "Enterprise analytics and BI dashboard",
    ],
    solutionCards: [
      {
        title: "Digital Transformation",
        desc: "Strategic consulting to modernize the whole organization.",
        image: ent1,
      },
      {
        title: "Legacy Modernization",
        desc: "Replatform legacy systems without disrupting operations.",
        image: ent2,
      },
      {
        title: "API & Systems Integration",
        desc: "Connect siloed systems into one seamless data flow.",
        image: ent3,
      },
      {
        title: "Workflow Automation",
        desc: "Automate complex, manual processes across teams.",
        image: ent4,
      },
      {
        title: "Cloud Migration",
        desc: "Seamless migration to scalable, secure cloud infrastructure.",
        image: ent5,
      },
      {
        title: "Enterprise BI Dashboard",
        desc: "Unified analytics and business intelligence at scale.",
        image: ent6,
      },
    ],

    techIcons: [
      "SiReact",
      "SiNextdotjs",
      "DiJava",
      "SiSpringboot",
      "SiDotnet",
      "SiNodedotjs",
      "FaAws",
      "FaMicrosoft",
      "SiPostgresql",
      "SiKubernetes",
    ],
    benefits: [
      { icon: "Layers", text: "Modernized systems" },
      { icon: "Eye", text: "Unified data" },
      { icon: "Bot", text: "Automated workflows" },
      { icon: "ShieldCheck", text: "Enterprise-grade security" },
      { icon: "TrendingUp", text: "Scalable architecture" },
      { icon: "PiggyBank", text: "Lower operational costs" },
    ],
  },
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}
