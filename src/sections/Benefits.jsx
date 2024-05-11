import Card from "../components/Card";

// icons

import CreditCard from "../assets/icons/credit-card.png";
import ShoppingCart from "../assets/icons/shopping-cart.png";
import Clock from "../assets/icons/clock.png";
import Shield from "../assets/icons/shield.png";
import Percent from "../assets/icons/percent.png";
import Gift from "../assets/icons/gift.png";

/// section cards
export default function Benefits() {
  return (
    <section className="p-desktop mt-20 bg-rose-50 py-40">
      <div className="mb-16">
        <span className="text-alt font-semibold">#INOVAÇÃO</span>
        <h2 className="text-5xl font-medium">
          Quais as vantagens <br /> de usar{" "}
          <span className="text-alt">TeslaBank</span>?
        </h2>
      </div>
      <div className="flex flex-col gap-10">
        <div className="grid grid-cols-4 gap-8">
          <Card title="Cartão TeslaBank" icon={CreditCard} buttonText="Veja as opções">
            O Cartão TeslaBank é um cartão de crédito exclusivo para clientes da
            TeslaBank, uma instituição financeira líder em inovação e
            tecnologia.
          </Card>
          <Card title="Investimentos" icon={ShoppingCart} buttonText="Conheça os investimentos">
            O cartão também oferece diversos benefícios, como descontos em taxas
            de corretagem, acesso a fundos de investimento exclusivos e cashback
            em investimentos.
          </Card>
          <Card title="Atendimento 24h" icon={Clock} buttonText="Veja as opções">
            No TeslaBank, os usuários têm acesso a um atendimento ao cliente
            sempre disponível, 24 horas por dia, 7 dias por semana.
          </Card>
        </div>
        <div className="grid grid-cols-4 gap-8">
          <Card className="opacity-0"/>
          <Card title="Segurança" icon={Shield} buttonText="Conheça as seguranças">
            Os usuários contam com sistemas avançados de segurança, como
            verificação de identidade, monitoramento de transações e
            notificações de uso não autorizado.
          </Card>
          <Card title="Sem taxas" icon={Percent} buttonText="Como funciona">
            Com o cartão TeslaBank, os usuários podem aproveitar ao máximo seus
            recursos financeiros, sem se preocupar com custos adicionais ou
            taxas escondidas.
          </Card>
          <Card title="Receba prêmios" icon={Gift} buttonText="Veja como">
            Os usuários têm acesso a um programa de recompensas que oferece
            pontos a cada transação realizada com o cartão, que podem ser
            trocados por diversos prêmios.
          </Card>
        </div>
      </div>
    </section>
  );
}
