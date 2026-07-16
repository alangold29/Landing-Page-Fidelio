import { ArrowUpRight } from 'lucide-react'

const productLinks = [
  ['Ver producto', '#producto'],
  ['Tarjetas digitales', '#tarjetas'],
  ['Notificaciones', '#notificaciones'],
  ['Automatizaciones', '#automatizaciones'],
  ['Analítica', '#analitica'],
]

const industryLinks = [
  ['Cafeterías', '#industrias/cafeterias'],
  ['Restaurantes', '#industrias/restaurantes'],
  ['Bares', '#industrias/bares'],
  ['Comercios', '#industrias/comercios'],
  ['Panaderías', '#industrias/panaderias'],
  ['Eventos', '#industrias/eventos'],
]

const companyLinks = [
  ['Sobre Fidelio', '#sobre'],
  ['Preguntas frecuentes', '#faq'],
  ['Reserva una demo', 'https://cal.com/alan-goldstein-z1hmxl/demo-fidelio'],
  ['hola@fidelio.lat', 'mailto:hola@fidelio.lat'],
]

export function Footer() {
  return <footer className="bg-[#0d100d] px-5 py-16 text-white sm:px-8 md:px-12 md:py-20">
    <div className="grid gap-12 border-b border-white/15 pb-14 md:grid-cols-12 md:gap-8 md:pb-20">
      <div className="md:col-span-3">
        <a href="#home" className="font-display text-3xl font-medium tracking-[-.04em]">Fidelio<span className="text-[#72c888]">.</span></a>
        <p className="mt-6 max-w-[15rem] text-sm leading-relaxed text-white/50">Tarjetas de fidelización para que los negocios locales creen más frecuencia y retorno.</p>
      </div>
      <FooterColumn title="Producto" links={productLinks}/>
      <FooterColumn title="Industrias" links={industryLinks}/>
      <FooterColumn title="Fidelio" links={companyLinks} contact/>
    </div>
    <div className="flex flex-col gap-4 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
      <span>© 2026 Fidelio. Todos los derechos reservados.</span>
      <a href="https://cal.com/alan-goldstein-z1hmxl/demo-fidelio" className="inline-flex items-center gap-2 text-white/70 transition hover:text-white">Hablemos de tu programa <ArrowUpRight className="h-3.5 w-3.5"/></a>
    </div>
  </footer>
}

function FooterColumn({ title, links, contact = false }: { title: string; links: readonly string[][]; contact?: boolean }) {
  return <div className="md:col-span-2">
    <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/40">{title}</p>
    <nav aria-label={title} className="mt-5 flex flex-col items-start gap-3">
      {links.map(([label, href]) => <a key={href} href={href} className={`text-sm leading-tight transition hover:text-[#9ae8af] ${contact ? 'text-white/75' : 'text-white/60'}`}>{label}</a>)}
    </nav>
  </div>
}
