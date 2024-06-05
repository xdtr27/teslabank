import { IoIosArrowUp as ArrowClick } from "react-icons/io";
import ButtonAlt from "../components/ButtonAlt";
import { useState } from "react";

export default function Header() {
  const [menu, setMenu] = useState(false);
  

  function clickMenu() {
    !menu ? setMenu(true) : setMenu(false);
     
  
  }

  return (
    <header className="flex items-center justify-between p-mobile py-7 md:p-desktop md:py-6">
      <div>
        <h2 className="font-semibold text-2xl md:text-3xl text-alt">
          teslabank<span className="">.</span>
        </h2>
      </div>
      <nav className="hidden xl:block">
        <ul className="flex gap-4">
          <li className="p-2 cursor-pointer rounded-[6px] hover:bg-zinc-100 transition-colors duration-300">
            Benefícios
          </li>
          <li className="group p-2 flex items-center gap-2 cursor-pointer rounded-[4px] hover:bg-zinc-100 transition-colors duration-300">
            Conta digital{" "}
            <ArrowClick className="rotate-180 transition-all duration-300 group-hover:rotate-0 " />
          </li>
          <li className="p-2 cursor-pointer rounded-[6px] hover:bg-zinc-100 transition-colors duration-300">
            Suporte
          </li>
          <li className="group p-2 flex items-center gap-2 cursor-pointer rounded-[4px] hover:bg-zinc-100 transition-colors duration-300">
            Blog{" "}
            <ArrowClick className="rotate-180 duration-100 group-hover:rotate-0" />
          </li>
        </ul>
      </nav>
      <div className="hidden md:flex gap-8">
        <button className="text-alt">Entrar</button>
        <ButtonAlt>Abrir conta</ButtonAlt>
      </div>
      
    </header>
  );
}
