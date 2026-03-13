"use client"

import { useState } from "react"
import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import { 
  MapPin, 
  Star, 
  GraduationCap, 
  Users, 
  BookOpen, 
  Award,
  Phone,
  Mail,
  Globe,
  Clock,
  Calendar,
  DollarSign,
  Building,
  Trophy,
  Heart,
  Share2,
  ArrowLeft
} from "lucide-react"

// Type definitions
type College = {
  id: number
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
  website: string
  email: string
  phone: string
  address: string
  accreditation: string
  ranking: string
  overview: string
  coursesOffered: Course[]
  feesStructure: FeesStructure
  admissionProcess: string[]
  cutoff: CutoffData
  placements: PlacementData
  infrastructure: InfrastructureData
  facilities: string[]
  images: string[]
  reviews: Review[]
}

type Course = {
  program: string
  duration: string
  specializations: string[]
  fees: string
}

type FeesStructure = {
  tuition: string
  hostel: string
  mess: string
  other: string
  total: string
}

type CutoffData = {
  jeeAdvanced: {
    general: string
    obc: string
    sc: string
    st: string
  }
  gate: {
    general: string
    obc: string
    sc: string
    st: string
  }
}

type PlacementData = {
  highestPackage: string
  averagePackage: string
  topRecruiters: string[]
  placementRate: string
}

type InfrastructureData = {
  campus: string
  laboratories: string
  library: string
  sports: string
  hostels: string
  wifi: string
  medical: string
}

type Review = {
  name: string
  rating: number
  comment: string
  year: string
}

type CollegeData = {
  [key: string]: College
}

