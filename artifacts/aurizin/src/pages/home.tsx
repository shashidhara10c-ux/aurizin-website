import { Link } from "wouter";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight, CheckCircle2, Star, Zap, Code2, Globe, Shield, Smartphone, ArrowUpRight } from "lucide-react";
import { HeroLogo } from "@/components/HeroLogo";
import { SiReact, SiNextdotjs, SiNodedotjs, SiPython, SiSpringboot, SiDotnet, SiTailwindcss, SiFlutter, SiPostgresql, SiMongodb, SiDocker, SiKubernetes, SiFirebase, SiGithub, SiGitlab, SiJenkins, SiFigma } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { DiJava } from "react-icons/di";
import { TbBrandReactNative } from "react-icons/tb";

const services = [
  { icon: <Code2 className="h-6 w-6" />, title: "Software Development", desc: "Custom software solutions built for scale and performance." },
  { icon: <Zap className="h-6 w-6" />, title: "AI Solutions", desc: "Intelligent automation and machine learning integration." },
  { icon: <Globe className="h-6 w-6" />, title: "Web Development", desc: "Modern, responsive, and dynamic web applications." },
  { icon: <Smartphone className="h-6 w-6" />, title: "Mobile App Development", desc: "Native and cross-platform mobile experiences." },
  { icon: <Star className="h-6 w-6" />, title: "Cloud Solutions", desc: "Secure and scalable cloud infrastructure and migration." },
  { icon: <Shield className="h-6 w-6" />, title: "Cybersecurity", desc: "Comprehensive security audits and implementation." },
];

const technologies = [
  { icon: <SiReact className="text-[#61DAFB]" />, name: "React" },
  { icon: <SiNextdotjs className="text-foreground" />, name: "Next.js" },
  { icon: <SiNodedotjs className="text-[#339933]" />, name: "Node.js" },
  { icon: <SiPython className="text-[#3776AB]" />, name: "Python" },
  { icon: <DiJava className="text-[#007396]" />, name: "Java" },
  { icon: <SiSpringboot className="text-[#6DB33F]" />, name: "Spring Boot" },
  { icon: <SiDotnet className="text-[#512BD4]" />, name: ".NET" },
  { icon: <SiTailwindcss className="text-[#06B6D4]" />, name: "Tailwind" },
  { icon: <SiFlutter className="text-[#02569B]" />, name: "Flutter" },
  { icon: <TbBrandReactNative className="text-[#61DAFB]" />, name: "React Native" },
  { icon: <SiPostgresql className="text-[#4169E1]" />, name: "PostgreSQL" },
  { icon: <SiMongodb className="text-[#47A248]" />, name: "MongoDB" },
  { icon: <FaAws className="text-[#FF9900]" />, name: "AWS" },
  { icon: <SiDocker className="text-[#2496ED]" />, name: "Docker" },
  { icon: <SiKubernetes className="text-[#326CE5]" />, name: "Kubernetes" },
  { icon: <SiFirebase className="text-[#FFCA28]" />, name: "Firebase" },
  { icon: <SiGithub className="text-foreground" />, name: "GitHub" },
  { icon: <SiGitlab className="text-[#FC6D26]" />, name: "GitLab" },
  { icon: <SiJenkins className="text-[#D24939]" />, name: "Jenkins" },
  { icon: <SiFigma className="text-[#F24E1E]" />, name: "Figma" },
  { icon: <VscVscode className="text-[#007ACC]" />, name: "VS Code" },
];

const processSteps = [
  { step: "01", title: "Discovery", desc: "We understand your vision, requirements, and business goals." },
  { step: "02", title: "Planning", desc: "Detailed architecture, tech stack selection, and project timeline." },
  { step: "03", title: "Execution", desc: "Agile development with regular updates and transparent communication." },
  { step: "04", title: "Delivery", desc: "Rigorous testing followed by seamless deployment." },
];

