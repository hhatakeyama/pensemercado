import "./globals.css"

import Nav from "@/components/layout/Nav"
import Footer from "@/components/layout/Footer"
import Script from "next/script"

export const metadata = {
  title: "Pense Mercado",
  description: "Pense Mercado",
}

export default function RootLayout({ children }) {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Pense Mercado",
    "url": "https://pensemercado.com/",
    "logo": "https://pensemercado.com/logo.png",
    "sameAs": [
      "https://www.instagram.com/pensemercado",
      "https://www.youtube.com/@pensemercado"
    ]
  }

  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Script
          id="jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
        />
        <div className="relative">
          <Nav />
          {children}
          <Footer />
          <div className="fixed bottom-4 right-4 z-50">
            <a title="Falar no WhatsApp" href="https://wa.me/5511973747005?text=Ol%C3%A1%2C%20vim%20do%20site%20Pense%20Mercado" target="_blank" rel="noopener noreferrer" className="inline-grid place-items-center w-14 h-14 rounded-full bg-green-500 text-slate-950 font-black text-2xl shadow-lg shadow-green-950 transition hover:brightness-110">
              📱
            </a>
          </div>
        </div>
      </body>
    </html>
  )
}
