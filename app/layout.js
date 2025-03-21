import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";

import {Josefin_Sans} from 'next/font/google'

const josefin = Josefin_Sans({
  
  subsets: ['latin'],
  display:'swap'
})


import "@/app/_styles/globals.css"
import Header from "./_components/Header";

export const metadata = {
  // title: "Wild Oasis",
  title: {
    template: "The Wild Oasis",
    default: "welcome / The Wild Oasis",
  },
  description: "Discover the magic of wild oasis",

};

export default function RootLayout({ children }) {

return <html lang="en">
<body className="{` ${josefin.className} bg-primary-950 text-primary-100 min-h-screen flex flex-col antialiased`}">
 

<Header/>
 
 <div className="flex-1 px-8 py-12 ">
 <main className="max-w-7xl mx-auto">{children}</main>

 </div>
 
</body>
</html>
}
