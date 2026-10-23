import { Link } from "wouter";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";

export default function Products() {
  return (
    <>
      <SEO title="Products" description="Software products built and operated by Aurizin Innovations Private Limited." />
      <section className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-primary mb-4">Products</p>
            <h1 className="font-display text-5xl md:text-6xl font-bold tracking-[-0.03em] leading-[1.05] mb-6">Software we build, run and support ourselves.</h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Alongside client projects, Aurizin builds its own software-as-a-service products. Each one is developed, hosted and supported by our team in Hyderabad.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-4 space-y-10">
          {products.map((p) => (
            <article key={p.slug} className="grid lg:grid-cols-[1.05fr_1fr] gap-10 items-center rounded-3xl border border-border dark:border-white/10 bg-card/70 dark:bg-white/[0.03] p-6 md:p-10">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-sm font-semibold text-muted-foreground">{p.category}</span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-semibold text-emerald-500">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />{p.status}
                  </span>
                </div>
                <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">{p.name}</h2>
                <p className="text-xl text-foreground/90 mb-4 leading-snug">{p.tagline}</p>
                <p className="text-muted-foreground leading-relaxed mb-8">{p.summary}</p>
                <div className="flex flex-wrap gap-3">
                  <Button asChild size="lg" className="bg-none bg-[#2027d6] hover:bg-[#1a20b8]">
                    <Link href={`/products/${p.slug}`}>See what {p.name} does <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <a href={p.url} target="_blank" rel="noopener">Visit {p.url.replace("https://", "")} <ArrowUpRight className="ml-2 h-4 w-4" /></a>
                  </Button>
                </div>
              </div>
              <Link href={`/products/${p.slug}`} className="block overflow-hidden rounded-2xl border border-border dark:border-white/10 shadow-2xl">
                <img src={p.hero} alt={`${p.name} team inbox`} className="w-full h-auto" loading="lazy" />
              </Link>
            </article>
          ))}

          <div className="rounded-3xl border border-dashed border-border dark:border-white/15 p-10 text-center">
            <h3 className="font-display text-2xl font-bold mb-2">Need a product like this for your business?</h3>
            <p className="text-muted-foreground mb-6">We build custom SaaS platforms, internal tools and AI products for clients too.</p>
            <Button asChild variant="outline"><Link href="/contact">Talk to our team</Link></Button>
          </div>
        </div>
      </section>
    </>
  );
}
