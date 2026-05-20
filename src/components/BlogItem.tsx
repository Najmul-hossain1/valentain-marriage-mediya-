import React from 'react'
import Image, { StaticImageData } from 'next/image';
import { TiArrowRight } from "react-icons/ti";
import Link from 'next/link';
// import { blog_data } from './../images/images1/image';
interface BlogItemProps {
  _id:string,
  title?:string,
  description?:string,
  catagory?:string,
  image:StaticImageData
}


const BlogItem = ({_id,title,description,catagory,image}:BlogItemProps) => {
  return (
    <div className='w-80 md:w-50 bg-white rounded-md dark:bg-white/80 border border-black dark:border-white shadow-md
    hover:-translate-y-3 hoverEffect'>
        <Link href={`/blogs/${_id}`}>
        <Image src={image} alt="najmul1" width={200} height={200} className='border-b
        border-black md:h-50 h-80 md:object-cover w-full rounded-md' />
        </Link>
      <p className='ml-2 mt-5 px-1 inline-block bg-black text-white text-xs rounded-sm'>{catagory}</p>
      <div className="px-2">
        <h5 className='mb-2 text-sm font-medium tracking-tight text-gray-900'>{title}</h5>
        <p className='text-xs tracking-tight text-gray-700 dark:text-black'>{description}</p>
        <Link href={`/blogs/${_id}`} className='inline-flex items-center hoverEffect hover:text-green-500 pb-1 font-semibold text-center dark:text-black'>
            Read more<TiArrowRight className='w-5 h-5' />
        </Link>
      </div>
    </div>
  )
}

export default BlogItem
