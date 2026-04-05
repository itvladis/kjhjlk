import photoAlisa from "@/assets/photo-alisa.webp";
import photoYoga from "@/assets/photo-yoga.webp";
import photoBand from "@/assets/photo-band.webp";
import photoKangoo from "@/assets/photo-kangoo.webp";
import photoDumbbells from "@/assets/photo-dumbbells.webp";
import photoStretch from "@/assets/photo-stretch.webp";
import photoBoots from "@/assets/photo-boots.jpg";

const images = [
  { src: photoAlisa, alt: "Kangoo Jumps тренировка" },
  { src: photoYoga, alt: "Йога на свежем воздухе" },
  { src: photoBand, alt: "Тренировка с резинкой" },
  { src: photoKangoo, alt: "Оборудование Kangoo Jumps" },
  { src: photoDumbbells, alt: "Гантели для тренировок" },
  { src: photoStretch, alt: "Растяжка" },
  { src: photoBoots, alt: "Ботинки Kangoo Jumps" },
];

const GallerySection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-12 uppercase">
          <span className="gradient-text">Галерея</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className={`overflow-hidden rounded-xl border border-border ${
                i === 0 ? "row-span-2" : ""
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
