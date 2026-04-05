import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";
import slide01 from "@/assets/hero-slideshow/slide-01.png";
import slide02 from "@/assets/hero-slideshow/slide-02.png";
import slide03 from "@/assets/hero-slideshow/slide-03.png";
import slide04 from "@/assets/hero-slideshow/slide-04.png";
import slide05 from "@/assets/hero-slideshow/slide-05.png";
import slide06 from "@/assets/hero-slideshow/slide-06.png";
import slide07 from "@/assets/hero-slideshow/slide-07.png";

const SLIDES = [slide01, slide02, slide03, slide04, slide05, slide06, slide07];
const SLIDE_INTERVAL_MS = 5000;

const VkIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M12.785 16.241s.288-.032.436-.194c.136-.148.132-.427.132-.427s-.02-1.304.587-1.496c.598-.188 1.368 1.259 2.184 1.814.616.42 1.084.328 1.084.328l2.178-.03s1.14-.07.6-.964c-.044-.073-.314-.661-1.618-1.869-1.366-1.265-1.183-1.06.462-3.246.998-1.328 1.398-2.14 1.273-2.487-.12-.331-.853-.244-.853-.244l-2.454.015s-.182-.025-.317.056c-.131.079-.216.263-.216.263s-.388 1.032-.904 1.91c-1.09 1.854-1.526 1.953-1.705 1.838-.416-.268-.312-1.074-.312-1.647 0-1.79.272-2.536-.529-2.729-.266-.064-.461-.106-1.14-.113-.87-.009-1.606.003-2.023.207-.278.136-.492.438-.362.455.162.021.528.099.722.363.25.341.241 1.108.241 1.108s.144 2.108-.335 2.369c-.328.179-.778-.186-1.744-1.855-.495-.856-.868-1.8-.868-1.8s-.072-.176-.2-.271c-.155-.115-.372-.151-.372-.151l-2.335.015s-.35.01-.479.162c-.114.135-.009.414-.009.414s1.826 4.273 3.895 6.426c1.896 1.972 4.049 1.842 4.049 1.842h.975z" />
  </svg>
);

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActiveIndex((i) => (i + 1) % SLIDES.length);
    }, SLIDE_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0" aria-hidden>
        {SLIDES.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            width={1920}
            height={1080}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out ${
              i === activeIndex ? "opacity-100 z-[1]" : "opacity-0 z-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-background/70 z-[2]" />
      </div>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <img src={logo} alt="JumpFitness логотип" className="h-24 md:h-32 w-auto mx-auto mb-6" />
        <p className="text-primary font-semibold tracking-widest uppercase mb-4 text-sm">
          Фитнес-студия
        </p>
        <h1 className="text-5xl md:text-7xl font-black uppercase mb-6 leading-tight">
          <span className="gradient-text">Jump</span>
          <span className="text-foreground">Fitness</span>
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Kangoo Jumps, Табата, Йога, Пилатес и многое другое. До 1000 ккал за тренировку!
        </p>
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#schedule"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#schedule")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="gradient-bg text-primary-foreground font-bold px-8 py-4 rounded-lg text-lg hover:opacity-90 transition-opacity animate-pulse-glow"
            >
              Расписание
            </a>
            <a
              href="#pricing"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#pricing")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="border border-primary text-primary font-bold px-8 py-4 rounded-lg text-lg hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Цены
            </a>
          </div>
          <a
            href="https://vk.ru/jumpfitnessamara"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-primary text-primary font-bold px-8 py-4 rounded-lg text-lg bg-background/45 hover:bg-background/65 backdrop-blur-sm transition-colors"
          >
            <VkIcon />
            ВКонтакте
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
