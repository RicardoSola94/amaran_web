'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import type { Language } from '@/types'
import en from '@/locales/en'
import es from '@/locales/es'

type Translations = typeof en

interface LanguageContextValue {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: keyof Translations) => string | string[]
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const translations: Record<Language, Translations> = { en, es }

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en')

  useEffect(() => {
    const saved = localStorage.getItem('ais_lang')
    if (saved === 'en' || saved === 'es') {
      setLanguageState(saved)
    }
  }, [])

  function setLanguage(lang: Language) {
    setLanguageState(lang)
    localStorage.setItem('ais_lang', lang)
  }

  function t(key: keyof Translations): string | string[] {
    return translations[language][key] as string | string[]
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider')
  return ctx
}
