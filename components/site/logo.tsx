import Image from 'next/image'
import { cn } from '@/lib/utils'

export function Logo({ className }: { className?: string; inverted?: boolean }) {
  return (
    <span className={cn('flex items-center', className)}>
      <Image
        src="/images/logo.png"
        alt="Jar Of Punjab"
        width={545}
        height={726}
        priority
        className="h-16 w-auto drop-shadow-sm"
      />
    </span>
  )
}
