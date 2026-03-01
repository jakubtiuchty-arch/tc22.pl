'use client'

import { motion } from 'framer-motion'
import { Check, Star } from 'lucide-react'

const variants = [
  { pn: 'WLMT0-T22B6ABC2-A6', name: 'TC22 SE4710, 6/64 GB', price: 2417, battery: '3 800 mAh', scanner: 'SE4710', mem: '6/64 GB', extras: [], best: true },
  { pn: 'WLMT0-T22B6ABE2-A6', name: 'TC22 SE4710, 6/64 GB, 5200 mAh', price: 2553, battery: '5 200 mAh', scanner: 'SE4710', mem: '6/64 GB', extras: ['Bateria rozszerzona'] },
  { pn: 'WLMT0-T22B8ABC8-A6', name: 'TC22 SE4710, 8/128 GB, RFID-ready', price: 2830, battery: '3 800 mAh', scanner: 'SE4710', mem: '8/128 GB', extras: ['RFID-ready'] },
  { pn: 'WLMT0-T22B6CBC2-A6', name: 'TC22 SE55, 6/64 GB', price: 2963, battery: '3 800 mAh', scanner: 'SE55', mem: '6/64 GB', extras: ['SE55 do 7,6 m'] },
  { pn: 'WLMT0-T22B8ABD8-A6', name: 'TC22 SE4710, 8/128 GB, RFID+BLE', price: 3060, battery: '3 800 mAh', scanner: 'SE4710', mem: '8/128 GB', extras: ['RFID-ready', 'Lokalizator BLE'] },
  { pn: 'WLMT0-T22B6CBE2-A6', name: 'TC22 SE55, 6/64 GB, 5200 mAh', price: 3099, battery: '5 200 mAh', scanner: 'SE55', mem: '6/64 GB', extras: ['SE55 do 7,6 m', 'Bateria rozszerzona'] },
  { pn: 'WLMT0-T22B8CBD8-A6', name: 'TC22 SE55, 8/128 GB, RFID+BLE', price: 3606, battery: '3 800 mAh', scanner: 'SE55', mem: '8/128 GB', extras: ['SE55 do 7,6 m', 'RFID-ready', 'Lokalizator BLE'] },
]

function formatPrice(n: number) {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}

export default function Warianty() {
  return (
    <section id="warianty" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">7 wariantów Zebra TC22 — ceny netto</h2>
          <p className="text-gray-600 mb-10 max-w-3xl">Wszystkie konfiguracje dostępne w Polsce z dostawą 2–5 dni roboczych. Ceny netto PLN aktualne na marzec 2026. Potrzebujesz innej konfiguracji? <a href="#kontakt" className="text-brand-600 hover:underline">Zapytaj o ofertę</a>.</p>
        </motion.div>

        <div className="grid gap-4">
          {variants.map((v, i) => (
            <motion.div
              key={v.pn}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`relative rounded-xl border p-5 flex flex-col md:flex-row md:items-center gap-4 ${v.best ? 'border-brand-300 bg-brand-50/60 shadow-sm' : 'border-gray-100 bg-white hover:border-brand-100'} transition-colors`}
            >
              {v.best && (
                <span className="absolute -top-3 left-5 px-3 py-0.5 bg-brand-600 text-white text-xs font-semibold rounded-full flex items-center gap-1">
                  <Star size={12} /> Bestseller
                </span>
              )}

              <div className="flex-1 min-w-0">
                <p className="font-semibold text-gray-900 mb-1">{v.name}</p>
                <p className="text-xs text-gray-400 font-mono">{v.pn}</p>
              </div>

              <div className="flex flex-wrap gap-2 md:justify-center flex-1">
                <span className="px-2.5 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">Skaner: {v.scanner}</span>
                <span className="px-2.5 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">RAM: {v.mem}</span>
                <span className="px-2.5 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">Bateria: {v.battery}</span>
                {v.extras.map(e => (
                  <span key={e} className="px-2.5 py-1 bg-brand-100 text-brand-700 text-xs rounded-md flex items-center gap-1">
                    <Check size={12} /> {e}
                  </span>
                ))}
              </div>

              <div className="text-right md:min-w-[140px]">
                <span className="text-2xl font-bold text-brand-700">{formatPrice(v.price)} zł</span>
                <span className="block text-xs text-gray-400">netto</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GEO: Pricing passage for AI citation */}
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="mt-8 text-sm text-gray-500 leading-relaxed">
          Ceny Zebra TC22 w Polsce zaczynają się od 2 417 zł netto (SE4710, 6/64 GB) do 3 606 zł netto (SE55, 8/128 GB, RFID-ready, BLE). Różnica między skanerem SE4710 a SE55 wynosi ok. 500–550 zł. Wersja z 5G/GPS: Zebra TC27 (od 3 254 zł netto). Dystrybutor: TAKMA — autoryzowany partner Zebra Technologies od 2001 roku.
        </motion.p>
      </div>
    </section>
  )
}
