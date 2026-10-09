import { Flame } from 'lucide-react'
import { cn } from '@/lib/utils'

const labels = ['Mild', 'Medium', 'Fiery'] as const

export function HeatMeter({ heat, className }: { heat: 1 | 2 | 3; className?: string }) {
  return (
    <span className={cn('inline-flex items-center gap-1.5', className)}>
      <span className="flex" aria-hidden="true">
        {[1, 2, 3].map((level) => (
          <Flame
            key={level}
            className={cn('size-4', level <= heat ? 'fill-pink text-pink' : 'text-current opacity-25')}
          />
        ))}
      </span>
      <span className="text-xs font-bold uppercase tracking-wider">{labels[heat - 1]}</span>
    </span>
  )
}
