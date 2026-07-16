import { ArrowUpRight, Check, Smartphone, WalletCards } from 'lucide-react'
import { AnimatedHeading, AnimatedText } from '../components/AnimatedHeading'
import { PhoneMockup, ScenePlaceholder } from '../components/VisualPlaceholders'

const principles = [
  ['La frecuencia se construye', 'Cada visita deja una oportunidad para la siguiente. Un beneficio, un recordatorio o un gesto oportuno puede convertir una buena experiencia en una costumbre.'],
  ['La tecnología debe desaparecer', 'Si exige otra app, otra contraseña o una operación más compleja en caja, termina siendo una barrera. Por eso Fidelio vive donde el cliente ya guarda lo importante.'],
  ['La relación es del negocio', 'Fidelio no reemplaza la cercanía de un negocio local. La hace más fácil de sostener entre una visita y la siguiente.'],
]

export function AboutPage() {
  return <main className="bg-background pt-28 sm:pt-32">
    <section className="px-5 pb-20 sm:px-8 md:px-12 md:pb-32">
      <div className="grid grid-cols-12 gap-10 md:gap-12">
        <div className="col-span-12">
          <p className="mb-8 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Sobre Fidelio</p>
          <AnimatedHeading as="h1" className="font-display text-[clamp(2.6rem,6.8vw,5rem)] font-medium leading-[.96] tracking-[-.05em]">Los clientes no vuelven<br/><span className="text-muted-foreground">por accidente.</span></AnimatedHeading>
        </div>
        <AnimatedText className="col-span-12 self-end max-w-xl text-lg leading-relaxed text-muted-foreground md:col-span-4 md:pb-2">Un negocio local crece cuando una buena experiencia encuentra una razón concreta para repetirse.</AnimatedText>
      </div>
      <div className="mt-16 grid grid-cols-1 gap-4 md:mt-24 md:grid-cols-12 md:items-end md:gap-8">
        <div className="overflow-hidden rounded-[28px] bg-[#d8e4f1] md:col-span-7"><img src="/fidelio-card-strip.png" alt="Tarjeta Fidelio de referencia" className="h-[260px] w-full object-cover sm:h-[340px] md:h-[420px]"/></div>
        <div className="rounded-[28px] bg-[#e8ebe4] p-7 md:col-span-5 md:p-10"><p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Nuestra convicción</p><p className="mt-8 font-display text-3xl font-medium leading-tight tracking-[-.035em]">No se trata de dar descuentos. Se trata de dar una razón para volver.</p><p className="mt-6 text-base leading-relaxed text-muted-foreground">La retención no es una táctica aislada. Es la forma en que un negocio convierte una visita ocasional en una relación que vale la pena cuidar.</p></div>
      </div>
    </section>

    <section className="bg-foreground px-5 py-20 text-white sm:px-8 md:px-12 md:py-32">
      <div className="grid grid-cols-12 gap-10 md:gap-12"><div className="col-span-12 md:col-span-7"><p className="mb-8 text-[11px] uppercase tracking-[0.2em] text-white/45">Por qué existimos</p><AnimatedHeading className="font-display text-[clamp(2.35rem,7vw,5.2rem)] font-medium leading-[.98] tracking-[-.045em]">Los negocios a los que la gente vuelve<br/><span className="text-white/40">son los que mueven un barrio.</span></AnimatedHeading></div><AnimatedText className="col-span-12 self-end text-base leading-relaxed text-white/55 md:col-span-4 md:col-start-9">El café que sabe tu pedido. El restaurante al que llevas a alguien importante. La panadería que forma parte de tu rutina. Fidelio existe para ayudar a que esas relaciones no se enfríen al salir por la puerta.</AnimatedText></div>
      <div className="mt-16 grid grid-cols-1 border-t border-white/15 md:mt-24 md:grid-cols-3">{principles.map(([title, text], index) => <article key={title} className="border-b border-white/15 py-9 md:border-b-0 md:border-r md:px-9 md:first:pl-0 md:last:border-r-0"><span className="text-xs text-white/40">0{index + 1}</span><h2 className="mt-12 text-2xl font-medium tracking-[-.025em]">{title}</h2><p className="mt-4 max-w-xs text-sm leading-relaxed text-white/55">{text}</p></article>)}</div>
    </section>

    <section className="px-5 py-20 sm:px-8 md:px-12 md:py-32">
      <div className="grid grid-cols-12 items-center gap-12"><div className="col-span-12 flex justify-center md:col-span-5"><PhoneMockup label="Tarjeta Fidelio en Wallet"/></div><div className="col-span-12 md:col-span-6 md:col-start-7"><p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Una forma más simple</p><h2 className="mt-7 font-display text-[clamp(2.25rem,5vw,4.5rem)] font-medium leading-[1] tracking-[-.045em]">La fidelización tiene que sentirse natural.</h2><p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground">Por eso no construimos otra app que el cliente debe recordar descargar. Creamos una tarjeta que vive en su Wallet, se actualiza con cada visita y mantiene al negocio presente sin añadir fricción.</p><div className="mt-10 grid gap-4 border-t border-border pt-6 text-sm text-muted-foreground"><p className="flex items-center gap-3"><Check className="h-4 w-4 text-[#2c8f58]"/>Sin tarjetas de papel que se pierden.</p><p className="flex items-center gap-3"><Smartphone className="h-4 w-4 text-[#2c8f58]"/>Sin otra app ni otra cuenta.</p><p className="flex items-center gap-3"><WalletCards className="h-4 w-4 text-[#2c8f58]"/>Una relación visible en el teléfono del cliente.</p></div></div></div>
    </section>

    <section className="bg-[#e8ebe4] px-5 py-20 sm:px-8 md:px-12 md:py-32"><div className="grid grid-cols-12 items-end gap-10 md:gap-12"><div className="col-span-12 md:col-span-7"><ScenePlaceholder label="Historias por incorporar" detail="Foto de una persona usando Fidelio en un negocio local"/></div><div className="col-span-12 md:col-span-4 md:col-start-9"><p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Nuestro objetivo</p><h2 className="mt-7 font-display text-[clamp(2.25rem,5vw,4.5rem)] font-medium leading-[1] tracking-[-.045em]">Que volver sea fácil de elegir.</h2><p className="mt-7 text-base leading-relaxed text-muted-foreground">Queremos que cada negocio local pueda reconocer a quien vuelve, activar el siguiente momento y entender qué construye una relación duradera.</p><a href="#demo" className="mt-9 inline-flex items-center gap-3 rounded-full bg-foreground py-2 pl-6 pr-2 text-sm font-medium text-white transition hover:bg-foreground/85">Hablemos de tu programa<span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#9ae8af] text-foreground"><ArrowUpRight className="h-4 w-4"/></span></a></div></div></section>
  </main>
}
