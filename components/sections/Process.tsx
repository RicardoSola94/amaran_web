'use client'

import { useLanguage } from '@/context/LanguageContext'
import SectionHeader from '@/components/ui/SectionHeader'
import { type ReactElement } from 'react'
import type en from '@/locales/en'

type TKey = keyof typeof en

const steps: Array<{ titleKey: TKey; descKey: TKey; icon: ReactElement }> = [
  {
    titleKey: 'process_step_1_title',
    descKey: 'process_step_1_desc',
    icon: (
      <svg width={22} height={22} viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 .01h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"/>
      </svg>
    ),
  },
  {
    titleKey: 'process_step_2_title',
    descKey: 'process_step_2_desc',
    icon: (
      <svg width={22} height={22} viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 3H3v18h18V3z"/>
        <path d="M9 9h6M9 12h6M9 15h4"/>
      </svg>
    ),
  },
  {
    titleKey: 'process_step_3_title',
    descKey: 'process_step_3_desc',
    icon: (
      <svg width={22} height={22} viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
  },
  {
    titleKey: 'process_step_4_title',
    descKey: 'process_step_4_desc',
    icon: (
      <svg width={22} height={22} viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2"/>
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/>
        <line x1="12" y1="12" x2="12" y2="16"/>
        <line x1="10" y1="14" x2="14" y2="14"/>
      </svg>
    ),
  },
  {
    titleKey: 'process_step_5_title',
    descKey: 'process_step_5_desc',
    icon: (
      <svg width={22} height={22} viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
    ),
  },
]

export default function Process() {
  const { t } = useLanguage()

  return (
    <section className="process-section" id="process" style={{ background: '#f0efed' }}>
      <div className="process-container">
        <SectionHeader
          eyebrow={t('process_eyebrow') as string}
          title={t('process_title') as string}
          subtitle={t('process_subtitle') as string}
        />

        <div className="relative">
          {/* Connector line — desktop */}
          <div className="hidden lg:block absolute top-10 left-0 right-0 h-px" style={{ background: 'rgba(0,0,0,0.10)' }} />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {steps.map(({ titleKey, descKey, icon }, index) => (
              <div key={titleKey} className="relative flex flex-col items-center text-center">
                {/* Step number circle */}
                <div className="relative z-10 w-20 h-20 rounded-full flex flex-col items-center justify-center mb-6" style={{ background: 'rgba(212,43,43,0.10)', border: '2px solid rgba(212,43,43,0.22)' }}>
                  <div style={{ color: '#d42b2b' }}>{icon}</div>
                  <span className="text-brand-red font-display text-xs mt-1">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="text-brand-black font-display text-xl mb-2">
                  {t(titleKey) as string}
                </h3>
                <p className="text-brand-gray-600 font-body text-sm leading-relaxed">
                  {t(descKey) as string}
                </p>
              </div>
            ))}
          </div>
        </div>

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
              textTransform: 'uppercase' as const,
              textDecoration: 'none',
              padding: '13px 32px',
              borderRadius: 2,
            }}
          >
            {t('hero_cta_primary') as string}
          </a>
        </div>

        {/* ── MATERIALS MINI ── */}
        <div style={{
          marginTop: 64,
          paddingTop: 48,
          borderTop: '1px solid rgba(0,0,0,0.08)',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 24,
        }} className="materials-grid">

          {/* Manual */}
          <div style={{
            background: '#ffffff',
            border: '1px solid #e2e0dc',
            borderRadius: 4,
            padding: '28px 24px',
          }}>
            <div style={{ color: '#d42b2b', fontFamily: 'var(--font-display)', fontSize: 13, letterSpacing: '0.1em', marginBottom: 12 }}>
              {t('materials_manual_label') as string}
            </div>
            <div style={{ color: '#0a0a0a', fontFamily: 'var(--font-display)', fontSize: 22, marginBottom: 10 }}>
              {t('materials_manual_title') as string}
            </div>
            <div style={{ color: '#5a5752', fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 300, lineHeight: 1.65 }}>
              {t('materials_manual_desc') as string}
            </div>
          </div>

          {/* Motorized */}
          <div style={{
            background: 'rgba(212,43,43,0.06)',
            border: '1px solid rgba(212,43,43,0.25)',
            borderRadius: 4,
            padding: '28px 24px',
          }}>
            <div style={{ color: '#d42b2b', fontFamily: 'var(--font-display)', fontSize: 13, letterSpacing: '0.1em', marginBottom: 12 }}>
              {t('materials_motorized_label') as string}
            </div>
            <div style={{ color: '#0a0a0a', fontFamily: 'var(--font-display)', fontSize: 22, marginBottom: 10 }}>
              {t('materials_motorized_title') as string}
            </div>
            <div style={{ color: '#5a5752', fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 300, lineHeight: 1.65 }}>
              {t('materials_motorized_desc') as string}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .process-section { padding: 96px 0; }
        .process-container { max-width: 1280px; margin: 0 auto; padding: 0 64px; }
        .materials-grid { grid-template-columns: 1fr 1fr !important; }
        @media (max-width: 1023px) {
          .process-section { padding: 80px 0 !important; }
          .process-container { padding: 0 32px !important; }
        }
        @media (max-width: 767px) {
          .process-section { padding: 64px 0 !important; }
          .process-container { padding: 0 24px !important; }
          .materials-grid { grid-template-columns: 1fr !important; gap: 12px !important; }
        }
      `}</style>
    </section>
  )
}
