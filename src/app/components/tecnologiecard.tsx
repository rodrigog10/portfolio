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
              hover:shadow-[4px_0_15px_#5b979d] hover:drop-shadow-[0_0_1px_#000000b0] "
      >
        <Icon className="w-14 h-14 text-black/80" />
        <span className="mt-2 font-poppins text-2xl">{nome}</span>
      </div>
    </HoverGrow>
  );
}
