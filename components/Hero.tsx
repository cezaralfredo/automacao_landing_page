import React from 'react';
import { CheckCircleIcon } from './Icons';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-36 bg-brand-primary">
        <div className="absolute inset-0 bg-grid-white/[0.05] [mask-image:linear-gradient(to_bottom,white_10%,transparent_100%)]"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-brand-text mb-6 leading-tight">
                Mais Vendas, Clientes Satisfeitos.
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-300">
                    Sem Perder o Toque Humano.
                </span>
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-brand-text-secondary mb-10">
                Transforme seu WhatsApp e Instagram em uma máquina de atendimento 24/7 que qualifica leads, resolve dúvidas e encanta seus clientes, entregando apenas as melhores oportunidades para sua equipe.
            </p>
            <div className="flex justify-center items-center gap-8 mb-12">
                <a
                    href="http://wa.me/5585996277707"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-brand-accent text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-brand-accent-hover transform hover:scale-105 transition-all duration-300"
                >
                    Quero Otimizar Meu Atendimento
                </a>
            </div>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-brand-text-secondary">
                <div className="flex items-center gap-2">
                    <CheckCircleIcon className="w-5 h-5 text-green-400" />
                    <span>Atendimento Imediato 24/7</span>
                </div>
                <div className="flex items-center gap-2">
                    <CheckCircleIcon className="w-5 h-5 text-green-400" />
                    <span>Sem Custo de Contratação</span>
                </div>
                <div className="flex items-center gap-2">
                    <CheckCircleIcon className="w-5 h-5 text-green-400" />
                    <span>Aumento de Vendas Garantido</span>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Hero;