'use client'

import { useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

/**
 * Wraps an image with subtle 3D motion: pointer tilt, scroll parallax drift,
 * and a scroll-triggered reveal. Layout is unchanged (fills its parent).
 * All motion is disabled for users who prefer reduced motion.
 */
export function LiveImage({
  children,
  className,
  tilt = 6,
  drift = 14,
}: {
  children: React.ReactNode
  className?: string
  tilt?: number
  drift?: number
}) {
  const root = useRef<HTMLDivElement>(null)
  const inner = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = root.current
    const box = inner.current
    if (!el || !box) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.dataset.revealed = 'true'
      return
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.dataset.revealed = 'true'
          io.disconnect()
        }
      },
      { threshold: 0.15 },
    )
    io.observe(el)

    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect()
        const p = (r.top + r.height / 2 - window.innerHeight / 2) / window.innerHeight
        el.style.setProperty('--drift', `${Math.max(-1, Math.min(1, p)) * -drift}px`)
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    const onMove = (e: PointerEvent) => {
      if (e.pointerType === 'touch') return
      const r = el.getBoundingClientRect()
      const x = (e.clientX - r.left) / r.width - 0.5
      const y = (e.clientY - r.top) / r.height - 0.5
      box.style.transform = `perspective(900px) rotateY(${x * tilt}deg) rotateX(${-y * tilt}deg) scale(1.03)`
    }
    const onLeave = () => {
      box.style.transform = ''
    }
    el.addEventListener('pointermove', onMove)
    el.addEventListener('pointerleave', onLeave)

    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      el.removeEventListener('pointermove', onMove)
      el.removeEventListener('pointerleave', onLeave)
    }
  }, [tilt, drift])

  return (
    <div
      ref={root}
      data-revealed="false"
      className={cn(
        'live-image absolute inset-0 overflow-hidden',
        className,
      )}
    >
      <div
        ref={inner}
        className="live-image-inner h-full w-full will-change-transform"
      >
        {children}
      </div>
    </div>
  )
}
