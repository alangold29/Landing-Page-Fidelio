import { ArrowUpRight } from 'lucide-react'
import { AnimatedHeading, AnimatedText, MaskedImage } from '../components/AnimatedHeading'

const BASE = 'https://qclay.design/lovable/pelmatech/'
const artists = [
  { image: 'blur-doctor.png', category: 'ORIGINAL VOICE', name: 'Dr. Helga Brooks', note: 'Surgeon General · New York' },
  { image: 'happy-doctor.png', category: 'NEW GENERATION', name: 'Dr. Kwame Mbeki', note: 'Pediatrician · Accra' },
  { image: 'young-doctor.png', category: 'CLEAR PERSPECTIVE', name: 'Dr. Matteo Dubois', note: 'Therapist · Paris' },
  { image: 'happy-doctor.png', category: 'FRESH THINKING', name: 'Dr. Hana Sato', note: 'Neurologist · Tokyo' },
]

export function ArtistsPage() {
  return <main className="min-h-screen bg-background pt-32">
    <section className="px-8 pb-24 md:px-12 md:pb-32">
      <div className="grid grid-cols-12 gap-12">
        <div className="col-span-12 md:col-span-7">
          <p className="mb-12 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Pelmatech / Artists</p>
          <AnimatedHeading as="h1" className="font-display text-6xl font-medium leading-[.98] tracking-[-.04em] md:text-[92px]">The people<br/>behind the<br/><span className="text-muted-foreground">practice.</span></AnimatedHeading>
        </div>
        <AnimatedText className="col-span-12 self-end text-base leading-relaxed text-muted-foreground md:col-span-4 md:col-start-9 md:pb-2">Meet the specialists shaping a more thoughtful way to care. Each profile brings a distinct point of view, a shared standard, and a human approach to the work.</AnimatedText>
      </div>
    </section>
    <section className="border-t border-border px-8 py-16 md:px-12 md:py-20">
      <div className="mb-12 flex items-center justify-between"><p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Selected people</p><p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">04 / 04</p></div>
      <div className="grid grid-cols-1 gap-x-3 gap-y-16 md:grid-cols-2">
        {artists.map((artist, i) => <article key={artist.name} className={i % 2 ? 'md:mt-24' : ''}><div className="aspect-[4/5] overflow-hidden bg-muted"><MaskedImage src={`${BASE}${artist.image}`} alt={artist.name} delay={i * .08}/></div><div className="flex items-start justify-between gap-6 pt-6"><div><p className="text-[11px] tracking-[0.2em] text-muted-foreground">{artist.category}</p><h2 className="mt-3 text-3xl font-medium tracking-[-.025em]">{artist.name}</h2><p className="mt-2 text-sm text-muted-foreground">{artist.note}</p></div><a href="#" aria-label={`View ${artist.name}`} className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border transition hover:bg-foreground hover:text-background"><ArrowUpRight className="h-4 w-4"/></a></div></article>)}
      </div>
    </section>
  </main>
}
