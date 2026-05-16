'use client'

import { useLanguage } from '@/context/LanguageContext'
import SectionHeader from '@/components/ui/SectionHeader'

const fabricKeys = [
  'materials_fabric_1',
  'materials_fabric_2',
  'materials_fabric_3',
  'materials_fabric_4',
  'materials_fabric_5',
] as const

export default function MaterialsOptions() {
  const { t } = useLanguage()

  return (
    <section className="py-20" style={{ background: '#f8f7f5' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={t('materials_eyebrow') as string}
          title={t('materials_title') as string}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Manual */}
          <div className="bg-brand-white rounded-lg p-8 border border-brand-gray-200">
            <span className="text-4xl mb-4 block" aria-hidden="true">🔧</span>
            <h3 className="text-brand-black font-display text-2xl mb-3">
              {t('materials_manual_title') as string}
            </h3>
            <p className="text-brand-gray-600 font-body text-sm leading-relaxed">
              {t('materials_manual_desc') as string}
            </p>
          </div>

          {/* Motorized */}
          <div className="bg-brand-black rounded-lg p-8 border border-brand-red">
            <span className="text-4xl mb-4 block" aria-hidden="true">⚡</span>
            <h3 className="text-brand-white font-display text-2xl mb-3">
              {t('materials_motorized_title') as string}
            </h3>
            <p className="text-brand-gray-400 font-body text-sm leading-relaxed">
              {t('materials_motorized_desc') as string}
            </p>
          </div>

          {/* Smart Home */}
          <div className="bg-brand-white rounded-lg p-8 border border-brand-gray-200">
            <span className="text-4xl mb-4 block" aria-hidden="true">🏠</span>
            <h3 className="text-brand-black font-display text-2xl mb-3">
              {t('materials_smart_title') as string}
            </h3>
            <p className="text-brand-gray-600 font-body text-sm leading-relaxed">
              {t('materials_smart_desc') as string}
            </p>
          </div>
        </div>

        {/* Fabric options */}
        <div className="mt-12 bg-brand-white rounded-lg p-8 border border-brand-gray-200">
          <h3 className="text-brand-black font-display text-2xl mb-6">
            {t('materials_fabric_title') as string}
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {fabricKeys.map((key) => (
              <li key={key} className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-brand-red flex-shrink-0" />
                <span className="text-brand-gray-600 font-body text-sm">
                  {t(key) as string}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
