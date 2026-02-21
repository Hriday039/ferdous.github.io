import { FadeIn } from "../AnimatedSection";
import { Badge } from "@/components/ui/badge";

const conferences = [
  "Ali, F.B. et al. (2024). AttentionVGG: Modified VGG-16 for Alzheimer Disease Classification. ICCIT, IEEE.",
  "Paul, L., Ali, F.B. et al. (2024). Self-Supervised Contrastive Learning for Potato Leaf Disease Classification. ICCIT, IEEE.",
  "Paul, L. et al. (2024). Transfer Learning for Brain Tumor Classification from MRI Images. SPICSCON, IEEE.",
  "Ali, F.B. et al. (2023). Deep Transfer Learning for Potato Leaf Disease Classification. ICCIT, IEEE.",
  "Khan, N.A. et al. (2023). Music Recommendation Using Psychological Scale. Springer.",
  "Rahman, P. et al. (2023). Classifying Bangla Health Misinformation Using ML. ICMLC, IEEE.",
  "Mohalder, R.D. et al. (2022). Deep Learning-Based Colon Cancer Tumor Prediction. ICCIT, IEEE.",
  "Nahid, A.A., Ali, F.B. & Kong, Y. (2017). Histopathological Breast Image Classification with CNN. ICCIT, IEEE.",
];

const journals = [
  "Simons, G. et al. (2022). Public Perception of Media's Role during COVID-19. World of Media.",
  "Alam, M.K. et al. (2021). Mental Health Condition of Home-Confined University Students. J. Public Health.",
  "Yasmin, S. et al. (2021). Psychological Impact of COVID-19 Among Banking Employees. Int. J. Mental Health.",
];

const ResearchSection = () => {
  return (
    <section id="research" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-4">Research</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Publications & Academic Work
          </h2>
          <p className="font-body text-muted-foreground mb-12 max-w-2xl">
            15+ peer-reviewed publications spanning medical imaging, NLP, computer vision, and AI for social good.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h3 className="font-display text-lg font-semibold text-foreground mb-6 flex items-center gap-3">
            Conference Papers
            <Badge className="font-body text-xs font-normal bg-primary/10 text-primary border-0">
              IEEE · Springer
            </Badge>
          </h3>
          <div className="space-y-4 mb-14">
            {conferences.map((pub, i) => (
              <div key={i} className="pl-4 border-l-2 border-border hover:border-primary transition-colors duration-300">
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{pub}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h3 className="font-display text-lg font-semibold text-foreground mb-6">Journal Publications</h3>
          <div className="space-y-4">
            {journals.map((pub, i) => (
              <div key={i} className="pl-4 border-l-2 border-border hover:border-accent transition-colors duration-300">
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{pub}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default ResearchSection;
