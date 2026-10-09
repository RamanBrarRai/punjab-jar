import { cn } from '@/lib/utils'

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  tone = 'dark',
  className,
}: {
  eyebrow: string
  title: React.ReactNode
  description?: string
  align?: 'left' | 'center'
  tone?: 'dark' | 'light'
  className?: string
}) {
  const light = tone === 'light'
  return (
    <div className={cn(align === 'center' && 'mx-auto text-center', 'max-w-3xl', className)}>
      <p
        className={cn(
          'inline-block -rotate-1 rounded-full border-2 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em]',
          light ? 'border-cream bg-pink text-white' : 'border-ink bg-marigold text-ink',
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={cn(
          'mt-5 text-5xl font-extrabold leading-[0.95] tracking-tight md:text-7xl',
          light ? 'text-cream' : 'text-ink',
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-5 text-lg leading-relaxed text-pretty',
            align === 'center' && 'mx-auto',
            'max-w-xl',
            light ? 'text-cream/75' : 'text-ink/70',
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
