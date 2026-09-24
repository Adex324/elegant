import React from "react";

// Import images properly (Vite requires this)
import hero from "../assets/about_hero.svg";
import atelier from "../assets/about_mission.svg";
import design from "../assets/process_design.svg";
import embellish from "../assets/process_embellish.svg";
import finish from "../assets/process_finish.svg";
import founderImage from "../assets/white_hat.svg";
import Navbar from "../components/Navbar";

// Standalone imported sections
import Services from "../sections/Services";
import CtaBannerSection from "../components/CtaBannerSection";
import Footer from "../components/Footer";

const assets = {
  hero,
  atelier,
  design,
  embellish,
  finish,
};

const values = [
  {
    title: "Intentional elegance",
    description: "We design statement pieces that feel timeless, never fleeting.",
  },
  {
    title: "Made by hand",
    description: "Every pearl, crystal and appliqué is placed with care by skilled hands.",
  },
  {
    title: "For every woman",
    description: "Our pieces celebrate individuality, confidence and graceful self-expression.",
  },
];

const processSteps = [
  {
    image: assets.design,
    alt: "Designer sketching a new headpiece",
    label: "01 — Design",
  },
  {
    image: assets.embellish,
    alt: "Pearls and embellishments being added to a headpiece",
    label: "02 — Embellish",
  },
  {
    image: assets.finish,
    alt: "Woman trying on a finished headpiece",
    label: "03 — Finish",
  },
];

function Eyebrow({ children }) {
  return (
    <span className="inline-flex min-h-7 items-center gap-1 rounded-full bg-[#9d008f] px-3 py-1.5 text-[11px] font-bold uppercase leading-none tracking-[0.02em] text-white">
      ✦ {children}
    </span>
  );
}

