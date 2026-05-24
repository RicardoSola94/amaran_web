'use client'

import { useLanguage } from '@/context/LanguageContext'

const trustItems = [
  {
    titleKey: 'trust_1' as const,
    subKey: 'trust_1_sub' as const,
    icon: (
      <svg width={16} height={16} viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
        aria-hidden="true">
        <rect x="2" y="8" width="20" height="8" rx="1"/>
        <line x1="6" y1="8" x2="6" y2="14"/>
        <line x1="10" y1="8" x2="10" y2="12"/>
        <line x1="14" y1="8" x2="14" y2="12"/>
        <line x1="18" y1="8" x2="18" y2="14"/>
      </svg>
    ),
  },
  {
    titleKey: 'trust_2' as const,
    subKey: 'trust_2_sub' as const,
    icon: (
      <svg width={16} height={16} viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
        aria-hidden="true">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
        <line x1="1" y1="10" x2="23" y2="10"/>
      </svg>
    ),
  },
  {
    titleKey: 'trust_3' as const,
    subKey: 'trust_3_sub' as const,
    icon: (
      <svg width={16} height={16} viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
        aria-hidden="true">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
  {
    titleKey: 'trust_4' as const,
    subKey: 'trust_4_sub' as const,
    icon: (
      <svg width={16} height={16} viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
        aria-hidden="true">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
  },
]

export default function TrustBar() {
  const { t } = useLanguage()

  return (
    <>
      <section
        className="trustbar-section"
        style={{
          backgroundColor: '#0e0e0e',
          borderTop: '1px solid rgba(201,168,76,0.20)',
          borderBottom: '1px solid rgba(201,168,76,0.20)',
        }}
      >
        <div
          className="trustbar-container"
          style={{ maxWidth: 1280, margin: '0 auto' }}
        >
          <div className="trust-grid">
            {trustItems.map((item, index) => (
              <div
                key={item.titleKey}
                className="trust-item"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 14,
                  padding: '20px 0',
                  position: 'relative',
                }}
              >
                {index > 0 && (
                  <div
                    className="trust-divider"
                    style={{
                      position: 'absolute',
                      left: 0,
                      top: '20%',
                      height: '60%',
                      width: 1,
                      background: 'rgba(255,255,255,0.08)',
                    }}
                  />
                )}

                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    background: 'rgba(201,168,76,0.12)',
                    border: '1px solid rgba(201,168,76,0.30)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#C9A84C',
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </div>

                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 12,
                      fontWeight: 600,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: '#ffffff',
                      lineHeight: 1.3,
                    }}
                  >
                    {t(item.titleKey) as string}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 11,
                      fontWeight: 400,
                      letterSpacing: '0.04em',
                      color: 'rgba(158,155,149,0.65)',
                      marginTop: 3,
                    }}
                  >
                    {t(item.subKey) as string}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .trustbar-section { padding: 0; }
        .trustbar-container { padding: 0 64px; }
        .trust-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
        }
        .trust-item { padding-left: 28px !important; }
        .trust-item:first-child { padding-left: 0 !important; }
        @media (max-width: 1023px) {
          .trustbar-container { padding: 0 32px !important; }
          .trust-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .trust-item:nth-child(odd) .trust-divider { display: none !important; }
          .trust-item:nth-child(even) .trust-divider { display: block !important; }
        }
        @media (max-width: 767px) {
          .trustbar-container { padding: 0 24px !important; }
          .trust-grid { grid-template-columns: 1fr !important; }
          .trust-item { padding-left: 0 !important; border-bottom: 1px solid rgba(255,255,255,0.06) !important; }
          .trust-item:last-child { border-bottom: none !important; }
          .trust-divider { display: none !important; }
        }
      `}</style>
    </>
  )
}
