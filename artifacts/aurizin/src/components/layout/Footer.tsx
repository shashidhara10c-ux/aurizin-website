import { Link } from "wouter";
import logo from "@/assets/aurizin-logo.png";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <img src={logo} alt="Aurizin Logo" className="h-10 w-auto object-contain [filter:invert(1)_hue-rotate(180deg)] dark:[filter:none]" />
            </Link>
            <p className="text-muted-foreground mb-8 max-w-sm">
              SOFTWARE. AI. CLOUD. Building intelligent software, AI solutions, and cloud platforms for the modern enterprise.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/careers" className="text-muted-foreground hover:text-primary transition-colors">Careers</Link></li>
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">Our Team</Link></li>
              <li><Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">News & Updates</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-6">Services</h4>
            <ul className="space-y-4">
              <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">AI Solutions</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">Software Development</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">Web Development</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">Cloud Solutions</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">IT Consulting</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-6">Industries</h4>
            <ul className="space-y-4">
              <li><Link href="/industries" className="text-muted-foreground hover:text-primary transition-colors">Healthcare</Link></li>
              <li><Link href="/industries" className="text-muted-foreground hover:text-primary transition-colors">Education</Link></li>
              <li><Link href="/industries" className="text-muted-foreground hover:text-primary transition-colors">Retail & E-commerce</Link></li>
              <li><Link href="/industries" className="text-muted-foreground hover:text-primary transition-colors">Manufacturing</Link></li>
              <li><Link href="/industries" className="text-muted-foreground hover:text-primary transition-colors">Finance & Banking</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 border-t border-border">
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <address className="not-italic text-muted-foreground space-y-2">
              <p>3rd Floor, Plot No. 94, Phase IV Colony,</p>
              <p>Opp. Telephone Quarters, Vanasthalipuram,</p>
              <p>Hyderabad, Telangana, India - 500070</p>
              <p className="pt-2">
                <a href="tel:+917032247427" className="hover:text-primary">+91 7032247427</a>
              </p>
              <p>
                <a href="mailto:info@aurizin.com" className="hover:text-primary">info@aurizin.com</a>
              </p>
            </address>
          </div>
          <div className="flex flex-col justify-center">
            <h4 className="font-semibold text-lg mb-4">Subscribe to Newsletter</h4>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Email Address" className="flex-1 bg-accent border-transparent rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary text-foreground" />
              <button type="submit" className="bg-primary text-primary-foreground px-6 py-2 rounded-md font-medium hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2024 Aurizin Innovations Pvt. Ltd. All Rights Reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link>
          </div>
          <p>Made with &hearts; in India</p>
        </div>
      </div>
    </footer>
  );
}
