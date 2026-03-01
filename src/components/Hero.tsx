'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowDown, Shield, Wifi, Scan } from 'lucide-react'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-gradient-to-br from-brand-50 via-white to-brand-50 pt-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-6 w-full grid lg:grid-cols-2 gap-8 lg:gap-12 items-center py-12">
        {/* Text */}
        <div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 bg-brand-100 text-brand-700 text-xs font-semibold rounded-full">Następca TC21</span>
            <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">Dostępny</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
            Zebra TC22
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-lg md:text-xl text-gray-600 mb-2">
            Terminal mobilny z Wi-Fi 6E i skanerem 1D/2D
          </motion.p>

          {/* GEO: Answer Box — self-contained passage for AI citation */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="bg-white/80 border border-brand-100 rounded-xl p-4 mb-6">
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong>Zebra TC22</strong> to wytrzymały terminal mobilny klasy enterprise z ekranem 6&quot; FHD+ (1080×2160) i procesorem Qualcomm 5430 2,1 GHz. Skaner SE4710 odczytuje kody 1D/2D w 0,3 s — 5-10× szybciej niż aparat smartfona. Obudowa IP68 wytrzymuje upadki z 1,5 m na beton. Bateria 3 800 mAh hot-swap pracuje ~10 h. <strong>Cena: od 2 417 zł netto</strong>. Dystrybutor: TAKMA (partner Zebra od 2001 r.).
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.35 }} className="flex items-center gap-6 mb-6 text-sm text-gray-500">
            <span className="flex items-center gap-1.5"><Shield size={16} className="text-brand-600" /> IP68</span>
            <span className="flex items-center gap-1.5"><Wifi size={16} className="text-brand-600" /> Wi-Fi 6E</span>
            <span className="flex items-center gap-1.5"><Scan size={16} className="text-brand-600" /> SE55 do 7,6 m</span>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="flex flex-col sm:flex-row gap-3">
            <a href="#kontakt" className="px-6 py-3 bg-brand-600 text-white font-semibold rounded-lg hover:bg-brand-700 transition-colors text-center">
              Zapytaj o ofertę
            </a>
            <a href="#warianty" className="px-6 py-3 border border-brand-200 text-brand-700 font-semibold rounded-lg hover:bg-brand-50 transition-colors text-center">
              Zobacz warianty i ceny
            </a>
          </motion.div>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.5 }} className="mt-6 text-3xl font-bold text-brand-700">
            od 2 417 zł <span className="text-base font-normal text-gray-400">netto</span>
          </motion.p>
        </div>

        {/* Image */}
        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.3 }} className="relative flex justify-center">
          <div className="relative">
            <Image src="/images/tc22_scanner_1.png" alt="Zebra TC22 — widok z przodu, ekran 6 cali FHD+ z Corning Gorilla Glass" width={500} height={600} className="object-contain drop-shadow-2xl" priority />
            {/* Shine effect */}
            <motion.div initial={{ x: '-100%', y: '-100%' }} animate={{ x: '100%', y: '100%' }} transition={{ delay: 1.5, duration: 1.2, ease: 'easeInOut' }} className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/30 to-white/0 pointer-events-none" />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <a href="#dla-kogo" className="flex flex-col items-center text-gray-400 hover:text-brand-600 transition-colors">
          <span className="text-xs mb-1">Przewiń</span>
          <ArrowDown size={20} className="animate-bounce" />
        </a>
      </motion.div>
    </section>
  )
}
