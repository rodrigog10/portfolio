"use client";

import HoverGrow from "./hovergrow";
import PageOpacity from "./pageopacity";
import Contact from "@/app/components/contact";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 w-full z-50 flex justify-center">
      <PageOpacity>
        <div
          className={`
            mt-3 px-6 py-2
            flex items-center justify-center space-x-2
            text-sm sm:text-base md:text-lg lg:text-xl font-medium
            transition-all duration-300
            rounded-full
            ${
              scrolled
                ? "bg-transparent backdrop-blur-md text-black shadow-md"
                : "bg-black text-[rgb(123,234,246)]"
            }
          `}
        >
          <HoverGrow>
            <a
              href="#tecnologias"
              className="mx-2 sm:mx-3 hover:text-[#a4e2ff] transition-colors duration-200"
            >
              technologies
            </a>
          </HoverGrow>

          <HoverGrow>
            <a
              href="#projetos"
              className="mx-2 sm:mx-3 hover:text-[#98deff] transition-colors duration-200"
            >
              projects
            </a>
          </HoverGrow>

          <HoverGrow>
            <a
              href="#contato"
              className="mx-2 sm:mx-3 hover:text-[#98deff] transition-colors duration-200"
            >
              contact
            </a>
          </HoverGrow>
        </div>
      </PageOpacity>
    </div>
  );
}