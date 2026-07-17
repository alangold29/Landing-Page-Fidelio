import { ArrowDown, ArrowUpRight, Bell, Check, MapPin, WalletCards, Zap } from 'lucide-react'
import { useEffect } from 'react'
import { AnimatedHeading, AnimatedText } from '../components/AnimatedHeading'
import { PhoneMockup, ScenePlaceholder } from '../components/VisualPlaceholders'

export const industrySlugs = ['cafeterias', 'bares', 'restaurantes', 'comercios', 'panaderias', 'eventos'] as const
export type IndustrySlug = typeof industrySlugs[number]

type IndustryProfile = {
  label: string
  eyebrow: string
  title: React.ReactNode
  description: string
  keyword: string
  proof: string
  cardLabel: string
  uses: { title: string; text: string }[]
  messages: string[]
  scene: { label: string; detail: string; tone?: 'light' | 'dark' }
}

export const industryProfiles: Record<IndustrySlug, IndustryProfile> = {
  cafeterias: {
    label: 'Cafeterías', eyebrow: 'Taply para cafeterías', title: <>Haz que el café de hoy<br/>traiga la <span>próxima visita.</span></>,
    description: 'Un programa de fidelización para cafeterías que convierte el café de rutina en un hábito visible, medible y fácil de recompensar.',
    keyword: 'Tarjeta de sellos digital para cafeterías', proof: 'Una tarjeta en Wallet para que cada café cuente.', cardLabel: 'Tu próximo café cuenta.',
    uses: [{ title: 'Sello por visita', text: 'Premia la frecuencia sin tarjetas de papel que se pierden.' }, { title: 'Hora de menor tráfico', text: 'Activa una razón para volver en la tarde o entre semana.' }, { title: 'Cliente habitual', text: 'Reconoce a quien ya eligió tu barra varias veces.' }],
    messages: ['Hoy el segundo café va por la casa.', 'Tu siguiente sello está más cerca.', 'El café de la tarde te espera.'],
    scene: { label: 'Foto por incorporar', detail: 'Cliente escaneando su tarjeta de fidelización en la caja de una cafetería' },
  },
  bares: {
    label: 'Bares', eyebrow: 'Taply para bares', title: <>Haz que una noche buena<br/>se convierta en <span>la próxima salida.</span></>,
    description: 'Fidelización para bares que mantienen su marca presente entre una visita y la siguiente, con beneficios y campañas que activan el regreso.',
    keyword: 'Programa de fidelización para bares', proof: 'Un pass digital para activar la próxima noche.', cardLabel: 'Tu próxima noche cuenta.',
    uses: [{ title: 'Happy hour', text: 'Llega con una oferta concreta antes de que decidan dónde salir.' }, { title: 'Noches temáticas', text: 'Comunica DJ sets, partidos o eventos desde la tarjeta.' }, { title: 'Clientes recurrentes', text: 'Convierte visitas espontáneas en una rutina de salida.' }],
    messages: ['Happy hour de 18:00 a 20:00.', 'Tu mesa favorita tiene un beneficio.', 'Esta noche hay una razón para volver.'],
    scene: { label: 'Foto por incorporar', detail: 'Grupo de amigos usando una tarjeta Taply en un bar' , tone: 'dark' },
  },
  restaurantes: {
    label: 'Restaurantes', eyebrow: 'Taply para restaurantes', title: <>Convierte una buena mesa<br/>en una <span>próxima reserva.</span></>,
    description: 'Un programa de fidelización para restaurantes que ayuda a llenar los momentos más tranquilos y a transformar una visita en una relación recurrente.',
    keyword: 'Fidelización para restaurantes', proof: 'La tarjeta sigue presente después de la cuenta.', cardLabel: 'Tu próxima reserva cuenta.',
    uses: [{ title: 'Reservas recurrentes', text: 'Invita a volver antes de que la experiencia se enfríe.' }, { title: 'Días tranquilos', text: 'Activa una razón clara para elegir un martes o una hora valle.' }, { title: 'Menú y experiencias', text: 'Comparte lo nuevo desde el Wallet de tus clientes.' }],
    messages: ['Este martes, el postre va por la casa.', 'Tu próxima reserva tiene un beneficio.', 'Conoce el menú de temporada.'],
    scene: { label: 'Foto por incorporar', detail: 'Comensales mostrando una tarjeta de fidelización al pagar' },
  },
  comercios: {
    label: 'Comercios', eyebrow: 'Taply para comercios', title: <>Haz que una compra<br/>sea el inicio de <span>la siguiente.</span></>,
    description: 'Un programa de puntos para comercios locales que mantiene tu marca en el celular del cliente y crea motivos concretos para volver a comprar.',
    keyword: 'Programa de puntos para comercios', proof: 'Cada compra acerca a tu cliente a un nuevo beneficio.', cardLabel: 'Tu próxima compra cuenta.',
    uses: [{ title: 'Puntos por compra', text: 'Acumula valor en cada ticket, según las reglas de tu negocio.' }, { title: 'Nuevas colecciones', text: 'Haz visible una novedad cuando el cliente no está en la tienda.' }, { title: 'Beneficios exclusivos', text: 'Segmenta a quienes ya compraron para darles una razón para regresar.' }],
    messages: ['Tienes puntos disponibles para canjear.', 'Llegó algo nuevo para ti.', 'Tu beneficio sigue activo esta semana.'],
    scene: { label: 'Foto por incorporar', detail: 'Cliente mostrando un pass digital al pagar en un comercio' },
  },
  panaderias: {
    label: 'Panaderías', eyebrow: 'Taply para panaderías', title: <>Convierte compras diarias<br/>en un <span>hábito que vuelve.</span></>,
    description: 'Una tarjeta de sellos para panaderías que acompaña el ritmo de compra diario y reconoce a quienes eligen tu mostrador una y otra vez.',
    keyword: 'Tarjeta de sellos para panaderías', proof: 'El pan de cada día también puede construir retorno.', cardLabel: 'Tu próxima visita cuenta.',
    uses: [{ title: 'Sello por compra', text: 'Haz que cada visita acerque al cliente a un beneficio simple.' }, { title: 'Recién horneado', text: 'Activa el antojo con un mensaje oportuno y concreto.' }, { title: 'Rutina de barrio', text: 'Recupera a quien dejó de pasar por su compra habitual.' }],
    messages: ['El pan recién salido del horno te espera.', 'Un sello más y tu beneficio es tuyo.', 'Tu compra habitual tiene recompensa.'],
    scene: { label: 'Foto por incorporar', detail: 'Cliente escaneando un QR junto al mostrador de una panadería' },
  },
  eventos: {
    label: 'Eventos', eyebrow: 'Taply para eventos', title: <>Tu evento sigue presente<br/>desde el <span>primer acceso.</span></>,
    description: 'Un pase digital para eventos que centraliza acceso, agenda y actualizaciones en el Wallet de cada asistente, sin depender de una app adicional.',
    keyword: 'Pase digital para eventos', proof: 'Información de acceso y experiencia en un solo pass.', cardLabel: 'Tu acceso está activo.',
    uses: [{ title: 'Acceso digital', text: 'El asistente lleva su pase en el celular desde el primer momento.' }, { title: 'Cambios en vivo', text: 'Actualiza horarios, salas y avisos sin reenviar correos.' }, { title: 'Próxima edición', text: 'Mantén la relación activa después de que el evento termina.' }],
    messages: ['La sala principal abre en 15 minutos.', 'Tu acceso está listo en Wallet.', 'La próxima edición tiene preventa activa.'],
    scene: { label: 'Foto por incorporar', detail: 'Asistente mostrando su pase digital al entrar a un evento', tone: 'dark' },
  },
}

