import { Link } from "wouter";
import { SEO } from "@/components/SEO";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Rocket, Users, GraduationCap, Globe, Coffee, MapPin, Briefcase } from "lucide-react";

const perks = [
  { icon: <Rocket className="h-6 w-6" />, title: "Meaningful Work", desc: "Build products that serve millions of users across global enterprises." },
  { icon: <GraduationCap className="h-6 w-6" />, title: "Learning Budget", desc: "Annual stipend for courses, conferences, and certifications." },
  { icon: <Globe className="h-6 w-6" />, title: "Hybrid & Remote", desc: "Work from our Hyderabad hub or remotely with flexible hours." },
  { icon: <Heart className="h-6 w-6" />, title: "Health & Wellness", desc: "Comprehensive medical cover for you and your family." },
  { icon: <Users className="h-6 w-6" />, title: "Mentorship Culture", desc: "Pair with senior engineers and grow through real ownership." },
  { icon: <Coffee className="h-6 w-6" />, title: "Balanced Life", desc: "Generous leave and a culture that respects your time off." },
];

const openings = [
  { title: "Senior Full-Stack Engineer", dept: "Engineering", location: "Hyderabad / Remote", type: "Full-time" },
  { title: "AI/ML Engineer", dept: "AI Solutions", location: "Hyderabad / Remote", type: "Full-time" },
  { title: "Cloud DevOps Engineer", dept: "Cloud", location: "Hyderabad", type: "Full-time" },
  { title: "Product Designer (UI/UX)", dept: "Design", location: "Remote", type: "Full-time" },
  { title: "Frontend Engineer (React)", dept: "Engineering", location: "Hyderabad / Remote", type: "Full-time" },
  { title: "Business Development Manager", dept: "Sales", location: "Hyderabad", type: "Full-time" },
];

export default function Careers() {
  return (
    <>
      <SEO title="Careers" description="Join Aurizin Innovations and build the future of software, AI, and cloud. Explore open roles." />

      {/* Hero */}
      <section className="pt-20 pb-16 border-b border-border text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <Badge variant="outline" className="mb-6 bg-primary/10 text-primary border-primary/20">JOIN OUR TEAM</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Build What's Next. <span className="text-[#4f74f4]">With Us.</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            We're a team of engineers, designers, and problem-solvers building intelligent software for the modern enterprise. If you love hard problems and great craft, you'll feel at home at Aurizin.
          </p>
        </div>
      </section>

      {/* Perks */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Work at Aurizin</h2>
            <p className="text-lg text-muted-foreground">At Aurizin, we invest in our people because great software is built by great teams.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {perks.map((perk, idx) => (
              <div key={idx} className="glass-panel p-8 rounded-3xl hover:border-primary/50 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-5">{perk.icon}</div>
                <h3 className="text-xl font-bold mb-2">{perk.title}</h3>
                <p className="text-muted-foreground">{perk.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Openings */}
      <section className="py-20 border-y border-border dark:border-white/10">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Open Positions</h2>
            <p className="text-lg text-muted-foreground">Find your next role and grow with us.</p>
          </div>
          <div className="space-y-4">
            {openings.map((job, idx) => (
              <div key={idx} className="glass-panel rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-primary/50 transition-all group">
                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{job.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5"><Briefcase className="h-4 w-4" /> {job.dept}</span>
                    <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4" /> {job.location}</span>
                    <Badge variant="secondary" className="bg-muted">{job.type}</Badge>
                  </div>
                </div>
                <Button asChild className="shrink-0">
                  <Link href="/contact">Apply Now <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Don't see the right role?</h2>
          <p className="text-xl text-muted-foreground mb-10">We're always looking for exceptional talent. Send us your resume and tell us how you can make an impact.</p>
          <Button size="lg" asChild className="h-14 px-10 text-lg">
            <Link href="/contact">Get in Touch <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>
    </>
  );
}
