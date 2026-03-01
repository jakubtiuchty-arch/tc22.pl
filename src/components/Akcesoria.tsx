'use client'

import { motion } from 'framer-motion'
import { Battery, Dock, Shield, Grip, Cable, ExternalLink } from 'lucide-react'

const accessories = [
  { icon: Battery, name: 'Bateria 3 800 mAh', pn: 'BTRY-TC2L-2XMAXX-01', desc: 'Standardowa bateria wymienna hot-swap, ~10 h pracy', link: 'zebra-battery-tc2-standard' },
  { icon: Battery, name: 'Bateria 5 200 mAh', pn: 'BTRY-TC2L-3XMAXX-01', desc: 'Rozszerzona bateria, ~14 h pracy, ten sam rozmiar etui', link: 'zebra-battery-tc2-extended' },
  { icon: Shield, name: 'Etui ochronne (boot)', pn: 'SG-TC2L-BOOT-01', desc: 'Gumowy bumper, zwiększa odporność na upadki z 1,5 do 1,8 m', link: 'zebra-boot-tc2' },
  { icon: Grip, name: 'Trigger handle', pn: 'TRG-TC2L-SNP1-01', desc: 'Rękojeść pistoletowa do intensywnego skanowania, snap-on', link: 'zebra-trigger-tc2' },
  { icon: Dock, name: 'Stacja ładowania 1-slot', pn: 'CRD-TC2L-BS1CO-01', desc: 'Ładowanie + USB/Ethernet, do biurka lub regału', link: 'zebra-cradle-tc2-1slot' },
  { icon: Dock, name: 'Stacja ładowania 5-slot', pn: 'CRD-TC2L-BS5CO-01', desc: '5 urządzeń jednocześnie, z Ethernet do każdego slotu', link: 'zebra-cradle-tc2-5slot' },
  { icon: Battery, name: 'Ładowarka 4 baterii', pn: 'SAC-TC2L-4SCHG-01', desc: '4 baterie naraz, LED status per slot', link: 'zebra-charger-tc2-4battery' },
  { icon: Cable, name: 'Zasilacz 50 W', pn: 'PWR-BGA12V50W0WW', desc: 'Do stacji 1-slot i ładowarki 4 baterii', link: 'zebra-psu-50w' },
]

export default function Akcesoria() {
  return (
    <section id="akcesoria" className="py-16 md:py-24 bg-brand-50/50">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Akcesoria do Zebra TC22</h2>
          <p className="text-gray-600 mb-10 max-w-3xl">Najważniejsze akcesoria z ekosystemu Zebra — pełna kompatybilność z TC22 i TC27. Wszystkie dostępne w <a href="https://takma.com.pl/terminale-mobilne" target="_blank" rel="noopener" className="text-brand-600 hover:underline">sklepie takma.com.pl</a>.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {accessories.map((a, i) => (
            <motion.a
              key={a.pn}
              href={`https://takma.com.pl/produkt/${a.link}`}
              target="_blank"
              rel="noopener"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-white rounded-xl border border-gray-100 p-4 hover:border-brand-200 hover:shadow-sm transition-all group"
            >
              <div className="flex items-start justify-between mb-2">
                <a.icon size={20} className="text-brand-600" />
                <ExternalLink size={14} className="text-gray-300 group-hover:text-brand-400 transition-colors" />
              </div>
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{a.name}</h3>
              <p className="text-xs text-gray-400 font-mono mb-2">{a.pn}</p>
              <p className="text-xs text-gray-500 leading-relaxed">{a.desc}</p>
            </motion.a>
          ))}
        </div>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="mt-6 text-center text-sm text-gray-500">
          Pełna lista 18 akcesoriów z cenami → <a href="https://takma.com.pl/produkt/zebra-tc22" target="_blank" rel="noopener" className="text-brand-600 hover:underline">takma.com.pl/produkt/zebra-tc22</a>
        </motion.p>
      </div>
    </section>
  )
}
