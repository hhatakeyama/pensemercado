import "../globals.css"

import Providers from "./Providers"
import Nav from "@/components/cms/layout/Nav"

export const metadata = {
  title: "Pense Mercado CMS",
  description: "Pense Mercado CMS",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className="h-dvh">
        <Providers>
          <Nav />
          <div className="relative">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  )
}
