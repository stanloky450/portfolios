import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Stanley's Profile - Full Stack Developer & UI/UX Designer",
  description:
    "Portfolio of Stanley, a passionate full stack developer and UI/UX designer creating beautiful, functional digital experiences.",
  keywords: "full stack developer, UI/UX designer, React, Next.js, portfolio, web development",
  authors: [{ name: "Stanley" }],
  openGraph: {
    title: "Stanley - Full Stack Developer & UI/UX Designer",
    description: "Portfolio showcasing innovative web development projects and design solutions.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stanley - Full Stack Developer & UI/UX Designer",
    description: "Explore my portfolio of web development and design projects.",
    creator: "@stanloky450",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
