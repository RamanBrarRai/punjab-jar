import Image from 'next/image'
import { cn } from '@/lib/utils'

export function Logo({ className, imageClassName }: { className?: string; imageClassName?: string }) {
  return (
    <span className={cn('flex items-center', className)}>
      <Image
        src="/images/logo.png"
        alt="Jar Of Punjab"
        width={545}
        height={726}
        priority
        className={cn('h-12 w-auto md:h-14', imageClassName)}
      />
    </span>
  )
}
