"use client";
import React, { useState } from 'react'
import { blog_data } from './../images/images1/image';
import BlogItem from './BlogItem';
import Container from './Container';

const Bloglist = () => {
    const [menu,setMenu] = useState("All");
  return (
    <Container>
      <div className='grid grid-cols-2 md:grid-cols-4 px-20 lg:px-60 pb-10 pt-5'>
        <button onClick={()=>setMenu('All')} className={menu === "All" ? 'bg-black text-white py-1 text-xs md:text-sm px-4 rounded-sm' : "py-1 text-xs md:text-sm px-4 rounded-sm hover:cursor-pointer"}>All</button>
        <button onClick={()=>setMenu('Religion&LegalGuide')} className={menu === "Religion&LegalGuide" ? 'bg-black text-white py-1 text-xs md:text-sm px-4 rounded-sm' : "py-1 text-xs md:text-sm px-4 rounded-sm hover:cursor-pointer"}>Religion&LegalGuide</button>
        <button onClick={()=>setMenu('Relationship')} className={menu === "Relationship" ? 'bg-black text-white py-1 text-xs md:text-sm px-4 rounded-sm' : "py-1 text-xs md:text-sm px-4 rounded-sm hover:cursor-pointer"}>Relationship</button>
        <button onClick={()=>setMenu('Lifestyle')} className={menu === "Lifestyle" ? 'bg-black text-white py-1 text-xs md:text-sm px-4 rounded-sm' : "py-1 text-xs md:text-sm px-4 rounded-sm hover:cursor-pointer"}>Lifestyle</button>
      </div>
      <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24'>
        {blog_data.filter((item)=> menu==="All" ? true : item.catagory===menu).map((item) => (
            <BlogItem key={item._id} _id={item._id} image={item.image} title={item.title} description={item.description} catagory={item.catagory} />
        ))}
      </div>
    </Container>
  )
}

export default Bloglist
