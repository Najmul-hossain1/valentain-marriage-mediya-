"use client";
import React from "react";
import Container from "./Container";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { UsefulLinks, Supports } from "@/constants";
import SocialLinks from './SocialLinks';
import { IoLocationSharp } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io5";
import { CgMail } from "react-icons/cg";

const Footer = () => {
  const pathname = usePathname();
  return (
    <div className="bg-black text-white py-10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-0">
          <div
            className="flex flex-col md:justify-start justify-center
           items-center md:items-start gap-3 text-sm uppercase tracking-tighter font-medium"
          >
            {UsefulLinks?.map((item) => (
              <Link
                key={item?.title}
                href={item?.href}
                className={`hover:text-hoverColor hoverEffect
              relative group overflow-x-hidden ${pathname === item?.href && "text-hoverColor"}`}
              >
                {item?.title}
                <span
                  className={`w-full h-px bg-hoverColor inline-block
                absolute left-0 bottom-0 group-hover:translate-x-0 hoverEffect
                ${pathname === item?.href ? "translate-x-0" : "translate-x-[-105%]"}`}
                />
              </Link>
            ))}
          </div>

          <div
            className="flex flex-col md:justify-start justify-center
           items-center md:items-start gap-3 text-sm uppercase tracking-tighter font-medium"
          >
            {Supports?.map((item) => (
              <Link
                key={item?.title}
                href={item?.href}
                className={`hover:text-hoverColor hoverEffect
              relative group overflow-x-hidden ${pathname === item?.href && "text-hoverColor"}`}
              >
                {item?.title}
                <span
                  className={`w-full h-px bg-hoverColor inline-block
                absolute left-0 bottom-0 group-hover:translate-x-0 hoverEffect
                ${pathname === item?.href ? "translate-x-0" : "translate-x-[-105%]"}`}
                />
              </Link>
            ))}
          </div>

          <div  className="flex flex-col justify-center md:justify-start items-center md:items-start gap-4">
            <div className="flex justify-center items-center gap-2 text-sm group">
              <IoLocationSharp className="w-6 h-7 group-hover:text-hoverColor hoverEffect" />
              <span className="group-hover:text-hoverColor hoverEffect">01314824145, 01756765291</span>
            </div>

            <div className="flex justify-center items-center gap-2 text-sm group ">
              <IoLogoWhatsapp className="w-6 h-6 group-hover:text-hoverColor hoverEffect" />
              <span className="group-hover:text-hoverColor hoverEffect">01314824145, 01756765291</span>
            </div>

            <div className="flex justify-center items-center gap-2 text-sm group">
              <CgMail className="w-6 h-6 group-hover:text-hoverColor hoverEffect" />
              <span className="group-hover:text-hoverColor hoverEffect">valentainmarriagemediya@gmail.com</span>
            </div>

            <h2 className="text-lg pb-4 md:pb-0 font-medium tracking-wide text-hoverColor">Follow Us</h2>
            <SocialLinks />
          </div>

        </div>
      </Container>
    </div>
  );
};

export default Footer;
