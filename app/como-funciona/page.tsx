import type { Metadata } from "next";

import { ComoFuncionaLayout } from "@/components/como-funciona-layout";

export const metadata: Metadata = {
  title: "Cómo funciona",
  description: "Cómo comprar y vender cuentas de forma segura con intermediario.",
};

export default function ComoFuncionaPage() {
  return (
    <ComoFuncionaLayout
      title="Cómo funciona"
      lead="Acuerda con el vendedor donde quieras — Facebook, grupos, donde sea — y cuando estés listo para cerrar el trato, ven aquí. Nosotros actuamos como intermediario para que nadie se lleve el dinero sin entregar nada."
      cta={{ href: "/", label: "Ver avisos disponibles" }}
      highlights={[
        "Publica o encuentra tu cuenta en el marketplace",
        "El admin recibe el pago y gestiona la entrega",
        "Confirmas que todo está bien antes de liberar el dinero",
      ]}
      sectionEyebrow="El proceso paso a paso"
      paragraphs={[
        "Puedes acordar la compra donde quieras: grupos de Facebook, Discord, Telegram, lo que uses. Cuando ambos estén de acuerdo, el vendedor publica un aviso aquí o ya tiene uno activo, y tú lo adquieres desde la web.",
        "Una vez iniciada la transacción, el comprador le yapea o transfiere al admin. Las credenciales de la cuenta las coordina el vendedor directamente — puede pasárselas al comprador por el canal que prefieran (WhatsApp, Facebook, el que usen) o dárselas al admin para que las intermedie, según lo que ambos acuerden.",
        "El comprador prueba la cuenta: verifica que funcione, que tenga lo prometido, que pueda cambiar email y contraseña. Cuando confirma que todo está correcto en el chat de la app, el admin libera el pago al vendedor. Si algo no cierra, el admin retiene el dinero y lo devuelve al comprador. Nadie pierde si se sigue el flujo.",
      ]}
    />
  );
}