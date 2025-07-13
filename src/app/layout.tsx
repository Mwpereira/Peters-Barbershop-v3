import type { Metadata } from 'next'
import { Inter, Playfair_Display, Dancing_Script } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { ReactNode } from 'react'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap'
})

const dancingScript = Dancing_Script({ 
  subsets: ['latin'],
  variable: '--font-dancing-script',
  display: 'swap'
})

export const metadata: Metadata = {
  title: "Peter's Hair Cutting Place | Premium Hair Cutting Services",
  description: "Peter's Hair Cutting Place - Scarborough's premier hair cutting destination since 1964. Expert barbers at Peter's Barbershop offer classic cuts, modern styles, beard grooming & hot towel shaves. Book today!",
  keywords: 'Peter\'s Hair Cutting Place, Peter\'s Barbershop, barber Scarborough, barbershop Scarborough Ontario, hair cut Scarborough, mens haircut, beard trim, hot towel shave, classic barbershop, traditional barber, hair styling men, beard grooming, straight razor shave, fade haircut, hair salon men Scarborough, best barber Scarborough, professional barber services, vintage barbershop',
  authors: [{ name: 'Peter\'s Barbershop' }],
  creator: 'Peter\'s Hair Cutting Place',
  publisher: "Peter's Barbershop",
  robots: 'index, follow',
  openGraph: {
    title: "Peter's Hair Cutting Place | Premium Hair Cutting Services Since 1964",
    description: "Experience traditional craftsmanship with modern excellence at Peter's Hair Cutting Place, Scarborough's most trusted Peter's Barbershop. Expert cuts, beard grooming, and classic shaves.",
    url: 'https://petersbarbershop.ca',
    siteName: "Peter's Barbershop",
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: "Peter's Barbershop - Hair Cutting Place Est. 1964",
      },
    ],
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Peter\'s Hair Cutting Place | Premium Hair Cutting Services Since 1964',
    description: "Peter's Hair Cutting Place - Scarborough's premier Peter's Barbershop since 1964. Expert barbers, classic cuts, modern styles.",
    images: ['/logo.png'],
  },
  alternates: {
    canonical: 'https://petersbarbershop.ca',
  },
  other: {
    'geo.region': 'CA-ON',
    'geo.placename': 'Scarborough',
    'geo.position': '43.7370898;-79.2498687',
    'ICBM': '43.7370898, -79.2498687',
  },
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#4a7c59" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HairSalon",
              "name": "Peter's Hair Cutting Place",
              "alternateName": "Peter's Barbershop",
              "image": "https://petersbarbershop.ca/logo.png",
              "description": "Premium barbershop services in Scarborough since 1964. Expert haircuts, beard grooming, and traditional shaves at Peter's Hair Cutting Place, also known as Peter's Barbershop.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "2676 Eglinton Ave E",
                "addressLocality": "Scarborough",
                "addressRegion": "ON",
                "postalCode": "M1K 2S3",
                "addressCountry": "CA"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "43.7370898",
                "longitude": "-79.2498687"
              },
              "telephone": "+1-416-261-2716",
              "openingHours": [
                "Tu-We 10:00-18:00",
                "Th-Fr 10:00-19:00",
                "Sa 09:00-16:00"
              ],
              "priceRange": "$15-$45",
              "paymentAccepted": "Cash, Credit Card, Debit",
              "foundingDate": "1964",
              "url": "https://petersbarbershop.ca",
              "sameAs": [
                "https://www.instagram.com/petersbarbershop.to"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Barbershop Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Classic Haircut",
                      "description": "Traditional and modern haircut styles"
                    },
                    "price": "25",
                    "priceCurrency": "CAD"
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Beard Trim",
                      "description": "Professional beard grooming and shaping"
                    },
                    "price": "15",
                    "priceCurrency": "CAD"
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Hot Towel Shave",
                      "description": "Traditional straight razor shave experience"
                    },
                    "price": "35",
                    "priceCurrency": "CAD"
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} ${dancingScript.variable} font-sans`}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-FTEWEW46BV"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FTEWEW46BV');
          `}
        </Script>
        {children}
      </body>
    </html>
  )
} 