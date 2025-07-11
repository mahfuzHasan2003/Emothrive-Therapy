import { Geist, Geist_Mono, } from "next/font/google";
import "../globals.css";
import Image from "next/image";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Authentication | Emothrive Therapy",
  description: "....",
};

export default function AuthLayout({ children }) {
   return (
      <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
      >
         <div className="h-screen flex dashboard-bg">
           <div className="hidden lg:block flex-1/2">
              <Image src="/project-image/auth-image.png" alt="Brand Image" className="object-cover h-full w-full" width={500} height={1000} />
           </div>
           <div className="w-full lg:flex-1/2 flex items-center justify-center">
               {children}
           </div>
         </div>
      </body>
    </html>
   )
}
