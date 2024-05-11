import ButtonAlt from "../components/ButtonAlt";

/// Images
import Cards from "../assets/images/cards.png";
import Phone from "../assets/images/phone.png";

/// Icons
import { FaCheck as Check } from "react-icons/fa6";
import { FaArrowRight as ArrowRight } from "react-icons/fa";
import Dollar from "../assets/icons/dollar-sign.png";
import SmartPhone from "../assets/icons/smartphone.png";
import Smile from "../assets/icons/smile.png";
import CheckCircle from "../assets/icons/check-circle.png";
import MousePointer from "../assets/icons/mouse-pointer.png";
import Heart from "../assets/icons/heart.png";

export default function Home() {
  return (
    <section className="flex flex-col items-center p-desktop py-16 gap-40">
      <div className="flex items-center gap-10">
        <div className="flex flex-col gap-8">
          <h1 className="text-6xl font-medium">
            TeslaBank <br /> seu banco digital.
          </h1>
          <p className="text-xl">
            Com TeslaBank, você pode realizar transferências bancárias com zero
            taxa e pagar suas contas.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              {" "}
              <span className="bg-rose-50 p-2 rounded-full">
                <Check className="text-alt" />
              </span>{" "}
              Transferência instantânea
            </div>
            <div className="flex items-center gap-3">
              {" "}
              <span className="bg-rose-50 p-2 rounded-full">
                <Check className="text-alt" />
              </span>{" "}
              Pagamentos em todo o mundo
            </div>
            <div className="flex items-center gap-3">
              {" "}
              <span className="bg-rose-50 p-2 rounded-full">
                <Check className="text-alt" />
              </span>{" "}
              Sem taxas absurdas
            </div>
            <div className="flex items-center gap-3">
              {" "}
              <span className="bg-rose-50 p-2 rounded-full">
                <Check className="text-alt" />
              </span>{" "}
              100% pensando em você
            </div>
          </div>

          <div>
            <ButtonAlt className={"flex items-center gap-3"}>
              Abrir uma conta <ArrowRight />{" "}
            </ButtonAlt>
            <div></div>
          </div>
        </div>
        <div>
          <img src={Cards} alt="Cartões Teslabank" />
        </div>
      </div>
      <div className="flex items-center gap-32">
        <div className="relative">
          <img src={Phone} alt="Celular com app do banco Teslabank aberto" />
          <span className="absolute bg-rose-50 p-4 rounded-[4px] right-[-30px] bottom-56">
            <img src={MousePointer} alt="" />
          </span>
          <span className="absolute bg-rose-50 rounded-[4px] p-4 top-20 left-[-30px]">
            <img src={Heart} alt="" />
          </span>
          <span className="absolute bg-rose-50 rounded-[4px] p-4 bottom-20 left-[-30px]">
            <img src={CheckCircle} alt="" />
          </span>
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl font-medium">
              Abra sua conta <span className="text-alt">gratuita</span>!
            </h2>
            <p className="text-sm">
              Envie e receba dinheiro de forma mais prática e rápida. Faça Pix,
              TEDs e transferências para todos os bancos sem pagar nada.
            </p>
          </div>
          <div className="flex flex-col gap-10">
            <div className="flex items-center gap-5">
              <div className="bg-rose-50 p-4 rounded-[4px]">
                <img src={Dollar} alt="Dollar icon" />
              </div>
              <p className="flex flex-col gap-2">
                <strong>Seu dinheiro rendendo mais</strong>
                <small>
                  Rendem mais que a poupança e você resgata quando quiser.
                </small>
              </p>
            </div>
            <div className="flex items-center gap-5">
              <div className="bg-rose-50 p-4 rounded-[4px]">
                <img src={SmartPhone} alt="Smartphone Icon" />
              </div>
              <p className="flex flex-col gap-2">
                <strong>Conta 100% grátis</strong>
                <small>
                  Transferências, boletos de depósito e outros serviços
                  gratuitos.
                </small>
              </p>
            </div>
            <div className="flex items-center gap-5">
              <div className="bg-rose-50 p-4 rounded-[4px]">
                <img src={Smile} alt="Smile Icon" />
              </div>
              <p className="flex flex-col gap-2">
                <strong>Cartão sem anuidade</strong>
                <small>
                  Conta digital com cartão de crédito sem anuidade e sem
                  complicação.
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
