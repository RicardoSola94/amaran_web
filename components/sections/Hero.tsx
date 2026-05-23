'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()
  const [primaryHovered,   setPrimaryHovered]   = useState(false)
  const [secondaryHovered, setSecondaryHovered] = useState(false)

  return (
    <>
      <section
        className="hero-section"
        style={{
          position: 'relative',
          minHeight: '100vh',
          height: 'auto',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {/* FONDO — foto ocupa todo */}
        <Image
          src="/images/hero/hero_amaran.png"
          alt="Amaran Integral Service — Custom Zipper Screens and Blinds installation in Tampa Bay, Florida"
          fill
          priority
          sizes="100vw"
          className="hero-bg-image"
          style={{ objectFit: 'cover', objectPosition: 'center 35%' }}
        />

        {/* OVERLAY — gradiente de izquierda a derecha */}
        <div
          className="hero-overlay"
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, rgba(10,10,10,0.78) 0%, rgba(10,10,10,0.62) 28%, rgba(10,10,10,0.34) 54%, rgba(10,10,10,0.08) 100%)',
            zIndex: 1,
          }}
        />

        {/* CONTENIDO — encima del overlay */}
        <div
          className="hero-content"
          style={{
            position: 'relative',
            zIndex: 2,
            width: '100%',
            maxWidth: 1280,
            margin: '0 auto',
            padding: '100px 64px 48px 64px',
          }}
        >
          <div style={{ maxWidth: 600 }}>

            {/* Eyebrow */}
            <div className="hero-eyebrow" style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
              <div style={{ width: 24, height: 1, backgroundColor: '#C9A84C', flexShrink: 0 }} />
              <span style={{
                fontFamily: 'var(--font-body)',
                fontSize: 10,
                fontWeight: 500,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#C9A84C',
              }}>
                {t('hero_eyebrow') as string}
              </span>
              <div style={{ width: 24, height: 1, backgroundColor: '#C9A84C', flexShrink: 0 }} />
            </div>

            {/* H1 */}
            <h1 className="hero-h1" style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(34px, 9vw, 96px)',
              lineHeight: 0.92,
              letterSpacing: '0.02em',
              margin: '0 0 18px 0',
            }}>
              <div style={{ color: '#ffffff' }}>{t('hero_h1_line1') as string}</div>
              <div>
                <span style={{ color: '#C9A84C' }}>{t('hero_h1_accent') as string}</span>
                <span style={{ color: '#ffffff' }}> {t('hero_h1_line2') as string}</span>
              </div>
            </h1>

            {/* Subtitle */}
            <p className="hero-subtitle" style={{
              fontFamily: 'var(--font-body)',
              fontSize: 15,
              fontWeight: 300,
              color: 'rgba(200,196,190,0.85)',
              lineHeight: 1.65,
              maxWidth: 460,
              margin: '0 0 20px 0',
            }}>
              {t('hero_subtitle') as string}
            </p>

            {/* Trust badges */}
            <div className="hero-badges" style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 28 }}>
              {[
                t('hero_badge_licensed') as string,
                t('hero_badge_estimate') as string,
                t('hero_badge_response') as string,
              ].map((badge) => (
                <span key={badge} style={{
                  display: 'inline-block',
                  background: 'rgba(201,168,76,0.12)',
                  border: '1px solid rgba(201,168,76,0.30)',
                  color: '#C9A84C',
                  fontFamily: 'var(--font-body)',
                  fontSize: 10,
                  fontWeight: 600,
                  letterSpacing: '0.10em',
                  textTransform: 'uppercase',
                  padding: '4px 10px',
                  borderRadius: 2,
                }}>
                  {badge}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="hero-ctas" style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 32 }}>
              <a
                href="#contact"
                style={{
                  display: 'inline-block',
                  backgroundColor: primaryHovered ? '#a8893a' : '#C9A84C',
                  color: '#0a0a0a',
                  fontFamily: 'var(--font-body)',
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  padding: '13px 28px',
                  borderRadius: 2,
                  transition: 'background 200ms',
                }}
                onMouseEnter={() => setPrimaryHovered(true)}
                onMouseLeave={() => setPrimaryHovered(false)}
              >
                {t('hero_cta_primary') as string}
              </a>

              <a
                href="tel:+18132793943"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 7,
                  backgroundColor: 'transparent',
                  border: `1px solid ${secondaryHovered ? '#C9A84C' : 'rgba(255,255,255,0.22)'}`,
                  color: secondaryHovered ? '#C9A84C' : 'rgba(255,255,255,0.85)',
                  fontFamily: 'var(--font-body)',
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textDecoration: 'none',
                  padding: '13px 28px',
                  borderRadius: 2,
                  transition: 'all 200ms',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={() => setSecondaryHovered(true)}
                onMouseLeave={() => setSecondaryHovered(false)}
              >
                <svg width={14} height={14} viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 .01h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"/>
                </svg>
                (813) 279-3943
              </a>
            </div>

            {/* Google Reviews badge */}
            <div className="hero-reviews" style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 8 }}>
              <div style={{ display: 'flex', gap: 2 }}>
                {[1, 2, 3, 4, 5].map(i => (
                  <svg key={i} width={13} height={13} viewBox="0 0 24 24" fill="#FBBC05" aria-hidden="true">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                ))}
              </div>
              <div style={{ width: 1, height: 14, backgroundColor: 'rgba(255,255,255,0.20)' }} />
              <svg width={14} height={14} viewBox="0 0 24 24" aria-hidden="true" style={{ flexShrink: 0 }}>
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 500, color: 'rgba(255,255,255,0.75)', letterSpacing: '0.02em' }}>
                5.0 · 61 Google Reviews
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* ── RESPONSIVE ── */}
      <style>{`
        @media (max-width: 1023px) {
          .hero-content {
            padding: 100px 32px 48px 32px !important;
          }
        }
        @media (max-width: 767px) {
          .hero-section {
            min-height: 100dvh !important;
            height: 100dvh !important;
            display: flex !important;
            align-items: center !important;
            overflow: hidden !important;
          }
          .hero-bg-image {
            object-position: center 42% !important;
          }
          .hero-overlay {
            background: linear-gradient(
              to bottom,
              rgba(10,10,10,0.80) 0%,
              rgba(10,10,10,0.60) 100%
            ) !important;
          }
          .hero-content {
            padding: 0 20px 86px 20px !important;
            transform: translateY(10px);
          }
          .hero-eyebrow {
            margin-bottom: 10px !important;
          }
          .hero-h1 {
            font-size: clamp(28px, 7.4vw, 40px) !important;
            line-height: 1 !important;
            margin-bottom: 10px !important;
          }
          .hero-subtitle {
            font-size: 13.5px !important;
            line-height: 1.45 !important;
            margin-bottom: 12px !important;
          }
          .hero-badges {
            margin-bottom: 14px !important;
            gap: 6px !important;
          }
          .hero-badges span {
            font-size: 9px !important;
            padding: 4px 8px !important;
          }
          .hero-ctas {
            flex-direction: column !important;
            margin-bottom: 12px !important;
            gap: 8px !important;
          }
          .hero-ctas a {
            width: 100% !important;
            box-sizing: border-box !important;
            justify-content: center !important;
            padding: 10px 18px !important;
          }
          .hero-ctas a:last-child {
            border-color: rgba(255,255,255,0.55) !important;
          }
          .hero-reviews {
            margin-top: 4px !important;
          }
          .hero-reviews span {
            font-size: 12px !important;
          }
        }
      `}</style>
    </>
  )
}
