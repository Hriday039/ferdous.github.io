import { FadeIn } from "../AnimatedSection";
import { Trophy, BookOpen, Mic } from "lucide-react";

const awards = [
  "Champion – ByteFest Mini Hackathon 2025 (ANU DSC & Google GDG)",
  "Research Grant Award – IoT Enabled 'Digital Gas Burner' (ICT Ministry, Bangladesh)",
  "Winner – EATL-Prothom Alo Apps Development Contest 2015",
];

const teaching = [
  { course: "Machine Learning with AWS", org: "Tecognize", period: "Apr – Aug 2021" },
  { course: "Complete Beginners Guide to Machine Learning", org: "Upskill", period: "Aug 2020 – Jan 2021" },
  { course: "Machine Learning with Python", org: "FTFL / Genex Infosys", period: "Aug 2020 – Jan 2021" },
  { course: "Practical ML & Intro to Data Science", org: "Jahangirnagar University", period: "Jan – Jun 2020" },
];

const community = [
  "Judge & Problem Setter — DataThon 2025, North Western University",
  "Session Speaker: AI in Journalism — 10th CJEN Conference 2025",
  "Industry Representative — ICT Strategic Roadmap 2030 (BCG / Govt. Forum)",
  "Judge — AI Hackathon (Poridhi.io / Brain Station 23) 2025",
  "Speaker: IoT Meets Big Data and AI — Precision Agriculture Seminar",
  "Speaker: Empowering Future Data Scientists — Daffodil International University 2024",
];

const AwardsSection = () => {
  return (
    <section className="py-24 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Awards */}
          <FadeIn>
            <div className="flex items-center gap-2 mb-6">
              <Trophy size={18} className="text-accent" />
              <h3 className="font-display text-xl font-semibold text-foreground">Awards</h3>
            </div>
            <ul className="space-y-3">
              {awards.map((a, i) => (
                <li key={i} className="font-body text-sm text-muted-foreground leading-relaxed pl-4 border-l-2 border-accent/30">
                  {a}
                </li>
              ))}
            </ul>
          </FadeIn>

          {/* Teaching */}
          <FadeIn delay={0.1}>
            <div className="flex items-center gap-2 mb-6">
              <BookOpen size={18} className="text-primary" />
              <h3 className="font-display text-xl font-semibold text-foreground">Teaching</h3>
            </div>
            <ul className="space-y-3">
              {teaching.map((t, i) => (
                <li key={i} className="font-body text-sm text-muted-foreground leading-relaxed">
                  <span className="text-foreground font-medium">{t.course}</span>
                  <br />
                  <span className="text-xs">{t.org} · {t.period}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>

        {/* Community */}
        <FadeIn delay={0.2} className="mt-16">
          <div className="flex items-center gap-2 mb-6">
            <Mic size={18} className="text-primary" />
            <h3 className="font-display text-xl font-semibold text-foreground">Community & Speaking</h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {community.map((c, i) => (
              <p key={i} className="font-body text-sm text-muted-foreground pl-4 border-l-2 border-border">
                {c}
              </p>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default AwardsSection;
