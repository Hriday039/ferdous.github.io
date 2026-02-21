import { FadeIn } from "../AnimatedSection";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

interface Publication {
  title: string;
  link?: string;
}

const conferences: Publication[] = [
  { title: "Ali, F.B. et al. (2024). AttentionVGG: Modified VGG-16 for Alzheimer Disease Classification. ICCIT, IEEE.", link: "https://ieeexplore.ieee.org/" },
  { title: "Paul, L., Ali, F.B. et al. (2024). Self-Supervised Contrastive Learning for Potato Leaf Disease Classification. ICCIT, IEEE.", link: "https://ieeexplore.ieee.org/" },
  { title: "Paul, L. et al. (2024). Transfer Learning for Brain Tumor Classification from MRI Images. SPICSCON, IEEE.", link: "https://ieeexplore.ieee.org/" },
  { title: "Ali, F.B. et al. (2023). Deep Transfer Learning for Potato Leaf Disease Classification. ICCIT, IEEE.", link: "https://ieeexplore.ieee.org/" },
  { title: "Khan, N.A. et al. (2023). Music Recommendation Using Psychological Scale. Springer.", link: "https://link.springer.com/" },
  { title: "Rahman, P. et al. (2023). Classifying Bangla Health Misinformation Using ML. ICMLC, IEEE.", link: "https://ieeexplore.ieee.org/" },
  { title: "Mohalder, R.D. et al. (2022). Deep Learning-Based Colon Cancer Tumor Prediction. ICCIT, IEEE.", link: "https://ieeexplore.ieee.org/" },
  { title: "Nahid, A.A., Ali, F.B. & Kong, Y. (2017). Histopathological Breast Image Classification with CNN. ICCIT, IEEE.", link: "https://ieeexplore.ieee.org/" },
];

const journals: Publication[] = [
  { title: "Simons, G. et al. (2022). Public Perception of Media's Role during COVID-19. World of Media.", link: "https://worldofmedia.online/" },
  { title: "Alam, M.K. et al. (2021). Mental Health Condition of Home-Confined University Students. J. Public Health.", link: "https://link.springer.com/" },
  { title: "Yasmin, S. et al. (2021). Psychological Impact of COVID-19 Among Banking Employees. Int. J. Mental Health.", link: "https://www.tandfonline.com/" },
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
              <div key={i} className="group pl-4 border-l-2 border-border hover:border-primary transition-colors duration-300">
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-2 font-body text-sm text-muted-foreground leading-relaxed hover:text-foreground transition-colors"
                >
                  <span className="flex-1">{pub.title}</span>
                  <ExternalLink size={14} className="mt-1 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                </a>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h3 className="font-display text-lg font-semibold text-foreground mb-6">Journal Publications</h3>
          <div className="space-y-4">
            {journals.map((pub, i) => (
              <div key={i} className="group pl-4 border-l-2 border-border hover:border-accent transition-colors duration-300">
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-2 font-body text-sm text-muted-foreground leading-relaxed hover:text-foreground transition-colors"
                >
                  <span className="flex-1">{pub.title}</span>
                  <ExternalLink size={14} className="mt-1 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                </a>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default ResearchSection;
