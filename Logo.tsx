import logo from "@assets/logo4-1_1765445532166.png";

export default function Logo() {
  return (
    <div className="flex flex-col items-center justify-center py-4 bg-[#111]">
      <img src={logo} alt="Horizon Lloyd" className="h-16 md:h-20 w-auto object-contain" />
    </div>
  );
}
