import { Link, useLocation } from "wouter";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import logo from "@/assets/aurizin-logo.png";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/industries", label: "Industries" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [location] = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img src={logo} alt="Aurizin Logo" className="h-16 w-auto object-contain [filter:invert(1)_hue-rotate(180deg)] dark:[filter:none]" />
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={cn("text-sm font-medium transition-colors hover:text-primary", location === "/" ? "text-primary" : "text-foreground/80")}>
                  <Link href="/">Home</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={cn("text-sm font-medium transition-colors hover:text-primary", location === "/about" ? "text-primary" : "text-foreground/80")}>
                  <Link href="/about">About</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={cn("text-sm font-medium transition-colors hover:text-primary", location.startsWith("/products") ? "text-primary" : "text-foreground/80")}>
                  <Link href="/products">Products</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent px-0 text-foreground/80 hover:text-primary data-[state=open]:text-primary">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {[
                      "AI Solutions", "Software Development", "Web Development", 
                      "Mobile App Development", "Cloud Solutions", "UI/UX Design",
                      "IT Consulting", "Cybersecurity"
                    ].map((service) => (
                      <li key={service}>
                        <NavigationMenuLink asChild className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <Link href="/services">
                            <div className="text-sm font-medium leading-none">{service}</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              {NAV_LINKS.slice(3).map((link) => (
                <NavigationMenuItem key={link.href}>
                  <NavigationMenuLink asChild className={cn("text-sm font-medium transition-colors hover:text-primary", location === link.href ? "text-primary" : "text-foreground/80")}>
                    <Link href={link.href}>{link.label}</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          
          <div className="flex items-center gap-4 border-l border-border pl-4">
            <ThemeToggle />
            <Button asChild className="bg-none bg-[#2027d6] hover:bg-[#1a20b8]">
              <Link href="/contact">Book Consultation</Link>
            </Button>
          </div>
        </div>

        <div className="flex md:hidden items-center gap-4">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-6 py-6">
                <img src={logo} alt="Aurizin Logo" className="h-8 w-auto object-contain self-start [filter:invert(1)_hue-rotate(180deg)] dark:[filter:none]" />
                <div className="flex flex-col gap-4">
                  {NAV_LINKS.map((link) => (
                    <Link key={link.href} href={link.href} className={cn("text-lg font-medium", location === link.href ? "text-primary" : "text-foreground/80")}>
                      {link.label}
                    </Link>
                  ))}
                  <Link href="/services" className={cn("text-lg font-medium", location === "/services" ? "text-primary" : "text-foreground/80")}>
                    Services
                  </Link>
                </div>
                <Button asChild className="w-full mt-4 bg-none bg-[#2027d6] hover:bg-[#1a20b8]">
                  <Link href="/contact">Book Consultation</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
