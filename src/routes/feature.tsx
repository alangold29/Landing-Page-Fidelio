import {
  ArrowUpRight,
  Bell,
  CircleGauge,
  WalletCards,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { AnimatedHeading, AnimatedText } from "../components/AnimatedHeading";
import { PhoneMockup } from "../components/VisualPlaceholders";

export const featureSlugs = [
  "tarjetas",
  "notificaciones",
  "automatizaciones",
  "analitica",
] as const;
export type FeatureSlug = (typeof featureSlugs)[number];

type ProductVisual = "card" | "notification" | "automation" | "analytics";
type FeatureProfile = {
  label: string;
  eyebrow: string;
  title: React.ReactNode;
  intro: string;
  icon: LucideIcon;
  promise: string;
  description: string;
  productVisual: ProductVisual;
  productLabel: string;
  scene: { src: string; alt: string; caption: string };
  principles: { title: string; text: string }[];
  uses: { title: string; text: string }[];
};

const profiles: Record<FeatureSlug, FeatureProfile> = {
  tarjetas: {
    label: "Tarjetas digitales",
    eyebrow: "Producto / Tarjetas digitales",
    title: (
      <>
        Una tarjeta. <span>Más visitas.</span>
      </>
    ),
    intro:
      "Crea un programa que vive en Apple Wallet y Google Wallet, listo para acompañar a tus clientes después de que salen por la puerta.",
    icon: WalletCards,
    promise: "Tu marca, presente entre una visita y la siguiente.",
    description:
      "La tarjeta guarda avance, beneficios y una razón visible para volver. El cliente no descarga otra app ni necesita una cuenta nueva.",
    productVisual: "card",
    productLabel: "Tarjeta Taply en Wallet",
    scene: {
      src: "/images/fidelio-product-tarjetas.webp",
      alt: "Clienta usando su teléfono en una cafetería local después de una compra",
      caption: "Una tarjeta simple empieza justo donde termina la visita.",
    },
    principles: [
      {
        title: "Sin app",
        text: "El cliente la agrega con un toque y la conserva donde ya guarda lo importante.",
      },
      {
        title: "Con tu identidad",
        text: "Cada tarjeta lleva el programa, los beneficios y la marca de tu negocio.",
      },
      {
        title: "Siempre actualizada",
        text: "Los sellos, puntos o accesos cambian sin imprimir una tarjeta nueva.",
      },
    ],
    uses: [
      {
        title: "Sellos por visita",
        text: "Haz visible el avance hacia un beneficio simple.",
      },
      {
        title: "Puntos por compra",
        text: "Acumula valor según las reglas de tu negocio.",
      },
      {
        title: "Accesos y eventos",
        text: "Centraliza invitaciones, fechas y experiencias.",
      },
    ],
  },
  notificaciones: {
    label: "Notificaciones",
    eyebrow: "Producto / Notificaciones",
    title: (
      <>
        Un mensaje. <span>Justo a tiempo.</span>
      </>
    ),
    intro:
      "Llega a la pantalla de bloqueo con una razón relevante para volver: una recompensa, un momento o una novedad que merece atención.",
    icon: Bell,
    promise: "Tu negocio sigue presente sin interrumpir.",
    description:
      "Las notificaciones convierten la tarjeta en una conversación útil. No se trata de enviar más mensajes, sino de activar el siguiente paso en el momento adecuado.",
    productVisual: "notification",
    productLabel: "Notificación de Taply en Wallet",
    scene: {
      src: "/images/fidelio-product-notificaciones.webp",
      alt: "Cliente revisando una notificación mientras sale de una cafetería local",
      caption:
        "El mensaje aparece en un momento que todavía puede cambiar la decisión.",
    },
    principles: [
      {
        title: "Instantáneas",
        text: "Comunica una oportunidad que importa hoy.",
      },
      {
        title: "Programadas",
        text: "Planea una campaña para un día, hora o momento concreto.",
      },
      {
        title: "Relevantes",
        text: "Usa el contexto del programa para que cada mensaje tenga sentido.",
      },
    ],
    uses: [
      {
        title: "Horas tranquilas",
        text: "Activa una razón para volver cuando el local lo necesita.",
      },
      {
        title: "Novedades",
        text: "Comparte un menú, una colección o un evento que acaba de llegar.",
      },
      {
        title: "Beneficios activos",
        text: "Recuerda al cliente que su avance o recompensa sigue esperando.",
      },
    ],
  },
  automatizaciones: {
    label: "Automatizaciones",
    eyebrow: "Producto / Automatizaciones",
    title: (
      <>
        El próximo paso. <span>Sin acordarte.</span>
      </>
    ),
    intro:
      "Configura reglas sencillas para que Taply active un mensaje o beneficio a partir de una acción real del cliente.",
    icon: Zap,
    promise: "Una relación activa, incluso cuando el equipo está ocupado.",
    description:
      "Las automatizaciones convierten el comportamiento en una acción útil. Taply detecta el momento que definiste y hace que la comunicación ocurra a tiempo.",
    productVisual: "automation",
    productLabel: "Automatización de Taply en Wallet",
    scene: {
      src: "/images/fidelio-product-automatizaciones.webp",
      alt: "Dueño de restaurante dando la bienvenida a una clienta que regresa",
      caption:
        "La tecnología se nota menos cuando la experiencia se siente más personal.",
    },
    principles: [
      {
        title: "Reglas simples",
        text: "Define una condición, una acción y el beneficio que quieres activar.",
      },
      {
        title: "Momentos reales",
        text: "Trabaja con visitas, inactividad, puntos o fechas importantes.",
      },
      {
        title: "Sin trabajo diario",
        text: "El programa sigue operando sin depender de una tarea manual.",
      },
    ],
    uses: [
      {
        title: "Después de una visita",
        text: "Reconoce el avance y acerca al cliente a su siguiente recompensa.",
      },
      {
        title: "Cuando deja de volver",
        text: "Invita a retomar el hábito con una razón específica.",
      },
      {
        title: "Cuando está cerca",
        text: "Activa un beneficio relevante antes de que elija otro lugar.",
      },
    ],
  },
  analitica: {
    label: "Analítica",
    eyebrow: "Producto / Analítica",
    title: (
      <>
        Decide mejor. <span>Haz que vuelvan.</span>
      </>
    ),
    intro:
      "Entiende qué beneficios, campañas y momentos construyen frecuencia para que el programa mejore con cada visita.",
    icon: CircleGauge,
    promise: "Mide el regreso, no solo la entrega de un beneficio.",
    description:
      "La analítica conecta el programa con lo que realmente importa: quién regresa, qué activa una recompra y dónde hay una oportunidad para mejorar.",
    productVisual: "analytics",
    productLabel: "Dashboard de Taply",
    scene: {
      src: "/images/fidelio-product-analitica.webp",
      alt: "Dueño de un negocio local revisando métricas en su laptop",
      caption:
        "Las mejores decisiones llegan cuando la frecuencia deja de ser invisible.",
    },
    principles: [
      {
        title: "Visibilidad",
        text: "Entiende cómo está participando tu clientela en el programa.",
      },
      {
        title: "Aprendizaje",
        text: "Compara beneficios y campañas para descubrir qué genera regreso.",
      },
      {
        title: "Decisiones",
        text: "Usa señales reales para elegir el siguiente incentivo o mensaje.",
      },
    ],
    uses: [
      {
        title: "Clientes que regresan",
        text: "Identifica comportamientos de visita y participación.",
      },
      {
        title: "Campañas que activan",
        text: "Observa cuáles mensajes generan el siguiente paso.",
      },
      {
        title: "Beneficios que funcionan",
        text: "Aprende qué recompensa tiene más sentido para tu negocio.",
      },
    ],
  },
};

export function isFeatureSlug(value: string): value is FeatureSlug {
  return featureSlugs.includes(value as FeatureSlug);
}

function FeatureProductVisual({
  type,
  label,
}: {
  type: ProductVisual;
  label: string;
}) {
  if (type === "analytics")
    return (
      <figure className="w-full overflow-hidden rounded-[28px] border border-border bg-[#e8ebe4] p-8 md:p-12">
        <div className="flex aspect-[16/10] flex-col justify-between rounded-[18px] border border-foreground/15 bg-background p-6">
          <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            <span>Taply / analítica</span>
            <CircleGauge className="h-5 w-5 text-[#2c8f58]" strokeWidth={1.5} />
          </div>
          <div>
            <p className="font-display text-3xl tracking-[-.04em] md:text-4xl">
              Dashboard en construcción.
            </p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              Este espacio recibirá el dashboard de Taply con métricas de
              visitas, campañas y retorno.
            </p>
          </div>
          <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
            Próximo visual de producto
          </p>
        </div>
        <figcaption className="mt-5 text-xs uppercase tracking-[0.16em] text-muted-foreground">
          {label}
        </figcaption>
      </figure>
    );
  return (
    <div className="flex flex-col items-center">
      <PhoneMockup
        variant={type === "card" ? "card" : "notification"}
        label={label}
      />
      {type === "automation" && (
        <p className="mt-3 text-xs uppercase tracking-[0.16em] text-muted-foreground">
          Visita → regla → mensaje
        </p>
      )}
    </div>
  );
}

export function FeatureLandingPage({ slug }: { slug: FeatureSlug }) {
  const feature = profiles[slug];
  const Icon = feature.icon;
  return (
    <main className="min-h-screen bg-background px-5 pb-20 pt-28 sm:px-8 md:px-12 md:pb-32 md:pt-36">
      <section className="grid grid-cols-12 gap-10 pb-16 md:gap-12 md:pb-28">
        <div className="col-span-12 md:col-span-8 xl:col-span-12">
          <p className="mb-8 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            {feature.eyebrow}
          </p>
          <AnimatedHeading
            as="h1"
            className="font-display text-[clamp(2rem,5vw,4.5rem)] font-medium leading-[.98] tracking-[-.045em] xl:whitespace-nowrap xl:text-[3.5rem]"
          >
            {feature.title}
          </AnimatedHeading>
          <AnimatedText className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground xl:max-w-none xl:whitespace-nowrap">
            {feature.intro}
          </AnimatedText>
        </div>
      </section>
      <section className="grid grid-cols-12 items-center gap-10 border-t border-border pt-16 md:gap-12 md:pt-20">
        <div className="col-span-12 flex justify-center md:col-span-5">
          <FeatureProductVisual
            type={feature.productVisual}
            label={feature.productLabel}
          />
        </div>
        <div className="col-span-12 md:col-span-6 md:col-start-7">
          <Icon className="h-6 w-6 text-[#2c8f58]" strokeWidth={1.5} />
          <h2 className="mt-8 font-display text-[clamp(2.25rem,4vw,4.2rem)] font-medium leading-[1] tracking-[-.04em]">
            {feature.promise}
          </h2>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground">
            {feature.description}
          </p>
          <a
            href="https://cal.com/alan-goldstein-z1hmxl/demo-fidelio"
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-foreground py-2 pl-6 pr-2 text-sm font-medium text-white transition hover:bg-foreground/85"
          >
            Reserva una demo
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#9ae8af] text-foreground">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </a>
        </div>
      </section>
      <section className="mt-20 grid grid-cols-1 gap-4 md:mt-28 md:grid-cols-12">
        <figure className="overflow-hidden rounded-[28px] bg-[#e8ebe4] md:col-span-7">
          <img
            className="aspect-[16/10] h-full w-full object-cover"
            src={feature.scene.src}
            alt={feature.scene.alt}
          />
          <figcaption className="px-6 py-5 text-sm leading-relaxed text-muted-foreground">
            {feature.scene.caption}
          </figcaption>
        </figure>
        <div className="rounded-[28px] bg-[#e8ebe4] p-7 md:col-span-5 md:p-10">
          <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            Cómo funciona
          </p>
          <div className="mt-10 space-y-7">
            {feature.principles.map(({ title, text }, index) => (
              <div key={title} className="border-t border-foreground/15 pt-5">
                <span className="text-xs text-muted-foreground">
                  0{index + 1}
                </span>
                <h3 className="mt-3 text-xl font-medium tracking-[-.025em]">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="mt-20 bg-foreground px-7 py-14 text-white md:mt-28 md:px-12 md:py-20">
        <div className="grid grid-cols-12 gap-10 md:gap-12">
          <div className="col-span-12 md:col-span-5">
            <p className="text-[11px] uppercase tracking-[0.2em] text-white/45">
              Casos de uso
            </p>
            <h2 className="mt-7 font-display text-[clamp(2.25rem,4vw,4rem)] font-medium leading-[1] tracking-[-.04em] xl:whitespace-nowrap xl:text-[3rem]">
              Una función.{" "}
              <span className="text-white/40">Distintos momentos.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-7">
            <div className="border-t border-white/15">
              {feature.uses.map(({ title, text }) => (
                <div key={title} className="border-b border-white/15 py-6">
                  <h3 className="text-xl font-medium">{title}</h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-white/55">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="mt-20 flex flex-col items-start justify-between gap-7 border-t border-border pt-10 md:mt-28 md:flex-row md:items-end">
        <div>
          <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            Taply / {feature.label}
          </p>
          <h2 className="mt-5 font-display text-[clamp(2.25rem,4vw,4rem)] font-medium leading-[1] tracking-[-.04em] xl:whitespace-nowrap xl:text-[3rem]">
            Diseñemos el próximo motivo para volver.
          </h2>
        </div>
        <a
          href="https://cal.com/alan-goldstein-z1hmxl/demo-fidelio"
          className="inline-flex items-center gap-3 rounded-full bg-foreground py-2 pl-6 pr-2 text-sm font-medium text-white transition hover:bg-foreground/85"
        >
          Reserva una demo
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#9ae8af] text-foreground">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </a>
      </section>
    </main>
  );
}
