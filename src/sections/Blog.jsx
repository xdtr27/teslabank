import { FaArrowRight as Seta } from "react-icons/fa";

/// images
import Image1 from "../assets/images/1.png";
import Image2 from "../assets/images/2.png";
import Image3 from "../assets/images/3.png";
import BlogCard from "../components/BlogCard";

export default function Blog() {
  return (
    <section className="p-mobile md:p-desktop py-16 md:py-36">
      <div className="flex justify-between items-center">
        <h3 className="text-5xl md:text-6xl font-medium">Blog</h3>
        <a href="#" className="flex gap-2 items-center font-semibold text-alt hover:text-rose-400 transition-colors">
          Todas as postagens <Seta />
        </a>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-3 mt-12 gap-8">
        <BlogCard
          title={"Como começar a usar o TeslaBank para sua startup"}
          img={Image1}
        >
          Descubra como a sua startup pode se beneficiar dos serviços
          financeiros do TeslaBank. Nesta postagem, apresentamos um guia fácil
          para ajudá-lo a começar a usar o TeslaBank.
        </BlogCard>
        <BlogCard
          title={"10 coisas que ninguém te contou sobre o TeslaBank"}
          img={Image2}
        >
          Você está pensando em usar o TeslaBank para gerenciar suas finanças
          pessoais? Antes de decidir, confira esta postagem para descobrir 10
          coisas que ninguém te contou sobre o TeslaBank.
        </BlogCard>
        <BlogCard
          title={"7 maneiras de melhorar seus hábitos de poupança"}
          img={Image3}
        >
          Você deseja economizar dinheiro, mas acha difícil manter bons hábitos
          de poupança? Confira esta postagem para descobrir sete maneiras
          eficazes de melhorar seus hábitos de poupança.
        </BlogCard>
      </div>
    </section>
  );
}
