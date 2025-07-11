'use client';

import { asideNavLinks } from "@/constants";
import gsap from "gsap";
import Link from "next/link";
import { useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { TbArrowBigUpLines } from "react-icons/tb";



export default function SideBar() {
   const sideBarRef = useRef(null);
   const sideBarControlRef = useRef(null);
   const [sidebarOpened, setSidebarOpened] = useState(true);

   const openSideBar = () => {
      if (!sideBarRef.current) return;
      setSidebarOpened(true);
      gsap.fromTo(sideBarRef.current, {
         x: '-100%',
         display: 'block',
      }, {
         x: 0,
         duration: 0.4,
         ease: "power2.out",
      });
      gsap.to(sideBarControlRef.current, {
         left: '16rem',
         duration: 0.4,
         ease: "power2.out",
      });
   }

   const closeSideBar = () => {
      if (!sideBarRef.current) return;
      setSidebarOpened(false);
      gsap.to(sideBarRef.current, {
         x: '-100%',
         duration: 0.4,
         ease: "power2.in",
         onComplete: () => {
            gsap.set(sideBarRef.current, { display: 'none' });
         },
      });
       gsap.to(sideBarControlRef.current, {
         left: 0,
         duration: 0.4,
         ease: "power2.in",
      })
   }

  return (
    <aside className="absolute lg:relative z-50 h-full">
       <span className="absolute left-64 top-4 cursor-pointer" onClick={() => sidebarOpened ? closeSideBar() : openSideBar()} ref={sideBarControlRef}>
         {
            sidebarOpened ? <IoIosArrowBack className={`px-2 text-4xl bg-primary`} /> : <IoIosArrowForward className={`px-2 text-4xl bg-primary`} />
         }
      </span>

      <div ref={sideBarRef} className="w-64 aside-gradient p-5 h-full">
          <h4 className="font-bold">Emothrive Therapy</h4> 
         {/* sidebar nav-links */}
         <ul className="mt-5">
            {
               asideNavLinks.map(link => (
                  <Link key={link.id} href="">
                     <li className="flex items-center gap-3 text-lg p-1 rounded-md my-1">
                        <span>{link.icon}</span>
                        <span>{link.title}</span>
                     </li>
                  </Link>
               ))
            }
         </ul>

         {/* chat history */}
         <div className="mt-5">
            <span className="text-sm inline-block mb-1">Chats History</span>
            <div className="relative flex items-center">
               <FaSearch className="absolute left-1.5" />
               <input type="text" placeholder="Search" className="bg-primary placeholder:text-white py-1 w-full pl-8 outline-none" />
            </div>
         </div>

         {/* subscriptions */}
         <Link href="/dashboard/pricing">
            <div className="absolute bottom-0 p-3 rounded-t-md left-0 bg-primary w-full flex items-center justify-center gap-3">
               <TbArrowBigUpLines size="2rem" />
               <span>
                  <h3 className="textarea-xl font-semibold">Subscription</h3>
                  <p className="text-sm">More advanced feature</p>
               </span>
            </div>
         </Link>
      </div>
     
    </aside>
  )
}
