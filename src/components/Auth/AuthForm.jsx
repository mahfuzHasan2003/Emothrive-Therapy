import Form from "next/form";
import Input from "./Input";
import { CgProfile } from "react-icons/cg";
import { MdOutlineEmail } from "react-icons/md";
import { LuLock } from "react-icons/lu";
import handleAuth from "@/app/(auth)/signup/actions";
import SubmitBtn from "./SubmitBtn";

export default function AuthForm({forSignUp = true}) {
  return (
    <Form className='mt-8 space-y-4' action={handleAuth}>
      <input type="hidden" name="authType" value={forSignUp ? 'signup' : 'signin'} />

      {
        forSignUp &&  <Input placeholder="Name" icon={<CgProfile className="text-2xl" />} type="text" name="name" />
      }
     
      <Input placeholder="Email Address" icon={<MdOutlineEmail className="text-2xl" />} type="email" name="email" />
      <Input placeholder="Password" icon={<LuLock className="text-2xl" />} type="password" name="password" />

      <SubmitBtn forSignUp={forSignUp} />
   </Form>
  )
}
