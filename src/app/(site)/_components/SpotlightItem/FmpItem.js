'use client'

import Link from "next/link"

export default function FmpItem({ data, onSelect }) {
  return (
    <Link
      className="flex p-3 my-1 rounded-md cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 text-black transition-colors"
      href={`/quotes/${data.symbol}`} onClick={onSelect}>
      {data.symbol} - {data.name} - {data.exchange}
    </Link>
  )
}