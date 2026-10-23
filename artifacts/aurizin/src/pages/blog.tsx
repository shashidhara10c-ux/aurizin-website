import { useState } from "react";
import { Link } from "wouter";
import { SEO } from "@/components/SEO";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Calendar, Clock, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-blog.png";
import { blogPosts } from "@/data/blog";

const categories = ["All", "AI & Automation", "Cloud Computing", "Software Development", "Web Development", "Cybersecurity", "Business Strategy", "Tech News"];

export default function Blog() {
  const [activeCat, setActiveCat] = useState("All");

  const filteredPosts = activeCat === "All" ? blogPosts : blogPosts.filter(p => p.category === activeCat);

  return (
    <>
      <SEO title="Blog" description="Insights, innovation, and impact from the engineering team at Aurizin." />
      
      {/* Hero */}
      <section className="pt-20 pb-16 border-b border-border relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <Badge variant="outline" className="mb-6 bg-primary/10 text-primary border-primary/20">OUR BLOG</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Insights. Innovation. <span className="text-[#4f74f4]">Impact.</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            Expert perspectives from the Aurizin team on technology, software engineering, AI trends, and digital strategy.
          </p>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full" />
            <img src={heroImg} alt="Blog Hero" className="relative z-10 w-full h-auto rounded-3xl border border-white/10 shadow-2xl" />
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <div className="flex flex-wrap items-center gap-2 mb-10">
                {categories.map((cat) => (
                  <Button 
                    key={cat} 
                    variant={activeCat === cat ? "default" : "outline"} 
                    size="sm"
                    className="rounded-full"
                    onClick={() => setActiveCat(cat)}
                  >
                    {cat}
                  </Button>
                ))}
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                {filteredPosts.map((post) => (
                  <article key={post.id} className="glass-panel rounded-2xl overflow-hidden group hover:border-primary/50 transition-all flex flex-col">
                    <div className="relative h-48 overflow-hidden bg-muted">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <Badge className="absolute top-4 left-4 bg-background/80 backdrop-blur text-foreground hover:bg-background/90">{post.category}</Badge>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> {post.date}</span>
                        <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {post.readTime}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">{post.title}</h3>
                      <p className="text-muted-foreground mb-6 flex-1 line-clamp-3">{post.excerpt}</p>
                      <Link href={`/blog/${post.slug}`} className="inline-flex items-center text-primary font-medium mt-auto">
                        Read Article <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
              
              {filteredPosts.length === 0 && (
                <div className="text-center py-20 text-muted-foreground border border-dashed border-border rounded-2xl">
                  No articles found in this category. Check back later!
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3 space-y-10">
              <div className="glass-panel p-6 rounded-2xl">
                <h4 className="font-bold text-lg mb-4">Search</h4>
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search articles..." className="pl-9 bg-background" />
                </div>
              </div>

              <div className="glass-panel p-6 rounded-2xl">
                <h4 className="font-bold text-lg mb-4">Categories</h4>
                <ul className="space-y-3">
                  {categories.slice(1).map(cat => (
                    <li key={cat}>
                      <button onClick={() => setActiveCat(cat)} className="flex items-center justify-between w-full text-left text-muted-foreground hover:text-primary transition-colors">
                        <span>{cat}</span>
                        <Badge variant="secondary" className="bg-muted">1</Badge>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-primary text-primary-foreground p-8 rounded-2xl text-center">
                <h4 className="font-bold text-xl mb-3">Subscribe to Newsletter</h4>
                <p className="text-primary-foreground/80 text-sm mb-6">Get the latest tech news and insights delivered to your inbox.</p>
                <div className="space-y-3">
                  <Input placeholder="Your email address" className="bg-background/20 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50" />
                  <Button className="w-full bg-background text-primary hover:bg-background/90">Subscribe</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
