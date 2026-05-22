'use client'

import { useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'

const benefits = [
  {
    titleKey: 'benefit_insect_title' as const,
    descKey: 'benefit_insect_desc' as const,
    icon: (
      <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22c4.97 0 9-3.13 9-7 0-1.66-.75-3.17-2-4.33V9a2 2 0 00-2-2h-1V6a1 1 0 00-1-1H9a1 1 0 00-1 1v1H7a2 2 0 00-2 2v1.67C3.75 11.83 3 13.34 3 15c0 3.87 4.03 7 9 7z"/>
        <path d="M9 9h6M7 11l-3-3M17 11l3-3M7 15l-3 3M17 15l3 3"/>
      </svg>
    ),
  },
  {
    titleKey: 'benefit_shade_title' as const,
    descKey: 'benefit_shade_desc' as const,
    icon: (
      <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="5"/>
        <line x1="12" y1="1" x2="12" y2="3"/>
        <line x1="12" y1="21" x2="12" y2="23"/>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
        <line x1="1" y1="12" x2="3" y2="12"/>
        <line x1="21" y1="12" x2="23" y2="12"/>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
      </svg>
    ),
  },
  {
    titleKey: 'benefit_privacy_title' as const,
    descKey: 'benefit_privacy_desc' as const,
    icon: (
      <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  {
    titleKey: 'benefit_wind_title' as const,
    descKey: 'benefit_wind_desc' as const,
    icon: (
      <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M9.59 4.59A2 2 0 1111 8H2m10.59 11.41A2 2 0 1014 16H2m15.73-8.27A2.5 2.5 0 1119.5 12H2"/>
      </svg>
    ),
  },
  {
    titleKey: 'benefit_value_title' as const,
    descKey: 'benefit_value_desc' as const,
    icon: (
      <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
        <polyline points="17 6 23 6 23 12"/>
      </svg>
    ),
  },
  {
    titleKey: 'benefit_ac_title' as const,
    descKey: 'benefit_ac_desc' as const,
    icon: (
      <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
  },
] as const

export default function Benefits() {
  const { t } = useLanguage()
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <>
      <section
        id="benefits"
        className="benefits-section"
        style={{ backgroundColor: '#0a0a0a' }}
      >
        {/* HEADER */}
        <div
          className="benefits-header"
          style={{
            maxWidth: 1280,
            margin: '0 auto',
            padding: '0 64px',
            textAlign: 'center',
            marginBottom: 64,
          }}
        >
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 10,
            marginBottom: 16,
          }}>
            <div style={{ width: 24, height: 1, backgroundColor: '#C9A84C' }} />
            <span style={{
              fontFamily: 'var(--font-body)',
              fontSize: 10,
              fontWeight: 500,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: '#C9A84C',
            }}>
              {t('benefits_eyebrow') as string}
            </span>
            <div style={{ width: 24, height: 1, backgroundColor: '#C9A84C' }} />
          </div>

          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(32px, 4.5vw, 60px)',
            lineHeight: 0.95,
            letterSpacing: '0.02em',
            color: '#ffffff',
            margin: '0 0 20px 0',
          }}>
            {t('benefits_title') as string}
          </h2>

          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 15,
            fontWeight: 300,
            color: 'rgba(200,196,190,0.75)',
            maxWidth: 520,
            margin: '0 auto',
            lineHeight: 1.7,
          }}>
            {t('benefits_subtitle') as string}
          </p>
        </div>

        {/* GRID */}
        <div
          className="benefits-grid"
          style={{
            maxWidth: 1280,
            margin: '0 auto',
            padding: '0 64px',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 16,
          }}
        >
          {benefits.map(({ titleKey, descKey, icon }, index) => (
            <div
              key={titleKey}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                backgroundColor: '#111111',
                border: hoveredIndex === index
                  ? '1px solid rgba(201,168,76,0.35)'
                  : '1px solid rgba(255,255,255,0.06)',
                borderRadius: 4,
                padding: '32px 28px',
                transition: 'border 250ms, transform 250ms',
                transform: hoveredIndex === index ? 'translateY(-3px)' : 'translateY(0)',
              }}
            >
              <div style={{
                width: 44,
                height: 44,
                borderRadius: '50%',
                background: 'rgba(201,168,76,0.12)',
                border: '1px solid rgba(201,168,76,0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 20,
                color: '#C9A84C',
                flexShrink: 0,
              }}>
                {icon}
              </div>

              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 18,
                letterSpacing: '0.03em',
                color: '#ffffff',
                margin: '0 0 10px 0',
                lineHeight: 1.2,
              }}>
                {t(titleKey) as string}
              </h3>

              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: 13,
                fontWeight: 300,
                color: 'rgba(158,155,149,0.75)',
                lineHeight: 1.7,
                margin: 0,
              }}>
                {t(descKey) as string}
              </p>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        .benefits-section {
          padding: 96px 0;
        }
        .benefits-header {
          margin-bottom: 64px !important;
        }
        @media (max-width: 1023px) {
          .benefits-section {
            padding: 80px 0 !important;
          }
          .benefits-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            padding: 0 32px !important;
          }
          .benefits-header {
            padding: 0 32px !important;
          }
        }
        @media (max-width: 767px) {
          .benefits-section {
            padding: 64px 0 !important;
          }
          .benefits-grid {
            grid-template-columns: 1fr !important;
            padding: 0 24px !important;
          }
          .benefits-header {
            padding: 0 24px !important;
            margin-bottom: 40px !important;
          }
        }
      `}</style>
    </>
  )
}
