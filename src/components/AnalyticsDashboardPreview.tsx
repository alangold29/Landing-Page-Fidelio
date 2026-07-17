import { useState } from 'react'
import { Bell, ChevronDown, CircleGauge, CreditCard, Megaphone, PanelLeft, Users, X } from 'lucide-react'

type DashboardView = 'overview' | 'campaigns' | 'customers'

const views: Array<{ id: DashboardView; label: string; icon: typeof PanelLeft }> = [
  { id: 'overview', label: 'Resumen', icon: PanelLeft },
  { id: 'campaigns', label: 'Campañas', icon: Megaphone },
  { id: 'customers', label: 'Clientes', icon: Users },
]

const stats = [
  { label: 'Clientes activos', value: '6,214', change: '+8.4%', icon: Users },
  { label: 'Visitas recurrentes', value: '1,842', change: '+12.8%', icon: CreditCard },
  { label: 'Retorno atribuido', value: 'S/ 42.8k', change: '+18.2%', icon: CircleGauge },
]

function Overview() {
  return <>
    <div className="grid gap-2 sm:grid-cols-3">
      {stats.map(({ label, value, change, icon: Icon }) => <div key={label} className="rounded-xl border border-[#26332b] bg-[#151d18] p-3">
        <div className="flex items-center justify-between text-[#91a197]"><span className="text-[9px] uppercase tracking-[.12em]">{label}</span><Icon className="h-3.5 w-3.5" strokeWidth={1.5}/></div>
        <div className="mt-3 flex items-end justify-between gap-2"><strong className="text-lg font-medium tracking-[-.04em] text-[#f3f6f2]">{value}</strong><span className="text-[10px] text-[#9ae8af]">{change}</span></div>
      </div>)}
    </div>
    <div className="mt-3 rounded-xl border border-[#26332b] bg-[#151d18] p-3">
      <div className="flex items-center justify-between"><div><p className="text-xs font-medium text-[#f3f6f2]">Frecuencia de visita</p><p className="mt-1 text-[10px] text-[#91a197]">Clientes nuevos vs. recurrentes</p></div><button className="flex items-center gap-1 rounded-md border border-[#314238] px-2 py-1 text-[10px] text-[#c4d0c8]"><span>Últimos 30 días</span><ChevronDown className="h-3 w-3"/></button></div>
      <svg viewBox="0 0 620 170" className="mt-4 h-36 w-full" role="img" aria-label="Gráfico de frecuencia de visita">
        <path d="M0 138H620 M0 94H620 M0 50H620" stroke="#26332b" strokeWidth="1"/>
        <path d="M0 124 C48 119 59 104 105 112 S170 78 207 91 S266 55 309 76 S372 49 412 62 S479 32 519 45 S580 19 620 28 L620 170 L0 170Z" fill="url(#area)"/>
        <path d="M0 124 C48 119 59 104 105 112 S170 78 207 91 S266 55 309 76 S372 49 412 62 S479 32 519 45 S580 19 620 28" fill="none" stroke="#9ae8af" strokeWidth="3" strokeLinecap="round"/>
        <defs><linearGradient id="area" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#9ae8af" stopOpacity=".22"/><stop offset="1" stopColor="#9ae8af" stopOpacity="0"/></linearGradient></defs>
      </svg>
      <div className="flex justify-between text-[9px] text-[#66766b]"><span>01 Jun</span><span>08 Jun</span><span>15 Jun</span><span>22 Jun</span><span>30 Jun</span></div>
    </div>
  </>
}

function Campaigns() {
  const rows = [['Cumpleaños', 'Email + Wallet', '9.2%', 'S/ 4.8k'], ['Win-back', 'SMS + Wallet', '7.1%', 'S/ 3.1k'], ['VIP loyalty', 'Push', '12.3%', 'S/ 7.6k']]
  return <div className="rounded-xl border border-[#26332b] bg-[#151d18] p-4"><div className="flex items-center justify-between"><div><p className="text-xs font-medium text-[#f3f6f2]">Campañas activas</p><p className="mt-1 text-[10px] text-[#91a197]">Qué activa más visitas</p></div><button className="rounded-full bg-[#9ae8af] px-3 py-1.5 text-[10px] font-medium text-[#122018]">Nueva campaña</button></div><div className="mt-5 overflow-hidden rounded-lg border border-[#26332b]"><div className="grid grid-cols-4 border-b border-[#26332b] px-3 py-2 text-[9px] uppercase tracking-[.12em] text-[#66766b]"><span>Campaña</span><span>Canal</span><span>Conversión</span><span>Retorno</span></div>{rows.map(row => <div key={row[0]} className="grid grid-cols-4 border-b border-[#26332b] px-3 py-3 text-[10px] text-[#c4d0c8] last:border-0"><span className="font-medium text-[#f3f6f2]">{row[0]}</span><span>{row[1]}</span><span className="text-[#9ae8af]">{row[2]}</span><span>{row[3]}</span></div>)}</div></div>
}