export default function Home() {
  return (
    <>
      <SEO title="Home" description="Aurizin Innovations - Building Intelligent Solutions." />

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.12),transparent_50%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-gradient-to-r from-primary to-transparent" />
                <p className="text-sm font-semibold tracking-[0.25em] text-primary uppercase">
                  Software <span className="text-primary/40">·</span> AI <span className="text-primary/40">·</span> Cloud
                </p>
              </div>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-[-0.03em]">
                Building Intelligent Solutions.<br />
                Powering <span className="text-[#4f74f4]">Digital Futures.</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
                Aurizin empowers enterprises with cutting-edge software, artificial intelligence, and scalable cloud architectures.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button size="lg" asChild className="h-12 px-8 text-base bg-none bg-[#2027d6] hover:bg-[#1a20b8] shadow-[0_0_25px_rgba(32,39,214,0.35)]">
                  <Link href="/contact">
                    Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="h-12 px-8 text-base bg-black text-white border-white/20 hover:bg-neutral-900 hover:text-white">
                  <Link href="/portfolio">
                    Explore Our Work
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative animate-in fade-in zoom-in-95 duration-1000 delay-200">
              <HeroLogo />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Row */}
      <section className="py-12 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-border dark:divide-white/10 rounded-2xl border border-border dark:border-white/10 bg-card/70 dark:bg-white/[0.03] backdrop-blur-xl px-4 py-8 shadow-lg dark:shadow-[0_0_40px_rgba(79,116,244,0.08)]">
            <div className="text-center px-4">
              <h3 className="font-display text-4xl md:text-5xl font-bold text-primary mb-2 tracking-tight">400+</h3>
              <p className="text-sm md:text-base text-muted-foreground font-medium">Projects Delivered</p>
            </div>
            <div className="text-center px-4">
              <h3 className="font-display text-4xl md:text-5xl font-bold text-primary mb-2 tracking-tight">120+</h3>
              <p className="text-sm md:text-base text-muted-foreground font-medium">Enterprise Clients</p>
            </div>
            <div className="text-center px-4">
              <h3 className="font-display text-4xl md:text-5xl font-bold text-primary mb-2 tracking-tight">3+</h3>
              <p className="text-sm md:text-base text-muted-foreground font-medium">Years Experience</p>
            </div>
            <div className="text-center px-4">
              <h3 className="font-display text-4xl md:text-5xl font-bold text-primary mb-2 tracking-tight">24/7</h3>
              <p className="text-sm md:text-base text-muted-foreground font-medium">Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 tracking-tight">End-to-End Digital Solutions</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">Aurizin delivers comprehensive technology services to drive your business growth and digital transformation.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <div key={idx} className="group relative bg-card/70 dark:bg-white/[0.03] backdrop-blur-xl hover:bg-accent/50 dark:hover:bg-white/[0.06] border border-border dark:border-white/10 hover:border-[#4f74f4]/40 p-8 rounded-2xl transition-all duration-300 overflow-hidden hover:shadow-[0_0_30px_rgba(79,116,244,0.15)]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#4f74f4]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="font-display text-xl font-bold mb-3 tracking-tight">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.desc}</p>
                  <Link href="/services" className="inline-flex items-center text-primary font-medium group-hover:underline">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 tracking-tight">Modern Technologies. <span className="text-[#4f74f4]">Better Solutions.</span></h2>
            <p className="text-muted-foreground text-lg leading-relaxed">At Aurizin, we leverage the latest tools and frameworks to build robust, scalable, and secure applications.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 max-w-5xl mx-auto">
            {technologies.map((tech, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center p-4 w-24 md:w-32 bg-card/70 dark:bg-white/[0.03] backdrop-blur-xl border border-border dark:border-white/10 rounded-xl hover:border-[#4f74f4]/50 hover:bg-accent/50 dark:hover:bg-white/[0.06] hover:shadow-[0_0_24px_rgba(79,116,244,0.15)] transition-all group">
                <div className="text-4xl md:text-5xl mb-3 transition-transform group-hover:scale-110">
                  {tech.icon}
                </div>
                <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 tracking-tight">Have an Idea? Let's Turn It Into Reality.</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">Aurizin's proven delivery process ensures your project is completed on time, on budget, and to the highest standards.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, idx) => (
              <div key={idx} className="relative">
                {idx !== processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-full h-[1px] border-t-2 border-dashed border-border z-0" />
                )}
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-card dark:bg-white/[0.04] backdrop-blur-xl border-2 border-[#4f74f4]/70 flex items-center justify-center text-xl font-bold text-primary mb-6 shadow-[0_0_25px_rgba(79,116,244,0.3)]">
                    {step.step}
                  </div>
                  <h3 className="font-display text-xl font-bold mb-3 tracking-tight">{step.title}</h3>
                  <p className="text-muted-foreground">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="relative max-w-4xl mx-auto text-center rounded-3xl border border-border dark:border-white/10 bg-card/70 dark:bg-white/[0.03] backdrop-blur-2xl px-8 py-16 overflow-hidden shadow-xl dark:shadow-[0_0_60px_rgba(79,116,244,0.12)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(79,116,244,0.18),transparent_70%)]" />
            <div className="relative z-10">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 max-w-3xl mx-auto leading-[1.1] tracking-tight">Ready to transform your business with innovative technology?</h2>
              <p className="text-xl text-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed">Let's discuss how Aurizin can help you achieve your digital goals.</p>
              <Button size="lg" asChild className="h-14 px-10 text-lg bg-none bg-[#2027d6] hover:bg-[#1a20b8] shadow-[0_0_35px_rgba(32,39,214,0.4)]">
                <Link href="/contact">
                  Let's Work Together <ArrowUpRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
