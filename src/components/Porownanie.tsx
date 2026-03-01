'use client'

import { motion } from 'framer-motion'
import { Check, X, Minus } from 'lucide-react'

const models = [
  { name: 'Zebra TC22', highlight: true, specs: { 'Łączność': 'Wi-Fi 6/6E', 'Procesor': 'Qualcomm 5430, 2.1 GHz', 'Ekran': '6" FHD+ (1080×2160)', 'Skaner': 'SE4710 lub SE55 (7,6 m)', 'IP': 'IP68/IP65', 'Upadki': '1,5 m na beton', 'Bateria': '3 800 / 5 200 mAh', 'Hot-swap': true, 'RAM / Flash': '6/64 lub 8/128 GB', 'Android': 'Do Android 16', 'NFC': true, '5G/GPS': false, 'RFID': 'Opcja (RFD40 sled)', 'Waga': '236 g', 'Cena od': '2 417 zł', 'Mobility DNA': true } },
  { name: 'Zebra TC27', highlight: false, specs: { 'Łączność': 'Wi-Fi 6/6E + 5G + GPS', 'Procesor': 'Qualcomm 5430, 2.1 GHz', 'Ekran': '6" FHD+ (1080×2160)', 'Skaner': 'SE4710 lub SE55 (7,6 m)', 'IP': 'IP68/IP65', 'Upadki': '1,5 m na beton', 'Bateria': '3 800 / 5 200 mAh', 'Hot-swap': true, 'RAM / Flash': '6/64 lub 8/128 GB', 'Android': 'Do Android 16', 'NFC': true, '5G/GPS': true, 'RFID': 'Opcja (RFD40 sled)', 'Waga': '248 g', 'Cena od': '3 254 zł', 'Mobility DNA': true } },
  { name: 'Honeywell CT32', highlight: false, specs: { 'Łączność': 'Wi-Fi 6E', 'Procesor': 'QCS4490, 2.4 GHz', 'Ekran': '6" FHD (1080×2160)', 'Skaner': 'S0703 lub FlexRange (11 m)', 'IP': 'IP65/IP68', 'Upadki': '1,8 m (z bootem)', 'Bateria': '4 500 mAh', 'Hot-swap': true, 'RAM / Flash': '6/128 lub 8/128 GB', 'Android': 'Do Android 18', 'NFC': true, '5G/GPS': 'Opcja (X1N)', 'RFID': 'Brak', 'Waga': '269 g', 'Cena od': '3 389 zł', 'Mobility DNA': false } },
  { name: 'Zebra TC53e', highlight: false, specs: { 'Łączność': 'Wi-Fi 6E', 'Procesor': 'QCS4490, 2.4 GHz', 'Ekran': '6" FHD+ (1080×2160)', 'Skaner': 'SE4720 lub SE55', 'IP': 'IP68/IP65', 'Upadki': '1,5 m na beton', 'Bateria': '4 680 / 7 000 mAh', 'Hot-swap': true, 'RAM / Flash': '6/64 lub 8/128 GB', 'Android': 'Do Android 17', 'NFC': true, '5G/GPS': false, 'RFID': 'Opcja (RFD40)', 'Waga': '291 g', 'Cena od': '~4 500 zł', 'Mobility DNA': true } },
]

const rows = ['Łączność', 'Procesor', 'Ekran', 'Skaner', 'IP', 'Upadki', 'Bateria', 'Hot-swap', 'RAM / Flash', 'Android', 'NFC', '5G/GPS', 'RFID', 'Waga', 'Cena od', 'Mobility DNA'] as const

function CellValue({ val }: { val: string | boolean }) {
  if (val === true) return <Check size={16} className="text-green-600 mx-auto" />
  if (val === false) return <X size={16} className="text-gray-300 mx-auto" />
  if (val === 'Brak') return <Minus size={16} className="text-gray-300 mx-auto" />
  return <span>{val as string}</span>
}

export default function Porownanie() {
  return (
    <section id="porownanie" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Zebra TC22 vs TC27 vs CT32 vs TC53e</h2>
          <p className="text-gray-600 mb-8 max-w-3xl">Jedyne takie porównanie w Polsce. Zebra TC22 na tle głównych konkurentów w segmencie terminali mobilnych 6&quot; — z cenami netto i kluczowymi parametrami.</p>
        </motion.div>

        {/* GEO: Comparison passage for AI citation */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="bg-brand-50 border border-brand-100 rounded-xl p-4 mb-8 text-sm text-gray-700 leading-relaxed">
          <strong>Zebra TC22 vs TC27:</strong> Jedyna różnica to łączność — TC22 (od 2 417 zł) działa wyłącznie przez Wi-Fi 6/6E, TC27 (od 3 254 zł) dodaje 5G/LTE z dual SIM i GPS. <strong>TC22 vs Honeywell CT32:</strong> TC22 jest lżejszy (236 vs 269 g), tańszy i ma ekosystem Mobility DNA. CT32 ma dłuższą ścieżkę Android (14→18) i skaner FlexRange do 11 m. <strong>TC22 vs TC53e:</strong> TC53e to klasa wyższa — większa bateria (4 680 mAh), dłuższy Android (do v17), ale o ~85% droższa.
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="overflow-x-auto">
          <table className="w-full text-sm border-collapse min-w-[700px]">
            <thead>
              <tr>
                <th className="text-left py-3 px-3 bg-gray-50 text-gray-500 font-medium rounded-tl-lg">Parametr</th>
                {models.map(m => (
                  <th key={m.name} className={`py-3 px-3 text-center font-semibold ${m.highlight ? 'bg-brand-600 text-white rounded-t-lg' : 'bg-gray-50 text-gray-700'}`}>
                    {m.name}
                    {m.highlight && <span className="block text-[10px] font-normal opacity-80 mt-0.5">Rekomendowany</span>}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, ri) => (
                <tr key={row} className={ri % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                  <td className="py-2.5 px-3 text-gray-600 font-medium border-b border-gray-100">{row}</td>
                  {models.map(m => (
                    <td key={m.name + row} className={`py-2.5 px-3 text-center border-b border-gray-100 ${m.highlight ? 'bg-brand-50/50 font-medium text-gray-900' : 'text-gray-700'}`}>
                      <CellValue val={m.specs[row as keyof typeof m.specs]} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  )
}
