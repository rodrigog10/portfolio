import { IconType } from "react-icons";
import HoverGrow from "./hovergrow";

type TecnologiaCardProps = {
  nome: string;
  Icon: IconType;
};

export default function TecnologiaCard({ nome, Icon }: TecnologiaCardProps) {
  return (
    <HoverGrow>
      <div
        className="flex flex-col items-center p-4 rounded-xl font-poppins
             transition duration-200 ease-in-out 
              hover:shadow-[1px_0_15px_#ffffff] hover:drop-shadow-[0px_0_6px_rgba(255,255,255,0.3)] hover: "
      >
          <Icon className="w-10 h-10 md:w-14 md:h-14 " />
        <span className="bg-gradient-to-br
  from-white/0
  via-white/20
  to-white/0
  shadow-[0px_0_6px_rgba(255,255,255,0.5)]
  bg-transparent backdrop-blur-md text-black rounded-full px-4 mt-2 font-poppins text-20px">{nome}</span>
      </div>
    </HoverGrow>
  );
}
