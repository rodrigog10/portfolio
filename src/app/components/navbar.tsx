import HoverGrow from "./hovergrow";
import PageOpacity from "./pageopacity";
import Contact from "@/app/components/contact";


export default function Navbar() {
  return (
    
    <div className="fixed top-0 w-full z-50 flex justify-end pr-10 text-[rgb(123,234,246)]">
      <PageOpacity> 
      <div className="bg-black px-6 py-2  mt-3 flex justify-center items-center space-x-2 text-sm sm:text-base md:text-lg lg:text-xl font-medium">
        <HoverGrow>
          <a
            href="#tecnologias"
            className="mx-2 sm:mx-3 hover:text-[#a4e2ff] transition-colors duration-200"
          >
            tecnologies
          </a>
        </HoverGrow>
        <HoverGrow>
          <a
            href="#projetos"
            className="mx-2 sm:mx-3 hover:text-[#98deff] transition-colors duration-200"
          >
            projects
          </a>
        </HoverGrow>
        <HoverGrow>
          <a
            href="#contato"
            className="mx-2 sm:mx-3 hover:text-[#98deff] transition-colors duration-200"
          >
            contact
          </a>
        </HoverGrow>
      </div>
      </PageOpacity>

    </div>
    
  );
}
