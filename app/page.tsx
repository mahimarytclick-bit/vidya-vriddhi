import Image from "next/image";
import Hero from "@/app/components/home/hero";
import TopColleges from "@/app/components/home/topColleges";
import Courses from "@/app/components/home/courses";
export default function Home() {
  return (
    <div >
     <Hero />
     <TopColleges />
     <Courses />
    </div>
  );
}
