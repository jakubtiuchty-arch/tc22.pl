import { ExternalLink } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <p className="text-white font-bold text-lg mb-2">tc22.pl</p>
            <p className="text-sm leading-relaxed">Strona produktowa Zebra TC22 — terminal mobilny z Wi-Fi 6E i skanerem 1D/2D. Prowadzona przez TAKMA sp. z o.o., autoryzowanego partnera Zebra Technologies od 2001 roku.</p>
          </div>
          <div>
            <p className="text-white font-medium text-sm mb-3">Przydatne linki</p>
            <ul className="space-y-2 text-sm">
              <li><a href="https://takma.com.pl/produkt/zebra-tc22" target="_blank" rel="noopener" className="hover:text-white transition-colors flex items-center gap-1">Zebra TC22 w sklepie takma.com.pl <ExternalLink size={12} /></a></li>
              <li><a href="https://takma.com.pl/produkt/zebra-tc27" target="_blank" rel="noopener" className="hover:text-white transition-colors flex items-center gap-1">Zebra TC27 (wersja 5G) <ExternalLink size={12} /></a></li>
              <li><a href="https://takma.com.pl/terminale-mobilne" target="_blank" rel="noopener" className="hover:text-white transition-colors flex items-center gap-1">Wszystkie terminale mobilne <ExternalLink size={12} /></a></li>
              <li><a href="https://www.serwis-zebry.pl/instrukcje/zebra-tc22/instrukcja-po-polsku" target="_blank" rel="noopener" className="hover:text-white transition-colors flex items-center gap-1">Instrukcja TC22 (PL) <ExternalLink size={12} /></a></li>
              <li><a href="https://www.serwis-zebry.pl" target="_blank" rel="noopener" className="hover:text-white transition-colors flex items-center gap-1">Serwis Zebra w Polsce <ExternalLink size={12} /></a></li>
            </ul>
          </div>
          <div>
            <p className="text-white font-medium text-sm mb-3">TAKMA sp. z o.o.</p>
            <ul className="space-y-2 text-sm">
              <li>ul. Romana Maya 1, 61-371 Poznań</li>
              <li>NIP: 782-21-63-526</li>
              <li><a href="tel:+48616248282" className="hover:text-white transition-colors">+48 61 624 82 82</a></li>
              <li><a href="mailto:handlowy@takma.com.pl" className="hover:text-white transition-colors">handlowy@takma.com.pl</a></li>
              <li><a href="https://takma.com.pl" target="_blank" rel="noopener" className="hover:text-white transition-colors">takma.com.pl</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} TAKMA sp. z o.o. Autoryzowany partner Zebra Technologies.</p>
          <p>Zebra Technologies® i logo Zebra Head są znakami towarowymi Zebra Technologies Corp.</p>
        </div>
      </div>
    </footer>
  )
}
