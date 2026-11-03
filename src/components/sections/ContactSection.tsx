import { personalInfo } from "@/data/portfolio-data";
import { motion } from "framer-motion";
import { Mail, Linkedin, ArrowUpRight } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

export default function ContactSection() {
  const channels = [
    { icon: Mail, label: "E-mail", value: personalInfo.email, href: `mailto:${personalInfo.email}`, cta: "Enviar e-mail" },
    { icon: WhatsAppIcon, label: "WhatsApp", value: personalInfo.phone, href: personalInfo.whatsapp, cta: "Chamar agora" },
    { icon: Linkedin, label: "LinkedIn", value: `@${personalInfo.website.split("/").pop()}`, href: `https://${personalInfo.website}`, cta: "Ver perfil" },
  ];

  return (
    <section id="contato" className="w-full max-w-7xl mx-auto px-6 md:px-12 py-14 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="glass-card rounded-2xl p-6 md:p-8"
      >
        <h2 className="label-mono mb-6">Contato</h2>
        <p className="text-[22px] md:text-[30px] font-bold tracking-tight leading-[1.15] max-w-3xl">
          Vamos <span className="text-accent-bright">conversar</span>?
        </p>
        <p className="mt-3 text-[15px] leading-[1.65] text-muted max-w-2xl">
          Seja para uma nova oportunidade, um projeto de infraestrutura ou a organização de uma operação de TI,{" "}
          <span className="text-foreground">eu organizo e entrego</span>.
        </p>
        <p className="mt-2 text-[15px] leading-[1.65] text-muted max-w-2xl">
          Conte o que você precisa e{" "}
          <span className="text-foreground font-medium">vamos encontrar a melhor solução</span>.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-5">
          {channels.map(({ icon: Icon, label, value, href, cta }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group relative flex flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-bright hover:bg-accent-soft hover:shadow-lg hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-soft ring-1 ring-accent/10 transition-all duration-300 group-hover:bg-accent group-hover:ring-accent group-hover:scale-105">
                  <Icon className="h-5 w-5 text-muted transition-colors group-hover:text-accent-foreground" aria-hidden="true" />
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" aria-hidden="true" />
              </div>
              <div className="mt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">{label}</div>
              <div className="mt-1.5 text-[15px] font-medium leading-snug break-all text-foreground transition-colors group-hover:text-foreground">
                {value}
              </div>
              <div className="mt-4 inline-flex items-center gap-1.5 font-mono text-[11px] tracking-wide text-muted opacity-80 transition-all group-hover:gap-2 group-hover:opacity-100">
                {cta} <span aria-hidden="true">→</span>
              </div>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
