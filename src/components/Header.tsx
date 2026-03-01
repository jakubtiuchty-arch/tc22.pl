'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '#przewagi', label: 'Przewagi' },
  { href: '#porownanie', label: 'Porownanie' },
  { href: '#warianty', label: 'Warianty i ceny' },
  { href: '#tco', label: 'Kalkulator TCO' },
  { href: '#faq', label: 'FAQ' },
  { href: '#kontakt', label: 'Kontakt' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 50)
      const h = document.documentElement.scrollHeight - window.innerHeight
      setProgress(h > 0 ? (window.scrollY / h) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'}`}>
      <div className="h-0.5 bg-gray-100">
        <div className="h-full bg-brand-600 transition-all duration-150" style={{ width: `${progress}%` }} />
      </div>
      <div className="max-w-6xl mx-auto px-4 md:px-6 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-3">
          <span className="text-xl font-bold text-brand-700">TC22</span>
          <span className="text-xs text-gray-400">|</span>
          <span className="text-sm text-gray-500">TAKMA</span>
        </a>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map(l => (
            <a key={l.href} href={l.href} className="text-sm text-gray-600 hover:text-brand-700 transition-colors">{l.label}</a>
          ))}
        </nav>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-gray-600" aria-label="Menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <nav className="md:hidden bg-white border-t border-gray-100 px-4 pb-4">
          {navLinks.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-3 text-sm text-gray-600 hover:text-brand-700 border-b border-gray-50">{l.label}</a>
          ))}
        </nav>
      )}
    </header>
  )
}
