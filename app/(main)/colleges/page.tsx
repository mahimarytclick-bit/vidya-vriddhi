"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Search, Filter, MapPin, Star, GraduationCap, Users, BookOpen, Award } from "lucide-react"

interface College {
  id: number
  slug: string
  name: string
  city: string
  state: string
  rating: string
  fees: string
  courses: string
  image: string
  type: string
  established: string
  students: string
  description: string
}

const allColleges: College[] = [
  {
    id: 1,
    slug: "iit-delhi",
    name: "IIT Delhi",
    city: "Delhi",
    state: "Delhi",
    rating: "4.8",
    fees: "₹2.2L / year",
    courses: "40+ Courses",
    image: "https://images.unsplash.com/photo-1590362891991-f776e747a588",
    type: "Engineering",
    established: "1961",
    students: "8000+",
    description: "Indian Institute of Technology Delhi is one of the premier engineering institutes in India."
  },
  {
    id: 2,
    slug: "iit-bombay",
    name: "IIT Bombay",
    city: "Mumbai",
    state: "Maharashtra",
    rating: "4.9",
    fees: "₹2.3L / year",
    courses: "35+ Courses",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
    type: "Engineering",
    established: "1958",
    students: "10000+",
    description: "Indian Institute of Technology Bombay is a public technical university located in Mumbai."
  },
  {
    id: 3,
    slug: "iim-ahmedabad",
    name: "IIM Ahmedabad",
    city: "Ahmedabad",
    state: "Gujarat",
    rating: "4.9",
    fees: "₹23L total",
    courses: "MBA Programs",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    type: "MBA",
    established: "1961",
    students: "1000+",
    description: "Indian Institute of Management Ahmedabad is a premier business school in India."
  },
  {
    id: 4,
    slug: "aiims-delhi",
    name: "AIIMS Delhi",
    city: "Delhi",
    state: "Delhi",
    rating: "4.9",
    fees: "₹1.6L / year",
    courses: "Medical Programs",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d",
    type: "Medical",
    established: "1956",
    students: "2500+",
    description: "All India Institute of Medical Sciences New Delhi is a medical college and hospital."
  },
  {
    id: 5,
    slug: "nit-trichy",
    name: "NIT Trichy",
    city: "Tiruchirappalli",
    state: "Tamil Nadu",
    rating: "4.7",
    fees: "₹1.9L / year",
    courses: "30+ Courses",
    image: "https://images.unsplash.com/photo-1562774053-701939374585",
    type: "Engineering",
    established: "1964",
    students: "6000+",
    description: "National Institute of Technology Tiruchirappalli is a public technical university."
  },
  {
    id: 6,
    slug: "bits-pilani",
    name: "BITS Pilani",
    city: "Pilani",
    state: "Rajasthan",
    rating: "4.6",
    fees: "₹3.1L / year",
    courses: "25+ Courses",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f",
    type: "Engineering",
    established: "1964",
    students: "12000+",
    description: "Birla Institute of Technology and Science Pilani is a private deemed university."
  },
  {
    id: 7,
    slug: "iim-bangalore",
    name: "IIM Bangalore",
    city: "Bangalore",
    state: "Karnataka",
    rating: "4.8",
    fees: "₹24L total",
    courses: "MBA Programs",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7",
    type: "MBA",
    established: "1973",
    students: "1200+",
    description: "Indian Institute of Management Bangalore is a leading business school in India."
  },
  {
    id: 8,
    slug: "christian-medical-college",
    name: "Christian Medical College",
    city: "Vellore",
    state: "Tamil Nadu",
    rating: "4.8",
    fees: "₹2.5L / year",
    courses: "Medical Programs",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56",
    type: "Medical",
    established: "1900",
    students: "3500+",
    description: "Christian Medical College Vellore is a private medical college and hospital."
  }
]

const collegeTypes: string[] = ["All", "Engineering", "MBA", "Medical", "Arts", "Science", "Commerce"]
const states: string[] = ["All States", "Delhi", "Maharashtra", "Karnataka", "Tamil Nadu", "Gujarat", "Rajasthan"]

