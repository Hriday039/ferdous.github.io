import { FadeIn } from "../AnimatedSection";
import { GraduationCap } from "lucide-react";

const education = [
  {
    institution: "Jahangirnagar University",
    degree: "M.P.S. in Applied Statistics & Data Science",
    period: "Jul 2019 – Jan 2022",
    cgpa: "3.42 / 4.00",
    thesis: "Psychological Impact of COVID-19 Pandemic in Bangladesh",
    focus: "Applied Statistics, Machine Learning, Data Analytics",
  },
  {
    institution: "Khulna University",
    degree: "B.Sc. in Computer Science & Engineering",
    period: "Jun 2011 – Jan 2017",
    cgpa: "2.79 / 4.00",
    thesis: "Identifying miRNA–mRNA interactions using Spearman's rank correlation and IDA",
    focus: "Algorithms, Data Structures, Machine Learning, Bioinformatics",
  },
];

const trainings = [
  { name: "IQM Quantum School — Quantum Computing & Algorithms", org: "IQM Academy", year: "2025" },
  { name: "MLx Generative AI — Theory, Agents, Products", org: "OXML / CIFAR / Oxford / LSE", year: "2024" },
  { name: "Representation Learning & Generative AI", org: "OXML / CIFAR / Oxford", year: "2024" },
  { name: "Health & Bio — OXML Summer School", org: "CIFAR / Oxford", year: "2024" },
  { name: "ACMP 4.0 — Advanced Certificate for Management Professionals", org: "IBA, Dhaka University", year: "2023" },
  { name: "Specialist Programme in AI for IT & ITES Industry", org: "NUS — COE Frontier Technology", year: "2020" },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-4">Education</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-12">
            Academic Background
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {education.map((edu, i) => (
            <FadeIn key={i} delay={i * 0.15}>
              <div className="bg-card p-6 rounded-xl border border-border hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start gap-3 mb-4">
                  <GraduationCap className="text-primary mt-1 shrink-0" size={20} />
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground">{edu.institution}</h3>
                    <p className="font-body text-sm text-primary">{edu.degree}</p>
                  </div>
                </div>
                <div className="space-y-2 font-body text-sm text-muted-foreground">
                  <p>{edu.period} · CGPA: {edu.cgpa}</p>
                  <p><span className="text-foreground font-medium">Thesis:</span> {edu.thesis}</p>
                  <p><span className="text-foreground font-medium">Focus:</span> {edu.focus}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.1}>
          <h3 className="font-display text-xl font-semibold text-foreground mb-6">
            Summer Schools & Professional Training
          </h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {trainings.map((t, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-lg hover:bg-card transition-colors duration-200">
                <span className="font-body text-xs text-primary font-medium shrink-0 mt-0.5">{t.year}</span>
                <div>
                  <p className="font-body text-sm text-foreground">{t.name}</p>
                  <p className="font-body text-xs text-muted-foreground">{t.org}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default EducationSection;
