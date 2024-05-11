import { IoIosArrowUp as ArrowClick } from "react-icons/io";
import ButtonAlt from "./components/ButtonAlt";


/// Icons
import Home from "./sections/Home";
import Benefits from "./sections/Benefits";
import Feedbacks from "./sections/Feedbacks";
import Adversiting from "./sections/Adversiting";
import DownloadApp from "./sections/DownloadApp";
import Blog from "./sections/Blog";
import Help from "./sections/Help";

function Header() {
  return (
    <header className="flex items-center justify-between p-desktop py-6">
      <div>
        <h2 className="font-semibold text-3xl text-alt">
          teslabank<span className="font-bold">.</span>
        </h2>
      </div>
      <nav>
        <ul className="flex gap-4">
          <li className="p-2 cursor-pointer rounded-[6px] hover:bg-zinc-100 transition-colors duration-300">
            Benefícios
          </li>
          <li className="group p-2 flex items-center gap-2 cursor-pointer rounded-[4px] hover:bg-zinc-100 transition-colors duration-300">
            Conta digital <ArrowClick className="rotate-180 transition-all duration-300 group-hover:rotate-0 "/>
          </li>
          <li className="p-2 cursor-pointer rounded-[6px] hover:bg-zinc-100 transition-colors duration-300">
            Suporte
          </li>
          <li className="group p-2 flex items-center gap-2 cursor-pointer rounded-[4px] hover:bg-zinc-100 transition-colors duration-300">
            Blog <ArrowClick className="rotate-180 duration-100 group-hover:rotate-0"/>
          </li>
        </ul>
      </nav>
      <div className="flex gap-8">
        <button className="text-alt">Entrar</button>
        <ButtonAlt>Abrir conta</ButtonAlt>
      </div>
    </header>
  );
}
export default function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <Benefits />
        <Feedbacks />
        <Adversiting />
        <DownloadApp />
        <Blog />
        <Help />
      </main>
    </>
  );
}
