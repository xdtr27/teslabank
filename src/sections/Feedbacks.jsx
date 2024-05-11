import FeedbackCard from "../components/FeedbackCard";

export default function Feedbacks() {
  return (
    <section className="p-desktop py-36">
      <div className="mb-16">
        <span className="text-alt font-semibold">#DEPOIMENTOS</span>
        <h3 className="text-5xl mt-3 font-medium">
          TeslaBank fora das telinhas:
        </h3>
        <h3 className="text-5xl font-light">
          Veja o que estão falando sobre nós
        </h3>
      </div>
      <div className="flex gap-8">
        <FeedbackCard title="Nikola Tesla">
          Estou realmente impressionado com a qualidade do serviço do TeslaBank.
          Desde que comecei a usá-lo, todas as minhas transações financeiras
          ficaram mais fáceis e ágeis.
        </FeedbackCard>
        <FeedbackCard title="Steve Jobs">
          O TeslaBank é uma verdadeira revolução no mundo financeiro. Eu não
          preciso mais enfrentar filas em agências bancárias ou lidar com taxas
          e tarifas absurdas.
        </FeedbackCard>
        <FeedbackCard title="Alan Turing">
          Eu era bastante cético em relação ao banco digital, mas decidi
          experimentar por curiosidade. Fiquei surpreso com a facilidade e
          segurança das transações, além de todas as funcionalidades exclusivas
          oferecidas.
        </FeedbackCard>
      </div>
    </section>
  );
}