export function isIndustrySlug(value: string): value is IndustrySlug {
  return industrySlugs.includes(value as IndustrySlug)
}

export function IndustryLandingPage({ slug }: { slug: IndustrySlug }) {
  const profile = industryProfiles[slug]
  useEffect(() => {
    document.title = `${profile.label} | Taply`
    document.querySelector('meta[name="description"]')?.setAttribute('content', profile.description)
  }, [profile])

  return <main className="min-h-screen bg-background px-5 pb-20 pt-28 sm:px-8 md:px-12 md:pb-32 md:pt-36">
    <section className="grid grid-cols-12 gap-12 pb-24 md:pb-28">
      <div className="col-span-12 md:col-span-8"><p className="mb-10 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{profile.eyebrow}</p><AnimatedHeading as="h1" className="font-display text-5xl font-medium leading-[1.01] tracking-[-.04em] md:text-6xl">{profile.title}</AnimatedHeading></div>
      <div className="col-span-12 self-end md:col-span-4 md:pb-2"><AnimatedText className="text-base leading-relaxed text-muted-foreground">{profile.description}</AnimatedText><a href="#demo" className="mt-8 inline-flex items-center gap-3 rounded-full bg-foreground py-2 pl-6 pr-2 text-sm font-medium text-white transition hover:bg-foreground/85">Reserva una demo<span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#9ae8af] text-foreground"><ArrowUpRight className="h-4 w-4"/></span></a></div>
    </section>

    <section className="grid grid-cols-12 items-center gap-12 border-t border-border pt-20">
      <div className="col-span-12 flex justify-center md:col-span-5"><PhoneMockup label={`${profile.label} / tarjeta Taply en Wallet`}/></div>
      <div className="col-span-12 md:col-span-6 md:col-start-7"><p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{profile.keyword}</p><h2 className="mt-7 max-w-xl text-4xl font-medium leading-tight tracking-[-.03em]">{profile.proof}</h2><p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">Taply convierte la tarjeta digital en un canal directo para comunicar beneficios, activar la siguiente visita y entender qué hace volver a tus clientes.</p><div className="mt-10 flex flex-wrap gap-3"><span className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-muted-foreground"><WalletCards className="h-4 w-4"/>Sin app</span><span className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-muted-foreground"><MapPin className="h-4 w-4"/>En Wallet</span></div></div>
    </section>

    <section className="mt-28 bg-[#e8ebe4] px-7 py-12 md:px-12 md:py-16"><p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Momentos que activan el regreso</p><div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">{profile.uses.map(({ title, text }, index) => <article key={title} className="border-t border-foreground/15 pt-6"><span className="text-xs text-muted-foreground">0{index + 1}</span><h2 className="mt-12 text-2xl font-medium tracking-[-.025em]">{title}</h2><p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">{text}</p></article>)}</div></section>

    <section className="mt-28 grid grid-cols-12 items-center gap-12 bg-foreground px-7 py-12 text-white md:px-12 md:py-16"><div className="col-span-12 md:col-span-5"><Bell className="h-6 w-6 text-[#9ae8af]" strokeWidth={1.5}/><p className="mt-12 text-[11px] uppercase tracking-[0.2em] text-white/45">Comunicación que vuelve a abrir la puerta</p><h2 className="mt-6 text-4xl font-medium leading-tight tracking-[-.03em]">Un mensaje útil, en el momento adecuado.</h2></div><div className="col-span-12 md:col-span-5 md:col-start-8"><p className="text-base leading-relaxed text-white/60">Las notificaciones no tienen que ser genéricas. Cada una puede tener un motivo real para que la siguiente visita ocurra.</p><div className="mt-8 space-y-3 border-t border-white/15 pt-6">{profile.messages.map(message => <p key={message} className="flex items-start gap-3 text-sm text-white/75"><Zap className="mt-0.5 h-4 w-4 shrink-0 text-[#9ae8af]"/>{message}</p>)}</div></div></section>

    <section className="mt-28 grid grid-cols-12 items-end gap-12"><div className="col-span-12 md:col-span-7"><ScenePlaceholder {...profile.scene}/></div><div className="col-span-12 md:col-span-4 md:col-start-9"><p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Hecho para tu operación</p><h2 className="mt-7 text-4xl font-medium leading-tight tracking-[-.03em]">Más frecuencia.<br/><span className="text-muted-foreground">Más retorno.</span></h2><p className="mt-6 text-base leading-relaxed text-muted-foreground">Empieza con un QR en tu punto de venta, una tarjeta en Wallet y una recompensa que tenga sentido para tu clientela.</p><a href="#demo" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground">Reserva una demo <ArrowDown className="h-4 w-4"/></a></div></section>

    <section id="demo" className="mt-28 flex flex-col items-start justify-between gap-8 border-t border-border pt-10 md:flex-row md:items-end"><div><p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Taply para {profile.label.toLowerCase()}</p><h2 className="mt-5 text-4xl font-medium tracking-[-.035em] md:text-5xl">Diseñemos el programa<br/>para tu negocio.</h2></div><a href="mailto:hola@gettaply.xyz" className="inline-flex items-center gap-3 rounded-full bg-foreground py-2 pl-6 pr-2 text-sm font-medium text-white transition hover:bg-foreground/85">Reserva una demo<span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#9ae8af] text-foreground"><ArrowUpRight className="h-4 w-4"/></span></a></section>
  </main>
}
