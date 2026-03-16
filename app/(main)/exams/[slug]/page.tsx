"use client"

import { useState } from "react"
import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import { 
  MapPin, 
  Star, 
  Calendar, 
  Clock,
  Users, 
  BookOpen, 
  Award,
  Phone,
  Mail,
  Globe,
  DollarSign,
  Building,
  Trophy,
  Heart,
  Share2,
  ArrowLeft,
  FileText,
  Target
} from "lucide-react"

// Type definitions
interface Exam {
  id: number
  slug: string
  name: string
  fullName: string
  category: string
  level: string
  frequency: string
  duration: string
  mode: string
  image: string
  registrationDates: string
  examDates: string
  eligibility: string
  colleges: string
  description: string
  website: string
  email: string
  phone: string
  address: string
  conductingBody: string
  officialWebsite: string
  applicationFee: string
  examPattern: ExamPattern
  syllabus: string[]
  preparationTips: string[]
  importantDates: ImportantDate[]
  results: ResultInfo
  previousYearCutoffs: CutoffData
  contactInfo: ContactInfo
  images: string[]
  reviews: Review[]
}

interface ExamPattern {
  totalMarks: string
  totalQuestions: string
  duration: string
  sections: Section[]
  markingScheme: string
  language: string[]
}

interface Section {
  name: string
  questions: string
  marks: string
}

interface ImportantDate {
  event: string
  date: string
  description: string
}

interface ResultInfo {
  declarationDate: string
  mode: string
  website: string
  validity: string
}

interface CutoffData {
  general: string
  obc: string
  sc: string
  st: string
  pwd: string
}

interface ContactInfo {
  helpline: string
  email: string
  address: string
  website: string
}

interface Review {
  name: string
  rating: number
  comment: string
  year: string
}

interface ExamData {
  [key: string]: Exam
}

