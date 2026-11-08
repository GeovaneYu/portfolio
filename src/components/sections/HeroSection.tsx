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
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="label-mono mb-6 inline-flex items-center gap-2"
      >
        <span className="h-2 w-2 bg-accent-bright" aria-hidden="true" />
        {personalInfo.title}
        <span className="hidden md:inline-flex items-center gap-2 ml-3 pl-3 border-l border-border font-mono text-[10px] tracking-widest text-muted" title="Disponível para novas oportunidades">
          <span className="w-2 h-2 bg-accent-bright animate-pulse" />
          open to work
        </span>
      </motion.p>

      <div className="flex flex-col gap-8">
        <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.14 }}
            className="shrink-0"
          >
            <div className="group relative w-24 sm:w-28">
              <picture>
                <source srcSet={`${import.meta.env.BASE_URL}img/geovane.webp`} type="image/webp" />
                <img
                  src={`${import.meta.env.BASE_URL}img/geovane.jpg`}
                  alt="Geovane Gofredo"
                  width="360"
                  height="360"
                  className="relative w-full aspect-square object-cover border border-foreground shadow-[6px_6px_0_0_#FF4D00] transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                />
              </picture>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="min-w-0"
          >
            <h1 className="font-display font-black uppercase tracking-tighter leading-[0.88] text-foreground text-[clamp(2.6rem,7vw,5.5rem)]">
              Geovane <span className="font-display text-accent-bright">Gofredo</span>
            </h1>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12 }}
          className="min-w-0"
        >
          <p className="max-w-none font-display text-[22px] md:text-[28px] font-bold tracking-tight leading-[1.15] text-foreground">
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
              className="inline-flex items-center gap-2 rounded-full border border-foreground bg-foreground px-5 py-3 font-mono text-xs uppercase tracking-widest text-background hover:bg-black transition-colors"
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
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-3 font-mono text-xs uppercase tracking-widest text-foreground hover:border-foreground hover:bg-surface-hover transition-colors"
              >
                <Download className="h-4 w-4" />
                Baixar CV (PDF)
                <ChevronDown className={`h-4 w-4 transition-transform ${cvOpen ? "rotate-180" : ""}`} aria-hidden="true" />
              </button>
              {cvOpen && (
                <div role="menu" aria-label="Escolha o idioma do currículo" className="absolute left-0 top-full z-30 mt-2 w-60 rounded-none glass-card-elevated p-2 shadow-2xl">
                  <a
                    role="menuitem"
                    href={`${import.meta.env.BASE_URL}CV-Geovane-Gofredo-2026.pdf`}
                    download
                    onClick={() => setCvOpen(false)}
                    className="flex items-center justify-between gap-3 px-3 py-2.5 text-xs font-mono uppercase tracking-widest text-foreground hover:bg-accent-soft transition-colors"
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
                    className="flex items-center justify-between gap-3 px-3 py-2.5 text-xs font-mono uppercase tracking-widest text-foreground hover:bg-accent-soft transition-colors"
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
      </div>
    </section>
  );
}
