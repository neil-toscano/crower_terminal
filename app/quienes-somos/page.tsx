import type { Metadata } from "next";

import { InfoPageTemplate } from "@/components/info-page-template";

export const metadata: Metadata = {
  title: "Quiénes somos",
  description: "Conoce la misión detrás de ZEROX.",
};

export default function QuienesSomosPage() {
  return (
    <InfoPageTemplate
      title="Quiénes somos"
      lead="Somos el intermediario que faltaba: un espacio donde gamers de Perú y proximamente otros paises pueden cerrar compras y ventas de cuentas sin arriesgar su plata ni quedarse sin lo que pagaron."
      bullets={[
        "El admin retiene el pago hasta que confirmes",
        "La comunidad primero",
        "Flujo claro, sin sorpresas",
      ]}
      footerStrip="ZEROX · INTERCAMBIO SEGURO PARA GAMERS · PERÚ Y LATAM"
      cta={{ href: "/", label: "Ir al marketplace" }}
      paragraphs={[
        "ZEROX nace de ver cuánta gente se estafa en grupos de Facebook, Discord o Telegram al comprar cuentas: el vendedor desaparece con el dinero o el comprador niega haber recibido la cuenta. Nosotros entramos en el medio para que eso no pase.",
        // "El flujo es simple: comprador y vendedor acuerdan donde quieran, pero el pago pasa por el admin. Las credenciales se entregan — directo entre ellos o a través del admin, como prefieran — y solo cuando el comprador confirma que todo está bien se libera el dinero al vendedor. Si algo falla, el admin retiene y devuelve.",
        // "Vamos mejorando la plataforma con el feedback de la comunidad. Si tienes algo que contarnos, el chat general siempre está abierto.",
      ]}
    />
  );
}