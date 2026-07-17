const cards = [
  'translate-x-0 translate-y-0 grayscale hover:-translate-y-10 hover:rotate-[2deg] hover:grayscale-0',
  'translate-x-8 translate-y-7 grayscale hover:-translate-y-1 hover:rotate-[1deg] hover:grayscale-0 sm:translate-x-14 sm:translate-y-10',
  'translate-x-16 translate-y-14 hover:translate-y-7 hover:rotate-[-1deg] sm:translate-x-28 sm:translate-y-20',
]

export function StackedTaplyCards() {
  return <div className="grid min-h-[260px] place-items-center overflow-visible [grid-template-areas:'stack'] sm:min-h-[330px]">
    {cards.map((position, index) => <figure key={index} className={`group relative col-start-1 row-start-1 w-[17rem] -skew-y-[6deg] select-none overflow-hidden rounded-2xl border border-foreground/15 bg-background shadow-[0_20px_45px_rgba(20,25,20,.14)] transition-all duration-700 ease-out hover:z-20 hover:border-[#2c8f58]/60 hover:shadow-[0_30px_60px_rgba(20,25,20,.22)] sm:w-[22rem] ${position}`}>
      <img className="aspect-[1125/432] w-full object-cover" src="/fidelio-card-strip.png" alt={index === 2 ? 'Tarjeta Taply de Oh-Jala' : ''} aria-hidden={index !== 2}/>
      {index < 2 && <span className="pointer-events-none absolute inset-0 bg-background/45 transition-opacity duration-700 group-hover:opacity-0"/>}
    </figure>)}
  </div>
}
