import { personalInfo } from "@/data/portfolio-data";
import { motion } from "framer-motion";
import { Mail, MapPin, Linkedin, Download } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

export default function HeroSection() {
  const handle = personalInfo.website.split("/").pop();

  return (
    <section id="top" className="relative w-full max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-16 md:pt-32 overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.12]"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 70% 45% at 18% 12%, rgba(78, 36, 49, 0.28), transparent 60%), radial-gradient(ellipse 45% 32% at 88% 8%, rgba(192, 162, 104, 0.14), transparent 65%)",
        }}
      />

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="label-mono mb-6 inline-flex items-center gap-2"
      >
        <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
        {personalInfo.title}
        <span className="hidden md:inline-flex items-center gap-2 ml-3 pl-3 border-l border-border/50 font-mono text-[10px] tracking-widest text-muted" title="Disponível para novas oportunidades">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          open to work
        </span>
      </motion.p>

      <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="lg:col-span-7"
        >
          <h1 className="font-display uppercase tracking-tight leading-[0.9] text-foreground text-[clamp(3rem,8vw,5rem)]">
            Geovane
            <br />
            <span className="font-display text-accent">Gofredo</span>
          </h1>

          <p className="mt-7 max-w-2xl text-[20px] md:text-[24px] leading-[1.4] text-foreground">
            Organizo a operação e entreguo uma TI estável, segura e previsível.
          </p>

          <p className="mt-4 max-w-xl text-[15px] md:text-[16px] leading-[1.7] text-muted">
            Coordenação de equipes N1/N2/N3, governança (ITIL/COBIT), SLAs críticos e gestão de fornecedores — com foco em continuidade, previsibilidade e eficiência.
          </p>

          <div className="mt-6 flex flex-wrap gap-2 font-mono text-[11px] tracking-wide text-muted">
            <span className="rounded-full border border-border/60 bg-surface/60 px-3 py-1.5">14+ anos</span>
            <span className="rounded-full border border-border/60 bg-surface/60 px-3 py-1.5">4+ anos liderando operações</span>
            <span className="rounded-full border border-border/60 bg-surface/60 px-3 py-1.5">Times globais (EN/PT)</span>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={personalInfo.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 font-mono text-xs uppercase tracking-widest text-accent-foreground hover:bg-accent/90 transition-colors"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Agendar uma conversa
            </a>
            <a
              href={`${import.meta.env.BASE_URL}CV-Geovane-Gofredo-2026.pdf`}
              download
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-3 font-mono text-xs uppercase tracking-widest text-muted hover:text-foreground hover:border-accent/40 hover:bg-surface-hover transition-colors"
            >
              <Download className="h-4 w-4" />
              Baixar CV (PDF)
            </a>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 font-mono text-[11px] md:text-xs">
            <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 text-muted hover:text-accent transition-colors min-w-0">
              <Mail className="h-4 w-4 shrink-0 text-accent" />
              <span className="truncate">{personalInfo.email}</span>
            </a>
            <a href={personalInfo.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted hover:text-accent transition-colors">
              <WhatsAppIcon className="h-4 w-4 shrink-0 text-accent" />
              <span>{personalInfo.phone}</span>
            </a>
            <div className="flex items-center gap-2 text-muted">
              <MapPin className="h-4 w-4 shrink-0 text-accent" />
              <span>{personalInfo.location.city}</span>
            </div>
            <a href={`https://${personalInfo.website}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted hover:text-accent transition-colors min-w-0">
              <Linkedin className="h-4 w-4 shrink-0 text-accent" />
              <span className="truncate">@{handle}</span>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.14 }}
          className="lg:col-span-5"
        >
          <div className="relative mx-auto max-w-[190px] sm:max-w-[220px] lg:max-w-[230px]">
            <div aria-hidden="true" className="absolute -inset-3 rounded-full bg-accent/10 blur-xl" />
            <picture>
              <source srcSet={`${import.meta.env.BASE_URL}img/geovane.webp`} type="image/webp" />
              <img
                src={`${import.meta.env.BASE_URL}img/geovane.jpg`}
                alt="Geovane Gofredo"
                width="360"
                height="360"
                className="relative w-full aspect-square rounded-full object-cover border border-accent/30 shadow-[0_24px_50px_-16px_rgba(78,36,49,0.48)]"
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
            </picture>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
