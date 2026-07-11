import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { Flame, Users, ChefHat, Sparkles } from "lucide-react";
import aboutImg from "../assets/about/about-story.svg";
import { Reveal, StaggerGroup, staggerItem } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";

const STATS: { icon: LucideIcon; value: string; label: string }[] = [
  { icon: Flame, value: "18+", label: "Years of Tandoor Craft" },
  { icon: Users, value: "40K+", label: "Families Served" },
  { icon: ChefHat, value: "4", label: "Cuisines, One Kitchen" },
  { icon: Sparkles, value: "4.8★", label: "Average Guest Rating" },
];

function StatCard({ icon: Icon, value, label }: { icon: LucideIcon; value: string; label: string }) {
  return (
    <motion.div
      variants={staggerItem}
      className="glass-panel flex flex-col gap-2 rounded-2xl p-5"
    >
      <Icon size={20} className="text-[var(--color-gold)]" strokeWidth={1.5} />
      <p className="font-display text-3xl text-[var(--color-ivory)]">{value}</p>
      <p className="font-body text-xs uppercase tracking-wide text-[var(--color-ivory-faint)]">
        {label}
      </p>
    </motion.div>
  );
}

export function About() {
  return (
    <section id="about" className="relative bg-[var(--color-obsidian)] py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 px-6 sm:px-8 lg:grid-cols-2 lg:items-center">
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative overflow-hidden rounded-[var(--radius-lux)] border border-[var(--color-obsidian-line)] shadow-[var(--shadow-deep)]">
            <img
              src={aboutImg}
              alt="Chef preparing a dish inside Chef's Table's open kitchen"
              className="h-[480px] w-full object-cover sm:h-[560px]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-obsidian)]/70 via-transparent to-transparent" />
          </div>
          <div className="glass-panel absolute -bottom-8 -right-4 hidden max-w-[220px] rounded-2xl p-5 sm:right-6 sm:block">
            <p className="font-display text-2xl italic text-[var(--color-gold)]">
              &ldquo;Ek thali, poori mehmaan-nawazi.&rdquo;
            </p>
            <p className="mt-2 font-body text-xs uppercase tracking-widest text-[var(--color-ivory-faint)]">
              Our house philosophy
            </p>
          </div>
        </Reveal>

        <div className="order-1 flex flex-col gap-8 lg:order-2">
          <SectionHeading
            eyebrow="Our Story"
            title="A Bhavnagar kitchen, built on hospitality first."
            align="left"
            description="Chef's Table began as one family's tandoor and a handful of Kathiyawadi recipes passed down through generations. Today, three kitchens — Punjabi, Chinese and Kathiyawadi — work side by side under one roof, but the rule hasn't changed: every guest eats like they're at their own family's table."
          />

          <StaggerGroup className="grid grid-cols-2 gap-4 sm:gap-6">
            {STATS.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