export default function CollegesPage() {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState<string>("")
  const [selectedType, setSelectedType] = useState<string>("All")
  const [selectedState, setSelectedState] = useState<string>("All States")
  const [showFilters, setShowFilters] = useState<boolean>(false)

  const filteredColleges: College[] = allColleges.filter(college => {
    const matchesSearch = college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         college.city.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType = selectedType === "All" || college.type === selectedType
    const matchesState = selectedState === "All States" || college.state === selectedState
    
    return matchesSearch && matchesType && matchesState
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-500 to-orange-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Explore Top Colleges in India
            </h1>
            <p className="text-xl text-orange-100 mb-8">
              Find the perfect college for your career goals with detailed information, rankings, and reviews
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto bg-white rounded-xl flex items-center p-2 shadow-lg">
              <Search className="text-gray-400 ml-3" size={20} />
              <input
                type="text"
                placeholder="Search colleges by name, city, or course..."
                className="flex-1 px-4 py-3 text-black outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button 
                onClick={() => setShowFilters(!showFilters)}
                className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg flex items-center gap-2 mr-2"
              >
                <Filter size={18} />
                Filters
              </button>
              <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg text-white">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      {showFilters && (
        <section className="bg-white border-b py-6">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-700 mb-3">College Type</h3>
                <div className="flex flex-wrap gap-2">
                  {collegeTypes.map((type) => (
                    <button
                      key={type}
                      onClick={() => setSelectedType(type)}
                      className={`px-4 py-2 rounded-lg border transition ${
                        selectedType === type
                          ? "bg-orange-500 text-white border-orange-500"
                          : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-700 mb-3">State</h3>
                <div className="flex flex-wrap gap-2">
                  {states.map((state) => (
                    <button
                      key={state}
                      onClick={() => setSelectedState(state)}
                      className={`px-4 py-2 rounded-lg border transition ${
                        selectedState === state
                          ? "bg-orange-500 text-white border-orange-500"
                          : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                      }`}
                    >
                      {state}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Stats Section */}
      <section className="bg-white py-12 border-b">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <GraduationCap className="text-blue-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">5000+</h3>
              <p className="text-gray-600">Colleges</p>
            </div>
            <div>
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="text-green-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">50L+</h3>
              <p className="text-gray-600">Students</p>
            </div>
            <div>
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <BookOpen className="text-purple-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">1000+</h3>
              <p className="text-gray-600">Courses</p>
            </div>
            <div>
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="text-orange-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">200+</h3>
              <p className="text-gray-600">Exams</p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                {filteredColleges.length} Colleges Found
              </h2>
              <p className="text-gray-600 mt-1">
                Showing {filteredColleges.length} of {allColleges.length} colleges
              </p>
            </div>
            <select className="border border-gray-300 rounded-lg px-4 py-2 text-gray-700">
              <option>Sort by: Relevance</option>
              <option>Sort by: Rating</option>
              <option>Sort by: Fees (Low to High)</option>
              <option>Sort by: Fees (High to Low)</option>
            </select>
          </div>

          {/* College Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredColleges.map((college) => (
              <div
                key={college.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition overflow-hidden"
              >
                {/* Image */}
                <div className="relative h-48">
                  <Image
                    src={college.image}
                    alt={college.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full flex items-center shadow">
                    <Star size={14} className="text-yellow-500 mr-1" />
                    <span className="text-sm font-medium">{college.rating}</span>
                  </div>
                  <div className="absolute top-3 left-3 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {college.type}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-bold text-xl text-gray-800 mb-2">
                    {college.name}
                  </h3>
                  
                  <p className="text-gray-600 flex items-center gap-1 text-sm mb-3">
                    <MapPin size={14} />
                    {college.city}, {college.state}
                  </p>

                  <p className="text-gray-700 text-sm mb-4 line-clamp-2">
                    {college.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center p-2 bg-gray-50 rounded-lg">
                      <p className="text-xs text-gray-500">Established</p>
                      <p className="font-semibold text-sm">{college.established}</p>
                    </div>
                    <div className="text-center p-2 bg-gray-50 rounded-lg">
                      <p className="text-xs text-gray-500">Students</p>
                      <p className="font-semibold text-sm">{college.students}</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <p className="text-xs text-gray-500">Fees</p>
                      <p className="font-semibold text-orange-600">{college.fees}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-500">Courses</p>
                      <p className="font-semibold text-gray-700">{college.courses}</p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button 
                      onClick={() => router.push(`/colleges/${college.slug}`)}
                      className="flex-1 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
                    >
                      View Details
                    </button>
                    <button className="flex-1 border border-orange-500 text-orange-500 hover:bg-orange-50 px-4 py-2 rounded-lg text-sm font-medium transition">
                      Compare
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredColleges.length === 0 && (
            <div className="text-center py-12">
              <div className="bg-gray-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="text-gray-400" size={40} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                No colleges found
              </h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your filters or search terms
              </p>
              <button 
                onClick={() => {
                  setSearchTerm("")
                  setSelectedType("All")
                  setSelectedState("All States")
                }}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg"
              >
                Clear Filters
              </button>
            </div>
          )}

          {/* Load More */}
          {filteredColleges.length > 0 && filteredColleges.length < allColleges.length && (
            <div className="text-center mt-12">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium transition">
                Load More Colleges
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-4">
            Need Help Choosing the Right College?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Our expert counselors can help you find the perfect college based on your interests and career goals.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition">
              Talk to Counselor
            </button>
            <button className="border border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-medium transition">
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}