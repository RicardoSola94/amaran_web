'use client'

import { useLanguage } from '@/context/LanguageContext'

export default function FinalCTA() {
  const { t } = useLanguage()

  return (
    <section className="py-20" style={{ background: '#C9A84C' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-white/70 font-body text-sm uppercase tracking-widest mb-4">
          {t('final_cta_eyebrow') as string}
        </p>
        <h2 className="text-white font-display text-5xl md:text-6xl lg:text-7xl leading-none mb-6">
          {t('final_cta_title') as string}
        </h2>
        <p className="text-white/80 font-body text-lg max-w-xl mx-auto mb-10">
          {t('final_cta_subtitle') as string}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-white hover:bg-brand-white text-brand-red font-body font-semibold text-base px-8 py-4 rounded transition-colors"
          >
            {t('final_cta_primary') as string}
          </a>
          <a
            href="tel:8132793943"
            className="inline-flex items-center justify-center border-2 border-white/50 hover:border-white text-white font-body font-medium text-base px-8 py-4 rounded transition-colors"
          >
            {t('final_cta_secondary') as string}
          </a>
          <a
            href="https://wa.me/18132793943"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#25D366] hover:bg-[#1ebe5a] text-white font-body font-semibold text-base px-8 py-4 rounded transition-colors"
          >
            {t('final_cta_whatsapp') as string}
          </a>
        </div>
      </div>
    </section>
  )
}
