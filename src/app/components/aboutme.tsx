import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import PageOpacity from "./pageopacity";
import HoverGrow from "./hovergrow";

export default function AboutMe() {
  return (
    <PageOpacity>
      <div className="rounded-3xl shadow-[-4px_0_15px_#5b979d] p-6 mx-auto flex flex-col justify-center items-center my-[4rem] w-[90%] md:w-fit text-center">
        <h1
          id="contato"
          className="text-black drop-shadow-[0_0_3px_#69aab1] text-[2.5rem] md:text-[4.5rem] font-poppins mb-2"
        >
          Te deu interesse?
        </h1>

        <p className="text-neutral-500 text-[1.5rem] md:text-[2.5rem] font-poppins mb-[3rem]">
          Entre em contato comigo!
        </p>

        {/* Redes sociais */}

        <div className="flex flex-wrap justify-center gap-[4rem]">
          <HoverGrow>
            <a
              href="https://github.com/rodrigog10"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-black hover:text-[#5b979d] transition"
            >
              <FaGithub size={60} />
            </a>
          </HoverGrow>

          <HoverGrow>
            <a
              href="https://www.linkedin.com/in/rodrigo-bispo-7854a9324/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-black hover:text-[#5b979d] transition"
            >
              <FaLinkedin size={60} />
            </a>
          </HoverGrow>

          <HoverGrow>
            <a
              href="https://www.instagram.com/rodrigobisppo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-black hover:text-[#5b979d] transition"
            >
              <FaInstagram size={60} />
            </a>
          </HoverGrow>

          <HoverGrow>
            <a
              href="mailto:rodrigobisppo123@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-black hover:text-[#5b979d] transition"
            >
              <MdEmail size={60} />
            </a>
          </HoverGrow>
        </div>
      </div>
    </PageOpacity>
  );
}
