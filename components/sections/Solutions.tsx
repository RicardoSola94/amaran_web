'use client'

import { useState } from 'react'
import BaseImage from '@/components/ui/BaseImage'
import { useLanguage } from '@/context/LanguageContext'

type SolutionType = 'interior' | 'exterior'

const solutions = [
  {
    id: 'zebra',
    type: 'interior' as SolutionType,
    titleKey: 'sol_zebra_title',
    descKey: 'sol_zebra_desc',
    benefitKeys: ['sol_zebra_b1', 'sol_zebra_b2', 'sol_zebra_b3'],
    image: '/images/solutions/zebra-blinds.jpeg',
  },
  {
    id: 'drapery',
    type: 'interior' as SolutionType,
    titleKey: 'sol_drapery_title',
    descKey: 'sol_drapery_desc',
    benefitKeys: ['sol_drapery_b1', 'sol_drapery_b2', 'sol_drapery_b3'],
    image: '/images/solutions/drapery.jpeg',
  },
  {
    id: 'blackout',
    type: 'interior' as SolutionType,
    titleKey: 'sol_blackout_title',
    descKey: 'sol_blackout_desc',
    benefitKeys: ['sol_blackout_b1', 'sol_blackout_b2', 'sol_blackout_b3'],
    image: '/images/solutions/blackout-shades.jpeg',
  },
  {
    id: 'zipper',
    type: 'exterior' as SolutionType,
    titleKey: 'sol_zipper_title',
    descKey: 'sol_zipper_desc',
    benefitKeys: ['sol_zipper_b1', 'sol_zipper_b2', 'sol_zipper_b3'],
    image: '/images/solutions/zipper-screens.png',
  },
  {
    id: 'translucent',
    type: 'interior' as SolutionType,
    titleKey: 'sol_translucent_title',
    descKey: 'sol_translucent_desc',
    benefitKeys: ['sol_translucent_b1', 'sol_translucent_b2', 'sol_translucent_b3'],
    image: '/images/solutions/translucent-shades.jpeg',
  },
  {
    id: 'motorized',
    type: 'exterior' as SolutionType,
    titleKey: 'sol_motorized_title',
    descKey: 'sol_motorized_desc',
    benefitKeys: ['sol_motorized_b1', 'sol_motorized_b2', 'sol_motorized_b3'],
    image: '/images/solutions/motorized_screens.png',
  },
] as const