function Customers() {
  const rows = [['Ava Johnson', 'VIP', '28', 'Bajo'], ['Mateo Silva', 'Frecuente', '16', 'Bajo'], ['Noah Garcia', 'En riesgo', '4', 'Alto'], ['Lia Chen', 'Nuevo', '2', 'Medio']]
  return <div className="rounded-xl border border-[#26332b] bg-[#151d18] p-4"><div><p className="text-xs font-medium text-[#f3f6f2]">Clientes y frecuencia</p><p className="mt-1 text-[10px] text-[#91a197]">Identifica quién vuelve y quién necesita un motivo</p></div><div className="mt-5 overflow-hidden rounded-lg border border-[#26332b]"><div className="grid grid-cols-4 border-b border-[#26332b] px-3 py-2 text-[9px] uppercase tracking-[.12em] text-[#66766b]"><span>Cliente</span><span>Segmento</span><span>Visitas</span><span>Riesgo</span></div>{rows.map(row => <div key={row[0]} className="grid grid-cols-4 border-b border-[#26332b] px-3 py-3 text-[10px] text-[#c4d0c8] last:border-0"><span className="font-medium text-[#f3f6f2]">{row[0]}</span><span>{row[1]}</span><span>{row[2]}</span><span className={row[3] === 'Alto' ? 'text-[#f1b7a4]' : 'text-[#9ae8af]'}>{row[3]}</span></div>)}</div></div>
}

export function AnalyticsDashboardPreview() {
  const [activeView, setActiveView] = useState<DashboardView>('overview')
  const [open, setOpen] = useState(true)
  const content = activeView === 'campaigns' ? <Campaigns/> : activeView === 'customers' ? <Customers/> : <Overview/>

  return <div className="relative w-full overflow-hidden rounded-[22px] border border-[#334238] bg-[#101611] text-left shadow-[0_35px_90px_rgba(17,33,22,.22)]">
    <div className="flex items-center gap-1 border-b border-[#26332b] px-3 py-2"><span className="h-2 w-2 rounded-full bg-[#e3a28f]"/><span className="h-2 w-2 rounded-full bg-[#d8bd76]"/><span className="h-2 w-2 rounded-full bg-[#9ae8af]"/><span className="ml-3 text-[9px] tracking-[.08em] text-[#66766b]">app.taply.xyz / analítica</span><button aria-label="Cerrar preview" className="ml-auto text-[#66766b]" onClick={() => setOpen(!open)}>{open ? <X className="h-3.5 w-3.5"/> : <span className="text-[10px]">Abrir preview</span>}</button></div>
    {open && <div className="grid min-h-[360px] grid-cols-[125px_1fr] sm:grid-cols-[160px_1fr]">
      <aside className="border-r border-[#26332b] bg-[#0d130f] p-3 sm:p-4"><div className="flex items-center gap-2 text-xs font-medium text-[#f3f6f2]"><span className="flex h-5 w-5 items-center justify-center rounded-md bg-[#9ae8af] text-[10px] font-semibold text-[#122018]">T</span>Taply</div><p className="mb-2 mt-8 text-[8px] uppercase tracking-[.16em] text-[#66766b]">Workspace</p><nav className="space-y-1">{views.map(({ id, label, icon: Icon }) => <button key={id} onClick={() => setActiveView(id)} className={`flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-[10px] transition ${activeView === id ? 'bg-[#1f3025] text-[#f3f6f2]' : 'text-[#91a197] hover:bg-[#172119] hover:text-[#f3f6f2]'}`}><Icon className="h-3.5 w-3.5" strokeWidth={1.7}/>{label}</button>)}</nav><div className="mt-8 border-t border-[#26332b] pt-3"><p className="text-[8px] uppercase tracking-[.16em] text-[#66766b]">Atajos</p><div className="mt-3 space-y-3 text-[10px] text-[#91a197]"><span className="flex items-center gap-2"><Bell className="h-3 w-3"/>Notificaciones</span><span className="flex items-center gap-2"><CreditCard className="h-3 w-3"/>Tarjeta Wallet</span></div></div></aside>
      <main className="min-w-0 bg-[#101611] p-4 sm:p-6"><div className="mb-5 flex items-start justify-between gap-3"><div><p className="text-[9px] uppercase tracking-[.16em] text-[#66766b]">Taply / Analítica</p><h3 className="mt-2 text-xl font-medium tracking-[-.04em] text-[#f3f6f2]">{activeView === 'overview' ? 'Resumen del programa' : activeView === 'campaigns' ? 'Campañas' : 'Clientes'}</h3></div><span className="hidden rounded-full border border-[#314238] px-2 py-1 text-[9px] text-[#91a197] sm:block">Datos de demostración</span></div>{content}</main>
    </div>}
  </div>
}
