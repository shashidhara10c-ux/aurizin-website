import type { ReactNode } from "react";
import { Link, useParams } from "wouter";
import { SEO } from "@/components/SEO";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getIndustryBySlug, industries } from "@/data/industries";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  HeartPulse,
  GraduationCap,
  ShoppingCart,
  Factory,
  Banknote,
  UtensilsCrossed,
  Gamepad2,
  Building2,
  Truck,
  Landmark,
  Rocket,
  Building,
  Gauge,
  Smile,
  ShieldCheck,
  TrendingUp,
  Bot,
  PiggyBank,
  Eye,
  Clock,
  Lock,
  Layers,
  Sparkles,
  Coins,
} from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiFlutter,
  SiOpenai,
  SiGooglecloud,
  SiDocker,
  SiKubernetes,
  SiFirebase,
  SiSpringboot,
  SiDotnet,
  SiMysql,
  SiRedis,
  SiGraphql,
  SiTensorflow,
  SiSwift,
  SiKotlin,
} from "react-icons/si";
import { FaAws, FaMicrosoft } from "react-icons/fa";
import { DiJava } from "react-icons/di";

const lucideMap: Record<string, ReactNode> = {
  HeartPulse: <HeartPulse />,
  GraduationCap: <GraduationCap />,
  ShoppingCart: <ShoppingCart />,
  Factory: <Factory />,
  Banknote: <Banknote />,
  UtensilsCrossed: <UtensilsCrossed />,
  Gamepad2: <Gamepad2 />,
  Building2: <Building2 />,
  Truck: <Truck />,
  Landmark: <Landmark />,
  Rocket: <Rocket />,
  Building: <Building />,
  Gauge: <Gauge />,
  Smile: <Smile />,
  ShieldCheck: <ShieldCheck />,
  TrendingUp: <TrendingUp />,
  Bot: <Bot />,
  PiggyBank: <PiggyBank />,
  Eye: <Eye />,
  Clock: <Clock />,
  Lock: <Lock />,
  Layers: <Layers />,
  Sparkles: <Sparkles />,
  Coins: <Coins />,
};

const techMeta: Record<string, { label: string; node: ReactNode }> = {
  SiReact: { label: "React", node: <SiReact /> },
  SiNextdotjs: { label: "Next.js", node: <SiNextdotjs /> },
  SiNodedotjs: { label: "Node.js", node: <SiNodedotjs /> },
  SiPython: { label: "Python", node: <SiPython /> },
  SiTypescript: { label: "TypeScript", node: <SiTypescript /> },
  SiTailwindcss: { label: "Tailwind", node: <SiTailwindcss /> },
  SiPostgresql: { label: "PostgreSQL", node: <SiPostgresql /> },
  SiMongodb: { label: "MongoDB", node: <SiMongodb /> },
  SiFlutter: { label: "Flutter", node: <SiFlutter /> },
  SiOpenai: { label: "OpenAI", node: <SiOpenai /> },
  SiGooglecloud: { label: "Google Cloud", node: <SiGooglecloud /> },
  SiDocker: { label: "Docker", node: <SiDocker /> },
  SiKubernetes: { label: "Kubernetes", node: <SiKubernetes /> },
  SiFirebase: { label: "Firebase", node: <SiFirebase /> },
  SiSpringboot: { label: "Spring Boot", node: <SiSpringboot /> },
  SiDotnet: { label: ".NET", node: <SiDotnet /> },
  SiMysql: { label: "MySQL", node: <SiMysql /> },
  SiRedis: { label: "Redis", node: <SiRedis /> },
  SiGraphql: { label: "GraphQL", node: <SiGraphql /> },
  SiTensorflow: { label: "TensorFlow", node: <SiTensorflow /> },
  SiSwift: { label: "Swift", node: <SiSwift /> },
  SiKotlin: { label: "Kotlin", node: <SiKotlin /> },
  FaAws: { label: "AWS", node: <FaAws /> },
  FaMicrosoft: { label: "Azure", node: <FaMicrosoft /> },
  DiJava: { label: "Java", node: <DiJava /> },
};

