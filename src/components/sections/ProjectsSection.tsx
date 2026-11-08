import { motion } from "framer-motion";
import { Github, ArrowUpRight, Star } from "lucide-react";

type Project = {
  id: string;
  num: string;
  title: string;
  text: string;
  result: string;
  url?: string;
  lang?: string;
};

const projects: Project[] = [
  {
    id: "proj-1",
    num: "01",
    title: "Onboarding e migração para Microsoft 365",
    text: "Condução do onboarding de novos clientes e da migração para Microsoft 365, Azure e Intune — identidade, dispositivos e produtividade desde o primeiro dia.",
    result: "Ambiente padronizado, identidade e dispositivos sob gestão e menos chamados iniciais.",
  },
  {
    id: "proj-2",
    num: "02",
    title: "DRP e backup corporativo 24/7",
    text: "Implementação e acompanhamento de estratégias de backup e recuperação de desastres, com cobertura local e em nuvem, firewalls e VPNs.",
    result: "Continuidade de negócio com menos exposição a paradas e backups verificados.",
  },
  {
    id: "proj-3",
    num: "03",
    title: "LGPD, ITAM e auditoria de ativos",
    text: "Inventário, licenciamento e controle do ciclo de vida de hardware e software, com auditorias técnicas e compliance.",
    result: "Custos otimizados, licenciamento em dia e evidências de compliance.",
  },
  {
    id: "proj-4",
    num: "04",
    title: "Ocultar Meu E-mail",
    text: "Extensão para Firefox que oculta e-mail via iCloud+ Hide My Email, com visual Tahoe Liquid Glass.",
    result: "Privacidade com SF Pro, agrupamento e dark mode automático.",
    url: "https://github.com/GeovaneYu/hidemymail",
    lang: "JavaScript",
  },
  {
    id: "proj-5",
    num: "05",
    title: "DonTranslateGoogle",
    text: "Extensão leve que impede o Google de abrir resultados na versão traduzida (translate.goog).",
    result: "Redireciona para a URL original, sem tracking e sem permissões amplas.",
    url: "https://github.com/GeovaneYu/dontranslategoogle",
    lang: "JavaScript",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projetos" className="w-full max-w-7xl mx-auto px-6 md:px-12 py-14 md:py-20">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
        <div>
          <h2 className="label-mono section-label">Projetos e resultados</h2>
          <p className="mt-2 max-w-xl text-[15px] leading-[1.6] text-muted">
            Principais entregas e resultados com infraestrutura, cloud e governança — e os projetos abertos no GitHub.
          </p>
        </div>
        <a
          href="https://github.com/GeovaneYu"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2.5 font-mono text-[11px] uppercase tracking-widest text-muted hover:text-foreground hover:border-accent-bright hover:bg-surface-hover transition-colors"
        >
          <Github className="h-4 w-4" aria-hidden="true" />
          Ver no GitHub
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="glass-card rounded-none p-4 flex flex-col"
          >
            <div className="flex items-start justify-between gap-2">
              <span className="font-display text-3xl leading-none text-copper" aria-hidden="true">
                {project.num}
              </span>
              {project.lang && (
                <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-border bg-secondary px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest text-secondary-foreground">
                  <Star className="h-2.5 w-2.5 text-copper" aria-hidden="true" />
                  {project.lang}
                </span>
              )}
            </div>
            <h3 className="mt-3 text-[15px] md:text-base font-semibold leading-snug text-foreground">
              {project.title}
            </h3>
            <p className="mt-2 text-[13px] leading-[1.55] text-muted flex-1">
              {project.text}
            </p>
            <div className="mt-4 border-t border-border pt-3">
              <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted">Como foi entregue</p>
              <p className="mt-1.5 text-[12px] leading-[1.55] text-muted">
                {project.result}
              </p>
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-muted hover:text-foreground hover:border-accent-bright hover:bg-surface-hover transition-colors"
                >
                  <Github className="h-3.5 w-3.5" aria-hidden="true" />
                  Ver repositório
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
