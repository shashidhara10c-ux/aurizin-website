import { Link, useParams } from "wouter";
import { ArrowLeft, ArrowUpRight, Check, ShieldCheck } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { getProduct } from "@/data/products";
import NotFound from "@/pages/not-found";

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const p = getProduct(slug);
  if (!p) return <NotFound />;
  return (
    <>
      <SEO title={`${p.name} — ${p.category}`} description={p.tagline} />
      <section className="pt-16 pb-16">
        <div className="container mx-auto px-4">
          <Link href="/products" className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary mb-8">
            <ArrowLeft className="h-4 w-4" /> All products
          </Link>
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 items-center">
            <div>
              <p className="text-sm font-semibold text-primary mb-4">{p.category} · by Aurizin Innovations</p>
              <h1 className="font-display text-5xl md:text-6xl font-bold tracking-[-0.03em] leading-[1.05] mb-6">{p.name}</h1>
              <p className="text-xl md:text-2xl text-foreground/90 leading-snug mb-6">{p.tagline}</p>
              <p className="text-muted-foreground leading-relaxed mb-8">{p.summary}</p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-none bg-[#2027d6] hover:bg-[#1a20b8] shadow-[0_0_25px_rgba(32,39,214,0.35)]">
                  <a href={p.signupUrl} target="_blank" rel="noopener">Start a free trial <ArrowUpRight className="ml-2 h-4 w-4" /></a>
                </Button>
                <Button asChild size="lg" variant="outline"><Link href="/contact">Book a demo</Link></Button>
              </div>
              <p className="mt-6 flex items-center gap-2 text-sm text-muted-foreground"><ShieldCheck className="h-4 w-4 text-primary" />Built on Meta’s official WhatsApp Business Platform (Cloud API)</p>
            </div>
            <div className="overflow-hidden rounded-2xl border border-border dark:border-white/10 shadow-2xl">
              <img src={p.hero} alt={`${p.name} product screenshot`} className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-border dark:border-white/10">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-12 max-w-2xl">Everything a business needs to run customer conversations on WhatsApp.</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
            {p.features.map((f) => (
              <div key={f.title}>
                <h3 className="font-display text-lg font-bold mb-2">{f.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-[15px]">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 space-y-16">
          {p.gallery.slice(1).map((g, i) => (
            <figure key={g.caption} className={`grid lg:grid-cols-[1.4fr_1fr] gap-10 items-center ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <img src={g.src} alt={g.caption} loading="lazy" className="w-full rounded-2xl border border-border dark:border-white/10 shadow-xl" />
              <figcaption className="text-2xl font-display font-semibold leading-snug">{g.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="py-20 border-t border-border dark:border-white/10">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight mb-6">Who uses {p.name}</h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {p.audience.map((a) => <li key={a} className="flex gap-2 text-foreground/90"><Check className="h-5 w-5 shrink-0 text-primary" />{a}</li>)}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight mb-6">Plans</h2>
            <div className="divide-y divide-border dark:divide-white/10 rounded-2xl border border-border dark:border-white/10">
              {p.plans.map((pl) => (
                <div key={pl.name} className="flex flex-wrap items-baseline justify-between gap-2 px-5 py-4">
                  <div><div className="font-semibold">{pl.name}</div><div className="text-sm text-muted-foreground">{pl.note}</div></div>
                  <div className="font-display text-lg font-bold">{pl.price}</div>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm text-muted-foreground">Prices exclude GST. WhatsApp message charges are billed from a prepaid wallet at Meta’s rates.</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="rounded-3xl border border-border dark:border-white/10 bg-card/70 dark:bg-white/[0.03] px-8 py-14 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Try {p.name} free for 14 days</h2>
            <p className="text-muted-foreground mb-8">Every feature, with ₹100 of message credit. No card needed.</p>
            <Button asChild size="lg" className="bg-none bg-[#2027d6] hover:bg-[#1a20b8]"><a href={p.signupUrl} target="_blank" rel="noopener">Create your account <ArrowUpRight className="ml-2 h-4 w-4" /></a></Button>
          </div>
        </div>
      </section>
    </>
  );
}
