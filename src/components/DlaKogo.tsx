'use client'

import { motion } from 'framer-motion'
import { ShoppingCart, Warehouse, Pill, Wrench, Package, Hotel } from 'lucide-react'

const sectors = [
  { icon: ShoppingCart, title: 'Retail', desc: 'Weryfikacja cen, stanów magazynowych, click&collect, obsługa klienta na sali sprzedaży. NFC do kart lojalnościowych Apple Wallet / Google Wallet.' },
  { icon: Warehouse, title: 'Magazyn i logistyka', desc: 'Kompletacja zamówień WMS, przyjęcia/wydania, inwentaryzacja. Skaner SE55 sięga etykiet na regałach do 7,6 m bez drabiny.' },
  { icon: Pill, title: 'Apteka i przychodnia', desc: 'Skanowanie kodów leków FMD, zarządzanie stanami, identyfikacja pacjentów. Obudowa IP68 odporna na dezynfekcję.' },
  { icon: Wrench, title: 'Serwis i produkcja', desc: 'Kontrola jakości, traceability komponentów, obsługa zleceń serwisowych. Android z MDM do integracji z systemem ERP.' },
  { icon: Package, title: 'E-commerce i fulfillment', desc: 'Obsługa zwrotów, skanowanie w strefie pakowni, zarządzanie stanami wielokanałowymi. USB-C do szybkiego ładowania między zmianami.' },
  { icon: Hotel, title: 'Hotelarstwo i gastronomia', desc: 'Mobile ordering, inwentaryzacja F&B, recepcja i obsługa gości. Waga 236 g — wygodna obsługa jedną ręką przez cały dzień.' },
]

export default function DlaKogo() {
  return (
    <section id="dla-kogo" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Dla kogo jest Zebra TC22?</h2>
          <p className="text-gray-600 mb-10 max-w-2xl">Terminal mobilny zaprojektowany dla małych i średnich firm szukających wytrzymałego urządzenia w cenie zbliżonej do smartfona — ale z wieloletnią żywotnością i profesjonalnym skanerem kodów.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} whileHover={{ y: -4 }} className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-brand-200 hover:shadow-sm transition-all">
              <s.icon size={28} className="text-brand-600 mb-3" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{s.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
