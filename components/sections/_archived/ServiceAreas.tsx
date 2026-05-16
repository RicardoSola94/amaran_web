'use client'

import { useLanguage } from '@/context/LanguageContext'
import SectionHeader from '@/components/ui/SectionHeader'

export default function ServiceAreas() {
  const { t } = useLanguage()

  const cities = t('areas_cities') as string[]

  return (
    <section className="py-20" style={{ background: '#0a0a0a' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={t('areas_eyebrow') as string}
          title={t('areas_title') as string}
          subtitle={t('areas_subtitle') as string}
          light
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Primary */}
          <div>
            <h3 className="font-display text-2xl mb-6 flex items-center gap-2" style={{ color: '#ffffff' }}>
              <span className="w-3 h-3 rounded-full bg-brand-red inline-block" />
              {t('areas_primary_title') as string}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {cities.map((city) => (
                <div
                  key={city}
                  className="rounded px-3 py-2 text-sm font-body transition-colors"
                  style={{ background: '#111111', color: 'rgba(158,155,149,0.8)', border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  {city}
                </div>
              ))}
            </div>
          </div>

          {/* Secondary */}
          <div className="flex flex-col justify-center">
            <div className="bg-brand-black rounded-lg p-8 text-center">
              <span className="text-5xl mb-4 block" aria-hidden="true">🌴</span>
              <h3 className="text-brand-white font-display text-2xl mb-3">
                {t('areas_secondary_title') as string}
              </h3>
              <p className="text-brand-gray-400 font-body text-sm leading-relaxed mb-6">
                {t('areas_secondary_desc') as string}
              </p>
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-brand-red hover:bg-brand-red-dark text-white font-body font-semibold text-sm px-6 py-3 rounded transition-colors"
              >
                {t('nav_cta') as string}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
