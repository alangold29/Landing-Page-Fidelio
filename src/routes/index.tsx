import { ArrowDown, ArrowUpRight, Bell, Check, ChevronDown, CircleGauge, Smartphone, WalletCards, Zap } from 'lucide-react'
import { useEffect, useState } from 'react'
import { AnimatedHeading, AnimatedText } from '../components/AnimatedHeading'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { CardPlaceholder, PhoneMockup, ScenePlaceholder } from '../components/VisualPlaceholders'
import { FeaturesPage, IndustriesPage, ProductPage } from './pages'
import { IndustryLandingPage, isIndustrySlug } from './industry'
import { AboutPage } from './about'
import { FeatureLandingPage, isFeatureSlug } from './feature'

function Hero() {
  return <section id="home" className="relative isolate min-h-[100svh] w-full overflow-hidden bg-[#11130f] text-white lg:min-h-[100dvh]"><div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_32%,rgba(180,255,205,.2),transparent_24%),linear-gradient(120deg,#151a15_0%,#223126_45%,#10130f_100%)]"/><div className="absolute right-[11%] top-[118px] hidden lg:block xl:right-[14%]"><PhoneMockup label="Tarjeta Taply en Wallet"/></div><div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent"/><div className="relative flex min-h-[100svh] flex-col justify-center px-5 pb-8 pt-24 sm:px-8 sm:pt-28 md:px-12 md:pb-14 lg:h-[100dvh] lg:justify-end"><div className="grid grid-cols-12 items-end gap-8"><div className="col-span-12 max-w-3xl md:col-span-8"><p className="mb-6 text-[10px] uppercase tracking-[0.18em] text-white/55 sm:mb-8 sm:text-[11px] sm:tracking-[0.2em]">Taply / fidelización en el Wallet</p><AnimatedHeading as="h1" className="font-display font-medium leading-[1.02] tracking-[-.035em]"><span className="block text-[clamp(2rem,9vw,3rem)] sm:text-5xl md:text-[72px]">Convierte clientes<br/>ocasionales en<br/><span className="text-white/45">habituales.</span></span></AnimatedHeading><AnimatedText className="mt-5 max-w-xl text-white/75 sm:mt-7"><span className="block text-base leading-relaxed sm:text-lg md:text-[21px]">Tarjetas de fidelización digitales para aumentar la frecuencia de visita, el retorno y el ROI. Sin app, sin complicar tu operación.</span></AnimatedText><div className="mt-7 flex flex-col items-start gap-4 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-5"><a href="https://cal.com/alan-goldstein-z1hmxl/demo-fidelio" className="inline-flex w-full max-w-[240px] shrink-0 items-center justify-between gap-3 whitespace-nowrap rounded-full bg-white py-2 pl-6 pr-2 text-sm font-medium text-foreground transition hover:bg-white/90 sm:w-auto sm:min-w-[196px]">Reserva una demo<span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-foreground text-white"><ArrowUpRight className="h-4 w-4"/></span></a><a href="#como-funciona" className="inline-flex items-center gap-1 whitespace-nowrap text-sm font-medium text-white">Cómo funciona <ArrowDown className="h-4 w-4"/></a></div></div></div><div className="mt-8 hidden flex-wrap items-center justify-between gap-4 border-t border-white/20 pt-5 text-[11px] uppercase tracking-[0.18em] text-white/60 sm:flex"><span>Apple Wallet / Google Wallet</span><span className="hidden md:inline">Sin app / sin fricción</span><span>Más frecuencia / más retorno</span></div></div></section>
}

