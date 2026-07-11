import { motion } from "framer-motion";
import { MapPin, Phone, Star, CalendarCheck } from "lucide-react";
import heroBg from "../assets/hero/hero-bg.svg";
import { Button } from "../components/Button";
import { RESTAURANT } from "../data/restaurant";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-[var(--color-obsidian)] pt-32 pb-20"
    >
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="h-full w-full object-cover opacity-45"
          role="presentation"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-obsidian)]/60 via-[var(--color-obsidian)]/75 to-[var(--color-obsidian)]" />
        <div className="absolute inset-0 bg-noise" />
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center gap-3"
        >
          <span className="flex items-center gap-1.5 rounded-full border border-[var(--color-gold)]/40 bg-[var(--color-gold)]/10 px-4 py-1.5 font-body text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-gold)]">
            <MapPin size={13} /> {RESTAURANT.city}
          </span>
          <span className="flex items-center gap-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-1.5 font-body text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">
            <span className="h-2 w-2 rounded-sm border border-emerald-400" />
            Pure Vegetarian
          </span>
        </motion.div>

        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[13vw] font-medium leading-[0.95] text-[var(--color-ivory)] sm:text-6xl lg:text-8xl"
          >
            Fire, Family
            <br />
            <span className="text-gradient-gold italic">& Flavour</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.28 }}
            className="mt-8 max-w-xl font-body text-base text-[var(--color-ivory-dim)] sm:text-lg"
          >
            Punjabi, Chinese &amp; Kathiyawadi cooking, sent through a live
            tandoor and onto your table. Bhavnagar&apos;s gathering place for
            a meal worth dressing up for.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.42 }}
          className="flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <Button
            href="#contact"
            icon={<CalendarCheck size={16} />}
            ariaLabel="Reserve a table"
          >
            Reserve a Table
          </Button>
          <Button
            href={`tel:${RESTAURANT.phone.replace(/\s/g, "")}`}
            variant="secondary"
            icon={<Phone size={16} />}
            ariaLabel="Call Chef's Table now"
          >
            Call {RESTAURANT.phoneDisplay}
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.56 }}
          className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <div className="glass-panel flex w-fit items-center gap-3 rounded-2xl px-5 py-3.5">
            <div className="flex items-center gap-1 text-[var(--color-gold)]">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  fill="currentColor"
                  strokeWidth={0}
                />
              ))}
            </div>
            <span className="font-body text-sm text-[var(--color-ivory)]">
              {RESTAURANT.googleRating} Google Rating
            </span>
            <span className="hidden font-body text-sm text-[var(--color-ivory-faint)] sm:inline">
              · {RESTAURANT.googleReviewCount.toLocaleString("en-IN")} reviews
            </span>
          </div>

          <div className="glass-panel flex w-fit items-center gap-2.5 rounded-2xl px-5 py-3.5">
            <MapPin size={15} className="shrink-0 text-[var(--color-gold)]" />
            <span className="font-body text-sm text-[var(--color-ivory-dim)]">
              {RESTAURANT.address}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
