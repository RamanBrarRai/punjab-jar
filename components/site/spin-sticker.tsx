import { cn } from '@/lib/utils'

export function SpinSticker({
  text,
  className,
  center = '♥',
}: {
  text: string
  className?: string
  center?: React.ReactNode
}) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        'relative flex size-28 items-center justify-center rounded-full border-2 border-ink bg-pink text-white shadow-pop-sm md:size-36',
        className,
      )}
    >
      <svg viewBox="0 0 100 100" className="absolute inset-0 size-full animate-spin-slow">
        <defs>
          <path id="sticker-circle" d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0" />
        </defs>
        <text className="fill-current font-display text-[10.5px] font-bold uppercase tracking-[0.12em]">
          <textPath href="#sticker-circle">{text}</textPath>
        </text>
      </svg>
      <span className="font-display text-3xl font-extrabold text-marigold md:text-4xl">{center}</span>
    </div>
  )
}
