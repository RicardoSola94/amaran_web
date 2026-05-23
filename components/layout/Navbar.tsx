'use client'

import { useState, useEffect } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import LangToggle from '@/components/ui/LangToggle'

const centerLinks = [
  { key: 'nav_services' as const, href: '#solutions' },
  { key: 'nav_process' as const, href: '#process' },
  { key: 'nav_gallery' as const, href: '#gallery' },
  { key: 'nav_contact' as const, href: '#contact' },
]


export default function Navbar() {
  const { t } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [ctaHovered, setCtaHovered] = useState(false)
  const [mobileCTAHovered, setMobileCTAHovered] = useState(false)

  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 80)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  function closeMenu() {
    setIsMenuOpen(false)
  }

  const headerStyle: React.CSSProperties = isScrolled
    ? {
        backgroundColor: '#000000',
        borderBottom: '1px solid rgba(201,168,76,0.40)',
        boxShadow: '0 1px 40px rgba(0,0,0,0.8)',
      }
    : {
        backgroundColor: '#0a0a0a',
        borderBottom: '1px solid rgba(201,168,76,0.20)',
      }

  return (
    <>
      <style>{`
        @media (max-width: 1023px) {
          .navbar-logo-sub { display: none !important; }
        }
        @media (max-width: 767px) {
          .navbar-logo-name { font-size: 14px !important; }
          .navbar-logo-blinds { font-size: 14px !important; }
        }
        .mobile-cta:hover, .mobile-cta:active { background-color: #a8893a !important; }
      `}</style>
      {/* ── HEADER ── */}
      <header
        className="fixed top-0 left-0 right-0 w-full transition-all"
        style={{ height: 80, zIndex: 50, ...headerStyle }}
      >
        {/* Inner container */}
        <div
          className="flex items-center justify-between w-full h-full px-6 lg:px-12"
          style={{ maxWidth: 1280, margin: '0 auto' }}
        >
          {/* ── LOGO ── */}
          <a
            href="/"
            className="cursor-pointer"
            style={{ textDecoration: 'none', flexShrink: 0, textAlign: 'center' }}
          >
            {/* ZEBRA */}
            <div
              className="navbar-logo-name"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 16,
                fontWeight: 700,
                letterSpacing: '0.08em',
                color: '#ffffff',
                lineHeight: 1,
                textTransform: 'uppercase',
                textAlign: 'center',
                marginBottom: 1,
              }}
            >
              ZEBRA
            </div>

            {/* BLINDS — dorado */}
            <div
              className="navbar-logo-blinds"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 16,
                fontWeight: 700,
                letterSpacing: '0.08em',
                background: 'linear-gradient(180deg, #e8c96a 0%, #C9A84C 40%, #a8893a 70%, #C9A84C 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                lineHeight: 1,
                textTransform: 'uppercase',
                textAlign: 'center',
                marginBottom: 2,
              }}
            >
              BLINDS
            </div>

            {/* TAMPA con líneas */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 5,
              marginTop: 2,
            }}>
              <div style={{
                height: 1,
                width: 14,
                background: 'linear-gradient(to right, transparent, #C9A84C)',
              }} />
              <span style={{
                fontFamily: 'var(--font-body)',
                fontSize: 8,
                fontWeight: 600,
                letterSpacing: '0.22em',
                color: '#ffffff',
                textTransform: 'uppercase',
              }}>
                TAMPA
              </span>
              <div style={{
                height: 1,
                width: 14,
                background: 'linear-gradient(to left, transparent, #C9A84C)',
              }} />
            </div>

            {/* by Amaran — subtexto */}
            <div
              className="navbar-logo-sub"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 8,
                letterSpacing: '0.04em',
                color: 'rgba(158,155,149,0.55)',
                fontWeight: 400,
                marginTop: 2,
                textTransform: 'none',
                textAlign: 'center',
              }}
            >
              by Amaran Integral Service LLC
            </div>
          </a>

          {/* ── CENTER NAV (desktop only) ── */}
          <nav className="hidden lg:flex items-center" style={{ gap: 32 }}>
            {centerLinks.map((link) => (
              <NavLink key={link.key} href={link.href}>
                {t(link.key) as string}
              </NavLink>
            ))}
          </nav>

          {/* ── RIGHT ACTIONS (desktop) ── */}
          <div className="hidden lg:flex items-center" style={{ gap: 24 }}>
            <a
              href="tel:+18132793943"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: '0.08em',
                color: '#C9A84C',
                textDecoration: 'none',
              }}
              className="whitespace-nowrap"
            >
              (813) 279-3943
            </a>

            <LangToggle />

            <a
              href="#contact"
              className="whitespace-nowrap"
              style={{
                display: 'inline-block',
                padding: '9px 20px',
                backgroundColor: ctaHovered ? '#a8893a' : '#C9A84C',
                color: '#0a0a0a',
                fontFamily: 'var(--font-body)',
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                borderRadius: 2,
                transition: 'background 200ms',
              }}
              onMouseEnter={() => setCtaHovered(true)}
              onMouseLeave={() => setCtaHovered(false)}
            >
              {t('nav_cta') as string}
            </a>
          </div>

          {/* ── MOBILE RIGHT (logo already left, these are right) ── */}
          <div className="flex lg:hidden items-center" style={{ gap: 12 }}>
            <LangToggle />
            <button
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
              style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', lineHeight: 0 }}
            >
              <svg
                width={22}
                height={22}
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* ── MOBILE FULL-SCREEN MENU ── */}
      <div
        className="fixed lg:hidden flex"
        style={{
          inset: 0,
          zIndex: 100,
          backgroundColor: '#0a0a0a',
          flexDirection: 'column',
          padding: '80px 40px 40px',
          opacity: isMenuOpen ? 1 : 0,
          transform: isMenuOpen ? 'translateY(0)' : 'translateY(-12px)',
          transition: 'opacity 250ms ease, transform 250ms ease',
          pointerEvents: isMenuOpen ? 'auto' : 'none',
        }}
        aria-hidden={!isMenuOpen}
      >
        {/* Close button */}
        <button
          onClick={closeMenu}
          aria-label="Close menu"
          style={{
            position: 'absolute',
            top: 24,
            right: 24,
            background: 'none',
            border: 'none',
            fontSize: 28,
            color: '#ffffff',
            cursor: 'pointer',
            lineHeight: 1,
            padding: 0,
          }}
        >
          <svg width={20} height={20} viewBox="0 0 24 24" fill="none"
            stroke="#ffffff" strokeWidth={2} strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        {/* Stacked nav links */}
        <nav style={{ display: 'flex', flexDirection: 'column' }}>
          {centerLinks.map((link) => (
            <MobileNavLink key={link.key} href={link.href} onClick={closeMenu}>
              {t(link.key) as string}
            </MobileNavLink>
          ))}
        </nav>

        {/* Bottom: lang toggle + CTA */}
        <div style={{ marginTop: 'auto' }}>
          <LangToggle />
          <a
            href="tel:+18132793943"
            onClick={closeMenu}
            style={{
              display: 'block',
              fontFamily: 'var(--font-body)',
              fontSize: 15,
              fontWeight: 600,
              letterSpacing: '0.08em',
              color: '#C9A84C',
              textDecoration: 'none',
              marginBottom: 16,
              marginTop: 24,
            }}
          >
            <svg width={14} height={14} viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
              aria-hidden="true" style={{ display: 'inline', verticalAlign: 'middle', marginRight: 6 }}>
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 .01h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"/>
            </svg>
            (813) 279-3943
          </a>
          <a
            href="#contact"
            onClick={closeMenu}
            className="mobile-cta"
            style={{
              display: 'block',
              width: '100%',
              padding: '14px',
              backgroundColor: mobileCTAHovered ? '#a8893a' : '#C9A84C',
              color: '#0a0a0a',
              fontFamily: 'var(--font-body)',
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              borderRadius: 2,
              marginTop: 16,
              textAlign: 'center',
              transition: 'background 200ms',
              boxSizing: 'border-box',
            }}
            onMouseEnter={() => setMobileCTAHovered(true)}
            onMouseLeave={() => setMobileCTAHovered(false)}
          >
            {t('nav_cta') as string}
          </a>
        </div>
      </div>
    </>
  )
}

/* ── Sub-components ── */

function NavLink({ href, children }: { href: string; children: string }) {
  const [hovered, setHovered] = useState(false)
  return (
    <a
      href={href}
      style={{
        fontFamily: 'var(--font-body)',
        fontSize: 12,
        fontWeight: 500,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: hovered ? '#ffffff' : 'rgba(255,255,255,0.72)',
        textDecoration: 'none',
        transition: 'color 200ms',
      }}
      className="whitespace-nowrap"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </a>
  )
}

function MobileNavLink({
  href,
  children,
  onClick,
}: {
  href: string
  children: string
  onClick: () => void
}) {
  const [hovered, setHovered] = useState(false)
  return (
    <a
      href={href}
      onClick={onClick}
      style={{
        fontFamily: 'var(--font-display)',
        fontSize: 52,
        color: hovered ? '#C9A84C' : '#ffffff',
        lineHeight: 1.1,
        letterSpacing: '0.04em',
        textDecoration: 'none',
        marginBottom: 8,
        transition: 'color 200ms',
        display: 'block',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </a>
  )
}
