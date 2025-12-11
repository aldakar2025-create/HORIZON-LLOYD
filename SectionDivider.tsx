interface SectionDividerProps {
  title: string;
}

export default function SectionDivider({ title }: SectionDividerProps) {
  return (
    <div className="relative w-full flex justify-center items-center my-12">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-white/10"></div>
      </div>
      <div className="relative z-10 bg-primary px-8 py-2 shadow-lg">
        <h2 className="text-white font-heading font-bold uppercase tracking-wider text-sm md:text-base">
          {title}
        </h2>
      </div>
    </div>
  );
}