const collegeData: CollegeData = {
  "iit-delhi": {
    id: 1,
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
    description: "Indian Institute of Technology Delhi is one of the premier engineering institutes in India, known for its excellence in technical education and research.",
    website: "https://www.iitd.ac.in",
    email: "admissions@iitd.ac.in",
    phone: "+91-11-2659-7135",
    address: "Hauz Khas, New Delhi - 110016",
    accreditation: "A++ by NAAC",
    ranking: "#1 in Engineering (NIRF 2023)",
    overview: "IIT Delhi is a public technical university located in Hauz Khas, Delhi. Established in 1961, it has grown to become one of the most prestigious engineering institutions in India and globally. The institute offers undergraduate, postgraduate, and doctoral programs in various engineering disciplines, sciences, and management.",
    coursesOffered: [
      {
        program: "B.Tech",
        duration: "4 Years",
        specializations: ["Computer Science", "Electrical Engineering", "Mechanical Engineering", "Civil Engineering", "Chemical Engineering", "Aerospace Engineering"],
        fees: "₹2.2L/year"
      },
      {
        program: "M.Tech",
        duration: "2 Years",
        specializations: ["Computer Science", "Artificial Intelligence", "Machine Learning", "Data Science", "Robotics"],
        fees: "₹3.5L/year"
      },
      {
        program: "PhD",
        duration: "5 Years",
        specializations: ["All Engineering Disciplines", "Pure Sciences", "Humanities"],
        fees: "₹1.8L/year"
      }
    ],
    feesStructure: {
      tuition: "₹2.2L/year",
      hostel: "₹50K/year",
      mess: "₹60K/year",
      other: "₹20K/year",
      total: "₹3.5L/year"
    },
    admissionProcess: [
      "JEE Advanced qualification required for B.Tech",
      "GATE qualification required for M.Tech",
      "NET/GATE qualification for PhD programs",
      "Application process starts in April",
      "Counseling conducted by JoSAA",
      "Document verification required"
    ],
    cutoff: {
      jeeAdvanced: {
        general: "2500-3000",
        obc: "4000-5000",
        sc: "8000-10000",
        st: "12000-15000"
      },
      gate: {
        general: "650+",
        obc: "600+",
        sc: "550+",
        st: "500+"
      }
    },
    placements: {
      highestPackage: "₹1.5 Crore/year",
      averagePackage: "₹25 LPA",
      topRecruiters: ["Google", "Microsoft", "Amazon", "Apple", "Facebook", "Goldman Sachs", "McKinsey"],
      placementRate: "95%"
    },
    infrastructure: {
      campus: "325 Acres",
      laboratories: "50+ Advanced Labs",
      library: "Central Library with 5L+ books",
      sports: "Olympic-size sports complex",
      hostels: "18 Hostels with 5000+ capacity",
      wifi: "24x7 High-speed WiFi",
      medical: "On-campus hospital"
    },
    facilities: [
      "Central Library with digital resources",
      "Advanced Research Laboratories",
      "Sports Complex with indoor/outdoor facilities",
      "Modern Hostels with WiFi",
      "On-campus Hospital and Healthcare",
      "Computer Centers with latest systems",
      "Auditorium and Conference Halls",
      "Cafeteria and Food Courts",
      "Banking and ATM services",
      "Transportation services"
    ],
    images: [
      "https://images.unsplash.com/photo-1590362891991-f776e747a588",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
      "https://images.unsplash.com/photo-1562774053-701939374585"
    ],
    reviews: [
      {
        name: "Rahul Sharma",
        rating: 5,
        comment: "Excellent faculty and research opportunities. The campus environment is very conducive to learning.",
        year: "2022 Batch"
      },
      {
        name: "Priya Patel",
        rating: 4,
        comment: "Great placement opportunities and industry exposure. The curriculum is well-structured.",
        year: "2021 Batch"
      },
      {
        name: "Arjun Kumar",
        rating: 5,
        comment: "World-class infrastructure and amazing peer group. Best decision of my life!",
        year: "2023 Batch"
      }
    ]
  },
  "iit-bombay": {
    id: 2,
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
    description: "Indian Institute of Technology Bombay is a public technical university located in Mumbai, known for its excellence in engineering education and research.",
    website: "https://www.iitb.ac.in",
    email: "admissions@iitb.ac.in",
    phone: "+91-22-2576-7111",
    address: "Powai, Mumbai - 400076",
    accreditation: "A++ by NAAC",
    ranking: "#2 in Engineering (NIRF 2023)",
    overview: "IIT Bombay is a public technical university located in Powai, Mumbai. Established in 1958, it is the second-oldest IIT and has grown to become one of the most prestigious engineering institutions in India. The institute offers undergraduate, postgraduate, and doctoral programs in various engineering disciplines, sciences, and management.",
    coursesOffered: [
      {
        program: "B.Tech",
        duration: "4 Years",
        specializations: ["Computer Science", "Electrical Engineering", "Mechanical Engineering", "Civil Engineering", "Chemical Engineering", "Aerospace Engineering"],
        fees: "₹2.3L/year"
      },
      {
        program: "M.Tech",
        duration: "2 Years",
        specializations: ["Computer Science", "Artificial Intelligence", "Machine Learning", "Data Science", "Robotics"],
        fees: "₹3.6L/year"
      },
      {
        program: "PhD",
        duration: "5 Years",
        specializations: ["All Engineering Disciplines", "Pure Sciences", "Humanities"],
        fees: "₹1.9L/year"
      }
    ],
    feesStructure: {
      tuition: "₹2.3L/year",
      hostel: "₹55K/year",
      mess: "₹65K/year",
      other: "₹22K/year",
      total: "₹3.72L/year"
    },
    admissionProcess: [
      "JEE Advanced qualification required for B.Tech",
      "GATE qualification required for M.Tech",
      "NET/GATE qualification for PhD programs",
      "Application process starts in April",
      "Counseling conducted by JoSAA",
      "Document verification required"
    ],
    cutoff: {
      jeeAdvanced: {
        general: "2000-2500",
        obc: "3500-4500",
        sc: "7000-9000",
        st: "10000-12000"
      },
      gate: {
        general: "700+",
        obc: "650+",
        sc: "600+",
        st: "550+"
      }
    },
    placements: {
      highestPackage: "₹2 Crore/year",
      averagePackage: "₹28 LPA",
      topRecruiters: ["Google", "Microsoft", "Amazon", "Apple", "Facebook", "Goldman Sachs", "McKinsey"],
      placementRate: "96%"
    },
    infrastructure: {
      campus: "550 Acres",
      laboratories: "60+ Advanced Labs",
      library: "Central Library with 6L+ books",
      sports: "World-class sports facilities",
      hostels: "20 Hostels with 6000+ capacity",
      wifi: "24x7 High-speed WiFi",
      medical: "On-campus hospital"
    },
    facilities: [
      "Central Library with digital resources",
      "Advanced Research Laboratories",
      "Sports Complex with indoor/outdoor facilities",
      "Modern Hostels with WiFi",
      "On-campus Hospital and Healthcare",
      "Computer Centers with latest systems",
      "Auditorium and Conference Halls",
      "Cafeteria and Food Courts",
      "Banking and ATM services",
      "Transportation services"
    ],
    images: [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
      "https://images.unsplash.com/photo-1590362891991-f776e747a588",
      "https://images.unsplash.com/photo-1562774053-701939374585"
    ],
    reviews: [
      {
        name: "Amit Singh",
        rating: 5,
        comment: "Amazing campus life and excellent faculty. The research opportunities are unparalleled.",
        year: "2022 Batch"
      },
      {
        name: "Neha Gupta",
        rating: 5,
        comment: "Best placement opportunities and great industry connections. The alumni network is very strong.",
        year: "2021 Batch"
      }
    ]
  }
}

