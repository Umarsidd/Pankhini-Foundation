'use client'

import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { motion } from 'motion/react'
import { siteData } from '@/lib/site-data'
import { LogoMark, Wordmark } from '@/components/logo-mark'
import { Button } from '@/components/ui/button'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'border-b border-[var(--line)] bg-[rgba(253,250,246,0.88)] shadow-[0_10px_32px_rgba(74,45,74,0.07)] backdrop-blur-xl' : 'bg-transparent'}`}>
      <div className="section-shell flex h-[4.5rem] items-center justify-between">
        <a href="#top" className="flex items-center gap-3" aria-label="Pankhini Foundation home">
          <LogoMark compact />
          <Wordmark />
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {siteData.nav.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
          <Button size="sm" variant="primary" onClick={() => (window.location.hash = 'donate-page')}>
            Support our work <ArrowUpRight />
          </Button>
        </nav>

        <button type="button" className="flex size-10 items-center justify-center rounded-full border border-[var(--line-strong)] text-[var(--ink)] transition-colors hover:bg-[var(--blush)] lg:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen((value) => !value)}>
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} className="fixed inset-0 top-[4.5rem] z-40 overflow-y-auto bg-[radial-gradient(circle_at_top,_rgba(242,231,240,0.9),_rgba(253,250,246,1)_56%)] px-6 py-8 shadow-[0_12px_30px_rgba(32,27,33,0.08)] lg:hidden">
          <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
            {siteData.nav.map((item, index) => (
              <motion.a key={item.href} href={item.href} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.05 }} className="border-b border-[var(--line)] py-4 font-serif text-3xl tracking-[-0.04em] text-[var(--ink)]" onClick={() => setOpen(false)}>
                {item.label}
              </motion.a>
            ))}
            <a href="#donate-page" className="mt-7 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[var(--plum)] px-5 text-sm font-semibold text-white" onClick={() => setOpen(false)}>
              Support our work <ArrowUpRight className="size-4" />
            </a>
          </nav>
        </motion.div>
      )}
    </header>
  )
}
