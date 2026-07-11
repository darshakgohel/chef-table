import { Instagram, Facebook, MessageCircle } from "lucide-react";
import { NAV_LINKS, RESTAURANT } from "../data/restaurant";
import logoEmblem from "../assets/brand/logo-emblem.png";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[var(--color-obsidian-line)] bg-[var(--color-obsidian)] pb-8 pt-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 sm:px-8 md:grid-cols-4">
        <div className="flex flex-col gap-4 md:col-span-2">
          <a href="#home" className="flex items-center gap-2.5 self-start">
            <img
              src={logoEmblem}
              alt="Chef's Table Restaurant emblem"
              className="h-10 w-10 rounded-full border border-[var(--color-gold)]/50 object-cover"
            />
            <span className="font-display text-lg text-[var(--color-ivory)]">
              Chef&apos;s Table
            </span>
          </a>
          <p className="max-w-sm font-body text-sm leading-relaxed text-[var(--color-ivory-faint)]">
            Punjabi, Chinese, Kathiyawadi &amp; tandoor cooking, served family
            style in the heart of Bhavnagar.
          </p>
          <div className="mt-2 flex items-center gap-3">
            {[
              { icon: Instagram, label: "Instagram" },
              { icon: Facebook, label: "Facebook" },
              { icon: MessageCircle, label: "WhatsApp" },
            ].map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-obsidian-line)] text-[var(--color-ivory-dim)] transition-colors hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="font-body text-xs font-semibold uppercase tracking-widest text-[var(--color-gold)]">
            Quick Links
          </p>
          <ul className="mt-4 flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-body text-sm text-[var(--color-ivory-faint)] transition-colors hover:text-[var(--color-ivory)]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-body text-xs font-semibold uppercase tracking-widest text-[var(--color-gold)]">
            Contact
          </p>
          <ul className="mt-4 flex flex-col gap-3 font-body text-sm text-[var(--color-ivory-faint)]">
            <li>{RESTAURANT.address}</li>
            <li>{RESTAURANT.phone}</li>
            <li>{RESTAURANT.email}</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-14 flex max-w-6xl flex-col items-center gap-2 border-t border-[var(--color-obsidian-line)] px-6 pt-8 text-center sm:px-8">
        <p className="font-body text-xs text-[var(--color-ivory-faint)]">
          © {year} Chef&apos;s Table, Bhavnagar. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
