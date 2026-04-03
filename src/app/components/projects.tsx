
import HoverGrow from "./hovergrow";

import PageOpacity from "./pageopacity";

export default function Projects() {
  return (
    <div className="mt-8 flex flex-col relative">
      <PageOpacity>
        <h1
          id="projetos"
          className="topicos flex justify-center 
          project-h1 text-[2rem] sm:text-[2.5rem] md:text-[2.5rem] mt-[2.5rem]
            "
        >
          my projects
        </h1>
      </PageOpacity>

      {/* Project 1 */}
      <div className="projetos-container flex flex-col md:flex-row 
      items-start gap-6 sm:gap-8 md:gap-12 mx-4 sm:mx-6 md:mx-[4rem] 
      mt-6 sm:mt-8 md:mt-[4rem] mb-6 sm:mb-8 md:mb-[4rem]">
        {/* Text */}
        <PageOpacity>
          <div className="text-left  p-6">
            <h2 className=" text-4xl sm:text-5xl bg-clip-text text-transparent bg-gradient-to-tl from-[#2a3f2c] via-[#3f5b40] to-[#1d2a1e] ">
              DrinkAnCoffee.
            </h2>

            <p className=" text-black/60 text-xl sm:text-2xl my-4 sm:my-[2rem]">
              simple landing page of <br />
              a fictional coffee shop.
            </p>

            <p className=" text-black/60 text-[20px]  my-4 sm:my-[2rem]">
              - compact and modern design; <br />
              - responsive for mobile devices; <br />
              - smooth animations for a better user experience.
            </p>


            <HoverGrow>
              <a
                href="https://drinkancoffee.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-bl-2xl p-2 mt-2 bg-gradient-to-r from-[#2a3f2c] to-[#577e58] 
                text-[1.2rem] sm:text-[1.5rem] text-white
                transition duration-200 ease-in-out 
                hover:shadow-[4px_0_15px_#5b979d] hover:drop-shadow-[0_0_1px_#000000b0]"
              >
                learn more
              </a>
            </HoverGrow>
          </div>
        </PageOpacity>

        <PageOpacity>
          <div className="hidden lg:block h-114 w-[2px] bg-gradient-to-br
  from-white/20
  via-white/50
  to-white/20
  bg-transparent backdrop-blur-md shadow-[0px_0_6px_rgba(255,255,255,1)] "></div>
        </PageOpacity>

        {/* Video */}
        <PageOpacity>
          <div className="hidden md:block">
            <HoverGrow>
              <video
                src="/drinkancoffee.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="rounded-xl shadow-[4px_0_15px_#5b979d] w-auto h-auto"
              />
            </HoverGrow>
          </div>
        </PageOpacity>
      </div>

      {/* Project 2 */}
      <div className="projetos-container flex flex-col md:flex-row items-start gap-6 sm:gap-8 md:gap-12 mx-4 sm:mx-6 md:mx-[4rem] my-6 sm:my-8 md:my-[4rem]">
        
        {/* Video */}
        <PageOpacity>
          <div className="hidden md:block">
            <HoverGrow>
              <video
                src="/listadetarefas.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="rounded-xl shadow-[4px_0_15px_#5b979d] w-auto h-auto"
              />
            </HoverGrow>
          </div>
        </PageOpacity>

        {/* Divider */}
        <PageOpacity>
          <div className="hidden lg:block h-140 w-[2px] bg-black"></div>
        </PageOpacity>

        {/* Text */}
        <PageOpacity>
          <div className="flex flex-col p-6
           justify-start text-left md:justify-end md:text-end">
            <h2 className=" text-4xl sm:text-5xl text-black">
              Task List
            </h2>

            <p className=" text-black/60 text-xl sm:text-2xl my-4 sm:my-[2rem]">
              a functional task list with features to add, <br />
              remove, and mark tasks as completed.
            </p>

            <HoverGrow>
              <div className="flex justify-start md:justify-end">
                <a
                  href="https://simples-lista-de-tarefas.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-br-2xl p-2 bg-gradient-to-r from-[#000000] to-[#383838] text-[1.2rem] sm:text-[1.5rem] text-white
                  transition duration-200 ease-in-out 
                  hover:shadow-[4px_0_15px_#5b979d] hover:drop-shadow-[0_0_1px_#000000b0]"
                >
                  learn more
                </a>
              </div>
            </HoverGrow>
          </div>
        </PageOpacity>
      </div>
    </div>
  );
}