import AuthForm from "@/components/Auth/AuthForm";
import Input from "@/components/Auth/Input";
import Form from "next/form";
import { LuLock } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";

const handleSignIn = async (formData) => {
  'use server';
  // 
}


export default function SignIn() {
  return (
    <div>
      <h3 className="text-2xl font-bold">Hello Again!</h3>
      <p className="text-lg mt-2">Welcome Back</p>

     <AuthForm forSignUp={false} />
    </div>
  )
}