function ProblemSection() {
  return <section id="problema" className="bg-[#e8ebe4] px-5 py-20 sm:px-8 sm:py-24 md:px-12 md:py-32">
    <div className="grid grid-cols-12 gap-10 md:gap-12">
      <div className="col-span-12 md:col-span-9"><p className="mb-8 text-[11px] uppercase tracking-[0.2em] text-muted-foreground sm:mb-12">El problema</p><AnimatedHeading className="font-display text-[clamp(2.25rem,5vw,4.25rem)] font-medium leading-[1.01] tracking-[-.045em]"><span className="block md:whitespace-nowrap">Una visita no basta para</span><span className="text-muted-foreground">construir un hábito.</span></AnimatedHeading></div>
      <AnimatedText className="col-span-12 self-end max-w-xl text-base leading-relaxed text-muted-foreground md:col-span-3 md:col-start-10 md:pb-2">El problema no es solo conseguir visitas. Es no saber cuáles vuelven ni tener una forma simple de darles una razón para regresar.</AnimatedText>
    </div>
    <div className="mt-14 grid grid-cols-1 border-t border-foreground/15 sm:mt-20 md:mt-24 md:grid-cols-2">
      <article className="border-b border-foreground/15 py-10 md:border-b-0 md:border-r md:pr-16"><span className="text-xs text-muted-foreground">01</span><h2 className="mt-12 text-3xl font-medium tracking-[-.035em]">Cada visita empieza de cero.</h2><p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">Muchos locales atienden, cobran y ven salir al cliente sin una forma directa de continuar la relación después de esa visita.</p></article>
      <article className="border-b border-foreground/15 py-10 md:border-b-0 md:pl-16"><span className="text-xs text-muted-foreground">02</span><h2 className="mt-12 text-3xl font-medium tracking-[-.035em]">El retorno no se ve.</h2><p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">Sin saber quién vuelve, qué beneficio funciona o qué activa una recompra, es difícil fidelizar mejor.</p></article>
    </div>
  </section>
}

function WhatWeDo() {
  return <section id="producto" className="px-5 py-20 sm:px-8 sm:py-24 md:px-12 md:py-32"><div className="grid grid-cols-12 gap-10 md:gap-12"><div className="col-span-12 md:col-span-7"><p className="mb-8 text-[11px] uppercase tracking-[0.2em] text-muted-foreground sm:mb-12">Qué hacemos</p><AnimatedHeading className="font-display text-[clamp(2.25rem,10vw,3rem)] font-medium leading-[1.02] tracking-[-.035em] md:text-7xl"><span className="lg:whitespace-nowrap">Tarjetas de fidelización</span><br/><span className="text-muted-foreground">para negocios locales.</span></AnimatedHeading></div><AnimatedText className="col-span-12 self-end text-base leading-relaxed text-muted-foreground md:col-span-4 md:col-start-9 md:pb-2">Taply ayuda a negocios locales a convertir visitas ocasionales en clientes habituales: crea tarjetas de fidelización en el celular de tus clientes, activa su regreso y mide qué genera más retorno.</AnimatedText></div><div className="mt-14 grid grid-cols-1 gap-3 sm:mt-20 md:mt-24 md:grid-cols-3"><ProductCard icon={WalletCards} number="01" title="El Wallet es el canal" text="La tarjeta vive donde tus clientes ya guardan cosas importantes: en su celular."/><ProductCard icon={Bell} number="02" title="La marca activa" text="Notificaciones, beneficios y recordatorios convierten una visita en un próximo paso."/><ProductCard icon={CircleGauge} number="03" title="El retorno se mide" text="Conecta campañas, recompensas y comportamiento para saber qué funciona."/></div></section>
}

