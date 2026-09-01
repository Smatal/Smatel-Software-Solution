import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-24 bg-muted/30 border-b border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-foreground">Contact Us</h1>
          <p className="text-xl text-muted-foreground">Reach out to our engineering team to discuss your next digital transformation project.</p>
        </div>
      </section>
      
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-foreground">Get in touch</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-teal-700 shrink-0 mt-0.5">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Chennai Headquarters</h3>
                    <p className="text-muted-foreground mt-1 leading-relaxed">
                      108, 109, Hameedia Complex, 2nd Floor,<br />
                      Triplicane High Road, Triplicane,<br />
                      Chennai - 600005, Tamil Nadu, India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-teal-700 shrink-0 mt-0.5">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Phone / WhatsApp</h3>
                    <div className="flex flex-col space-y-1 mt-1">
                      <a href="tel:+919649964912" className="text-muted-foreground hover:text-teal-700 transition-colors block">
                        +91 96499 64912
                      </a>
                      <a href="tel:+919342217586" className="text-muted-foreground hover:text-teal-700 transition-colors block">
                        +91 93422 17586
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-teal-700 shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <a href="mailto:info@smatal.in" className="text-muted-foreground hover:text-primary transition-colors block mt-1">
                      info@smatal.in
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-muted/20 p-8 rounded-xl border border-border/50">
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" type="text" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@company.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" rows={4} placeholder="How can we help you?" />
                </div>
                <button type="button" className={cn(buttonVariants({ variant: "default", size: "lg" }), "w-full")}>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
