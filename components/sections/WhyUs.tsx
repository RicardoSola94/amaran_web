'use client'

import { useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'

const reasons = [
  { titleKey: 'whyus_1_title', descKey: 'whyus_1_desc' },
  { titleKey: 'whyus_2_title', descKey: 'whyus_2_desc' },
  { titleKey: 'whyus_3_title', descKey: 'whyus_3_desc' },
  { titleKey: 'whyus_4_title', descKey: 'whyus_4_desc' },
] as const

export default function WhyUs() {
  const { t } = useLanguage()
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  return (
    <section className="whyus-section" style={{ backgroundColor: '#0a0a0a' }}>
      <div className="whyus-container">

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 16 }}>
            <div style={{ width: 24, height: 1, backgroundColor: '#C9A84C' }} />
            <span style={{
              fontFamily: 'var(--font-body)',
              fontSize: 10,
              fontWeight: 500,
              letterSpacing: '0.22em',
              textTransform: 'uppercase' as const,
              color: '#C9A84C',
            }}>
              {t('whyus_eyebrow') as string}
            </span>
            <div style={{ width: 24, height: 1, backgroundColor: '#C9A84C' }} />
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(32px, 4.5vw, 60px)',
            lineHeight: 0.95,
            letterSpacing: '0.02em',
            color: '#ffffff',
            margin: '0 0 16px',
          }}>
            {t('whyus_title') as string}
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 15,
            fontWeight: 300,
            color: 'rgba(200,196,190,0.80)',
            maxWidth: 540,
            margin: '0 auto',
            lineHeight: 1.7,
          }}>
            {t('whyus_subtitle') as string}
          </p>
        </div>

        {/* Cards grid */}
        <div className="whyus-grid">
          {reasons.map(({ titleKey, descKey }, index) => (
            <div
              key={titleKey}
              className="whyus-card"
              onMouseEnter={() => setHoveredCard(titleKey)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                backgroundColor: '#111111',
                border: hoveredCard === titleKey
                  ? '1px solid rgba(201,168,76,0.30)'
                  : '1px solid rgba(255,255,255,0.06)',
                borderRadius: 4,
                cursor: 'default',
                display: 'flex',
                gap: 24,
                transition: 'transform 250ms, border-color 250ms',
                transform: hoveredCard === titleKey ? 'translateY(-2px)' : 'translateY(0)',
              }}
            >
              {/* Number icon */}
              <div style={{ flexShrink: 0 }}>
                <div style={{
                  width: 48,
                  height: 48,
                  borderRadius: '50%',
                  background: 'rgba(201,168,76,0.10)',
                  border: '1px solid rgba(201,168,76,0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-display)',
                  fontSize: 18,
                  color: '#C9A84C',
                }}>
                  0{index + 1}
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 22,
                  letterSpacing: '0.02em',
                  color: '#ffffff',
                  margin: '0 0 8px',
                  lineHeight: 1.1,
                }}>
                  {t(titleKey) as string}
                </h3>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 13,
                  fontWeight: 300,
                  color: 'rgba(158,155,149,0.75)',
                  lineHeight: 1.65,
                  margin: 0,
                }}>
                  {t(descKey) as string}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <a
            href="#contact"
            style={{
              display: 'inline-block',
              backgroundColor: '#C9A84C',
              color: '#ffffff',
              fontFamily: 'var(--font-body)',
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.14em',
              textTransform: 'uppercase' as const,
              textDecoration: 'none',
              padding: '13px 32px',
              borderRadius: 2,
              transition: 'background 200ms',
            }}
          >
            {t('nav_cta') as string}
          </a>
        </div>
      </div>

      <style>{`
        .whyus-section { padding: 96px 0; }
        .whyus-container { max-width: 1280px; margin: 0 auto; padding: 0 64px; }
        .whyus-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
        .whyus-card { padding: 32px; }
        @media (max-width: 1023px) {
          .whyus-section { padding: 80px 0 !important; }
          .whyus-container { padding: 0 32px !important; }
        }
        @media (max-width: 767px) {
          .whyus-section { padding: 64px 0 !important; }
          .whyus-container { padding: 0 24px !important; }
          .whyus-grid { grid-template-columns: 1fr !important; gap: 12px !important; }
          .whyus-card { padding: 24px !important; gap: 16px !important; }
        }
      `}</style>
    </section>
  )
}
