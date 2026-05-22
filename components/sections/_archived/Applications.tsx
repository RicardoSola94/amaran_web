'use client'

import { useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'

const applications = [
  {
    titleKey: 'app_patio_title' as const,
    descKey: 'app_patio_desc' as const,
    icon: (
      <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
  {
    titleKey: 'app_balcony_title' as const,
    descKey: 'app_balcony_desc' as const,
    icon: (
      <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
  },
  {
    titleKey: 'app_restaurant_title' as const,
    descKey: 'app_restaurant_desc' as const,
    icon: (
      <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M18 8h1a4 4 0 010 8h-1"/>
        <path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/>
        <line x1="6" y1="1" x2="6" y2="4"/>
        <line x1="10" y1="1" x2="10" y2="4"/>
        <line x1="14" y1="1" x2="14" y2="4"/>
      </svg>
    ),
  },
  {
    titleKey: 'app_hotel_title' as const,
    descKey: 'app_hotel_desc' as const,
    icon: (
      <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 22V8l9-6 9 6v14"/>
        <path d="M9 22V12h6v10"/>
        <rect x="9" y="8" width="2" height="2"/>
        <rect x="13" y="8" width="2" height="2"/>
      </svg>
    ),
  },
  {
    titleKey: 'app_office_title' as const,
    descKey: 'app_office_desc' as const,
    icon: (
      <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="2"/>
        <line x1="2" y1="7" x2="22" y2="7"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <line x1="2" y1="17" x2="22" y2="17"/>
        <line x1="7" y1="2" x2="7" y2="22"/>
        <line x1="12" y1="2" x2="12" y2="22"/>
        <line x1="17" y1="2" x2="17" y2="22"/>
      </svg>
    ),
  },
  {
    titleKey: 'app_porch_title' as const,
    descKey: 'app_porch_desc' as const,
    icon: (
      <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20z"/>
        <path d="M12 2a14.5 14.5 0 010 20M12 2a14.5 14.5 0 000 20"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
      </svg>
    ),
  },
] as const

export default function Applications() {
  const { t } = useLanguage()
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <>
      <section
        id="applications"
        className="applications-section"
        style={{ backgroundColor: '#f0efed' }}
      >
        {/* HEADER */}
        <div
          className="applications-header"
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
              {t('applications_eyebrow') as string}
            </span>
            <div style={{ width: 24, height: 1, backgroundColor: '#C9A84C' }} />
          </div>

          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(30px, 4vw, 56px)',
            lineHeight: 0.95,
            letterSpacing: '0.02em',
            color: '#0a0a0a',
            margin: '0 0 20px 0',
          }}>
            {t('applications_title') as string}
          </h2>

          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 15,
            fontWeight: 300,
            color: '#5a5752',
            maxWidth: 520,
            margin: '0 auto',
            lineHeight: 1.7,
          }}>
            {t('applications_subtitle') as string}
          </p>
        </div>

        {/* GRID */}
        <div
          className="applications-grid"
          style={{
            maxWidth: 1280,
            margin: '0 auto',
            padding: '0 64px',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 16,
          }}
        >
          {applications.map(({ titleKey, descKey, icon }, index) => (
            <div
              key={titleKey}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                backgroundColor: '#ffffff',
                border: hoveredIndex === index
                  ? '1px solid rgba(201,168,76,0.30)'
                  : '1px solid #e2e0dc',
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
                background: 'rgba(201,168,76,0.10)',
                border: '1px solid rgba(201,168,76,0.22)',
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
                color: '#0a0a0a',
                margin: '0 0 10px 0',
                lineHeight: 1.2,
              }}>
                {t(titleKey) as string}
              </h3>

              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: 13,
                fontWeight: 300,
                color: '#5a5752',
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
        .applications-section {
          padding: 96px 0;
        }
        .applications-header {
          margin-bottom: 64px !important;
        }
        @media (max-width: 1023px) {
          .applications-section {
            padding: 80px 0 !important;
          }
          .applications-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            padding: 0 32px !important;
          }
          .applications-header {
            padding: 0 32px !important;
          }
        }
        @media (max-width: 767px) {
          .applications-section {
            padding: 64px 0 !important;
          }
          .applications-grid {
            grid-template-columns: 1fr !important;
            padding: 0 24px !important;
          }
          .applications-header {
            padding: 0 24px !important;
            margin-bottom: 40px !important;
          }
        }
      `}</style>
    </>
  )
}
