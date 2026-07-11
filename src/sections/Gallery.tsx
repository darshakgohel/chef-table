import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { GALLERY_IMAGES } from "../data/gallery";
import { useLightbox } from "../hooks/useLightbox";
import { SectionHeading } from "../components/SectionHeading";
import { StaggerGroup, staggerItem } from "../components/Reveal";

export function Gallery() {
  const { activeIndex, open, close, next, prev } = useLightbox(
    GALLERY_IMAGES.length
  );
  const active = activeIndex !== null ? GALLERY_IMAGES[activeIndex] : null;

  return (
    <section id="gallery" className="relative bg-[var(--color-obsidian)] py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <SectionHeading
          eyebrow="Gallery"
          title="The room, the fire, the food"
          description="A look inside Chef's Table — from the tandoor line to the private dining corner."
        />

        <StaggerGroup className="mt-14 columns-2 gap-4 sm:columns-3 [&>*]:mb-4">
          {GALLERY_IMAGES.map((img, i) => (
            <motion.button
              key={img.id}
              variants={staggerItem}
              onClick={() => open(i)}
              className={`group relative block w-full overflow-hidden rounded-2xl border border-[var(--color-obsidian-line)] ${
                img.tall ? "aspect-[3/4.4]" : "aspect-square"
              }`}
              aria-label={`View ${img.caption} fullscreen`}
            >
              <img
                src={img.src}
                alt={img.caption}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="flex w-full items-center justify-between p-4">
                  <span className="font-body text-sm font-medium text-white">
                    {img.caption}
                  </span>
                  <ZoomIn size={16} className="text-[var(--color-gold)]" />
                </div>
              </div>
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
            aria-label={active.caption}
            onClick={close}
          >
            <button
              onClick={close}
              className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]"
              aria-label="Close gallery viewer"
            >
              <X size={20} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] sm:left-6"
              aria-label="Previous image"
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
                alt={active.caption}
                className="max-h-[75vh] w-auto rounded-xl border border-white/10 object-contain shadow-[var(--shadow-deep)]"
              />
              <p className="font-body text-sm text-[var(--color-ivory-dim)]">
                {active.caption}
              </p>
            </motion.div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] sm:right-6"
              aria-label="Next image"
            >
              <ChevronRight size={22} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