const examData: ExamData = {
  "jee-main": {
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
    description: "JEE Main is the entrance exam for engineering admissions in NITs, IIITs and other centrally funded technical institutions.",
    website: "https://jeemain.nta.nic.in",
    email: "jeemain@nta.nic.in",
    phone: "+91-0120-2461250",
    address: "NTA Office, New Delhi - 110092",
    conductingBody: "National Testing Agency (NTA)",
    officialWebsite: "https://www.nta.nic.in",
    applicationFee: "₹650 (General), ₹325 (SC/ST/PWD)",
    examPattern: {
      totalMarks: "300",
      totalQuestions: "75",
      duration: "3 hours",
      sections: [
        { name: "Physics", questions: "25", marks: "100" },
        { name: "Chemistry", questions: "25", marks: "100" },
        { name: "Mathematics", questions: "25", marks: "100" }
      ],
      markingScheme: "+4 for correct, -1 for wrong",
      language: ["English", "Hindi", "Gujarati"]
    },
    syllabus: [
      "Physics: Mechanics, Thermodynamics, Optics, Modern Physics",
      "Chemistry: Physical, Organic, Inorganic Chemistry",
      "Mathematics: Algebra, Calculus, Coordinate Geometry, Trigonometry"
    ],
    preparationTips: [
      "Focus on NCERT books for basics",
      "Practice previous year papers",
      "Take mock tests regularly",
      "Time management is crucial",
      "Revise formulas daily"
    ],
    importantDates: [
      { event: "Registration Start", date: "November 15, 2024", description: "Online application begins" },
      { event: "Registration End", date: "December 15, 2024", description: "Last date to apply" },
      { event: "Exam Date (Session 1)", date: "January 15, 2025", description: "First session exam" },
      { event: "Result Declaration", date: "February 15, 2025", description: "Session 1 results" }
    ],
    results: {
      declarationDate: "Within 3 weeks of exam",
      mode: "Online",
      website: "https://jeemain.nta.nic.in",
      validity: "1 year"
    },
    previousYearCutoffs: {
      general: "90-95 percentile",
      obc: "85-90 percentile",
      sc: "75-80 percentile",
      st: "70-75 percentile",
      pwd: "65-70 percentile"
    },
    contactInfo: {
      helpline: "+91-0120-2461250",
      email: "jeemain@nta.nic.in",
      address: "NTA Office, New Delhi - 110092",
      website: "https://jeemain.nta.nic.in"
    },
    images: [
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
      "https://images.unsplash.com/photo-1562774053-701939374585"
    ],
    reviews: [
      {
        name: "Rahul Sharma",
        rating: 5,
        comment: "Well-organized exam with fair evaluation. Practice is key to success.",
        year: "2024"
      },
      {
        name: "Priya Patel",
        rating: 4,
        comment: "Good exam pattern but time management is challenging.",
        year: "2023"
      }
    ]
  },
  "jee-advanced": {
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
    description: "JEE Advanced is the entrance exam for admission to IITs and other premier engineering institutions.",
    website: "https://jeeadv.ac.in",
    email: "jee@iitbombay.ac.in",
    phone: "+91-022-2576-4063",
    address: "IIT Bombay, Powai, Mumbai - 400076",
    conductingBody: "IIT Bombay",
    officialWebsite: "https://www.iitbombay.ac.in",
    applicationFee: "₹2800 (General), ₹1400 (SC/ST/PWD)",
    examPattern: {
      totalMarks: "360",
      totalQuestions: "54",
      duration: "3 hours",
      sections: [
        { name: "Physics", questions: "18", marks: "120" },
        { name: "Chemistry", questions: "18", marks: "120" },
        { name: "Mathematics", questions: "18", marks: "120" }
      ],
      markingScheme: "+4 for correct, -1 for wrong",
      language: ["English", "Hindi"]
    },
    syllabus: [
      "Physics: Advanced concepts in Mechanics, Electromagnetism, Modern Physics",
      "Chemistry: Advanced Organic, Physical, Inorganic Chemistry",
      "Mathematics: Advanced Calculus, Algebra, Geometry"
    ],
    preparationTips: [
      "Strong conceptual understanding required",
      "Practice advanced level problems",
      "Focus on application of concepts",
      "Time management is critical",
      "Regular revision of concepts"
    ],
    importantDates: [
      { event: "Registration Start", date: "May 1, 2025", description: "Online application begins" },
      { event: "Registration End", date: "May 15, 2025", description: "Last date to apply" },
      { event: "Exam Date", date: "June 15, 2025", description: "JEE Advanced exam" },
      { event: "Result Declaration", date: "July 15, 2025", description: "Results announced" }
    ],
    results: {
      declarationDate: "Within 1 month of exam",
      mode: "Online",
      website: "https://jeeadv.ac.in",
      validity: "1 year"
    },
    previousYearCutoffs: {
      general: "120-150 marks",
      obc: "100-120 marks",
      sc: "80-100 marks",
      st: "70-80 marks",
      pwd: "60-70 marks"
    },
    contactInfo: {
      helpline: "+91-022-2576-4063",
      email: "jee@iitbombay.ac.in",
      address: "IIT Bombay, Powai, Mumbai - 400076",
      website: "https://jeeadv.ac.in"
    },
    images: [
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914"
    ],
    reviews: [
      {
        name: "Amit Singh",
        rating: 5,
        comment: "Most challenging engineering exam. Requires deep understanding.",
        year: "2024"
      }
    ]
  }
}

