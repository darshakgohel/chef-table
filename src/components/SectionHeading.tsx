import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`flex flex-col ${alignment} gap-4`}>
      <Reveal>
        <span className="flex items-center gap-3 font-body text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-gold)]">
          <span className="h-px w-8 bg-[var(--color-gold-deep)]" />
          {eyebrow}
          {align === "center" && <span className="h-px w-8 bg-[var(--color-gold-deep)]" />}
        </span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="font-display text-4xl font-medium leading-[1.1] text-[var(--color-ivory)] sm:text-5xl lg:text-6xl">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p className="max-w-xl font-body text-base text-[var(--color-ivory-dim)] sm:text-lg">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
