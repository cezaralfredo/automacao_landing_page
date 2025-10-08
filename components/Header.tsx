import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-brand-primary/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-brand-text">
          Automação<span className="text-brand-accent">.IA</span>
        </div>
        <a
          href="http://wa.me/5585996277707"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-brand-accent text-white font-semibold py-2 px-6 rounded-full hover:bg-brand-accent-hover transition-colors duration-300"
        >
          Fale Conosco
        </a>
      </div>
    </header>
  );
};

export default Header;