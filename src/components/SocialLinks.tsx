"use client";
import React from "react";

import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { FaFacebookMessenger } from "react-icons/fa";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const socialData = [
  {
    title: "Facebook",
    icon: <FaFacebook className="w-5 h-5" />,
    link: "https://www.facebook.com/share/1Dg7FiMM7b/",
  },
  {
    title: "Github",
    icon: <FaGithub className="w-5 h-5" />,
    link: "https://github.com/",
  },
  {
    title: "Linkdin",
    icon: <AiFillLinkedin className="w-5 h-5" />,
    link: "https://www.linkedin.com/in/md-najmul-hossain1?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  {
    title: "Messanger",
    icon: <FaFacebookMessenger className="w-5 h-5" />,
    link: "https://m.me/md.najmul.hossain.381745",
  },
  {
    title: "Facebook-page",
    icon: <FaFacebook className="w-5 h-5" />,
    link: "https://www.facebook.com/share/1FiFgpXMqb/",
  },
];

const SocialLinks = () => {
  return (
    <TooltipProvider>
      <div className="flex items-center gap-5">
        {socialData?.map((item) => (
          <Tooltip key={item?.title}>
            <TooltipTrigger asChild>
              <Link
                href={item?.link}
                target="_blank"
                className="text-lightSky/80 border border-lightSky/30 p-2.5 rounded-full hover:bg-lightSky/20 hover:text-lightSky hoverEffect"
              >
                {item?.icon}
              </Link>
            </TooltipTrigger>
            <TooltipContent className="bg-white text-black rounded-md">
              {item?.title}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default SocialLinks;
