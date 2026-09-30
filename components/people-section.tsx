'use client'

import { ArrowUpRight, BriefcaseBusiness } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import { siteData } from '@/lib/site-data'
import { RemotePhoto } from '@/components/remote-photo'

export function PeopleSection() {
  const reducedMotion = useReducedMotion()

  return (
    <section id="people" className="section-shell section-pad">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><div className="eyebrow"><span className="eyebrow-dot" />The people behind Pankhini</div><h2 className="section-title mt-5">Founded with purpose,<br /><em>led with passion.</em></h2></div><p className="max-w-sm text-sm leading-7 text-[var(--muted)]">A founding team bringing together social impact strategy, communication, law, governance, and technology for good.</p></div>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {siteData.people.map((person, index) => <motion.article key={person.name} initial={reducedMotion ? undefined : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.55, delay: index * 0.1 }} className="group overflow-hidden rounded-[2rem] border border-[var(--line)] bg-white shadow-[0_10px_32px_rgba(74,45,74,0.04)]"><div className="grid sm:grid-cols-[0.78fr_1.22fr]"><div className="relative aspect-[0.92] overflow-hidden bg-[var(--blush)] sm:aspect-auto sm:min-h-[310px]"><RemotePhoto src={person.image} alt={person.alt} fallbackLabel={person.name.charAt(0)} className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]" /><div className="absolute bottom-4 left-4 rounded-full bg-[var(--saffron)] px-3 py-1.5 text-[0.6rem] font-bold uppercase tracking-[0.13em] text-[var(--ink)]">{index === 0 ? 'Founder' : 'Co-founder'}</div></div><div className="flex flex-col justify-between p-6 sm:p-8"><div><div className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-[var(--plum)]">{person.role}</div><h3 className="mt-3 font-serif text-3xl tracking-[-0.055em] text-[var(--ink)]">{person.name}</h3><p className="mt-5 text-sm leading-7 text-[var(--ink-soft)]">{person.bio}</p></div><div className="mt-7 flex items-center gap-2 border-t border-[var(--line)] pt-5 text-xs font-semibold text-[var(--muted)]"><BriefcaseBusiness className="size-4 text-[var(--saffron)]" /> Social impact leadership</div></div></div></motion.article>)}
      </div>
      <div className="mt-7 flex items-center gap-3 rounded-2xl border border-dashed border-[var(--line-strong)] bg-[var(--blush)]/35 p-5 text-sm text-[var(--ink-soft)]"><span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white text-[var(--plum)]">★</span><span><strong className="text-[var(--ink)]">Advisory board:</strong> a multi-domain council spanning education technology, mental health, legal practice, social sector strategy, and community development.</span></div>
    </section>
  )
}
