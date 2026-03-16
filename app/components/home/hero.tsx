"use client"

import { useEffect, useState } from "react"
import { Search, GraduationCap, BookOpen, FileText } from "lucide-react"

export default function Hero() {

const texts = [
"Find the Best Colleges",
"Explore Top Courses",
"Discover Competitive Exams"
]

const [textIndex,setTextIndex] = useState(0)

useEffect(()=>{

const interval = setInterval(()=>{
setTextIndex((prev)=>(prev+1)%texts.length)
},3000)

return ()=>clearInterval(interval)

},[])

return(

<section
className="relative w-full bg-cover bg-center text-white"
style={{backgroundImage:"url('/hero.avif')"}}
>

{/* overlay */}

<div className="absolute inset-0 bg-black/60"></div>

<div className="relative max-w-7xl mx-auto px-4 md:px-8 py-16">

<div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 items-center">


{/* LEFT SIDE */}

<div className="w-full">

<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">

{texts[textIndex]}

</h1>

<p className="mt-4 text-gray-200 text-sm md:text-base max-w-lg">

Explore thousands of colleges, courses and exams to build a successful career with Vidya Vriddhi.

</p>


{/* SEARCH */}

<div className="mt-6 flex flex-col sm:flex-row bg-white rounded-xl overflow-hidden shadow-lg">

<input
type="text"
placeholder="Search Colleges, Courses or Exams..."
className="flex-1 px-4 py-3 text-black outline-none"
/>

<button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 flex items-center justify-center gap-2">

<Search size={18}/>
Search

</button>

</div>


{/* QUICK LINKS */}

<div className="flex flex-wrap gap-3 mt-6">

<button className="bg-white/20 backdrop-blur px-4 py-2 rounded-lg text-sm">
Engineering
</button>

<button className="bg-white/20 backdrop-blur px-4 py-2 rounded-lg text-sm">
MBA
</button>

<button className="bg-white/20 backdrop-blur px-4 py-2 rounded-lg text-sm">
Medical
</button>

<button className="bg-white/20 backdrop-blur px-4 py-2 rounded-lg text-sm">
Study Abroad
</button>

</div>


{/* STATS */}

<div className="flex flex-wrap gap-8 mt-8">

<div>
<h3 className="text-xl md:text-2xl font-bold">5000+</h3>
<p className="text-gray-200 text-sm">Colleges</p>
</div>

<div>
<h3 className="text-xl md:text-2xl font-bold">200+</h3>
<p className="text-gray-200 text-sm">Exams</p>
</div>

<div>
<h3 className="text-xl md:text-2xl font-bold">1000+</h3>
<p className="text-gray-200 text-sm">Courses</p>
</div>

</div>

</div>


{/* RIGHT CARDS */}

<div className="grid grid-cols-2 gap-4 w-full">

<div className="bg-white text-black p-4 md:p-6 rounded-xl shadow-lg">

<GraduationCap className="text-blue-600 mb-2"/>

<h3 className="font-semibold text-sm md:text-base">
Explore Colleges
</h3>

<p className="text-xs md:text-sm text-gray-500">
Find top colleges across India
</p>

</div>


<div className="bg-white text-black p-4 md:p-6 rounded-xl shadow-lg">

<BookOpen className="text-orange-500 mb-2"/>

<h3 className="font-semibold text-sm md:text-base">
Popular Courses
</h3>

<p className="text-xs md:text-sm text-gray-500">
Explore trending courses
</p>

</div>


<div className="bg-white text-black p-4 md:p-6 rounded-xl shadow-lg">

<FileText className="text-blue-600 mb-2"/>

<h3 className="font-semibold text-sm md:text-base">
Top Exams
</h3>

<p className="text-xs md:text-sm text-gray-500">
Check exam details
</p>

</div>


<div className="bg-white text-black p-4 md:p-6 rounded-xl shadow-lg">

<GraduationCap className="text-orange-500 mb-2"/>

<h3 className="font-semibold text-sm md:text-base">
Study Abroad
</h3>

<p className="text-xs md:text-sm text-gray-500">
Explore global universities
</p>

</div>

</div>

</div>

</div>

</section>

)

}