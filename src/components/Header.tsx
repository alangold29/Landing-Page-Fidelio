import { ArrowUpRight } from 'lucide-react'
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

  useEffect(() => {
    const onHash = () => {
      const nextHash = window.location.hash
      setHash(nextHash)
      setPastHero(nextHash !== '' && nextHash !== '#home')
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
  const theme = pastHero ? 'bg-white/75 text-foreground shadow-[0_8px_30px_rgba(20,25,20,.08)]' : 'bg-[var(--header-bg)] text-white'

  return <header className="fixed left-0 right-0 top-4 z-50 flex items-center justify-between gap-4 px-5 md:top-6 md:px-12">
    <a href="#home" aria-label="Fidelio, inicio" className={`shrink-0 font-display text-2xl font-medium tracking-[-.04em] ${pastHero ? 'text-foreground' : 'text-white'}`}>Fidelio<span className="text-[#72c888]">.</span></a>
    <div className="flex items-center gap-3">
      <nav aria-label="Navegación principal" className={`flex max-w-[calc(100vw-8.5rem)] items-center gap-0.5 overflow-x-auto rounded-full p-1.5 backdrop-blur-md [scrollbar-width:none] ${theme}`}>
        {links.map(([href, label]) => <a key={href} href={href} aria-current={active(href) ? 'page' : undefined} className={`whitespace-nowrap rounded-full px-3 py-2 text-xs font-medium transition md:px-4 md:text-sm ${active(href) ? (pastHero ? 'bg-foreground text-white' : 'bg-white/12') : 'opacity-70 hover:opacity-100'}`}>{label}</a>)}
      </nav>
      <a href="#demo" className="hidden items-center gap-1 rounded-full bg-[#9ae8af] px-4 py-2 text-sm font-medium text-[#122016] transition hover:bg-[#b8f6c7] lg:inline-flex">Demo <ArrowUpRight className="h-3.5 w-3.5" /></a>
    </div>
  </header>
}
