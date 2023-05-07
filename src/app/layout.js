import DownHeader from './componenets/DownHeader/DownHeader'
import Header from './componenets/Header/Header'
import TopHeader from './componenets/TopHeader/TopHeader'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'E-COMMERCE',
  description: 'Created by GS Mahato',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopHeader/>
        <Header/>
        <DownHeader/>
        {children}
        </body>
    </html>
  )
}
