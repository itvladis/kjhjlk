import { Flame, Zap, Footprints, Dumbbell, Wind, Heart, Sparkles, StretchHorizontal } from "lucide-react";

const programs = [
  {
    icon: Flame,
    title: "KANGOO JUMPS",
    desc: "Высокоинтенсивная интервальная тренировка. Задействован весь организм — сердечно-сосудистая, дыхательная, лимфатическая системы. До 1000 ккал за час!",
    highlight: true,
  },
  {
    icon: Zap,
    title: "ТАБАТА",
    desc: "Система упражнений на прокачку разных групп мышц в быстром темпе. 20 секунд интенсивной работы + 10 секунд отдыха.",
  },
  {
    icon: Footprints,
    title: "STEP Functional",
    desc: "Групповое занятие с использованием степ-платформ. Базовые шаги аэробики + силовые упражнения для комплексной проработки тела.",
  },
  {
    icon: Dumbbell,
    title: "Functional Training",
    desc: "Тренировка направлена на развитие силы, выносливости, гибкости, быстроты и координации. Всё для хорошей физической формы.",
  },
  {
    icon: Wind,
    title: "PILATES",
    desc: "Комплекс упражнений для развития мышц, улучшения осанки и координации. Акцент на технику дыхания и качество выполнения.",
  },
  {
    icon: Heart,
    title: "МФР",
    desc: "Миофасциальный релиз — техника самомассажа для расслабления фасций и глубоких мышц с помощью специального оборудования.",
  },
  {
    icon: Sparkles,
    title: "ХАТХА-ЙОГА",
    desc: "Физические практики, дыхательные упражнения и медитации для гармонии тела и ума. Укрепление и гибкость тела.",
  },
  {
    icon: StretchHorizontal,
    title: "STRETCHING",
    desc: "Комплекс упражнений для совершенствования гибкости, подвижности суставов и эластичности мышц. Подходит для любого возраста.",
  },
];

const ProgramsSection = () => {
  return (
    <section id="programs" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-4 uppercase">
          Наши <span className="gradient-text">программы</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
          Разнообразные направления для любого уровня подготовки
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((p) => (
            <div
              key={p.title}
              className={`bg-card rounded-xl p-6 card-hover border ${
                p.highlight ? "border-primary" : "border-border"
              }`}
            >
              <p.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-lg font-bold mb-2 text-foreground">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
