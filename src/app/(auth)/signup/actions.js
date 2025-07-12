'use server';

import { redirect } from "next/navigation";

async function handleSignUp(name, email, password) {
   let redirectURL;
   try {
      const response = await fetch(`${process.env.API_BASE_URL}/users/register/`, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({
            name: name,
            email: email,
            password: password,
            password_confirm: password,
         }),
      });
      const data = await response.json();
      if (response.ok) {
         redirectURL = '/dashboard';
         return data;
      }
      console.error('Error during sign up:', data);
      return data;
   } catch (error) {
      console.log(error);
      return { error: 'An error occurred during sign up.' };
   } finally {
      redirectURL && redirect(redirectURL);
   }
}

async function handleSignIn(email, password) {
   let redirectURL;
   try {
      const response = await fetch(`${process.env.API_BASE_URL}/users/login/`, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({
            email: email,
            password: password,
         }),
      });
      const data = await response.json();
      if (response.ok) {
         redirectURL = '/dashboard';
         return data;
      }
      console.error('Error during sign in:', data);
      return data;
   }
   catch (error) {
      console.log(error);
      return { error: 'An error occurred during sign in.' };
   } finally {
      redirectURL && redirect(redirectURL);
   }
}

export default async function handleAuth(formData) {
   const authType = await formData.get("authType");
   const name = await formData.get("name");
   const email = await formData.get("email");
   const password = await formData.get("password");

   if (authType === 'signup') {
      return await handleSignUp(name, email, password);
   } else if (authType === 'signin') {
      return await handleSignIn(email, password);
   }
}