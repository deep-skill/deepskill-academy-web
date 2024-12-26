import Head from 'next/head';
import Image from "next/image";
import NavBar from "@/components/course-python-sql-data/Navbar";
import Mentors from "@/components/course-algorithms-data/Mentors";
import Footer from "@/components/Footer";
import Programs from "@/components/Programs";
import Body from "@/components/course-algorithms-data/Body";
import '/styles/globals.css'
import MasterclassContent from "@/components/course-algorithms-data/MasterClassContent";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";

export default function AlgorithmsData() {
  return (
    <>
    <Head>
        <title>Curso de Algoritmos y Estructuras de Datos - Deep Skill</title>
        <meta name="description" content="Mejora tus habilidades en algoritmos y estructuras de datos con nuestro curso intensivo." />
        <meta name="keywords" content="algoritmos, estructuras de datos, curso, masterclass, Deep Skill" />
    </Head>
    <div className="flex flex-col">
      <NavBar />
      <main className="flex-grow">
        <Body />
        <Mentors />
        <Programs />
        <MasterclassContent />
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </div>
    </>
  );
}