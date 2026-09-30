'use client'

import { ArrowUpRight, Check, Smartphone } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import { siteData } from '@/lib/site-data'
import { Integration } from '@/components/ui/integration-card'

export function ApproachSection() {
  const reducedMotion = useReducedMotion()

  return (
    <section id="approach" className="bg-[var(--blush)]/45 py-24 sm:py-32">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center"><div className="eyebrow justify-center"><span className="eyebrow-dot" />How we work</div><h2 className="section-title mt-5">Technology meets <em>community roots.</em></h2><p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[var(--ink-soft)]">We don’t parachute in with solutions. We build with communities — using technology as an amplifier, not a replacement, for human connection and trust.</p></div>

        <div className="mt-14 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {siteData.howWeWork.map((step, index) => <motion.div key={step.number} initial={reducedMotion ? undefined : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ delay: index * 0.07, duration: 0.5 }} className="relative border-t border-[var(--line-strong)] pt-5"><div className="font-serif text-3xl tracking-[-0.06em] text-[var(--saffron)]">{step.number}</div><h3 className="mt-4 font-serif text-xl tracking-[-0.04em] text-[var(--ink)]">{step.title}</h3><p className="mt-3 text-sm leading-6 text-[var(--muted)]">{step.description}</p></motion.div>)}
        </div>

        <div className="mt-20 grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div><div className="eyebrow"><span className="eyebrow-dot" />A connected ecosystem</div><h3 className="mt-5 font-serif text-[clamp(2rem,4vw,3.7rem)] leading-[0.98] tracking-[-0.065em] text-[var(--ink)]">One foundation.<br /><em>Many hands.</em></h3><p className="mt-6 max-w-md text-base leading-8 text-[var(--ink-soft)]">Our programmes connect community facilitators, schools, Anganwadi Centres, volunteers, and specialist support around the people Pankhini serves.</p><div className="mt-7 space-y-3">{['Mobile-first', 'Hindi language', 'WhatsApp ready', 'Low-bandwidth'].map((item) => <div key={item} className="flex items-center gap-3 text-sm font-semibold text-[var(--ink-soft)]"><span className="flex size-6 items-center justify-center rounded-full bg-white text-[var(--plum)]"><Check className="size-3.5" /></span>{item}</div>)}</div><a href="#contact" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[var(--plum)] hover:text-[var(--plum-deep)]">Explore partnership opportunities <ArrowUpRight className="size-4" /></a></div>
          <Integration nodes={siteData.ecosystem} />
        </div>

        <div className="mt-14 flex flex-col gap-4 rounded-2xl border border-[var(--line-strong)] bg-white/65 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6"><div className="flex items-center gap-3"><div className="flex size-10 items-center justify-center rounded-xl bg-[var(--plum)] text-white"><Smartphone className="size-5" /></div><div><div className="text-sm font-semibold text-[var(--ink)]">Built for Bharat — not borrowed from Silicon Valley.</div><div className="mt-1 text-xs text-[var(--muted)]">Minimal data · Entry-level Android devices · Hindi-first</div></div></div><a href="#whatsapp" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[var(--plum)]">Chat on WhatsApp <ArrowUpRight className="size-4" /></a></div>
      </div>
    </section>
  )
}
