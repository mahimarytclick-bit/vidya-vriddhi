"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Bell, User, Search, Menu, X } from "lucide-react"

export default function Navbar() {

  const [mobileMenu,setMobileMenu] = useState(false)

  return (

<header className="bg-white shadow-md">

{/* TOP NAVBAR */}

<div className="flex items-center justify-between px-4 md:px-8 py-3">

{/* Logo */}

<Link href="/" className="flex items-center">

<Image
src="/logo.png"
alt="VidyaVriddhi"
width={150}
height={45}
/>

</Link>


{/* Desktop Search */}

<div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 w-[420px]">

<Search className="w-4 h-4 text-gray-500 mr-2"/>

<input
type="text"
placeholder="Search colleges, exams, courses..."
className="bg-transparent outline-none w-full text-sm text-black"
/>

</div>


{/* Desktop Right Icons */}

<div className="hidden md:flex items-center gap-4">

<button className="p-2 border rounded-lg text-[#1e3a5f]">
<Bell size={20}/>
</button>

<button className="flex items-center gap-2 border px-3 py-2 rounded-lg text-[#1e3a5f]">

<User size={18}/>
User

</button>

</div>


{/* Mobile Menu Button */}

<button
onClick={()=>setMobileMenu(!mobileMenu)}
className="md:hidden"
>

{mobileMenu ? <X size={26}/> : <Menu size={26}/>}

</button>

</div>


{/* DESKTOP MENU */}

<nav className="hidden md:block border-t px-8 py-3">

<ul className="flex items-center gap-8 text-gray-700 font-medium">

<li><Link href="/">Home</Link></li>

<li><Link href="/colleges">Colleges</Link></li>

<li><Link href="/courses">Courses</Link></li>

<li><Link href="/exams">Exams</Link></li>

<li><Link href="/admissions">Admissions</Link></li>

<li><Link href="/rankings">Rankings</Link></li>

<li><Link href="/blogs">Blogs</Link></li>

<li><Link href="/resources">Resources</Link></li>

<li><Link href="/dashboard">Dashboard</Link></li>

<li className="ml-auto text-orange-500 font-semibold cursor-pointer">
Talk to Career Experts
</li>

</ul>

</nav>


{/* MOBILE MENU */}

{mobileMenu && (

<div className="md:hidden border-t px-4 pb-6">

{/* Mobile Search */}

<div className="flex items-center bg-gray-100 rounded-full px-4 py-2 mt-4">

<Search className="w-4 h-4 text-gray-500 mr-2"/>

<input
type="text"
placeholder="Search colleges..."
className="bg-transparent outline-none w-full text-sm"
/>

</div>


{/* Menu Links */}

<ul className="flex flex-col gap-4 mt-6 text-gray-700 font-medium">

<li><Link href="/">Home</Link></li>

<li><Link href="/colleges">Colleges</Link></li>

<li><Link href="/courses">Courses</Link></li>

<li><Link href="/exams">Exams</Link></li>

<li><Link href="/admissions">Admissions</Link></li>

<li><Link href="/rankings">Rankings</Link></li>

<li><Link href="/blogs">Blogs</Link></li>

<li><Link href="/resources">Resources</Link></li>

<li><Link href="/dashboard">Dashboard</Link></li>

<li className="text-orange-500 font-semibold">
Talk to Career Experts
</li>

</ul>


{/* Mobile Icons */}

<div className="flex gap-4 mt-6">

<button className="p-2 border rounded-lg text-[#1e3a5f]">

<Bell size={20}/>

</button>

<button className="flex items-center gap-2 border px-3 py-2 rounded-lg text-[#1e3a5f]">

<User size={18}/>
User

</button>

</div>

</div>

)}

</header>

  )

}