import { Link } from "wouter";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found" description="The page you are looking for could not be found." />
      <section className="min-h-[70vh] flex items-center justify-center py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10 blur-[120px] rounded-full max-w-2xl mx-auto" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-8xl md:text-9xl font-bold text-[#4f74f4] mb-4">404</h1>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Page Not Found</h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-md mx-auto">
            The page you're looking for doesn't exist or may have been moved. Let's get you back on track.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/"><Home className="mr-2 h-5 w-5" /> Back to Home</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact"><ArrowLeft className="mr-2 h-5 w-5" /> Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
