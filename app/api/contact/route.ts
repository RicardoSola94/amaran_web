import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import type { LeadFormData } from '@/types'

const SERVICE_LABELS: Record<string, string> = {
  zebra_blinds: 'Zebra Blinds',
  drapery: 'Drapery',
  blackout_shades: 'Blackout Shades',
  zipper_screens: 'Zipper Screens',
  translucent_shades: 'Translucent Shades',
  motorized_screens: 'Motorized Screens',
  not_sure: "Not sure — let's talk",
}


function buildOwnerEmailHtml(data: LeadFormData): string {
  const timestamp = new Date().toLocaleString('en-US', {
    timeZone: 'America/New_York',
    dateStyle: 'full',
    timeStyle: 'short',
  })

  const serviceLabel = SERVICE_LABELS[data.serviceType] ?? data.serviceType
  const propertyLabel = data.propertyType === 'residential' ? 'Residential' : data.propertyType === 'commercial' ? 'Commercial' : '—'

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>New Lead</title>
</head>
<body style="margin:0;padding:20px;background:#f0efed;font-family:Arial,Helvetica,sans-serif;color:#2a2926;">
  <div style="background:#ffffff;border-radius:8px;padding:32px;max-width:600px;margin:0 auto;">

    <div style="background:#C9A84C;color:#ffffff;padding:20px 32px;border-radius:8px 8px 0 0;margin:-32px -32px 24px;">
      <p style="margin:0;font-size:11px;text-transform:uppercase;letter-spacing:0.1em;opacity:0.85;">New Lead — Zebra Blinds Tampa</p>
      <h1 style="margin:6px 0 0;font-size:22px;font-weight:700;">${data.fullName}</h1>
      <span style="display:inline-block;background:rgba(255,255,255,0.15);padding:4px 10px;border-radius:4px;font-size:12px;margin-top:8px;">${timestamp} (ET)</span>
    </div>

    <div style="background:#fffdf5;border-left:3px solid #C9A84C;padding:14px 16px;border-radius:4px;margin-bottom:24px;">
      <strong style="font-size:15px;">${data.fullName}</strong> is interested in
      <strong style="color:#C9A84C;">${serviceLabel}</strong> in <strong>${data.city}</strong>.
    </div>

    <table style="width:100%;border-collapse:collapse;">
      <tr>
        <td style="padding:10px 0;border-bottom:1px solid #e2e0dc;font-weight:600;width:38%;color:#5a5752;font-size:12px;text-transform:uppercase;letter-spacing:0.05em;">Name</td>
        <td style="padding:10px 0;border-bottom:1px solid #e2e0dc;font-size:14px;">${data.fullName}</td>
      </tr>
      <tr>
        <td style="padding:10px 0;border-bottom:1px solid #e2e0dc;font-weight:600;color:#5a5752;font-size:12px;text-transform:uppercase;letter-spacing:0.05em;">Phone</td>
        <td style="padding:10px 0;border-bottom:1px solid #e2e0dc;font-size:14px;"><a href="tel:${data.phone}" style="color:#C9A84C;font-weight:700;">${data.phone}</a></td>
      </tr>
      ${data.email ? `<tr>
        <td style="padding:10px 0;border-bottom:1px solid #e2e0dc;font-weight:600;color:#5a5752;font-size:12px;text-transform:uppercase;letter-spacing:0.05em;">Email</td>
        <td style="padding:10px 0;border-bottom:1px solid #e2e0dc;font-size:14px;"><a href="mailto:${data.email}" style="color:#C9A84C;">${data.email}</a></td>
      </tr>` : ''}
      <tr>
        <td style="padding:10px 0;border-bottom:1px solid #e2e0dc;font-weight:600;color:#5a5752;font-size:12px;text-transform:uppercase;letter-spacing:0.05em;">Service</td>
        <td style="padding:10px 0;border-bottom:1px solid #e2e0dc;font-size:14px;font-weight:600;color:#C9A84C;">${serviceLabel}</td>
      </tr>
      <tr>
        <td style="padding:10px 0;border-bottom:1px solid #e2e0dc;font-weight:600;color:#5a5752;font-size:12px;text-transform:uppercase;letter-spacing:0.05em;">City</td>
        <td style="padding:10px 0;border-bottom:1px solid #e2e0dc;font-size:14px;">${data.city}</td>
      </tr>
      <tr>
        <td style="padding:10px 0;border-bottom:1px solid #e2e0dc;font-weight:600;color:#5a5752;font-size:12px;text-transform:uppercase;letter-spacing:0.05em;">Property</td>
        <td style="padding:10px 0;border-bottom:1px solid #e2e0dc;font-size:14px;">${propertyLabel}</td>
      </tr>
      <tr>
        <td style="padding:10px 0;border-bottom:1px solid #e2e0dc;font-weight:600;color:#5a5752;font-size:12px;text-transform:uppercase;letter-spacing:0.05em;">Language</td>
        <td style="padding:10px 0;border-bottom:1px solid #e2e0dc;font-size:14px;">${data.language === 'es' ? 'Español' : 'English'}</td>
      </tr>
      ${data.projectDescription ? `<tr>
        <td style="padding:10px 0;font-weight:600;color:#5a5752;font-size:12px;text-transform:uppercase;letter-spacing:0.05em;vertical-align:top;">Message</td>
        <td style="padding:10px 0;font-size:14px;line-height:1.6;">${data.projectDescription}</td>
      </tr>` : ''}
    </table>

    <p style="text-align:center;margin-top:28px;font-size:12px;color:#9e9b95;border-top:1px solid #e2e0dc;padding-top:20px;">
      This lead was submitted via zebrablindstampa.com<br>
      Amaran Integral Service LLC &middot; (813) 279-3943 &middot; Tampa Bay, FL
    </p>
  </div>
</body>
</html>`
}

function buildClientConfirmationHtml(data: LeadFormData): string {
  const serviceLabel = SERVICE_LABELS[data.serviceType] ?? data.serviceType
  const isEs = data.language === 'es'

  return `<!DOCTYPE html>
<html lang="${isEs ? 'es' : 'en'}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>${isEs ? 'Recibimos tu solicitud' : 'We received your request'}</title>
</head>
<body style="margin:0;padding:20px;background:#f0efed;font-family:Arial,Helvetica,sans-serif;color:#2a2926;">
  <div style="background:#ffffff;border-radius:8px;padding:32px;max-width:600px;margin:0 auto;">

    <div style="background:#0a0a0a;padding:20px 32px;border-radius:8px 8px 0 0;margin:-32px -32px 32px;text-align:center;">
      <p style="margin:0;color:#ffffff;font-size:18px;font-weight:700;letter-spacing:0.05em;">ZEBRA BLINDS TAMPA</p>
      <p style="margin:6px 0 0;color:#C9A84C;font-size:12px;text-transform:uppercase;letter-spacing:0.12em;">Tampa Bay, Florida</p>
    </div>

    <p style="font-size:14px;color:#5a5752;margin:0 0 8px;">
      ${isEs ? `Hola, <strong style="color:#0a0a0a;">${data.fullName}</strong>` : `Hi, <strong style="color:#0a0a0a;">${data.fullName}</strong>`}
    </p>

    <h2 style="margin:0 0 16px;font-size:22px;color:#0a0a0a;line-height:1.3;">
      ${isEs ? 'Recibimos tu solicitud.' : 'We received your request.'}
    </h2>

    <p style="font-size:15px;color:#2a2926;line-height:1.7;margin:0 0 24px;">
      ${isEs
        ? `Gracias por contactarnos sobre <strong>${serviceLabel}</strong>. Nuestro equipo te contactará en las próximas <strong>2 horas</strong> durante el horario de atención.`
        : `Thank you for reaching out about <strong>${serviceLabel}</strong>. Our team will contact you within <strong>2 hours</strong> during business hours.`
      }
    </p>

    <div style="background:#f0efed;border-radius:6px;padding:20px 24px;margin-bottom:28px;">
      <p style="margin:0 0 12px;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#5a5752;">
        ${isEs ? 'Contacto directo' : 'Reach us directly'}
      </p>
      <p style="margin:0 0 8px;font-size:15px;">
        <span style="color:#5a5752;font-size:12px;">${isEs ? 'Teléfono' : 'Phone'} &nbsp;</span>
        <a href="tel:+18132793943" style="color:#0a0a0a;font-weight:700;text-decoration:none;">(813) 279-3943</a>
      </p>
      <p style="margin:0;font-size:15px;">
        <span style="color:#5a5752;font-size:12px;">WhatsApp &nbsp;</span>
        <a href="https://wa.me/18132793943" style="color:#0a0a0a;font-weight:700;text-decoration:none;">+1 (813) 279-3943</a>
      </p>
    </div>

    <div style="border-top:2px solid #C9A84C;padding-top:20px;">
      <p style="margin:0 0 6px;font-size:13px;color:#2a2926;line-height:1.6;">
        ${isEs
          ? 'Si tu consulta es urgente, no dudes en llamarnos o escribirnos por WhatsApp. Estamos disponibles de lunes a sábado de 8am a 6pm.'
          : 'If your need is urgent, feel free to call or WhatsApp us. We are available Monday–Saturday, 8am–6pm.'
        }
      </p>
    </div>

    <hr style="border:none;border-top:1px solid #e2e0dc;margin:28px 0 20px;">

    <p style="margin:0 0 4px;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#5a5752;">
      ${isEs ? 'Tu solicitud' : 'Your request'}
    </p>
    <p style="margin:0;font-size:13px;color:#5a5752;line-height:1.6;">
      ${isEs ? 'Servicio' : 'Service'}: <strong style="color:#0a0a0a;">${serviceLabel}</strong> &nbsp;&middot;&nbsp;
      ${isEs ? 'Ciudad' : 'City'}: <strong style="color:#0a0a0a;">${data.city}</strong>
    </p>

    <p style="text-align:center;margin-top:32px;font-size:11px;color:#9e9b95;">
      Amaran Integral Service LLC &middot; Tampa Bay, FL<br>
      ${isEs ? 'Tu satisfacción es nuestro placer.' : 'Your Satisfaction is Our Pleasure.'}
    </p>
  </div>
</body>
</html>`
}

const VALID_SERVICE_TYPES = [
  'zebra_blinds',
  'drapery',
  'blackout_shades',
  'zipper_screens',
  'translucent_shades',
  'motorized_screens',
  'not_sure',
]

function validatePayload(body: unknown): body is LeadFormData {
  if (!body || typeof body !== 'object') return false
  const b = body as Record<string, unknown>

  if (typeof b.fullName !== 'string' || b.fullName.trim().length === 0) return false
  if (typeof b.phone !== 'string' || b.phone.trim().length === 0) return false
  if (!VALID_SERVICE_TYPES.includes(b.serviceType as string)) return false
  if (typeof b.city !== 'string' || b.city.trim().length === 0) return false
  if (!['en', 'es'].includes(b.language as string)) return false

  if (b.email !== undefined && b.email !== null && b.email !== '') {
    if (typeof b.email !== 'string' || !b.email.includes('@')) return false
  }

  if (b.propertyType !== undefined && b.propertyType !== null) {
    if (!['residential', 'commercial'].includes(b.propertyType as string)) return false
  }

  return true
}

export async function POST(req: NextRequest) {
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  // Turnstile verification
  const { TURNSTILE_SECRET_KEY } = process.env
  if (!TURNSTILE_SECRET_KEY) {
    console.warn('TURNSTILE_SECRET_KEY not configured — skipping bot check')
  } else {
    const rawBody = body && typeof body === 'object' ? body as Record<string, unknown> : {}
    const turnstileToken = typeof rawBody.turnstileToken === 'string' ? rawBody.turnstileToken : null
    if (!turnstileToken) {
      return NextResponse.json({ error: 'Security check failed' }, { status: 400 })
    }
    const verifyRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ secret: TURNSTILE_SECRET_KEY, response: turnstileToken }),
    })
    const verifyData = await verifyRes.json() as { success: boolean }
    if (!verifyData.success) {
      return NextResponse.json({ error: 'Security check failed' }, { status: 400 })
    }
  }

  if (!validatePayload(body)) {
    return NextResponse.json(
      { error: 'Missing or invalid required fields' },
      { status: 400 },
    )
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, LEAD_EMAIL_TO } = process.env

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !LEAD_EMAIL_TO) {
    console.error('SMTP env vars not configured')
    return NextResponse.json({ error: 'Email service not configured' }, { status: 500 })
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT ?? 587),
    secure: Number(SMTP_PORT ?? 587) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  })

  const serviceLabel = SERVICE_LABELS[body.serviceType] ?? body.serviceType
  const ownerSubject = `New Lead - ${serviceLabel} - ${body.city}`

  try {
    await transporter.sendMail({
      from: `"Amaran Website" <${SMTP_USER}>`,
      to: LEAD_EMAIL_TO,
      replyTo: body.email ?? undefined,
      subject: ownerSubject,
      html: buildOwnerEmailHtml(body),
    })
  } catch (err) {
    console.error('Owner email send error:', err)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }

  if (body.email) {
    const clientSubject = 'We received your request — Zebra Blinds Tampa'
    try {
      await transporter.sendMail({
        from: `"Amaran Integral Service" <${SMTP_USER}>`,
        to: body.email,
        subject: clientSubject,
        html: buildClientConfirmationHtml(body),
      })
    } catch (err) {
      // Lead is captured; log but don't fail the request
      console.error('Client confirmation email error:', err)
    }
  }

  return NextResponse.json({ success: true }, { status: 200 })
}
