import { asideNavLinks } from "@/constants";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { TbArrowBigUpLines } from "react-icons/tb";


export default function SideBar() {
  return (
    <aside className="w-64 aside-gradient p-5 relative">
      <span className="flex items-center justify-between font-bold">
      <h4 className="">Emothrive Therapy</h4> <IoIosArrowForward  />
      </span>

      {/* sidebar nav-links */}
      <ul className="mt-5">
         {
            asideNavLinks.map(link => (
               <Link key={link.id} href="">
               <li className="flex items-center gap-3 text-lg py-2 px-1 rounded-md">
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
      <div className="absolute bottom-0 p-3 rounded-t-md left-0 bg-primary w-full flex items-center justify-center gap-3">
         <TbArrowBigUpLines size="2rem" />
         <span>
            <h3 className="textarea-xl font-semibold">Subscription</h3>
            <p className="text-sm">More advanced feature</p>
         </span>

      </div>
    </aside>
  )
}
