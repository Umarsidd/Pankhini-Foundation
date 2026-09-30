'use client'

import { ArrowDown, ArrowUpRight, MessageCircle, Sparkles } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import { siteData } from '@/lib/site-data'
import { buttonVariants } from '@/components/ui/button'
import { RemotePhoto } from '@/components/remote-photo'

export function Hero() {
  const reducedMotion = useReducedMotion()

  return (
    <section id="top" className="relative overflow-hidden pt-28 lg:pt-36">
      <div className="hero-orb hero-orb-left" />
      <div className="hero-orb hero-orb-right" />
      <div className="section-shell relative grid items-center gap-14 pb-20 lg:grid-cols-[1.02fr_0.98fr] lg:gap-20 lg:pb-28">
        <motion.div initial={reducedMotion ? undefined : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: 'easeOut' }}>
          <div className="eyebrow"><span className="eyebrow-dot" />{siteData.focus}</div>
          <h1 className="mt-6 max-w-[680px] font-serif text-[clamp(3.5rem,8vw,7rem)] leading-[0.91] tracking-[-0.075em] text-[var(--ink)]">
            Wings of change,<br /><em>lives of strength.</em>
          </h1>
          <p className="mt-7 max-w-[570px] text-base leading-7 text-[var(--ink-soft)] sm:text-lg sm:leading-8">{siteData.description}</p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#donate-page" className={buttonVariants({ size: 'lg' })}>Support our mission <ArrowUpRight /></a>
            <a href="#programmes" className={buttonVariants({ size: 'lg', variant: 'secondary' })}>Explore programmes <ArrowDown /></a>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
            <span className="inline-flex items-center gap-2"><Sparkles className="size-4 text-[var(--saffron)]" /> Rooted in community</span>
            <span className="inline-flex items-center gap-2"><MessageCircle className="size-4 text-[var(--plum)]" /> Built for Bharat</span>
          </div>
        </motion.div>

        <motion.div initial={reducedMotion ? undefined : { opacity: 0, scale: 0.96, y: 18 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }} className="relative mx-auto w-full max-w-[580px] lg:ml-auto">
          <div className="absolute -left-4 top-14 z-20 hidden rounded-2xl border border-[var(--line)] bg-white/90 px-4 py-3 shadow-[0_12px_32px_rgba(74,45,74,0.1)] backdrop-blur sm:block">
            <div className="flex items-center gap-2 text-xs font-semibold text-[var(--plum)]"><span className="pulse-dot" /> WhatsApp chatbot live</div>
            <div className="mt-1 text-[0.68rem] text-[var(--muted)]">Free · Available across India</div>
          </div>
          <div className="relative aspect-[0.92] overflow-hidden rounded-[2.6rem] bg-[var(--blush)] shadow-[0_28px_80px_rgba(74,45,74,0.14)]">
            <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(105,53,101,0.12),transparent_55%)]" />
            <RemotePhoto src={siteData.people[0].image} alt="Parul Gupta, Founder and Director of Pankhini Foundation" fallbackLabel="P" className="h-full w-full object-cover object-top mix-blend-multiply opacity-95" />
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/60 bg-[rgba(253,250,246,0.86)] p-4 backdrop-blur-md sm:bottom-7 sm:left-7 sm:right-7">
              <div className="flex items-end justify-between gap-3">
                <div>
                  <div className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-[var(--plum)]">A foundation for</div>
                  <div className="mt-1 font-serif text-2xl leading-none tracking-[-0.045em] text-[var(--ink)]">girls who dream.</div>
                </div>
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[var(--saffron)] text-[var(--ink)]"><span className="font-serif text-xl">✦</span></div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-3 flex size-24 items-center justify-center rounded-full border-[10px] border-[var(--paper)] bg-[var(--saffron)] text-center shadow-[0_12px_30px_rgba(224,149,60,0.2)] sm:-right-7">
            <span className="text-[0.63rem] font-bold uppercase leading-[1.25] tracking-[0.12em] text-[var(--ink)]">UP<br />&amp; NCR</span>
          </div>
        </motion.div>
      </div>

      <div className="section-shell border-t border-[var(--line)] py-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-md text-sm leading-6 text-[var(--muted)]">Three tech-enabled programmes — built for Bharat, designed to scale across Uttar Pradesh and NCR.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--ink-soft)]">
            <span>MannSakhi</span><span>PadhoAage</span><span>NyayaSetu</span>
          </div>
        </div>
        <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-[var(--line)] pt-5 text-[0.64rem] font-bold uppercase tracking-[0.13em] text-[var(--muted)]">
          <span className="rounded-full border border-[var(--line-strong)] bg-white/60 px-3 py-1.5">Section 8 Company</span>
          <span className="rounded-full border border-[var(--line-strong)] bg-white/60 px-3 py-1.5">12A Registered</span>
          <span className="rounded-full border border-[var(--line-strong)] bg-white/60 px-3 py-1.5">80G Approved</span>
          <span className="ml-1 inline-flex items-center gap-1.5 text-[var(--plum)]"><span className="size-1.5 rounded-full bg-[#56a36c]" /> Recognised &amp; registered</span>
        </div>
      </div>
    </section>
  )
}