function ProductCard({ icon: Icon, number, title, text }: { icon: typeof WalletCards; number: string; title: string; text: string }) { return <div className="min-h-[300px] border-t border-border p-8 md:border-r md:p-10 md:last:border-r-0"><div className="mb-20 flex items-center justify-between"><span className="text-xs text-muted-foreground">({number})</span><Icon className="h-5 w-5 text-muted-foreground" strokeWidth={1.5}/></div><h3 className="text-2xl font-medium tracking-[-.025em]">{title}</h3><p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">{text}</p></div> }

function InstallSection() {
  const steps = [{ icon: Smartphone, title: 'Escanea', text: 'Tu cliente escanea el QR en caja o abre tu link de Taply.' }, { icon: WalletCards, title: 'Agrega', text: 'Elige Apple Wallet o Google Wallet y guarda la tarjeta con un toque.' }, { icon: Zap, title: 'Usa', text: 'La muestra en cada visita, recibe recompensas y vuelve a elegirte.' }]
  return <section id="como-funciona" className="bg-[#e8ebe4] px-5 py-20 sm:px-8 sm:py-24 md:px-12 md:py-32"><div className="grid grid-cols-12 gap-10 md:gap-12"><div className="col-span-12 md:col-span-8"><p className="mb-8 text-[11px] uppercase tracking-[0.2em] text-muted-foreground sm:mb-12">Cómo se instala</p><AnimatedHeading className="font-display text-[clamp(2.25rem,8vw,3rem)] font-medium leading-[1.02] tracking-[-.035em] md:text-[clamp(3rem,3.5vw,3.75rem)] md:whitespace-nowrap">De QR a visitas <span className="text-muted-foreground">habituales.</span></AnimatedHeading><AnimatedText className="mt-6 text-base leading-relaxed text-muted-foreground md:whitespace-nowrap">Ellos lo instalan, tú lo activas. La entrada es simple para el cliente y accionable para el negocio.</AnimatedText></div></div><div className="mt-14 sm:mt-16"><ScenePlaceholder className="scene-placeholder-wide" label="Escena real en caja" detail="Una clienta activa su tarjeta Taply con un QR en el punto de venta" src="/images/fidelio-home-qr-wide.webp" alt="Clienta escaneando un código QR mientras conversa con el dueño de un negocio local"/></div><div className="mt-14 grid grid-cols-1 border-t border-foreground/15 sm:mt-16 md:mt-20 md:grid-cols-3">{steps.map(({ icon: Icon, title, text }, i) => <article key={title} className="border-b border-foreground/15 py-9 last:border-b-0 md:min-h-[270px] md:border-b-0 md:border-r md:px-10 md:py-10 md:first:pl-0 md:last:border-r-0"><div className="flex items-center justify-between"><span className="text-xs text-muted-foreground">0{i + 1}</span><Icon className="h-5 w-5 text-muted-foreground" strokeWidth={1.5}/></div><h3 className="mt-12 text-2xl font-medium tracking-[-.025em]">{title}</h3><p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">{text}</p></article>)}</div><div className="mt-8 flex items-center gap-3 text-sm leading-relaxed text-muted-foreground"><Check className="h-4 w-4 shrink-0 text-[#2c8f58]"/>Sin app. Sin cuenta adicional. Sin cambiar tu operación.</div></section>
}

function ProgramsSection() { const programs = [{ title: 'Tarjeta de sellos', text: 'Recompensa visitas o compras frecuentes con un beneficio claro.', accent: 'mint' as const }, { title: 'Tarjeta por puntos', text: 'Acumula puntos y canjéalos según las reglas de tu negocio.', accent: 'blue' as const }, { title: 'Tarjeta de evento', text: 'Comparte acceso, fecha y novedades.', accent: 'sand' as const }]; return <section className="px-8 py-32 md:px-12"><div className="mb-20 grid grid-cols-12 gap-12"><div className="col-span-12 md:col-span-8"><p className="mb-12 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Programas de fidelización</p><AnimatedHeading className="font-display text-[clamp(2.25rem,9vw,3rem)] font-medium leading-[1.02] tracking-[-.035em] md:text-[42px] xl:text-[56px]"><span className="md:whitespace-nowrap">Elige la tarjeta que mejor funciona</span><br/><span className="text-muted-foreground">para tu negocio.</span></AnimatedHeading></div><AnimatedText className="col-span-12 self-end text-base leading-relaxed text-muted-foreground md:col-span-4 md:col-start-9">Recompensa cada visita, acumula puntos por compra o comunica tus eventos con una tarjeta que vive dentro del Wallet.</AnimatedText></div><div className="grid grid-cols-1 gap-4 md:grid-cols-3">{programs.map((program, i) => <div key={program.title} className="min-w-0"><CardPlaceholder label={program.title} detail={program.text} tone={program.accent}/><span className="mt-3 block max-w-full text-xs uppercase tracking-[0.16em] text-muted-foreground">Caso de uso {i + 1} / visual de tarjeta a personalizar</span></div>)}</div></section> }

function ActivationSection() { const features = [{ icon: Bell, eyebrow: 'Notificaciones', title: 'Envía el mensaje adecuado en el momento adecuado.', text: 'Instantáneas, programadas o basadas en ubicación para llegar directamente a la pantalla de bloqueo.' }, { icon: Zap, eyebrow: 'Automatizaciones', title: 'Automatiza tu marketing con un solo toque.', text: 'Configura reglas basadas en acciones reales y deja que Taply active el siguiente contacto.' }, { icon: CircleGauge, eyebrow: 'Analítica completa', title: 'Mide tu éxito y comprueba cómo vuelven.', text: 'Entiende el crecimiento del programa y decide qué hacer con cada segmento de clientes.' }]; return <section id="features" className="bg-foreground px-8 py-32 text-white md:px-12"><div className="grid grid-cols-12 gap-12"><div className="col-span-12 md:col-span-8"><p className="mb-12 text-[11px] uppercase tracking-[0.2em] text-white/45">Más que una tarjeta</p><AnimatedHeading className="font-display text-5xl font-medium leading-[1.02] tracking-[-.035em] md:text-[clamp(3rem,3.3vw,3.75rem)] md:whitespace-nowrap">El Wallet también <span className="text-white/40">hace el trabajo.</span></AnimatedHeading><AnimatedText className="mt-6 text-base leading-relaxed text-white/50 md:whitespace-nowrap">La tarjeta es el medio. Hacer que el cliente vuelva es el resultado.</AnimatedText></div></div><figure className="mt-14 overflow-hidden rounded-[22px] border border-white/10 sm:mt-16"><img className="aspect-[16/9] h-full w-full object-cover object-center md:aspect-[16/6]" src="/images/fidelio-home-retencion.webp" alt="Dueño de un negocio local conversando con una clienta habitual en el mostrador"/><figcaption className="sr-only">Una relación real entre un negocio local y quien vuelve.</figcaption></figure><div className="mt-16 grid grid-cols-1 border-t border-white/15 md:mt-24 md:grid-cols-3">{features.map(({ icon: Icon, eyebrow, title, text }, i) => <div key={eyebrow} className="border-b border-white/15 py-10 md:border-b-0 md:border-r md:px-10 md:first:pl-0 md:last:border-r-0"><div className="mb-16 flex items-center justify-between"><span className="text-xs text-white/40">(0{i + 1})</span><Icon className="h-5 w-5 text-white/60" strokeWidth={1.5}/></div><p className="mb-4 text-[11px] uppercase tracking-[0.2em] text-white/45">{eyebrow}</p><AnimatedHeading as="h3" className="text-2xl font-medium leading-tight">{title}</AnimatedHeading><AnimatedText className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">{text}</AnimatedText></div>)}</div></section> }

function IndustriesSection() { const industries = [{ name: 'Cafeterías', slug: 'cafeterias', promise: 'Aumenta la frecuencia de cada visita.' }, { name: 'Bares', slug: 'bares', promise: 'Activa la próxima noche.' }, { name: 'Restaurantes', slug: 'restaurantes', promise: 'Convierte una visita en una próxima reserva.' }, { name: 'Comercios', slug: 'comercios', promise: 'Convierte compras en clientes habituales.' }, { name: 'Panaderías', slug: 'panaderias', promise: 'Convierte compras en hábito.' }, { name: 'Eventos', slug: 'eventos', promise: 'Un pass digital para cada acceso.' }]; return <section id="industrias" className="px-8 py-32 md:px-12"><div className="grid grid-cols-12 gap-12"><div className="col-span-12 md:col-span-6"><p className="mb-12 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Taply por industria</p><AnimatedHeading className="font-display text-[clamp(2.25rem,8vw,2.75rem)] font-medium leading-[1.02] tracking-[-.035em] md:text-6xl">Una forma de fidelizar<br/><span className="text-muted-foreground">para cada negocio.</span></AnimatedHeading></div><AnimatedText className="col-span-12 self-end text-base leading-relaxed text-muted-foreground md:col-span-4 md:col-start-9">Taply combina tarjeta, mensajes, automatizaciones y medición. Adaptamos el programa al ritmo y al momento de compra de tu negocio.</AnimatedText></div><div className="mt-24 grid grid-cols-1 border-t border-border md:grid-cols-2">{industries.map((industry, i) => <a key={industry.name} href={`/industrias/${industry.slug}`} className="group flex min-w-0 items-start gap-6 border-b border-border py-8 md:pr-12"><span className="shrink-0 text-xs text-muted-foreground">0{i + 1}</span><div className="min-w-0 flex-1"><div className="flex min-w-0 items-center justify-between gap-6"><h3 className="text-2xl font-medium">{industry.name}</h3><ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition group-hover:-translate-y-1 group-hover:translate-x-1"/></div><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{industry.promise}</p></div></a>)}</div></section> }

function FAQSection() { const faqs = ['¿Mis clientes necesitan descargar una app?', '¿Cómo reemplaza Taply una tarjeta de sellos en papel?', '¿Qué tipo de notificaciones puedo enviar?', '¿Taply funciona con mi sistema de ventas?', '¿Cuánto tiempo toma lanzar el programa?']; const [open, setOpen] = useState(0); const answers = ['No. Las tarjetas viven dentro de Apple Wallet y Google Wallet. No hay nada que descargar ni otra cuenta que crear.', 'Cada sello o punto se actualiza cuando tu equipo escanea el QR del cliente. El avance queda guardado en tiempo real y no se pierde.', 'Puedes enviar notificaciones instantáneas, campañas programadas, recordatorios por fecha, mensajes por cercanía y activaciones basadas en comportamiento.', 'Sí. Taply puede funcionar de forma independiente, sin cambiar nada en caja. Para operaciones más grandes se pueden evaluar integraciones con POS o CRM.', 'Un local independiente puede quedar listo rápidamente. El tiempo depende de la tarjeta, la configuración de recompensas y los canales que quieras activar.']; return <section id="faq" className="bg-[#e8ebe4] px-8 py-32 md:px-12"><div className="grid grid-cols-12 gap-12"><div className="col-span-12 md:col-span-5"><p className="mb-12 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Preguntas frecuentes</p><AnimatedHeading className="font-display text-5xl font-medium leading-[1.02] tracking-[-.035em] md:text-6xl">Lo que necesitas<br/>saber antes<br/><span className="text-muted-foreground">de empezar.</span></AnimatedHeading></div><div className="col-span-12 md:col-span-6 md:col-start-7">{faqs.map((question, i) => <div key={question} className="border-t border-foreground/15 py-6"><button className="flex w-full items-center justify-between gap-6 text-left" onClick={() => setOpen(open === i ? -1 : i)}><span className="text-lg font-medium">{question}</span><ChevronDown className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${open === i ? 'rotate-180' : ''}`}/></button>{open === i && <AnimatedText className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">{answers[i]}</AnimatedText>}</div>)}</div></div></section> }

function ClosingSection() { return <section id="demo" className="relative isolate overflow-hidden bg-[#131612] px-8 py-32 text-white md:px-12 md:py-40"><p aria-hidden="true" className="pointer-events-none absolute bottom-[-0.08em] left-1/2 z-0 w-max -translate-x-1/2 select-none font-display text-[clamp(8rem,27vw,27rem)] font-medium leading-none tracking-[-.055em] text-white/[0.055]">Taply</p><div className="relative z-10 grid grid-cols-12 gap-12"><div className="col-span-12 md:col-span-8"><p className="mb-12 text-[11px] uppercase tracking-[0.2em] text-white/45">Empieza a aumentar la frecuencia de visita</p><AnimatedHeading className="font-display text-5xl font-medium leading-[1.02] tracking-[-.035em] md:text-7xl">Convierte más visitas<br/><span className="text-white/40">en clientes habituales.</span></AnimatedHeading></div><div className="col-span-12 self-end md:col-span-3 md:col-start-10"><AnimatedText className="text-base leading-relaxed text-white/50">Reserva una demo y descubre qué programa, campaña y métrica tienen más sentido para tu negocio.</AnimatedText><a href="https://cal.com/alan-goldstein-z1hmxl/demo-fidelio" className="mt-8 inline-flex items-center gap-3 rounded-full bg-white py-2 pl-6 pr-2 text-sm font-medium text-foreground transition hover:bg-white/90">Reserva una demo<span className="flex h-9 w-9 items-center justify-center rounded-full bg-foreground text-white"><ArrowUpRight className="h-4 w-4"/></span></a></div></div></section> }

const seoPages: Record<string, { title: string; description: string }> = {
  '#home': { title: 'Taply | Fidelización para negocios locales', description: 'Tarjetas de fidelización digitales para Apple Wallet y Google Wallet. Haz que más clientes vuelvan a tu negocio local, sin app y sin complicar tu operación.' },
  '/producto': { title: 'Producto | Taply', description: 'Tarjetas digitales, notificaciones, automatizaciones y analítica para aumentar la frecuencia de visita en negocios locales.' },
  '/features': { title: 'Activación de clientes | Taply', description: 'Activa la próxima visita con notificaciones, automatizaciones y analítica de fidelización para negocios locales.' },
  '/tarjetas': { title: 'Tarjetas digitales de fidelización | Taply', description: 'Crea tarjetas de fidelización en Apple Wallet y Google Wallet para que tus clientes vuelvan a tu negocio.' },
  '/notificaciones': { title: 'Notificaciones para fidelizar clientes | Taply', description: 'Envía motivos relevantes para volver desde Apple Wallet y Google Wallet.' },
  '/automatizaciones': { title: 'Automatizaciones de fidelización | Taply', description: 'Activa beneficios y mensajes a partir de visitas, inactividad y momentos relevantes.' },
  '/analitica': { title: 'Analítica de fidelización | Taply', description: 'Entiende qué beneficios, campañas y momentos generan más retorno en tu negocio.' },
  '/industrias': { title: 'Fidelización por industria | Taply', description: 'Programas de fidelización para cafeterías, restaurantes, bares, comercios, panaderías y eventos.' },
  '/industrias/cafeterias': { title: 'Fidelización para cafeterías | Taply', description: 'Haz que cada café acerque a tus clientes a su próxima visita.' },
  '/industrias/restaurantes': { title: 'Fidelización para restaurantes | Taply', description: 'Convierte una buena mesa en una próxima reserva con fidelización digital.' },
  '/industrias/bares': { title: 'Fidelización para bares | Taply', description: 'Da a tus clientes una razón relevante para elegir tu próxima noche.' },
  '/industrias/comercios': { title: 'Fidelización para comercios locales | Taply', description: 'Convierte compras en clientes habituales con una tarjeta digital en Wallet.' },
  '/industrias/panaderias': { title: 'Fidelización para panaderías | Taply', description: 'Convierte compras diarias en un hábito que vuelve.' },
  '/industrias/eventos': { title: 'Fidelización para eventos | Taply', description: 'Mantén la relación desde el primer acceso con un pass digital.' },
  '/sobre': { title: 'Sobre Taply | Fidelización para negocios locales', description: 'Conoce por qué Taply ayuda a los negocios locales a construir relaciones que vuelven.' },
}

function currentRoute() {
  return window.location.pathname === '/' ? (window.location.hash || '#home') : window.location.pathname.replace(/\/$/, '')
}

function App() {
  const [route, setRoute] = useState(currentRoute)

  useEffect(() => {
    const onRouteChange = () => setRoute(currentRoute())
    addEventListener('hashchange', onRouteChange)
    addEventListener('popstate', onRouteChange)
    return () => {
      removeEventListener('hashchange', onRouteChange)
      removeEventListener('popstate', onRouteChange)
    }
  }, [])

  const normalizedRoute = route.startsWith('#') ? `/${route.slice(1)}` : route
  const industrySlug = normalizedRoute.replace('/industrias/', '')
  const featureSlug = normalizedRoute.replace('/', '')

  useEffect(() => {
    const seo = seoPages[normalizedRoute] ?? seoPages['#home']
    const url = `https://www.gettaply.xyz${normalizedRoute === '/home' ? '/' : normalizedRoute}`
    document.title = seo.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', seo.description)
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', url)
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', url)
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', seo.title)
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', seo.description)
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', seo.title)
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', seo.description)
  }, [normalizedRoute])

  useEffect(() => {
    if (
      ['/', '/home', '/producto', '/features', '/industrias', '/sobre'].includes(normalizedRoute)
      || normalizedRoute.startsWith('/industrias/')
      || isFeatureSlug(featureSlug)
    ) window.scrollTo(0, 0)
  }, [featureSlug, normalizedRoute])

  const page = normalizedRoute === '/sobre'
    ? <AboutPage/>
    : normalizedRoute === '/producto'
      ? <ProductPage/>
      : normalizedRoute === '/features'
        ? <FeaturesPage/>
        : normalizedRoute === '/industrias'
          ? <IndustriesPage/>
          : isIndustrySlug(industrySlug)
            ? <IndustryLandingPage slug={industrySlug}/>
            : isFeatureSlug(featureSlug)
              ? <FeatureLandingPage slug={featureSlug}/>
              : <main><Hero/><ProblemSection/><WhatWeDo/><InstallSection/><ProgramsSection/><ActivationSection/><IndustriesSection/><FAQSection/><ClosingSection/></main>

  return <div className="bg-background text-foreground"><Header/>{page}<Footer/></div>
}

export { App }
