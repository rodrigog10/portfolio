import AboutMe from "./components/aboutme";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import Tecnologies from "./components/tecnologies";

export default function Home() {
  return (
    <div className="antialiased">
      <Navbar />
      <Header />
      <Projects />
      <Tecnologies /> 
      <AboutMe/>
    </div>
  );
}
