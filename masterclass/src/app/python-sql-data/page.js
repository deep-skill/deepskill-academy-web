import Image from "next/image";
import NavBar from "@/components/course-python-sql-data/Navbar";
import Mentors from "@/components/course-python-sql-data/Mentors";
import Footer from "@/components/Footer";
import Programs from "@/components/Programs";
import Body from "@/components/course-python-sql-data/Body";
import '/styles/globals.css'
import MasterclassContent from "@/components/course-python-sql-data/MasterClassContent";

export default function PythonSqlData() {
  return (
    <div className="flex flex-col">
      <NavBar />
      <main className="flex-grow">
        <Body />
        <Mentors />
        <Programs />
        <MasterclassContent />
      </main>
      <Footer />
    </div>
  );
}