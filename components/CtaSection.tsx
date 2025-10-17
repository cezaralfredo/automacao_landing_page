import React from 'react';

const CtaSection: React.FC = () => {
  return (
    <section id="cta" className="py-20 bg-brand-secondary">
      <div className="container mx-auto px-6">
        <div className="bg-gradient-to-r from-brand-accent to-blue-600 rounded-2xl p-10 md:p-16 text-center shadow-2xl shadow-brand-accent/30">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Pronto para Transformar seu Atendimento?
          </h2>
          <p className="max-w-2xl mx-auto text-white/90 mb-8 text-lg">
            Vamos conversar sobre como a automação pode economizar seu tempo, profissionalizar sua marca e, o mais importante, aumentar suas vendas. Sem compromisso.
          </p>
          <a
            href="http://wa.me/5585996277707"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-brand-accent font-bold py-4 px-10 rounded-full text-lg hover:bg-gray-200 transform hover:scale-105 transition-all duration-300 inline-block"
          >
            Quero Conversar com Especialista
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;