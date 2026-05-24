'use client'

import { useLanguage } from '@/context/LanguageContext'

const services = [
  'sol_zebra_title',
  'sol_drapery_title',
  'sol_blackout_title',
  'sol_zipper_title',
  'sol_translucent_title',
  'sol_motorized_title',
] as const

const companyLinks = [
  { labelKey: 'footer_company_process', href: '#process' },
  { labelKey: 'footer_company_gallery', href: '#gallery' },
  { labelKey: 'footer_company_contact', href: '#contact' },
] as const


export default function Footer() {
  const { t } = useLanguage()

  return (
    <>
    <footer className="bg-brand-black text-brand-gray-400">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div style={{ marginBottom: 16 }}>
              {/* ZEBRA */}
              <div style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 22,
                fontWeight: 700,
                letterSpacing: '0.08em',
                color: '#ffffff',
                lineHeight: 1,
                textTransform: 'uppercase',
              }}>
                ZEBRA
              </div>

              {/* BLINDS — dorado */}
              <div style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 22,
                fontWeight: 700,
                letterSpacing: '0.08em',
                background: 'linear-gradient(180deg, #e8c96a 0%, #C9A84C 40%, #a8893a 70%, #C9A84C 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                lineHeight: 1,
                textTransform: 'uppercase',
              }}>
                BLINDS
              </div>

              {/* TAMPA con líneas */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 5,
                marginTop: 3,
              }}>
                <div style={{
                  height: 1,
                  width: 16,
                  background: 'linear-gradient(to right, transparent, #C9A84C)',
                }} />
                <span style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 10,
                  fontWeight: 600,
                  letterSpacing: '0.22em',
                  color: '#ffffff',
                  textTransform: 'uppercase',
                }}>
                  TAMPA
                </span>
                <div style={{
                  height: 1,
                  width: 16,
                  background: 'linear-gradient(to left, transparent, #C9A84C)',
                }} />
              </div>

              {/* by Amaran — subtexto */}
              <div style={{
                fontFamily: 'var(--font-body)',
                fontSize: 9,
                letterSpacing: '0.04em',
                color: 'rgba(158,155,149,0.55)',
                fontWeight: 400,
                marginTop: 3,
              }}>
                by Amaran Integral Service LLC
              </div>
            </div>
            <p className="text-brand-gray-600 text-sm font-body italic mb-6">
              &ldquo;{t('footer_tagline') as string}&rdquo;
            </p>
            <a
              href="tel:+18132793943"
              className="text-brand-white hover:text-brand-red font-body font-medium transition-colors block mb-2"
            >
              (813) 279-3943
            </a>
            <a
              href="https://wa.me/18132793943"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm transition-colors flex items-center gap-1.5"
              style={{ color: '#25D366' }}
            >
              <svg width={14} height={14} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
            {/* Email — agregar cuando cliente confirme: info@amaranintegralservice.com */}
          </div>

          {/* Services */}
          <div>
            <p className="text-brand-white font-body font-semibold text-sm uppercase tracking-wider mb-5">
              {t('footer_services_title') as string}
            </p>
            <ul className="footer-services-list space-y-2">
              {services.map((key) => (
                <li key={key}>
                  <a
                    href="#solutions"
                    className="text-brand-gray-600 hover:text-brand-white text-sm font-body transition-colors"
                  >
                    {t(key) as string}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-brand-white font-body font-semibold text-sm uppercase tracking-wider mb-5">
              {t('footer_company_title') as string}
            </p>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.labelKey}>
                  <a
                    href={link.href}
                    className="text-brand-gray-600 hover:text-brand-white text-sm font-body transition-colors"
                  >
                    {t(link.labelKey) as string}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <div style={{
              fontFamily: 'var(--font-body)',
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#C9A84C',
              marginBottom: 12,
            }}>
              {t('footer_service_areas') as string}
            </div>
            <div style={{
              fontFamily: 'var(--font-body)',
              fontSize: 12,
              color: 'rgba(158,155,149,0.65)',
              lineHeight: 2,
            }}>
              Tampa · St. Petersburg · Brandon · Riverview<br />
              Sarasota · Clearwater · Lakeland · All Florida
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-brand-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-brand-gray-600 text-sm font-body">
            © {new Date().getFullYear()} {t('footer_copyright') as string}
          </p>
          <div className="flex gap-6">
            <a href="/privacy" className="text-brand-gray-600 hover:text-brand-white text-xs font-body transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-brand-gray-600 hover:text-brand-white text-xs font-body transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>

    <style>{`
      .footer-container { max-width: 1280px; margin: 0 auto; padding: 64px 64px; }
      .footer-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 40px; }
      @media (max-width: 1023px) {
        .footer-container { padding: 48px 32px !important; }
        .footer-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 32px !important; }
      }
      @media (max-width: 767px) {
        .footer-container { padding: 48px 24px 32px !important; }
        .footer-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        .footer-services-list { display: grid; grid-template-columns: 1fr 1fr; gap: 4px 16px; }
      }
    `}</style>
    </>
  )
}
