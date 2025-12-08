import PageOpacity from "./pageopacity";

export default function Header() {
  return (
    <div className="my-[4rem] ">
      <div className="flex flex-col">
        <PageOpacity>
          <div className="my-[3rem] mx-auto flex justify-center text-center text-[#3ea4af] font-[400] drop-shadow-[0_0_3px_#69aab1]">
            <h1 className="titulo text-[3.5rem] font-poppins">
              Olá, meu nome é{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-tl from-[black] via-[#006381] to-[#000000] drop-shadow-[0_0_0.05rem_#69aab1]">
                Rodrigo Bispo <br />
              </span>
             
            </h1>
          </div>
        </PageOpacity>

        <div className=" mb-[4rem] flex flex-wrap mx-auto  gap-x-[3rem] ">
          <PageOpacity>
            <h3
              className="paragrafo  my-[1rem]  shadow-[-4px_0_15px_#5b979d] 
            p-4  max-w-[30rem] w-fit font-poppins font-[400]  text-[1rem] "
            >
              Atualmente, estou dando
              continuídade aos meus estudos, me informando sobre as novidades da
              programação e buscando{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#00aeff] via-[#0f222b] font-[600] to-[#68c0e9] ">
                estudar tudo o que é relevante e necessário para me tornar um
                desenvolvedor versátil e totalmente competente
              </span>
              .
            </h3>
          </PageOpacity>
          <PageOpacity>
            <h3
              className=" paragrafo my-[1rem]  shadow-[-4px_0_15px_#5b979d] 
            p-4  max-w-[30rem] font-poppins w-fit font-[400]  text-[1rem]"
            >
              Eu tenho 17 anos, moro em
              Pernambuco - Olinda, e gosto de viver do jeito simples, fazendo as
              coisas que eu gosto, passar o tempo com quem eu amo, ir pra academia, jogar basquete, ler mangás.. {" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#00aeff] via-[#0f222b] font-[600] to-[#68c0e9] ">
                {" "}
                e estudar programação
              </span>{" "}
              .
            </h3>
          </PageOpacity>
        </div>
      </div>
    </div>
  );
}
