import { SEO } from "@/components/SEO";
import { Badge } from "@/components/ui/badge";

const sections = [
  {
    heading: "1. Introduction",
    body: [
      "Aurizin Innovations Pvt. Ltd. (\"Aurizin\", \"we\", \"us\", or \"our\") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.",
      "By using our website, you consent to the practices described in this policy.",
    ],
  },
  {
    heading: "2. Information We Collect",
    body: [
      "We may collect personal information that you voluntarily provide to us, such as your name, email address, phone number, and company details when you fill out a contact form, subscribe to our newsletter, or request a consultation.",
      "We also automatically collect certain technical information, including your IP address, browser type, device information, and pages visited, to improve our website experience.",
    ],
  },
  {
    heading: "3. How We Use Your Information",
    body: [
      "We use the information we collect to respond to your inquiries, provide and improve our services, send relevant updates and marketing communications (where you have opted in), and comply with legal obligations.",
      "We do not sell your personal information to third parties.",
    ],
  },
  {
    heading: "4. Data Security",
    body: [
      "We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is completely secure.",
    ],
  },
  {
    heading: "5. Cookies",
    body: [
      "Our website may use cookies and similar tracking technologies to enhance your browsing experience and analyze site traffic. You can control cookie preferences through your browser settings.",
    ],
  },
  {
    heading: "6. Your Rights",
    body: [
      "Depending on your location, you may have the right to access, correct, or delete your personal data, as well as object to or restrict certain processing. To exercise these rights, please contact us using the details below.",
    ],
  },
  {
    heading: "7. Changes to This Policy",
    body: [
      "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.",
    ],
  },
  {
    heading: "8. Contact Us",
    body: [
      "If you have any questions about this Privacy Policy or our data practices, please contact us at info@aurizin.com or write to 3rd Floor, Plot No. 94, Phase IV Colony, Opp. Telephone Quarters, Vanasthalipuram, Hyderabad, Telangana, India - 500070.",
    ],
  },
];

export default function Privacy() {
  return (
    <>
      <SEO title="Privacy Policy" description="Learn how Aurizin Innovations collects, uses, and protects your personal information." />

      <section className="pt-20 pb-12 border-b border-border text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <Badge variant="outline" className="mb-6 bg-primary/10 text-primary border-primary/20">LEGAL</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground">Last updated: October 2024</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl space-y-10">
          {sections.map((section, idx) => (
            <div key={idx}>
              <h2 className="text-2xl font-bold mb-4">{section.heading}</h2>
              {section.body.map((p, pIdx) => (
                <p key={pIdx} className="text-muted-foreground leading-relaxed mb-4">{p}</p>
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
