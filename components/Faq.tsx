
import React, { useState } from 'react';
import type { FaqItem } from '../types';
import { ChevronDownIcon } from './Icons';

const faqData: FaqItem[] = [
  {
    question: "Não quero que meu atendimento pareça robótico. Isso vai irritar meu cliente?",
    answer: "Essa é a nossa principal preocupação. A automação moderna é programada para usar a linguagem da sua marca. Mais importante: ela é configurada para saber seus limites. Quando o assunto fica complexo, sua principal função é transferir para um humano de forma transparente, dizendo algo como: 'Entendi! Para te dar a atenção que você merece, vou passar sua conversa para o nosso especialista.'."
  },
  {
    question: "Vou perder o contato pessoal e o relacionamento com meus clientes?",
    answer: "Pelo contrário, você vai qualificar o contato pessoal. Sua equipe vai usar o tempo que perdia com perguntas repetitivas para ter conversas humanas de maior valor, justamente com os clientes prontos para comprar ou que precisam de atenção especial."
  },
  {
    question: "Isso parece muito caro e complicado de implementar. Meu negócio é pequeno!",
    answer: "Essa era a realidade há alguns anos. Hoje, a tecnologia se tornou muito mais acessível. O custo-benefício é muito superior à contratação de uma nova pessoa. Pense no investimento como uma forma de evitar a perda de vendas. A automação se paga ao garantir que todas as oportunidades sejam atendidas."
  },
  {
    question: "E se o sistema errar a resposta e prejudicar minha imagem?",
    answer: "O sistema é desenhado com 'redes de segurança'. A regra de ouro é: na dúvida, conecte a um humano. Mapeamos previamente as perguntas comuns e criamos respostas exatas. Para tudo o que sair desse roteiro, a ação padrão é encaminhar para sua equipe. É um ambiente controlado e seguro."
  }
];

const AccordionItem: React.FC<{ item: FaqItem; isOpen: boolean; onClick: () => void; }> = ({ item, isOpen, onClick }) => {
    return (
        <div className="border-b border-white/10">
            <button
                onClick={onClick}
                className="w-full flex justify-between items-center text-left py-6"
            >
                <h3 className="text-lg font-semibold text-brand-text">{item.question}</h3>
                <ChevronDownIcon className={`w-6 h-6 text-brand-accent transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <div
                className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
            >
                <div className="overflow-hidden">
                     <p className="pb-6 text-brand-text-secondary">{item.answer}</p>
                </div>
            </div>
        </div>
    )
}

const Faq: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    }

  return (
    <section className="py-20 bg-brand-primary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-4">
            Suas Dúvidas, Nossas Respostas Claras
          </h2>
          <p className="max-w-3xl mx-auto text-brand-text-secondary">
            Entendemos seu ceticismo. Por isso, respondemos de forma direta as preocupações mais comuns.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
            {faqData.map((item, index) => (
                <AccordionItem 
                    key={index}
                    item={item}
                    isOpen={openIndex === index}
                    onClick={() => handleToggle(index)}
                />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
