'use client'

import * as React from 'react'
import Image from 'next/image'
import { motion, useReducedMotion } from 'motion/react'
import { cn } from '@/lib/utils'

export type Testimonial = {
  text: string
  image: string
  name: string
  role: string
}

interface TestimonialsColumnProps {
  className?: string
  testimonials: Testimonial[]
  duration?: number
}

export function TestimonialsColumn({ className, testimonials, duration = 18 }: TestimonialsColumnProps) {
  const reducedMotion = useReducedMotion()
  const items = [...testimonials, ...testimonials]

  return (
    <div className={cn('relative h-[480px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)]', className)}>
      <motion.div
        animate={reducedMotion ? undefined : { y: ['0%', '-50%'] }}
        transition={reducedMotion ? undefined : { duration, repeat: Infinity, ease: 'linear' }}
        className="flex flex-col gap-4 py-2"
      >
        {items.map((testimonial, index) => (
          <figure key={`${testimonial.name}-${index}`} className="rounded-2xl border border-[var(--line)] bg-white p-5 shadow-[0_8px_24px_rgba(74,45,74,0.04)]">
            <blockquote className="text-sm leading-6 text-[var(--ink-soft)]">“{testimonial.text}”</blockquote>
            <figcaption className="mt-5 flex items-center gap-3">
              <Image src={testimonial.image} alt="" width={36} height={36} unoptimized className="size-9 rounded-full bg-[var(--blush)] object-cover" />
              <div>
                <div className="text-sm font-semibold text-[var(--ink)]">{testimonial.name}</div>
                <div className="text-xs text-[var(--muted)]">{testimonial.role}</div>
              </div>
            </figcaption>
          </figure>
        ))}
      </motion.div>
    </div>
  )
}
