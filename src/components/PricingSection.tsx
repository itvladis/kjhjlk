const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-12 uppercase">
          <span className="gradient-text">Стоимость</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Групповые */}
          <div className="bg-card rounded-xl border border-border p-6 card-hover">
            <h3 className="text-xl font-bold mb-1 text-foreground">Групповые тренировки</h3>
            <p className="text-muted-foreground text-xs mb-6">Табата, Step, Stretching, Yoga, Functional, МФР, Pilates</p>
            <div className="space-y-3">
              <PriceRow label="Разовая" price="500₽" />
              <PriceRow label="8 занятий" price="3 500₽" note="4 недели" />
              <PriceRow label="12 занятий" price="4 900₽" note="4 недели" />
              <PriceRow label="24 занятия" price="8 800₽" note="12 недель" />
            </div>
          </div>

          {/* Kangoo */}
          <div className="bg-card rounded-xl border border-primary p-6 card-hover relative overflow-hidden">
            <div className="absolute top-0 right-0 gradient-bg text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg">
              ХИТ
            </div>
            <h3 className="text-xl font-bold mb-1 text-foreground">KANGOO JUMPS</h3>
            <p className="text-muted-foreground text-xs mb-6">Групповые тренировки</p>
            <div className="space-y-3">
              <PriceRow label="Разовая" price="700₽" />
              <PriceRow label="8 занятий" price="4 900₽" note="4 недели" />
              <PriceRow label="12 занятий" price="6 300₽" note="4 недели" />
            </div>
          </div>

          {/* Персональные */}
          <div className="bg-card rounded-xl border border-border p-6 card-hover">
            <h3 className="text-xl font-bold mb-1 text-foreground">Персональные</h3>
            <p className="text-muted-foreground text-xs mb-6">Индивидуальный подход</p>
            <div className="space-y-3">
              <PriceRow label="1 человек" price="1 600₽" />
              <PriceRow label="Пакет 10" price="15 000₽" />
              <PriceRow label="Мини-группа (2 чел.)" price="2 200₽" />
              <PriceRow label="Пакет 10 (2 чел.)" price="19 000₽" />
              <div className="border-t border-border pt-3 mt-3">
                <PriceRow label="Онлайн" price="800₽" />
                <PriceRow label="Пакет 10 онлайн" price="7 000₽" />
              </div>
            </div>
          </div>
        </div>

        {/* Комбинированные */}
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="text-xl font-bold mb-1 text-center text-foreground">Комбинированные абонементы</h3>
          <p className="text-muted-foreground text-xs mb-6 text-center">KANGOO JUMPS + групповые тренировки</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { label: "4+4", price: "4 200₽", note: "4 нед." },
              { label: "4+8", price: "5 800₽", note: "4 нед." },
              { label: "8+8", price: "7 600₽", note: "4 нед." },
              { label: "8+12", price: "9 400₽", note: "8 нед." },
              { label: "8+24", price: "13 000₽", note: "12 нед." },
              { label: "12+4", price: "7 900₽", note: "8 нед." },
              { label: "12+8", price: "9 800₽", note: "8 нед." },
            ].map((c) => (
              <div key={c.label} className="bg-secondary rounded-lg p-4 text-center">
                <p className="text-primary font-bold text-lg">{c.label}</p>
                <p className="text-foreground font-semibold">{c.price}</p>
                <p className="text-muted-foreground text-xs">{c.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const PriceRow = ({ label, price, note }: { label: string; price: string; note?: string }) => (
  <div className="flex justify-between items-baseline">
    <span className="text-muted-foreground text-sm">{label}</span>
    <div className="text-right">
      <span className="text-foreground font-bold">{price}</span>
      {note && <span className="text-muted-foreground text-xs ml-1">/ {note}</span>}
    </div>
  </div>
);

export default PricingSection;
