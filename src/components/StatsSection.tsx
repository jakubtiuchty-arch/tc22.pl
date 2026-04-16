'use client'

import { useMemo } from 'react'

export default function StatsSection() {
  const count = useMemo(() => {
    const baseDate = new Date('2025-01-01')
    const baseCount = 1000000
    const dailyIncrease = 120
    const today = new Date()
    const daysPassed = Math.floor((today.getTime() - baseDate.getTime()) / (1000 * 60 * 60 * 24))
    return baseCount + (daysPassed > 0 ? daysPassed * dailyIncrease : 0)
  }, [])

  return (
    <section className="bg-gradient-to-r from-brand-700 to-brand-800 text-white py-4 lg:py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center">
          <div>
            <p className="text-xs uppercase tracking-wider opacity-90 font-medium">Seria TC2x na świecie</p>
            <p className="text-4xl md:text-5xl font-extrabold mt-1 tracking-tight">
              {count.toLocaleString('pl-PL')}+
            </p>
            <p className="text-xs mt-1 opacity-90">wdrożonych urządzeń</p>
          </div>

          <div className="hidden md:block h-16 w-px bg-white/20" />

          <div className="text-sm opacity-90 max-w-md leading-relaxed text-brand-100">
            <p>
              Zebra TC22 to następca najpopularniejszego terminala mobilnego na świecie.
              Zaufały mu firmy w 180 krajach — od małych sklepów po globalne centra logistyczne.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
