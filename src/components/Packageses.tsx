import React from "react";
import Container from "./Container";
import { IoIosCheckmark } from "react-icons/io";
import { Button } from "./ui/button";
import Link from "next/link";

const Packageses = () => {
  return (
    <div className="">
      <h1
        className="text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6 tracking-tighter font-bold
      text-center py-6"
      >
        Our Packeges
      </h1>
      <div className="bg-black/20">
      
      <Container>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-2
          p-5 py-8 md:py-10"
      >
        <div className="bg-white shadow-xl p-8 rounded-md hover:-translate-y-3 hoverEffect">
          <div className="flex flex-col justify-center items-center p-6 pt-0 gap-3 uppercase">
            <h3 className="text-xl text-black tracking-tighter font-semibold">
              Starter
            </h3>
            <h2 className="text-2xl lg:text-lg">BDT 8500.00</h2>
          </div>

          <div className="flex flex-col gap-1">
            <p className="bg-gray-100 p-1 text-xs flex justify-start items-center gap-2">
              <IoIosCheckmark className="text-sm bg-green-500 text-white rounded-full" />
              15 Proposals (day)
            </p>

            <p className="bg-gray-100 p-1 text-xs flex justify-start items-center gap-2">
              <IoIosCheckmark className="text-sm bg-green-500 text-white rounded-full" />
               Total Proposals 50
            </p>

            <p className="bg-gray-100 p-1 text-xs flex justify-start items-center gap-2">
              <IoIosCheckmark className="text-sm bg-green-500 text-white rounded-full" />
               Duration (90 Day)
            </p>

            <p className="bg-gray-100 p-1 text-xs flex justify-start items-center gap-2">
              <IoIosCheckmark className="text-sm bg-green-500 text-white rounded-full" />
               View Daily 3
            </p>

            <p className="bg-gray-100 p-1 text-xs flex justify-start items-center gap-2">
              <IoIosCheckmark className="text-sm bg-green-500 text-white rounded-full" />
               View Total 20
            </p>
          </div>

          <div className="flex justify-center items-center">
            <Button
              asChild
              className=" px-4 py-1 text-white/80 hover:text-white bg-blue-600/80 hover:bg-blue-600
          hoverEffect mt-5 md:mt-6"
            >
              <Link href={"/packages"}>Continue</Link>
            </Button>
          </div>
        </div>

        <div className="bg-white shadow-xl p-8 rounded-md hover:-translate-y-3 hoverEffect">
          <div className="flex flex-col justify-center items-center p-6 pt-0 gap-3 uppercase">
            <h3 className="text-xl text-black tracking-tighter font-semibold">
              Basic
            </h3>
            <h2 className="text-2xl lg:text-lg">BDT 10500.00</h2>
          </div>

          <div className="flex flex-col gap-1">
            <p className="bg-gray-100 p-1 text-xs flex justify-start items-center gap-2">
              <IoIosCheckmark className="text-sm bg-green-500 text-white rounded-full" />
              12 Proposals (Day)
            </p>

            <p className="bg-gray-100 p-1 text-xs flex justify-start items-center gap-2">
              <IoIosCheckmark className="text-sm bg-green-500 text-white rounded-full" />
               Total Proposals 500
            </p>

            <p className="bg-gray-100 p-1 text-xs flex justify-start items-center gap-2">
              <IoIosCheckmark className="text-sm bg-green-500 text-white rounded-full" />
               Duration (180 Day)
            </p>

            <p className="bg-gray-100 p-1 text-xs flex justify-start items-center gap-2">
              <IoIosCheckmark className="text-sm bg-green-500 text-white rounded-full" />
               View Daily 8
            </p>

            <p className="bg-gray-100 p-1 text-xs flex justify-start items-center gap-2">
              <IoIosCheckmark className="text-sm bg-green-500 text-white rounded-full" />
               View Total 50
            </p>
          </div>

          <div className="flex justify-center items-center">
            <Button
              asChild
              className=" px-4 py-1 text-white/80 hover:text-white bg-blue-600/80 hover:bg-blue-600
          hoverEffect mt-5 md:mt-6"
            >
              <Link href={"/packages"}>Continue</Link>
            </Button>
          </div>
        </div>

        <div className="bg-white shadow-xl p-8 rounded-md hover:-translate-y-3 hoverEffect">
          <div className="flex flex-col justify-center items-center p-6 pt-0 gap-3 uppercase">
            <h3 className="text-xl text-black tracking-tighter font-semibold">
             Premium
            </h3>
            <h2 className="text-2xl lg:text-lg">BDT 15500.00</h2>
          </div>

          <div className="flex flex-col gap-1">
            <p className="bg-gray-100 p-1 text-xs flex justify-start items-center gap-2">
              <IoIosCheckmark className="text-sm bg-green-500 text-white rounded-full" />
               15 Proposals (Day)
            </p>

            <p className="bg-gray-100 p-1 text-xs flex justify-start items-center gap-2">
              <IoIosCheckmark className="text-sm bg-green-500 text-white rounded-full" />
               Total Proposals 180
            </p>

            <p className="bg-gray-100 p-1 text-xs flex justify-start items-center gap-2">
              <IoIosCheckmark className="text-sm bg-green-500 text-white rounded-full" />
               Duration (360 Day)
            </p>

            <p className="bg-gray-100 p-1 text-xs flex justify-start items-center gap-2">
              <IoIosCheckmark className="text-sm bg-green-500 text-white rounded-full" />
               View Daily 15
            </p>

            <p className="bg-gray-100 p-1 text-xs flex justify-start items-center gap-2">
              <IoIosCheckmark className="text-sm bg-green-500 text-white rounded-full" />
               View Total 180
            </p>
          </div>

          <div className="flex justify-center items-center">
            <Button
              asChild
              className=" px-4 py-1 text-white/80 hover:text-white bg-blue-600/80 hover:bg-blue-600
          hoverEffect mt-5 md:mt-6"
            >
              <Link href={"/packages"}>Continue</Link>
            </Button>
          </div>
        </div>

        <div className="bg-white shadow-xl p-8 rounded-md hover:-translate-y-3 hoverEffect">
          <div className="flex flex-col justify-center items-center p-6 pt-0 gap-3 uppercase">
            <h3 className="text-xl text-black tracking-tighter font-semibold">
              Enterprise
            </h3>
            <h2 className="text-2xl lg:text-lg">BDT 20000.00</h2>
          </div>

          <div className="flex flex-col gap-1">
            <p className="bg-gray-100 p-1 text-xs flex justify-start items-center gap-2">
              <IoIosCheckmark className="text-sm bg-green-500 text-white rounded-full" />
               15 Proposals (Day)
            </p>

            <p className="bg-gray-100 p-1 text-xs flex justify-start items-center gap-2">
              <IoIosCheckmark className="text-sm bg-green-500 text-white rounded-full" />
               Total Proposals 500
            </p>

            <p className="bg-gray-100 p-1 text-xs flex justify-start items-center gap-2">
              <IoIosCheckmark className="text-sm bg-green-500 text-white rounded-full" />
               Duration (1000 Day)
            </p>

            <p className="bg-gray-100 p-1 text-xs flex justify-start items-center gap-2">
              <IoIosCheckmark className="text-sm bg-green-500 text-white rounded-full" />
               View Daily 15
            </p>

            <p className="bg-gray-100 p-1 text-xs flex justify-start items-center gap-2">
              <IoIosCheckmark className="text-sm bg-green-500 text-white rounded-full" />
               View Total 300
            </p>
          </div>

          <div className="flex justify-center items-center">
            <Button
              asChild
              className=" px-4 py-1 text-white/80 hover:text-white bg-blue-600/80 hover:bg-blue-600
          hoverEffect mt-5 md:mt-6"
            >
              <Link href={"/packages"}>Continue</Link>
            </Button>
          </div>
        </div>

      </div>
    </Container>
    </div>
    </div>
  );
};

export default Packageses;
