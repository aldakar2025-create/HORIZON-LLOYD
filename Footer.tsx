export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[11px] text-gray-500 uppercase tracking-wider">
          © 2023 Horizon Lloyd. All rights reserved.
        </p>
        <div className="flex gap-4">
           <a href="#" className="text-[11px] text-gray-500 hover:text-primary transition-colors uppercase">Privacy Policy</a>
           <a href="#" className="text-[11px] text-gray-500 hover:text-primary transition-colors uppercase">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
}
