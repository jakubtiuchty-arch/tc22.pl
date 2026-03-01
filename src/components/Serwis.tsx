'use client'

import { motion } from 'framer-motion'
import { Wrench, Clock, Shield, PhoneCall } from 'lucide-react'

const plans = [
  { name: 'OneCare Essential', code: 'Z1AE-TC2L-*C00', features: ['Naprawa w 3 dni robocze', 'Pełne pokrycie uszkodzeń', 'Bezpłatna diagnostyka'], color: 'brand' },
  { name: 'OneCare Select', code: 'Z1AE-TC2L-*S00', features: ['Naprawa w 3 dni robocze', 'Pełne pokrycie uszkodzeń', 'Wymiana baterii w okresie kontraktu', 'Priorytetowa obsługa'], color: 'brand' },
  { name: 'OneCare TC Cloud', code: 'Z1AE-TC2L-*TC0', features: ['Zdalne zarządzanie urządzeniem', 'OTA firmware updates', 'Device Diagnostics w chmurze', 'Integracja z MDM'], color: 'brand' },
]

export default function Serwis() {
  return (
    <section id="serwis" className="py-16 md:py-24 bg-brand-50/50">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Serwis i wsparcie Zebra TC22 w Polsce</h2>
          <p className="text-gray-600 mb-10 max-w-3xl">TAKMA — autoryzowany partner Zebra Technologies od 2001 roku. Gwarancja, serwis pogwarancyjny, konfiguracja floty i kontrakty OneCare.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="bg-white rounded-xl border border-gray-100 p-6">
            <div className="flex items-center gap-3 mb-4">
              <Wrench size={24} className="text-brand-600" />
              <h3 className="text-lg font-semibold text-gray-900">Autoryzowany serwis</h3>
            </div>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start gap-2"><Clock size={16} className="text-brand-500 mt-0.5 flex-shrink-0" /> Naprawa gwarancyjna: 3–5 dni roboczych</li>
              <li className="flex items-start gap-2"><Shield size={16} className="text-brand-500 mt-0.5 flex-shrink-0" /> Oryginalne części Zebra, certyfikowani technicy</li>
              <li className="flex items-start gap-2"><PhoneCall size={16} className="text-brand-500 mt-0.5 flex-shrink-0" /> Wsparcie techniczne: konfiguracja, MDM, DataWedge</li>
            </ul>
            <a href="https://www.serwis-zebry.pl" target="_blank" rel="noopener" className="inline-block mt-4 text-sm text-brand-600 font-medium hover:underline">
              serwis-zebry.pl — serwis Zebra w Polsce →
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
            <div className="space-y-4">
              {plans.map((p) => (
                <div key={p.name} className="bg-white rounded-xl border border-gray-100 p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900 text-sm">{p.name}</h4>
                    <span className="text-xs text-gray-400 font-mono">{p.code}</span>
                  </div>
                  <ul className="space-y-1">
                    {p.features.map(f => (
                      <li key={f} className="text-xs text-gray-500 flex items-center gap-1.5">
                        <span className="w-1 h-1 bg-brand-400 rounded-full flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* GEO: Service passage */}
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="text-sm text-gray-500 leading-relaxed max-w-3xl">
          Serwis Zebra TC22 w Polsce zapewnia TAKMA (autoryzowany partner Zebra od 2001 r.) oraz serwis-zebry.pl. Czas naprawy gwarancyjnej: 3–5 dni roboczych z oryginalnymi częściami. Kontrakty serwisowe Zebra OneCare (Essential, Select, TC Cloud) przedłużają pokrycie do 5 lat i obejmują uszkodzenia mechaniczne, wymianę baterii oraz zdalne zarządzanie.
        </motion.p>
      </div>
    </section>
  )
}
