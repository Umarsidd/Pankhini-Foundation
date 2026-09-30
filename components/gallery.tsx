'use client'

import { ArrowUpRight, MessageCircle, QrCode } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import { siteData } from '@/lib/site-data'
import { RemotePhoto } from '@/components/remote-photo'

export function Gallery() {
  const reducedMotion = useReducedMotion()

  return (
    <section id="whatsapp" className="section-shell pb-24 sm:pb-32">
      <motion.div initial={reducedMotion ? undefined : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid items-stretch gap-5 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative overflow-hidden rounded-[2rem] bg-[var(--plum)] p-7 text-white sm:p-10"><div className="absolute -right-16 -top-16 size-64 rounded-full border border-white/10" /><div className="absolute -right-4 -top-4 size-40 rounded-full border border-white/10" /><div className="relative z-10 flex h-full flex-col justify-between gap-16"><div><div className="eyebrow eyebrow-light"><span className="eyebrow-dot" />Now live · Free resource</div><h2 className="mt-5 max-w-lg font-serif text-[clamp(2.3rem,5vw,4.25rem)] leading-[0.95] tracking-[-0.07em]">Learn, ask &amp; grow — <em>on WhatsApp.</em></h2><p className="mt-6 max-w-md text-sm leading-7 text-white/70">Our interactive WhatsApp chatbot brings safety and wellbeing education straight to your phone — in a simple, private, judgement-free conversation.</p></div><div><div className="flex flex-wrap gap-2">{['Good touch · bad touch', 'Emotional wellbeing', 'Menstruation hygiene', 'Online safety', 'Self defence'].map((item) => <span key={item} className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[0.65rem] font-semibold text-white/80">{item}</span>)}</div><a href={siteData.whatsappHref} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-full bg-[var(--saffron)] px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#eaa25a]">Chat with us on WhatsApp <ArrowUpRight className="size-4" /></a></div></div></div>
        <div className="grid gap-5 sm:grid-cols-[0.9fr_1.1fr] lg:grid-cols-1">
          <div className="relative overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[var(--sand)] p-6 sm:p-8"><div className="flex items-start justify-between"><div><div className="eyebrow"><span className="eyebrow-dot" />A safe first step</div><h3 className="mt-4 max-w-xs font-serif text-3xl leading-[1] tracking-[-0.055em]">One message can open a door.</h3></div><MessageCircle className="size-7 text-[var(--plum)]" /></div><p className="mt-7 max-w-md text-sm leading-6 text-[var(--ink-soft)]">Just say <strong>“Hi”</strong> to <strong>{siteData.whatsappNumber}</strong> on WhatsApp to begin. Free · Available across India.</p></div>
          <div className="flex items-center gap-7 overflow-hidden rounded-[2rem] border border-[var(--line)] bg-white p-6 sm:p-8"><div className="shrink-0 rounded-2xl bg-white p-2 shadow-[0_8px_24px_rgba(74,45,74,0.1)]"><RemotePhoto src="https://pankhinifoundation.org/whatsapp-qr.png" alt="QR code to chat with Pankhini Foundation on WhatsApp" fallbackLabel="QR" className="size-28 object-contain sm:size-36" /></div><div><QrCode className="size-5 text-[var(--plum)]" /><h3 className="mt-3 font-serif text-2xl leading-none tracking-[-0.05em]">Scan to start chatting</h3><p className="mt-3 text-xs leading-5 text-[var(--muted)]">A private, simple conversation — built for girls, women, and parents.</p></div></div>
        </div>
      </motion.div>
    </section>
  )
}
