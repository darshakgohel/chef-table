import { motion } from "framer-motion";
import { Clock, MapPin, Phone, Send } from "lucide-react";
import { RESTAURANT } from "../data/restaurant";
import { SectionHeading } from "../components/SectionHeading";
import { Button } from "../components/Button";
import { Reveal } from "../components/Reveal";

export function Contact() {
  return (
    <section id="contact" className="relative bg-[var(--color-obsidian)] py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <SectionHeading
          eyebrow="Visit Us"
          title="Come hungry, leave family"
          description="Walk in, call ahead, or book your table for a celebration — we'll have the tandoor going either way."
        />

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-5">
          <Reveal className="flex flex-col gap-4 lg:col-span-2">
            <div className="glass-panel flex items-start gap-4 rounded-2xl p-6">
              <MapPin size={20} className="mt-1 shrink-0 text-[var(--color-gold)]" />
              <div>
                <p className="font-display text-lg text-[var(--color-ivory)]">Address</p>
                <p className="mt-1 font-body text-sm text-[var(--color-ivory-dim)]">
                  {RESTAURANT.address}
                </p>
              </div>
            </div>

            <div className="glass-panel flex items-start gap-4 rounded-2xl p-6">
              <Phone size={20} className="mt-1 shrink-0 text-[var(--color-gold)]" />
              <div className="flex-1">
                <p className="font-display text-lg text-[var(--color-ivory)]">Phone</p>
                <p className="mt-1 font-body text-sm text-[var(--color-ivory-dim)]">
                  {RESTAURANT.phone}
                </p>
              </div>
            </div>

            <div className="glass-panel flex items-start gap-4 rounded-2xl p-6">
              <Clock size={20} className="mt-1 shrink-0 text-[var(--color-gold)]" />
              <div>
                <p className="font-display text-lg text-[var(--color-ivory)]">Hours</p>
                <div className="mt-1 flex flex-col gap-1">
                  {RESTAURANT.hours.map((h) => (
                    <p key={h.day} className="font-body text-sm text-[var(--color-ivory-dim)]">
                      <span className="text-[var(--color-ivory-faint)]">{h.day}:</span>{" "}
                      {h.time}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <Button
                href={`tel:${RESTAURANT.phone.replace(/\s/g, "")}`}
                icon={<Phone size={16} />}
                className="w-full"
                ariaLabel="Call Chef's Table now"
              >
                Call Now
              </Button>
              <Button
                href={`https://wa.me/${RESTAURANT.whatsapp}`}
                variant="secondary"
                icon={<Send size={16} />}
                className="w-full"
                ariaLabel="Message on WhatsApp to reserve"
              >
                Reserve on WhatsApp
              </Button>
            </div>
          </Reveal>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="overflow-hidden rounded-[var(--radius-lux)] border border-[var(--color-obsidian-line)] shadow-[var(--shadow-deep)] lg:col-span-3"
          >
            <iframe
              title="Chef's Table location on Google Maps"
              src={RESTAURANT.mapEmbedSrc}
              className="h-[420px] w-full grayscale-[40%] contrast-125 sm:h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
