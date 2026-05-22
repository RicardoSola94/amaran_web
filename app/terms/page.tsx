import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Terms & Conditions | Zebra Blinds Tampa',
}

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: '#f0efed', minHeight: '60vh' }}>
        <div style={{
          maxWidth: 800,
          margin: '0 auto',
          padding: '96px 64px',
          fontFamily: 'var(--font-body)',
          color: '#0a0a0a',
        }}>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(32px, 4vw, 52px)',
            color: '#0a0a0a',
            marginBottom: 8,
            lineHeight: 1.1,
          }}>
            Terms &amp; Conditions
          </h1>
          <p style={{ fontSize: 14, lineHeight: 1.8, color: '#5a5752', marginBottom: 0 }}>
            Last updated: May 2026
          </p>

          <h2 style={h2Style}>1. Services</h2>
          <p style={pStyle}>
            Zebra Blinds Tampa, operated by Amaran Integral Service LLC, provides custom window
            treatment installation services in the Tampa Bay area and throughout Florida. Services
            include but are not limited to zebra blinds, blackout blinds, shade screens, zipper
            screens, motorized screens, and patio enclosures.
          </p>

          <h2 style={h2Style}>2. Estimates &amp; Quotes</h2>
          <p style={pStyle}>
            All estimates are free and provided with no obligation. Quotes are valid for 30 days
            from the date of issue. Final pricing may vary if the scope of work changes after the
            initial estimate.
          </p>

          <h2 style={h2Style}>3. Installation</h2>
          <p style={pStyle}>
            Installation is performed by our trained team. The client is responsible for ensuring
            clear access to the installation area. We are not responsible for delays caused by lack
            of access or changes requested after scheduling.
          </p>

          <h2 style={h2Style}>4. Deposits &amp; Payments</h2>
          <p style={pStyle}>
            <em>[PLACEHOLDER — client to confirm deposit and payment policy]</em>
            <br />
            Payment terms will be communicated at the time of quote approval.
          </p>

          <h2 style={h2Style}>5. Warranty</h2>
          <p style={pStyle}>
            All products and installations are covered by the manufacturer&apos;s warranty.
            Workmanship warranty details will be provided at the time of installation. Warranty does
            not cover damage caused by improper use, accidents, or natural disasters.
          </p>

          <h2 style={h2Style}>6. Cancellations</h2>
          <p style={pStyle}>
            <em>[PLACEHOLDER — client to confirm cancellation policy]</em>
            <br />
            Please contact us as soon as possible if you need to reschedule or cancel an appointment.
          </p>

          <h2 style={h2Style}>7. Limitation of Liability</h2>
          <p style={pStyle}>
            Amaran Integral Service LLC is not liable for any indirect, incidental, or consequential
            damages arising from the use of our services. Our total liability shall not exceed the
            amount paid for the specific service in question.
          </p>

          <h2 style={h2Style}>8. Contact</h2>
          <p style={pStyle}>
            For questions about these Terms, contact us at:
          </p>
          <ul style={{ fontSize: 14, lineHeight: 1.8, color: '#5a5752', paddingLeft: 20 }}>
            <li>Phone: <a href="tel:+18132793943" style={linkStyle}>(813) 279-3943</a></li>
            <li>WhatsApp: <a href="https://wa.me/18132793943" style={linkStyle} target="_blank" rel="noopener noreferrer">+1 (813) 279-3943</a></li>
            <li>Email: <em>[PLACEHOLDER — pending]</em></li>
            <li>Website: <a href="https://zebrablindstampa.com" style={linkStyle} target="_blank" rel="noopener noreferrer">zebrablindstampa.com</a> [confirm domain]</li>
          </ul>
        </div>
      </main>
      <Footer />
    </>
  )
}

const h2Style: React.CSSProperties = {
  fontFamily: 'var(--font-display)',
  fontSize: 24,
  color: '#0a0a0a',
  marginTop: 48,
  marginBottom: 12,
  lineHeight: 1.2,
}

const pStyle: React.CSSProperties = {
  fontSize: 14,
  lineHeight: 1.8,
  color: '#5a5752',
  margin: 0,
}

const linkStyle: React.CSSProperties = {
  color: '#C9A84C',
  textDecoration: 'none',
}
