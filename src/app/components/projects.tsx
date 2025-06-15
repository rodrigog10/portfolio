import PageDown from "./pagedown";
import HoverGrow from "./hovergrow";
import PageLeftToRight from "./pagelefttoright";
import PageOpacity from "./pageopacity";

export default function Projects() {
  return (
    <div className="mt-8 flex flex-col relative">
      <PageLeftToRight>
        <h1
          id="projetos"
          className="bg-gradient-to-br text-transparent bg-clip-text from-[#001f3c] via-[#69aab1] to-[#69b1b9] drop-shadow-[0_0_3px_#69aab1] 
          project-h1 text-[3rem] sm:text-[3.5rem] md:text-[4.5rem] font-poppins text-left mx-4 sm:mx-6 md:mx-[2rem] mb-[2rem] sm:mb-[3rem] md:mb-[4rem]"
        >
          Meus projetos
        </h1>
      </PageLeftToRight>

      {/* Projeto 1 */}
      <div className="projetos-container flex flex-col md:flex-row items-start gap-6 sm:gap-8 md:gap-12 mx-4 sm:mx-6 md:mx-[4rem] mt-6 sm:mt-8 md:mt-[4rem] mb-6 sm:mb-8 md:mb-[4rem]">
        {/* Texto */}
        <PageDown>
          <div className="text-left">
            <h2 className="font-poppins text-4xl sm:text-5xl bg-clip-text text-transparent bg-gradient-to-tl from-[#2a3f2c] via-[#3f5b40] to-[#1d2a1e]">
              DrinkAnCoffee.
            </h2>
            <p className="font-poppins text-black/50 text-xl sm:text-2xl my-4 sm:my-[2rem]">
              Simples landing page de <br />
              uma cafeteria fictícia.
            </p>
            <HoverGrow>
              <a
                href="https://drinkancoffee.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-bl-2xl p-2 bg-gradient-to-r from-[#2a3f2c] to-[#577e58] text-[1.2rem] sm:text-[1.5rem] font-poppins text-black
                transition duration-200 ease-in-out 
                hover:shadow-[4px_0_15px_#5b979d] hover:drop-shadow-[0_0_1px_#000000b0]"
              >
                Saiba mais
              </a>
            </HoverGrow>
          </div>
        </PageDown>
        <PageDown>
          {/* Linha vertical em desktop */}
          <div className="hidden lg:block h-64 w-[2px] bg-black"></div>
        </PageDown>

        {/* Vídeo */}
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

      {/* Projeto 2 */}
      <div className="projetos-container flex flex-col md:flex-row items-start gap-6 sm:gap-8 md:gap-12 mx-4 sm:mx-6 md:mx-[4rem] my-6 sm:my-8 md:my-[4rem]">
        {/* Vídeo */}
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

        {/* Linha vertical em desktop */}
        <PageDown>
          {" "}
          <div className="hidden lg:block h-64 w-[2px] bg-black"></div>
        </PageDown>

        {/* Texto */}
        <PageDown>
          <div className="flex flex-col justify-start text-left md:justify-end md:text-end">
            <h2 className="font-poppins text-4xl sm:text-5xl text-black">
              Lista de Tarefas
            </h2>
            <p className="font-poppins text-black/50 text-xl sm:text-2xl my-4 sm:my-[2rem]">
              Uma lista de tarefas funcional, com recursos de adicionar, <br />
              remover e marcar tarefas como concluídas.
            </p>
            <HoverGrow>
              <div className="flex justify-start md:justify-end">
                <a
                  href="https://simples-lista-de-tarefas.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-br-2xl p-2 bg-gradient-to-r from-[#000000] to-[#383838] text-[1.2rem] sm:text-[1.5rem] font-poppins text-white
                  transition duration-200 ease-in-out 
                  hover:shadow-[4px_0_15px_#5b979d] hover:drop-shadow-[0_0_1px_#000000b0]"
                >
                  Saiba mais
                </a>
              </div>
            </HoverGrow>
          </div>
        </PageDown>
      </div>
    </div>
  );
}
