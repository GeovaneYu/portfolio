import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="text-center max-w-md">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">Página não encontrada</p>
        <h1 className="mt-4 font-display text-7xl font-black tracking-tighter leading-none">
          40<span className="text-accent-bright">4</span>
        </h1>
        <p className="mt-4 text-[15px] leading-relaxed text-muted">Ops! A página que você procura não existe ou foi movida.</p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-foreground bg-foreground px-5 py-3 font-mono text-xs uppercase tracking-widest text-background transition-colors hover:bg-black"
        >
          Voltar ao início
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
