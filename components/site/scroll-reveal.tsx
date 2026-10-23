'use client'

import { useEffect } from 'react'

export function ScrollReveal() {
  useEffect(() => {
    const observed = new WeakSet<Element>()
    let io: IntersectionObserver | null = null
    io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            io?.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )

    const observeAll = () => {
      document.querySelectorAll('[data-reveal]').forEach((el) => {
        if (observed.has(el)) return
        observed.add(el)
        io?.observe(el)
      })
    }

    observeAll()
    const mo = new MutationObserver(observeAll)
    mo.observe(document.body, { childList: true, subtree: true })

    return () => {
      io?.disconnect()
      mo.disconnect()
    }
  }, [])

  return null
}
