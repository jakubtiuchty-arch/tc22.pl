import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin', 'latin-ext'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://tc22.pl'),
  title: 'Zebra TC22 — terminal mobilny Wi-Fi 6E od 2 417 zł netto | TAKMA',
  description: 'Zebra TC22: wytrzymały terminal mobilny z ekranem 6" FHD+, skanerem SE4710/SE55 (zasięg do 7,6 m), Wi-Fi 6E, IP68, Android do v16. 7 wariantów od 2 417 zł netto. Kalkulator TCO, porównanie TC22 vs TC27 vs CT32. Autoryzowany partner Zebra — TAKMA.',
  keywords: ['zebra tc22', 'tc22', 'terminal mobilny zebra tc22', 'zebra tc22 cena', 'zebra tc22 dane techniczne', 'tc22 vs tc27', 'terminal mobilny do magazynu', 'kolektor danych zebra', 'WLMT0-T22'],
  authors: [{ name: 'TAKMA Tadeusz Tiuchty', url: 'https://takma.com.pl' }],
  creator: 'TAKMA',
  publisher: 'TAKMA Tadeusz Tiuchty',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: 'https://tc22.pl' },
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    url: 'https://tc22.pl',
    siteName: 'tc22.pl — Zebra TC22 | TAKMA',
    title: 'Zebra TC22 — terminal mobilny Wi-Fi 6E od 2 417 zł | TAKMA',
    description: 'Wytrzymały terminal mobilny Zebra TC22: ekran 6" FHD+, skaner 1D/2D, IP68, MIL-STD-810H, Android do v16. 7 wariantów od 2 417 zł netto. Kalkulator TCO i porównanie z konkurencją.',
    images: [{ url: '/images/tc22_scanner_1.png', width: 800, height: 800, alt: 'Terminal mobilny Zebra TC22' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zebra TC22 — terminal mobilny od 2 417 zł | TAKMA',
    description: 'Wi-Fi 6E, ekran 6", IP68, skaner 1D/2D SE4710/SE55. Autoryzowany partner Zebra — TAKMA.',
    images: ['/images/tc22_scanner_1.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
        <JsonLd />
      </body>
    </html>
  )
}

function JsonLd() {
  const org = {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness'],
    '@id': 'https://takma.com.pl/#organization',
    name: 'TAKMA Tadeusz Tiuchty',
    alternateName: 'TAKMA',
    url: 'https://takma.com.pl',
    logo: 'https://takma.com.pl/images/logo-takma.png',
    description: 'Autoryzowany partner Zebra. Urządzenia AutoID: drukarki etykiet, terminale mobilne, skanery kodów kreskowych. Działamy od 2001 roku.',
    foundingDate: '2001',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'ul. Romana Maya 1',
      addressLocality: 'Poznań',
      postalCode: '61-371',
      addressCountry: 'PL',
    },
    telephone: '+48616248282',
    email: 'takma@takma.com.pl',
    sameAs: ['https://takma.com.pl'],
  }

  const product = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': 'https://tc22.pl/#product',
    name: 'Zebra TC22',
    alternateName: ['Terminal mobilny Zebra TC22', 'Kolektor danych Zebra TC22', 'Zebra WLMT0-T22'],
    description: 'Wytrzymały terminal mobilny klasy enterprise z ekranem 6" FHD+, skanerem 1D/2D (SE4710 lub SE55 do 7,6 m), Wi-Fi 6/6E, IP68, MIL-STD-810H i systemem Android do v16. ',
    brand: { '@type': 'Brand', name: 'Zebra Technologies' },
    manufacturer: { '@type': 'Organization', name: 'Zebra Technologies Corporation', url: 'https://www.zebra.com' },
    category: 'Terminale mobilne',
    sku: 'WLMT0-T22B6ABC2-A6',
    mpn: 'WLMT0-T22',
    image: ['https://tc22.pl/images/tc22_scanner_1.png', 'https://tc22.pl/images/tc22_scanner_2.png', 'https://tc22.pl/images/tc22_scanner_3.png'],
    url: 'https://tc22.pl',
    sameAs: 'https://www.zebra.com/us/en/products/mobile-computers/handheld/tc22-tc27.html',
    additionalProperty: [
      { '@type': 'PropertyValue', name: 'Procesor', value: 'Qualcomm 5430 hex-core 2.1 GHz' },
      { '@type': 'PropertyValue', name: 'Wyświetlacz', value: '6.0" FHD+ 1080x2160 Gorilla Glass' },
      { '@type': 'PropertyValue', name: 'Odporność', value: 'IP68/IP65 MIL-STD-810H' },
      { '@type': 'PropertyValue', name: 'Łączność', value: 'Wi-Fi 6/6E Bluetooth 5.2 NFC' },
      { '@type': 'PropertyValue', name: 'Waga', value: '236 g' },
    ],
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '2417',
      highPrice: '3606',
      priceCurrency: 'PLN',
      priceValidUntil: '2026-12-31',
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition',
      seller: { '@type': 'Organization', name: 'TAKMA Tadeusz Tiuchty', url: 'https://takma.com.pl' },
      offerCount: 7,
      offers: [
        { '@type': 'Offer', name: 'TC22 SE4710, 6/64 GB, 3800 mAh', sku: 'WLMT0-T22B6ABC2-A6', price: '2417', priceCurrency: 'PLN', availability: 'https://schema.org/InStock' },
        { '@type': 'Offer', name: 'TC22 SE4710, 6/64 GB, 5200 mAh', sku: 'WLMT0-T22B6ABE2-A6', price: '2553', priceCurrency: 'PLN', availability: 'https://schema.org/InStock' },
        { '@type': 'Offer', name: 'TC22 SE4710, 8/128 GB, RFID-ready', sku: 'WLMT0-T22B8ABC8-A6', price: '2830', priceCurrency: 'PLN', availability: 'https://schema.org/InStock' },
        { '@type': 'Offer', name: 'TC22 SE55, 6/64 GB, 3800 mAh', sku: 'WLMT0-T22B6CBC2-A6', price: '2963', priceCurrency: 'PLN', availability: 'https://schema.org/InStock' },
        { '@type': 'Offer', name: 'TC22 SE4710, 8/128 GB, RFID+BLE', sku: 'WLMT0-T22B8ABD8-A6', price: '3060', priceCurrency: 'PLN', availability: 'https://schema.org/InStock' },
        { '@type': 'Offer', name: 'TC22 SE55, 6/64 GB, 5200 mAh', sku: 'WLMT0-T22B6CBE2-A6', price: '3099', priceCurrency: 'PLN', availability: 'https://schema.org/InStock' },
        { '@type': 'Offer', name: 'TC22 SE55, 8/128 GB, RFID+BLE', sku: 'WLMT0-T22B8CBD8-A6', price: '3606', priceCurrency: 'PLN', availability: 'https://schema.org/InStock' },
      ],
    },
  }

  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Ile kosztuje Zebra TC22?', acceptedAnswer: { '@type': 'Answer', text: 'Ceny Zebra TC22 zaczynają się od 2 417 zł netto za konfigurację SE4710, 6/64 GB, 3 800 mAh (WLMT0-T22B6ABC2-A6). Warianty z SE55: od 2 963 zł. Topowa konfiguracja SE55+8/128 GB+RFID+BLE: 3 606 zł netto. Ceny aktualne, marzec 2026, partner Zebra — TAKMA.' } },
      { '@type': 'Question', name: 'Czym różni się Zebra TC22 od TC27?', acceptedAnswer: { '@type': 'Answer', text: 'TC22 i TC27 to identyczne urządzenia — ten sam procesor, ekran, skanery i wytrzymałość. Jedyna różnica: TC22 ma wyłącznie Wi-Fi 6/6E (od 2 417 zł), a TC27 dodaje 5G/4G LTE, dual SIM i GPS (od 3 254 zł). TC22 wystarcza do pracy wewnątrz budynku. TC27 konieczny dla pracowników terenowych.' } },
      { '@type': 'Question', name: 'Czym różni się skaner SE4710 od SE55 w TC22?', acceptedAnswer: { '@type': 'Answer', text: 'SE4710: standardowy imager 1D/2D, zasięg do 66 cm, czerwona kropka — do skanowania na wyciągnięcie ręki (kasa, lada). SE55 Advanced Range: zasięg od 5 cm do 7,6 m (do 12,2 m dla kodów 1D), zielona kropka z autofokusem — skanuje etykiety na wysokich regałach bez drabiny. Różnica w cenie: ok. 400–550 zł.' } },
      { '@type': 'Question', name: 'Czy Zebra TC22 jest wodoodporny?', acceptedAnswer: { '@type': 'Answer', text: 'Tak. IP68 (pyłoszczelność + zanurzenie do 1 m na 30 min) + IP65 (strumień wody). Certyfikacja MIL-STD-810H: upadki z 1,5 m na beton, 500 tumble z 0,5 m, szok termiczny, wilgotność 95%. Gorilla Glass chroni ekran i okno skanera.' } },
      { '@type': 'Question', name: 'Jak długo działa bateria w TC22?', acceptedAnswer: { '@type': 'Answer', text: 'Bateria standardowa 3 800 mAh: ok. 10 godzin. Bateria rozszerzona 5 200 mAh: ok. 14 godzin. Obie wymienne hot-swap w 5 sekund bez wyłączania. Technologia PowerPrecision monitoruje stan baterii w czasie rzeczywistym.' } },
      { '@type': 'Question', name: 'Czym różni się TC22 od Honeywell CT32?', acceptedAnswer: { '@type': 'Answer', text: 'Oba to terminale 6" z Wi-Fi 6E i IP68. TC22 wygrywa: lżejszy (236 vs 269 g), tańszy (od 2 417 vs 3 389 zł), ekosystem Mobility DNA (DataWedge, StageNow, Device Tracker). CT32 wygrywa: FlexRange do 11 m (vs 7,6 m SE55), 5G w opcji (X1N), dłuższa ścieżka Android (14→18 vs 14→16). Dla firm z flotą Zebra — TC22. Dla nowych wdrożeń z priorytetem 5G — CT32.' } },
      { '@type': 'Question', name: 'Na jakie temperatury jest przystosowany TC22?', acceptedAnswer: { '@type': 'Answer', text: 'TC22 pracuje od -10°C do +50°C. Nie nadaje się do mroźni (-18°C i poniżej) — do tego Zebra MC9400 lub MC3400. Do chłodni (+2°C do +8°C) TC22 wystarczy. Bateria rozszerzona 5 200 mAh zalecana przy niskich temperaturach.' } },
      { '@type': 'Question', name: 'Czy do TC22 można podłączyć czytnik RFID?', acceptedAnswer: { '@type': 'Answer', text: 'Tak. Warianty RFID-ready (8-pin, np. WLMT0-T22B8ABC8-A6) obsługują nakładkę Zebra RFD40 UHF RFID Sled przez złącze eConnex. Odczyt 100–700 tagów/s z odległości do 9 m. Warianty 2-pin łączą się z RFD40 przez Bluetooth.' } },
      { '@type': 'Question', name: 'Jakie są alternatywy dla Zebra TC22?', acceptedAnswer: { '@type': 'Answer', text: 'W segmencie 6" performance: Honeywell CT32 (od 3 389 zł, FlexRange 11 m, 5G opcja), Zebra TC27 (od 3 254 zł, bliźniak z 5G+GPS). W segmencie premium: Zebra TC53e (od ~4 500 zł, bateria 4 680 mAh, Android do v17). W segmencie budżetowym: Datalogic Memor K (od ~2 000 zł, mniejszy ekosystem). TC22 oferuje najlepszy stosunek ceny do ekosystemu enterprise (Mobility DNA w cenie).' } },
      { '@type': 'Question', name: 'Ile kosztuje serwis OneCare dla TC22?', acceptedAnswer: { '@type': 'Answer', text: 'OneCare Essential 3 lata (Z1AE-TC22XX-3C00): 1 025 zł netto. OneCare Essential 5 lat (Z1AE-TC22XX-5C00): 1 708 zł netto. Obejmuje: accidental damage, aktualizacje OS, LifeGuard security patches, priorytetowe naprawy.' } },
      { '@type': 'Question', name: 'Jaki Android ma TC22?', acceptedAnswer: { '@type': 'Answer', text: 'TC22 jest dostarczany z Android 14 z gwarancją Zebra na aktualizację do Android 16. LifeGuard zapewnia comiesięczne łatki bezpieczeństwa. Wersja GMS (Google Mobile Services) jest standardem na rynku europejskim.' } },
      { '@type': 'Question', name: 'Jak zarządzać flotą terminali TC22?', acceptedAnswer: { '@type': 'Answer', text: 'Bezpłatne narzędzia Mobility DNA: StageNow (masowa konfiguracja przez QR/NFC), DataWedge (integracja skanera), Device Tracker (lokalizacja urządzeń). MDM: SOTI MobiControl, VMware Workspace ONE, Microsoft Intune, Zebra DNA Cloud. Floty 50+ urządzeń: rozważ ShareCradle 5-gniazdowe i Zebra VisibilityIQ.' } },
      { '@type': 'Question', name: 'Czy TC22 obsługuje NFC i płatności?', acceptedAnswer: { '@type': 'Answer', text: 'Tak. NFC ISO 14443 A/B, Mifare, FeliCa z certyfikacją Apple VAS i Google SmartTap. Odczytuje karty lojalnościowe, bilety i vouchery z Apple Wallet / Google Wallet. Płatności mobilne mSMARTPOS wymagają dodatkowego oprogramowania POS.' } },
      { '@type': 'Question', name: 'Jak wyliczyć TCO floty TC22 na 5 lat?', acceptedAnswer: { '@type': 'Answer', text: 'Wzór: (cena urządzenia + etui + OneCare 5Y) × liczba terminali. Przykład dla 20 szt.: (2 417 + 200 + 1 708) × 20 = 86 500 zł / 5 lat = 17 300 zł/rok = 72 zł/urządzenie/miesiąc. Smartfon konsumencki na 5 lat: 2× droższy (naprawy, wymiana co 2 lata, brak skanera enterprise).' } },
    ],
  }

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'tc22.pl', item: 'https://tc22.pl' },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(product) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    </>
  )
}
