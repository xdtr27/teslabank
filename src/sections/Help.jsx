import Question from "@/components/Question";

export default function Help() {
  return (
    <section className="py-24 p-desktop flex flex-col gap-16">
      <div className="flex flex-col items-center gap-4">
        <span className="font-bold text-alt text-md">#AJUDA</span>
        <h3 className="text-5xl font-medium">Ficou alguma dúvida?</h3>
        <p className="text-xl">
          Confira nossa lista de perguntas mais frequentes que recebemos
        </p>
      </div>
      <div className="flex flex-col items-center">
        <Question title={"Como posso abrir uma conta bancária?"}>
          Você pode abrir uma conta bancária facilmente visitando nosso site e
          preenchendo o formulário de inscrição online. Depois, é só agendar uma
          visita em uma de nossas agências para concluir o processo de abertura
          da conta.
        </Question>
        <Question title={"Qual é o meu saldo atual?"}>
          Para verificar seu saldo atual, basta fazer login em nossa plataforma
          online ou em nosso aplicativo móvel. Lá você terá acesso imediato a
          todas as informações da sua conta, incluindo o saldo atual.
        </Question>
        <Question
          title={"Como faço para transferir dinheiro para outra conta?"}
        >
          Transferir dinheiro é simples! Você pode fazer isso através do nosso
          aplicativo móvel, selecionando a opção de transferência e inserindo os
          detalhes da conta de destino. Você também pode realizar transferências
          visitando uma de nossas agências e solicitando assistência de um de
          nossos funcionários.
        </Question>
      </div>
    </section>
  );
}
