import AboutMe from "./components/aboutme";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import Tecnologies from "./components/tecnologies";
import { Nunito } from "next/font/google";

const nunito = Nunito({
  weight: '400',
  variable: '--font-nunito',
})

export default function Home() {
  return (
    <div className={`${nunito.variable} font-nunito antialiased`}>
      <Navbar />
      <Header />
      <Projects />
      <Tecnologies /> 
      <AboutMe/>
    </div>
  );
}
