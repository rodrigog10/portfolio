import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import PageOpacity from "./pageopacity";
import HoverGrow from "./hovergrow";

export default function Contact() {
  return (
    <PageOpacity>
      <div id="contato" 
      className="flex flex-col px-4 mt-6">

        <div className="relative inset-0
  bg-gradient-to-br
  from-white/0
  via-white/20
  to-white/0
  shadow-[0px_0_6px_rgba(255,255,255,0.3)]
  bg-transparent backdrop-blur-md text-black rounded-4xl max-w-[35rem] my-[1rem]
           px-4 py-2 w-fit  ">

        {/* Redes sociais */}

        <div className="flex flex-wrap justify-center gap-[1.5rem]">
          <HoverGrow>
            <a
              href="https://github.com/rodrigog10"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-black hover:text-[#273e41] transition"
            >
              <FaGithub className="text-[24px] md:text-[26px]" />
            </a>
          </HoverGrow>

          <HoverGrow>
            <a
              href="https://www.linkedin.com/in/rodrigo-bispo-7854a9324/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-black hover:text-[#003eb1] transition"
            >
              <FaLinkedin className="text-[24px] md:text-[26px]"  />
            </a>
          </HoverGrow>

          <HoverGrow>
            <a
              href="https://www.instagram.com/rodrigobisppo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-black hover:text-[rgb(210,62,255)] transition"
            >
              <FaInstagram className="text-[24px] md:text-[26px]"  />
            </a>
          </HoverGrow>

          <HoverGrow>
            <a
              href="mailto:rodrigobisppo123@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-black hover:text-[#0000007e] transition"
            >
              <MdEmail className="text-[24px] md:text-[26px]"  />
            </a>
          </HoverGrow>
        </div>
      </div>
      </div>
    </PageOpacity>
  );
}
