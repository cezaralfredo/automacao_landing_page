
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-primary border-t border-white/10">
      <div className="container mx-auto px-6 py-8 text-center text-brand-text-secondary">
        <div className="text-2xl font-bold text-brand-text mb-4">
          Automação<span className="text-brand-accent">.IA</span>
        </div>
        <p>Tornando sua equipe humana mais poderosa e eficiente.</p>
        <p className="mt-6 text-sm">
          &copy; {new Date().getFullYear()} Automação Inteligente. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
