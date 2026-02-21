import { FadeIn } from "../AnimatedSection";
import { motion } from "framer-motion";

const skillCategories = [
  { label: "Programming", skills: ["Python", "C++", "Java"] },
  { label: "ML Frameworks", skills: ["TensorFlow", "Keras", "PyTorch", "Scikit-learn"] },
  { label: "NLP", skills: ["NLTK", "CoreNLP", "Gensim", "spaCy"] },
  { label: "LLM & Agentic", skills: ["Hugging Face", "LangChain", "LlamaIndex", "Agentic RAG"] },
  { label: "Computer Vision", skills: ["OpenCV", "TF Object Detection API", "scikit-image"] },
  { label: "MLOps", skills: ["MLflow", "Weights & Biases"] },
  { label: "Cloud & Deploy", skills: ["AWS", "Azure ML SDK V2", "Docker", "FastAPI"] },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-4">Skills</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-12">
            Technical Expertise
          </h2>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((cat, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div>
                <h3 className="font-display text-sm font-semibold text-foreground mb-3">{cat.label}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1.5 bg-secondary text-secondary-foreground text-xs font-body rounded-full border border-border hover:border-primary/30 transition-colors duration-200 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
