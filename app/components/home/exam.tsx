"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import Link from "next/link"
import {
  GraduationCap,
  BookOpen,
  FileText,
  Award,
  Scale,
  Landmark
} from "lucide-react"

const exams = [
{
name:"JEE Main",
students:"1.2M Applicants",
icon:GraduationCap
},
{
name:"NEET",
students:"2M Applicants",
icon:BookOpen
},
{
name:"CAT",
students:"300K Applicants",
icon:FileText
},
{
name:"GATE",
students:"800K Applicants",
icon:Award
},
{
name:"CLAT",
students:"90K Applicants",
icon:Scale
},
{
name:"UPSC",
students:"1M Applicants",
icon:Landmark
}
]

export default function Exams(){

return(

<section className="py-20 bg-[#f5f7fb]">

<div className="max-w-7xl mx-auto px-6">

{/* Heading */}

<div className="flex justify-between items-center mb-12">

<div>

<h2 className="text-3xl font-bold text-black">
Popular Exams
</h2>

<p className="text-gray-600 mt-2">
Explore top entrance exams for colleges in India
</p>

</div>

<button className="text-orange-500 font-medium">
View All →
</button>

</div>


{/* Slider */}

<Swiper
spaceBetween={20}
slidesPerView={1}
breakpoints={{
640:{slidesPerView:2},
768:{slidesPerView:3},
1024:{slidesPerView:4}
}}
>

{exams.map((exam,index)=>{

const Icon = exam.icon

return(

<SwiperSlide key={index}>

<div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition group">

{/* Icon */}

<div className="w-14 h-14 flex items-center justify-center rounded-lg bg-blue-100 text-[#1e3a5f] mb-4">

<Icon size={28}/>

</div>

{/* Title */}

<h3 className="text-lg font-semibold text-black">
{exam.name}
</h3>

<p className="text-gray-500 text-sm mt-1">
{exam.students}
</p>
<Link href="/colleges">
<button className="mt-4 text-orange-500 text-sm font-medium group-hover:underline">

View Exam Details →

</button>
</Link>
</div>

</SwiperSlide>

)

})}

</Swiper>

</div>

</section>

)
}