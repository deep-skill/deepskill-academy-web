import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Deep Skill",
  description: "Mejora tus habilidades en algoritmos y estructuras de datos con nuestro curso intensivo.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Deep Skill</title>
        <meta name="description" content="Mejora tus habilidades en algoritmos y estructuras de datos con nuestro curso intensivo." />
        <meta name="keywords" content="algoritmos, estructuras de datos, curso intensivo, Deep Skill, programación, masterclass" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
