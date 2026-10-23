import { useState, useEffect } from "react";
import { useCreateContactSubmission } from "@workspace/api-client-react";
import { SEO } from "@/components/SEO";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, CheckCircle2, Loader2 } from "lucide-react";

const EMPTY_FORM = {
  name: "",
  email: "",
  phone: "",
  service: "",
  budget: "",
  timeline: "",
  message: "",
};

function ContactForm({ onSuccess }: { onSuccess?: () => void }) {
  const { toast } = useToast();
  const [form, setForm] = useState(EMPTY_FORM);
  const { mutate, isPending } = useCreateContactSubmission();

  const setField = (key: keyof typeof EMPTY_FORM, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(
      {
        data: {
          name: form.name,
          email: form.email,
          phone: form.phone || undefined,
          service: form.service || undefined,
          budget: form.budget || undefined,
          timeline: form.timeline || undefined,
          message: form.message,
        },
      },
      {
        onSuccess: () => {
          toast({
            title: "Message Sent Successfully!",
            description: "Thank you for reaching out. Our team will get back to you shortly.",
          });
          setForm(EMPTY_FORM);
          onSuccess?.();
        },
        onError: () => {
          toast({
            variant: "destructive",
            title: "Something went wrong",
            description: "We couldn't send your message. Please try again or email us directly.",
          });
        },
      },
    );
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium">Full Name <span className="text-destructive">*</span></label>
          <Input
            required
            placeholder="John Doe"
            className="bg-background"
            value={form.name}
            onChange={(e) => setField("name", e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Email Address <span className="text-destructive">*</span></label>
          <Input
            type="email"
            required
            placeholder="john@example.com"
            className="bg-background"
            value={form.email}
            onChange={(e) => setField("email", e.target.value)}
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium">Phone Number</label>
          <Input
            type="tel"
            placeholder="+91 9876543210"
            className="bg-background"
            value={form.phone}
            onChange={(e) => setField("phone", e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Select Service</label>
          <Select value={form.service} onValueChange={(v) => setField("service", v)}>
            <SelectTrigger className="bg-background">
              <SelectValue placeholder="Choose a service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ai">AI Solutions</SelectItem>
              <SelectItem value="software">Software Development</SelectItem>
              <SelectItem value="web">Web Development</SelectItem>
              <SelectItem value="mobile">Mobile App Development</SelectItem>
              <SelectItem value="cloud">Cloud Solutions</SelectItem>
              <SelectItem value="other">Other / General Inquiry</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium">Project Budget Range</label>
          <Select value={form.budget} onValueChange={(v) => setField("budget", v)}>
            <SelectTrigger className="bg-background">
              <SelectValue placeholder="Select budget" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="under10k">Under $10,000</SelectItem>
              <SelectItem value="10k-50k">$10,000 - $50,000</SelectItem>
              <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
              <SelectItem value="100k+">$100,000+</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Timeline</label>
          <Select value={form.timeline} onValueChange={(v) => setField("timeline", v)}>
            <SelectTrigger className="bg-background">
              <SelectValue placeholder="Expected timeline" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="asap">As soon as possible</SelectItem>
              <SelectItem value="1-3">1-3 months</SelectItem>
              <SelectItem value="3-6">3-6 months</SelectItem>
              <SelectItem value="flexible">Flexible</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Message <span className="text-destructive">*</span></label>
        <Textarea
          required
          placeholder="Tell us about your project..."
          className="bg-background min-h-[150px] resize-none"
          value={form.message}
          onChange={(e) => setField("message", e.target.value)}
          maxLength={1000}
        />
        <div className="text-right text-xs text-muted-foreground">{form.message.length}/1000 characters</div>
      </div>

      <Button type="submit" size="lg" disabled={isPending} className="w-full md:w-auto px-10 h-12 text-base">
        {isPending ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  );
}

export default function Contact() {
  const [popupOpen, setPopupOpen] = useState(false);

  useEffect(() => {
    setPopupOpen(true);
  }, []);

  return (
    <>
      <SEO title="Contact Us" description="Get in touch with Aurizin Innovations for your software, AI, and cloud needs." />

      <Dialog open={popupOpen} onOpenChange={setPopupOpen}>
        <DialogContent className="glass-panel max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl md:text-3xl font-bold">Send Us a Message</DialogTitle>
            <DialogDescription>
              Tell us about your project and our team will get back to you shortly.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-2">
            <ContactForm onSuccess={() => setPopupOpen(false)} />
          </div>
        </DialogContent>
      </Dialog>
      
      {/* Hero */}
      <section className="pt-20 pb-16 border-b border-border relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <Badge variant="outline" className="mb-6 bg-primary/10 text-primary border-primary/20">CONTACT US</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Let's Build Something <span className="text-[#4f74f4]">Amazing Together.</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Whether you have a specific project in mind or just want to explore possibilities, the Aurizin team is ready to listen.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Info Cards */}
            <div className="lg:col-span-1 space-y-6">
              <div className="glass-panel p-6 rounded-2xl flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <MapPin />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Our Location</h4>
                  <p className="text-muted-foreground text-sm">3rd Floor, Plot No. 94, Phase IV Colony, Opp. Telephone Quarters, Vanasthalipuram, Hyderabad, Telangana, India - 500070</p>
                </div>
              </div>
              
              <div className="glass-panel p-6 rounded-2xl flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Phone />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Call Us</h4>
                  <p className="text-muted-foreground text-sm"><a href="tel:+917032247427" className="hover:text-primary transition-colors">+91 7032247427</a></p>
                  <p className="text-muted-foreground text-sm mt-1">All days, 4am - 8pm IST</p>
                </div>
              </div>

              <div className="glass-panel p-6 rounded-2xl flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Mail />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Email Us</h4>
                  <p className="text-muted-foreground text-sm"><a href="mailto:info@aurizin.com" className="hover:text-primary transition-colors">info@aurizin.com</a></p>
                  <p className="text-muted-foreground text-sm mt-1">We typically reply within 24 hours</p>
                </div>
              </div>

              <div className="bg-muted border border-border rounded-2xl h-48 w-full overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground font-medium">
                  Map View Placeholder
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="glass-panel p-8 md:p-10 rounded-3xl">
                <h3 className="text-3xl font-bold mb-8">Send Us a Message</h3>
                <ContactForm />
              </div>
            </div>
          </div>

          <div className="mt-16 pt-16 border-t border-border grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Free Consultation", "No Obligation Quote", "Quick Response Time", "Strict Confidentiality"
            ].map((trust, idx) => (
              <div key={idx} className="flex items-center gap-3 justify-center sm:justify-start">
                <CheckCircle2 className="text-primary h-6 w-6" />
                <span className="font-medium">{trust}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
