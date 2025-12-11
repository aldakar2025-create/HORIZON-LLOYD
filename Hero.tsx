import towers from "@assets/AlameinTowers-02-850x560_(1)_1765445342431.jpg";
import shackles from "@assets/051_Green-Pin-Shackles-1_1765445342429.jpg";
import workers from "@assets/STC_LiftingEquipment-1_1765445342434.jpg";

export default function Hero() {
  const items = [
    {
      image: towers,
      title: "LAST PROJECTS",
      date: "August 31, 2023"
    },
    {
      image: shackles,
      title: "LIFTING EQUIPMENT ENGINEERS ASSOCIATION",
      date: "August 16, 2023"
    },
    {
      image: workers,
      title: "LIFTING EQUIPMENT ENGINEERS ASSOCIATION",
      date: "August 16, 2023"
    }
  ];

  return (
    <section className="w-full bg-[#111] border-b border-[#222]">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {items.map((item, idx) => (
          <div key={idx} className="relative aspect-[16/10] group overflow-hidden cursor-pointer border-r border-[#111] last:border-r-0">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url(${item.image})` }}
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent opacity-90" />
            
            {/* Content */}
            <div className="absolute bottom-0 left-0 w-full p-6">
              <h3 className="text-white font-heading font-bold text-[15px] leading-tight mb-2 uppercase group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <div className="flex items-center text-[10px] text-gray-400 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-white mr-2"></span>
                {item.date}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
