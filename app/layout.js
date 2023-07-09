import './globals.css'
import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'exel revision resorces',
  description:
    'exelrevisionresources,highschool notes, CBC, 8-4-4, high school notes, Quizzes revision guides and reference notes revisio materials  topical tests CPA KASNEB Revision kits and much more signup to get unlimited access',
  keywords:
    'highschool notes, notes,cbc,kcse,revision resources,cpa,CPA,KASNEB,kasneb',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navbar />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  )
}
