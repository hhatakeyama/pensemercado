'use client'

import Spotlight from "@/app/_components/Spotlight"
import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"

export default function Nav() {
  const [openSpotlight, setOpenSpotlight] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-slate-900/60 shadow-[0_1px_0_rgba(255,255,255,.05)]">
        <div className="container mx-auto flex items-center justify-between gap-4 px-5 py-4 lg:py-4">
          <Link href="/" className="flex items-center gap-3" aria-label="Pense Mercado, página inicial">
            <h1 className="text-lg tracking-[.3px] font-medium text-slate-50">
              <Image alt="Logo" src="/logo.png" width={180} height={45} />
            </h1>
          </Link>
          <div className="max-w-4xl">
            <input
              type="text"
              name="search"
              autoComplete="off"
              className="px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              placeholder="Buscar ações, FIIs, ETFs, BDRs, índices"
              onClick={() => setOpenSpotlight(true)}
            />
          </div>
          <nav aria-label="Principal" className="hidden md:block">
            <ul className="flex gap-0 lg:gap-4 list-none m-0 p-0">
              <li><a href="#conteudos" className="block px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-800">Conteúdos</a></li>
              <li><a href="#assine" className="block px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-800">Assinatura</a></li>
              <li><a href="#sobre" className="block px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-800">Sobre</a></li>
              <li><a href="#faq" className="block px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-800">FAQ</a></li>
            </ul>
          </nav>
          <a className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-br from-green-500 to-green-600 text-white font-bold shadow-lg shadow-slate-900 transition hover:brightness-105" href="#assine" aria-label="Assinar a newsletter">
            Quero aprender
          </a>
          <button className="md:hidden text-xl text-slate-300 bg-transparent border-0" aria-label="Abrir menu" onClick={toggleMenu}>
            &#9776;
          </button>
        </div>
        {isMobileMenuOpen && (
          <div className="container mx-auto px-5">
            <div id="mobileMenu" className="md:hidden inset-y-16 top-15 left-4 right-4 bg-slate-800/95 border border-slate-700 rounded-2xl shadow-lg p-3" role="dialog" aria-label="Menu móvel">
              <a href="#inicio" onClick={closeMenu} className="block px-3 py-3 rounded-xl text-slate-200 hover:bg-slate-700">Início</a>
              <a href="#conteudos" onClick={closeMenu} className="block px-3 py-3 rounded-xl text-slate-200 hover:bg-slate-700">Conteúdos</a>
              <a href="#assine" onClick={closeMenu} className="block px-3 py-3 rounded-xl text-slate-200 hover:bg-slate-700">Assinatura</a>
              <a href="#sobre" onClick={closeMenu} className="block px-3 py-3 rounded-xl text-slate-200 hover:bg-slate-700">Sobre</a>
              <a href="#faq" onClick={closeMenu} className="block px-3 py-3 rounded-xl text-slate-200 hover:bg-slate-700">FAQ</a>
            </div>
          </div>
        )}
      </header>
      <Spotlight open={openSpotlight} setOpen={setOpenSpotlight} />
    </>
  )
}