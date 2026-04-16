'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Calculator, TrendingDown, AlertTriangle } from 'lucide-react'

const TC22_PRICE = 2417
const SMARTPHONE_PRICE = 2500
const TC22_FAILURE_RATE = 0.03 // 3% per year
const SMARTPHONE_FAILURE_RATE = 0.25 // 25% per year
const TC22_REPAIR_COST = 600
const SMARTPHONE_REPAIR_COST = 800
const TC22_PRODUCTIVITY_GAIN = 0.15 // 15% more scans/day
const DAILY_SCAN_VALUE = 2.5 // PLN per scan saved

export default function TCOKalkulator() {
  const [devices, setDevices] = useState(10)
  const [years, setYears] = useState(5)

  const tco = useMemo(() => {
    const tc22Purchase = devices * TC22_PRICE
    const smartPurchase = devices * SMARTPHONE_PRICE
    const tc22Accessories = devices * 350
    const smartAccessories = devices * 200

    let tc22Repairs = 0
    let smartRepairs = 0
    let smartReplacements = 0

    for (let y = 0; y < years; y++) {
      const tc22Failures = Math.round(devices * TC22_FAILURE_RATE)
      const smartFailures = Math.round(devices * SMARTPHONE_FAILURE_RATE)
      tc22Repairs += tc22Failures * TC22_REPAIR_COST
      smartRepairs += smartFailures * SMARTPHONE_REPAIR_COST
      if (y > 0 && y % 2 === 0) {
        smartReplacements += devices * SMARTPHONE_PRICE
      }
    }

    const productivitySaving = devices * TC22_PRODUCTIVITY_GAIN * DAILY_SCAN_VALUE * 250 * years

    const tc22Total = tc22Purchase + tc22Accessories + tc22Repairs
    const smartTotal = smartPurchase + smartAccessories + smartRepairs + smartReplacements

    return {
      tc22Total,
      smartTotal,
      tc22PerDevice: Math.round(tc22Total / devices / years),
      smartPerDevice: Math.round(smartTotal / devices / years),
      saving: smartTotal - tc22Total,
      savingPercent: Math.round(((smartTotal - tc22Total) / smartTotal) * 100),
      productivitySaving: Math.round(productivitySaving),
      tc22Purchase,
      smartPurchase,
      tc22Repairs,
      smartRepairs,
      smartReplacements,
    }
  }, [devices, years])

  function fmt(n: number) {
    return Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
  }

  return (
    <section id="tco" className="py-12 lg:py-20 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
              Kalkulator TCO: TC22 vs smartfon
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600">
              Całkowity koszt posiadania — porównanie terminala Zebra TC22 ze smartfonem konsumenckim. Uwzględnia zakup, akcesoria, naprawy i wymianę sprzętu.
            </p>
          </div>
        </motion.div>

        {/* Sliders */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="bg-white rounded-2xl border border-slate-200 p-6 mb-8 grid md:grid-cols-2 gap-8">
          <div>
            <label className="flex items-center justify-between text-sm font-medium text-slate-700 mb-2">
              <span>Liczba urządzeń</span>
              <span className="text-brand-700 font-bold text-lg">{devices}</span>
            </label>
            <input type="range" min={1} max={100} step={1} value={devices} onChange={e => setDevices(+e.target.value)} className="w-full accent-brand-600 range-slider" />
            <div className="flex justify-between text-xs text-slate-400 mt-1"><span>1</span><span>50</span><span>100</span></div>
          </div>
          <div>
            <label className="flex items-center justify-between text-sm font-medium text-slate-700 mb-2">
              <span>Okres użytkowania</span>
              <span className="text-brand-700 font-bold text-lg">{years} lat</span>
            </label>
            <input type="range" min={1} max={7} step={1} value={years} onChange={e => setYears(+e.target.value)} className="w-full accent-brand-600 range-slider" />
            <div className="flex justify-between text-xs text-slate-400 mt-1"><span>1 rok</span><span>4 lata</span><span>7 lat</span></div>
          </div>
        </motion.div>

        {/* Results */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }} className="bg-white border-2 border-brand-200 rounded-2xl p-6">
            <p className="text-sm text-brand-600 font-medium mb-1">Zebra TC22 — TCO</p>
            <p className="text-3xl font-bold text-brand-800">{fmt(tco.tc22Total)} zł</p>
            <p className="text-xs text-slate-500 mt-1">{fmt(tco.tc22PerDevice)} zł / urządzenie / rok</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="bg-white border border-slate-200 rounded-2xl p-6">
            <p className="text-sm text-slate-500 font-medium mb-1">Smartfon konsumencki — TCO</p>
            <p className="text-3xl font-bold text-slate-700">{fmt(tco.smartTotal)} zł</p>
            <p className="text-xs text-slate-500 mt-1">{fmt(tco.smartPerDevice)} zł / urządzenie / rok</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.25 }} className="bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 border-2 border-emerald-400 rounded-2xl p-6">
            <p className="text-sm text-emerald-600 font-medium mb-1 flex items-center gap-1"><TrendingDown size={14} /> Oszczędność z TC22</p>
            <p className="text-3xl font-bold text-emerald-700">{fmt(tco.saving)} zł</p>
            <p className="text-xs text-slate-500 mt-1">−{tco.savingPercent}% kosztów w {years} lat</p>
          </motion.div>
        </div>

        {/* Breakdown */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
          <div className="grid grid-cols-3 text-sm font-medium text-slate-500 border-b border-slate-200 bg-slate-50">
            <div className="py-3 px-4">Składnik kosztu</div>
            <div className="py-3 px-4 text-center bg-brand-50/50">Zebra TC22</div>
            <div className="py-3 px-4 text-center">Smartfon</div>
          </div>
          {[
            { label: 'Zakup urządzeń', tc22: tco.tc22Purchase, smart: tco.smartPurchase },
            { label: 'Akcesoria (boot, baterie)', tc22: devices * 350, smart: devices * 200 },
            { label: `Naprawy (${years} lat)`, tc22: tco.tc22Repairs, smart: tco.smartRepairs },
            { label: 'Wymiana sprzętu (co 2 lata)', tc22: 0, smart: tco.smartReplacements },
          ].map((row, i) => (
            <div key={row.label} className={`grid grid-cols-3 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50/40'} border-b border-slate-50`}>
              <div className="py-2.5 px-4 text-slate-600">{row.label}</div>
              <div className="py-2.5 px-4 text-center font-medium text-slate-900 bg-brand-50/30">{fmt(row.tc22)} zł</div>
              <div className="py-2.5 px-4 text-center text-slate-700">{fmt(row.smart)} zł</div>
            </div>
          ))}
          <div className="grid grid-cols-3 text-sm font-bold border-t border-slate-200 bg-slate-50">
            <div className="py-3 px-4 text-slate-900">SUMA TCO</div>
            <div className="py-3 px-4 text-center text-brand-700 bg-brand-50/50">{fmt(tco.tc22Total)} zł</div>
            <div className="py-3 px-4 text-center text-slate-700">{fmt(tco.smartTotal)} zł</div>
          </div>
        </motion.div>

        {/* GEO: TCO passage for AI citation */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="mt-6 flex items-start gap-3 text-sm text-slate-500 leading-relaxed">
          <AlertTriangle size={16} className="text-amber-500 mt-0.5 flex-shrink-0" />
          <p>
            Metodologia: cena zakupu TC22 = 2 417 zł netto, smartfon = 2 500 zł. Wskaźnik awaryjności: TC22 = 3%/rok (IP68, MIL-STD), smartfon = 25%/rok (brak wzmocnień). Wymiana smartfona co 2 lata (brak wsparcia OS). Dane oparte na raporcie VDC Research &bdquo;Enterprise Mobility TCO&rdquo; (2024). Rzeczywiste oszczędności zależą od branży i warunków użytkowania.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
