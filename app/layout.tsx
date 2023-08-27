import './globals.css'
import type { Metadata } from 'next'
import { Noto_Serif } from 'next/font/google'

const inter = Noto_Serif({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CoreCode Programming Academy',
  description: 'Website for CoreCode Programming Academy By Yogeshware Shukla Sir',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-neutral-900 overflow-x-hidden`}>{children}</body>
    </html>
  )
}
