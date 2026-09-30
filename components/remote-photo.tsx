'use client'

import Image from 'next/image'
import { useState } from 'react'
import { cn } from '@/lib/utils'

export function RemotePhoto({ src, alt, className, fallbackLabel }: { src: string; alt: string; className?: string; fallbackLabel: string }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div className={cn('flex items-center justify-center bg-[linear-gradient(135deg,#ead9e5,#f6e6c8)]', className)} role="img" aria-label={alt}>
        <span className="font-serif text-4xl text-[var(--plum)]/50">{fallbackLabel}</span>
      </div>
    )
  }

  return <Image src={src} alt={alt} width={1200} height={1200} sizes="(max-width: 768px) 100vw, 50vw" unoptimized className={cn('object-cover', className)} onError={() => setFailed(true)} />
}
