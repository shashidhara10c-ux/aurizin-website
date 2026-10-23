import type { ReactNode } from "react";
import { Link } from "wouter";
import { SEO } from "@/components/SEO";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-industries.png";
import { HeartPulse, GraduationCap, ShoppingCart, Factory, Banknote, UtensilsCrossed, Gamepad2, Building2, Truck, Landmark, Rocket, Building } from "lucide-react";
import { industries } from "@/data/industries";

const iconMap: Record<string, ReactNode> = {
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
};

export default function Industries() {
  return (
    <>
      <SEO title="Industries" description="Aurizin provides tailored technology solutions across healthcare, finance, retail, and more." />
      
      {/* Hero */}
      <section className="pt-20 pb-16 border-b border-border overflow-hidden relative">
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <Badge variant="outline" className="mb-6 bg-primary/10 text-primary border-primary/20">INDUSTRIES WE SERVE</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Smart Solutions for <span className="text-[#4f74f4]">Every Industry.</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            We understand that every sector has unique challenges. Aurizin's domain expertise allows us to build solutions that fit perfectly within your industry ecosystem.
          </p>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute inset-0 bg-primary/25 blur-[100px] rounded-full" />
            <img
              src={heroImg}
              alt="Aurizin industries globe"
              className="relative z-10 w-full h-auto object-contain select-none pointer-events-none"
              style={{
                WebkitMaskImage:
                  "radial-gradient(ellipse 78% 78% at 50% 48%, #000 52%, rgba(0,0,0,0.6) 72%, transparent 88%)",
                maskImage:
                  "radial-gradient(ellipse 78% 78% at 50% 48%, #000 52%, rgba(0,0,0,0.6) 72%, transparent 88%)",
              }}
            />
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Transforming Businesses Across Sectors</h2>
            <p className="text-muted-foreground text-lg">Discover how Aurizin's targeted technology solutions can give you a competitive edge.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {industries.map((ind) => (
              <Link key={ind.slug} href={`/industries/${ind.slug}`} className="block group">
                <div className="glass-panel hover:bg-accent/50 dark:hover:bg-white/[0.06] p-6 rounded-2xl h-full transition-all hover:border-primary/50 hover:shadow-lg flex flex-col">
                  <div className={`w-12 h-12 rounded-xl glass-panel flex items-center justify-center mb-4 ${ind.color} group-hover:scale-110 transition-transform`}>
                    {iconMap[ind.iconKey]}
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{ind.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{ind.shortDesc}</p>
                  <span className="mt-auto inline-flex items-center text-primary font-medium text-sm">
                    Learn more <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Your Industry. Our Expertise.</h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">Let's discuss how we can tailor our technology stack to solve your specific industry challenges.</p>
          <Button size="lg" variant="secondary" asChild className="h-14 px-10 text-lg">
            <Link href="/contact">Book a Free Consultation</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
