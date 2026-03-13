"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Search, Filter, Calendar, Clock, Users, BookOpen, Award, FileText } from "lucide-react"

const allExams = [
  {
    id: 1,
    slug: "jee-main",
    name: "JEE Main",
    fullName: "Joint Entrance Examination Main",
    category: "Engineering",
    level: "National",
    frequency: "Twice a year",
    duration: "3 hours",
    mode: "Computer Based",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    registrationDates: "Nov - Dec",
    examDates: "Jan & Apr",
    eligibility: "10+2 with PCM",
    colleges: "31 NITs, IIITs",
    description: "JEE Main is the entrance exam for engineering admissions in NITs, IIITs and other centrally funded technical institutions."
  },
  {
    id: 2,
    slug: "jee-advanced",
    name: "JEE Advanced",
    fullName: "Joint Entrance Examination Advanced",
    category: "Engineering",
    level: "National",
    frequency: "Once a year",
    duration: "3 hours",
    mode: "Computer Based",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    registrationDates: "May",
    examDates: "June",
    eligibility: "Top 2.5L in JEE Main",
    colleges: "23 IITs",
    description: "JEE Advanced is the entrance exam for admission to IITs and other premier engineering institutions."
  },
  {
    id: 3,
    slug: "neet",
    name: "NEET UG",
    fullName: "National Eligibility cum Entrance Test",
    category: "Medical",
    level: "National",
    frequency: "Once a year",
    duration: "3 hours 20 min",
    mode: "Pen & Paper",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d",
    registrationDates: "Mar - Apr",
    examDates: "May",
    eligibility: "10+2 with PCB",
    colleges: "600+ Medical Colleges",
    description: "NEET UG is the single entrance exam for MBBS, BDS and other medical courses in India."
  },
  {
    id: 4,
    slug: "cat",
    name: "CAT",
    fullName: "Common Admission Test",
    category: "MBA",
    level: "National",
    frequency: "Once a year",
    duration: "2 hours",
    mode: "Computer Based",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7",
    registrationDates: "Aug - Sep",
    examDates: "November",
    eligibility: "Graduate",
    colleges: "20 IIMs",
    description: "CAT is the entrance exam for MBA admissions in IIMs and other top B-schools in India."
  },
  {
    id: 5,
    slug: "upsc-cse",
    name: "UPSC CSE",
    fullName: "Union Public Service Commission Civil Services",
    category: "Civil Services",
    level: "National",
    frequency: "Once a year",
    duration: "Prelims: 2 hrs, Mains: 3 days",
    mode: "Pen & Paper",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8",
    registrationDates: "Feb - Mar",
    examDates: "May - Sep",
    eligibility: "Graduate",
    colleges: "IAS, IPS, IFS",
    description: "UPSC CSE is the examination for recruitment to various civil services of the Government of India."
  },
  {
    id: 6,
    slug: "gate",
    name: "GATE",
    fullName: "Graduate Aptitude Test in Engineering",
    category: "Engineering",
    level: "National",
    frequency: "Once a year",
    duration: "3 hours",
    mode: "Computer Based",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    registrationDates: "Aug - Sep",
    examDates: "Feb",
    eligibility: "Graduate",
    colleges: "IITs, IISc, PSUs",
    description: "GATE is conducted for admission to MTech programs and recruitment in PSUs."
  },
  {
    id: 7,
    slug: "clat",
    name: "CLAT",
    fullName: "Common Law Admission Test",
    category: "Law",
    level: "National",
    frequency: "Once a year",
    duration: "2 hours",
    mode: "Pen & Paper",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
    registrationDates: "Dec - Jan",
    examDates: "May",
    eligibility: "10+2 / Graduate",
    colleges: "22 NLUs",
    description: "CLAT is the entrance exam for admission to undergraduate and postgraduate law programs."
  },
  {
    id: 8,
    slug: "cuet",
    name: "CUET UG",
    fullName: "Common University Entrance Test",
    category: "Undergraduate",
    level: "National",
    frequency: "Once a year",
    duration: "2 hours",
    mode: "Computer Based",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    registrationDates: "Feb - Mar",
    examDates: "May - June",
    eligibility: "10+2",
    colleges: "250+ Universities",
    description: "CUET UG is the common entrance test for admissions to central universities and other participating institutions."
  }
]

const examCategories = ["All", "Engineering", "Medical", "MBA", "Civil Services", "Law", "Undergraduate"]
const examLevels = ["All Levels", "National", "State", "University"]

