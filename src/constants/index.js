import {
   AiOutlineHistory,
   AiOutlineClockCircle,
   AiOutlineMessage
} from "react-icons/ai";
import { MdOutlineHeadphones } from "react-icons/md";
import { IoBookOutline } from "react-icons/io5";
import { TbFocus2 } from "react-icons/tb";
import { GoTasklist } from "react-icons/go";



const asideNavLinks = [
   {
      id: 1,
      title: "Start New Session",
      icon: <AiOutlineMessage />
   },
   {
      id: 2,
      title: "Session History",
      icon: <AiOutlineHistory />
   },
   {
      id: 3,
      title: "Mode Tracker",
      icon: <TbFocus2 />

   },
   {
      id: 4,
      title: "Reminders",
      icon: <AiOutlineClockCircle />
   },
   {
      id: 5,
      title: "Task",
      icon: <GoTasklist />
   },
   {
      id: 6,
      title: "Music",
      icon: <MdOutlineHeadphones />
   },
   {
      id: 7,
      title: "Resources",
      icon: <IoBookOutline />
   }
];


export { asideNavLinks };