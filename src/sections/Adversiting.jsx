
import GroupCards from '../assets/images/cards2.png'
import ButtonAlt from '../components/ButtonAlt';

export default function Adversiting() {
  return (
    <section className="p-desktop py-12 flex flex-col gap-6 items-center">
      <span className="text-alt font-semibold">#CARTÕES</span>
      <h3 className='text-center text-5xl'>
        Cartão perfeito <br /> para suas necessidades.
      </h3>
      <p>
        Encontre o cartão perfeito para suas necessidades financeiras. Seja para <br />
        viagens ou compras do dia a dia, temos uma opção que se adapta a você.
      </p>
      <div>
        <img src={GroupCards} alt="" />
      </div>
      <div className='flex gap-5'>
        <ButtonAlt>
          Abrir uma conta
        </ButtonAlt>
        <button className='border-gray-300 rounded border-2 py-2 px-4'>Comparar cartões</button>
      </div>
    </section>
  );
}
