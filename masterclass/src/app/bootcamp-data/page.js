import Image from "next/image";
import NavBar from "@/components/Navbar";
import Mentors from "@/components/bootcamp-data/Mentors";
import Footer from "@/components/Footer";
import Programs from "@/components/bootcamp-data/Programs";
import BodyPythonEngineers from "@/components/bootcamp-data/BodyPythonEngineers";
import '/styles/globals.css'
import MasterclassContent from "@/components/bootcamp-data/MasterClassContent";

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




