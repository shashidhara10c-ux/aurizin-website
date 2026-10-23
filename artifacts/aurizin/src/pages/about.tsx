import { Link } from "wouter";
import { SEO } from "@/components/SEO";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-about.png";
import { Users, Target, Lightbulb, ShieldCheck, HeartHandshake, ArrowRight } from "lucide-react";

export default function About() {
  return (
    <>
      <SEO title="About Us" description="Learn about Aurizin Innovations, our mission, vision, and values." />
      
      {/* Hero */}
      <section className="pt-20 pb-16 border-b border-border">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <Badge variant="outline" className="mb-6 bg-primary/10 text-primary border-primary/20">ABOUT AURIZIN</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Innovating Today, <span className="text-[#4f74f4]">Transforming Tomorrow.</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            We are a team of passionate technologists dedicated to building software that matters.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Built with a Vision. Driven by Purpose.</h2>
              <p className="text-lg text-muted-foreground">
                Aurizin Innovations Pvt. Ltd. was founded with a singular goal: to deliver world-class technology solutions that solve real business problems. Based in Hyderabad, India, we blend global standards with local ingenuity.
              </p>
              <p className="text-lg text-muted-foreground">
                From intelligent AI implementations to scalable cloud infrastructures and bespoke software, we act as a strategic partner to our clients, guiding them through every step of their digital transformation journey.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 pt-6">
                <div className="glass-panel p-6 rounded-xl">
                  <h4 className="text-primary font-bold text-xl mb-2">Founded</h4>
                  <p className="text-muted-foreground text-lg">2023</p>
                </div>
                <div className="glass-panel p-6 rounded-xl">
                  <h4 className="text-primary font-bold text-xl mb-2">Headquarters</h4>
                  <p className="text-muted-foreground text-lg">Hyderabad, India</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full" />
              <img src={heroImg} alt="Aurizin Office" className="relative z-10 w-full h-auto rounded-2xl border border-white/10 shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats & Mission */}
      <section className="py-24 border-y border-border dark:border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 space-y-12">
              <div className="glass-panel p-8 rounded-2xl shadow-lg relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Target className="text-primary h-8 w-8" /> Our Mission
                </h3>
                <p className="text-muted-foreground text-lg">
                  To empower businesses globally by delivering innovative, reliable, and intelligent digital solutions that drive efficiency and growth.
                </p>
              </div>
              <div className="glass-panel p-8 rounded-2xl shadow-lg relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Lightbulb className="text-primary h-8 w-8" /> Our Vision
                </h3>
                <p className="text-muted-foreground text-lg">
                  To be the most trusted technology partner for enterprises, recognized for our commitment to excellence, innovation, and client success.
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-7 glass-panel rounded-3xl p-10 lg:p-16 flex flex-col justify-center">
              <h3 className="text-3xl font-bold mb-10 text-center">About Us in Numbers</h3>
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="text-center p-6 glass-panel rounded-2xl">
                  <h4 className="text-5xl font-bold text-primary mb-2">400+</h4>
                  <p className="text-lg font-medium text-muted-foreground">Successful Projects</p>
                </div>
                <div className="text-center p-6 glass-panel rounded-2xl">
                  <h4 className="text-5xl font-bold text-primary mb-2">120+</h4>
                  <p className="text-lg font-medium text-muted-foreground">Enterprise Clients</p>
                </div>
                <div className="text-center p-6 glass-panel rounded-2xl">
                  <h4 className="text-5xl font-bold text-primary mb-2">3+</h4>
                  <p className="text-lg font-medium text-muted-foreground">Years of Innovation</p>
                </div>
                <div className="text-center p-6 glass-panel rounded-2xl">
                  <h4 className="text-5xl font-bold text-primary mb-2">24/7</h4>
                  <p className="text-lg font-medium text-muted-foreground">Support & Maintenance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground text-lg">The core principles that guide our work, our culture, and our partnerships.</p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { icon: <ShieldCheck />, title: "Integrity", desc: "Honesty and transparency in everything we do." },
              { icon: <Lightbulb />, title: "Innovation", desc: "Pushing boundaries to find better solutions." },
              { icon: <Target />, title: "Excellence", desc: "Uncompromising quality in our deliverables." },
              { icon: <Users />, title: "Collaboration", desc: "Working as one team with our clients." },
              { icon: <HeartHandshake />, title: "Commitment", desc: "Dedicated to long-term client success." },
            ].map((value, idx) => (
              <div key={idx} className="glass-panel p-6 rounded-2xl text-center hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 mx-auto bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold mb-2">{value.title}</h4>
                <p className="text-sm text-muted-foreground">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Us on Our Journey</h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">We're always looking for talented individuals and ambitious partners.</p>
          <Button size="lg" variant="secondary" asChild className="h-14 px-10 text-lg">
            <Link href="/contact">Get in Touch <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>
    </>
  );
}
