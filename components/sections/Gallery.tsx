'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'

type GalleryItemType = 'interior' | 'exterior'

const galleryItems = [
  { id: 'g1', label: 'Zebra Blinds', city: 'Tampa', type: 'interior' as GalleryItemType, image: '/images/gallery/image1.jpeg' },
  { id: 'g2', label: 'Blackout Blinds', city: 'Brandon', type: 'interior' as GalleryItemType, image: '/images/gallery/image2.jpeg' },
  { id: 'g3', label: 'Shade Screens', city: 'St. Petersburg', type: 'interior' as GalleryItemType, image: '/images/gallery/image3.jpeg' },
  { id: 'g4', label: 'Zipper Screens', city: 'Riverview', type: 'exterior' as GalleryItemType, image: '/images/gallery/image4.jpeg' },
  { id: 'g5', label: 'Motorized Screens', city: 'Sarasota', type: 'exterior' as GalleryItemType, image: '/images/gallery/motorized-screens-sarasota.png' },
  { id: 'g6', label: 'Patio Screens', city: 'Tampa', type: 'exterior' as GalleryItemType, image: '/images/gallery/image5.jpeg' },
]

export default function Gallery() {
  const { t } = useLanguage()
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({})
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const touchStartX = useRef<number>(0)

  const openLightbox = (index: number) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)
  const goNext = () => setLightboxIndex(i =>
    i !== null ? (i + 1) % galleryItems.length : null)
  const goPrev = () => setLightboxIndex(i =>
    i !== null ? (i - 1 + galleryItems.length) % galleryItems.length : null)

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') goNext()
      if (e.key === 'ArrowLeft') goPrev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightboxIndex])

  const activeItem = lightboxIndex !== null ? galleryItems[lightboxIndex] : null

  return (
    <>
      <section id="gallery" className="gallery-section" style={{ backgroundColor: '#f0efed' }}>
        <div className="gallery-container">

          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{ width: 24, height: 1, backgroundColor: '#d42b2b' }} />
              <span style={{
                fontFamily: 'var(--font-body)',
                fontSize: 10,
                fontWeight: 500,
                letterSpacing: '0.22em',
                textTransform: 'uppercase' as const,
                color: '#d42b2b',
              }}>
                {t('gallery_eyebrow') as string}
              </span>
              <div style={{ width: 24, height: 1, backgroundColor: '#d42b2b' }} />
            </div>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(32px, 4.5vw, 60px)',
              lineHeight: 0.95,
              letterSpacing: '0.02em',
              color: '#0a0a0a',
              margin: '0 0 16px',
            }}>
              {t('gallery_title') as string}
            </h2>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 15,
              fontWeight: 300,
              color: '#5a5752',
              maxWidth: 540,
              margin: '0 auto',
              lineHeight: 1.7,
            }}>
              {t('gallery_subtitle') as string}
            </p>
          </div>

          {/* Grid */}
          <div className="gallery-grid">
            {galleryItems.map((item, index) => (
              <div
                key={item.id}
                onClick={() => openLightbox(index)}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
                style={{ cursor: 'pointer', position: 'relative', aspectRatio: '1/1', overflow: 'hidden' }}
              >
                {imgErrors[item.id] ? (
                  /* Placeholder */
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundColor: '#0f0f0f',
                    backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 48px)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 10,
                  }}>
                    <div style={{
                      width: 44,
                      height: 44,
                      borderRadius: '50%',
                      background: 'rgba(212,43,43,0.10)',
                      border: '1px solid rgba(212,43,43,0.20)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'rgba(212,43,43,0.55)',
                    }}>
                      <svg width={20} height={20} viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="18" height="18" rx="2"/>
                        <circle cx="8.5" cy="8.5" r="1.5"/>
                        <polyline points="21 15 16 10 5 21"/>
                      </svg>
                    </div>
                    <div style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 11,
                      fontWeight: 600,
                      letterSpacing: '0.10em',
                      textTransform: 'uppercase' as const,
                      color: 'rgba(255,255,255,0.50)',
                      textAlign: 'center' as const,
                    }}>
                      {item.label}
                    </div>
                    <div style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 10,
                      color: 'rgba(158,155,149,0.35)',
                    }}>
                      {item.city}, FL
                    </div>
                    <div style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: 2,
                      background: 'linear-gradient(to right, #d42b2b, transparent)',
                    }} />
                  </div>
                ) : (
                  <>
                    <Image
                      src={item.image}
                      alt={`${item.label} installation — ${item.city}, Tampa Bay`}
                      fill
                      sizes="(max-width: 767px) 50vw, 33vw"
                      style={{ objectFit: 'cover' }}
                      onError={() => setImgErrors((prev) => ({ ...prev, [item.id]: true }))}
                    />
                    {/* Hover overlay — hidden on mobile via CSS */}
                    <div className="gallery-hover-overlay" style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'rgba(0,0,0,0.55)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 4,
                      opacity: hoveredItem === item.id ? 1 : 0,
                      transition: 'opacity 250ms',
                    }}>
                      <div style={{ width: 20, height: 1, backgroundColor: '#d42b2b', marginBottom: 4 }} />
                      <div style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: 12,
                        fontWeight: 600,
                        letterSpacing: '0.10em',
                        textTransform: 'uppercase' as const,
                        color: '#ffffff',
                        textAlign: 'center' as const,
                        padding: '0 12px',
                      }}>
                        {item.label}
                      </div>
                      <div style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: 11,
                        color: 'rgba(200,196,190,0.75)',
                      }}>
                        {item.city}, FL
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <a
              href="#contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                backgroundColor: '#d42b2b',
                color: '#ffffff',
                fontFamily: 'var(--font-body)',
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase' as const,
                textDecoration: 'none',
                padding: '14px 32px',
                borderRadius: 2,
              }}
            >
              {t('gallery_cta') as string} <span style={{ fontSize: 16 }}>→</span>
            </a>
          </div>
        </div>

        {/* Lightbox */}
        {activeItem && (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(0,0,0,0.95)',
              zIndex: 200,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onClick={closeLightbox}
            onTouchStart={e => { touchStartX.current = e.touches[0].clientX }}
            onTouchEnd={e => {
              const diff = touchStartX.current - e.changedTouches[0].clientX
              if (diff > 50) goNext()
              if (diff < -50) goPrev()
            }}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              aria-label="Close"
              style={{
                position: 'absolute',
                top: 20,
                right: 20,
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: '#ffffff',
                padding: 8,
                zIndex: 1,
                opacity: 0.75,
              }}
            >
              <svg width={28} height={28} viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth={1.5} strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>

            {/* Prev */}
            <button
              onClick={e => { e.stopPropagation(); goPrev() }}
              aria-label="Previous photo"
              style={{
                position: 'absolute',
                left: 20,
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: 2,
                cursor: 'pointer',
                color: '#ffffff',
                padding: '12px 10px',
                zIndex: 1,
              }}
            >
              <svg width={22} height={22} viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"/>
              </svg>
            </button>

            {/* Next */}
            <button
              onClick={e => { e.stopPropagation(); goNext() }}
              aria-label="Next photo"
              style={{
                position: 'absolute',
                right: 20,
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: 2,
                cursor: 'pointer',
                color: '#ffffff',
                padding: '12px 10px',
                zIndex: 1,
              }}
            >
              <svg width={22} height={22} viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </button>

            {/* Photo + caption — stopPropagation so clicking photo doesn't close */}
            <div
              onClick={e => e.stopPropagation()}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 16,
                width: '100%',
              }}
            >
              <div style={{
                position: 'relative',
                width: 'min(90vw, 1000px)',
                height: '75vh',
              }}>
                <Image
                  src={activeItem.image}
                  alt={`${activeItem.label} installation — ${activeItem.city}, Tampa Bay`}
                  fill
                  sizes="90vw"
                  style={{ objectFit: 'contain' }}
                />
              </div>

              {/* Caption */}
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase' as const,
                  color: '#ffffff',
                  marginBottom: 4,
                }}>
                  {activeItem.label}
                </div>
                <div style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 11,
                  color: 'rgba(200,196,190,0.60)',
                }}>
                  {activeItem.city}, FL
                </div>
              </div>
            </div>

            {/* Counter */}
            {lightboxIndex !== null && (
              <div style={{
                position: 'absolute',
                bottom: 24,
                left: '50%',
                transform: 'translateX(-50%)',
                fontFamily: 'var(--font-body)',
                fontSize: 11,
                color: 'rgba(255,255,255,0.30)',
                letterSpacing: '0.10em',
              }}>
                {lightboxIndex + 1} / {galleryItems.length}
              </div>
            )}
          </div>
        )}

        <style>{`
          .gallery-section { padding: 96px 0; }
          .gallery-container { max-width: 1280px; margin: 0 auto; padding: 0 64px; }
          .gallery-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 6px; }
          @media (max-width: 1023px) {
            .gallery-section { padding: 80px 0 !important; }
            .gallery-container { padding: 0 32px !important; }
            .gallery-grid { grid-template-columns: repeat(3, 1fr) !important; gap: 6px !important; }
          }
          @media (max-width: 767px) {
            .gallery-section { padding: 64px 0 !important; }
            .gallery-container { padding: 0 16px !important; }
            .gallery-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 4px !important; }
            .gallery-hover-overlay { display: none !important; }
          }
        `}</style>
      </section>
    </>
  )
}
