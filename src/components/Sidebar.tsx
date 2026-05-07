"use client"
import { X } from "lucide-react";
import React, { FC } from "react";
import Logo from "./Logo";
import { NavbarData } from "../constants/index";
import Link from "next/link";
import SocialLinks from "./SocialLinks";
import { useOutsideClick } from "../hooks/use-outside-click";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  pathname: string;
}

const Sidebar: FC<SidebarProps> = ({ isOpen, onClose, pathname }) => {
  const sidebarRef = useOutsideClick<HTMLDivElement>(onClose);

  return (
    <div
      ref={sidebarRef}
      className={`fixed inset-y-0 right-0 z-50 min-w-72 bg-bodyColor border-l border-l-hoverColor/20 shadow-xl shadow-lightSky/40 transform ${isOpen ? "translate-x-0" : "translate-x-full"
      } hoverEffect`}
    >
      <div className="flex justify-end p-4">
        <button
          className="hover:text-red-600 hoverEffect bg-bodyColor text-white"
          aria-label="Close sidebar"
          onClick={onClose}
        >
          <X />
        </button>
      </div>
      
      <nav className="bg-bodyColor text-white flex flex-col px-5 gap-7 text-sm uppercase tracking-tight font-medium mt-2">
        
        <div onClick={onClose}>
          <Logo title="mediya" subtitle="." 
         />
        </div>
        
        {NavbarData?.map((item) => (
          <Link
            onClick={onClose}
            key={item?.title}
            href={item?.href}
            className={`hover:text-hoverColor hoverEffect ${item?.href === pathname ? "text-hoverColor" : ""}`}
          >
            {item?.title}
          </Link>
        ))}

        <SocialLinks />
      </nav>
    </div>
  );
};

export default Sidebar;



































// "use client"
// import { X } from "lucide-react";
// import React, { FC } from "react";
// import Logo from "./Logo";
// import { NavbarData } from "../constants/index";
// import Link from "next/link";
// import SocialLinks from "./SocialLinks";
// import { useOutsideClick } from "../hooks/use-outside-click";

// interface SidebarProps {
//   isOpen: boolean;
//   onClose: () => void;
//   pathname: string;
// }

// const Sidebar: FC<SidebarProps> = ({ isOpen, onClose, pathname }) => {
//     const sidebarRef = useOutsideClick<HTMLDivElement>(onClose);
//   return (
//     <div
//     ref={sidebarRef}
    
//       className={`fixed inset-y-0 right-0 z-50 min-w-72 bg-bodyColor border-l border-l-hoverColor/20
//     shadow-xl shadow-lightSky/40 transform ${isOpen ? "translate-x-0" : "translate-x-full"} hoverEffect`}
//     >
//       <div className="flex justify-end p-4">
//         <button
//           className="hover:text-red-600 hoverEffect"
//           aria-label="Close sidebar"
//           onClick={onClose}
//         >
//           <X />
//         </button>
//       </div>
      
//       <nav className="flex flex-col px-5 gap-7 text-sm uppercase tracking-tight font-medium mt-2">
//         <Logo title="mediya" subtitle="." />
//         {NavbarData?.map((item) => (
//           <Link
//             onClick={onClose}
//             key={item?.title}
//             href={item?.href}
//             className={`hover:text-hoverColor hoverEffect ${item?.href === pathname && "text-hoverColor"}`}
//           >
//             {item?.title}
//           </Link>
//         ))}

//         <SocialLinks />
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;













