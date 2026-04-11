import Image from "next/image";
import Link from "next/link";

import type { InfoPageImage } from "@/components/info-page-template";

const defaultMascot: InfoPageImage = {
  src: "/zerox-mascot-toucan.png",
  alt: "Mascota ZEROX, tucán en estilo halftone",
};

type ComoFuncionaLayoutProps = {
  title: string;
  lead: string;
  cta: { href: string; label: string };
  /** Líneas cortas bajo el CTA (opcional). */
  highlights?: string[];
  paragraphs: string[];
  /** Título de la sección inferior (ej. pasos o detalle). */
  sectionEyebrow?: string;
  image?: InfoPageImage | null;
};

export function ComoFuncionaLayout({
  title,
  lead,
  cta,
  highlights = [],
  paragraphs,
  sectionEyebrow = "En detalle",
  image,
}: ComoFuncionaLayoutProps) {
  const img = image ?? defaultMascot;

  return (
    <div className="mb-8 w-full overflow-hidden rounded-2xl border border-zinc-200/90 bg-gradient-to-b from-[#f5f5f5] via-[#f0f0f0] to-[#e8e8e8] shadow-[0_8px_40px_-16px_rgba(0,0,0,0.12)]">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-10 sm:py-14 md:px-14 md:py-16 lg:px-20">
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-center md:justify-between md:gap-12 lg:gap-16">
          <div className="w-full max-w-xl space-y-8 md:flex-1">
            <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-zinc-900 sm:text-5xl md:text-6xl">
              {title}
            </h1>

            <div className="flex gap-5">
              <div
                className="w-1 shrink-0 rounded-full bg-[#ff9800] shadow-[0_0_12px_rgba(255,152,0,0.45)]"
                aria-hidden
              />
              <p className="text-base leading-relaxed text-zinc-600">{lead}</p>
            </div>

            <div>
              <Link
                href={cta.href}
                className="inline-flex items-center justify-center rounded-full bg-[#ff9800] px-8 py-3 text-sm font-bold uppercase tracking-wide text-white shadow-md transition hover:bg-[#f57c00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
              >
                {cta.label}
              </Link>
            </div>

            {highlights.length > 0 ? (
              <ul className="space-y-2 pt-2">
                {highlights.map((line) => (
                  <li key={line} className="flex items-start gap-2.5 text-sm text-zinc-700">
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff9800]"
                      aria-hidden
                    />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          <div className="relative flex w-full max-w-lg flex-1 items-center justify-center md:max-w-none md:justify-end">
            <div className="relative aspect-square w-full max-w-[min(100%,380px)] sm:max-w-[420px] md:max-w-[480px]">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-contain drop-shadow-[0_24px_48px_rgba(0,0,0,0.18)]"
                sizes="(max-width: 768px) 100vw, 45vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <section className="border-t border-zinc-300/60 bg-white/55 px-5 py-12 backdrop-blur-sm sm:px-10 md:px-14 md:py-14 lg:px-20">
        <p className="mb-8 text-center text-[0.7rem] font-bold uppercase tracking-[0.28em] text-zinc-500">
          {sectionEyebrow}
        </p>
        <div className="mx-auto max-w-2xl space-y-4 text-center sm:text-left">
          {paragraphs.map((text, i) => (
            <p key={i} className="text-sm leading-relaxed text-zinc-600 md:text-[0.9375rem]">
              {text}
            </p>
          ))}
        </div>
      </section>
    </div>
  );
}
