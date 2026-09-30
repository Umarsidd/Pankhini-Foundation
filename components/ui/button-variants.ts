import { cva } from 'class-variance-authority'

export const buttonVariants = cva(
  'inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold tracking-[-0.01em] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--plum)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        primary: 'bg-[var(--plum)] text-white shadow-[0_10px_24px_rgba(105,53,101,0.18)] hover:-translate-y-0.5 hover:bg-[var(--plum-deep)] hover:shadow-[0_14px_30px_rgba(105,53,101,0.25)]',
        secondary: 'border border-[var(--line-strong)] bg-white/80 text-[var(--ink)] hover:-translate-y-0.5 hover:border-[var(--plum)] hover:bg-[var(--blush)]',
        dark: 'bg-[var(--ink)] text-white shadow-[0_10px_24px_rgba(28,24,31,0.15)] hover:-translate-y-0.5 hover:bg-[#302733]',
        ghost: 'text-[var(--ink-soft)] hover:bg-[var(--blush)] hover:text-[var(--plum)]',
        saffron: 'bg-[var(--saffron)] text-[var(--ink)] shadow-[0_10px_24px_rgba(224,149,60,0.2)] hover:-translate-y-0.5 hover:bg-[#eaa25a]',
      },
      size: {
        sm: 'h-9 px-4 text-xs',
        default: 'h-11 px-5',
        lg: 'h-[3.25rem] px-6 text-[0.9375rem]',
        icon: 'size-10',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  },
)
