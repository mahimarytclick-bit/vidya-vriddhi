import Image from "next/image";
import Hero from "@/app/components/home/hero";
import TopColleges from "@/app/components/home/topColleges";
import Courses from "@/app/components/home/courses";
import Exams from "./components/home/exam";
import Findcollages from "./components/home/findcollages";
import StudyAbroad from "./components/home/studyaboard";
import Blog from "./components/home/blog";
import Contact from "./components/home/contact";
import Faq from "./components/home/faq"
export default function Home() {
  return (
    <div >
     <Hero />
     <TopColleges />
     <Courses />
     <Exams />
     <Findcollages />
     <StudyAbroad />
     <Faq />
     <Blog />
     <Contact />
    </div>
  );
}
