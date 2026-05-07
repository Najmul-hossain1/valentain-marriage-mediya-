
import { FileQuestion } from 'lucide-react'
import React from 'react'
import Link from 'next/link';

const notFoundPage = () => {
  return (
    <div className='flex items-center justify-center py-32 flex-col text-center'>
      <FileQuestion className='h-24 w-24 text-gray-400 mb-8 animate-pulse' />
      <h1 className='text-3xl md:text-4xl font-bold mb-4 text-gray-900'>404 - Page Note Found</h1>
      <p className='text-sm md:text-md text-gray-600 mb-8'>Opps! The page you&apos;re looking for doesn&apos;t exit or has been moved</p>
      <Link
      className='bg-black text-white px-4 py-2 rounded-full hover:scale-110 hoverEffect transform' href={"/"}>Go back home</Link>
    </div>
  )
}

export default notFoundPage
