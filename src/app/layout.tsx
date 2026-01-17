// app/layout.tsx
'use client'

import "../../node_modules/@fortawesome/fontawesome-free/css/all.min.css"
import "./globals.css"
import UserContextProvider from './Context/UserContext'
import Navbar from './_mainlayout/_navbar/page'
import Footer from './_mainlayout/_footer/page'

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <UserContextProvider>
          <Navbar />
          {children}
          <Footer />
        </UserContextProvider>
      </body>
    </html>
  )
}
