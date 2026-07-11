import { motion } from "framer-motion";
import { Flame } from "lucide-react";
import { SIGNATURE_DISHES } from "../data/dishes";
import { SectionHeading } from "../components/SectionHeading";
import { StaggerGroup, staggerItem } from "../components/Reveal";

export function SignatureDishes() {
  return (
    <section
      id="signatures"
      className="relative bg-[var(--color-obsidian-soft)] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <SectionHeading
          eyebrow="Most Popular Dishes"
          title="Plates our regulars order by name"
          description="Six dishes that define the table — chosen by the chefs, ordered every single night."
        />

        <StaggerGroup className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SIGNATURE_DISHES.map((dish) => (
            <motion.article
              key={dish.id}
              variants={staggerItem}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex flex-col overflow-hidden rounded-[var(--radius-lux)] border border-[var(--color-obsidian-line)] bg-[var(--color-obsidian-panel)]"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-obsidian-panel)] via-transparent to-transparent" />

                {dish.tag && (
                  <span className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-[var(--color-gold)] px-3 py-1 font-body text-[11px] font-bold uppercase tracking-wide text-[var(--color-obsidian)]">
                    <Flame size={11} strokeWidth={2.5} />
                    {dish.tag}
                  </span>
                )}

                <span className="absolute right-4 top-4 rounded-full border border-white/15 bg-black/40 px-3 py-1 font-body text-[10px] uppercase tracking-widest text-[var(--color-ivory-dim)] backdrop-blur">
                  {dish.cuisine}
                </span>
              </div>

              <div className="flex flex-1 flex-col gap-2 p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-xl text-[var(--color-ivory)]">
                    {dish.name}
                  </h3>
                  <span className="font-display text-xl text-[var(--color-gold)]">
                    {dish.price}
                  </span>
                </div>
                <p className="font-body text-sm leading-relaxed text-[var(--color-ivory-dim)]">
                  {dish.description}
                </p>
              </div>

              <div className="absolute inset-0 rounded-[var(--radius-lux)] ring-1 ring-inset ring-transparent transition-all duration-500 group-hover:ring-[var(--color-gold)]/40" />
            </motion.article>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
