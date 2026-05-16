'use client'

import { useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import SectionHeader from '@/components/ui/SectionHeader'

// TODO: reemplazar con reseñas reales del perfil
// Google: "Amaran Integral Service" — 5★ · 61 reviews
const testimonials = [
  {
    nameKey: 'testimonial_1_name',
    cityKey: 'testimonial_1_city',
    reviewKey: 'testimonial_1_review',
    stars: 5,
  },
  {
    nameKey: 'testimonial_2_name',
    cityKey: 'testimonial_2_city',
    reviewKey: 'testimonial_2_review',
    stars: 5,
  },
  {
    nameKey: 'testimonial_3_name',
    cityKey: 'testimonial_3_city',
    reviewKey: 'testimonial_3_review',
    stars: 5,
  },
] as const

export default function Testimonials() {
  const { t } = useLanguage()
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  return (
    <>
    <section
      className="testimonials-section"
      style={{ background: '#111111' }}
    >
      <div className="testimonials-container">
        <SectionHeader
          eyebrow={t('testimonials_eyebrow') as string}
          title={t('testimonials_title') as string}
          subtitle={t('testimonials_subtitle') as string}
          light
        />

        {/* Google badge */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginBottom: 48 }}>
          <a
            href="https://www.google.com/maps/search/Amaran+Integral+Service+Tampa"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              backgroundColor: '#1a1a1a',
              border: '1px solid rgba(255,255,255,0.10)',
              borderRadius: 4,
              padding: '12px 20px',
            }}>
              <svg width={24} height={24} viewBox="0 0 24 24" aria-hidden="true">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 2 }}>
                  {[1, 2, 3, 4, 5].map(i => (
                    <svg key={i} width={14} height={14} viewBox="0 0 24 24" fill="#FBBC05" aria-hidden="true">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    </svg>
                  ))}
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 600, color: '#ffffff', marginLeft: 4 }}>
                    5.0
                  </span>
                </div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: 'rgba(158,155,149,0.70)' }}>
                  61 reviews on Google
                </div>
              </div>
            </div>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map(({ nameKey, cityKey, reviewKey, stars }) => (
            <div
              key={nameKey}
              className="p-8 flex flex-col"
              onMouseEnter={() => setHoveredCard(nameKey)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                backgroundColor: '#1a1a1a',
                borderRadius: 4,
                border: hoveredCard === nameKey
                  ? '1px solid rgba(212,43,43,0.30)'
                  : '1px solid rgba(255,255,255,0.07)',
                transition: 'border-color 250ms, transform 250ms',
                transform: hoveredCard === nameKey ? 'translateY(-2px)' : 'translateY(0)',
              }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4" aria-label={`${stars} stars`}>
                {Array.from({ length: stars }).map((_, i) => (
                  <svg key={i} width={16} height={16} viewBox="0 0 24 24"
                    fill="#d42b2b" stroke="none" aria-hidden="true">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                ))}
              </div>

              {/* Review */}
              <blockquote
                className="font-body text-sm leading-relaxed flex-1 mb-6"
                style={{ color: 'rgba(200,196,190,0.80)' }}
              >
                &ldquo;{t(reviewKey) as string}&rdquo;
              </blockquote>

              {/* Author */}
              <div
                className="pt-4"
                style={{ borderTop: '1px solid rgba(255,255,255,0.10)' }}
              >
                <p className="font-body font-semibold text-sm" style={{ color: '#ffffff' }}>
                  {t(nameKey) as string}
                </p>
                <p className="font-body text-xs mt-1" style={{ color: 'rgba(158,155,149,0.60)' }}>
                  {t(cityKey) as string}
                </p>
              </div>
            </div>
          ))}
        </div>

        {false && (
          <p
            className="text-center font-body"
            style={{
              fontSize: 12,
              color: 'rgba(158,155,149,0.40)',
              marginTop: 32,
              fontStyle: 'italic',
            }}
          >
            * Placeholder testimonials — real client reviews will be added when provided.
          </p>
        )}

        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <a
            href="#contact"
            style={{
              display: 'inline-block',
              backgroundColor: '#d42b2b',
              color: '#ffffff',
              fontFamily: 'var(--font-body)',
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              padding: '13px 32px',
              borderRadius: 2,
            }}
          >
            {t('nav_cta') as string}
          </a>
        </div>
      </div>
    </section>

    <style>{`
      .testimonials-section { padding: 96px 0; }
      .testimonials-container { max-width: 1280px; margin: 0 auto; padding: 0 64px; }
      @media (max-width: 1023px) {
        .testimonials-section { padding: 80px 0 !important; }
        .testimonials-container { padding: 0 32px !important; }
      }
      @media (max-width: 767px) {
        .testimonials-section { padding: 64px 0 !important; }
        .testimonials-container { padding: 0 24px !important; }
      }
    `}</style>
    </>
  )
}
