import { Phone, MapPin, ExternalLink } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase">
          <span className="gradient-text">Начни сегодня!</span>
        </h2>
        <p className="text-muted-foreground mb-10 text-lg">
          Запишись на первую тренировку и почувствуй разницу
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          <div className="flex items-center gap-3 justify-center">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="text-foreground font-mono font-semibold text-[calc(0.875rem+4pt)]">Ново-вокзальная 27</span>
          </div>
          <div className="flex items-center gap-3 justify-center">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="text-foreground font-mono font-semibold text-[calc(0.875rem+4pt)]">Антонова-Овсеенко 53а</span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+79277400282"
            className="border border-primary text-primary font-bold px-10 py-4 rounded-lg text-lg hover:bg-primary hover:text-primary-foreground transition-colors inline-flex items-center gap-3 justify-center"
          >
            <Phone className="w-5 h-5" />
            Позвонить
          </a>
          <a
            href="https://sportpriority.com/r/JUMPFITNES"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-bg text-primary-foreground font-bold px-10 py-4 rounded-lg text-lg hover:opacity-90 transition-opacity inline-flex items-center gap-3 justify-center"
          >
            <ExternalLink className="w-5 h-5" />
            Записаться на тренировку
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
