import { Link } from "wouter";
import { SEO } from "@/components/SEO";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-services.png";
import { ArrowRight, Code2, Zap, Globe, Smartphone, Cloud, PenTool, Network, ShieldCheck } from "lucide-react";

const servicesList = [
  {
    icon: <Zap className="h-8 w-8" />,
    title: "AI Solutions",
    desc: "Leverage artificial intelligence to automate processes, gain predictive insights, and build smarter products. We specialize in NLP, computer vision, and custom LLM integration.",
    features: ["Machine Learning Models", "Natural Language Processing", "AI Chatbots", "Predictive Analytics"]
  },
  {
    icon: <Code2 className="h-8 w-8" />,
    title: "Software Development",
    desc: "End-to-end custom software development tailored to your unique business needs. We build scalable, secure, and robust applications from scratch.",
    features: ["Custom Web Apps", "Enterprise Software", "API Development", "Legacy Modernization"]
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Web Development",
    desc: "Create stunning, high-performance websites and web applications using modern frameworks like React, Next.js, and Node.js.",
    features: ["Responsive Design", "Single Page Apps", "E-commerce Platforms", "CMS Integration"]
  },
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: "Mobile App Development",
    desc: "Native and cross-platform mobile applications that provide seamless user experiences across iOS and Android devices.",
    features: ["iOS App Development", "Android App Development", "React Native / Flutter", "Mobile App UI/UX"]
  },
  {
    icon: <Cloud className="h-8 w-8" />,
    title: "Cloud Solutions",
    desc: "Optimize your infrastructure with scalable cloud solutions. We help you migrate, manage, and secure your applications on AWS, Azure, or GCP.",
    features: ["Cloud Migration", "Serverless Architecture", "DevOps & CI/CD", "Cloud Security"]
  },
  {
    icon: <PenTool className="h-8 w-8" />,
    title: "UI/UX Design",
    desc: "User-centered design that looks beautiful and converts. We create intuitive interfaces that users love to interact with.",
    features: ["User Research", "Wireframing & Prototyping", "Visual Design", "Usability Testing"]
  },
  {
    icon: <Network className="h-8 w-8" />,
    title: "IT Consulting",
    desc: "Strategic technology guidance to align your IT infrastructure with your business goals. We help you make the right tech choices.",
    features: ["Digital Transformation", "Technology Audits", "IT Strategy", "Vendor Selection"]
  },
  {
    icon: <ShieldCheck className="h-8 w-8" />,
    title: "Cybersecurity",
    desc: "Protect your digital assets with comprehensive security solutions. We identify vulnerabilities and implement robust defenses.",
    features: ["Security Audits", "Penetration Testing", "Compliance Management", "Data Protection"]
  }
];

export default function Services() {
  return (
    <>
      <SEO title="Services" description="Explore Aurizin's comprehensive digital solutions including AI, Software, Web, Mobile, and Cloud." />
      
      {/* Hero */}
      <section className="pt-20 pb-16 border-b border-border overflow-hidden relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">OUR SERVICES</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Powerful Solutions.<br />
                Built for <span className="text-[#4f74f4]">Your Success.</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Aurizin delivers end-to-end technology services designed to accelerate your digital transformation and drive tangible business value.
              </p>
              <Button size="lg" asChild className="h-12 px-8">
                <Link href="/contact">Discuss Your Project</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full" />
              <img src={heroImg} alt="Aurizin Services" className="relative z-10 w-full h-auto rounded-2xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {servicesList.map((service, idx) => (
              <div key={idx} className="glass-panel p-8 md:p-10 rounded-3xl hover:border-primary/50 hover:shadow-[0_0_30px_rgba(37,99,235,0.1)] transition-all duration-300 group">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">{service.desc}</p>
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-3 text-foreground/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground" asChild>
                  <Link href="/contact">Request Service</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-border dark:border-white/10">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need a custom solution not listed here?</h2>
          <p className="text-xl text-muted-foreground mb-10">The Aurizin engineering team loves tackling complex, unique challenges. Let's discuss your specific requirements.</p>
          <Button size="lg" asChild className="h-14 px-10 text-lg">
            <Link href="/contact">Contact Our Experts <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>
    </>
  );
}
