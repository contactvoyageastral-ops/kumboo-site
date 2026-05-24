"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Droplets,
  HeartPulse,
  Leaf,
  ShieldCheck,
  Sparkles,
  Star,
  Wine
} from "lucide-react";

const flavors = [
  {
    title: "Pomme",
    sub: "Sureau",
    badge: "Doux & Floral",
    full: "Pomme Sureau",
    description: "Une combinaison douce, florale et délicatement fruitée.",
    image: "/assets/kumboo-range/bottle-pomme-sureau-new.png",
    accent: "#b56a9d",
    soft: "#f5e3ef",
    bottleClass: "object-center"
  },
  {
    title: "Hibiscus",
    sub: "Fruits Rouges",
    badge: "Floral & Audacieux",
    full: "Hibiscus Fruits Rouges",
    description: "Une explosion de fruits rouges sauvages et de fleur d’hibiscus.",
    image: "/assets/kumboo-range/bottle-hibiscus-fruits-rouges-new.png",
    accent: "#cf3f57",
    soft: "#fae2e5",
    bottleClass: "object-center"
  },
  {
    title: "Mangue",
    sub: "Passion",
    badge: "Exotique & Ensoleillé",
    full: "Mangue Passion",
    description: "Une saveur tropicale, fruitée et lumineuse.",
    image: "/assets/kumboo-range/bottle-mangue-passion-new.png",
    accent: "#e96d18",
    soft: "#ffe1bf",
    bottleClass: "object-center"
  },
  {
    title: "Citron",
    sub: "Gingembre",
    badge: "Tonique & Épicé",
    full: "Citron Gingembre",
    description: "La vivacité du citron pressé rencontre la chaleur épicée du gingembre frais.",
    image: "/assets/kumboo-range/bottle-citron-gingembre-new.png",
    accent: "#efa21a",
    soft: "#fff0bf",
    bottleClass: "object-center"
  },
  {
    title: "Concombre",
    sub: "Menthe",
    badge: "Frais & Détox",
    full: "Concombre Menthe",
    description: "Une recette fraîche, légère et désaltérante.",
    image: "/assets/kumboo-range/bottle-concombre-menthe-new.png",
    accent: "#2c8d5d",
    soft: "#dff1dd",
    bottleClass: "object-[48%_center]",
    titleClass: "text-[2.15rem] sm:text-[2.35rem] xl:text-[2rem] 2xl:text-[2.2rem]"
  }
];

const benefits = [
  [Leaf, "Bio", "Ingrédients issus de cultures biologiques sélectionnées."],
  [Droplets, "Vivant", "Fermentation douce, bulles fines et fraîcheur naturelle."],
  [HeartPulse, "Peu sucré", "Équilibre net, gourmand, sans lourdeur en bouche."],
  [Wine, "Verre premium", "Une bouteille élégante qui préserve les arômes."],
  [ShieldCheck, "Naturel", "Sans colorants, sans compromis, juste du vrai goût."]
];

function LogoMark({ light = false }: { light?: boolean }) {
  return (
    <motion.span
      className={`kumboo-wordmark ${light ? "kumboo-wordmark-inverted" : ""}`}
      whileHover="hover"
      initial="rest"
      animate="rest"
    >
      <span className="kumboo-logo-text">Kumboó</span>
      <motion.span
        className="kumboo-logo-leaf"
        aria-hidden="true"
        variants={{
          rest: { rotate: 34, y: 0, scale: 1 },
          hover: { rotate: 18, y: -3, scale: 1.08 }
        }}
        transition={{ type: "spring", stiffness: 240, damping: 16 }}
      />
    </motion.span>
  );
}

