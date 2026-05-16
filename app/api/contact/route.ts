import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import type { LeadFormData } from '@/types'

function buildEmailHtml(data: LeadFormData): string {
  const timestamp = new Date().toLocaleString('en-US', {
    timeZone: 'America/New_York',
    dateStyle: 'full',
    timeStyle: 'short',
  })

  const serviceLabels: Record<LeadFormData['serviceType'], string> = {
    zipper_screen: 'Zipper Screen',
    shade_screen: 'Shade Screen',
    zebra_blinds: 'Zebra Blinds',
    blackout_blinds: 'Blackout Blinds',
    motorized: 'Motorized System',
    commercial: 'Commercial Project',
    not_sure: "Not sure — let's talk",
  }

  const contactLabels: Record<LeadFormData['preferredContact'], string> = {
    call: 'Phone Call',
    whatsapp: 'WhatsApp',
    email: 'Email',
  }

  const timeLabels: Record<string, string> = {
    morning: 'Morning (8am–12pm)',
    afternoon: 'Afternoon (12pm–4pm)',
    evening: 'Evening (4pm–6pm)',
    anytime: 'Anytime',
  }

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: Arial, sans-serif; color: #2a2926; background: #f0efed; margin: 0; padding: 20px; }
    .card { background: #ffffff; border-radius: 8px; padding: 32px; max-width: 600px; margin: 0 auto; }
    .header { background: #d42b2b; color: white; padding: 20px 32px; border-radius: 8px 8px 0 0; margin: -32px -32px 24px; }
    h1 { margin: 0; font-size: 22px; }
    .badge { background: #f0efed; padding: 4px 10px; border-radius: 4px; font-size: 12px; color: #5a5752; display: inline-block; margin-top: 8px; }
    table { width: 100%; border-collapse: collapse; margin-top: 16px; }
    td { padding: 8px 0; border-bottom: 1px solid #e2e0dc; vertical-align: top; }
    td:first-child { font-weight: 600; width: 40%; color: #5a5752; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; }
    .highlight { background: #fff8f8; border-left: 3px solid #d42b2b; padding: 12px 16px; border-radius: 4px; margin-top: 20px; }
    .footer { text-align: center; margin-top: 24px; font-size: 12px; color: #9e9b95; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <h1>🔔 New Lead — Amaran Integral Service</h1>
      <span class="badge">${timestamp} (ET)</span>
    </div>

    <div class="highlight">
      <strong>${data.fullName}</strong> is interested in <strong>${serviceLabels[data.serviceType]}</strong>.<br>
      Preferred contact: <strong>${contactLabels[data.preferredContact]}</strong>
      ${data.bestTime ? ` · Best time: <strong>${timeLabels[data.bestTime] ?? data.bestTime}</strong>` : ''}
    </div>

    <table>
      <tr><td>Name</td><td>${data.fullName}</td></tr>
      <tr><td>Phone</td><td><a href="tel:${data.phone}">${data.phone}</a></td></tr>
      ${data.email ? `<tr><td>Email</td><td><a href="mailto:${data.email}">${data.email}</a></td></tr>` : ''}
      <tr><td>Contact via</td><td>${contactLabels[data.preferredContact]}</td></tr>
      <tr><td>Service</td><td>${serviceLabels[data.serviceType]}</td></tr>
      <tr><td>Property type</td><td>${data.propertyType === 'residential' ? 'Residential' : 'Commercial'}</td></tr>
      <tr><td>City</td><td>${data.city}</td></tr>
      <tr><td>Language</td><td>${data.preferredLanguage === 'es' ? 'Español' : 'English'}</td></tr>
      ${data.bestTime ? `<tr><td>Best time</td><td>${timeLabels[data.bestTime] ?? data.bestTime}</td></tr>` : ''}
      ${data.projectDescription ? `<tr><td>Description</td><td>${data.projectDescription}</td></tr>` : ''}
      <tr><td>Form language</td><td>${data.language === 'es' ? 'Español' : 'English'}</td></tr>
    </table>

    <div class="footer">
      Amaran Integral Service LLC · (813) 279-3943 · Tampa Bay, FL
    </div>
  </div>
</body>
</html>
`
}

function validatePayload(body: unknown): body is LeadFormData {
  if (!body || typeof body !== 'object') return false
  const b = body as Record<string, unknown>

  if (typeof b.fullName !== 'string' || b.fullName.trim().length === 0)
    return false
  if (typeof b.phone !== 'string' || b.phone.trim().length === 0) return false
  if (!['call', 'whatsapp', 'email'].includes(b.preferredContact as string))
    return false
  if (
    ![
      'zipper_screen',
      'shade_screen',
      'zebra_blinds',
      'blackout_blinds',
      'motorized',
      'commercial',
      'not_sure',
    ].includes(b.serviceType as string)
  )
    return false
  if (!['residential', 'commercial'].includes(b.propertyType as string))
    return false
  if (typeof b.city !== 'string' || b.city.trim().length === 0) return false
  if (!['en', 'es'].includes(b.preferredLanguage as string)) return false

  return true
}

export async function POST(req: NextRequest) {
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  if (!validatePayload(body)) {
    return NextResponse.json(
      { error: 'Missing or invalid required fields' },
      { status: 400 }
    )
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, LEAD_EMAIL_TO } =
    process.env

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !LEAD_EMAIL_TO) {
    console.error('SMTP env vars not configured')
    return NextResponse.json(
      { error: 'Email service not configured' },
      { status: 500 }
    )
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT ?? 587),
    secure: Number(SMTP_PORT ?? 587) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  })

  try {
    await transporter.sendMail({
      from: `"Amaran Website" <${SMTP_USER}>`,
      to: LEAD_EMAIL_TO,
      replyTo: body.email ?? undefined,
      subject: `New Lead: ${body.fullName} — ${body.city} (${body.serviceType.replace('_', ' ')})`,
      html: buildEmailHtml(body),
    })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (err) {
    console.error('Email send error:', err)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}