function FounderQuote() {
  return (
    <section
      className="bg-[#111111] px-6 py-10 text-white sm:px-10 sm:py-14 md:px-16 lg:px-24 lg:py-16"
      aria-labelledby="founder-quote"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-8 sm:gap-10 md:grid-cols-[190px_minmax(0,1fr)] md:gap-14 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-20">
        <div className="aspect-square overflow-hidden rounded-[10px] sm:aspect-[0.92] md:aspect-square">
          <img
            src={founderImage}
            alt="Elegant Woman founder wearing a beaded headpiece"
            className="h-full w-full object-cover"
          />
        </div>

        <figure className="m-0 max-w-3xl">
          <blockquote>
            <p
              id="founder-quote"
              className="m-0 text-[25px] font-normal leading-[1.12] tracking-[-0.03em] sm:text-3xl md:text-[34px] lg:text-[40px]"
            >
              “I want every woman to find the piece that makes her stand a
              little taller and feel entirely herself.”
            </p>
          </blockquote>

          <figcaption className="mt-5 flex items-center gap-3 text-[10px] text-white/70 sm:text-xs">
            <span className="h-px w-8 bg-white/50" aria-hidden="true" />
            Founder, Elegant Woman
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

export default function AboutSections() {
  return (
    <main className="font-geist text-[#101010]">
      <div>
        <p className="text-white bg-black flex justify-center text-center uppercase font-semibold text-xs sm:text-sm md:text-base p-2 sm:p-3">
          Worldwide Shipping Available
        </p>
        <Navbar />
      </div>

      <section
        className="grid bg-[#fff2fc] md:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]"
        aria-labelledby="about-story-title"
      >
        <div className="self-center px-6 py-12 sm:px-12 md:px-16 md:py-24 lg:px-24 lg:py-28">
          <Eyebrow>Our story</Eyebrow>

          <h2
            id="about-story-title"
            className="mt-6 max-w-[520px] text-[42px] font-semibold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-[78px]"
          >
            Elegance, shaped by hand.
          </h2>

          <p className="my-6 max-w-[410px] text-[15px] leading-[1.65] text-[#6d676d]">
            Elegant Woman was born from a love of expressive headwear and the
            belief that the finishing touch can transform how a woman feels.
          </p>

          <a
            className="inline-flex min-h-11 items-center justify-center rounded-[3px] bg-[#101010] px-[18px] text-xs font-bold text-white transition hover:-translate-y-0.5 hover:opacity-80"
            href="#collection"
          >
            Discover the collection
          </a>
        </div>

        <div className="min-h-[360px] md:min-h-[530px]">
          <img
            className="h-full min-h-[360px] w-full object-cover md:min-h-[530px]"
            src={assets.hero}
            alt="Woman wearing a hand-embellished white headpiece"
          />
        </div>

        <div
          className="col-span-full px-6 py-14 text-center sm:px-12 md:px-16 md:py-24 lg:px-24"
          aria-labelledby="about-values-title"
        >
          <Eyebrow>What guides us</Eyebrow>

          <h3
            id="about-values-title"
            className="my-[18px] mb-[34px] text-[34px] font-semibold leading-none tracking-[-0.055em] sm:text-5xl"
          >
            Our values
          </h3>

          <div className="grid gap-[14px] text-left md:grid-cols-3">
            {values.map((value) => (
              <article
                className="min-h-40 rounded-[3px] bg-white p-6"
                key={value.title}
              >
                <span className="text-3xl text-[#9d008f]">✦</span>
                <h4 className="mt-[17px] mb-2 text-xl font-semibold tracking-[-0.025em] ">
                  {value.title}
                </h4>
                <p className="m-0 text-sm leading-[1.55] text-[#6d676d]">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="bg-white px-6 py-14 sm:px-12 md:px-16 md:py-24 lg:px-24 lg:py-28"
        aria-labelledby="about-process-title"
      >
        <div className="mx-auto mb-24 grid max-w-[1180px] items-center gap-9 md:mb-40 md:grid-cols-[minmax(250px,0.75fr)_minmax(0,1fr)] md:gap-20 lg:gap-[120px]">
          <div className="aspect-[0.92] max-w-[520px] overflow-hidden rounded-xl">
            <img
              className="h-full w-full object-cover"
              src={assets.atelier}
              alt="Artisan hand-embellishing a headpiece in the atelier"
            />
          </div>

          <div className="max-w-[570px]">
            <Eyebrow>Our mission</Eyebrow>

            <h2 className="mt-[22px] text-[34px] font-semibold leading-[0.98] tracking-[-0.055em] sm:text-5xl lg:text-[58px]">
              Adornment with meaning
            </h2>

            <p className="mt-[21px] max-w-[550px] text-[13px] leading-[1.65] text-[#6d676d]">
              We create refined headwear and accessories that help women mark
              special moments and elevate the everyday. Each design balances a
              sculptural silhouette with meticulous embellishment.
            </p>

            <p className="mt-[21px] max-w-[550px] text-[13px] leading-[1.65] text-[#6d676d]">
              From selecting lustrous pearls to shaping every rim, our process
              is patient and personal. Small-batch making allows us to honour
              detail, quality and the hands behind every piece.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-[1180px]">
          <div className="mb-[30px]">
            <Eyebrow>The atelier</Eyebrow>

            <h2
              id="about-process-title"
              className="mt-[22px] mb-[13px] text-[34px] font-semibold leading-[0.98] tracking-[-0.055em] sm:text-5xl lg:text-[58px]"
            >
              From first sketch to final flourish
            </h2>

            <p className="m-0 text-xs leading-[1.55] text-[#6d676d]">
              A considered process that brings each Elegant Woman piece to life.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {processSteps.map((step) => (
              <article key={step.label}>
                <img
                  className="aspect-[1.42] w-full rounded-lg object-cover"
                  src={step.image}
                  alt={step.alt}
                />
                <span className="mt-2 block text-[11px] font-bold">
                  {step.label}
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Quote Section */}
      <FounderQuote />

      {/* 1. Free Delivery and Service Guarantees Section (Standalone Component) */}
      <Services/>

      {/* 2. Purple Call-To-Action Banner ("Find the piece that tells your story.") */}
      <CtaBannerSection />

      {/* 3. Standalone E-Commerce Footer */}
      <Footer />
    </main>
  );
}