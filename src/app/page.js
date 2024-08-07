import Image from "next/image";
import Body from "@/components/Body";
import NavBar from "@/components/Navbar";
import Mentors from "@/components/Mentors";
import AboutUs from "@/components/AboutUs";
import CourseCard from "@/components/CourseCard";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import '/styles/globals.css'

export default function Home() {
  return (
    <div className="flex flex-col">
      <NavBar />
      <main className="flex-grow">
        <Body />
        <Mentors />
        <AboutUs />
        <CourseCard />
        <Testimonials />
      </main>
      <Footer />
    </div>
    
  );
}
