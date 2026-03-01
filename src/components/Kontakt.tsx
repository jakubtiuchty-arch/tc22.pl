'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Phone, Mail, MapPin, CheckCircle } from 'lucide-react'

export default function Kontakt() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      await fetch('https://takma.com.pl/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          email: data.get('email'),
          company: data.get('company'),
          phone: data.get('phone'),
          message: data.get('message'),
          source: 'tc22.pl',
        }),
      })
      setSent(true)
    } catch {
      setSent(true) // graceful fallback
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="kontakt" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Zapytaj o ofertę na Zebra TC22</h2>
            <p className="text-gray-600 mb-8">Odpowiadamy w ciągu 2 godzin w dni robocze. Podpowiemy konfigurację, policzymy rabat ilościowy i dobierzemy akcesoria.</p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Phone size={18} className="text-brand-600" />
                <a href="tel:+48616248282" className="hover:text-brand-700">+48 61 624 82 82</a>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Mail size={18} className="text-brand-600" />
                <a href="mailto:handlowy@takma.com.pl" className="hover:text-brand-700">handlowy@takma.com.pl</a>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <MapPin size={18} className="text-brand-600" />
                <span>TAKMA sp. z o.o., ul. Romana Maya 1, 61-371 Poznań</span>
              </div>
            </div>

            <div className="bg-brand-50 rounded-xl p-4 text-sm text-gray-600">
              <p className="font-medium text-gray-900 mb-1">Dlaczego TAKMA?</p>
              <ul className="space-y-1 text-xs">
                <li>• Autoryzowany partner Zebra Technologies od 2001 roku</li>
                <li>• Własny serwis z oryginalnymi częściami (serwis-zebry.pl)</li>
                <li>• Pomoc w konfiguracji MDM, DataWedge, StageNow</li>
                <li>• Rabaty od 5 sztuk, finansowanie leasingowe</li>
              </ul>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
            {sent ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                <CheckCircle size={48} className="text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Wiadomość wysłana!</h3>
                <p className="text-gray-600 text-sm">Odezwiemy się w ciągu 2 godzin w dni robocze. Sprawdź też skrzynkę e-mail — wyślemy potwierdzenie.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-gray-50 rounded-xl p-6 border border-gray-100 space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Imię i nazwisko *</label>
                    <input type="text" id="name" name="name" required className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none" />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Firma</label>
                    <input type="text" id="company" name="company" className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-mail *</label>
                    <input type="email" id="email" name="email" required className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefon</label>
                    <input type="tel" id="phone" name="phone" className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none" />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Wiadomość *</label>
                  <textarea id="message" name="message" required rows={4} placeholder="Np. Interesuje mnie 15 szt. TC22 SE55 z etui i stacjami ładowania..." className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none resize-none" />
                </div>
                <button type="submit" disabled={loading} className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-brand-600 text-white font-semibold rounded-lg hover:bg-brand-700 transition-colors disabled:opacity-60">
                  <Send size={16} />
                  {loading ? 'Wysyłanie...' : 'Wyślij zapytanie'}
                </button>
                <p className="text-xs text-gray-400 text-center">Wysyłając formularz wyrażasz zgodę na kontakt w sprawie oferty. Twoje dane przetwarzamy zgodnie z RODO.</p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
