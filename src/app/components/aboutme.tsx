import PageOpacity from "./pageopacity";

import TecnologiaCard from "./tecnologiecard";

import {DiJava} from "react-icons/di";
import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  
  SiCss,
  SiTypescript,
} from "react-icons/si";

const tecnologias = [
  { nome: "React", Icon: SiReact },
  { nome: "Tailwind", Icon: SiTailwindcss },
  { nome: "Java", Icon: DiJava},
  { nome: "JavaScript", Icon: SiJavascript },
  { nome: "Typescript", Icon: SiTypescript },
  { nome: "CSS", Icon: SiCss },
];

export default function AboutMe() {
  return (
    <div className="mt-[4rem] flex justify-center px-6">

      <div className="flex flex-col lg:flex-row items-start gap-10">

        {/* TECNOLOGIAS */}
        <PageOpacity>
        <div>

            <h1
              id="tecnologias"
              className=" topicos flex justify-start md:justify-center
               text-[3rem]  mb-[1rem]"
            >
              my technologies
            </h1>


          <PageOpacity>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-[3rem]">
              {tecnologias.map((tec) => (
                <TecnologiaCard
                  key={tec.nome}
                  nome={tec.nome}
                  Icon={tec.Icon}
                />
              ))}
            </div>
          </PageOpacity>
        </div>
        </PageOpacity>

        {/* DIVIDER */}
        <PageOpacity>
        <div className="bg-black rounded-full hidden lg:block h-114 w-[3px] "></div>
        </PageOpacity>
        {/* BIO */}
        <PageOpacity>
        <div className="flex flex-col ">

          <h2

          className="text-[3rem] topicos flex justify-start md:justify-center mb-[1rem] ">
            about me
          </h2>


          <div className="relative inset-0
  bg-gradient-to-br
  from-white/0
  via-white/20
  to-white/0
  bg-transparent backdrop-blur-md text-black rounded-4xl max-w-[35rem] my-[1rem]
          shadow-[0px_0_6px_rgba(255,255,255,0.6)] p-6 ">

            {/* canto superior esquerdo */}

            <h3 className="paragrafo">
    <span className=" text-[1rem] sm:text-[1.2rem] md:text-[1.2rem]">
      currently, i am continuing my studies, keeping myself informed
      about the latest developments in programming and seeking to
      study everything that is relevant and necessary to become a
      versatile and fully competent developer. i am 17 years old, i
      live in Pernambuco and i enjoy living simply — doing the
      things i like, spending time with the people i love, going to
      the gym, playing basketball, reading manga… and studying
      programming.
    </span>
            </h3>
          </div>

        </div>
        </PageOpacity>

      </div>
    </div>
  );
}