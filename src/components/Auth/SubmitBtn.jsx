'use client';
import { useFormStatus } from "react-dom";

export default function SubmitBtn({forSignUp = true}) {
  const {pending} =  useFormStatus();

  return (
    <button type='submit' className={`w-full bg-primary py-2 disabled:cursor-not-allowed rounded-md cursor-pointer font-semibold ${pending ? 'opacity-50' : ''}`} disabled={pending}>
      {forSignUp ? pending ? 'Signing Up...' : "Sign Up" : pending ? 'Logging In...' : "Sign In"}
    </button>
  )
}
