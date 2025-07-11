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

      <Form className='mt-8 space-y-4' action={handleSignIn}>
        <Input placeholder="Email Address" icon={<MdOutlineEmail className="text-2xl" />} type="email" name="email" />
        <Input placeholder="Password" icon={<LuLock className="text-2xl" />} type="password" name="password" />
        <button type='submit' className='w-full bg-primary py-2 rounded-md cursor-pointer'>Sign in</button>
      </Form>
    </div>
  )
}
