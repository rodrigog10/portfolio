import PageDown from "./pagedown";
import HoverGrow from "./hovergrow";
import PageLeftToRight from "./pagelefttoright";
import PageOpacity from "./pageopacity";

export default function Projects() {
  return (
    <div className=" mt-[2rem] flex flex-col relative">
      <PageLeftToRight>
        <h1
          id="projetos"
          className="bg-gradient-to-br text-transparent bg-clip-text from-[#001f3c] via-[#69aab1] to-[#69b1b9] drop-shadow-[0_0_3px_#69aab1] 
          project-h1 text-[4.5rem] font-poppins text-left mx-[2rem] mb-[4rem]"
        >
          Meus projetos
        </h1>
      </PageLeftToRight>

      {/* Layout que se adapta à tela */}
      <div className=" projetos-container flex flex-col md:flex-row items-start gap-8 mx-[4rem] mt-[4rem] mb-[4rem]">
        {/* Texto */}
        <PageDown>
          <div className="text-left">
            <h2 className=" font-poppins text-5xl bg-clip-text text-transparent bg-gradient-to-tl from-[#2a3f2c] via-[#3f5b40] to-[#1d2a1e]">
              DrinkAnCoffee.
            </h2>
            <p className="font-poppins text-black/50 text-2xl my-[2rem]">
              Simples landing page de <br />
              uma cafeteria fictícia.
            </p>
            <HoverGrow>
              <a
                href="https://drinkancoffee.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-bl-2xl p-2 bg-gradient-to-r  from-[#2a3f2c] via- to-[#577e58] text-[1.5rem] font-poppins text-black
             transition duration-200 ease-in-out 
              hover:shadow-[4px_0_15px_#5b979d] hover:drop-shadow-[0_0_1px_#000000b0]"
              >
                Saiba mais
              </a>
            </HoverGrow>
          </div>
        </PageDown>
        <div className="hidden lg:block h-64 w-[2px] bg-black"></div>

        {/* Imagem — visível só em md pra cima */}
        <PageOpacity>
          <div className="hidden md:block  ">
            <HoverGrow>
              <video
                src="/drinkancoffee.mp4" // coloque seu vídeo na pasta "public"
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
      <div className=" projetos-container flex flex-col md:flex-row items-start gap-8 mx-[4rem] my-[4rem]">
        <PageOpacity>
          <div className="hidden md:block  ">
            <HoverGrow>
              <video
                src="/listadetarefas.mp4" // coloque seu vídeo na pasta "public"
                autoPlay
                muted
                loop
                playsInline
                className="rounded-xl shadow-[4px_0_15px_#5b979d] w-auto h-auto"
              />
            </HoverGrow>
          </div>
        </PageOpacity>
        <div className="hidden lg:block h-64 w-[2px] bg-black"></div>
        {/* Texto */}
        <PageDown>
          <div className="flex flex-col justify-start text-left md:justify-end md:text-end">
            <h2 className=" font-poppins text-5xl text-black">
              Lista de Tarefas
            </h2>
            <p className="font-poppins text-black/50 text-2xl my-[2rem]">
              Uma lista de tarefas funcional, com recursos de adicionar, <br />
              remover e marcar tarefas como concluídas.
            </p>
            <HoverGrow>
              <div className="flex justify-start md:justify-end ">
                <a
                  href="https://simples-lista-de-tarefas.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-br-2xl p-2 bg-gradient-to-r from-[#000000]  to-[#383838] text-[1.5rem] font-poppins text-white
     transition duration-200 ease-in-out 
    hover:shadow-[4px_0_15px_#5b979d] hover:drop-shadow-[0_0_1px_#000000b0]"
                >
                  Saiba mais
                </a>
              </div>
            </HoverGrow>
          </div>
        </PageDown>

        {/* Imagem — visível só em md pra cima */}
      </div>
    </div>
  );
}
