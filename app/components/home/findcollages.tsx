"use client"

import { Search } from "lucide-react"
import Image from "next/image"

const cities = [
{ name:"Delhi", icon:"https://cdn-icons-png.flaticon.com/512/684/684908.png" },
{ name:"Bangalore", icon:"https://cdn-icons-png.flaticon.com/512/684/684908.png" },
{ name:"Mumbai", icon:"https://cdn-icons-png.flaticon.com/512/684/684908.png" },
{ name:"Chennai", icon:"https://cdn-icons-png.flaticon.com/512/684/684908.png" },
{ name:"Pune", icon:"https://cdn-icons-png.flaticon.com/512/684/684908.png" },
{ name:"Kolkata", icon:"https://cdn-icons-png.flaticon.com/512/684/684908.png" },
{ name:"Hyderabad", icon:"https://cdn-icons-png.flaticon.com/512/684/684908.png" },
{ name:"Ahmedabad", icon:"https://cdn-icons-png.flaticon.com/512/684/684908.png" },
{ name:"Coimbatore", icon:"https://cdn-icons-png.flaticon.com/512/684/684908.png" },
{ name:"Dehradun", icon:"https://cdn-icons-png.flaticon.com/512/684/684908.png" },
{ name:"Lucknow", icon:"https://cdn-icons-png.flaticon.com/512/684/684908.png" },
{ name:"Explore", icon:"https://cdn-icons-png.flaticon.com/512/1828/1828919.png" }
]

export default function FindColleges(){

return(

<section className="py-20 bg-[#f5f7fb] relative overflow-hidden">

{/* India Map Background */}

<div className="absolute right-0 top-0 opacity-10">

<Image
src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/India_Map.svg/1200px-India_Map.svg.png"
width={600}
height={600}
alt="map"
/>

</div>


<div className="max-w-7xl mx-auto px-6 relative">


{/* Heading */}

<div className="text-center mb-12">

<h2 className="text-4xl font-bold text-black">
Find Colleges Near You!
</h2>

<p className="text-blue-500 mt-3 text-lg font-semibold">

Search by city to 
  <span className="text-orange-500 font-semibold">
 Explore Top Colleges
</span> <span className="text-blue-500 font-semibold">in your area.
</span>
 

</p>

</div>


{/* Search Bar */}

<div className="flex justify-center mb-12">

<div className="bg-white shadow-lg rounded-xl flex items-center w-full max-w-2xl overflow-hidden">

<div className="px-4 text-gray-500">

<Search/>

</div>

<input
type="text"
placeholder="Search city or location..."
className="flex-1 px-2 py-4 outline-none text-black"
/>

<button className="bg-[#1e3a5f] text-white px-8 py-4 font-medium">

Search Now

</button>

</div>

</div>


{/* City Cards */}

<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">

{cities.map((city,index)=>(

<div
key={index}
className="bg-white border rounded-xl p-6 text-center hover:shadow-lg transition cursor-pointer"
>

<div className="flex justify-center mb-3">

<Image
src={city.icon}
width={40}
height={40}
alt={city.name}
/>

</div>

<h3 className="font-medium text-black">
{city.name}
</h3>

</div>

))}

</div>

</div>

</section>

)
}