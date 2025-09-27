'use client'

import Image from "next/image"
import Link from "next/link"
import React, { useEffect, useRef, useState } from "react"

import Spotlight from "@/app/(site)/_components/Spotlight"
import { useAuth } from "@/providers/AuthProvider"

export default function Nav() {
  const { userData, isAuthenticated } = useAuth()
  const menuRef = useRef(null)

  const [isOpen, setIsOpen] = useState(false)
  const [openSpotlight, setOpenSpotlight] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Detecta clique fora do menu para fechá-lo
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [menuRef])

  return (
    <>
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-slate-900/60 shadow-[0_1px_0_rgba(255,255,255,.05)]">
        <div className="container mx-auto flex items-center justify-between gap-4 px-5 py-4 lg:py-4">
          <Link href={isAuthenticated ? '/cms/dashboard' : '/cms'} className="flex items-center gap-3" aria-label="Pense Mercado, página inicial">
            <h1 className="text-lg tracking-[.3px] font-medium text-slate-50">
              <Image alt="Logo" src="/logo.png" width={180} height={45} />
            </h1>
          </Link>

          {isAuthenticated && (
            <>
              <nav aria-label="Principal" className="hidden md:block">
                <ul className="flex gap-0 lg:gap-4 list-none m-0 p-0">
                  <li><Link href="/cms/conteudos" className="block px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-800">Conteúdos</Link></li>
                  <li><Link href="/cms/contatos" className="block px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-800">Contatos</Link></li>
                  <li><Link href="/cms/newsletters" className="block px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-800">Newsletters</Link></li>
                  <li>
                    <div className="relative inline-block text-left" ref={menuRef}>
                      <button
                        type="button"
                        className="flex items-center gap-2 px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-800 hover:cursor-pointer"
                        id="menu-button"
                        aria-expanded={isOpen} // Acessibilidade: reflete o estado atual
                        aria-haspopup="true"
                        onClick={() => setIsOpen(!isOpen)} // Alterna o estado
                      >
                        {userData?.name}
                        <svg className={`h-5 w-5 -mr-1 text-gray-400 ${isOpen ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                        </svg>
                      </button>
                      {isOpen && (
                        <div
                          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                          role="menu"
                          aria-orientation="vertical"
                          aria-labelledby="menu-button">
                          <div className="py-1" role="none">
                            {/* <a href="#" className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100" role="menuitem" onClick={() => setIsOpen(false)}>Configurações</a> */}
                            <a href="/cms/logout" className="text-gray-700 w-full text-left block px-4 py-2 text-sm hover:bg-gray-100" role="menuitem" onClick={() => setIsOpen(false)}>Logout</a>
                          </div>
                        </div>
                      )}
                    </div>
                  </li>
                </ul>
              </nav>
              <button className="md:hidden text-xl text-slate-300 bg-transparent border-0" aria-label="Abrir menu" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                &#9776;
              </button>
            </>
          )}
        </div>
        {isMobileMenuOpen && (
          <div className="container mx-auto px-5">
            <div id="mobileMenu" className="md:hidden inset-y-16 top-15 left-4 right-4 bg-slate-800/95 border border-slate-700 rounded-2xl shadow-lg p-3" role="dialog" aria-label="Menu móvel">
              <Link href="/cms/dashboard" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 rounded-xl text-slate-200 hover:bg-slate-700">Dashboard</Link>
              <Link href="/cms/conteudos" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 rounded-xl text-slate-200 hover:bg-slate-700">Conteúdos</Link>
              <Link href="/cms/contatos" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 rounded-xl text-slate-200 hover:bg-slate-700">Contatos</Link>
              <Link href="/cms/newsletters" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 rounded-xl text-slate-200 hover:bg-slate-700">Newsletters</Link>
              <Link href="/cms/logout" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 rounded-xl text-slate-200 hover:bg-slate-700">Logout</Link>
            </div>
          </div>
        )}
      </header>
      <Spotlight open={openSpotlight} setOpen={setOpenSpotlight} />
    </>
  )
}