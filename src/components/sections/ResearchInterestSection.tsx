import { FadeIn } from "../AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Eye, MessageSquare, Cpu, HeartPulse, Shield } from "lucide-react";

const interests = [
  {
    icon: Brain,
    title: "Large Language Models",
    description: "Fine-tuning, prompt engineering, RAG pipelines, and deploying LLMs for real-world applications.",
  },
  {
    icon: Eye,
    title: "Computer Vision",
    description: "Medical image analysis, object detection, and deep learning-based classification systems.",
  },
  {
    icon: MessageSquare,
    title: "Natural Language Processing",
    description: "Text classification, sentiment analysis, misinformation detection, and multilingual NLP.",
  },
  {
    icon: HeartPulse,
    title: "AI for Healthcare",
    description: "Alzheimer's detection, cancer tumor prediction, and brain tumor classification using deep learning.",
  },
  {
    icon: Cpu,
    title: "MLOps & Edge AI",
    description: "Production ML pipelines, model optimization, and deploying AI on edge devices.",
  },
  {
    icon: Shield,
    title: "Responsible AI",
    description: "Fairness, explainability, and ethical considerations in AI systems for social good.",
  },
];

const ResearchInterestSection = () => {
  return (
    <section id="interests" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-4">Interests</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Research Interests
          </h2>
          <p className="font-body text-muted-foreground mb-12 max-w-2xl">
            Exploring the intersection of AI theory and practical applications across diverse domains.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {interests.map((interest, i) => (
            <FadeIn key={interest.title} delay={0.05 * i}>
              <Card className="group h-full border-border/50 bg-card/80 backdrop-blur-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <interest.icon size={20} className="text-primary" />
                  </div>
                  <h3 className="font-display text-base font-semibold text-foreground mb-2">
                    {interest.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {interest.description}
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchInterestSection;
