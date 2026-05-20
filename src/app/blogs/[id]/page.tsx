import React from "react";
import { blog_data, mainlogo } from "@/images/images1/image"; // আপনার সঠিক পাথ অনুযায়ী রাখবেন
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface Props {
  // নেক্সট জেএস-এর ডাইনামিক রাউট ফোল্ডারের নাম [id] দেখে params-এ id-ই আসবে
  params: Promise<{ id: string }>;
}

const page = async ({ params }: Props) => {
  const { id } = await params;

  // আপনার মক ডেটার '_id' (যা এখন string) এর সাথে ইউআরএল থেকে আসা 'id' ম্যাচ করা হলো
  const blog = blog_data.find((item) => item._id === id);

  // যদি কোনো কারণে ম্যাচিং ব্লগ না পাওয়া যায়
  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h2 className="text-2xl font-bold text-gray-800">Blog not found!</h2>
        <p className="text-gray-500 text-sm mt-1">Requested ID: {id}</p>
        <Link href="/" className="mt-4 text-blue-600 underline">
          Back to Home
        </Link>
      </div>
    );
  }

  return blog ? (
    <>
      <div className="bg-gray-200 py-5 pb-15 lg:pb-20 px-5 md:px-12 lg:px-28">
        <div className="flex justify-between items-center">
          <Button asChild className=" bg-lightSky/80 text-black hoverEffect ">
            <Link
              href="/"
              className="inline-block mb-6 text-sm font-semibold text-gray-600 hover:text-black transition-colors"
            >
              ← Back to Home
            </Link>
          </Button>

          <Image
            src={mainlogo}
            alt="logoImage"
            className="w-10 h-10 rounded-full"
          />
        </div>

        <div className="text-center my-8">
          <h1 className="text-2xl sm:text-5xl font-semibold max-w-175 mx-auto">
            {blog.title}
          </h1>
          <Image
            src={blog.author_img}
            alt="mainImage"
            width={60}
            height={60}
            className="mx-auto mt-3 border border-white rounded-full w-10 h-10"
          />
          <p className="mt-1 pb-2 text-xs max-w-170 mx-auto">{blog.author}</p>
        </div>
      </div>

      <div className="mx-5 max-w-200 md:mx-auto -mt-20 lg:-mt-25 mb-10">
        <Link href={"/blog"}>
        <Image
          className="border-3 border-white w-60 h-60 md:w-110 md:h-80
           mx-auto object-fill md:object-cover"
          src={blog.image}
          alt="mainImage"
          width={200}
          height={200}
        />
        </Link>
        <h1 className="my-8 md:my-10 text-lg font-semibold tracking-tighter">
          Introdection:
        </h1>
        <p>{blog.description}</p>
        <p className="text-justify text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
          sapiente consequatur qui blanditiis voluptatem doloremque id quos ex,
          culpa dolores accusamus saepe! Beatae doloremque voluptatum, maiores
          tempora quos perferendis ratione inventore sint modi atque molestias
          laboriosam vero. Ea sunt, totam dolores eos natus nisi eius sequi
          optio, minima eum possimus perferendis rem, reiciendis fugiat.
          Possimus pariatur architecto itaque quod eum, quam ad! Aspernatur sit
          libero facilis suscipit, iure quasi laboriosam ratione accusamus
          tempore est. Corrupti eligendi necessitatibus laboriosam, unde
          reprehenderit quos delectus non autem quia ad temporibus accusamus
          tenetur, maiores et itaque aperiam dignissimos recusandae nisi porro
          odit fuga esse beatae molestias. Harum quos quaerat sit repellat
          laudantium quod ratione, optio culpa nostrum consequuntur unde amet
          est quisquam eum delectus tempore nihil molestias! Facilis cum laborum
          ipsam magni commodi quae hic et eius voluptatem consequatur sint,
          inventore, officiis magnam ad animi fugiat aspernatur, harum nobis!
          Vitae in aspernatur illo beatae repellat, alias deleniti architecto
          neque, nostrum facere quo, itaque quibusdam perferendis veniam
          assumenda iste quaerat? Incidunt fuga corrupti consequuntur nesciunt
          blanditiis, provident voluptates delectus atque sed nam odit
          necessitatibus rerum doloremque obcaecati error nostrum officia, vel
          nulla qui natus odio alias suscipit adipisci at? Tenetur omnis non
          dolorum dolores fugiat?
        </p>
        <p className="pt-5 text-sm ">{blog.date}</p>
      </div>
    </>
  ) : (
    <></>
  );
};

export default page;