export default function IndustryDetail() {
  const params = useParams();
  const slug = params.slug ?? "";
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    return (
      <div className="container mx-auto px-4 py-32 text-center">
        <SEO title="Industry Not Found" description="The industry page you are looking for does not exist." />
        <h1 className="text-3xl font-bold mb-4">Industry Not Found</h1>
        <p className="text-muted-foreground mb-8">The industry you're looking for doesn't exist or may have been moved.</p>
        <Button asChild>
          <Link href="/industries">Back to Industries</Link>
        </Button>
      </div>
    );
  }

  const related = industries.filter((i) => i.slug !== industry.slug).slice(0, 4);

  return (
    <>
      <SEO title={industry.heroTitle} description={industry.intro.slice(0, 155)} />

      {/* Hero */}
      <section className="pt-20 pb-16 border-b border-border dark:border-white/10 overflow-hidden relative">
        <div className="container mx-auto px-4 relative z-10">
          <Button variant="ghost" size="sm" asChild className="mb-8 -ml-3 text-muted-foreground hover:text-primary">
            <Link href="/industries"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Industries</Link>
          </Button>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">{industry.badge}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                {industry.heroTitle}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">{industry.intro}</p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Button size="lg" asChild className="h-12 px-8 bg-none bg-[#2027d6] hover:bg-[#1a20b8] text-white">
                  <Link href="/contact">Book Free Consultation <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </div>
            </div>
            <div className="relative flex justify-center lg:justify-end animate-in fade-in zoom-in-95 duration-1000">
              <div className="absolute inset-0 bg-primary/20 blur-[90px] rounded-full" />
              {industry.heroImage ? (
                <div className="relative z-10 w-72 h-72 md:w-[26rem] md:h-[26rem] rounded-3xl glass-panel overflow-hidden shadow-2xl">
                  <img
                    src={industry.heroImage}
                    alt={`${industry.name} technology illustration`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="relative z-10 w-56 h-56 md:w-72 md:h-72 rounded-3xl glass-panel flex items-center justify-center shadow-2xl">
                  <div className={`text-8xl md:text-9xl ${industry.color} [&>svg]:w-28 [&>svg]:h-28 md:[&>svg]:w-36 md:[&>svg]:h-36`}>
                    {lucideMap[industry.iconKey]}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Problems (+ Solutions checklist when no visual cards) */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {industry.solutionCards && industry.solutionCards.length > 0 ? (
            <div className="glass-panel rounded-3xl p-8 md:p-10 max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Problems We Solve</h2>
              <ul className="grid sm:grid-cols-2 gap-4">
                {industry.problems.map((p, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-foreground/80">
                    <AlertCircle className="h-5 w-5 text-[#4f74f4] shrink-0 mt-1" />
                    <span className="text-lg">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Problems */}
              <div className="glass-panel rounded-3xl p-8 md:p-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Problems We Solve</h2>
                <ul className="space-y-4">
                  {industry.problems.map((p, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-foreground/80">
                      <AlertCircle className="h-5 w-5 text-[#4f74f4] shrink-0 mt-1" />
                      <span className="text-lg">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Solutions */}
              <div className="glass-panel rounded-3xl p-8 md:p-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Solutions</h2>
                <ul className="space-y-4">
                  {industry.solutions.map((s, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-foreground/80">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-1" />
                      <span className="text-lg">{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Our Solutions — visual cards */}
      {industry.solutionCards && industry.solutionCards.length > 0 && (
        <section className="pb-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Solutions</h2>
              <p className="text-muted-foreground text-lg">
                Custom-built {industry.name.toLowerCase()} products, designed for real workflows.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industry.solutionCards.map((card, idx) => (
                <div
                  key={idx}
                  className="group glass-panel rounded-2xl overflow-hidden flex flex-col hover:border-primary/50 hover:shadow-[0_0_32px_rgba(79,116,244,0.15)] transition-all"
                >
                  <div className="relative aspect-video overflow-hidden border-b border-border dark:border-white/10">
                    <img
                      src={card.image}
                      alt={card.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-60" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{card.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Technologies */}
      <section className="py-20 border-y border-border dark:border-white/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technologies We Use</h2>
            <p className="text-muted-foreground text-lg">A modern, scalable stack tailored to {industry.name.toLowerCase()} requirements.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {industry.techIcons.map((key) => {
              const tech = techMeta[key];
              if (!tech) return null;
              return (
                <div
                  key={key}
                  className="flex items-center gap-3 px-5 py-3 rounded-xl glass-panel hover:border-primary/50 hover:shadow-[0_0_24px_rgba(79,116,244,0.15)] transition-all group"
                >
                  <span className="text-2xl text-muted-foreground group-hover:text-primary transition-colors">{tech.node}</span>
                  <span className="font-medium">{tech.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefits</h2>
            <p className="text-muted-foreground text-lg">What your organization gains by partnering with Aurizin.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industry.benefits.map((b, idx) => (
              <div key={idx} className="glass-panel rounded-2xl p-6 hover:border-primary/50 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {lucideMap[b.icon] ?? <Sparkles />}
                </div>
                <h3 className="text-lg font-bold">{b.text}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="relative max-w-4xl mx-auto text-center rounded-3xl glass-panel px-8 py-16 overflow-hidden shadow-xl dark:shadow-[0_0_60px_rgba(79,116,244,0.12)]">
            <div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your {industry.name} Business?</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's discuss how Aurizin can build the right software, automation, and AI solutions for your goals.
              </p>
              <Button size="lg" asChild className="h-14 px-10 text-lg bg-none bg-[#2027d6] hover:bg-[#1a20b8] text-white">
                <Link href="/contact">Book Free Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related industries */}
      <section className="py-16 border-t border-border dark:border-white/10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Explore Other Industries</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {related.map((ri) => (
              <Link key={ri.slug} href={`/industries/${ri.slug}`} className="block group">
                <div className="glass-panel rounded-2xl p-6 h-full hover:border-primary/50 hover:shadow-lg transition-all">
                  <div className={`w-12 h-12 rounded-xl glass-panel flex items-center justify-center mb-4 ${ri.color} group-hover:scale-110 transition-transform`}>
                    {lucideMap[ri.iconKey]}
                  </div>
                  <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">{ri.name}</h3>
                  <span className="inline-flex items-center text-primary font-medium text-sm">Learn more <ArrowRight className="ml-1 h-4 w-4" /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
