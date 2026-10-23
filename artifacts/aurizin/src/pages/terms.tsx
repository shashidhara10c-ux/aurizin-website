import { SEO } from "@/components/SEO";
import { Badge } from "@/components/ui/badge";

const sections = [
  {
    heading: "1. Acceptance of Terms",
    body: [
      "By accessing and using the website of Aurizin Innovations Pvt. Ltd. (\"Aurizin\"), you accept and agree to be bound by these Terms & Conditions. If you do not agree, please do not use our website or services.",
    ],
  },
  {
    heading: "2. Use of the Website",
    body: [
      "You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of, or restrict or inhibit the use and enjoyment of, this website by any third party.",
      "You may not attempt to gain unauthorized access to any part of the website, its servers, or any connected systems.",
    ],
  },
  {
    heading: "3. Intellectual Property",
    body: [
      "All content on this website, including text, graphics, logos, images, and software, is the property of Aurizin Innovations Pvt. Ltd. or its licensors and is protected by applicable intellectual property laws.",
      "You may not reproduce, distribute, or create derivative works from any content without our prior written consent.",
    ],
  },
  {
    heading: "4. Services",
    body: [
      "Any services provided by Aurizin are subject to separate agreements. These Terms & Conditions govern only your use of this website and do not constitute a service contract.",
    ],
  },
  {
    heading: "5. Limitation of Liability",
    body: [
      "The information on this website is provided \"as is\" without warranties of any kind. Aurizin shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of, or inability to use, this website.",
    ],
  },
  {
    heading: "6. External Links",
    body: [
      "Our website may contain links to third-party websites. We are not responsible for the content, privacy practices, or availability of these external sites.",
    ],
  },
  {
    heading: "7. Governing Law",
    body: [
      "These Terms & Conditions are governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts of Hyderabad, Telangana.",
    ],
  },
  {
    heading: "8. Contact Us",
    body: [
      "For any questions regarding these Terms & Conditions, please contact us at info@aurizin.com.",
    ],
  },
];

export default function Terms() {
  return (
    <>
      <SEO title="Terms & Conditions" description="Read the Terms & Conditions governing your use of the Aurizin Innovations website." />

      <section className="pt-20 pb-12 border-b border-border text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <Badge variant="outline" className="mb-6 bg-primary/10 text-primary border-primary/20">LEGAL</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms &amp; Conditions</h1>
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
