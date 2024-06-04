import Image from "next/image";
import Body from "@/components/Body";
import NavBar from "@/components/Navbar";
import Mentors from "@/components/Mentors";
import AboutUs from "@/components/AboutUs";
import CourseCard from "@/components/CourseCard";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-0">
      <NavBar></NavBar>
      <Body></Body>
      <Mentors></Mentors>
      <AboutUs></AboutUs>
      <CourseCard></CourseCard>
      <Testimonials></Testimonials>
    </main>
    
  );
}
