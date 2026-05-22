'use client'

import { useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'

const serviceFeatureKeys = {
  '01': ['service_zipper_f1', 'service_zipper_f2', 'service_zipper_f3', 'service_zipper_f4'],
  '02': ['service_shade_f1', 'service_shade_f2', 'service_shade_f3', 'service_shade_f4'],
  '03': ['service_zebra_f1', 'service_zebra_f2', 'service_zebra_f3', 'service_zebra_f4'],
  '04': ['service_blackout_f1', 'service_blackout_f2', 'service_blackout_f3', 'service_blackout_f4'],
  '05': ['service_motorized_f1', 'service_motorized_f2', 'service_motorized_f3', 'service_motorized_f4'],
  '06': ['service_commercial_f1', 'service_commercial_f2', 'service_commercial_f3', 'service_commercial_f4'],
} as const

export default function Services() {
  const { t } = useLanguage()
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  const services = [
    { num: '01' as const, titleKey: 'service_zipper_title' as const, descKey: 'service_zipper_desc' as const, type: 'residential' as const },
    { num: '02' as const, titleKey: 'service_shade_title' as const, descKey: 'service_shade_desc' as const, type: 'residential' as const },
    { num: '03' as const, titleKey: 'service_zebra_title' as const, descKey: 'service_zebra_desc' as const, type: 'residential' as const },
    { num: '04' as const, titleKey: 'service_blackout_title' as const, descKey: 'service_blackout_desc' as const, type: 'residential' as const },
    { num: '05' as const, titleKey: 'service_motorized_title' as const, descKey: 'service_motorized_desc' as const, type: 'both' as const },
    { num: '06' as const, titleKey: 'service_commercial_title' as const, descKey: 'service_commercial_desc' as const, type: 'commercial' as const },
  ]

  return (
    <section
      id="services"
      className="services-section"
      style={{ background: '#f0efed', padding: '120px 0 96px 0' }}
    >
      {/* HEADER */}
      <div
        className="services-header"
        style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 48px' }}
      >
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: '600',
            letterSpacing: '0.22em', textTransform: 'uppercase', color: '#C9A84C',
            marginBottom: '16px', display: 'flex', alignItems: 'center',
            justifyContent: 'center', gap: '12px',
          }}>
            <span style={{ display: 'block', width: '24px', height: '1px', background: '#C9A84C' }} />
            {t('services_eyebrow') as string}
            <span style={{ display: 'block', width: '24px', height: '1px', background: '#C9A84C' }} />
          </p>

          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(40px, 5vw, 64px)',
            lineHeight: '0.95', letterSpacing: '0.02em',
            color: '#0a0a0a', marginBottom: '20px',
          }}>
            {t('services_title') as string}
          </h2>

          <p style={{
            fontFamily: 'var(--font-body)', fontSize: '16px', fontWeight: '300',
            color: '#5a5752', maxWidth: '560px',
            margin: '0 auto', lineHeight: '1.7',
          }}>
            {t('services_subtitle') as string}
          </p>
        </div>
      </div>

      {/* GRID */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5 services-grid"
        style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 48px' }}
      >
        {services.map((service) => (
          <div
            key={service.num}
            onMouseEnter={() => setHoveredCard(service.num)}
            onMouseLeave={() => setHoveredCard(null)}
            style={{
              background: hoveredCard === service.num ? '#161616' : '#111111',
              padding: '48px 36px',
              position: 'relative',
              overflow: 'hidden',
              transition: 'background 300ms, box-shadow 300ms',
              cursor: 'default',
              boxShadow: hoveredCard === service.num
                ? '0 8px 32px rgba(0,0,0,0.25)'
                : '0 2px 12px rgba(0,0,0,0.12)',
            }}
          >
            {/* Background number */}
            <span style={{
              position: 'absolute', top: '16px', right: '20px',
              fontFamily: 'var(--font-display)', fontSize: '80px',
              lineHeight: '1', letterSpacing: '-0.02em',
              color: hoveredCard === service.num
                ? 'rgba(201,168,76,0.18)'
                : 'rgba(255,255,255,0.06)',
              transition: 'color 300ms',
              userSelect: 'none',
            }}>
              {service.num}
            </span>

            {/* Red accent line */}
            <div style={{
              width: '32px', height: '3px',
              background: '#C9A84C', marginBottom: '16px',
            }} />

            {/* Type label */}
            <div style={{
              display: 'inline-block',
              fontSize: 9,
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: service.type === 'commercial' ? '#C9A84C' : 'rgba(158,155,149,0.5)',
              marginBottom: 10,
            }}>
              {service.type === 'residential' ? '— Residential'
                : service.type === 'commercial' ? '— Commercial'
                : '— Residential & Commercial'}
            </div>

            {/* Title */}
            <h3 style={{
              fontFamily: 'var(--font-display)', fontSize: '26px',
              letterSpacing: '0.02em', color: '#ffffff',
              lineHeight: '1.2', marginBottom: '14px',
            }}>
              {t(service.titleKey) as string}
            </h3>

            {/* Description */}
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: '14px',
              fontWeight: '300', color: 'rgba(158,155,149,0.85)',
              lineHeight: '1.7', marginBottom: '24px',
            }}>
              {t(service.descKey) as string}
            </p>

            {/* Feature list */}
            <ul style={{
              listStyle: 'none', padding: '0', margin: '0',
              borderTop: '1px solid rgba(255,255,255,0.06)',
              paddingTop: '20px',
            }}>
              {serviceFeatureKeys[service.num].map((featureKey) => (
                <li key={featureKey} style={{
                  display: 'flex', alignItems: 'center', gap: '10px',
                  padding: '7px 0',
                  borderBottom: '1px solid rgba(255,255,255,0.04)',
                  fontFamily: 'var(--font-body)', fontSize: '13px',
                  fontWeight: '300', color: 'rgba(158,155,149,0.7)',
                }}>
                  <span style={{
                    display: 'inline-block', width: '12px', height: '1px',
                    background: '#C9A84C', flexShrink: 0,
                  }} />
                  {t(featureKey) as string}
                </li>
              ))}
            </ul>

            {/* CTA link */}
            <a
              href="#contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                marginTop: 24,
                fontFamily: 'var(--font-body)',
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: '0.10em',
                textTransform: 'uppercase',
                color: '#C9A84C',
                textDecoration: 'none',
                transition: 'gap 200ms',
              }}
            >
              {t('services_card_cta') as string}
              <span style={{ fontSize: 14, lineHeight: 1 }}>→</span>
            </a>
          </div>
        ))}
      </div>

      <style>{`
        .services-section {
          padding-top: 96px !important;
          padding-bottom: 96px !important;
        }
        @media (max-width: 1023px) {
          .services-section {
            padding-top: 80px !important;
            padding-bottom: 80px !important;
          }
          .services-grid {
            padding: 0 32px !important;
          }
        }
        @media (max-width: 767px) {
          .services-section {
            padding-top: 64px !important;
            padding-bottom: 64px !important;
          }
          .services-grid {
            padding: 0 24px !important;
          }
          .services-header {
            padding: 0 24px !important;
          }
        }
      `}</style>
    </section>
  )
}
