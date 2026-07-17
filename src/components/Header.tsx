import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

const links = [
  ['#home', 'Home'],
  ['#producto', 'Producto'],
  ['#features', 'Activación'],
  ['#industrias', 'Industrias'],
] as const

export function Header() {
  const [pastHero, setPastHero] = useState(() => window.location.hash !== '' && window.location.hash !== '#home')
  const [hash, setHash] = useState(() => window.location.hash)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onHash = () => {
      const nextHash = window.location.hash
      setHash(nextHash)
      setPastHero(nextHash !== '' && nextHash !== '#home')
      setMenuOpen(false)
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

  const active = (value: string) => hash === value || (value === '#home' && hash === '') || (value === '#industrias' && hash.startsWith('#industrias/'))
  const navTheme = pastHero ? 'bg-white/90 text-foreground shadow-[0_8px_30px_rgba(20,25,20,.08)]' : 'bg-[var(--header-bg)] text-white'
  const logoTheme = pastHero ? 'text-foreground' : 'text-white'

  return <header className="fixed left-0 right-0 top-4 z-50 flex items-center justify-between gap-3 px-5 sm:px-8 md:top-6 md:px-12">
    <a href="#home" aria-label="Taply, inicio" className={`shrink-0 font-display text-2xl font-medium tracking-[-.04em] ${logoTheme}`}>Taply<span className="text-[#72c888]">.</span></a>

    <div className="flex items-center gap-3">
      <nav aria-label="Navegación principal" className={`hidden items-center gap-0.5 rounded-full p-1.5 backdrop-blur-md sm:flex ${navTheme}`}>
        {links.map(([href, label]) => <a key={href} href={href} aria-current={active(href) ? 'page' : undefined} className={`whitespace-nowrap rounded-full px-3 py-2 text-xs font-medium transition md:px-4 md:text-sm ${active(href) ? (pastHero ? 'bg-foreground text-white' : 'bg-white/12') : 'opacity-70 hover:opacity-100'}`}>{label}</a>)}
      </nav>
      <a href="#demo" className="hidden items-center gap-1 rounded-full bg-[#9ae8af] px-4 py-2 text-sm font-medium text-[#122016] transition hover:bg-[#b8f6c7] lg:inline-flex">Demo <ArrowUpRight className="h-3.5 w-3.5" /></a>
      <button type="button" aria-label={menuOpen ? 'Cerrar navegación' : 'Abrir navegación'} aria-expanded={menuOpen} onClick={() => setMenuOpen(open => !open)} className={`flex h-10 w-10 items-center justify-center rounded-full backdrop-blur-md transition sm:hidden ${navTheme}`}>
        {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </button>
    </div>

    {menuOpen && <nav aria-label="Navegación móvil" className={`absolute right-5 top-full mt-3 flex min-w-[220px] flex-col gap-1 rounded-2xl p-2 shadow-[0_16px_42px_rgba(20,25,20,.16)] backdrop-blur-md sm:hidden ${navTheme}`}>
      {links.map(([href, label]) => <a key={href} href={href} aria-current={active(href) ? 'page' : undefined} className={`rounded-xl px-4 py-3 text-sm font-medium transition ${active(href) ? (pastHero ? 'bg-foreground text-white' : 'bg-white/12') : 'opacity-75 hover:opacity-100'}`}>{label}</a>)}
      <a href="#demo" className="mt-1 flex items-center justify-between rounded-xl bg-[#9ae8af] px-4 py-3 text-sm font-medium text-[#122016]">Reserva una demo <ArrowUpRight className="h-4 w-4" /></a>
    </nav>}
  </header>
}
