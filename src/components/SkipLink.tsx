export default function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-foreground focus:text-background font-mono text-xs uppercase tracking-widest"
    >
      Pular para o conteúdo
    </a>
  );
}
