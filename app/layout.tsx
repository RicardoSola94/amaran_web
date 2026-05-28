import type { Metadata } from 'next'
import { Bebas_Neue, DM_Sans, DM_Serif_Display } from 'next/font/google'
import { AntdRegistry } from '@ant-design/nextjs-registry'
import { LanguageProvider } from '@/context/LanguageContext'
import HtmlLangSync from '@/components/ui/HtmlLangSync'
import './globals.css'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const dmSans = DM_Sans({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const dmSerifDisplay = DM_Serif_Display({
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://zebrablindstampa.com'),
  title: 'Zebra Blinds Tampa | Custom Blinds, Screens & Shades — Amaran Integral Service',
  description:
    'Custom zebra blinds, blackout shades, zipper screens, motorized retractable screens and drapery for Tampa Bay homes and businesses. Free in-home estimate. Call (813) 279-3943.',
  keywords:
    'zebra blinds Tampa, blackout shades Tampa Bay, zipper screens Tampa, motorized screens Tampa Bay, custom blinds Tampa, window treatments Tampa, shade screens Florida, drapery Tampa',
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Zebra Blinds Tampa | Custom Blinds & Screens — Amaran Integral Service',
    description:
      'Custom zebra blinds, blackout shades, zipper screens & motorized screens. Serving Tampa Bay and all of Florida. Free in-home estimate.',
    url: 'https://zebrablindstampa.com',
    siteName: 'Zebra Blinds Tampa — Amaran Integral Service LLC',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/og/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Zebra Blinds Tampa — Custom Blinds & Screen Installation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zebra Blinds Tampa | Custom Blinds & Screens',
    description:
      'Custom zebra blinds, blackout shades, zipper screens & motorized screens. Free estimate Tampa Bay.',
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