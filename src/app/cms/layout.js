import { SWRConfig } from "swr"
import "../globals.css"

import Providers from "./Providers"
import fetcher from "@/utils/fetcher"

export const metadata = {
  title: "Pense Mercado",
  description: "Pense Mercado",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className="h-dvh">
        <div className="relative">
          <Providers>
            {children}
          </Providers>
        </div>
      </body>
    </html>
  )
}
