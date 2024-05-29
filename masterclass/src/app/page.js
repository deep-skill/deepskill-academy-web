import Image from "next/image";
import Body from "@/components/Body";
import NavBar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-0">
      <NavBar></NavBar>
      <Body></Body>
    </main>
    
  );
}
