import Input from '@/components/Auth/Input'
import Form from 'next/form'
import { CgProfile } from "react-icons/cg";
import { MdOutlineEmail } from "react-icons/md";
import { LuLock } from "react-icons/lu";

const handleSignUp = async (formData) => {
  'use server';

  const email = await formData.get("email");
  const password = await formData.get("password");


  try {
    const response = await fetch('https://fcd3cf00f0d0.ngrok-free.app/users/register/', {
      method: 'POST',
      headers: {  
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: email,
        password: password,
        confirm_password: password,
      }),
    });

    const data = await response.json();
    console.log(data);    
  } catch (error) {
    console.log(error);
  }

}

export default function SignUp() {
  return (
    <div>
      <h3 className="text-2xl font-bold">Hello!</h3>
      <p className="text-lg mt-2">Sign Up to Get Started</p>

      <Form className='mt-8 space-y-4' action={handleSignUp}>
        <Input placeholder="Name" icon={<CgProfile className="text-2xl" />} type="text" name="name" />
        <Input placeholder="Email Address" icon={<MdOutlineEmail className="text-2xl" />} type="email" name="email" />
        <Input placeholder="Password" icon={<LuLock className="text-2xl" />} type="password" name="password" />
        <button type='submit' className='w-full bg-primary py-2 rounded-md cursor-pointer'>Sign up</button>
      </Form>
    </div>
  )
}
