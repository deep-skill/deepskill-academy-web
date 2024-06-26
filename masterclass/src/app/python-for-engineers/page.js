import Image from "next/image";
import NavBar from "@/components/Navbar";
import Mentors from "@/components/Mentors";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import Programs from "@/components/Programs";
import BodyPythonEngineers from "@/components/BodyPythonEngineers";
import '/styles/globals.css'
import MasterclassContent from "@/components/MasterClassContent";

export default function CourseDetailPage() {
  return (
    <div className="flex flex-col">
      <NavBar />
      <main className="flex-grow">
        <BodyPythonEngineers />
        <Mentors />
        <Programs />
        <MasterclassContent />
      </main>
      <Footer />
    </div>
  );
}




