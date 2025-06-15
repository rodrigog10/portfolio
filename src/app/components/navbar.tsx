import HoverGrow from "./hovergrow";
import PageOpacity from "./pageopacity";


export default function Navbar() {
  return (
    
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center">
      <PageOpacity> 
      <div className="bg-black px-6 py-2 rounded-3xl mt-3 flex justify-center items-center space-x-2 text-sm sm:text-base md:text-lg lg:text-xl font-poppins font-medium">
        <HoverGrow>
          <a
            href="#tecnologias"
            className="mx-2 sm:mx-3 hover:text-[#a4e2ff] transition-colors duration-200"
          >
            tecnologias
          </a>
        </HoverGrow>
        <HoverGrow>
          <a
            href="#projetos"
            className="mx-2 sm:mx-3 hover:text-[#98deff] transition-colors duration-200"
          >
            projetos
          </a>
        </HoverGrow>
        <HoverGrow>
          <a
            href="#contato"
            className="mx-2 sm:mx-3 hover:text-[#98deff] transition-colors duration-200"
          >
            contato
          </a>
        </HoverGrow>
      </div>
      </PageOpacity>
    </div>
    
  );
}
