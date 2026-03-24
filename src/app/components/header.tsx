
import PageOpacity from "./pageopacity";



export default function Header() {
  return (
    <div className="mt-[4.5rem] flex flex-col ">

      <div className="">
        <PageOpacity> 
          <div className="mx-auto flex flex-col text-black px-6">
          <img
                                src="/euportfolio.jpeg" // coloca tua imagem em /public
                                alt="Rodrigo"
                                className=" w-32 h-32 md:w-42 md:h-42 rounded-full object-cover mb-4 shadow-lg"
                              />

  <h1 className="titulo text-[5rem]  ">
  Hi, 
   i'm <span className="relative inline-block after:content-[''] 
   after:absolute after:left-0 after:bottom-2 after:w-0 after:h-[3px]
    after:bg-[#000000] after:transition-all after:duration-300 
    hover:after:w-full">Rodrigo</span>
    <span className="inline-block animate-[wave_2.5s_infinite] origin-[70%_70%]">👋</span>
    
</h1>



  <h2 className="font-medium text-[1rem]  ">
    student at
    <span className="relative text-orange-400 drop-shadow-[0_0_6px_#fb923c] transition-all 
    duration-300 hover:drop-shadow-[0_0_12px_#fb923c] after:content-[''] after:absolute after:left-0 
    after:bottom-0 after:w-0 after:h-[2px] after:bg-orange-400 after:transition-all 
    after:duration-300 
    hover:after:w-full">
  {" "}Cesar School
</span>.


   
  </h2>


</div>
        </PageOpacity>
      </div>

    </div>

    
  );
}
