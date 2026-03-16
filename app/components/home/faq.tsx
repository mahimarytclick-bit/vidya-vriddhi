"use client"

import { useState } from "react"

const faqs = [
{
question:"How can Vidya Vridhi help me choose the right college?",
answer:"Vidya Vridhi provides detailed information about colleges, courses, exams and career options to help students make the best decisions."
},
{
question:"Can I search colleges by location?",
answer:"Yes, you can explore colleges by city, state and course preferences using our smart search tools."
},
{
question:"Does Vidya Vridhi provide exam guidance?",
answer:"Yes, we provide information and preparation tips for major entrance exams like JEE, NEET, CAT and more."
},
{
question:"Can I explore study abroad options?",
answer:"Absolutely. Vidya Vridhi offers guides and resources to explore universities and programs abroad."
},
{
question:"Is Vidya Vridhi free to use?",
answer:"Yes, students can explore colleges, courses and career guidance resources for free."
}
]

export default function FAQ(){

const [active,setActive] = useState<number | null>(null)

const toggleFAQ = (index:number)=>{
setActive(active===index ? null : index)
}

return(

<section className="py-20 bg-[#f6f8fc]">

<div className="max-w-7xl mx-auto px-6">

{/* Heading */}

<div className="text-center mb-14">

<h2 className="text-3xl font-bold text-[#1e3a5f]">
Frequently Asked Questions
</h2>

<p className="text-gray-600 mt-3">
Everything you need to know about Vidya Vridhi
</p>

</div>


<div className="grid md:grid-cols-2 gap-12 items-center">

{/* Left Image */}

<div>

<img
src="https://images.unsplash.com/photo-1588072432836-e10032774350"
alt="faq"
className="rounded-xl shadow-lg w-full object-cover"
/>

</div>


{/* FAQ List */}

<div className="space-y-4">

{faqs.map((faq,index)=>(

<div
key={index}
className="bg-white rounded-lg shadow-sm border overflow-hidden"
>

<button
onClick={()=>toggleFAQ(index)}
className="w-full flex justify-between items-center px-5 py-4 text-left font-medium text-[#1e3a5f]"
>

{faq.question}

<span className="text-orange-500 text-xl">

{active===index ? "-" : "+"}

</span>

</button>

{active===index && (

<div className="px-5 pb-4 text-gray-600 text-sm">

{faq.answer}

</div>

)}

</div>

))}

</div>

</div>

</div>

</section>

)
}