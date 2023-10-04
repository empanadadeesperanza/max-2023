import Navbar from '@/components/Navbar'
import './globals.css';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Max Aguirre',
  description: 'Página del dibujante, humorista gráfico y músico argentino',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-full  bg-celesteMax min-h-screen flex flex-col">
         {/*Navbar*/} <Navbar />{children} {/*Footer*/}<Footer /></div> </body>
    </html>
  )
}
