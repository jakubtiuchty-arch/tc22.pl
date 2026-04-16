import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export const runtime = 'nodejs'

const resend = new Resend(process.env.RESEND_API_KEY)

const TO = process.env.CONTACT_TO_EMAIL || 'jakub.tiuchty@takma.com.pl'
const FROM = process.env.CONTACT_FROM_EMAIL || 'kontakt@tc22.pl'

function esc(v: unknown): string {
  return String(v ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, company, nip, phone, variant, quantity, accessories, message } = body

    if (!name || !email || !phone) {
      return NextResponse.json({ error: 'Brak wymaganych pól' }, { status: 400 })
    }

    const accessoriesList = Array.isArray(accessories) && accessories.length
      ? accessories.map((a: string) => `<li><code>${esc(a)}</code></li>`).join('')
      : '<li>— brak —</li>'

    const html = `
      <h2 style="font-family:system-ui;color:#0f172a">Nowe zapytanie z tc22.pl</h2>
      <table style="font-family:system-ui;border-collapse:collapse" cellpadding="8">
        <tr><td style="color:#64748b">Imię i nazwisko</td><td><strong>${esc(name)}</strong></td></tr>
        <tr><td style="color:#64748b">E-mail</td><td><a href="mailto:${esc(email)}">${esc(email)}</a></td></tr>
        <tr><td style="color:#64748b">Telefon</td><td><a href="tel:${esc(phone)}">${esc(phone)}</a></td></tr>
        <tr><td style="color:#64748b">Firma</td><td>${esc(company) || '—'}</td></tr>
        <tr><td style="color:#64748b">NIP</td><td>${esc(nip) || '—'}</td></tr>
        <tr><td style="color:#64748b">Wariant TC22</td><td><code>${esc(variant) || '—'}</code></td></tr>
        <tr><td style="color:#64748b">Ilość</td><td>${esc(quantity) || '1'}</td></tr>
        <tr><td style="color:#64748b;vertical-align:top">Akcesoria</td><td><ul style="margin:0;padding-left:18px">${accessoriesList}</ul></td></tr>
        <tr><td style="color:#64748b;vertical-align:top">Uwagi</td><td>${esc(message).replace(/\n/g, '<br>') || '—'}</td></tr>
      </table>
      <p style="color:#94a3b8;font-size:12px;margin-top:24px">Źródło: tc22.pl</p>
    `.trim()

    const { data, error } = await resend.emails.send({
      from: `tc22.pl <${FROM}>`,
      to: [TO],
      replyTo: email,
      subject: `[tc22.pl] Zapytanie: ${name}${variant ? ` — ${variant}` : ''}`,
      html,
    })

    if (error) {
      console.error('[contact] resend error:', error)
      return NextResponse.json({ error: 'Błąd wysyłki' }, { status: 502 })
    }

    return NextResponse.json({ ok: true, id: data?.id })
  } catch (err) {
    console.error('[contact] exception:', err)
    return NextResponse.json({ error: 'Błąd serwera' }, { status: 500 })
  }
}
