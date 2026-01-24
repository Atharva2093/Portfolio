import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  title: "Atharva Jondhale - UI/UX & Frontend Developer | Atharva.dev",
  description: "Computer Engineering student and UI/UX & Front-End Developer with 2+ years of experience building modern, user-centric, and scalable digital experiences. Specializing in React, Next.js, TypeScript, and AI-powered solutions.",
  generator: 'v0.dev',
  keywords: ['UI/UX Developer', 'Frontend Developer', 'React Developer', 'Next.js', 'TypeScript', 'Web Development', 'Atharva Jondhale', 'Nashik', 'Portfolio'],
  authors: [{ name: 'Atharva Jondhale', url: 'https://atharva.dev' }],
  creator: 'Atharva Jondhale',
  publisher: 'Atharva Jondhale',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://atharva.dev',
    title: 'Atharva Jondhale - UI/UX & Frontend Developer',
    description: 'Computer Engineering student with 2+ years of experience building modern, user-centric digital experiences. Specializing in React, Next.js, TypeScript, and creative UI development.',
    siteName: 'Atharva Jondhale Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Atharva Jondhale - UI/UX & Frontend Developer',
    description: 'Building modern, user-centric digital experiences with React, Next.js, and TypeScript',
    creator: '@atharva_j2093',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/favicon.svg', sizes: 'any', type: 'image/svg+xml' },
      { url: '/favicon.png', sizes: '512x512', type: 'image/png' }
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#3b82f6',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <meta name="color-scheme" content="dark" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
