import { ArrowUpRight, ChevronDown, Menu, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { getLocale, getPagePath, localizedPath } from '../i18n'

const productLinks = [
  ['/producto', 'Ver producto'],
  ['/tarjetas', 'Tarjetas digitales'],
  ['/notificaciones', 'Notificaciones'],
  ['/automatizaciones', 'Automatizaciones'],
  ['/analitica', 'Analítica'],
] as const

const industryLinks = [
  ['/industrias/cafeterias', 'Cafeterías'],
  ['/industrias/restaurantes', 'Restaurantes'],
  ['/industrias/bares', 'Bares'],
  ['/industrias/comercios', 'Comercios'],
  ['/industrias/panaderias', 'Panaderías'],
  ['/industrias/eventos', 'Eventos'],
] as const

const featureHashes: Set<string> = new Set(productLinks.map(([href]) => href))

export function Header() {
  const getRoute = getPagePath
  const locale = getLocale()
  const alternateLocale = locale === 'pt' ? 'es' : 'pt'
  const languageHref = alternateLocale === 'pt' ? localizedPath(getRoute(), 'pt') : getRoute()
  const isHomeRoute = (value: string) => value === '/' || value === '#home'
  const [pastHero, setPastHero] = useState(() => !isHomeRoute(getRoute()))
  const [route, setRoute] = useState(getRoute)
  const [menuOpen, setMenuOpen] = useState(false)
  const [productOpen, setProductOpen] = useState(false)
  const [industryOpen, setIndustryOpen] = useState(false)
  const productMenuRef = useRef<HTMLDivElement>(null)
  const industryMenuRef = useRef<HTMLDivElement>(null)
  const mobileIndustryMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onRouteChange = () => {
      const nextRoute = getRoute()
      setRoute(nextRoute)
      setPastHero(!isHomeRoute(nextRoute))
      setMenuOpen(false)
      setProductOpen(false)
      setIndustryOpen(false)
    }
    addEventListener('hashchange', onRouteChange)
    addEventListener('popstate', onRouteChange)
    onRouteChange()
    return () => {
      removeEventListener('hashchange', onRouteChange)
      removeEventListener('popstate', onRouteChange)
    }
  }, [])

  useEffect(() => {
    if (!isHomeRoute(route)) return
    const hero = document.getElementById('home')
    if (!hero) return
    const observer = new IntersectionObserver(([entry]) => setPastHero(!entry.isIntersecting), { threshold: 0.12 })
    observer.observe(hero)
    return () => observer.disconnect()
  }, [route])

  useEffect(() => {
    if (!productOpen && !industryOpen) return

    const closeOnOutsidePress = (event: PointerEvent) => {
      const target = event.target as Node
      if (!productMenuRef.current?.contains(target) && !industryMenuRef.current?.contains(target) && !mobileIndustryMenuRef.current?.contains(target)) {
        setProductOpen(false)
        setIndustryOpen(false)
      }
    }
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setProductOpen(false)
        setIndustryOpen(false)
      }
    }

    document.addEventListener('pointerdown', closeOnOutsidePress)
    document.addEventListener('keydown', closeOnEscape)
    return () => {
      document.removeEventListener('pointerdown', closeOnOutsidePress)
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [productOpen])

  const active = (value: string) => route === value || (value === '/' && route === '#home') || (value === '/industrias' && route.startsWith('/industrias/'))
  const productActive = featureHashes.has(route)
  const navTheme = pastHero ? 'bg-white/90 text-foreground shadow-[0_8px_30px_rgba(20,25,20,.08)]' : 'bg-[var(--header-bg)] text-white'
  const logoTheme = pastHero ? 'text-foreground' : 'text-white'
  const linkClass = (isActive: boolean) => `whitespace-nowrap rounded-full px-3 py-2 text-xs font-medium transition md:px-4 md:text-sm ${isActive ? (pastHero ? 'bg-foreground text-white' : 'bg-white/12') : 'opacity-70 hover:opacity-100'}`

  return <header className="fixed left-0 right-0 top-4 z-50 flex items-center justify-between gap-3 px-5 sm:px-8 md:top-6 md:px-12">
    <a href={localizedPath('/')} aria-label="Taply, inicio" className={`shrink-0 font-display text-2xl font-medium tracking-[-.04em] ${logoTheme}`}>Taply<span className="text-[#72c888]">.</span></a>
    <div className="flex items-center gap-3">
      <nav aria-label="Navegación principal" className={`hidden items-center gap-0.5 rounded-full p-1.5 backdrop-blur-md sm:flex ${navTheme}`}>
        <a href={localizedPath('/')} aria-current={active('/') ? 'page' : undefined} className={linkClass(active('/'))}>Home</a>
        <div ref={productMenuRef} className="relative"><button type="button" aria-expanded={productOpen} aria-haspopup="menu" onClick={() => { setProductOpen(open => !open); setIndustryOpen(false) }} className={`inline-flex items-center gap-1 ${linkClass(productActive || productOpen)}`}>Producto <ChevronDown className={`h-3.5 w-3.5 transition-transform ${productOpen ? 'rotate-180' : ''}`}/></button>{productOpen && <div role="menu" className={`absolute left-1/2 top-full mt-3 w-56 -translate-x-1/2 rounded-2xl p-2 shadow-[0_16px_42px_rgba(20,25,20,.16)] backdrop-blur-md ${navTheme}`}>{productLinks.map(([href, label]) => <a key={href} role="menuitem" href={href} className={`block rounded-xl px-4 py-3 text-sm transition ${active(href) ? (pastHero ? 'bg-foreground text-white' : 'bg-white/12') : 'opacity-75 hover:opacity-100'}`}>{label}</a>)}</div>}</div>
        <div ref={industryMenuRef} className="relative"><div className={`flex items-center gap-0.5 ${linkClass(active('/industrias') || industryOpen)}`}><a href="/industrias" aria-current={active('/industrias') ? 'page' : undefined} className="py-0.5">Industrias</a><button type="button" aria-label="Abrir industrias" aria-expanded={industryOpen} aria-haspopup="menu" onClick={() => { setIndustryOpen(open => !open); setProductOpen(false) }} className="rounded-full p-1 transition hover:bg-black/5"><ChevronDown className={`h-3.5 w-3.5 transition-transform ${industryOpen ? 'rotate-180' : ''}`}/></button></div>{industryOpen && <div role="menu" className={`absolute right-0 top-full mt-3 grid w-72 grid-cols-2 gap-1 rounded-2xl p-2 shadow-[0_16px_42px_rgba(20,25,20,.16)] backdrop-blur-md ${navTheme}`}>{industryLinks.map(([href, label]) => <a key={href} role="menuitem" href={href} className={`rounded-xl px-4 py-3 text-sm transition ${active(href) ? (pastHero ? 'bg-foreground text-white' : 'bg-white/12') : 'opacity-75 hover:opacity-100'}`}>{label}</a>)}</div>}</div>
      </nav>
      <a data-locale-switch href={languageHref} className={`hidden rounded-full px-3 py-2 text-xs font-medium transition sm:inline-flex ${pastHero ? 'bg-foreground/5 text-foreground hover:bg-foreground/10' : 'bg-white/10 text-white hover:bg-white/20'}`} aria-label={locale === 'pt' ? 'Mudar para espanhol' : 'Cambiar a portugués'}>{locale === 'pt' ? 'ES' : 'PT'}</a>
      <a href="https://cal.com/alan-goldstein-z1hmxl/demo-fidelio" className="hidden items-center gap-1 rounded-full bg-[#9ae8af] px-4 py-2 text-sm font-medium text-[#122016] transition hover:bg-[#b8f6c7] lg:inline-flex">Demo <ArrowUpRight className="h-3.5 w-3.5" /></a>
      <button type="button" aria-label={menuOpen ? 'Cerrar navegación' : 'Abrir navegación'} aria-expanded={menuOpen} onClick={() => setMenuOpen(open => !open)} className={`flex h-10 w-10 items-center justify-center rounded-full backdrop-blur-md transition sm:hidden ${navTheme}`}>{menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}</button>
    </div>
    {menuOpen && <nav aria-label="Navegación móvil" className={`absolute right-5 top-full mt-3 flex min-w-[250px] flex-col gap-1 rounded-2xl p-2 shadow-[0_16px_42px_rgba(20,25,20,.16)] backdrop-blur-md sm:hidden ${navTheme}`}><a href={localizedPath('/')} className={`rounded-xl px-4 py-3 text-sm font-medium transition ${active('/') ? (pastHero ? 'bg-foreground text-white' : 'bg-white/12') : 'opacity-75 hover:opacity-100'}`}>Home</a><p className="px-4 pt-3 text-[11px] uppercase tracking-[0.16em] opacity-45">Producto</p>{productLinks.map(([href, label]) => <a key={href} href={localizedPath(href)} className={`rounded-xl px-4 py-2.5 text-sm transition ${active(href) ? (pastHero ? 'bg-foreground text-white' : 'bg-white/12') : 'opacity-75 hover:opacity-100'}`}>{label}</a>)}<div ref={mobileIndustryMenuRef} className="mt-1"><div className={`flex items-center justify-between rounded-xl text-sm font-medium transition ${active('/industrias') || industryOpen ? (pastHero ? 'bg-foreground text-white' : 'bg-white/12') : 'opacity-75 hover:opacity-100'}`}><a href={localizedPath('/industrias')} className="flex-1 px-4 py-3">Industrias</a><button type="button" aria-label="Abrir industrias" aria-expanded={industryOpen} onClick={() => setIndustryOpen(open => !open)} className="mr-2 rounded-lg p-2"><ChevronDown className={`h-4 w-4 transition-transform ${industryOpen ? 'rotate-180' : ''}`}/></button></div>{industryOpen && <div className="mt-1 grid grid-cols-2 gap-1 px-1">{industryLinks.map(([href, label]) => <a key={href} href={localizedPath(href)} className={`rounded-lg px-3 py-2.5 text-sm transition ${active(href) ? (pastHero ? 'bg-foreground text-white' : 'bg-white/12') : 'opacity-70 hover:opacity-100'}`}>{label}</a>)}</div>}</div><a data-locale-switch href={languageHref} className="mt-1 rounded-xl px-4 py-3 text-sm font-medium opacity-75 transition hover:opacity-100">{locale === 'pt' ? 'Ver em espanhol' : 'Ver em português'}</a><a href="https://cal.com/alan-goldstein-z1hmxl/demo-fidelio" className="mt-1 flex items-center justify-between rounded-xl bg-[#9ae8af] px-4 py-3 text-sm font-medium text-[#122016]">Reserva una demo <ArrowUpRight className="h-4 w-4" /></a></nav>}
  </header>
}
