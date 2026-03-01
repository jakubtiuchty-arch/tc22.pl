'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const specs = [
  { label: 'System operacyjny', value: 'Android (aktualizacja do Android 16)' },
  { label: 'Procesor', value: 'Qualcomm 5430 hex-core, 2,1 GHz' },
  { label: 'Wyświetlacz', value: '6,0" FHD+ (1080×2160), 450 nit, Gorilla Glass' },
  { label: 'Pamięć RAM / Flash', value: '6 GB / 64 GB lub 8 GB / 128 GB + microSD do 2 TB' },
  { label: 'Skaner', value: 'SE4710 (standard, do 35 cm) lub SE55 (advanced, 10 cm–7,6 m)' },
  { label: 'Kamera', value: '16 MP (tył, autofocus, LED) + 5 MP (przód)' },
  { label: 'Bateria', value: '3 800 mAh / 5 200 mAh, wymienna hot-swap, PowerPrecision' },
  { label: 'Wi-Fi', value: 'Wi-Fi 6/6E (802.11ax), 2×2 MU-MIMO, 2,4/5/6 GHz, do 2,4 Gbps' },
  { label: 'Bluetooth', value: 'Bluetooth 5.2' },
  { label: 'NFC', value: 'ISO 14443 A/B, Mifare, FeliCa, Apple VAS, Google SmartTap' },
  { label: 'USB', value: 'USB 3.1 Type-C SuperSpeed (data + charging)' },
  { label: 'IP / odporność', value: 'IP68 + IP65, MIL-STD-810H, tumble 500×0,5 m' },
  { label: 'Upadki', value: '1,5 m na beton (z etui ochronnym)' },
  { label: 'Temperatura pracy', value: '-10°C do +50°C' },
  { label: 'Temperatura składowania', value: '-40°C do +70°C' },
  { label: 'Wymiary', value: '165 × 76,3 × 12,5 mm' },
  { label: 'Waga', value: '236 g (z baterią standardową 3 800 mAh)' },
  { label: 'RFID UHF', value: 'Opcja: Zebra RFD40 Sled (przez eConnex lub BT)' },
  { label: 'Mobility DNA', value: 'DataWedge, StageNow, Device Tracker, LifeGuard' },
  { label: 'MDM', value: 'SOTI, VMware, Microsoft Intune, Zebra DNA Cloud' },
]

export default function Specyfikacja() {
  return (
    <section id="specyfikacja" className="py-16 md:py-24 bg-brand-50/50">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Pełna specyfikacja techniczna</h2>
          <p className="text-gray-600 mb-10">Zebra TC22 — dane techniczne z datasheet producenta (Zebra Technologies, 2024).</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="lg:col-span-2">
            <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
              {specs.map((s, i) => (
                <div key={s.label} className={`flex ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/60'} ${i < specs.length - 1 ? 'border-b border-gray-100' : ''}`}>
                  <div className="w-[40%] py-3 px-4 text-sm font-medium text-gray-600">{s.label}</div>
                  <div className="w-[60%] py-3 px-4 text-sm text-gray-900">{s.value}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="flex flex-col items-center gap-4">
            <Image src="/images/tc22_scanner_2.png" alt="Zebra TC22 — widok z boku, profil 12,5 mm z przyciskami skanowania" width={300} height={400} className="object-contain" />
            <div className="bg-white rounded-xl border border-gray-100 p-4 w-full">
              <h3 className="font-semibold text-gray-900 mb-2 text-sm">Dokumentacja</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://www.serwis-zebry.pl/instrukcje/zebra-tc22/instrukcja-po-polsku" target="_blank" rel="noopener" className="text-brand-600 hover:underline">Instrukcja obsługi (PL)</a>
                </li>
                <li>
                  <a href="https://www.zebra.com/us/en/support-downloads/mobile-computers/handheld/tc22-tc27.html" target="_blank" rel="noopener" className="text-brand-600 hover:underline">Datasheet Zebra (EN)</a>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
