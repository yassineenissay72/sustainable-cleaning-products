
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from './components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "GreenPlanet's Sustainable Clean: Good for You, Great for Earth",
  description: "GreenPlanet offers sustainable cleaning products that are not only effective for your home but also contribute to a healthier planet. Embrace a greener clean and be a part of our eco-conscious journey today.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className=
        {inter.className}>{children}
        <Footer />
      </body>
      
    </html>
  )
}
