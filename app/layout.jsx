import { JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/components/layouts/Header'
import Footer from '@/components/layouts/Footer'
import GrainOverlay from '@/components/layouts/GrainOverlay'

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '500'],
})

export const metadata = {
  title: {
    default: 'Precision Pressroom Chemistry | Falcon Chemicals',
    template: '%s | Falcon Chemicals',
  },
  description: 'Advanced pressroom chemistry and offset printing solutions. Engineered fountain solutions, plate cleaners, roller washes for commercial printing operations.',
  keywords: ['fountain solutions', 'plate cleaners', 'roller washes', 'pressroom chemicals', 'offset printing', 'IPA replacement'],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${mono.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <GrainOverlay />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
