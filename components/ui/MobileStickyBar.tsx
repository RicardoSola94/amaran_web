'use client'

import { useLanguage } from '@/context/LanguageContext'

const PHONE_HREF = 'tel:+18132793943'
const WHATSAPP_HREF = 'https://wa.me/18132793943'

export default function MobileStickyBar() {
  const { t } = useLanguage()

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 flex h-14 border-t border-white/10 bg-brand-black md:hidden">
      <a
        href={PHONE_HREF}
        className="flex flex-1 items-center justify-center gap-2 border-r border-white/10 font-body text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-brand-red active:bg-brand-red-dark"
      >
        <span aria-hidden="true">📞</span>
        {t('sticky_call') as string}
      </a>
      <a
        href={WHATSAPP_HREF}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 items-center justify-center gap-2 font-body text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-brand-red active:bg-brand-red-dark"
      >
        <span aria-hidden="true">💬</span>
        {t('sticky_whatsapp') as string}
      </a>
    </div>
  )
}
