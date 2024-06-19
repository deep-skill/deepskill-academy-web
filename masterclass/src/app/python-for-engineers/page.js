
import Image from "next/image";
import Body from "@/components/Body";
import NavBar from "@/components/Navbar";
import Mentors from "@/components/Mentors";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import Programs from "@/components/Programs";

export default function CourseDetailPage() {
  return (
    <div className="flex flex-col">
      <NavBar />
      <main className="flex-grow">
        <Body />
        <Mentors />
        <Programs />
        <Testimonials />
      </main>
      <Footer />
    </div>
    
  );
}



