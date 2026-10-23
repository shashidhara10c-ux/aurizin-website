import type { ReactNode } from "react";
import { Link, useParams } from "wouter";
import { SEO } from "@/components/SEO";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, CheckCircle2, Building2, Calendar, Layers } from "lucide-react";
import { getProjectBySlug, projects } from "@/data/projects";
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

export default function CaseStudy() {
  const params = useParams();
  const slug = params.slug ?? "";
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-32 text-center">
        <SEO title="Case Study Not Found" description="The case study you are looking for does not exist." />
        <h1 className="text-3xl font-bold mb-4">Case Study Not Found</h1>
        <p className="text-muted-foreground mb-8">The case study you're looking for doesn't exist or may have been moved.</p>
        <Button asChild>
          <Link href="/portfolio">Back to Portfolio</Link>
        </Button>
      </div>
    );
  }

  const related = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <>
      <SEO title={`${project.title} — Case Study`} description={project.excerpt} />

      {/* Hero */}
      <section className="pt-20 pb-12 border-b border-border">
        <div className="container mx-auto px-4">
          <Button variant="ghost" size="sm" asChild className="mb-8 -ml-3 text-muted-foreground hover:text-primary">
            <Link href="/portfolio"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio</Link>
          </Button>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">{project.category}</Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">{project.title}</h1>
              <p className="text-xl text-muted-foreground">{project.overview}</p>
              <div className="flex flex-wrap gap-6 pt-2 text-sm">
                <span className="flex items-center gap-2 text-foreground/80"><Building2 className="h-4 w-4 text-primary" /> {project.client}</span>
                <span className="flex items-center gap-2 text-foreground/80"><Layers className="h-4 w-4 text-primary" /> {project.industry}</span>
                <span className="flex items-center gap-2 text-foreground/80"><Calendar className="h-4 w-4 text-primary" /> {project.timeline}</span>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full" />
              <img src={project.image} alt={project.title} className="relative z-10 w-full h-auto rounded-3xl border border-white/10 shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#4f74f4] mb-2">{m.value}</div>
                <div className="text-muted-foreground">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-5">The Challenge</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">{project.challenge}</p>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-5">Our Solution</h2>
                <ul className="space-y-4">
                  {project.solution.map((s, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-lg text-foreground/80">
                      <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-5">The Results</h2>
                <ul className="space-y-4">
                  {project.results.map((r, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-lg text-foreground/80">
                      <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="glass-panel rounded-2xl p-6 sticky top-24">
                <h3 className="font-bold text-lg mb-4">Technology Stack</h3>
                <div className="flex items-center gap-4 text-3xl text-muted-foreground mb-6">
                  {project.techIcons.map((key) => (
                    <span key={key}>{iconMap[key]}</span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.stack.map((t) => (
                    <Badge key={t} variant="secondary" className="bg-muted">{t}</Badge>
                  ))}
                </div>
                <Button className="w-full" asChild>
                  <Link href="/contact">Start a Similar Project</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="py-16 border-t border-border">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">More Case Studies</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {related.map((rp) => (
                <Link key={rp.id} href={`/portfolio/${rp.slug}`} className="glass-panel rounded-2xl overflow-hidden group hover:border-primary/50 transition-all">
                  <div className="relative h-40 overflow-hidden bg-muted">
                    <img src={rp.image} alt={rp.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <Badge className="absolute top-4 left-4 bg-background/80 backdrop-blur text-foreground hover:bg-background/90">{rp.category}</Badge>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{rp.title}</h3>
                    <span className="inline-flex items-center text-primary font-medium text-sm">View Case Study <ArrowRight className="ml-1 h-4 w-4" /></span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
