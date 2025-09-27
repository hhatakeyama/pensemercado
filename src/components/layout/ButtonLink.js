import Link from 'next/link'
import React from 'react'

export default function ButtonLink({ children, href }) {
  return (
    <Link className="block px-3 py-2 rounded-lg text-slate-300 bg-slate-800 hover:bg-slate-600" href={href}>
      {children}
    </Link>
  )
}
