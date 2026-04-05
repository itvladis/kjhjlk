import { MapPin, Clock, Dumbbell } from "lucide-react";

const location1 = {
  address: "Ул. Ново-вокзальная 27",
  days: [
    { day: "ПН", classes: [{ time: "20:00", name: "ХАТХА-йога" }] },
    { day: "ВТ", classes: [{ time: "18:00", name: "Силовая тренировка на все группы мышц" }, { time: "19:00", name: "KANGOO JUMPS" }] },
    { day: "СР", classes: [{ time: "20:00", name: "ХАТХА-йога" }] },
    { day: "ЧТ", classes: [{ time: "10:00", name: "KANGOO JUMPS" }, { time: "18:00", name: "Степ аэробика" }, { time: "19:00", name: "KANGOO JUMPS" }, { time: "20:00", name: "Растяжка + МФР" }] },
    { day: "СБ", classes: [{ time: "09:30", name: "Хатха-йога" }, { time: "10:30", name: "Табата" }, { time: "11:30", name: "KANGOO JUMPS" }, { time: "12:30", name: "Растяжка + МФР" }] },
  ],
};

const location2 = {
  address: "Ул. Антонова-Овсеенко 53а",
  subtitle: "Танцевальная студия",
  days: [
    { day: "ПН", classes: [{ time: "9:00", name: "Йога" }, { time: "18:00", name: "KANGOO JUMPS" }] },
    { day: "СР", classes: [{ time: "9:00", name: "Пилатес" }, { time: "9:00", name: "KANGOO JUMPS" }, { time: "18:00", name: "KANGOO JUMPS" }] },
    { day: "ПТ", classes: [{ time: "9:00", name: "Растяжка" }, { time: "9:00", name: "KANGOO JUMPS" }, { time: "18:00", name: "KANGOO JUMPS" }, { time: "19:00", name: "Растяжка + МФР" }] },
  ],
};

type ClassItem = { time: string; name: string };
type DaySchedule = { day: string; classes: ClassItem[] };
type Location = { address: string; subtitle?: string; days: DaySchedule[] };

const ScheduleCard = ({ location }: { location: Location }) => (
  <div className="bg-card rounded-xl border border-border overflow-hidden">
    <div className="gradient-bg p-5">
      <div className="flex items-center gap-3 text-primary-foreground">
        <MapPin className="w-5 h-5 shrink-0" />
        <div>
          <p className="font-bold text-lg">{location.address}</p>
          {location.subtitle && <p className="text-sm opacity-80">{location.subtitle}</p>}
        </div>
      </div>
    </div>
    <div className="p-5 divide-y divide-border">
      {location.days.map((d) => (
        <div key={d.day} className="py-4 first:pt-0 last:pb-0">
          <div className="text-primary font-black text-sm tracking-wider mb-3 uppercase">{d.day}</div>
          <div className="space-y-2">
            {d.classes.map((c, i) => (
              <div key={i} className="flex items-center gap-3 group">
                <div className="flex items-center gap-1.5 text-muted-foreground shrink-0 w-16">
                  <Clock className="w-3.5 h-3.5" />
                  <span className="text-sm font-mono font-semibold">{c.time}</span>
                </div>
                <div className="w-px h-4 bg-border" />
                <div className="flex items-center gap-2">
                  <Dumbbell className="w-3.5 h-3.5 text-primary/60" />
                  <span className="text-foreground text-sm font-medium">{c.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const ScheduleSection = () => {
  return (
    <section id="schedule" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-12 uppercase">
          <span className="gradient-text">Расписание</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ScheduleCard location={location1} />
          <ScheduleCard location={location2} />
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
