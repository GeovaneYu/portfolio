import { personalInfo } from "@/data/portfolio-data";

const deliverables = [
  { num: "01", title: "Operação estável", text: "Rotinas preventivas, documentação e padronização para eliminar incidentes recorrentes." },
  { num: "02", title: "SLAs e KPIs", text: "Incidentes críticos, RCA, GMUD e indicadores de serviço controlados." },
  { num: "03", title: "Governança", text: "ITIL e COBIT aplicados com prática: ITSM, ITAM, LGPD e compliance." },
  { num: "04", title: "Interface executiva", text: "Reporte direto a gestores e diretorias com alinhamento de prioridades." },
];

export default function BioSection() {
  return (
    <section id="sobre" className="w-full max-w-7xl mx-auto px-6 md:px-12 py-14 md:py-20">
      <h2 className="label-mono section-label mb-8">Sobre</h2>

      <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        <div className="lg:col-span-7">
          <blockquote className="font-display uppercase leading-[0.98] tracking-tight text-foreground text-[clamp(2rem,5vw,3.6rem)]">
            Organizo a operação<br />e entrego <span className="text-accent-bright">resultado.</span>
          </blockquote>

          <p className="mt-6 text-[16px] md:text-[17px] leading-[1.75] text-muted whitespace-pre-line max-w-2xl">
            {personalInfo.bio}
          </p>
        </div>

        <div className="lg:col-span-5">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted mb-5">
            O que eu entrego
          </p>
          <ul className="border-t border-border divide-y divide-border">
            {deliverables.map((item) => (
              <li key={item.num} className="flex items-start gap-5 py-4">
                <span className="font-mono text-[12px] text-copper/90 pt-0.5">{item.num}</span>
                <span className="min-w-0">
                  <span className="block text-[16px] md:text-[17px] font-semibold text-foreground leading-snug">{item.title}</span>
                  <span className="block mt-1 text-[14px] leading-[1.55] text-muted">{item.text}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
