import type { Metadata } from 'next'
import './globals.css'
import Hero from './components/hero'
import Footer from './components/footer'


export const metadata: Metadata = {
  title: 'Animefy',
  description: 'Animefy is a website that allows you to watch anime for free.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='max-w-7xl mx-auto bg-[#0F1117]'>
        <Hero />
        {children}
        <Footer />
      </body>
    </html>
  )
}
