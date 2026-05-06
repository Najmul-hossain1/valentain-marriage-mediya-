"use client";
import React, { useState } from "react";
import Container from "./Container";
import Logo from "./Logo";
import { NavbarData } from "../constants/index";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import dynamic from "next/dynamic";
import { ModeToggle } from "./ModeToggle";

// হাইড্রেশন এরর দূর করতে Sidebar ডাইনামিক্যালি ইমপোর্ট করা হলো
const Sidebar = dynamic(() => import("./Sidebar"), { ssr: false });

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="border-b border-b-hoverColor/30 sticky top-0 left-0 bg-white dark:bg-black z-50">
      <Container className="py-4 flex justify-between items-center">
        {/* logo */}
        <Logo title="V.Marriage" subtitle="Mediya" />

        {/* Navbar list */}
        <div
          className="hidden md:inline-flex items-center gap-7 text-sm uppercase tracking-wide font-medium"
        >
          {NavbarData?.map((item) => (
            <Link 
              key={item?.title} 
              href={item?.href} 
              className={`hover:text-hoverColor hoverEffect
              relative group overflow-x-hidden ${pathname === item?.href && "text-hoverColor"}`}
            >
              {item?.title}
              <span className={`w-full h-px bg-hoverColor inline-block
                absolute left-0 bottom-0 group-hover:translate-x-0 hoverEffect
                ${pathname === item?.href ? 'translate-x-0' : 'translate-x-[-105%]'}`} 
              />
            </Link>
          ))}
        </div>

        {/* dark & light icon */}
        <ModeToggle />

        {/* Menu icon */}
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="inline-flex md:hidden">
          <Menu />
        </button>
      </Container>
      
      {/* Sidebar */}
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
        pathname={pathname} 
      />
    </header>
  );
};

export default Header;





































// "use client";
// import React, { useState } from "react";
// import Container from "./Container";
// import Logo from "./Logo";
// import { NavbarData } from "../constants/index";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { Menu } from "lucide-react";
// import Sidebar from "./Sidebar";

// const Header = () => {
//     const [isSidebarOpen,setIsSidebarOpen] = useState(false);
//     const pathname = usePathname();
//   return (
//     <header className="border-b border-b-hoverColor/30">
//       <Container className="py-4 flex justify-between items-center">
//         {/* logo */}

//         <Logo title="V.Marriage" subtitle="Mediya" />

//         {/* Navbar list */}
//         <div
//           className="hidden md:inline-flex items-center gap-7 text-sm uppercase tracking-wide font-medium
//         "
//         >
//           {NavbarData?.map((item) => (
//             <Link key={item?.title} href={item?.href} className={`hover:text-hoverColor hoverEffect
//              relative group overflow-x-hidden ${pathname === item?.href && "text-hoverColor"}`}>
//               {item?.title}
//               <span className={`w-full h-px bg-hoverColor inline-block
//                 absolute left-0 bottom-0 group-hover:translate-x-0 hoverEffect
//                  ${pathname === item?.href ? 'translate-x-0' : 'translate-x-[-105%]'}`} />
//             </Link>
//           ))}
//         </div>
//         {/* Menu icon */}
//         <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="inline-flex md:hidden">
//             <Menu />
//         </button>
//       </Container>
//       {/* Sidebar */}
//       <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} pathname={pathname} />
//     </header>
//   );
// };

// export default Header;
