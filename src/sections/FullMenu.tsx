import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { MENU_PAGES } from "../data/menuImages";
import { useLightbox } from "../hooks/useLightbox";
import { SectionHeading } from "../components/SectionHeading";
import { StaggerGroup, staggerItem } from "../components/Reveal";

export function FullMenu() {
  const { activeIndex, open, close, next, prev } = useLightbox(MENU_PAGES.length);
  const active = activeIndex !== null ? MENU_PAGES[activeIndex] : null;

  return (
    <section id="menu" className="relative bg-[var(--color-obsidian-soft)] py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <SectionHeading
          eyebrow="Complete Menu"
          title="Every page, exactly as it's printed"
          description="Tap any page to view it fullscreen — swipe or use the arrows to move through the whole menu."
        />

        <StaggerGroup className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {MENU_PAGES.map((page, i) => (
            <motion.button
              key={page.id}
              variants={staggerItem}
              onClick={() => open(i)}
              className="group relative aspect-[3/4] overflow-hidden rounded-2xl border border-[var(--color-obsidian-line)] bg-[var(--color-obsidian-panel)]"
              aria-label={`Open ${page.label} fullscreen`}
            >
              <img
                src={page.src}
                alt={`Chef's Table menu — ${page.label}`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/50 group-hover:opacity-100">
                <Expand className="text-[var(--color-gold)]" size={22} />
                <span className="font-body text-xs font-medium text-[var(--color-ivory)]">
                  View Page {page.id}
                </span>
              </div>
              <span className="absolute bottom-2 left-2 rounded-full bg-black/50 px-2.5 py-1 font-body text-[10px] uppercase tracking-wide text-[var(--color-ivory-dim)] backdrop-blur">
                {page.label}
              </span>
            </motion.button>
          ))}
        </StaggerGroup>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/92 p-4 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
            aria-label={`Menu page ${active.id} of ${MENU_PAGES.length}`}
            onClick={close}
          >
            <button
              onClick={close}
              className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]"
              aria-label="Close menu viewer"
            >
              <X size={20} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] sm:left-6"
              aria-label="Previous menu page"
            >
              <ChevronLeft size={22} />
            </button>

            <motion.div
              key={active.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="flex max-h-[85vh] max-w-3xl flex-col items-center gap-4"
            >
              <img
                src={active.src}
                alt={`Chef's Table menu — ${active.label}`}
                className="max-h-[75vh] w-auto rounded-xl border border-white/10 object-contain shadow-[var(--shadow-deep)]"
              />
              <p className="font-body text-sm text-[var(--color-ivory-dim)]">
                {active.label} · Page {active.id} of {MENU_PAGES.length}
              </p>
            </motion.div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] sm:right-6"
              aria-label="Next menu page"
            >
              <ChevronRight size={22} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
