type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  titleId?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  titleId,
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-2xl space-y-4 ${alignClass}`}>
      {eyebrow ? (
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={titleId}
        className="font-serif text-3xl font-medium tracking-tight text-zinc-50 sm:text-4xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="text-base leading-relaxed text-zinc-400 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
