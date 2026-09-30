'use client'

import { ArrowUpRight, HeartHandshake, Mail, Sparkles } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import { siteData } from '@/lib/site-data'
import { buttonVariants } from '@/components/ui/button'

export function CtaSection() {
  const reducedMotion = useReducedMotion()

  return (
    <section id="donate-page" className="section-shell pb-24 sm:pb-32">
      <motion.div initial={reducedMotion ? undefined : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative overflow-hidden rounded-[2rem] bg-[var(--saffron)] px-6 py-12 sm:px-12 sm:py-16 lg:px-20"><div className="absolute -right-20 -top-24 size-72 rounded-full border border-[var(--ink)]/10" /><div className="absolute -bottom-32 -left-20 size-80 rounded-full border border-[var(--ink)]/10" /><div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end"><div><div className="eyebrow"><span className="eyebrow-dot bg-[var(--ink)]" />Be part of the change</div><h2 className="mt-5 max-w-3xl font-serif text-[clamp(2.7rem,6vw,5.8rem)] leading-[0.9] tracking-[-0.075em] text-[var(--ink)]">Give a girl her wings.<br /><em>Give a woman her voice.</em></h2><p className="mt-6 max-w-xl text-base leading-7 text-[var(--ink)]/70">Whether you give time, expertise, or resources — every contribution helps a girl spread her wings and a woman find her strength.</p></div><div className="flex flex-col gap-3 sm:flex-row lg:flex-col"><a href={`mailto:${siteData.email}?subject=I%20want%20to%20support%20Pankhini`} className={`${buttonVariants({ variant: 'dark', size: 'lg' })}`}><HeartHandshake /> Contact us to donate</a><a href="#contact" className={`${buttonVariants({ variant: 'secondary', size: 'lg' })}`}>Partner or volunteer <ArrowUpRight /></a></div></div><div className="relative z-10 mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-[var(--ink)]/15 pt-5 text-xs font-semibold text-[var(--ink)]/70"><span className="inline-flex items-center gap-2"><Mail className="size-4" />{siteData.email}</span><span className="inline-flex items-center gap-2"><Sparkles className="size-4" />80G tax exemption available</span></div></motion.div>
    </section>
  )
}
