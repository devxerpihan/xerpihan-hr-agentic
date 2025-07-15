import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hairpin AI - Strategic HR Partner for Growing Companies',
  description: 'The single framework that evolves with your company. From founder to 50+ employees, Hairpin AI provides the right HR at the right time through our Phased HR Maturity Model.',
  keywords: 'HR AI, HR automation, startup HR, employee management, HR framework, global HR, compliant HR',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
} 