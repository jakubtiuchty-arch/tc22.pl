'use client'

import { motion } from 'framer-motion'
import { Monitor, Wifi, ScanBarcode, Shield, Smartphone, BatteryCharging } from 'lucide-react'

const features = [
  { icon: Monitor, title: 'Ekran 6" FHD+', stat: '1080×2160', desc: 'Gorilla Glass, 450 nitów jasności, dotyk w rękawiczkach i deszczu. O 10% cieńsza obudowa niż TC21.' },
  { icon: Wifi, title: 'Wi-Fi 6E', stat: '2,4 Gbps', desc: 'Tri-band 2,4/5/6 GHz, 2×2 MU-MIMO. Stabilne połączenie w gęstych sieciach magazynowych z 50+ urządzeniami.' },
  { icon: ScanBarcode, title: 'Skaner SE55', stat: 'do 7,6 m', desc: 'Advanced Range z zieloną kropką. Skanuje kody na regałach do 7,6 m bez drabiny. Dekodowanie w 0,3 s.' },
  { icon: Shield, title: 'IP68 + MIL-STD', stat: '1,5 m drop', desc: 'Pyłoszczelny + zanurzenie 1 m/30 min. Upadki z 1,5 m na beton. 500 tumble. Temp. -10°C do +50°C.' },
  { icon: Smartphone, title: 'Android do v16', stat: '3 generacje OS', desc: 'Gwarancja aktualizacji + LifeGuard security patches. Mobility DNA: DataWedge, StageNow, Device Tracker — gratis.' },
  { icon: BatteryCharging, title: 'Hot-swap bateria', stat: '5 s wymiany', desc: 'Wymiana baterii bez wyłączania urządzenia. Standard 3 800 mAh (~10 h) lub rozszerzona 5 200 mAh (~14 h).' },
]

export default function Przewagi() {
  return (
    <section id="przewagi" className="py-16 md:py-24 bg-brand-50/50">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">6 przewag Zebra TC22</h2>
          <p className="text-gray-600 mb-10 max-w-2xl">Dlaczego TC22 zastąpił ponad milion urządzeń TC21 na całym świecie? Oto kluczowe ulepszenia trzeciej generacji serii TC2x.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-brand-100 rounded-lg flex items-center justify-center">
                  <f.icon size={20} className="text-brand-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{f.title}</h3>
                  <span className="text-xs font-bold text-brand-600">{f.stat}</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
