"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  Leaf,
  MapPin,
  Mountain,
  Sparkles,
  SunMedium,
  Users,
  Waves
} from "lucide-react";

const asset = "/assets/solea/retreat-assets";
const luxuryAsset = "/assets/solea/luxury-assets";
const latestAsset = "/assets/solea/latest-assets";

const retreatImages = {
  waterLight: `${asset}/water-floating-light.jpg`,
  waterDeep: `${asset}/water-floating-deep.jpg`,
  grassYoga: `${asset}/aerial-yoga-grass.jpg`,
  crystals: `${asset}/ritual-bowl-crystals.jpg`,
  barefoot: `${asset}/barefoot-grass.jpg`
};

const luxuryImages = {
  suite: `${luxuryAsset}/minimal-meditation-suite.png`,
  lake: `${luxuryAsset}/lake-sanctuary.png`,
  darkTable: `${luxuryAsset}/gastronomy-dark-table.png`
};

const latestImages = {
  stayIncense: `${latestAsset}/stay-incense.png`,
  stayMat: `${latestAsset}/stay-yoga-mat.png`,
  stayCanopy: `${latestAsset}/stay-canopy-light.png`,
  treatment: `${latestAsset}/spa-treatment-room.jpg`,
  reception: `${latestAsset}/wellness-reception.jpg`,
  hotBath: `${latestAsset}/forest-hot-bath.jpg`,
  poolLounger: `${latestAsset}/pool-lounger.jpg`
};

const destinations = [
  {
    title: "Sanctuaire clair",
    label: "Silence",
    place: "Suite de méditation",
    text: "Un espace nu, lumineux, presque monastique. Ici, le luxe se mesure au calme.",
    image: latestImages.reception
  },
  {
    title: "Eaux lentes",
    label: "Spa & bains",
    place: "Piscine minérale",
    text: "Flottaison, massages, sauna, hammam et soins autour d'une eau chaude et silencieuse.",
    image: latestImages.hotBath
  },
  {
    title: "Table colorée",
    label: "Gastronomie",
    place: "Cuisine de saison",
    text: "Repas signatures, produits locaux et assiettes composées comme un rituel sensoriel.",
    image: luxuryImages.darkTable
  },
  {
    title: "Lac privé",
    label: "Nature",
    place: "Pieds dans l'eau",
    text: "Un horizon doux pour marcher, respirer et laisser le silence prendre toute sa place.",
    image: luxuryImages.lake
  }
];

