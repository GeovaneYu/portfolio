import { useEffect, useState } from "react";
import { Github, Linkedin, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { id: "sobre", label: "Sobre" },
  { id: "experiencia", label: "Experiência" },
  { id: "competencias", label: "Competências" },
  { id: "projetos", label: "Projetos" },
  { id: "contato", label: "Contato" },
];

/**
 * Fixed navigation bar with scroll-spy active state
 */
export default function NavBar() {
  const [active, setActive] = useState<string>("sobre");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    links.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "glass-card border-b border-border" : "bg-transparent"
      )}
    >
      <nav
        aria-label="Navegação principal"
        className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center gap-2 md:gap-4"
      >
        <a href="#top" onClick={() => setOpen(false)} aria-label="Voltar ao topo" className="shrink-0 label-mono text-foreground hover:text-foreground transition-colors py-2">
          GG<span className="text-copper">.</span>
        </a>

        <div className="hidden md:flex flex-1 items-center justify-center">
          <ul className="flex flex-wrap items-center justify-center gap-1 lg:gap-2">
            {links.map((link) => (
              <li key={link.id} className="shrink-0">
                <a
                  href={`#${link.id}`}
                  aria-current={active === link.id ? "true" : undefined}
                  className={cn(
                    "inline-flex whitespace-nowrap font-mono text-[11px] lg:text-xs uppercase tracking-widest px-2.5 lg:px-3 py-2 rounded-full border transition-colors",
                    active === link.id
                      ? "text-foreground bg-accent-soft border-accent/30"
                      : "text-muted hover:text-foreground border-transparent"
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="ml-auto md:ml-0 flex items-center gap-2 shrink-0">
          <a
            href="https://github.com/GeovaneYu"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub de Geovane Gofredo"
            title="GitHub"
            className="hidden sm:inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted hover:text-foreground hover:border-accent-bright transition-colors"
          >
            <Github className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href="https://linkedin.com/in/geovane-gofredo"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn de Geovane Gofredo"
            title="LinkedIn"
            className="hidden sm:inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted hover:text-foreground hover:border-accent-bright transition-colors"
          >
            <Linkedin className="h-4 w-4" aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground"
          >
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="menu-mobile" className="md:hidden border-t border-border bg-background/95 backdrop-blur">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <ul className="flex flex-col gap-1">
              {links.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => setOpen(false)}
                    aria-current={active === link.id ? "true" : undefined}
                    className={cn(
                      "flex items-center justify-between rounded-lg px-3 py-2.5 font-mono text-xs uppercase tracking-widest transition-colors",
                      active === link.id ? "text-foreground bg-accent-soft" : "text-muted hover:text-foreground"
                    )}
                  >
                    {link.label}
                    <span aria-hidden="true" className="text-muted">→</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}