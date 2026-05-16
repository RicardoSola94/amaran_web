'use client'

import { useLanguage } from '@/context/LanguageContext'

export default function LangToggle() {
  const { language, setLanguage } = useLanguage()

  const activeStyle: React.CSSProperties = {
    background: 'none',
    border: 'none',
    padding: '4px 6px',
    cursor: 'pointer',
    fontFamily: 'var(--font-body)',
    fontSize: 11,
    letterSpacing: '0.10em',
    fontWeight: 600,
    color: '#ffffff',
    transition: 'color 200ms',
  }

  const inactiveStyle: React.CSSProperties = {
    background: 'none',
    border: 'none',
    padding: '4px 6px',
    cursor: 'pointer',
    fontFamily: 'var(--font-body)',
    fontSize: 11,
    letterSpacing: '0.10em',
    fontWeight: 400,
    color: 'rgba(158,155,149,0.45)',
    transition: 'color 200ms',
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      <button
        onClick={() => setLanguage('en')}
        style={language === 'en' ? activeStyle : inactiveStyle}
        aria-label="Switch to English"
      >
        EN
      </button>
      <span style={{ color: 'rgba(158,155,149,0.30)', fontSize: 10, lineHeight: 1 }}>·</span>
      <button
        onClick={() => setLanguage('es')}
        style={language === 'es' ? activeStyle : inactiveStyle}
        aria-label="Cambiar a Español"
      >
        ES
      </button>
    </div>
  )
}
