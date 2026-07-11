import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MENU_CATEGORIES, SIGNATURE_DISHES } from "../data/dishes";
import { SectionHeading } from "../components/SectionHeading";
import { Button } from "../components/Button";
import { FileText } from "lucide-react";

export function MenuPreview() {
  const [active, setActive] = useState<(typeof MENU_CATEGORIES)[number]>(
    MENU_CATEGORIES[0]
  );

  const filtered = SIGNATURE_DISHES.filter((d) => d.cuisine === active);

  return (
    <section id="menu-preview" className="relative bg-[var(--color-obsidian)] py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Menu Preview"
            title="Pick a kitchen, pick a mood"
            align="left"
          />

          <div className="glass-panel flex flex-wrap items-center gap-1 rounded-full p-1.5">
            {MENU_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className="relative rounded-full px-5 py-2.5 font-body text-sm font-medium transition-colors"
                aria-pressed={active === cat}
              >
                {active === cat && (
                  <motion.span
                    layoutId="menu-tab-pill"
                    className="absolute inset-0 rounded-full bg-[var(--color-gold)]"
                    transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
                  />
                )}
                <span
                  className={`relative z-10 ${
                    active === cat
                      ? "text-[var(--color-obsidian)]"
                      : "text-[var(--color-ivory-dim)]"
                  }`}
                >
                  {cat}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.length ? (
              filtered.map((dish, i) => (
                <motion.div
                  key={dish.id}
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                  className="flex items-center gap-5 border-b border-[var(--color-obsidian-line)] py-5"
                >
                  <img
                    src={dish.image}
                    alt=""
                    className="h-16 w-16 shrink-0 rounded-2xl object-cover"
                    loading="lazy"
                  />
                  <div className="flex flex-1 flex-col gap-1">
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="font-display text-lg text-[var(--color-ivory)]">
                        {dish.name}
                      </h3>
                      <span className="whitespace-nowrap font-display text-lg text-[var(--color-gold)]">
                        {dish.price}
                      </span>
                    </div>
                    <p className="font-body text-sm text-[var(--color-ivory-faint)] line-clamp-1">
                      {dish.description}
                    </p>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="font-body text-sm text-[var(--color-ivory-faint)]"
              >
                More {active} favourites are on the full menu below.
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        <div className="mt-12 flex justify-center">
          <Button href="#menu" variant="secondary" icon={<FileText size={16} />}>
            View Complete Menu
          </Button>
        </div>
      </div>
    </section>
  );
}
