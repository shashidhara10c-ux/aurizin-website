import { useState } from "react";
import { Link } from "wouter";
import { SEO } from "@/components/SEO";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import heroImg from "@/assets/hero-portfolio.png";
import { projects } from "@/data/projects";
import { SiReact, SiNextdotjs, SiNodedotjs, SiPython, SiMongodb, SiPostgresql, SiTailwindcss, SiTypescript } from "react-icons/si";
import { FaAws } from "react-icons/fa";

const iconMap: Record<string, ReactNode> = {
  SiReact: <SiReact />,
  SiNextdotjs: <SiNextdotjs />,
  SiNodedotjs: <SiNodedotjs />,
  SiPython: <SiPython />,
  SiMongodb: <SiMongodb />,
  SiPostgresql: <SiPostgresql />,
  SiTailwindcss: <SiTailwindcss />,
  SiTypescript: <SiTypescript />,
  FaAws: <FaAws />,
};

const categories = ["All Projects", "AI Solutions", "Web Development", "Mobile Apps", "Software", "Cloud Solutions", "Enterprise"];


export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All Projects");

  const filteredProjects = activeFilter === "All Projects" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <>
      <SEO title="Portfolio" description="Explore Aurizin's case studies and recent projects." />
      
      {/* Hero */}
      <section className="pt-20 pb-16 border-b border-border relative overflow-hidden">
        <div className="container mx-auto px-4 text-center max-w-4xl relative z-10">
          <Badge variant="outline" className="mb-6 bg-primary/10 text-primary border-primary/20">OUR WORK</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Innovative Solutions. <span className="text-[#4f74f4]">Proven Results.</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            Explore Aurizin's portfolio of successful projects and see how we've helped businesses achieve their digital goals.
          </p>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full" />
            <img src={heroImg} alt="Portfolio Showcase" className="relative z-10 w-full h-auto rounded-3xl border border-white/10 shadow-2xl" />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <Button 
                key={cat} 
                variant={activeFilter === cat ? "default" : "outline"} 
                className="rounded-full"
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="glass-panel rounded-2xl overflow-hidden group hover:border-primary/50 transition-all flex flex-col">
                <div className="relative h-48 overflow-hidden bg-muted">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-background/80 backdrop-blur text-foreground hover:bg-background/90">{project.category}</Badge>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-6 flex-1">{project.excerpt}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-3 text-2xl text-muted-foreground">
                      {project.techIcons.map((key) => (
                        <span key={key}>{iconMap[key]}</span>
                      ))}
                    </div>
                    <Button variant="ghost" size="sm" asChild className="text-primary hover:text-primary hover:bg-primary/10">
                      <Link href={`/portfolio/${project.slug}`}>Case Study <ArrowUpRight className="ml-1 h-4 w-4" /></Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-20 text-muted-foreground">
              No projects found in this category yet.
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to add your success story?</h2>
          <Button size="lg" asChild className="h-14 px-10 text-lg bg-none bg-[#2027d6] hover:bg-[#1a20b8]">
            <Link href="/contact">Start Your Project</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
