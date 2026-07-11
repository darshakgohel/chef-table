import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { EmberDivider } from "./components/EmberDivider";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { SignatureDishes } from "./sections/SignatureDishes";
import { MenuPreview } from "./sections/MenuPreview";
import { FullMenu } from "./sections/FullMenu";
import { Gallery } from "./sections/Gallery";
import { Reviews } from "./sections/Reviews";
import { Contact } from "./sections/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--color-obsidian)]">
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-[var(--color-gold)] focus:px-4 focus:py-2 focus:text-[var(--color-obsidian)]"
      >
        Skip to content
      </a>

      <Navbar />

      <main>
        <Hero />
        <EmberDivider />
        <About />
        <SignatureDishes />
        <EmberDivider />
        <MenuPreview />
        <FullMenu />
        <EmberDivider />
        <Gallery />
        <Reviews />
        <EmberDivider />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
