"use client";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import HoverGrow from "./hovergrow";
export default function Final() {
  return (
    <footer className="bg-black text-white mt-4">
  <div className="flex justify-between items-center p-4">
    
    {/* ESQUERDA */}
    <p className="text-sm px-12 md:px-[8rem] md:text-base">talk to me!</p>

    {/* DIREITA */}
    <div className="flex gap-[1.5rem]">
      <HoverGrow>
        <a
          href="https://github.com/rodrigog10"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-white hover:text-[#273e41] transition"
        >
          <FaGithub className="text-[24px] md:text-[26px]" />
        </a>
      </HoverGrow>

      <HoverGrow>
        <a
          href="https://www.linkedin.com/in/rodrigo-bispo-7854a9324/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-white hover:text-[#003eb1] transition"
        >
          <FaLinkedin className="text-[24px] md:text-[26px]" />
        </a>
      </HoverGrow>

      <HoverGrow>
        <a
          href="https://www.instagram.com/rodrigobisppo"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-white hover:text-[rgb(210,62,255)] transition"
        >
          <FaInstagram className="text-[24px] md:text-[26px]" />
        </a>
      </HoverGrow>

      <HoverGrow>
        <a
          href="mailto:rodrigobisppo123@gmail.com"
          className="flex items-center text-white hover:text-[#0000007e] transition"
        >
          <MdEmail className="text-[24px] md:text-[26px]" />
        </a>
      </HoverGrow>
    </div>

  </div>
</footer>
  );
}
