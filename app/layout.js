import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/resuableCompoents/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'C.R.U.D',
  description: 'CRUD, which stands for Create, Read, Update, and Delete, represents the four basic operations that can be performed on data in a persistent storage system such as a database. These operations form the foundation of data management in various applications and systems. Here\'s a brief description of each CRUD operation: ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}  </main>
      </body>
    </html>
  )
}
