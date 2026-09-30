'use client'

import { ArrowUpRight, BookOpen, HeartHandshake, Scale } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import { siteData, type Program } from '@/lib/site-data'
import { Card } from '@/components/ui/card'
import { buttonVariants } from '@/components/ui/button'

const icons = { heart: HeartHandshake, book: BookOpen, scale: Scale }

function ProgramCard({ program, index }: { program: Program; index: number }) {
  const reducedMotion = useReducedMotion()
  const Icon = icons[program.icon]

  return (
    <motion.div initial={reducedMotion ? undefined : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.55, delay: index * 0.08 }} whileHover={reducedMotion ? undefined : { y: -6 }}>
      <Card className="group relative flex h-full flex-col overflow-hidden p-0 transition-shadow duration-300 hover:shadow-[0_20px_50px_rgba(74,45,74,0.11)]">
        <div className={`relative h-3 w-full ${program.accent === 'plum' ? 'bg-[var(--plum)]' : program.accent === 'saffron' ? 'bg-[var(--saffron)]' : 'bg-[var(--ink)]'}`} />
        <div className="flex flex-1 flex-col p-6 sm:p-7">
          <div className="flex items-start justify-between gap-3">
            <div className={`flex size-12 items-center justify-center rounded-2xl ${program.accent === 'plum' ? 'bg-[var(--blush)] text-[var(--plum)]' : program.accent === 'saffron' ? 'bg-[var(--sand)] text-[#a96518]' : 'bg-[#eee9ed] text-[var(--ink)]'}`}><Icon className="size-5" strokeWidth={1.8} /></div>
            <span className="font-serif text-4xl leading-none tracking-[-0.08em] text-[var(--line-strong)]">{program.number}</span>
          </div>
          <div className="mt-7"><div className="text-[0.67rem] font-bold uppercase tracking-[0.16em] text-[var(--muted)]">{program.category}</div><h3 className="mt-2 font-serif text-3xl tracking-[-0.055em] text-[var(--ink)]">{program.name}</h3><div className="mt-1 text-xs font-medium text-[var(--plum)]">{program.hindi} <span className="mx-1 text-[var(--muted)]">·</span> {program.descriptor}</div></div>
          <p className="mt-5 text-sm leading-6 text-[var(--ink-soft)]">{program.description}</p>
          <ul className="mt-6 space-y-3 border-t border-[var(--line)] pt-5">
            {program.details.map((detail) => <li key={detail} className="flex gap-2 text-xs leading-5 text-[var(--muted)]"><span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[var(--saffron)]" />{detail}</li>)}
          </ul>
          <a href="#contact" className={`${buttonVariants({ variant: 'ghost', size: 'sm' })} mt-auto self-start px-0 pt-6 group-hover:text-[var(--plum)]`}>Learn more <ArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></a>
        </div>
      </Card>
    </motion.div>
  )
}

export function ProgramsSection() {
  return (
    <section id="programmes" className="bg-[var(--ink)] py-24 text-white sm:py-32">
      <div className="section-shell">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div><div className="eyebrow eyebrow-light"><span className="eyebrow-dot" />Three flagship programmes</div><h2 className="section-title mt-5 max-w-2xl text-white">Built for real lives.<br /><em>Designed for real change.</em></h2></div>
          <p className="max-w-sm text-sm leading-7 text-white/60">Each programme addresses a specific barrier — and uses technology to remove it at scale, for girls and women across UP and NCR.</p>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {siteData.programs.map((program, index) => <ProgramCard key={program.name} program={program} index={index} />)}
        </div>
        <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6"><div className="flex items-center gap-3"><span className="flex size-8 items-center justify-center rounded-full bg-[var(--saffron)] text-[var(--ink)]"><HeartHandshake className="size-4" /></span><p className="text-sm text-white/75">All three programmes are designed to work together — emotional, educational, and legal support.</p></div><a href="#approach" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[var(--saffron)]">See how we work <ArrowUpRight className="size-4" /></a></div>
      </div>
    </section>
  )
}
