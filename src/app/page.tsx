import Contact from "./components/contact";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import { Bricolage_Grotesque } from "next/font/google";
import  AboutMe  from "./components/aboutme";



const bricolage = Bricolage_Grotesque({
  weight: ['400','600','700', '800'],
  variable: '--font-bricolage',
})



export default function Home() {
  return (
    <div className={`${bricolage.variable} font-bricolage antialiased`}>
      <Navbar />
      <Header />
      <Contact/>
      <AboutMe/>
      <Projects/>
        
    </div>
  );
}
