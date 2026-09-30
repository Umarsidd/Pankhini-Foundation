'use client'

import { ArrowUpRight, Quote } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import { siteData } from '@/lib/site-data'
import { buttonVariants } from '@/components/ui/button'

export function ImpactSection() {
  const reducedMotion = useReducedMotion()

  return (
    <section id="impact" className="section-shell section-pad">
      <motion.div initial={reducedMotion ? undefined : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
        <div><div className="eyebrow"><span className="eyebrow-dot" />The ground reality</div><h2 className="section-title mt-5">Why Pankhini <em>had to exist.</em></h2><p className="mt-6 max-w-md text-base leading-8 text-[var(--ink-soft)]">Uttar Pradesh has over 100 million women and girls. Yet access to mental health support, quality education, and legal awareness remains critically low — especially in semi-urban areas of NCR.</p><p className="mt-4 text-xs leading-5 text-[var(--muted)]">Context and figures published by Pankhini Foundation.</p></div>
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-[var(--line)] bg-[var(--line)]">
          {siteData.contextSignals.map((signal, index) => <div key={signal.label} className={`bg-white p-5 sm:p-7 ${index === 0 ? 'rounded-tl-3xl' : index === 1 ? 'rounded-tr-3xl' : index === 2 ? 'rounded-bl-3xl' : 'rounded-br-3xl'}`}><div className="font-serif text-3xl tracking-[-0.06em] text-[var(--plum)] sm:text-4xl">{signal.value}</div><div className="mt-3 text-xs leading-5 text-[var(--muted)]">{signal.label}</div></div>)}
        </div>
      </motion.div>

      <div className="mt-24 grid items-center gap-12 border-t border-[var(--line)] pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
        <div className="order-2 lg:order-1">
          <div className="relative rounded-[2rem] bg-[var(--sand)] p-7 sm:p-10"><Quote className="size-8 text-[var(--saffron)]" fill="currentColor" /><blockquote className="mt-5 max-w-2xl font-serif text-[clamp(1.8rem,3.5vw,3.25rem)] leading-[1.07] tracking-[-0.06em] text-[var(--ink)]">“When a girl is educated, a woman is empowered, and her rights are protected — she doesn’t just rise. She lifts her family, her community, and the next generation with her.”</blockquote><div className="mt-7 text-xs font-bold uppercase tracking-[0.16em] text-[var(--plum)]">Pankhini Foundation · Founding vision</div></div>
        </div>
        <div className="order-1 lg:order-2"><div className="eyebrow"><span className="eyebrow-dot" />Our commitment</div><h2 className="section-title mt-5">Small enough to listen.<br /><em>Ambitious enough to scale.</em></h2><p className="mt-6 text-base leading-8 text-[var(--ink-soft)]">Pankhini is building three focused programmes for two connected groups: adolescent girls and adult women. The primary focus is Uttar Pradesh, with tools designed to travel further.</p><div className="mt-8 grid grid-cols-2 gap-4">{siteData.commitments.map((item) => <div key={item.label} className="border-l-2 border-[var(--saffron)] pl-4"><div className="font-serif text-2xl tracking-[-0.05em] text-[var(--plum)]">{item.value}</div><div className="mt-1 text-xs leading-5 text-[var(--muted)]">{item.label}</div></div>)}</div><a href="#approach" className={`${buttonVariants({ variant: 'dark', size: 'default' })} mt-8`}>Our approach <ArrowUpRight /></a></div>
      </div>
    </section>
  )
}
