import { FadeIn } from "../AnimatedSection";
import { Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <FadeIn>
          <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-4">Contact</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Let's Connect
          </h2>
          <p className="font-body text-muted-foreground mb-10 max-w-lg mx-auto">
            Interested in collaboration, research, or just a conversation about AI?
            I'd love to hear from you.
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="mailto:hridoyferdous@yahoo.com" className="flex items-center gap-2 px-5 py-3 rounded-full border border-border hover:bg-secondary transition-colors font-body text-sm text-foreground">
              <Mail size={16} className="text-primary" /> hridoyferdous@yahoo.com
            </a>
            <a href="tel:+8801675615851" className="flex items-center gap-2 px-5 py-3 rounded-full border border-border hover:bg-secondary transition-colors font-body text-sm text-foreground">
              <Phone size={16} className="text-primary" /> +880 1675 615851
            </a>
            <a href="https://linkedin.com/in/fbali0239" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-3 rounded-full border border-border hover:bg-secondary transition-colors font-body text-sm text-foreground">
              <Linkedin size={16} className="text-primary" /> LinkedIn
            </a>
            <a href="https://iknownothing.me" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-3 rounded-full border border-border hover:bg-secondary transition-colors font-body text-sm text-foreground">
              <Globe size={16} className="text-primary" /> iknownothing.me
            </a>
            <span className="flex items-center gap-2 px-5 py-3 rounded-full border border-border font-body text-sm text-muted-foreground">
              <MapPin size={16} className="text-primary" /> Banasree, Dhaka
            </span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default ContactSection;
