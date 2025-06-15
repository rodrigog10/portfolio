import PageOpacity from "./pageopacity";

export default function Header() {
  return (
    <div className="my-[2rem] ">
      <div className="flex flex-col">
        <PageOpacity>
          <div className="my-[6rem] mx-auto flex justify-center text-center text-[#69aab1] font-[400]">
            <h1 className="titulo text-[3.5rem] font-poppins">
              Olá, meu nome é{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-tl from-[black] via-[#006381] to-[#000000] drop-shadow-[0_0_0.05rem_#69aab1]">
                Rodrigo Bispo <br />
              </span>
              e viso ser um{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-tl from-black via-[#006381] to-[#000000] drop-shadow-[0_0_0.05rem_#69aab1]">
                desenvolvedor full stack. <br />
              </span>
            </h1>
          </div>
        </PageOpacity>

        <div className=" mb-[4rem] flex flex-wrap mx-auto  gap-x-[3rem] ">
          <PageOpacity>
            <h3
              className="paragrafo  my-[1rem] rounded-l-4xl shadow-[4px_0_15px_#5b979d] 
            p-4  max-w-[30rem] w-fit font-poppins font-[400]  text-[1rem] "
            >
              atualmente, eu estou no 3° ano do ensino médio e estou dando
              continuídade aos meus estudos, me informando sobre as novidades da
              programação e buscando principalmente{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#00aeff] via-[#0f222b] font-[600] to-[#68c0e9] ">
                estudar tudo o que é relevante e necessário para me tornar um
                desenvolvedor versátil e totalmente competente, um verdadeiro
                full stack
              </span>
              .
            </h3>
          </PageOpacity>
          <PageOpacity>
            <h3
              className=" paragrafo my-[1rem] rounded-r-4xl shadow-[-4px_0_15px_#5b979d] 
            p-4  max-w-[30rem] font-poppins w-fit font-[400]  text-[1rem]"
            >
              atrás do meu lado pessoal, bem.. eu tenho 17 anos, moro em
              Pernambuco, mais especificamente em Olinda, e gosto de viver a
              minha vida do jeito simples, fazendo as coisas que me deixam feliz
              - passar o tempo com quem eu amo {"(minha namorada)"}, ir pra
              academia, ler livros, praticar esportes e{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#00aeff] via-[#0f222b] font-[600] to-[#68c0e9] ">
                {" "}
                estudar programação {"(> ᴗ•)"}
              </span>{" "}
              -.
            </h3>
          </PageOpacity>
        </div>
      </div>
    </div>
  );
}
