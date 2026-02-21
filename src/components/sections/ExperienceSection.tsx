import { FadeIn, SlideIn } from "../AnimatedSection";
import { Badge } from "@/components/ui/badge";

interface Job {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
}

const jobs: Job[] = [
  {
    company: "ADN DigiNet (Client: MetLife Bangladesh)",
    role: "Lead Data Scientist",
    period: "Oct 2024 – Present",
    location: "Dhaka, Bangladesh",
    highlights: [
      "Leading the Data Analytics team driving AI-powered decision support systems",
      "Fine-tuned Qwen-2.5-Code LLM on multi-GPU infrastructure to build MET-IQ, a COBOL coding assistant",
      "Designed Graph-based RAG system using LLaMA 3.2 (11B) optimized for 8GB GPU environments",
      "Implemented Personalized Recommendation increasing Lead Generation by 30×",
    ],
  },
  {
    company: "RAENA",
    role: "Lead Data Scientist",
    period: "Apr 2022 – Sep 2024",
    location: "Singapore",
    highlights: [
      "Architected Hybrid Recommendation System using Graph Neural Networks with 28% increase in monthly conversion rate",
    ],
  },
  {
    company: "Coel Incorporation",
    role: "Data Scientist",
    period: "Feb 2020 – Mar 2022",
    location: "Japan",
    highlights: [
      "Built image-based product search engine with ChromaDB improving top-5 accuracy by 6%",
      "Developed customer churn prediction using GNNs, increasing retention rate by 18%",
      "Led end-to-end ML lifecycle including data engineering, training, deployment, and monitoring",
    ],
  },
  {
    company: "DataShall Analytics Ltd.",
    role: "Junior Data Scientist",
    period: "Feb 2017 – Feb 2020",
    location: "Dhaka, Bangladesh",
    highlights: [
      "Developed Bangla and Romanized Bangla corpora for supervised learning tasks",
      "Built Word2Vec and FastText embeddings and deep learning classifiers for text classification",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-4">Experience</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-12">
            Professional Journey
          </h2>
        </FadeIn>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {jobs.map((job, i) => (
              <SlideIn key={i} delay={i * 0.1}>
                <div className="relative pl-8 md:pl-20">
                  {/* Timeline dot */}
                  <div className="absolute left-[-4px] md:left-[28px] top-2 w-2 h-2 bg-primary rounded-full" />

                  <div className="flex flex-col md:flex-row md:items-start gap-1 md:gap-4 mb-3">
                    <Badge variant="outline" className="w-fit font-body text-xs font-normal">
                      {job.period}
                    </Badge>
                    <span className="font-body text-xs text-muted-foreground">{job.location}</span>
                  </div>

                  <h3 className="font-display text-xl font-semibold text-foreground mb-1">{job.role}</h3>
                  <p className="font-body text-sm text-primary mb-4">{job.company}</p>

                  <ul className="space-y-2">
                    {job.highlights.map((h, j) => (
                      <li key={j} className="font-body text-sm text-muted-foreground leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-accent/40 before:rounded-full">
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </SlideIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
