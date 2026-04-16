'use client'

import { ShoppingCart, Warehouse, Pill, Wrench, Package, Hotel } from 'lucide-react'

const sectors = [
  { icon: ShoppingCart, title: 'Retail' },
  { icon: Warehouse, title: 'Magazyn i logistyka' },
  { icon: Pill, title: 'Apteka i przychodnia' },
  { icon: Wrench, title: 'Serwis i produkcja' },
  { icon: Package, title: 'E-commerce' },
  { icon: Hotel, title: 'HoReCa' },
]

export default function DlaKogo() {
  return (
    <section id="dla-kogo" className="relative py-6 lg:py-8 bg-slate-900 border-b border-slate-800 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
          {sectors.map((s) => (
            <span key={s.title} className="inline-flex items-center gap-2 sm:gap-2.5 px-4 sm:px-5 py-2 sm:py-2.5 bg-slate-800 text-brand-500 text-sm sm:text-base font-semibold rounded-full border border-slate-700">
              <s.icon size={16} />
              {s.title}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
