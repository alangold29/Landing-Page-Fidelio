import { Bell, MapPin, Smartphone } from 'lucide-react'

type PhoneMockupProps = { variant?: 'card' | 'notification'; label?: string }

export function PhoneMockup({ variant = 'card', label = 'iPhone mockup' }: PhoneMockupProps) {
  return <div className="visual-phone-wrap"><div className="visual-phone"><div className="visual-phone-notch"/><div className="visual-phone-screen"><div className="visual-phone-status"><span>9:41</span><span>● ● ▰</span></div>{variant === 'card' ? <div className="visual-pass"><div className="visual-pass-brand">OH-JALA <span>Fidelio</span></div><img src="/fidelio-card-strip.png" alt="Tarjeta Fidelio de Oh-Jala"/><div className="visual-pass-copy"><strong>Tu próxima visita cuenta.</strong><span>2 sellos más para tu beneficio</span></div><div className="visual-pass-foot"><span>Apple Wallet</span><span>•••• 8241</span></div></div> : <><div className="visual-notification"><Bell className="h-4 w-4"/><div><strong>Oh-Jala</strong><span>Hoy el segundo café va por la casa.</span></div><small>ahora</small></div><div className="visual-pass visual-pass-muted"><div className="visual-pass-brand">OH-JALA <span>Fidelio</span></div><img src="/fidelio-card-strip.png" alt="Tarjeta Fidelio de Oh-Jala"/><div className="visual-pass-copy"><strong>Tu tarjeta está activa</strong><span>3 / 5 visitas</span></div></div></>}</div></div><p className="visual-caption"><Smartphone className="h-3.5 w-3.5"/> {label}</p></div>
}

export function ScenePlaceholder({ label, detail, tone = 'light' }: { label: string; detail: string; tone?: 'light' | 'dark' }) {
  return <div className={`scene-placeholder scene-placeholder-${tone}`}><div className="scene-placeholder-grid"/><div className="scene-placeholder-content"><MapPin className="h-5 w-5" strokeWidth={1.5}/><span>{label}</span><small>{detail}</small></div></div>
}

export function CardPlaceholder({ label, detail, tone = 'mint' }: { label: string; detail: string; tone?: 'mint' | 'blue' | 'sand' }) {
  return <div className={`card-placeholder card-placeholder-${tone}`}><div className="card-placeholder-art"><img src="/fidelio-card-strip.png" alt="Tarjeta Fidelio de referencia"/><div className="card-placeholder-overlay"/></div><div className="card-placeholder-copy"><span>{label}</span><small>{detail}</small></div></div>
}
