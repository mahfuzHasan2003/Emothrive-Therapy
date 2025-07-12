'use client';
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash  } from "react-icons/fa6";

export default function Input({type, placeholder, icon, name}) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="relative flex items-center">
      <span className="text-[#6C7275] absolute left-2">{icon}</span>
      <input name={name} type={type !== 'password' ? type : showPassword ? 'text' : 'password'} placeholder={placeholder} required className="outline-none border-none bg-white text-[#6C7275] min-w-sm py-2 rounded-md pl-10 pr-2 placeholder:text-[#6C7275]" />
      {
        type === 'password' && (
          <span className="text-[#6C7275] absolute right-2">
            {showPassword ? 
              <FaRegEyeSlash className="text-2xl cursor-pointer" onClick={() => setShowPassword(false)} /> : 
              <FaRegEye className="text-2xl cursor-pointer" onClick={() => setShowPassword(true)} />
            }
          </span>
        )
      }
    </div>
  )
}
