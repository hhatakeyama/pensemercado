import Image from 'next/image'
import React from 'react'

export default function Footer() {
  return (
    <footer className="py-10 md:py-16 border-t border-white/10 bg-black/20">
      <div className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
        <div className="flex items-center justify-center md:justify-start gap-4">
          <div>
            <Image alt="Logo" src="/logo.png" width={185} height={46} />
            <span className="flex ml-11 mt-[-10px] text-xs text-slate-400">Educação financeira &bull; &copy; {new Date().getFullYear()}</span>
          </div>
        </div>
        <div className="text-center md:text-right md:col-span-2">
          <span className="text-xs text-slate-400">Sem promessas exageradas. Conteúdo educativo. Investir envolve risco.</span>
        </div>
      </div>
    </footer>
  )
}
