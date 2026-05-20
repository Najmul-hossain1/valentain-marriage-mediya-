// "use client";
import React from 'react'
import BlogItem from './BlogItem'
import { blog_data } from '@/images/images1/image'
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const HomePageBlogList = () => {
  return (
    <div>
        <div  className='flex flex-wrap justify-around gap-5 gap-y-10 mb-16 xl:mx-24'>
      {blog_data.slice(0,4).map((item) => (
            <BlogItem key={item._id} _id={item._id} image={item.image} title={item.title} description={item.description} catagory={item.catagory} />
        ))}
        </div>
        <div className="flex justify-center items-center mb-3 -mt-5">
            <Button
              asChild
              className="px-4 py-1 text-white/80 hover:text-white bg-blue-600/80 hover:bg-blue-600
          hoverEffect"
            >
              <Link href={"/blog"}>View All</Link>
            </Button>
          </div>
    </div>
  )
}

export default HomePageBlogList
