import { useEffect, useRef, useState } from "react";
import { personalInfo } from "@/data/portfolio-data";
import { motion } from "framer-motion";
import { Mail, MapPin, Linkedin, Download, ChevronDown } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

export default function HeroSection() {
  const handle = personalInfo.website.split("/").pop();
  const [cvOpen, setCvOpen] = useState(false);
  const cvMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cvOpen) return;
    const onClickOutside = (event: MouseEvent) => {
      if (cvMenuRef.current && !cvMenuRef.current.contains(event.target as Node)) {
        setCvOpen(false);
      }
    };
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setCvOpen(false);
    };
    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onEscape);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onEscape);
    };
  }, [cvOpen]);

  return (
    <section id="top" className="relative w-full max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-8 md:pt-24 md:pb-12 overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.12]"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 70% 45% at 18% 12%, rgba(31, 91, 85, 0.30), transparent 60%), radial-gradient(ellipse 45% 32% at 88% 8%, rgba(198, 162, 107, 0.12), transparent 65%)",
        }}
      />

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="label-mono mb-6 inline-flex items-center gap-2"
      >
        <span className="h-2 w-2 rounded-full bg-accent-bright" aria-hidden="true" />
        {personalInfo.title}
        <span className="hidden md:inline-flex items-center gap-2 ml-3 pl-3 border-l border-border font-mono text-[10px] tracking-widest text-muted" title="Disponível para novas oportunidades">
          <span className="w-2 h-2 rounded-full bg-accent-bright animate-pulse" />
          open to work
        </span>
      </motion.p>

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_220px] gap-10 lg:gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="min-w-0"
        >
          <h1 className="font-display uppercase tracking-tight leading-[0.9] text-foreground text-[clamp(2.4rem,5.4vw,4.5rem)]">
            Geovane <span className="font-display text-accent-bright">Gofredo</span>
          </h1>

          <p className="mt-6 max-w-none text-[20px] md:text-[24px] leading-[1.4] text-foreground">
            Transformo operações críticas em ambientes estáveis, seguros e previsíveis.
          </p>

          <p className="mt-3 max-w-none text-[15px] md:text-[16px] leading-[1.7] text-muted">
            Liderança de equipes N1/N2/N3, governança (ITIL/COBIT), SLAs críticos e gestão de fornecedores — com foco em continuidade, previsibilidade e eficiência.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={personalInfo.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-accent-bright bg-accent px-5 py-3 font-mono text-xs uppercase tracking-widest text-accent-foreground hover:bg-accent-dim transition-colors"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Agendar uma conversa
            </a>
            <div ref={cvMenuRef} className="relative">
              <button
                type="button"
                onClick={() => setCvOpen((value) => !value)}
                aria-expanded={cvOpen}
                aria-haspopup="menu"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-3 font-mono text-xs uppercase tracking-widest text-muted hover:text-foreground hover:border-accent-bright hover:bg-surface-hover transition-colors"
              >
                <Download className="h-4 w-4" />
                Baixar CV (PDF)
                <ChevronDown className={`h-4 w-4 transition-transform ${cvOpen ? "rotate-180" : ""}`} aria-hidden="true" />
              </button>
              {cvOpen && (
                <div role="menu" aria-label="Escolha o idioma do currículo" className="absolute left-0 top-full z-30 mt-2 w-60 rounded-xl glass-card-elevated p-2 shadow-2xl">
                  <a
                    role="menuitem"
                    href={`${import.meta.env.BASE_URL}CV-Geovane-Gofredo-2026.pdf`}
                    download
                    onClick={() => setCvOpen(false)}
                    className="flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-xs font-mono uppercase tracking-widest text-foreground hover:bg-accent-soft transition-colors"
                  >
                    <span className="inline-flex items-center gap-2">
                      <Download className="h-4 w-4" aria-hidden="true" />
                      Português
                    </span>
                    <span className="text-[10px] tracking-[0.18em] text-muted">PT-BR</span>
                  </a>
                  <a
                    role="menuitem"
                    href={`${import.meta.env.BASE_URL}CV-Geovane-Gofredo-2026-EN.pdf`}
                    download
                    onClick={() => setCvOpen(false)}
                    className="flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-xs font-mono uppercase tracking-widest text-foreground hover:bg-accent-soft transition-colors"
                  >
                    <span className="inline-flex items-center gap-2">
                      <Download className="h-4 w-4" aria-hidden="true" />
                      English
                    </span>
                    <span className="text-[10px] tracking-[0.18em] text-muted">EN</span>
                  </a>
                </div>
              )}
            </div>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3 font-mono text-[11px] md:text-xs">
            <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 text-muted hover:text-foreground transition-colors min-w-0">
              <Mail className="h-4 w-4 shrink-0 text-muted" />
              <span className="truncate">{personalInfo.email}</span>
            </a>
            <a href={personalInfo.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted hover:text-foreground transition-colors">
              <WhatsAppIcon className="h-4 w-4 shrink-0 text-muted" />
              <span>{personalInfo.phone}</span>
            </a>
            <div className="flex items-center gap-2 text-muted">
              <MapPin className="h-4 w-4 shrink-0 text-muted" />
              <span>{personalInfo.location.city}</span>
            </div>
            <a href={`https://${personalInfo.website}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted hover:text-foreground transition-colors min-w-0">
              <Linkedin className="h-4 w-4 shrink-0 text-muted" />
              <span className="truncate">@{handle}</span>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.14 }}
          className="min-w-0 lg:justify-self-end"
        >
          <div className="relative w-40 sm:w-48 lg:w-full lg:max-w-[220px]">
            <div aria-hidden="true" className="absolute -inset-3 rounded-full bg-accent-soft blur-xl" />
            <picture>
              <source srcSet={`${import.meta.env.BASE_URL}img/geovane.webp`} type="image/webp" />
              <img
                src={`${import.meta.env.BASE_URL}img/geovane.jpg`}
                alt="Geovane Gofredo"
                width="360"
                height="360"
                className="relative w-full aspect-square rounded-full object-cover border border-copper/80 shadow-[0_24px_50px_-16px_rgba(15,61,58,0.62)]"
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