export default function Solutions() {
  const { t } = useLanguage()
  const [activeTab, setActiveTab] = useState<'all' | SolutionType>('all')
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({})

  const filtered = activeTab === 'all'
    ? solutions
    : solutions.filter((s) => s.type === activeTab)

  return (
    <>
      <section id="solutions" className="solutions-section scroll-mt-20" style={{ backgroundColor: '#f0efed' }}>

        {/* HEADER */}
        <div className="solutions-header" style={{ maxWidth: 1280, margin: '0 auto', padding: '0 64px', textAlign: 'center' }}>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 16 }}>
            <div style={{ width: 24, height: 1, backgroundColor: '#C9A84C' }} />
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 10, fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase' as const, color: '#C9A84C' }}>
              {t('solutions_eyebrow') as string}
            </span>
            <div style={{ width: 24, height: 1, backgroundColor: '#C9A84C' }} />
          </div>

          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 4.5vw, 60px)', lineHeight: 0.95, letterSpacing: '0.02em', color: '#0a0a0a', margin: '0 0 16px' }}>
            {t('solutions_title') as string}
          </h2>

          <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 300, color: '#5a5752', maxWidth: 540, margin: '0 auto 32px', lineHeight: 1.7 }}>
            {t('solutions_subtitle') as string}
          </p>

          {/* Tabs */}
          <div className="solutions-tabs" style={{ border: '1px solid #d9d7d3', borderRadius: 3, overflow: 'hidden' }}>
            {(['all', 'interior', 'exterior'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: '0.10em',
                  textTransform: 'uppercase' as const,
                  padding: '10px 28px',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 200ms',
                  backgroundColor: activeTab === tab ? '#0a0a0a' : 'transparent',
                  color: activeTab === tab ? '#ffffff' : '#5a5752',
                }}
              >
                {tab === 'all'
                  ? (t('solutions_tab_all') as string)
                  : tab === 'interior'
                  ? (t('solutions_tab_interior') as string)
                  : (t('solutions_tab_exterior') as string)}
              </button>
            ))}
          </div>
        </div>

        {/* GRID */}
        <div className="solutions-grid" style={{ maxWidth: 1280, margin: '0 auto', padding: '0 64px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0 }}>
          {filtered.map((solution, index) => (
            <div
              key={solution.id}
              onMouseEnter={() => setHoveredCard(solution.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                backgroundColor: '#ffffff',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 250ms, box-shadow 250ms',
                transform: hoveredCard === solution.id ? 'translateY(-4px)' : 'translateY(0)',
                boxShadow: hoveredCard === solution.id
                  ? '0 12px 40px rgba(0,0,0,0.12)'
                  : '0 1px 4px rgba(0,0,0,0.05)',
              }}
            >
              {/* Photo area */}
              <div style={{ position: 'relative', height: 210, backgroundColor: '#0f0f0f', overflow: 'hidden' }}>

                {/* Placeholder — visible only when the photo fails to load */}
                {imgErrors[solution.id] && (
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 12,
                    background: 'linear-gradient(135deg, #111111 0%, #1a1a1a 50%, #111111 100%)',
                  }}>
                    {/* Subtle line pattern */}
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 40px)',
                    }} />
                    {/* Icon */}
                    <div style={{
                      width: 48,
                      height: 48,
                      borderRadius: '50%',
                      background: 'rgba(201,168,76,0.10)',
                      border: '1px solid rgba(201,168,76,0.20)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'rgba(201,168,76,0.60)',
                      position: 'relative',
                      zIndex: 1,
                    }}>
                      <svg width={22} height={22} viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="18" height="18" rx="2"/>
                        <circle cx="8.5" cy="8.5" r="1.5"/>
                        <polyline points="21 15 16 10 5 21"/>
                      </svg>
                    </div>
                    {/* Label */}
                    <div style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 10,
                      fontWeight: 500,
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase' as const,
                      color: 'rgba(158,155,149,0.35)',
                      position: 'relative',
                      zIndex: 1,
                    }}>
                      {t('solutions_photo_placeholder') as string}
                    </div>
                  </div>
                )}

                {/* Real image — shown when it exists */}
                {!imgErrors[solution.id] && (
                  <BaseImage
                    src={solution.image}
                    alt={`${t(solution.titleKey) as string} — Tampa Bay installation`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    loading={index === 0 ? 'eager' : 'lazy'}
                    style={{
                      objectFit: 'cover',
                      transition: 'transform 400ms',
                      transform: hoveredCard === solution.id ? 'scale(1.05)' : 'scale(1)',
                    }}
                    onError={() => setImgErrors((prev) => ({ ...prev, [solution.id]: true }))}
                  />
                )}

                {/* Badge Interior/Exterior — always visible */}
                <div style={{
                  position: 'absolute', top: 12, left: 12, zIndex: 2,
                  backgroundColor: solution.type === 'interior'
                    ? 'rgba(10,10,10,0.85)'
                    : 'rgba(201,168,76,0.90)',
                  color: '#ffffff',
                  fontFamily: 'var(--font-body)',
                  fontSize: 9,
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase' as const,
                  padding: '4px 10px',
                  borderRadius: 2,
                }}>
                  {solution.type === 'interior'
                    ? (t('solutions_badge_interior') as string)
                    : (t('solutions_badge_exterior') as string)}
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: '24px 24px 20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 22, letterSpacing: '0.02em', color: '#0a0a0a', margin: '0 0 8px', lineHeight: 1.1 }}>
                  {t(solution.titleKey) as string}
                </h3>

                <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 300, color: '#5a5752', lineHeight: 1.65, margin: '0 0 16px' }}>
                  {t(solution.descKey) as string}
                </p>

                {/* Benefits */}
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px', borderTop: '1px solid #eceae7', paddingTop: 14 }}>
                  {solution.benefitKeys.map((key) => (
                    <li key={key} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '4px 0', fontFamily: 'var(--font-body)', fontSize: 12, color: '#2a2926' }}>
                      <span style={{ width: 10, height: 1, backgroundColor: '#C9A84C', flexShrink: 0, display: 'inline-block' }} />
                      {t(key) as string}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a href="#contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase' as const, color: '#C9A84C', textDecoration: 'none', marginTop: 'auto' }}>
                  {t('solutions_card_cta') as string} <span style={{ fontSize: 14 }}>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        .solutions-section { padding: 96px 0; }
        .solutions-header { margin-bottom: 48px !important; }
        .solutions-tabs { display: inline-flex; }
        @media (max-width: 1023px) {
          .solutions-section { padding: 80px 0 !important; }
          .solutions-grid { grid-template-columns: repeat(2, 1fr) !important; padding: 0 32px !important; }
          .solutions-header { padding: 0 32px !important; }
        }
        @media (max-width: 767px) {
          .solutions-section { padding: 64px 0 !important; }
          .solutions-grid { grid-template-columns: 1fr !important; padding: 0 24px !important; gap: 12px !important; }
          .solutions-header { padding: 0 24px !important; margin-bottom: 32px !important; }
          .solutions-tabs { display: flex !important; width: 100% !important; }
          .solutions-tabs button { flex: 1 !important; padding: 10px 8px !important; font-size: 10px !important; }
        }
      `}</style>
    </>
  )
}
