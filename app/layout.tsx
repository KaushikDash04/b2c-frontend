import { Poppins } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/navbar'

const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${poppins.variable} font-sans bg-[#0A0B14] text-white min-h-screen text-sm sm:text-base`}>
        <Navbar />
        <main className="container mx-auto px-4 py-4 sm:py-8">
          {children}
        </main>
      </body>
    </html>
  )
}

