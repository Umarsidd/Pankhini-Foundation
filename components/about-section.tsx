'use client'

import { ArrowUpRight, Check, Eye, Target } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import { siteData } from '@/lib/site-data'
import { RemotePhoto } from '@/components/remote-photo'
import { Button, buttonVariants } from '@/components/ui/button'

export function AboutSection() {
  const reducedMotion = useReducedMotion()

  return (
    <section id="about" className="section-shell section-pad">
      <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <motion.div initial={reducedMotion ? undefined : { opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.65 }} className="relative mx-auto w-full max-w-[510px]">
          <div className="absolute -left-5 top-10 h-40 w-40 rounded-full bg-[var(--saffron)]/25 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] bg-[var(--plum)] p-3 shadow-[0_22px_60px_rgba(74,45,74,0.12)]">
            <div className="relative aspect-[0.86] overflow-hidden rounded-[1.45rem]">
              <RemotePhoto src={siteData.people[1].image} alt={siteData.people[1].alt} fallbackLabel="J" className="h-full w-full object-cover object-top" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_52%,rgba(41,22,40,0.75))]" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white/65">NyayaSetu · Legal empowerment</div>
                <div className="mt-2 font-serif text-3xl leading-none tracking-[-0.05em]">Justice begins<br />with awareness.</div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-5 -right-4 max-w-[190px] rounded-2xl border border-[var(--line)] bg-white p-4 shadow-[0_14px_34px_rgba(74,45,74,0.1)] sm:-right-8">
            <div className="mb-2 flex size-8 items-center justify-center rounded-full bg-[var(--blush)] text-[var(--plum)]"><Eye className="size-4" /></div>
            <p className="text-xs font-semibold leading-5 text-[var(--ink)]">Built with communities, not for them.</p>
          </div>
        </motion.div>

        <motion.div initial={reducedMotion ? undefined : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.65, delay: 0.1 }}>
          <div className="eyebrow"><span className="eyebrow-dot" />The Pankhini point of view</div>
          <h2 className="section-title mt-5 max-w-xl">Every girl deserves to <em>fly.</em> Every woman, to lead.</h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-[var(--ink-soft)]">Pankhini stands with adolescent girls navigating school and identity, and women facing barriers in education, livelihood, and justice. We pair technology with the trust and texture of community.</p>
          <p className="mt-4 max-w-xl text-base leading-8 text-[var(--ink-soft)]">Our vision is simple: make opportunity, support, and rights awareness easier to reach — in the language, on the devices, and in the places people already use.</p>

          <div className="mt-9 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-[var(--line)] bg-[var(--blush)]/50 p-5">
              <div className="flex items-center gap-3"><div className="flex size-9 items-center justify-center rounded-xl bg-white text-[var(--plum)]"><Target className="size-4" /></div><span className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--plum)]">Our mission</span></div>
              <p className="mt-4 text-sm leading-6 text-[var(--ink-soft)]">{siteData.mission}</p>
            </div>
            <div className="rounded-2xl border border-[var(--line)] bg-[var(--sand)]/45 p-5">
              <div className="flex items-center gap-3"><div className="flex size-9 items-center justify-center rounded-xl bg-white text-[var(--saffron)]"><Eye className="size-4" /></div><span className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--plum)]">Our vision</span></div>
              <p className="mt-4 font-serif text-xl leading-7 tracking-[-0.035em] text-[var(--ink)]">{siteData.vision}</p>
            </div>
          </div>
          <a href="#programmes" className={`${buttonVariants({ variant: 'dark', size: 'default' })} mt-8`}>Meet our programmes <ArrowUpRight /></a>
        </motion.div>
      </div>

      <div className="mt-24 grid gap-4 border-t border-[var(--line)] pt-8 sm:grid-cols-3">
        {[
          ['Adolescent girls', '10–18', 'Emotional support, school retention, digital learning, and rights awareness.'],
          ['Young women', '18–35', 'Skill building, higher education access, legal empowerment, and economic opportunity.'],
          ['Community & families', 'Together', 'Engaging families, schools, and Anganwadi Centres so girls and women can thrive.'],
        ].map(([label, age, text], index) => (
          <div key={label} className="flex gap-4 rounded-2xl bg-white/65 p-4 sm:block sm:bg-transparent sm:p-0">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-[var(--blush)] font-serif text-lg text-[var(--plum)]">{index === 0 ? '01' : index === 1 ? '02' : '03'}</div>
            <div className="sm:mt-4"><div className="flex items-baseline gap-2"><h3 className="font-serif text-xl tracking-[-0.04em]">{label}</h3><span className="text-[0.65rem] font-bold uppercase tracking-[0.1em] text-[var(--muted)]">{age}</span></div><p className="mt-2 text-sm leading-6 text-[var(--muted)]">{text}</p></div>
          </div>
        ))}
      </div>
    </section>
  )
}
