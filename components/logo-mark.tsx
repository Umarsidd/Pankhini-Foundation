import { cn } from '@/lib/utils'

export function LogoMark({ className, compact = false }: { className?: string; compact?: boolean }) {
  return (
    <div className={cn('relative flex shrink-0 items-center justify-center rounded-full bg-[var(--plum)] text-white shadow-[0_8px_20px_rgba(105,53,101,0.18)]', compact ? 'size-9' : 'size-11', className)} aria-hidden="true">
      <span className={cn('font-serif font-bold leading-none', compact ? 'text-lg' : 'text-[1.7rem]')}>p</span>
      <span className={cn('absolute rounded-full border border-white/45', compact ? 'inset-1' : 'inset-[5px]')} />
      <span className={cn('absolute -right-0.5 top-1/2 -translate-y-1/2 rotate-45 bg-[var(--saffron)]', compact ? 'size-1.5' : 'size-2')} />
    </div>
  )
}

export function Wordmark({ light = false }: { light?: boolean }) {
  return (
    <span className={cn('font-serif text-[1.2rem] font-semibold tracking-[-0.04em]', light ? 'text-white' : 'text-[var(--ink)]')}>
      Pankhini <span className={cn('font-sans text-[0.65em] font-medium tracking-[0.04em]', light ? 'text-white/65' : 'text-[var(--muted)]')}>Foundation</span>
    </span>
  )
}
