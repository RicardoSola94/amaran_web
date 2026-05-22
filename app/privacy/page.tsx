import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy | Zebra Blinds Tampa',
}

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <p style={{ fontSize: 14, lineHeight: 1.8, color: '#5a5752', marginBottom: 0 }}>
            Last updated: May 2026
          </p>

          <h2 style={h2Style}>1. Information We Collect</h2>
          <p style={pStyle}>When you submit our contact form, we collect:</p>
          <ul style={{ fontSize: 14, lineHeight: 1.8, color: '#5a5752', paddingLeft: 20 }}>
            <li>Full name</li>
            <li>Phone number</li>
            <li>Email address (optional)</li>
            <li>City</li>
            <li>Service type of interest</li>
            <li>Project description (optional)</li>
          </ul>
          <p style={{ ...pStyle, marginTop: 12 }}>
            We do not collect payment information on this website.
          </p>

          <h2 style={h2Style}>2. How We Use Your Information</h2>
          <p style={pStyle}>The information you provide is used solely to:</p>
          <ul style={{ fontSize: 14, lineHeight: 1.8, color: '#5a5752', paddingLeft: 20 }}>
            <li>Contact you regarding your quote request</li>
            <li>Schedule your free in-home estimate</li>
            <li>Follow up on your project</li>
          </ul>
          <p style={{ ...pStyle, marginTop: 12 }}>
            We do not sell, rent, or share your personal information with third parties for
            marketing purposes.
          </p>

          <h2 style={h2Style}>3. Cookies &amp; Tracking</h2>
          <p style={pStyle}>
            This website does not currently use tracking cookies or third-party analytics tools.
            If this changes, this policy will be updated accordingly.
          </p>

          <h2 style={h2Style}>4. Data Storage</h2>
          <p style={pStyle}>
            Your information is stored securely and retained only as long as necessary to fulfill
            your service request. You may request deletion of your data at any time by contacting
            us directly.
          </p>

          <h2 style={h2Style}>5. Third-Party Services</h2>
          <p style={pStyle}>
            This website may use third-party services including WhatsApp (Meta Platforms) for
            communication purposes. Use of WhatsApp is subject to Meta&apos;s Privacy Policy.
          </p>

          <h2 style={h2Style}>6. Your Rights</h2>
          <p style={pStyle}>You have the right to:</p>
          <ul style={{ fontSize: 14, lineHeight: 1.8, color: '#5a5752', paddingLeft: 20 }}>
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Opt out of future communications</li>
          </ul>
          <p style={{ ...pStyle, marginTop: 12 }}>
            To exercise these rights, contact us directly.
          </p>

          <h2 style={h2Style}>7. Children&apos;s Privacy</h2>
          <p style={pStyle}>
            Our services are not directed to individuals under the age of 18. We do not knowingly
            collect personal information from minors.
          </p>

          <h2 style={h2Style}>8. Changes to This Policy</h2>
          <p style={pStyle}>
            We may update this Privacy Policy from time to time. Changes will be posted on this
            page with an updated date.
          </p>

          <h2 style={h2Style}>9. Contact</h2>
          <p style={pStyle}>For privacy-related questions:</p>
          <ul style={{ fontSize: 14, lineHeight: 1.8, color: '#5a5752', paddingLeft: 20 }}>
            <li>Phone: <a href="tel:+18132793943" style={linkStyle}>(813) 279-3943</a></li>
            <li>WhatsApp: <a href="https://wa.me/18132793943" style={linkStyle} target="_blank" rel="noopener noreferrer">+1 (813) 279-3943</a></li>
            <li>Email: <em>[PLACEHOLDER — pending]</em></li>
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
