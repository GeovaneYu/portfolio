import { experience, education, languages, skillCategories } from "@/data/portfolio-data";
import { motion } from "framer-motion";

const MONTHS = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];

function formatDate(value: string): string {
  const [year, month] = value.split("-");
  if (!month) return year;
  return `${MONTHS[Number(month) - 1]}/${year}`;
}

function formatDateRange(start: string, end: string | null): string {
  return `${formatDate(start)} — ${end ? formatDate(end) : "atual"}`;
}

export default function ContentSection() {
  return (
    <>
      <section id="experiencia" className="w-full max-w-7xl mx-auto px-6 md:px-12 py-14 md:py-20">
        <h2 className="label-mono section-label mb-8">Experiência profissional</h2>

        <div className="border-t border-border">
          {experience.map((job, index) => (
            <motion.article
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="grid gap-3 md:grid-cols-[190px_1fr] md:gap-10 border-b border-border py-6 md:py-8"
            >
              <div className="md:sticky md:top-24 md:self-start">
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                  {formatDateRange(job.startDate, job.endDate)}
                </div>
                <div className="mt-2 text-[14px] font-semibold text-foreground">
                  {job.company}
                </div>
                {job.location && (
                  <div className="mt-1 font-mono text-[10px] uppercase tracking-wide text-muted">
                    {job.location}
                  </div>
                )}
              </div>
              <div>
                <h3 className="text-[18px] md:text-[20px] font-semibold tracking-tight text-foreground leading-snug">
                  {job.role}
                </h3>
                <div className="mt-3 border-l border-accent/45 pl-5 md:pl-6">
                  <div className="max-w-3xl">
                    {job.description.split("\n").map((line, lineIndex) => {
                      const colon = line.indexOf(":");
                      const isIntro = lineIndex === 0 && line.trim().endsWith(":");
                      const hasLead = colon > 0 && !isIntro;
                      return (
                        <p key={lineIndex} className={lineIndex > 0 ? "mt-3 flex gap-3 text-[15px] leading-[1.65] text-muted" : "text-[15px] leading-[1.7] text-muted"}>
                          {lineIndex > 0 && (
                            <span aria-hidden="true" className="shrink-0 font-bold text-accent-bright select-none">—</span>
                          )}
                          <span className="min-w-0">
                          {hasLead ? (
                            <>
                              <span className="text-foreground/90">{line.slice(0, colon + 1)}</span>
                              {line.slice(colon + 1)}
                            </>
                          ) : (
                            line
                          )}
                          </span>
                        </p>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="competencias" className="w-full max-w-7xl mx-auto px-6 md:px-12 py-14 md:py-20">
        <h2 className="label-mono section-label mb-8">Competências técnicas</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="group glass-card rounded-none p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-bright hover:bg-secondary hover:shadow-[6px_6px_0_0_#FF4D00]"
            >
              <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted transition-colors group-hover:text-accent-bright">
                {category.category}
              </h3>
              {category.description && (
                <p className="mt-2 text-[13px] leading-[1.55] text-muted">
                  {category.description}
                </p>
              )}
              <ul className="mt-4 flex flex-wrap gap-2">
                {category.skills.split(",").map((skill) => (
                  <li key={skill} className="font-mono text-[11px] leading-none px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground border border-border transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground hover:bg-foreground hover:text-background">
                    {skill.trim()}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 mt-12">
          <div>
            <h2 className="label-mono section-label mb-8">Formação</h2>
            {education.map((edu) => (
              <div key={edu.id} className="border-l border-border pl-6 py-1">
                <h3 className="text-[16px] md:text-[17px] font-semibold text-foreground leading-snug">
                  {edu.field}
                </h3>
                <div className="font-mono text-[11px] tracking-wide text-muted mt-1.5">
                  {edu.institution} · {edu.location}
                </div>
              </div>
            ))}
          </div>

          <div>
            <h2 className="label-mono section-label mb-8">Idiomas</h2>
            <ul className="space-y-0">
              {languages.map((lang) => (
                <li key={lang.language} className="flex items-baseline justify-between gap-4 border-b border-border py-3">
                  <span className="text-[15px] text-foreground">{lang.language}</span>
                  <span className="font-mono text-[11px] uppercase tracking-wide text-muted">{lang.proficiency}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
