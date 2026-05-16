'use client'

import { useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import SectionHeader from '@/components/ui/SectionHeader'

const faqPairs = [
  { qKey: 'faq_q1', aKey: 'faq_a1' },
  { qKey: 'faq_q2', aKey: 'faq_a2' },
  { qKey: 'faq_q3', aKey: 'faq_a3' },
  { qKey: 'faq_q4', aKey: 'faq_a4' },
  { qKey: 'faq_q5', aKey: 'faq_a5' },
  { qKey: 'faq_q6', aKey: 'faq_a6' },
  { qKey: 'faq_q7', aKey: 'faq_a7' },
  { qKey: 'faq_q8', aKey: 'faq_a8' },
  { qKey: 'faq_q9', aKey: 'faq_a9' },
  { qKey: 'faq_q10', aKey: 'faq_a10' },
] as const

export default function FAQ() {
  const { t } = useLanguage()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  function toggle(i: number) {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <section className="py-20" style={{ background: '#f8f7f5' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={t('faq_eyebrow') as string}
          title={t('faq_title') as string}
          subtitle={t('faq_subtitle') as string}
        />

        <div className="space-y-3">
          {faqPairs.map(({ qKey, aKey }, i) => (
            <div
              key={qKey}
              className="border border-brand-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left bg-brand-white hover:bg-brand-gray-100 transition-colors"
                aria-expanded={openIndex === i}
              >
                <span className="font-body font-medium text-brand-black pr-4">
                  {t(qKey) as string}
                </span>
                <span
                  className={`text-brand-red flex-shrink-0 transition-transform ${openIndex === i ? 'rotate-45' : ''}`}
                  aria-hidden="true"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </span>
              </button>

              {openIndex === i && (
                <div className="px-6 pb-5 bg-brand-gray-100">
                  <p className="text-brand-gray-600 font-body text-sm leading-relaxed pt-4">
                    {t(aKey) as string}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