export default function CollegeDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("overview")
  const [isSaved, setIsSaved] = useState(false)

  const college: College = collegeData[params.slug as string] || collegeData["iit-delhi"]

  const tabs = [
    { id: "overview", label: "Overview", icon: Building },
    { id: "courses", label: "Courses Offered", icon: BookOpen },
    { id: "fees", label: "Fees Structure", icon: DollarSign },
    { id: "admission", label: "Admission Process", icon: GraduationCap },
    { id: "cutoff", label: "Cutoff", icon: Trophy },
    { id: "placements", label: "Placements", icon: Award },
    { id: "infrastructure", label: "Infrastructure", icon: Building },
    { id: "facilities", label: "Facilities", icon: Users },
    { id: "gallery", label: "Gallery", icon: Globe },
    { id: "reviews", label: "Reviews", icon: Star },
    { id: "apply", label: "Apply Now", icon: Calendar }
  ]

  const renderContent = () => {
    switch(activeTab) {
      case "overview":
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">About {college.name}</h3>
              <p className="text-gray-600 leading-relaxed">{college.overview}</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-4">Quick Facts</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Established</span>
                    <span className="font-medium">{college.established}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Students</span>
                    <span className="font-medium">{college.students}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Accreditation</span>
                    <span className="font-medium">{college.accreditation}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Ranking</span>
                    <span className="font-medium">{college.ranking}</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-4">Contact Information</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-gray-500" />
                    <span className="text-gray-600">{college.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone size={16} className="text-gray-500" />
                    <span className="text-gray-600">{college.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail size={16} className="text-gray-500" />
                    <span className="text-gray-600">{college.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe size={16} className="text-gray-500" />
                    <span className="text-gray-600">{college.website}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
        
      case "courses":
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Courses Offered</h3>
            <div className="space-y-4">
              {college.coursesOffered.map((course: Course, index: number) => (
                <div key={index} className="border rounded-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-lg font-semibold">{course.program}</h4>
                      <p className="text-gray-600">Duration: {course.duration}</p>
                    </div>
                    <span className="text-orange-600 font-semibold">{course.fees}</span>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2">Specializations:</h5>
                    <div className="flex flex-wrap gap-2">
                      {course.specializations.map((spec: string, idx: number) => (
                        <span key={idx} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
        
      case "fees":
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Fees Structure</h3>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Tuition Fees</span>
                  <span className="font-medium">{college.feesStructure.tuition}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Hostel Fees</span>
                  <span className="font-medium">{college.feesStructure.hostel}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Mess Fees</span>
                  <span className="font-medium">{college.feesStructure.mess}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Other Expenses</span>
                  <span className="font-medium">{college.feesStructure.other}</span>
                </div>
                <div className="border-t pt-4 flex justify-between">
                  <span className="font-semibold">Total Annual Fees</span>
                  <span className="font-bold text-orange-600 text-lg">{college.feesStructure.total}</span>
                </div>
              </div>
            </div>
          </div>
        )
        
      case "admission":
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Admission Process</h3>
            <div className="space-y-4">
              {college.admissionProcess.map((step: string, index: number) => (
                <div key={index} className="flex gap-4">
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-semibold">
                    {index + 1}
                  </div>
                  <p className="text-gray-600">{step}</p>
                </div>
              ))}
            </div>
          </div>
        )
        
      case "cutoff":
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Cutoff Ranks</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3">JEE Advanced Ranks</h4>
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <p className="text-gray-600 text-sm">General</p>
                      <p className="font-semibold">{college.cutoff.jeeAdvanced.general}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">OBC</p>
                      <p className="font-semibold">{college.cutoff.jeeAdvanced.obc}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">SC</p>
                      <p className="font-semibold">{college.cutoff.jeeAdvanced.sc}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">ST</p>
                      <p className="font-semibold">{college.cutoff.jeeAdvanced.st}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3">GATE Scores</h4>
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <p className="text-gray-600 text-sm">General</p>
                      <p className="font-semibold">{college.cutoff.gate.general}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">OBC</p>
                      <p className="font-semibold">{college.cutoff.gate.obc}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">SC</p>
                      <p className="font-semibold">{college.cutoff.gate.sc}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">ST</p>
                      <p className="font-semibold">{college.cutoff.gate.st}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
        
      case "placements":
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Placement Statistics</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-green-50 p-6 rounded-lg text-center">
                <p className="text-gray-600 mb-2">Highest Package</p>
                <p className="text-2xl font-bold text-green-600">{college.placements.highestPackage}</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <p className="text-gray-600 mb-2">Average Package</p>
                <p className="text-2xl font-bold text-blue-600">{college.placements.averagePackage}</p>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg text-center">
                <p className="text-gray-600 mb-2">Placement Rate</p>
                <p className="text-2xl font-bold text-orange-600">{college.placements.placementRate}</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Top Recruiters</h4>
              <div className="flex flex-wrap gap-3">
                {college.placements.topRecruiters.map((recruiter: string, index: number) => (
                  <span key={index} className="bg-gray-100 px-4 py-2 rounded-lg font-medium">
                    {recruiter}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )
        
      case "infrastructure":
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Infrastructure</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(college.infrastructure).map(([key, value]: [string, string]) => (
                <div key={key} className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold capitalize mb-2">{key.replace(/([A-Z])/g, ' $1').trim()}</h4>
                  <p className="text-gray-600">{value as string}</p>
                </div>
              ))}
            </div>
          </div>
        )
        
      case "facilities":
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Campus Facilities</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {college.facilities.map((facility: string, index: number) => (
                <div key={index} className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-700">{facility}</span>
                </div>
              ))}
            </div>
          </div>
        )
        
      case "gallery":
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Campus Gallery</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {college.images.map((image: string, index: number) => (
                <div key={index} className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src={image}
                    alt={`${college.name} - Image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        )
        
      case "reviews":
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Student Reviews</h3>
            <div className="space-y-4">
              {college.reviews.map((review: Review, index: number) => (
                <div key={index} className="border rounded-lg p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-semibold">{review.name}</h4>
                      <p className="text-sm text-gray-600">{review.year}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={i < review.rating ? "text-yellow-500 fill-current" : "text-gray-300"}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        )
        
      case "apply":
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Apply Now</h3>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
              <h4 className="font-semibold mb-4">How to Apply</h4>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-semibold">1</div>
                  <div>
                    <p className="font-medium">Check Eligibility</p>
                    <p className="text-gray-600 text-sm">Ensure you meet the eligibility criteria for your desired program</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-semibold">2</div>
                  <div>
                    <p className="font-medium">Prepare Documents</p>
                    <p className="text-gray-600 text-sm">Gather all required documents including marksheets and certificates</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-semibold">3</div>
                  <div>
                    <p className="font-medium">Fill Application</p>
                    <p className="text-gray-600 text-sm">Complete the online application form with accurate information</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-semibold">4</div>
                  <div>
                    <p className="font-medium">Submit & Pay</p>
                    <p className="text-gray-600 text-sm">Submit your application and pay the required fees</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex gap-4">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition">
                  Start Application
                </button>
                <button className="border border-orange-500 text-orange-500 hover:bg-orange-50 px-6 py-3 rounded-lg font-medium transition">
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        )
        
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <Image
          src={college.image}
          alt={college.name}
          fill
          className="object-cover scale-110 animate-pulse-slow"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
          <div className="text-white animate-fade-in-up">
            <button 
              onClick={() => router.back()}
              className="flex items-center gap-2 mb-6 hover:text-orange-300 transition-all duration-300 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/20"
            >
              <ArrowLeft size={18} />
              Back to Colleges
            </button>
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-5xl font-bold mb-2 drop-shadow-lg">{college.name}</h1>
                <div className="flex items-center gap-4 text-lg">
                  <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                    <MapPin size={16} />
                    {college.city}, {college.state}
                  </div>
                  <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                    <Star size={16} className="text-yellow-400 fill-current" />
                    {college.rating}
                  </div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-2xl">
                <p className="text-sm text-orange-200 font-medium">{college.type}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Action Bar */}
      <section className="bg-white/95 backdrop-blur-md border-b border-gray-200 sticky top-0 z-20 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-8">
              <div className="text-center group cursor-pointer hover:scale-105 transition-transform">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-500 rounded-xl flex items-center justify-center mb-2 group-hover:from-orange-500 group-hover:to-orange-600 transition-all">
                  <DollarSign size={20} className="text-white" />
                </div>
                <p className="text-xs text-gray-600 font-medium">Annual Fees</p>
                <p className="text-lg font-bold text-orange-600">{college.fees}</p>
              </div>
              <div className="text-center group cursor-pointer hover:scale-105 transition-transform">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-xl flex items-center justify-center mb-2 group-hover:from-blue-500 group-hover:to-blue-600 transition-all">
                  <BookOpen size={20} className="text-white" />
                </div>
                <p className="text-xs text-gray-600 font-medium">Courses</p>
                <p className="text-lg font-bold text-blue-600">{college.courses}</p>
              </div>
              <div className="text-center group cursor-pointer hover:scale-105 transition-transform">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-500 rounded-xl flex items-center justify-center mb-2 group-hover:from-green-500 group-hover:to-green-600 transition-all">
                  <Calendar size={20} className="text-white" />
                </div>
                <p className="text-xs text-gray-600 font-medium">Established</p>
                <p className="text-lg font-bold text-green-600">{college.established}</p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <button 
                onClick={() => setIsSaved(!isSaved)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
                  isSaved 
                    ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/25" 
                    : "bg-white border-2 border-gray-300 text-gray-700 hover:border-orange-400 hover:shadow-lg"
                }`}
              >
                <Heart size={18} className={isSaved ? "fill-current animate-pulse" : ""} />
                {isSaved ? "Saved" : "Save"}
              </button>
              <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white border-2 border-gray-300 text-gray-700 hover:border-blue-400 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <Share2 size={18} />
                Share
              </button>
              <button 
                onClick={() => setActiveTab("apply")}
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg shadow-orange-500/25"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Content Section */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex gap-10">
          {/* Enhanced Sidebar Navigation */}
          <div className="w-72 flex-shrink-0">
            <nav className="bg-white rounded-2xl shadow-xl p-6 sticky top-28 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                Quick Navigation
              </h3>
              <div className="space-y-2">
                {tabs.map((tab) => {
                  const Icon = tab.icon
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center gap-4 px-5 py-4 rounded-xl text-left transition-all duration-300 group ${
                        activeTab === tab.id
                          ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/25 transform scale-105"
                          : "text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100 hover:border-orange-200 border-2 border-transparent"
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                        activeTab === tab.id 
                          ? "bg-white/20" 
                          : "bg-gray-100 group-hover:bg-orange-100"
                      }`}>
                        <Icon size={18} className={activeTab === tab.id ? "text-white" : "text-gray-600 group-hover:text-orange-600"} />
                      </div>
                      <span className="font-medium">{tab.label}</span>
                      {activeTab === tab.id && (
                        <div className="ml-auto w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      )}
                    </button>
                  )
                })}
              </div>
            </nav>
          </div>

          {/* Enhanced Main Content */}
          <div className="flex-1">
            <div className="bg-white rounded-2xl shadow-xl p-10 border border-gray-100">
              {renderContent()}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
