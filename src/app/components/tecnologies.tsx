import PageLeftToRight from "./pagelefttoright";
import PageOpacity from "./pageopacity";
import TecnologiaCard from "./tecnologiecard";
import { DiJava } from "react-icons/di";
import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiCss3,
  SiTypescript,
} from "react-icons/si";

const tecnologias = [
  { nome: "React", Icon: SiReact },
  { nome: "JavaScript", Icon: SiJavascript },
  { nome: "Tailwind", Icon: SiTailwindcss },
  { nome: "Java", Icon: DiJava },
  { nome: "CSS", Icon: SiCss3 },
  { nome: "Typescript", Icon: SiTypescript },
];
  


export default function Tecnologies() {
  return (
    <div className="flex flex-col ">
      <PageLeftToRight>
        
        <h1
          id="tecnologias"
          className=" drop-shadow-[0_0_3px_#000] project-h1 text-[3.5rem]text-center mx-[2rem] mb-[4rem]"
        >
          my technologies
        </h1>
      </PageLeftToRight>
      <PageOpacity>
        <div className="flex flex-col md:flex-row justify-center items-start gap-[4rem] px-[2rem]">
          {/* Lista de tecnologias */}
          <div className="grid w-fit grid-cols-2 md:grid-cols-3 gap-[6rem]">
            {tecnologias.map((tec) => (
              <TecnologiaCard key={tec.nome} nome={tec.nome} Icon={tec.Icon} />
            ))}
          </div>
        </div>
      </PageOpacity>
    </div>
  );
}
