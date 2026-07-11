import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { REVIEWS } from "../data/reviews";
import { RESTAURANT } from "../data/restaurant";
import { SectionHeading } from "../components/SectionHeading";
import { StaggerGroup, staggerItem } from "../components/Reveal";

function Stars({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5 text-[var(--color-gold)]">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={13}
          fill={i < count ? "currentColor" : "none"}
          strokeWidth={i < count ? 0 : 1.5}
        />
      ))}
    </div>
  );
}

export function Reviews() {
  return (
    <section id="reviews" className="relative bg-[var(--color-obsidian-soft)] py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="flex flex-col items-center gap-8 text-center lg:flex-row lg:items-end lg:justify-between lg:text-left">
          <SectionHeading
            eyebrow="Guest Reviews"
            title="What Bhavnagar is saying"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-panel flex shrink-0 items-center gap-4 rounded-2xl px-6 py-5"
          >
            <div className="font-display text-4xl text-[var(--color-gold)]">
              {RESTAURANT.googleRating}
            </div>
            <div className="flex flex-col items-start gap-1">
              <Stars count={5} />
              <span className="font-body text-xs text-[var(--color-ivory-faint)]">
                {RESTAURANT.googleReviewCount.toLocaleString("en-IN")} Google
                reviews
              </span>
            </div>
          </motion.div>
        </div>

        <StaggerGroup className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((review) => (
            <motion.article
              key={review.id}
              variants={staggerItem}
              whileHover={{ y: -6 }}
              className="flex flex-col gap-4 rounded-[var(--radius-lux-sm)] border border-[var(--color-obsidian-line)] bg-[var(--color-obsidian-panel)] p-7"
            >
              <Quote size={22} className="text-[var(--color-gold)]/50" />
              <Stars count={review.rating} />
              <p className="font-body text-sm leading-relaxed text-[var(--color-ivory-dim)]">
                {review.text}
              </p>
              <div className="mt-auto flex items-center justify-between border-t border-[var(--color-obsidian-line)] pt-4">
                <div>
                  <p className="font-display text-base text-[var(--color-ivory)]">
                    {review.name}
                  </p>
                  <p className="font-body text-xs text-[var(--color-ivory-faint)]">
                    {review.location}
                  </p>
                </div>
                <span className="rounded-full bg-white/5 px-3 py-1 font-body text-[10px] uppercase tracking-wide text-[var(--color-ivory-faint)]">
                  {review.visit}
                </span>
              </div>
            </motion.article>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
