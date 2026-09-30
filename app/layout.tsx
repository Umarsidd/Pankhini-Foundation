import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://pankhinifoundation.org'),
  title: {
    default: 'Pankhini Foundation — Wings of Change, Lives of Strength',
    template: '%s | Pankhini Foundation',
  },
  description: 'Pankhini Foundation gives wings to girls who dare to dream and strength to women who rise — through emotional wellbeing, education technology, and legal empowerment across Uttar Pradesh and NCR.',
  applicationName: 'Pankhini Foundation',
  keywords: ['Pankhini Foundation', 'girls education', 'women empowerment', 'Uttar Pradesh', 'legal empowerment', 'mental wellbeing', 'education technology'],
  authors: [{ name: 'Pankhini Foundation' }],
  creator: 'Pankhini Foundation',
  openGraph: {
    title: 'Pankhini Foundation — Wings of Change, Lives of Strength',
    description: 'Empowering girls and women across Uttar Pradesh and NCR through emotional wellbeing, education technology, and legal empowerment.',
    url: 'https://pankhinifoundation.org/',
    siteName: 'Pankhini Foundation',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pankhini Foundation — Wings of Change, Lives of Strength',
    description: 'Empowering girls and women across Uttar Pradesh and NCR.',
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#fdfaf6',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