const promises = [
  [MapPin, "Lieu privé", "Suites calmes, jardins, bassins\net salons de repos"],
  [CalendarDays, "Séjour complet", "Yoga, spa, sauna, hammam, repas\net ateliers"],
  [Users, "Petits groupes", "Une expérience intime, précise\net personnalisée"],
  [Leaf, "Table saine", "Cuisine gastronomique, locale\net profondément vivante"]
];

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
      className={className}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function SoleaRetreats() {
  const heroVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = heroVideoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.setAttribute("playsinline", "true");
    video.setAttribute("webkit-playsinline", "true");

    const play = () => {
      void video.play().catch(() => undefined);
    };

    play();
    video.addEventListener("loadeddata", play);
    video.addEventListener("canplay", play);
    document.addEventListener("visibilitychange", play);

    return () => {
      video.removeEventListener("loadeddata", play);
      video.removeEventListener("canplay", play);
      document.removeEventListener("visibilitychange", play);
    };
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f8efe3] text-[#3f352c]">
      <header className="fixed left-0 right-0 top-0 z-50 px-4 py-4 sm:px-6">
        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/55 bg-[#fffaf3]/82 px-4 py-3 shadow-[0_18px_70px_rgba(72,57,42,0.12)] backdrop-blur-2xl sm:px-6">
          <a href="#top" className="flex items-center gap-3" aria-label="Soléa accueil">
            <span className="solea-mark">S</span>
            <span className="leading-none">
              <span className="block font-serif text-2xl text-[#5b4b3c]">Soléa</span>
              <span className="block text-[0.55rem] font-bold uppercase tracking-[0.3em] text-[#9d866d]">
                Retreats
              </span>
            </span>
          </a>
          <div className="mobile-menu-pills md:hidden">
            {["Retraites", "Expériences", "Destinations", "Journal", "Réserver"].map((item) => (
              <a key={item} href={item === "Réserver" ? "#contact" : `#${item.toLowerCase()}`}>
                {item}
              </a>
            ))}
          </div>
          <div className="hidden items-center gap-8 text-xs font-semibold uppercase tracking-[0.22em] text-[#5b5041] md:flex">
            <a href="#retraites">Retraites</a>
            <a href="#experiences">Expériences</a>
            <a href="#destinations">Destinations</a>
            <a href="#journal">Journal</a>
          </div>
          <a className="hidden rounded-full bg-[#b98b55] px-6 py-3 text-sm font-bold text-white shadow-[0_14px_35px_rgba(185,139,85,0.28)] md:inline-flex" href="#contact">
            Réserver
          </a>
        </nav>
      </header>

      <section id="top" className="relative min-h-[92vh] overflow-hidden bg-[#eee2d2]">
        <video
          ref={heroVideoRef}
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src={`${asset}/hero-retreat.mp4`} type="video/mp4" />
        </video>
        <div className="relative z-10 flex min-h-[92vh] items-end px-5 pb-16 pt-32 sm:px-10 lg:px-16">
          <motion.div
            className="hero-copy max-w-2xl"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.36em] text-white/85">
              Retraites privées au bord du calme
            </p>
            <h1 className="font-serif text-[clamp(2.7rem,6vw,5.8rem)] leading-[0.98] text-white">
              <span className="block">Respirez</span>
              <span className="block">avec Soléa.</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-8 text-white/86 sm:text-lg">
              Yoga, soins, silence et cuisine délicate dans des refuges baignés de lumière.
            </p>
          </motion.div>
        </div>
      </section>

      <section id="retraites" className="intro-section px-5 py-24 sm:px-8">
        <Reveal className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="eyebrow">Soléa Retreats</p>
            <h2 className="intro-title font-serif">
              <span className="block">Silence, spa</span>
              <span className="block">et lumière naturelle.</span>
            </h2>
          </div>
          <p className="intro-copy">
            Des séjours haut de gamme pour ralentir, pratiquer, recevoir des soins et retrouver une respiration plus juste, au contact d'une nature&nbsp;apaisante.
          </p>
        </Reveal>
      </section>

      <section id="experiences" className="px-5 pb-24 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <Reveal>
            <p className="eyebrow">L'art du repos</p>
            <h2 className="section-title font-serif">
              <span className="block">Une retraite balnéaire intime,</span>
              <span className="block">pensée comme une bulle hors du temps.</span>
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-9 text-[#6e6256]">
              Quelques chambres seulement, de grands espaces pour respirer, des soins quotidiens et une cuisine délicate. Ici,&nbsp;le temps ralentit&nbsp;doucement.
            </p>
            <a href="#contact" className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#6f735b] px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-[#5c614c]">
              Imaginer mon séjour
              <ArrowRight className="h-4 w-4" />
            </a>
          </Reveal>
          <Reveal className="image-mosaic" delay={0.08}>
            <div className="mosaic-large">
              <Image src={latestImages.stayIncense} alt="Encens et rituel de repos" fill sizes="(min-width: 1024px) 34vw, 100vw" className="object-cover object-center" />
            </div>
            <div className="mosaic-stack">
              <div className="mosaic-small">
                <Image src={latestImages.stayMat} alt="Tapis de yoga dans la lumière" fill sizes="(min-width: 1024px) 22vw, 100vw" className="object-cover object-center" />
              </div>
              <div className="mosaic-small">
                <Image src={latestImages.stayCanopy} alt="Lumière dans les arbres" fill sizes="(min-width: 1024px) 22vw, 100vw" className="object-cover object-center" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#747762] px-5 py-12 text-[#fffaf3] sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-4">
          {promises.map(([Icon, title, text]) => {
            const PromiseIcon = Icon as typeof Leaf;
            return (
              <article key={String(title)} className="promise-item">
                <PromiseIcon className="mx-auto mb-5 h-8 w-8" />
                <h3>{String(title)}</h3>
                <p>{String(text)}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section id="destinations" className="destinations-section px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-14 max-w-3xl">
            <p className="eyebrow">Destinations</p>
            <h2 className="section-title font-serif">
              <span className="block">Des refuges choisis pour leur silence,</span>
              <span className="block">leur lumière et leur respiration.</span>
            </h2>
            <p className="mt-7 text-lg leading-9 text-[#6e6256]">
              Soléa privilégie des lieux où la nature devient la première praticienne : l'eau ralentit, la forêt enveloppe, l'espace&nbsp;clarifie.
            </p>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {destinations.map((destination, index) => (
              <Reveal key={destination.title} delay={index * 0.04}>
                <article className="destination-card">
                  <div className="destination-media">
                    <Image src={destination.image} alt={destination.title} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover object-center" />
                  </div>
                  <div className="p-7 sm:p-8">
                    <p className="text-xs font-bold uppercase tracking-[0.32em] text-[#b98b55]">
                      {destination.label}
                    </p>
                    <h3 className="mt-4 font-serif text-3xl text-[#4f4338]">{destination.title}</h3>
                    <p className="mt-2 text-sm font-bold uppercase tracking-[0.22em] text-[#9b8b7a]">
                      {destination.place}
                    </p>
                    <p className="mt-5 leading-8 text-[#6d6258]">{destination.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="journal" className="px-5 py-24 text-center sm:px-8">
        <Reveal className="mx-auto max-w-4xl">
          <Sparkles className="mx-auto mb-8 h-8 w-8 text-[#b98b55]" />
          <p className="solea-quote font-serif text-[#5b5041]">
            <span>"Le luxe le plus rare, est peut-être</span>
            <span>une journée sans urgence."</span>
          </p>
          <p className="mt-6 text-xs font-bold uppercase tracking-[0.36em] text-[#b98b55]">
            Carnet Soléa
          </p>
        </Reveal>
      </section>

      <section className="px-5 pb-24 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {[
            [retreatImages.waterLight, "Flottaison solaire"],
            [retreatImages.crystals, "Rituel du matin"],
            [retreatImages.grassYoga, "Pratique au jardin"]
          ].map(([src, alt]) => (
            <Reveal key={alt}>
              <div className="soft-image">
                <Image src={src} alt={alt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover object-center" />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="contact" className="contact-section px-5 py-24 sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <Reveal>
            <p className="eyebrow">Réserver</p>
            <h2 className="section-title font-serif">
              <span className="block">Demander une</span>
              <span className="block">retraite privée</span>
            </h2>
            <p className="mt-7 text-lg leading-9 text-[#6e6256]">
              Quelques mots suffisent pour imaginer un séjour juste.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <form className="contact-form">
              <label>
                Nom
                <input type="text" name="name" placeholder="Votre nom" />
              </label>
              <label>
                Email
                <input type="email" name="email" placeholder="vous@email.com" />
              </label>
              <label>
                Message
                <textarea name="message" rows={5} placeholder="Dates, intention, rythme souhaité..." />
              </label>
              <button type="button">
                Envoyer la demande
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </Reveal>
        </div>
      </section>

      <footer className="bg-[#4d4f3f] px-5 py-10 text-[#fffaf3] sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-serif text-3xl">Soléa</p>
            <p className="mt-2 text-xs font-bold uppercase tracking-[0.35em] text-white/55">
              Retreats
            </p>
          </div>
          <p className="max-w-md text-sm leading-7 text-white/70">
            Yoga, spa, sauna, hammam, table colorée et silence choisi.
          </p>
          <a href="#top" className="inline-flex items-center gap-2 rounded-full bg-white/12 px-5 py-3 text-sm font-bold">
            Haut de page
            <ArrowRight className="h-4 w-4 -rotate-90" />
          </a>
        </div>
      </footer>
    </main>
  );
}
