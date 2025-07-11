'use-client'

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { LuCircleUserRound } from "react-icons/lu";
import { BiLogOut } from "react-icons/bi";



export default function Profile() {

  return (
    <div className="absolute right-5 top-5">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar className="cursor-pointer"> 
            <AvatarImage src="https://wallpapers.com/images/featured/cool-profile-picture-87h46gcobjl5e4xu.jpg" />
            {/* TODO: Place user name here */}
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <DropdownMenuContent className="-right-6">
            <DropdownMenuItem>
                <LuCircleUserRound className="text-white" />
                user@domain.com
            </DropdownMenuItem>
            <DropdownMenuItem>
                <BiLogOut className="text-white" />
                Log Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenuTrigger>
      </DropdownMenu>
      <div>

      </div>
    </div>
  )
}
