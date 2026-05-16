'use client'

import { useLanguage } from '@/context/LanguageContext'

const galleryItems = [
  { locationKey: 'gallery_item_1_location' },
  { locationKey: 'gallery_item_2_location' },
  { locationKey: 'gallery_item_3_location' },
  { locationKey: 'gallery_item_4_location' },
  { locationKey: 'gallery_item_5_location' },
  { locationKey: 'gallery_item_6_location' },
] as const

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

export default function GalleryTestimonials() {
  const { t } = useLanguage()

  return (
    <>
      <section id="gallery" className="gallery-testimonials-section" style={{ background: '#f0efed' }}>
        <div className="gallery-testimonials-inner" style={{ maxWidth: 1280, margin: '0 auto', padding: '0 64px' }}>

          {/* ── SHARED EYEBROW ── */}
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 10,
              marginBottom: 16,
            }}>
              <div style={{ width: 24, height: 1, background: '#d42b2b' }} />
              <span style={{
                fontFamily: 'var(--font-body)',
                fontSize: 10,
                fontWeight: 500,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: '#d42b2b',
              }}>
                {t('gallery_testimonials_eyebrow') as string}
              </span>
              <div style={{ width: 24, height: 1, background: '#d42b2b' }} />
            </div>

            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(30px, 4vw, 56px)',
              lineHeight: 0.95,
              letterSpacing: '0.02em',
              color: '#0a0a0a',
              margin: '0 0 20px 0',
            }}>
              {t('gallery_title') as string}
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
              {t('gallery_subtitle') as string}
            </p>
          </div>

          {/* ── GALLERY GRID ── */}
          <div className="gallery-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 16,
            marginBottom: 20,
          }}>
            {galleryItems.map(({ locationKey }, index) => (
              <div
                key={locationKey}
                className="gallery-item"
                style={{
                  position: 'relative',
                  aspectRatio: '4/3',
                  borderRadius: 4,
                  overflow: 'hidden',
                  background: '#d6d4d0',
                }}
              >
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(135deg, #d6d4d0 0%, #b8b5b0 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <div style={{ textAlign: 'center', padding: '0 16px' }}>
                    <span style={{ fontSize: 32, display: 'block', marginBottom: 10 }} aria-hidden="true">🪟</span>
                    <p style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 10,
                      fontWeight: 500,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: '#5a5752',
                    }}>
                      Photo #{index + 1}
                    </p>
                  </div>
                </div>

                {/* Location label on hover */}
                <div className="gallery-label" style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(to top, rgba(10,10,10,0.8) 0%, transparent 100%)',
                  padding: '24px 16px 12px',
                  transform: 'translateY(100%)',
                  transition: 'transform 250ms',
                }}>
                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 12,
                    fontWeight: 500,
                    color: '#ffffff',
                    margin: 0,
                  }}>
                    {t(locationKey) as string}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginBottom: 20 }}>
            <a
              href="#contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: '#d42b2b',
                color: '#ffffff',
                fontFamily: 'var(--font-body)',
                fontSize: 14,
                fontWeight: 600,
                letterSpacing: '0.04em',
                padding: '14px 28px',
                borderRadius: 4,
                textDecoration: 'none',
                transition: 'background 200ms',
              }}
            >
              {t('gallery_cta') as string}
            </a>
          </div>

          {/* ── DIVIDER ── */}
          <div style={{
            borderTop: '1px solid #d6d4d0',
            margin: '64px 0',
          }} />

          {/* ── TESTIMONIALS ── */}
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 10,
              marginBottom: 16,
            }}>
              <div style={{ width: 24, height: 1, background: '#d42b2b' }} />
              <span style={{
                fontFamily: 'var(--font-body)',
                fontSize: 10,
                fontWeight: 500,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: '#d42b2b',
              }}>
                {t('testimonials_eyebrow') as string}
              </span>
              <div style={{ width: 24, height: 1, background: '#d42b2b' }} />
            </div>

            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(28px, 3.5vw, 48px)',
              lineHeight: 0.95,
              letterSpacing: '0.02em',
              color: '#0a0a0a',
              margin: '0 0 16px 0',
            }}>
              {t('testimonials_title') as string}
            </h2>

            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 15,
              fontWeight: 300,
              color: '#5a5752',
              maxWidth: 480,
              margin: '0 auto',
              lineHeight: 1.7,
            }}>
              {t('testimonials_subtitle') as string}
            </p>
          </div>

          <div className="testimonials-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 16,
          }}>
            {testimonials.map(({ nameKey, cityKey, reviewKey, stars }) => (
              <div
                key={nameKey}
                style={{
                  background: '#ffffff',
                  border: '1px solid #e2e0dc',
                  borderRadius: 4,
                  padding: '32px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div style={{ display: 'flex', gap: 2, marginBottom: 16 }} aria-label={`${stars} stars`}>
                  {Array.from({ length: stars }).map((_, i) => (
                    <span key={i} style={{ color: '#d42b2b', fontSize: 16 }} aria-hidden="true">★</span>
                  ))}
                </div>

                <blockquote style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 13,
                  fontWeight: 300,
                  lineHeight: 1.75,
                  color: '#5a5752',
                  flex: 1,
                  marginBottom: 20,
                  margin: '0 0 20px 0',
                }}>
                  &ldquo;{t(reviewKey) as string}&rdquo;
                </blockquote>

                <div style={{ borderTop: '1px solid #e2e0dc', paddingTop: 16 }}>
                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 13,
                    fontWeight: 600,
                    color: '#0a0a0a',
                    margin: '0 0 4px 0',
                  }}>
                    {t(nameKey) as string}
                  </p>
                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 12,
                    color: '#5a5752',
                    margin: 0,
                  }}>
                    {t(cityKey) as string}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {process.env.NODE_ENV === 'development' && (
            <p style={{
              textAlign: 'center',
              fontSize: 11,
              fontFamily: 'var(--font-body)',
              color: '#5a5752',
              marginTop: 24,
            }}>
              * Placeholder testimonials — real client reviews will be added when provided.
            </p>
          )}
        </div>
      </section>

      <style>{`
        .gallery-testimonials-section {
          padding: 96px 0;
        }
        .gallery-item:hover .gallery-label {
          transform: translateY(0) !important;
        }
        @media (max-width: 1023px) {
          .gallery-testimonials-section {
            padding: 80px 0 !important;
          }
          .gallery-testimonials-inner {
            padding: 0 32px !important;
          }
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .testimonials-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 767px) {
          .gallery-testimonials-section {
            padding: 64px 0 !important;
          }
          .gallery-testimonials-inner {
            padding: 0 24px !important;
          }
          .gallery-grid {
            grid-template-columns: 1fr !important;
          }
          .testimonials-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  )
}
