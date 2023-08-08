import './globals.css'
import type { Metadata } from 'next'
import { Atkinson_Hyperlegible } from 'next/font/google'

const atkinson = Atkinson_Hyperlegible({ weight: ["400", "700"], subsets: ["latin"] })

export const metadata: Metadata = {
  title: 'Simple API',
  description: 'A very simple API for testing your apps',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={atkinson.className}>{children}</body>
    </html>
  )
}
