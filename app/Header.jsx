import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <div className='p-5 bg-blue-500'>
        <p className='font-bold text-white'>Header</p>
        <Link className='mr-2' href="/">Home</Link>
        <Link className='mr-2' href="/todos">Todos</Link>
        <Link className='mr-2' href="/search">Search</Link>
        <Link className='mr-2' href="/promotions">Promotions</Link>
    </div>
  )
}
