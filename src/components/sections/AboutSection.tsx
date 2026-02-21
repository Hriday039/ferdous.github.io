import { FadeIn } from "../AnimatedSection";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-4">About</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-8">
            Where Research Meets Real-World Impact
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8">
          <FadeIn delay={0.1}>
            <div className="space-y-4">
              <p className="font-body text-muted-foreground leading-relaxed">
                Experienced AI Engineer with expertise in machine learning algorithm design,
                LLM applications, and cloud-native AI deployment. Strong proficiency in Python,
                TensorFlow, PyTorch, and MLOps pipelines.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                Deep interest in Foundation Models, Agentic Frameworks, and Large Language Models.
                Proven ability to lead AI product incubation from experimentation to production,
                ensuring scalability, reliability, and real-world impact.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="space-y-4">
              <p className="font-body text-muted-foreground leading-relaxed">
                Demonstrated leadership in mentoring cross-functional teams and collaborating
                with engineering, product, and business stakeholders to align AI solutions with
                business objectives, compliance requirements, and operational constraints.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                Strong advocate of data quality over data volume, leveraging close collaboration
                with domain experts to solve complex, data-specific challenges.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
