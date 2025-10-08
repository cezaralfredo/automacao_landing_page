
import React from 'react';

const VideoSection: React.FC = () => {
  return (
    <section id="video" className="py-20 bg-brand-secondary">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-4">
          Veja como a mágica acontece na prática
        </h2>
        <p className="max-w-2xl mx-auto text-brand-text-secondary mb-12">
          Em menos de 2 minutos, entenda como nosso "Recepcionista Digital" pode transformar seu atendimento.
        </p>
        <div className="aspect-video max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl shadow-brand-accent/20">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=R9f-U-1q-yZ4-z-y" // Placeholder video link
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
