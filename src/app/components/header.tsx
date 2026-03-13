import PageLeftToRight from "./pagelefttoright";
import PageOpacity from "./pageopacity";

export default function Header() {
  return (
    <div className="my-[4rem] flex flex-col ">
      <div className="">
        <PageOpacity> 
          <div className="mx-auto flex flex-col text-black px-6">

  <h1 className="titulo font-semibold text-[3rem] md:text-[5rem] drop-shadow-[0_0_2px_#000]">
    Rodrigo Bispo
  </h1>

  <h2 className="font-medium text-[1.2rem] md:text-[1.6rem] drop-shadow-[0_0_1px_#000] ">
    student at
    <span className=" font-medium text-[1.4rem] md:text-[1.8rem] text-orange-400 drop-shadow-[0_0_1px_#ff6600]">
      {" "}Cesar School
    </span>.
   
  </h2>

</div>
        </PageOpacity>
      </div>
    </div>
    
  );
}
