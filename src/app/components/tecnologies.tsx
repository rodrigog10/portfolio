import PageLeftToRight from "./pagelefttoright";
import TecnologiaCard from "./tecnologiecard";
import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiTypescript,
} from "react-icons/si";

const tecnologias = [
  { nome: "React", Icon: SiReact },
  { nome: "JavaScript", Icon: SiJavascript },
  { nome: "Tailwind", Icon: SiTailwindcss },
  { nome: "HTML", Icon: SiHtml5 },
  { nome: "CSS", Icon: SiCss3 },
  { nome: "Typescript", Icon: SiTypescript },
];

export default function Tecnologies() {
  return (
    <div className="flex flex-col mt-[4rem]">
      <PageLeftToRight>
        <h1 id="tecnologias"
          className="bg-gradient-to-br text-transparent bg-clip-text from-[#001f3c] via-[#69aab1] to-[#69b1b9] drop-shadow-[0_0_3px_#69aab1] 
          project-h1 text-[4.5rem] font-poppins text-left mx-[2rem] mb-[4rem]"
        >
          Tecnologias
        </h1>
      </PageLeftToRight>

      <div className="flex flex-col md:flex-row justify-center items-start gap-[4rem] px-[2rem]">
        {/* Lista de tecnologias */}
        <div className="grid w-fit grid-cols-2 md:grid-cols-3 gap-[6rem]">
          {tecnologias.map((tec) => (
            <TecnologiaCard key={tec.nome} nome={tec.nome} Icon={tec.Icon} />
          ))}
        </div>

        {/* Observação */}
      </div>
    </div>
  );
}
