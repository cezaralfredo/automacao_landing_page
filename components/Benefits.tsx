
import React from 'react';
import { ZapIcon, DollarSignIcon, BadgeCheckIcon, DatabaseIcon } from './Icons';

const benefitsData = [
    {
        icon: <ZapIcon className="w-10 h-10 text-brand-accent"/>,
        title: "Nunca Mais Perca um Cliente por Demora",
        description: "Agilidade é tudo. Responder em segundos, e não em horas, é a diferença entre fechar uma venda ou perder para o concorrente."
    },
    {
        icon: <DollarSignIcon className="w-10 h-10 text-brand-accent"/>,
        title: "Sua Equipe Focada no que Gera Dinheiro",
        description: "Seus melhores vendedores estarão negociando e encantando clientes, não digitando 'bom dia, em que posso ajudar?' repetidamente."
    },
    {
        icon: <BadgeCheckIcon className="w-10 h-10 text-brand-accent"/>,
        title: "Padronização e Profissionalismo",
        description: "Todo cliente recebe o mesmo nível de excelência no primeiro contato, transmitindo uma imagem de empresa organizada e eficiente."
    },
    {
        icon: <DatabaseIcon className="w-10 h-10 text-brand-accent"/>,
        title: "Coleta de Dados Inteligente",
        description: "A automação coleta nome, e-mail e necessidade do cliente, alimentando sua base para futuras campanhas de marketing."
    }
]

const Benefits: React.FC = () => {
  return (
    <section className="py-20 bg-brand-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-4">
            Benefícios Reais e Imediatos
          </h2>
          <p className="max-w-3xl mx-auto text-brand-text-secondary">
            Veja o impacto direto da automação no seu dia a dia e, principalmente, no seu faturamento.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefitsData.map((benefit, index) => (
                <div key={index} className="flex items-start gap-6 bg-brand-primary/50 p-6 rounded-lg">
                    <div className="flex-shrink-0 bg-brand-secondary p-4 rounded-full">
                        {benefit.icon}
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-brand-text mb-2">{benefit.title}</h3>
                        <p className="text-brand-text-secondary">{benefit.description}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
