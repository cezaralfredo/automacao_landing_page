
import React from 'react';

const HowItWorks: React.FC = () => {

    const steps = [
        {
            title: "1. Boas-vindas Imediatas",
            description: "Ninguém fica sem resposta. O primeiro contato é instantâneo, 24/7, passando uma imagem de eficiência e cuidado."
        },
        {
            title: "2. Qualificação Inteligente",
            description: "Com perguntas chave, nosso assistente entende se o cliente quer comprar, precisa de suporte ou está apenas pesquisando."
        },
        {
            title: "3. Respostas Automáticas",
            description: "Dúvidas comuns como horários, preços e localização são resolvidas na hora, sem ocupar o tempo da sua equipe."
        },
        {
            title: "4. Direcionamento para Humanos",
            description: "A mágica! Apenas os leads qualificados e as dúvidas complexas são transferidos para o vendedor certo, com todo o histórico."
        }
    ]

  return (
    <section className="py-20 bg-brand-primary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-4">
            Seu Recepcionista Digital Incansável
          </h2>
          <p className="max-w-3xl mx-auto text-brand-text-secondary">
            A automação é o filtro inteligente que organiza a fila, resolve o básico e entrega para sua equipe apenas as conversas que geram vendas.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
                 <div key={index} className="bg-brand-secondary p-8 rounded-xl border border-white/10 transform hover:-translate-y-2 transition-transform duration-300">
                     <h3 className="text-xl font-bold text-brand-text mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-300">{step.title}</h3>
                     <p className="text-brand-text-secondary">
                        {step.description}
                     </p>
                 </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