export default function ExamDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<string>("overview")
  const [isSaved, setIsSaved] = useState<boolean>(false)

  const exam: Exam = examData[params.slug as string] || examData["jee-main"]

  const tabs = [
    { id: "overview", label: "Overview", icon: FileText },
    { id: "pattern", label: "Exam Pattern", icon: Target },
    { id: "syllabus", label: "Syllabus", icon: BookOpen },
    { id: "dates", label: "Important Dates", icon: Calendar },
    { id: "preparation", label: "Preparation", icon: Award },
    { id: "cutoff", label: "Cutoff", icon: Trophy },
    { id: "results", label: "Results", icon: Star },
    { id: "contact", label: "Contact", icon: Phone },
    { id: "reviews", label: "Reviews", icon: Star },
    { id: "apply", label: "Apply Now", icon: Calendar }
  ]

  const renderContent = () => {
    switch(activeTab) {
      case "overview":
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">About {exam.name}</h3>
              <p className="text-gray-600 leading-relaxed">{exam.description}</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-4">Quick Facts</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Conducting Body</span>
                    <span className="font-medium">{exam.conductingBody}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Level</span>
                    <span className="font-medium">{exam.level}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Frequency</span>
                    <span className="font-medium">{exam.frequency}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Mode</span>
                    <span className="font-medium">{exam.mode}</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-4">Exam Details</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration</span>
                    <span className="font-medium">{exam.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Application Fee</span>
                    <span className="font-medium">{exam.applicationFee}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Eligibility</span>
                    <span className="font-medium">{exam.eligibility}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Colleges</span>
                    <span className="font-medium">{exam.colleges}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
        
      case "pattern":
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Exam Pattern</h3>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-medium mb-2">Total Marks</h4>
                  <p className="text-2xl font-bold text-blue-600">{exam.examPattern.totalMarks}</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Total Questions</h4>
                  <p className="text-2xl font-bold text-green-600">{exam.examPattern.totalQuestions}</p>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Sections</h4>
                <div className="space-y-3">
                  {exam.examPattern.sections.map((section: Section, index: number) => (
                    <div key={index} className="flex justify-between items-center bg-white p-4 rounded-lg">
                      <span className="font-medium">{section.name}</span>
                      <div className="text-right">
                        <span className="text-sm text-gray-600">{section.questions} questions</span>
                        <span className="ml-4 font-semibold">{section.marks} marks</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2">Marking Scheme</h4>
                  <p className="text-gray-600">{exam.examPattern.markingScheme}</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    {exam.examPattern.language.map((lang: string, index: number) => (
                      <span key={index} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
        
      case "syllabus":
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Syllabus</h3>
            <div className="space-y-4">
              {exam.syllabus.map((item: string, index: number) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        )
        
      case "dates":
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Important Dates</h3>
            <div className="space-y-4">
              {exam.importantDates.map((date: ImportantDate, index: number) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold">{date.event}</h4>
                      <p className="text-gray-600 text-sm mt-1">{date.description}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-blue-600">{date.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
        
      case "preparation":
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Preparation Tips</h3>
            <div className="space-y-4">
              {exam.preparationTips.map((tip: string, index: number) => (
                <div key={index} className="flex gap-4 bg-gray-50 p-6 rounded-lg">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-gray-700">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        )
        
      case "cutoff":
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Previous Year Cutoffs</h3>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <div>
                  <p className="text-gray-600 text-sm">General</p>
                  <p className="font-semibold">{exam.previousYearCutoffs.general}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">OBC</p>
                  <p className="font-semibold">{exam.previousYearCutoffs.obc}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">SC</p>
                  <p className="font-semibold">{exam.previousYearCutoffs.sc}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">ST</p>
                  <p className="font-semibold">{exam.previousYearCutoffs.st}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">PWD</p>
                  <p className="font-semibold">{exam.previousYearCutoffs.pwd}</p>
                </div>
              </div>
            </div>
          </div>
        )
        
      case "results":
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Result Information</h3>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Declaration Date</span>
                  <span className="font-medium">{exam.results.declarationDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Mode</span>
                  <span className="font-medium">{exam.results.mode}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Website</span>
                  <span className="font-medium">{exam.results.website}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Validity</span>
                  <span className="font-medium">{exam.results.validity}</span>
                </div>
              </div>
            </div>
          </div>
        )
        
      case "contact":
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Contact Information</h3>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone size={20} className="text-gray-500" />
                  <span className="text-gray-700">{exam.contactInfo.helpline}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={20} className="text-gray-500" />
                  <span className="text-gray-700">{exam.contactInfo.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={20} className="text-gray-500" />
                  <span className="text-gray-700">{exam.contactInfo.address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe size={20} className="text-gray-500" />
                  <span className="text-gray-700">{exam.contactInfo.website}</span>
                </div>
              </div>
            </div>
          </div>
        )
        
      case "reviews":
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Student Reviews</h3>
            <div className="space-y-4">
              {exam.reviews.map((review: Review, index: number) => (
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
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h4 className="font-semibold mb-4">How to Apply</h4>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold">1</div>
                  <div>
                    <p className="font-medium">Check Eligibility</p>
                    <p className="text-gray-600 text-sm">Ensure you meet the eligibility criteria</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold">2</div>
                  <div>
                    <p className="font-medium">Fill Application</p>
                    <p className="text-gray-600 text-sm">Complete the online application form</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold">3</div>
                  <div>
                    <p className="font-medium">Pay Fee</p>
                    <p className="text-gray-600 text-sm">Pay the application fee online</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold">4</div>
                  <div>
                    <p className="font-medium">Submit Form</p>
                    <p className="text-gray-600 text-sm">Submit and download confirmation</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex gap-4">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition">
                  Start Application
                </button>
                <button className="border border-blue-500 text-blue-500 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition">
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
          src={exam.image}
          alt={exam.name}
          fill
          className="object-cover scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
          <div className="text-white">
            <button 
              onClick={() => router.back()}
              className="flex items-center gap-2 mb-6 hover:text-blue-300 transition-all duration-300 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/20"
            >
              <ArrowLeft size={18} />
              Back to Exams
            </button>
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-5xl font-bold mb-2 drop-shadow-lg">{exam.name}</h1>
                <p className="text-xl text-blue-200 mb-4">{exam.fullName}</p>
                <div className="flex items-center gap-4 text-lg">
                  <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                    <Target size={16} />
                    {exam.category}
                  </div>
                  <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                    <Calendar size={16} />
                    {exam.frequency}
                  </div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-2xl">
                <p className="text-sm text-blue-200 font-medium">{exam.level}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Action Bar */}
      <section className="bg-white/95 backdrop-blur-md border-b border-gray-200 sticky top-0 z-20 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-8">
              <div className="text-center group cursor-pointer hover:scale-105 transition-transform">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-xl flex items-center justify-center mb-2 group-hover:from-blue-500 group-hover:to-blue-600 transition-all">
                  <Clock size={20} className="text-white" />
                </div>
                <p className="text-xs text-gray-600 font-medium">Duration</p>
                <p className="text-lg font-bold text-blue-600">{exam.duration}</p>
              </div>
              <div className="text-center group cursor-pointer hover:scale-105 transition-transform">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-500 rounded-xl flex items-center justify-center mb-2 group-hover:from-green-500 group-hover:to-green-600 transition-all">
                  <Calendar size={20} className="text-white" />
                </div>
                <p className="text-xs text-gray-600 font-medium">Exam Dates</p>
                <p className="text-lg font-bold text-green-600">{exam.examDates}</p>
              </div>
              <div className="text-center group cursor-pointer hover:scale-105 transition-transform">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-500 rounded-xl flex items-center justify-center mb-2 group-hover:from-purple-500 group-hover:to-purple-600 transition-all">
                  <DollarSign size={20} className="text-white" />
                </div>
                <p className="text-xs text-gray-600 font-medium">Application Fee</p>
                <p className="text-lg font-bold text-purple-600">{exam.applicationFee}</p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <button 
                onClick={() => setIsSaved(!isSaved)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
                  isSaved 
                    ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/25" 
                    : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
                }`}
              >
                <Heart size={18} className={isSaved ? "fill-current" : ""} />
                {isSaved ? "Saved" : "Save"}
              </button>
              <button className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-all duration-300 transform hover:scale-105">
                <Share2 size={18} />
                Share
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="lg:w-64">
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
                <h3 className="font-semibold mb-4">Quick Links</h3>
                <div className="space-y-2">
                  {tabs.map((tab) => {
                    const Icon = tab.icon
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                          activeTab === tab.id
                            ? "bg-blue-50 text-blue-600 font-medium"
                            : "text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        <Icon size={18} />
                        {tab.label}
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              <div className="bg-white rounded-xl shadow-lg p-8">
                {renderContent()}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}