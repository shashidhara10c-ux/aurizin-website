import { Link, useParams } from "wouter";
import { SEO } from "@/components/SEO";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft, ArrowRight, User } from "lucide-react";
import { getPostBySlug, blogPosts } from "@/data/blog";

export default function BlogPost() {
  const params = useParams();
  const slug = params.slug ?? "";
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-32 text-center">
        <SEO title="Article Not Found" description="The article you are looking for does not exist." />
        <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
        <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist or may have been moved.</p>
        <Button asChild>
          <Link href="/blog">Back to Blog</Link>
        </Button>
      </div>
    );
  }

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <SEO title={post.title} description={post.excerpt} />

      {/* Hero */}
      <section className="pt-20 pb-12 border-b border-border">
        <div className="container mx-auto px-4 max-w-4xl">
          <Button variant="ghost" size="sm" asChild className="mb-8 -ml-3 text-muted-foreground hover:text-primary">
            <Link href="/blog"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog</Link>
          </Button>
          <Badge variant="outline" className="mb-6 bg-primary/10 text-primary border-primary/20">{post.category}</Badge>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2"><User className="h-4 w-4" /> {post.author}, {post.authorRole}</span>
            <span className="flex items-center gap-2"><Calendar className="h-4 w-4" /> {post.date}</span>
            <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> {post.readTime}</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="relative mb-12">
            <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full" />
            <img src={post.image} alt={post.title} className="relative z-10 w-full h-auto rounded-3xl border border-white/10 shadow-2xl" />
          </div>

          <p className="text-xl text-foreground/90 leading-relaxed mb-12 font-medium">{post.intro}</p>

          <div className="space-y-12">
            {post.content.map((section, idx) => (
              <div key={idx}>
                {section.heading && (
                  <h2 className="text-2xl md:text-3xl font-bold mb-5">{section.heading}</h2>
                )}
                {section.paragraphs?.map((para, pIdx) => (
                  <p key={pIdx} className="text-lg text-muted-foreground leading-relaxed mb-5">{para}</p>
                ))}
                {section.bullets && (
                  <ul className="space-y-3 mt-4">
                    {section.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-3 text-lg text-foreground/80">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-3 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 p-8 md:p-10 glass-panel rounded-3xl text-center">
            <h3 className="text-2xl font-bold mb-3">Want to put these ideas to work?</h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">Our team can help you turn strategy into shipped software. Let's talk about your goals.</p>
            <Button size="lg" asChild>
              <Link href="/contact">Get in Touch <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </div>
      </article>

      {/* Related */}
      {related.length > 0 && (
        <section className="py-16 border-t border-border">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-2xl font-bold mb-8">Continue Reading</h2>
            <div className="grid sm:grid-cols-2 gap-8">
              {related.map((rp) => (
                <Link key={rp.id} href={`/blog/${rp.slug}`} className="glass-panel rounded-2xl overflow-hidden group hover:border-primary/50 transition-all flex flex-col">
                  <div className="relative h-44 overflow-hidden bg-muted">
                    <img src={rp.image} alt={rp.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <Badge className="absolute top-4 left-4 bg-background/80 backdrop-blur text-foreground hover:bg-background/90">{rp.category}</Badge>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">{rp.title}</h3>
                    <p className="text-muted-foreground text-sm line-clamp-2">{rp.excerpt}</p>
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
