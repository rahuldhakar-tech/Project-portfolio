import './globals.css'
import type { ReactNode } from 'react'

export const metadata = {
  title: "Rahul Singh Dhakar — Portfolio",
  description: "Data Analytics & Operations Specialist",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground">{children}</body>
    </html>
  )
}