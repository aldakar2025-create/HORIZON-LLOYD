import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";
import { Check } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] flex flex-col font-sans text-foreground selection:bg-primary selection:text-white">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <div className="bg-[#111] py-12 border-b border-white/10">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-white uppercase tracking-wider border-l-4 border-primary pl-4">
              About Us
            </h1>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8 text-gray-300 leading-relaxed">
              <div className="prose prose-invert max-w-none">
                <p className="font-medium text-lg text-white">
                  We are the world's leading testing, inspection and certification company.
                </p>
                <p>
                  We are recognized as the global benchmark for quality and integrity. Our employees operate a network to enable a better, safer and more interconnected world.
                </p>
                <p>
                  Wherever you are, whatever your industry, our experts worldwide provide specialized solutions to make your business faster, simpler and more efficient.
                </p>
                <p>
                  As a trusted <span className="text-white font-bold">HORIZON LLOYD</span> offers innovative solutions that go beyond simple compliance with regulations and standards, reducing risk, improving performance and promoting sustainable development.
                </p>
                <p>
                  We partner with you to offer independent services that will help you reduce risk, streamline your processes and operate in a more sustainable manner.
                </p>
                <p>
                  The equipment or lifting accessories are inspected several times during its life cycle, to confirm it is designed and operated efficiently and meet specified quality and safety standards.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-[#222] p-8 border-l-4 border-primary">
                <h3 className="text-xl font-heading font-bold text-white uppercase mb-4">Our Vision</h3>
                <p className="italic text-gray-400">
                  We aim to be the most competitive. Our core competencies in inspection, verification, testing and certification are being continuously improved to be best-in-class. They are at the heart of what we are. Our chosen markets will be solely determined by our ability to be the most competitive and to consistently deliver unequaled service to our customers.
                </p>
              </div>

              {/* Founder Info */}
              <div className="border border-white/10 p-6 bg-[#151515]">
                <h3 className="text-lg font-heading font-bold text-white uppercase mb-1">MOHAMED KAHLED</h3>
                <p className="text-sm text-primary font-bold uppercase tracking-wider mb-4">Founder of Horizon Lloyd</p>
                <div className="space-y-1 text-sm text-gray-400">
                  <p><span className="text-white font-bold mr-2">Address:</span> 19 King Faisal Street - Al-Haram - Giza</p>
                  <p><span className="text-white font-bold mr-2">Phone:</span> 01203085497</p>
                </div>
              </div>
            </div>

            {/* Sidebar / Lists */}
            <div className="lg:col-span-1 space-y-12">
              
              {/* Testing Methods */}
              <div>
                <SectionDivider title="Testing Methods" />
                <ul className="space-y-3 mt-6">
                  {[
                    "Thorough examination and certification of all lifting equipment and accessories",
                    "Non Destructive Testing (NDT)",
                    "Destructive Testing",
                    "Proof Load Testing",
                    "Witness of pressure testing",
                    "Wall Thickness verification and certification of Vessels, Tanks, silos etc."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-sm text-gray-300">
                      <Check className="h-4 w-4 text-primary mr-3 mt-1 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div>
                <SectionDivider title="Inspection Services" />
                <div className="mt-6 text-sm text-gray-400 mb-4">
                  HORIZON LLOYD Company offers the following inspection services with very high quality:
                </div>
                <div className="grid grid-cols-1 gap-y-2">
                  {[
                    "Electric Lifts", "Overhead Travel Cranes", "Wire Rope Sling", "Shackles",
                    "Chain blocks", "Chain slings", "Pad Eyes", "Hooks", "Eyebolts",
                    "Lifting Frames", "Lifting Spreader Beam", "Plate Clamp", "Runway Beams",
                    "Man Made Fibre Slings", "Single and Multi Sheave Blocks", "Jaw Winches (Tirfors)",
                    "Travelling Trolleys", "Crabs, Hoists and Winches", "Mobile Lifting Gantries 'A' Frame",
                    "Offshore Containers", "Man Baskets"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center text-sm text-gray-300 border-b border-white/5 pb-2 last:border-0">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
