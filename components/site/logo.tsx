import { cn } from '@/lib/utils'

export function Logo({ className, inverted = false }: { className?: string; inverted?: boolean }) {
  return (
    <span className={cn('flex items-center gap-2.5', className)}>
      <span
        aria-hidden="true"
        className={cn(
          'flex size-9 items-center justify-center rounded-full font-serif text-lg italic',
          inverted ? 'bg-mustard text-forest' : 'bg-forest text-mustard',
        )}
      >
        J
      </span>
      <span className="flex flex-col leading-none">
        <span className={cn('font-serif text-xl font-semibold tracking-tight', inverted ? 'text-cream' : 'text-forest')}>
          Jar Of Punjab
        </span>
        <span
          className={cn(
            'mt-1 text-[10px] font-medium uppercase tracking-[0.25em]',
            inverted ? 'text-cream/60' : 'text-ink/60',
          )}
        >
          Ghar da Achaar
        </span>
      </span>
    </span>
  )
}
