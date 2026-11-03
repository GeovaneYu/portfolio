import { motion } from "framer-motion";
import { Github, ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: "proj-1",
    num: "01",
    title: "Onboarding e migração para Microsoft 365",
    text: "Coordenação do onboarding de novos clientes e da migração para Microsoft 365, Azure e Intune — identidade, dispositivos e produtividade desde o primeiro dia.",
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
];

export default function ProjectsSection() {
  return (
    <section id="projetos" className="w-full max-w-6xl mx-auto px-6 md:px-12 py-14 md:py-20">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
        <div>
          <h2 className="label-mono">Projetos e resultados</h2>
          <p className="mt-2 max-w-xl text-[15px] leading-[1.6] text-muted">
            Principais entregas e resultados com infraestrutura, cloud e governança.
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {projects.map((project, index) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="glass-card rounded-xl p-6 flex flex-col"
          >
            <span className="font-display text-5xl leading-none text-accent-bright" aria-hidden="true">
              {project.num}
            </span>
            <h3 className="mt-5 text-[17px] md:text-[18px] font-semibold leading-snug text-foreground">
              {project.title}
            </h3>
            <p className="mt-3 text-[14px] leading-[1.6] text-muted flex-1">
              {project.text}
            </p>
            <div className="mt-5 border-t border-border pt-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">Como foi entregue</p>
              <p className="mt-2 text-[13px] leading-[1.6] text-muted">
                {project.result}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
