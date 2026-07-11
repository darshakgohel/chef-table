/**
 * The signature element of the site: a thin gold line with rising embers,
 * echoing the tandoor flame at the heart of the menu. Used to punctuate
 * transitions between sections instead of a generic spacer.
 */
export function EmberDivider({ className = "" }: { className?: string }) {
  const embers = Array.from({ length: 7 });

  return (
    <div
      className={`relative mx-auto h-16 w-full max-w-5xl overflow-visible ${className}`}
      aria-hidden="true"
    >
      <div className="absolute left-1/2 top-1/2 h-px w-full -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-[var(--color-gold-deep)] to-transparent" />
      <div className="absolute left-1/2 top-1/2 flex w-full max-w-xs -translate-x-1/2 -translate-y-1/2 justify-between px-4">
        {embers.map((_, i) => (
          <span
            key={i}
            className="block h-1 w-1 rounded-full bg-[var(--color-gold-ember)]"
            style={{
              animation: "ember-rise 3.2s ease-in infinite",
              animationDelay: `${i * 0.45}s`,
              boxShadow: "0 0 6px 2px rgba(255, 157, 61, 0.6)",
            }}
          />
        ))}
      </div>
      <div className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-[var(--color-gold)] bg-[var(--color-obsidian)]" />
    </div>
  );
}
