'use client'

import { useLanguage } from '@/context/LanguageContext'

const featureKeys = [
  { titleKey: 'zipper_point_1_title', descKey: 'zipper_point_1_desc' },
  { titleKey: 'zipper_point_2_title', descKey: 'zipper_point_2_desc' },
  { titleKey: 'zipper_point_3_title', descKey: 'zipper_point_3_desc' },
  { titleKey: 'zipper_point_4_title', descKey: 'zipper_point_4_desc' },
] as const

export default function ZipperScreens() {
  const { t } = useLanguage()

  const stats = [
    {
      num: t('zipper_stat_1_num') as string,
      label: t('zipper_stat_1_label') as string,
      sub: t('zipper_stat_1_sub') as string,
    },
    {
      num: t('zipper_stat_2_num') as string,
      label: t('zipper_stat_2_label') as string,
      sub: t('zipper_stat_2_sub') as string,
    },
    {
      num: t('zipper_stat_3_num') as string,
      label: t('zipper_stat_3_label') as string,
      sub: t('zipper_stat_3_sub') as string,
    },
  ]

  return (
    <section
      id="zipper-screens"
      className="zipper-section"
      style={{ background: '#0a0a0a', padding: '96px 0' }}
    >
      <div
        className="zipper-inner"
        style={{ maxWidth: 1280, margin: '0 auto', padding: '0 64px' }}
      >
        {/* ── TOP GRID ── */}
        <div className="zipper-grid">
          {/* LEFT — copy */}
          <div>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: '#C9A84C',
                marginBottom: 16,
                display: 'flex',
                alignItems: 'center',
                gap: 12,
              }}
            >
              <span
                style={{
                  display: 'inline-block',
                  width: 24,
                  height: 1,
                  background: '#C9A84C',
                  flexShrink: 0,
                }}
              />
              {t('zipper_eyebrow') as string}
            </p>

            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(42px, 5vw, 68px)',
                lineHeight: 0.95,
                letterSpacing: '0.02em',
                color: '#ffffff',
                marginBottom: 28,
              }}
            >
              {t('zipper_title') as string}
            </h2>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 16,
                fontWeight: 300,
                lineHeight: 1.8,
                color: 'rgba(200,196,190,0.80)',
                marginBottom: 16,
                maxWidth: 480,
              }}
            >
              {t('zipper_subtitle') as string}
            </p>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 16,
                fontWeight: 300,
                lineHeight: 1.8,
                color: 'rgba(200,196,190,0.80)',
                marginBottom: 16,
                maxWidth: 480,
              }}
            >
              {t('zipper_body_2') as string}
            </p>

            <a
              href="#contact"
              style={{
                display: 'inline-block',
                marginTop: 24,
                color: '#C9A84C',
                fontFamily: 'var(--font-body)',
                fontSize: 14,
                fontWeight: 600,
                letterSpacing: '0.06em',
                textDecoration: 'none',
              }}
            >
              {t('zipper_cta') as string} →
            </a>
          </div>

          {/* RIGHT — features, no background card */}
          <div className="zipper-right">
            <div style={{ marginBottom: 24 }}>
              <div
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 10,
                  fontWeight: 500,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: 'rgba(201,168,76,0.7)',
                  marginBottom: 8,
                }}
              >
                {t('zipper_features_eyebrow') as string}
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(20px, 2.5vw, 28px)',
                  letterSpacing: '0.04em',
                  color: '#ffffff',
                  margin: 0,
                  lineHeight: 1.1,
                }}
              >
                {t('zipper_features_title') as string}
              </h3>
            </div>

            {featureKeys.map(({ titleKey, descKey }, i) => (
              <div
                key={titleKey}
                style={{
                  display: 'flex',
                  gap: 16,
                  marginBottom: i < featureKeys.length - 1 ? 28 : 0,
                }}
              >
                <div
                  style={{
                    width: 3,
                    minHeight: 40,
                    background: '#C9A84C',
                    flexShrink: 0,
                    marginTop: 2,
                  }}
                />
                <div>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 14,
                      fontWeight: 600,
                      color: 'white',
                      marginBottom: 6,
                    }}
                  >
                    {t(titleKey) as string}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 13,
                      fontWeight: 300,
                      lineHeight: 1.6,
                      color: 'rgba(158,155,149,0.9)',
                      margin: 0,
                    }}
                  >
                    {t(descKey) as string}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── STATS BAR ── */}
        <div
          className="zipper-stats"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            marginTop: 64,
            paddingTop: 40,
            borderTop: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              style={{
                textAlign: 'center',
                padding: '0 24px',
                borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.08)' : 'none',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(32px, 4vw, 48px)',
                  color: '#ffffff',
                  lineHeight: 1,
                  marginBottom: 8,
                }}
              >
                {stat.num.split(/([%+★])/).map((part, j) =>
                  ['%', '+', '★'].includes(part) ? (
                    <span key={j} style={{ color: '#C9A84C' }}>
                      {part}
                    </span>
                  ) : (
                    <span key={j}>{part}</span>
                  )
                )}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: '0.10em',
                  textTransform: 'uppercase',
                  color: '#ffffff',
                  marginBottom: 4,
                }}
              >
                {stat.label}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 11,
                  color: 'rgba(158,155,149,0.55)',
                }}
              >
                {stat.sub}
              </div>
            </div>
          ))}
        </div>

        {/* ── BENEFITS MINI ── */}
        <div style={{
          marginTop: 80,
          paddingTop: 64,
          borderTop: '1px solid rgba(255,255,255,0.08)',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            marginBottom: 40,
            justifyContent: 'center',
          }}>
            <div style={{ width: 24, height: 1, background: '#C9A84C' }} />
            <span style={{
              fontFamily: 'var(--font-body)',
              fontSize: 10,
              fontWeight: 500,
              letterSpacing: '0.20em',
              textTransform: 'uppercase',
              color: '#C9A84C',
            }}>
              {t('benefits_eyebrow') as string}
            </span>
            <div style={{ width: 24, height: 1, background: '#C9A84C' }} />
          </div>

          <div className="benefits-mini-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 24,
          }}>
            {([
              {
                icon: (
                  <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 22c4.97 0 9-3.13 9-7 0-1.66-.75-3.17-2-4.33V9a2 2 0 00-2-2h-1V6a1 1 0 00-1-1H9a1 1 0 00-1 1v1H7a2 2 0 00-2 2v1.67C3.75 11.83 3 13.34 3 15c0 3.87 4.03 7 9 7z"/>
                    <path d="M9 9h6M7 11l-3-3M17 11l3-3M7 15l-3 3M17 15l3 3"/>
                  </svg>
                ),
                titleKey: 'benefit_insect_title' as const,
                descKey: 'benefit_insect_desc' as const,
              },
              {
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
                titleKey: 'benefit_shade_title' as const,
                descKey: 'benefit_shade_desc' as const,
              },
              {
                icon: (
                  <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
                    <polyline points="17 6 23 6 23 12"/>
                  </svg>
                ),
                titleKey: 'benefit_value_title' as const,
                descKey: 'benefit_value_desc' as const,
              },
            ] as const).map(({ icon, titleKey, descKey }) => (
              <div key={titleKey} style={{
                display: 'flex',
                gap: 16,
                alignItems: 'flex-start',
              }}>
                <div style={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  background: 'rgba(201,168,76,0.12)',
                  border: '1px solid rgba(201,168,76,0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#C9A84C',
                  flexShrink: 0,
                }}>
                  {icon}
                </div>
                <div>
                  <div style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 16,
                    color: '#ffffff',
                    marginBottom: 6,
                    letterSpacing: '0.02em',
                  }}>
                    {t(titleKey) as string}
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 13,
                    fontWeight: 300,
                    color: 'rgba(158,155,149,0.7)',
                    lineHeight: 1.6,
                  }}>
                    {t(descKey) as string}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .zipper-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          align-items: start;
        }
        .zipper-right {
          padding-left: 48px;
          border-left: 1px solid rgba(255,255,255,0.08);
        }
        .zipper-stats {
          grid-template-columns: repeat(3, 1fr) !important;
        }
        @media (max-width: 1023px) {
          .zipper-grid {
            grid-template-columns: 1fr !important;
          }
          .zipper-right {
            padding-left: 0 !important;
            border-left: none !important;
            border-top: 1px solid rgba(255,255,255,0.08) !important;
            padding-top: 40px !important;
            margin-top: 40px !important;
          }
        }
        @media (max-width: 767px) {
          .zipper-section {
            padding: 64px 0 !important;
          }
          .zipper-inner {
            padding: 0 24px !important;
          }
          .zipper-stats {
            grid-template-columns: 1fr !important;
            gap: 0 !important;
          }
          .zipper-stats > div {
            border-left: none !important;
            border-top: 1px solid rgba(255,255,255,0.08) !important;
            padding: 20px 0 !important;
          }
          .zipper-stats > div:first-child {
            border-top: none !important;
          }
          .benefits-mini-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }
      `}</style>
    </section>
  )
}