export default function ExamsPage() {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedLevel, setSelectedLevel] = useState("All Levels")
  const [showFilters, setShowFilters] = useState(false)

  const filteredExams = allExams.filter(exam => {
    const matchesSearch = exam.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         exam.fullName.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || exam.category === selectedCategory
    const matchesLevel = selectedLevel === "All Levels" || exam.level === selectedLevel
    
    return matchesSearch && matchesCategory && matchesLevel
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Explore Top Competitive Exams in India
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Find complete information about entrance exams, dates, eligibility, and preparation tips
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto bg-white rounded-xl flex items-center p-2 shadow-lg">
              <Search className="text-gray-400 ml-3" size={20} />
              <input
                type="text"
                placeholder="Search exams by name, category, or college..."
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
              <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-white">
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
                <h3 className="font-semibold text-gray-700 mb-3">Category</h3>
                <div className="flex flex-wrap gap-2">
                  {examCategories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-lg border transition ${
                        selectedCategory === category
                          ? "bg-blue-600 text-white border-blue-600"
                          : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-700 mb-3">Level</h3>
                <div className="flex flex-wrap gap-2">
                  {examLevels.map((level) => (
                    <button
                      key={level}
                      onClick={() => setSelectedLevel(level)}
                      className={`px-4 py-2 rounded-lg border transition ${
                        selectedLevel === level
                          ? "bg-blue-600 text-white border-blue-600"
                          : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                      }`}
                    >
                      {level}
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
                <FileText className="text-blue-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">50+</h3>
              <p className="text-gray-600">Exams</p>
            </div>
            <div>
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="text-green-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">5Cr+</h3>
              <p className="text-gray-600">Students</p>
            </div>
            <div>
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <BookOpen className="text-purple-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">1000+</h3>
              <p className="text-gray-600">Colleges</p>
            </div>
            <div>
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="text-orange-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">95%</h3>
              <p className="text-gray-600">Success Rate</p>
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
                {filteredExams.length} Exams Found
              </h2>
              <p className="text-gray-600 mt-1">
                Showing {filteredExams.length} of {allExams.length} exams
              </p>
            </div>
            <select className="border border-gray-300 rounded-lg px-4 py-2 text-gray-700">
              <option>Sort by: Popular</option>
              <option>Sort by: Upcoming</option>
              <option>Sort by: Category</option>
            </select>
          </div>

          {/* Exam Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredExams.map((exam) => (
              <div
                key={exam.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition overflow-hidden"
              >
                {/* Image */}
                <div className="relative h-48">
                  <Image
                    src={exam.image}
                    alt={exam.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full flex items-center shadow">
                    <Clock size={14} className="text-blue-600 mr-1" />
                    <span className="text-sm font-medium">{exam.duration}</span>
                  </div>
                  <div className="absolute top-3 left-3 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {exam.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-bold text-xl text-gray-800 mb-1">
                    {exam.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">{exam.fullName}</p>

                  <p className="text-gray-700 text-sm mb-4 line-clamp-2">
                    {exam.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="text-center p-2 bg-gray-50 rounded-lg">
                      <p className="text-xs text-gray-500">Level</p>
                      <p className="font-semibold text-sm">{exam.level}</p>
                    </div>
                    <div className="text-center p-2 bg-gray-50 rounded-lg">
                      <p className="text-xs text-gray-500">Mode</p>
                      <p className="font-semibold text-sm">{exam.mode}</p>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">Registration</span>
                      <span className="text-xs font-medium text-gray-700">{exam.registrationDates}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">Exam Dates</span>
                      <span className="text-xs font-medium text-gray-700">{exam.examDates}</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button 
                      onClick={() => router.push(`/exams/${exam.slug}`)}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
                    >
                      View Details
                    </button>
                    <button className="flex-1 border border-blue-600 text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg text-sm font-medium transition">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredExams.length === 0 && (
            <div className="text-center py-12">
              <div className="bg-gray-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="text-gray-400" size={40} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                No exams found
              </h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your filters or search terms
              </p>
              <button 
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("All")
                  setSelectedLevel("All Levels")
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
              >
                Clear Filters
              </button>
            </div>
          )}

          {/* Load More */}
          {filteredExams.length > 0 && filteredExams.length < allExams.length && (
            <div className="text-center mt-12">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition">
                Load More Exams
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-4">
            Need Help with Exam Preparation?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Get expert guidance, study materials, and mock tests to crack your dream exam.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition">
              Start Preparation
            </button>
            <button className="border border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-medium transition">
              Download Syllabus
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
