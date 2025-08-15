import React from "react"
import { Poppins } from "next/font/google"
import "./globals.css"
import { Providers } from "./providers"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata = {
  title: "Cambodia Travel - Discover the Kingdom of Wonder",
  description: "Your trusted guide to exploring Cambodia. Discover provinces, plan trips, and explore attractions.",
  keywords: "Cambodia, travel, tourism, Angkor Wat, Phnom Penh, trip planner",
  generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans`} suppressHydrationWarning={true}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
