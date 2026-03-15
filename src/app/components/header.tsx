
import PageOpacity from "./pageopacity";



export default function Header() {
  return (
    <div className="my-[3.5rem]  flex flex-col ">

      <div className="">
        <PageOpacity> 
          <div className="mx-auto flex flex-col text-black px-6">

  <h1 className="titulo font-semibold text-[4.5rem] drop-shadow-[0_0_1.5px_#000]">
    Rodrigo Bispo
  </h1>


  <h2 className="font-medium text-[0.8rem]  drop-shadow-[0_0_0.5px_#000] ">
    student at
    <span className=" font-medium text-[0.8rem]  text-orange-300 drop-shadow-[0_0_1px_#ff6600]">
      {" "}Cesar School
    </span>.


   
  </h2>


</div>
        </PageOpacity>
      </div>

    </div>

    
  );
}
