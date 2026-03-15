import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import PageOpacity from "./pageopacity";
import HoverGrow from "./hovergrow";

export default function Contact() {
  return (
    <PageOpacity>
      <div className="flex flex-col ">

        <div className=" p-2 ml-4 mb-10  ">

          <h1
              id="contato"
              className=" flex justify-center text-black drop-shadow-[0_0_3px_#69aab1] text-[1rem]
             mb-4"
          >
            lets talk!
          </h1>


        {/* Redes sociais */}

        <div className="flex flex-wrap justify-center gap-[4rem]">
          <HoverGrow>
            <a
              href="https://github.com/rodrigog10"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-black hover:text-[#5b979d] transition"
            >
              <FaGithub className="text-[28px] md:text-[40px]" />
            </a>
          </HoverGrow>

          <HoverGrow>
            <a
              href="https://www.linkedin.com/in/rodrigo-bispo-7854a9324/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-black hover:text-[#5b979d] transition"
            >
              <FaLinkedin className="text-[28px] md:text-[40px]"  />
            </a>
          </HoverGrow>

          <HoverGrow>
            <a
              href="https://www.instagram.com/rodrigobisppo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-black hover:text-[#5b979d] transition"
            >
              <FaInstagram className="text-[28px] md:text-[40px]"  />
            </a>
          </HoverGrow>

          <HoverGrow>
            <a
              href="mailto:rodrigobisppo123@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-black hover:text-[#5b979d] transition"
            >
              <MdEmail className="text-[28px] md:text-[40px]"  />
            </a>
          </HoverGrow>
        </div>
      </div>
      </div>
    </PageOpacity>
  );
}
