import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Logo from "@/components/Logo";

interface PlaceholderPageProps {
  title?: string;
}

export default function PlaceholderPage({ title }: PlaceholderPageProps) {
  return (
    <div className="min-h-screen bg-[#1a1a1a] flex flex-col font-sans text-foreground selection:bg-primary selection:text-white">
      <Navbar />
      
      <main className="flex-grow flex flex-col items-center justify-center min-h-[60vh] bg-[#1a1a1a] border-t border-black">
        <div className="flex flex-col items-center gap-8 animate-in fade-in zoom-in duration-500">
          <div className="scale-150 transform">
            <Logo />
          </div>
          <h1 className="text-3xl md:text-5xl font-heading font-bold text-white uppercase tracking-widest text-center">
            {title || "Under Construction"}
          </h1>
          <div className="h-1 w-24 bg-primary"></div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
