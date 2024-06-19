
import Image from "next/image";
import Body from "@/components/Body";
import NavBar from "@/components/Navbar";
import Mentors from "@/components/Mentors";
import AboutUs from "@/components/AboutUs";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function CourseDetailPage() {
  return (
    <div className="flex flex-col">
      <NavBar />
      <main className="flex-grow">
        <Body />
        <Mentors />
        <AboutUs />
        <Testimonials />
      </main>
      <Footer />
    </div>
    
  );
}



