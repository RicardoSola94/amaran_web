import type { Metadata } from 'next'
import { Bebas_Neue, DM_Sans, DM_Serif_Display } from 'next/font/google'
import { AntdRegistry } from '@ant-design/nextjs-registry'
import { LanguageProvider } from '@/context/LanguageContext'
import HtmlLangSync from '@/components/ui/HtmlLangSync'
import './globals.css'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display-var',
  display: 'swap',
})

const dmSans = DM_Sans({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-body-var',
  display: 'swap',
})

const dmSerifDisplay = DM_Serif_Display({
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-serif-var',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://amaranintegralservice.com'),
  title:
    'Zipper Screens Tampa Bay | Custom Blinds & Screen Installation — Amaran Integral Service',
  description:
    'Custom zipper screens, motorized retractable screens, shade screens, zebra blinds, and blackout blinds for Tampa Bay homes and businesses. Free in-home estimate. Call (813) 279-3943.',
  keywords:
    'zipper screens Tampa, motorized screens Tampa Bay, retractable patio screens Tampa, shade screens Florida, zebra blinds Tampa, custom screen installation Tampa Bay',
  openGraph: {
    title: 'Zipper Screens Tampa Bay | Amaran Integral Service',
    description:
      'Custom zipper screens, motorized retractable screens, shade screens & blinds. Serving Tampa Bay and all of Florida. Free estimate.',
    url: 'https://amaranintegralservice.com',
    siteName: 'Amaran Integral Service LLC',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/og/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Amaran Integral Service — Zipper Screens Tampa Bay',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zipper Screens Tampa Bay | Amaran Integral Service',
    description:
      'Custom zipper screens, motorized retractable screens, shade screens & blinds. Free estimate Tampa Bay.',
    images: ['/images/og/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${dmSans.variable} ${dmSerifDisplay.variable}`}
    >
      <body className="pb-14 md:pb-0">
        <AntdRegistry>
          <LanguageProvider>
            <HtmlLangSync />
            {children}
          </LanguageProvider>
        </AntdRegistry>
      </body>
    </html>
  )
}
