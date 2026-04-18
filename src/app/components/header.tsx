
import PageOpacity from "./pageopacity";



export default function Header() {
    return (
        <div className="mt-[4.5rem]">
            <PageOpacity>
                <div className="mx-auto flex justify-between items-start px-6 text-black">

                    {/* TEXTO */}
                    <div className="flex ">
                        <div className="flex-col">
                            <img id="contato"
                                src="/seriedade.jpeg"
                                alt="Rodrigo"
                                className=" border-4 border-black my-4 self-end w-36 h-36 md:w-54 md:h-54 rounded-full object-cover shadow-lg
                                transition-transform duration-300 hover:scale-105"
                            />
                        <h1 className="text-[2.7rem] md:text-[6rem] font-semibold md:font-medium ">
                            Hi, <span className="  md:hidden"> <br/>
                        </span>
                            i'm{" "}
                            <span className="relative inline-block after:content-['']
                        after:absolute after:left-0 after:bottom-2 after:w-0 after:h-[3px]
                        after:bg-[#000000] after:transition-all after:duration-300
                        hover:after:w-full ">
                        Rodrigo
                    </span>
                            <span className="inline-block animate-[wave_2.5s_infinite] px-2 origin-[70%_70%]">
                        👋
                    </span>
                        </h1>
                            <span className="font-medium text-[1rem]">
                            student at{" "}
                                <span className="relative text-orange-400 drop-shadow-[0_0_6px_#fb923c] transition-all
                        duration-300 hover:drop-shadow-[0_0_12px_#fb923c] after:content-['']
                        after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px]
                        after:bg-orange-400 after:transition-all after:duration-300
                        hover:after:w-full">
                        Cesar School
                    </span>.
                        </span>
                    </div>

                    </div>

                    {/* IMAGEM */}

                </div>
            </PageOpacity>
        </div>
    );
}