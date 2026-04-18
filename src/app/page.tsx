import Contact from "./components/contact";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import { Inter } from "next/font/google";
import  AboutMe  from "./components/aboutme";
import Final from "./components/final";





const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  
})

export default function Home() {
  return (
    <div className={`${inter.variable}  font-inter antialiased`}>
      <Navbar />
      <Header />
      <Contact/>
      <AboutMe/>
      <Projects/>
      <Final/>
    </div>
  );
}
