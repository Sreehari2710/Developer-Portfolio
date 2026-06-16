export function SectionLabel({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="section-label rounded-md border border-purple-glow/40 bg-purple-glow/10 px-2.5 py-1.5">
        {index}
      </span>
      <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-foreground">
        {title}
      </h2>
    </div>
  );
}
