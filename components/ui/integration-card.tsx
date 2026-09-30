'use client'

import { useId } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { BookOpen, HeartHandshake, Landmark, Scale, School, Sparkles, UsersRound } from 'lucide-react'
import type { EcosystemNode } from '@/lib/site-data'

const nodePositions = [
  { x: 130, y: 92 },
  { x: 470, y: 46 },
  { x: 830, y: 102 },
  { x: 118, y: 416 },
  { x: 480, y: 468 },
  { x: 842, y: 404 },
]

const iconMap = {
  community: UsersRound,
  volunteers: HeartHandshake,
  schools: School,
  education: BookOpen,
  wellbeing: Sparkles,
  legal: Scale,
} satisfies Record<EcosystemNode['icon'], typeof UsersRound>

function FoundationMark({ small = false }: { small?: boolean }) {
  return (
    <div className={`relative flex items-center justify-center rounded-full ${small ? 'size-10' : 'size-[5.75rem]'} bg-[var(--plum)] text-white shadow-[0_18px_40px_rgba(105,53,101,0.27)]`} aria-label="Pankhini Foundation">
      <span className={`font-serif font-bold leading-none ${small ? 'text-xl' : 'text-[2.8rem]'}`}>p</span>
      <span className={`absolute rounded-full border border-white/50 ${small ? 'inset-1' : 'inset-2'}`} />
      <span className={`absolute -right-1 top-1/2 -translate-y-1/2 rotate-45 bg-[var(--saffron)] ${small ? 'size-2' : 'size-3'}`} />
    </div>
  )
}

export function Integration({ nodes }: { nodes: readonly EcosystemNode[] }) {
  const rawId = useId()
  const id = rawId.replace(/[^a-zA-Z0-9_-]/g, '')
  const reducedMotion = useReducedMotion()

  return (
    <div className="relative mx-auto w-full max-w-[960px] overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[#fbf7f2] px-4 py-10 sm:px-8 sm:py-14">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_50%_0%,rgba(223,193,215,0.42),transparent_70%)]" />
      <div className="relative z-10 flex min-h-[22rem] items-center justify-center">
        <div className="relative flex flex-col items-center gap-4 text-center">
          <FoundationMark />
          <div>
            <div className="font-serif text-2xl tracking-[-0.04em] text-[var(--ink)]">Pankhini Foundation</div>
            <div className="mt-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[var(--plum)]">Wings of change</div>
          </div>
        </div>
      </div>

      <svg viewBox="0 0 960 520" className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true" preserveAspectRatio="none">
        <defs>
          <linearGradient id={`integration-gradient-${id}`} x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="var(--saffron)" stopOpacity="0.08" />
            <stop offset="50%" stopColor="var(--plum)" stopOpacity="0.55" />
            <stop offset="100%" stopColor="var(--plum)" stopOpacity="0.08" />
          </linearGradient>
        </defs>
        {nodePositions.map((position, index) => {
          const pathId = `integration-path-${id}-${index}`
          const controlX = (position.x + 480) / 2
          const controlY = (position.y + 260) / 2
          const path = `M ${position.x} ${position.y} Q ${controlX} ${controlY} 480 260`
          return (
            <g key={pathId}>
              <motion.path
                id={pathId}
                d={path}
                fill="none"
                stroke={`url(#integration-gradient-${id})`}
                strokeWidth="1.5"
                strokeDasharray="5 8"
                initial={reducedMotion ? { pathLength: 1, opacity: 0.46 } : { pathLength: 0, opacity: 0 }}
                animate={reducedMotion ? { pathLength: 1, opacity: 0.46 } : { pathLength: [0, 1], opacity: [0, 0.55, 0.28] }}
                transition={reducedMotion ? undefined : { duration: 1.4, delay: nodes[index]?.delay ?? 0, repeat: Infinity, repeatDelay: 3.4, ease: 'easeInOut' }}
              />
              {!reducedMotion && (
                <motion.circle
                  r="3"
                  fill="var(--saffron)"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.9, 0], offsetDistance: ['0%', '100%'] }}
                  transition={{ duration: 3.6, delay: (nodes[index]?.delay ?? 0) + 0.2, repeat: Infinity, repeatDelay: 1.2, ease: 'easeInOut' }}
                  style={{ offsetPath: `path('${path}')` }}
                />
              )}
            </g>
          )
        })}
      </svg>

      <div className="relative z-10 mt-10 grid grid-cols-2 gap-x-4 gap-y-7 sm:absolute sm:inset-0 sm:mt-0 sm:block">
        {nodes.map((node, index) => {
          const Icon = iconMap[node.icon]
          const position = nodePositions[index]
          return (
            <div
              key={node.label}
              className="flex items-center justify-center gap-2 sm:absolute sm:w-36 sm:-translate-x-1/2"
              style={{ left: `${(position.x / 960) * 100}%`, top: `${(position.y / 520) * 100}%` }}
            >
              <div className="flex size-9 shrink-0 items-center justify-center rounded-xl border border-[var(--line-strong)] bg-white text-[var(--plum)] shadow-sm">
                <Icon className="size-4" strokeWidth={1.8} />
              </div>
              <span className="text-left text-xs font-semibold leading-4 text-[var(--ink-soft)] sm:text-center">{node.label}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export { FoundationMark }