function Reveal({
  children,
  className = "",
  delay = 0
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-90px" }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function KumbooLanding() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.35], [0, -95]);
  const heroScale = useTransform(scrollYProgress, [0, 0.35], [1, 1.08]);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#fbf5eb] text-[#182817]">
      <div className="paper-grain" />

      <header className="fixed left-0 right-0 top-0 z-50 px-4 py-4 sm:px-6">
        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/50 bg-[#fffaf0]/82 px-5 py-3 shadow-[0_18px_55px_rgba(45,65,35,0.14)] backdrop-blur-xl">
          <a href="#top" aria-label="Kumboo accueil">
            <LogoMark />
          </a>
          <div className="hidden items-center gap-7 text-sm font-bold text-[#42643d] md:flex">
            <a href="#apropos" className="transition hover:text-[#efa21a]">À propos</a>
            <a href="#saveurs" className="transition hover:text-[#efa21a]">Saveurs</a>
            <a href="#fabrication" className="transition hover:text-[#efa21a]">Fabrication</a>
          </div>
          <a href="#saveurs" className="inline-flex items-center gap-2 rounded-full bg-[#efa21a] px-5 py-3 text-sm font-black text-white shadow-[0_14px_30px_rgba(239,162,26,0.28)] transition hover:-translate-y-0.5 hover:bg-[#d9900f]">
            Goûter
            <ArrowRight className="h-4 w-4" />
          </a>
        </nav>
      </header>

      <section id="top" className="relative min-h-screen overflow-hidden px-4 pb-16 pt-28 sm:px-6">
        <motion.div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(239,162,26,0.25),transparent_30%),radial-gradient(circle_at_85%_15%,rgba(89,137,75,0.24),transparent_30%),linear-gradient(135deg,#fff8d8,#f6efe1_48%,#e9f0d1)]"
          style={{ y: heroY, scale: heroScale }}
        />
        <div className="bubble-field">
          <span className="bubble left-[8%] top-[72%]" />
          <span className="bubble bubble-2 left-[76%] top-[68%]" />
          <span className="bubble bubble-3 left-[62%] top-[78%]" />
          <span className="bubble left-[88%] top-[44%]" />
        </div>

        <div className="relative z-10 mx-auto grid min-h-[calc(100vh-8rem)] max-w-7xl items-center gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#42643d]/15 bg-white/50 px-4 py-2 text-xs font-black uppercase text-[#42643d]">
              <Sparkles className="h-4 w-4 text-[#efa21a]" />
              Kombucha bio artisanal
            </div>
            <h1 className="font-serif text-[clamp(4rem,11vw,10rem)] font-black leading-[0.82] text-[#223d1f]">
              L’Élixir
              <span className="block text-[#d9900f]">Vivant</span>
            </h1>
            <p className="mt-7 max-w-xl text-xl font-semibold leading-9 text-[#42643d]">
              Des bulles fines, des plantes, des fruits et une&nbsp;fermentation douce pour un&nbsp;kombucha premium, frais et gourmand.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a href="#saveurs" className="inline-flex items-center justify-center gap-3 rounded-full bg-[#223d1f] px-8 py-5 text-base font-black text-[#fffaf0] transition hover:-translate-y-1 hover:bg-[#31512d]">
                Découvrir la gamme
                <ArrowRight className="h-5 w-5" />
              </a>
              <a href="#fabrication" className="inline-flex items-center justify-center rounded-full border border-[#42643d]/22 bg-white/40 px-8 py-5 text-base font-black text-[#42643d] backdrop-blur transition hover:-translate-y-1 hover:bg-white/70">
                Notre savoir-faire
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative min-h-[440px] overflow-visible lg:min-h-[620px]"
          >
            <div className="absolute inset-x-0 bottom-2 h-36 rounded-[100%] bg-[#42643d]/18 blur-3xl" />
            <div className="absolute inset-0 flex items-end justify-center gap-[-12px] overflow-visible">
              {flavors.map((flavor, index) => (
                <motion.div
                  key={flavor.full}
                  className="relative -mx-3 h-[360px] w-[130px] sm:h-[430px] sm:w-[155px] lg:h-[560px] lg:w-[190px]"
                  animate={{ y: [0, index % 2 ? 12 : -10, 0] }}
                  transition={{ duration: 4.5 + index * 0.35, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Image src={flavor.image} alt={`Bouteille Kumboo ${flavor.full}`} fill priority={index === 2} sizes="190px" className={`object-contain ${flavor.bottleClass} drop-shadow-[0_28px_28px_rgba(33,50,25,0.22)]`} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="apropos" className="px-4 py-24 sm:px-6">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <Reveal>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#d9900f]">À propos</p>
            <h2 className="mt-4 font-serif text-5xl font-black leading-none text-[#223d1f] sm:text-7xl">
              Naturel, vivant, et&nbsp;gourmand.
            </h2>
          </Reveal>
          <Reveal delay={0.08} className="rounded-[2rem] bg-[#fffaf0] p-8 shadow-[0_24px_80px_rgba(42,60,35,0.09)] sm:p-12">
            <p className="text-2xl font-semibold leading-10 text-[#42643d]">
              Kumboo travaille le&nbsp;kombucha comme une&nbsp;boisson de&nbsp;dégustation&nbsp;: infusion bio, fermentation lente, recettes uniques qui donnent envie de&nbsp;ralentir.
            </p>
          </Reveal>
        </div>
      </section>

      <section id="saveurs" className="overflow-visible px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-7xl overflow-visible">
          <Reveal className="mx-auto mb-14 max-w-5xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#d9900f]">Nos saveurs</p>
            <h2 className="mx-auto mt-4 whitespace-nowrap text-center font-serif text-[clamp(2rem,4.8vw,3.9rem)] font-black leading-none text-[#223d1f]">
              Cinq recettes, cinq humeurs.
            </h2>
          </Reveal>

          <div className="grid gap-8 overflow-visible md:grid-cols-2 xl:grid-cols-5">
            {flavors.map((flavor, index) => (
              <Reveal key={flavor.full} delay={index * 0.05}>
                <motion.article
                  className="group relative min-h-[560px] overflow-visible rounded-[2rem] px-6 pb-9 pt-8 text-center shadow-[0_24px_80px_rgba(42,60,35,0.1)]"
                  style={{ backgroundColor: flavor.soft, ["--accent" as string]: flavor.accent }}
                  whileHover={{ y: -12 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="hover-orbits" aria-hidden="true"><span /><span /><span /></div>
                  <div className="card-bubbles" aria-hidden="true"><span /><span /><span /></div>
                  <div className="relative z-10 mx-auto h-[310px] w-full">
                    <motion.div className="relative h-full w-full" whileHover={{ scale: 1.06, y: -10 }} transition={{ duration: 0.45 }}>
                      <Image src={flavor.image} alt={`Kumboo ${flavor.full}`} fill sizes="260px" className={`object-contain ${flavor.bottleClass} drop-shadow-[0_24px_26px_rgba(42,60,35,0.2)]`} />
                    </motion.div>
                  </div>
                  <div className="relative z-10 mt-7">
                    <span className="inline-flex rounded-full px-5 py-2 text-sm font-black text-white" style={{ backgroundColor: flavor.accent }}>
                      {flavor.badge}
                    </span>
                    <h3 className={`mx-auto mt-5 max-w-full text-center font-serif font-black leading-none text-[#42643d] ${flavor.titleClass ?? "text-4xl"}`}>{flavor.title}</h3>
                    <p className="mt-2 font-serif text-2xl italic text-[#6e9462]">{flavor.sub}</p>
                    <p className="mx-auto mt-6 max-w-[16rem] translate-y-3 text-base font-semibold leading-7 text-[#42643d] opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      {flavor.description}
                    </p>
                  </div>
                </motion.article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#223d1f] px-4 py-24 text-[#fffaf0] sm:px-6">
        <div className="green-dots mx-auto max-w-7xl rounded-[2rem] border border-white/12 bg-white/6 p-6 sm:p-10">
          <div className="grid gap-4 md:grid-cols-5">
            {benefits.map(([Icon, title, text]) => {
              const BenefitIcon = Icon as typeof Leaf;
              return (
                <article key={String(title)} className="rounded-3xl bg-[#fffaf0] p-6 text-[#42643d]">
                  <BenefitIcon className="mb-8 h-8 w-8 text-[#d9900f]" />
                  <h3 className="font-serif text-3xl font-black">{String(title)}</h3>
                  <p className="mt-4 text-sm font-semibold leading-6">{String(text)}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="fabrication" className="px-4 py-24 sm:px-6">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
          <Reveal className="relative min-h-[520px] overflow-hidden rounded-[2rem] bg-[#fff2c8]">
            <Image src="/assets/kumboo-range/kumboo-lineup.png" alt="Gamme Kumboo" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-contain p-8" />
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#d9900f]">Fabrication artisanale</p>
            <h2 className="mt-4 font-serif text-5xl font-black leading-none text-[#223d1f] sm:text-7xl">
              Une fermentation lente et remplie de&nbsp;bienfaits.
            </h2>
            <p className="mt-7 text-xl font-semibold leading-9 text-[#42643d]">
              Chaque recette est pensée pour garder l’éclat du&nbsp;fruit, la&nbsp;finesse de&nbsp;la&nbsp;bulle et cette petite tension acidulée qui rend le&nbsp;kombucha si vivant.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {["Une vraie alternative premium aux sodas.", "Frais, fin, pas trop sucré. Exactement ce qu’on cherchait.", "Les bouteilles sont superbes et les parfums délicieux."].map((quote) => (
            <Reveal key={quote}>
              <article className="rounded-[2rem] bg-[#fffaf0] p-8 shadow-[0_18px_55px_rgba(42,60,35,0.08)]">
                <div className="mb-6 flex gap-1 text-[#d9900f]">{[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}</div>
                <p className="text-xl font-semibold leading-8 text-[#42643d]">&ldquo;{quote}&rdquo;</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <footer className="bg-[#182817] px-4 py-10 text-[#fffaf0] sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <LogoMark light />
            <p className="mt-3 text-sm font-semibold text-white/62">Kombucha bio premium, embouteillé en&nbsp;verre.</p>
          </div>
          <a href="#top" className="inline-flex items-center gap-2 rounded-full bg-[#efa21a] px-5 py-3 text-sm font-black text-white">
            Retour en haut
            <ArrowRight className="h-4 w-4 -rotate-90" />
          </a>
        </div>
      </footer>
    </main>
  );
}
