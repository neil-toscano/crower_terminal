import Image from "next/image";
import Link from "next/link";

export type InfoPageImage = {
  src: string;
  alt: string;
};

export type InfoPageCta = {
  href: string;
  label: string;
};

type InfoPageTemplateProps = {
  title: string;
  lead: string;
  /** Frases cortas en mayúsculas (estilo lista de la referencia). */
  bullets: string[];
  paragraphs: string[];
  /** Franja inferior pequeña (mayúsculas, prueba social o tagline). */
  footerStrip: string;
  cta: InfoPageCta;
  /** Por defecto la mascota ZEROX en /public. */
  image?: InfoPageImage | null;
};

const defaultMascot: InfoPageImage = {
  src: "/zerox_logo1.png",
  alt: "Mascota ZEROX, tucán en estilo halftone",
};

export function InfoPageTemplate({
  title,
  lead,
  bullets,
  paragraphs,
  footerStrip,
  cta,
  image,
}: InfoPageTemplateProps) {
  const img = image ?? defaultMascot;

  return (
    <div className="mb-8 w-full text-emerald-950">
      <div className="overflow-hidden rounded-2xl border border-zinc-300/60 bg-[#f2f2f0] shadow-[0_2px_40px_-12px_rgba(6,95,70,0.12)]">
        <div className="grid grid-cols-1 items-center gap-8 px-5 py-10 sm:px-8 md:gap-6 md:px-10 md:py-12 lg:grid-cols-2 lg:gap-8">
          <div className="space-y-6 lg:pr-4">
            <h1 className="text-[2.25rem] font-bold leading-[1.05] tracking-tight text-[#065f46] sm:text-5xl md:text-6xl md:leading-[1.02]">
              {title}
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-emerald-900/85">{lead}</p>
            <ul className="space-y-2.5 border-l-2 border-[#065f46]/25 pl-4">
              {bullets.map((line) => (
                <li
                  key={line}
                  className="text-[0.7rem] font-bold uppercase leading-snug tracking-[0.12em] text-[#065f46] sm:text-xs sm:tracking-[0.14em]"
                >
                  {line}
                </li>
              ))}
            </ul>
            <div>
              <Link
                href={cta.href}
                className="inline-flex items-center gap-2 rounded-md bg-[#065f46] px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#054e3a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#065f46]"
              >
                {cta.label}
                <span aria-hidden className="text-base font-normal">
                  →
                </span>
              </Link>
            </div>
          </div>

          <div className="relative flex min-h-[240px] items-center justify-center sm:min-h-[300px] lg:min-h-[min(52vh,420px)] lg:justify-end">
            <div className="relative h-[min(52vw,280px)] w-full max-w-md sm:h-[min(48vw,320px)] lg:h-[380px] lg:max-w-none">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-contain object-center drop-shadow-sm lg:object-right"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>

        <div className="border-t border-[#065f46]/12 bg-[#eaeae8]/80 px-5 py-3 sm:px-8 md:px-10">
          <p className="text-center text-[0.65rem] font-bold uppercase leading-relaxed tracking-[0.18em] text-[#065f46]/75 sm:text-[0.7rem] sm:tracking-[0.2em]">
            {footerStrip}
          </p>
        </div>

        <div className="border-t border-zinc-300/50 bg-[#e8e8e6]/90 px-5 py-8 sm:px-8 md:px-10 md:py-10">
          <div className="mx-auto max-w-2xl space-y-4">
            {paragraphs.map((text, i) => (
              <p key={i} className="text-sm leading-relaxed text-emerald-950/88">
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
