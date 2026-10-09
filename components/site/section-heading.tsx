import { cn } from '@/lib/utils'

export function SectionHeading({
  eyebrow,
  title,
  description,
  inverted = false,
  align = 'left',
}: {
  eyebrow: string
  title: React.ReactNode
  description?: string
  inverted?: boolean
  align?: 'left' | 'center'
}) {
  return (
    <div className={cn('max-w-3xl', align === 'center' && 'mx-auto text-center')}>
      <p
        className={cn(
          'flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em]',
          inverted ? 'text-mustard' : 'text-pink',
          align === 'center' && 'justify-center',
        )}
      >
        <span aria-hidden="true" className={cn('h-px w-10', inverted ? 'bg-mustard' : 'bg-pink')} />
        {eyebrow}
      </p>
      <h2
        className={cn(
          'mt-5 text-balance font-serif text-4xl font-medium leading-[1.05] tracking-tight md:text-6xl',
          inverted ? 'text-cream' : 'text-forest',
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cn('mt-5 text-pretty text-lg leading-relaxed', inverted ? 'text-cream/70' : 'text-ink/70')}>
          {description}
        </p>
      )}
    </div>
  )
}
