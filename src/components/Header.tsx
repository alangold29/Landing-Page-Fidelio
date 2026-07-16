import { ArrowUpRight, ChevronDown, Menu, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const productLinks = [
  ['#producto', 'Ver producto'],
  ['#tarjetas', 'Tarjetas digitales'],
  ['#notificaciones', 'Notificaciones'],
  ['#automatizaciones', 'Automatizaciones'],
  ['#analitica', 'Analítica'],
] as const

const featureHashes: Set<string> = new Set(productLinks.map(([href]) => href))

export function Header() {
  const [pastHero, setPastHero] = useState(() => window.location.hash !== '' && window.location.hash !== '#home')
  const [hash, setHash] = useState(() => window.location.hash)
  const [menuOpen, setMenuOpen] = useState(false)
  const [productOpen, setProductOpen] = useState(false)
  const productMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onHash = () => {
      const nextHash = window.location.hash
      setHash(nextHash)
      setPastHero(nextHash !== '' && nextHash !== '#home')
      setMenuOpen(false)
      setProductOpen(false)
    }
    addEventListener('hashchange', onHash)
    onHash()
    return () => removeEventListener('hashchange', onHash)
  }, [])

  useEffect(() => {
    if (hash !== '' && hash !== '#home') return
    const hero = document.getElementById('home')
    if (!hero) return
    const observer = new IntersectionObserver(([entry]) => setPastHero(!entry.isIntersecting), { threshold: 0.12 })
    observer.observe(hero)
    return () => observer.disconnect()
  }, [hash])

  useEffect(() => {
    if (!productOpen) return

    const closeOnOutsidePress = (event: PointerEvent) => {
      if (!productMenuRef.current?.contains(event.target as Node)) setProductOpen(false)
    }
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setProductOpen(false)
    }

    document.addEventListener('pointerdown', closeOnOutsidePress)
    document.addEventListener('keydown', closeOnEscape)
    return () => {
      document.removeEventListener('pointerdown', closeOnOutsidePress)
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [productOpen])

  const active = (value: string) => hash === value || (value === '#home' && hash === '') || (value === '#industrias' && hash.startsWith('#industrias/'))
  const productActive = featureHashes.has(hash)
  const navTheme = pastHero ? 'bg-white/90 text-foreground shadow-[0_8px_30px_rgba(20,25,20,.08)]' : 'bg-[var(--header-bg)] text-white'
  const logoTheme = pastHero ? 'text-foreground' : 'text-white'
  const linkClass = (isActive: boolean) => `whitespace-nowrap rounded-full px-3 py-2 text-xs font-medium transition md:px-4 md:text-sm ${isActive ? (pastHero ? 'bg-foreground text-white' : 'bg-white/12') : 'opacity-70 hover:opacity-100'}`

  return <header className="fixed left-0 right-0 top-4 z-50 flex items-center justify-between gap-3 px-5 sm:px-8 md:top-6 md:px-12">
    <a href="#home" aria-label="Fidelio, inicio" className={`shrink-0 font-display text-2xl font-medium tracking-[-.04em] ${logoTheme}`}>Fidelio<span className="text-[#72c888]">.</span></a>
    <div className="flex items-center gap-3">
      <nav aria-label="Navegación principal" className={`hidden items-center gap-0.5 rounded-full p-1.5 backdrop-blur-md sm:flex ${navTheme}`}>
        <a href="#home" aria-current={active('#home') ? 'page' : undefined} className={linkClass(active('#home'))}>Home</a>
        <div ref={productMenuRef} className="relative"><button type="button" aria-expanded={productOpen} aria-haspopup="menu" onClick={() => setProductOpen(open => !open)} className={`inline-flex items-center gap-1 ${linkClass(productActive || productOpen)}`}>Producto <ChevronDown className={`h-3.5 w-3.5 transition-transform ${productOpen ? 'rotate-180' : ''}`}/></button>{productOpen && <div role="menu" className={`absolute left-1/2 top-full mt-3 w-56 -translate-x-1/2 rounded-2xl p-2 shadow-[0_16px_42px_rgba(20,25,20,.16)] backdrop-blur-md ${navTheme}`}>{productLinks.map(([href, label]) => <a key={href} role="menuitem" href={href} className={`block rounded-xl px-4 py-3 text-sm transition ${active(href) ? (pastHero ? 'bg-foreground text-white' : 'bg-white/12') : 'opacity-75 hover:opacity-100'}`}>{label}</a>)}</div>}</div>
        <a href="#industrias" aria-current={active('#industrias') ? 'page' : undefined} className={linkClass(active('#industrias'))}>Industrias</a>
      </nav>
      <a href="https://cal.com/alan-goldstein-z1hmxl/demo-fidelio" className="hidden items-center gap-1 rounded-full bg-[#9ae8af] px-4 py-2 text-sm font-medium text-[#122016] transition hover:bg-[#b8f6c7] lg:inline-flex">Demo <ArrowUpRight className="h-3.5 w-3.5" /></a>
      <button type="button" aria-label={menuOpen ? 'Cerrar navegación' : 'Abrir navegación'} aria-expanded={menuOpen} onClick={() => setMenuOpen(open => !open)} className={`flex h-10 w-10 items-center justify-center rounded-full backdrop-blur-md transition sm:hidden ${navTheme}`}>{menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}</button>
    </div>
    {menuOpen && <nav aria-label="Navegación móvil" className={`absolute right-5 top-full mt-3 flex min-w-[250px] flex-col gap-1 rounded-2xl p-2 shadow-[0_16px_42px_rgba(20,25,20,.16)] backdrop-blur-md sm:hidden ${navTheme}`}><a href="#home" className={`rounded-xl px-4 py-3 text-sm font-medium transition ${active('#home') ? (pastHero ? 'bg-foreground text-white' : 'bg-white/12') : 'opacity-75 hover:opacity-100'}`}>Home</a><p className="px-4 pt-3 text-[11px] uppercase tracking-[0.16em] opacity-45">Producto</p>{productLinks.map(([href, label]) => <a key={href} href={href} className={`rounded-xl px-4 py-2.5 text-sm transition ${active(href) ? (pastHero ? 'bg-foreground text-white' : 'bg-white/12') : 'opacity-75 hover:opacity-100'}`}>{label}</a>)}<a href="#industrias" className={`rounded-xl px-4 py-3 text-sm font-medium transition ${active('#industrias') ? (pastHero ? 'bg-foreground text-white' : 'bg-white/12') : 'opacity-75 hover:opacity-100'}`}>Industrias</a><a href="https://cal.com/alan-goldstein-z1hmxl/demo-fidelio" className="mt-1 flex items-center justify-between rounded-xl bg-[#9ae8af] px-4 py-3 text-sm font-medium text-[#122016]">Reserva una demo <ArrowUpRight className="h-4 w-4" /></a></nav>}
  </header>
}
