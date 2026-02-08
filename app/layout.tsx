import type { Metadata } from 'next'
import Script from 'next/script'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'NAIRmatchu - AI-Powered Matrimony for Nair Community',
  description:
    'Intelligent matchmaking exclusively for the Nair community of Kerala. WhatsApp-first, AI-powered, and privacy-focused matrimony platform.',
  keywords: [
    'Nair matrimony',
    'Kerala matrimony',
    'AI matchmaking',
    'WhatsApp matrimony',
    'Nair community',
    'traditional matchmaking',
  ],
  authors: [{ name: 'NAIRmatchu' }],
  creator: 'NAIRmatchu',
  publisher: 'NAIRmatchu',

  // ✅ NO localhost — only production URL
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),

  openGraph: {
    title: 'NAIRmatchu - AI-Powered Matrimony for Nair Community',
    description:
      'Intelligent matchmaking exclusively for the Nair community of Kerala',
    url: '/',
    siteName: 'NAIRmatchu',
    locale: 'en_IN',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'NAIRmatchu - AI-Powered Matrimony for Nair Community',
    description:
      'Intelligent matchmaking exclusively for the Nair community of Kerala',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans">

        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}
            </Script>
          </>
        )}

        {/* Razorpay Payment Script */}
        <Script
          src="https://checkout.razorpay.com/v1/checkout.js"
          strategy="lazyOnload"
        />

        <Header />

        <main className="min-h-screen">
          {children}
        </main>

        <Footer />

      </body>
    </html>
  )
}
