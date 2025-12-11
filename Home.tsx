import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SectionDivider from "@/components/SectionDivider";
import Footer from "@/components/Footer";
import { ChevronRight } from "lucide-react";

// Asset Imports
import towers from "@assets/AlameinTowers-02-850x560_(1)_1765445342431.jpg";
import shackles from "@assets/051_Green-Pin-Shackles-1_1765445342429.jpg";
import workers from "@assets/STC_LiftingEquipment-1_1765445342434.jpg";
import overhead from "@assets/OVERHEAD-2_(1)_1765445342433.jpg";
import pipes from "@assets/EG-NCPP-00065-1100x600-2-850x560_1765445342432.jpg";
import iso9001 from "@assets/ISOOOO-850x560_1765445342432.png";
import iso14001 from "@assets/14001-700x560_1765445342430.jpg";
import ohsas18001 from "@assets/18001-800x560_1765445342430.jpg";
import leea from "@assets/LEEA_1765445342433.png";
import workerPortrait from "@assets/30173604-asian-male-worker-wearing-a-hardhat-smiling-and-looki_1765445342431.jpg";
import redBags from "@assets/d6af160d-2c03-4ff3-88a1-aa6643f8f487_1765445342432.jpg";

export default function Home() {
  
  const newsItems = [
    {
      title: "HORIZON LLOYD",
      date: "April 24, 2023",
      image: overhead,
      excerpt: "We are the world's leading testing, inspection and certification company. We are recognized as the global benchmark for quality."
    },
    {
      title: "JOB ENROLLMENT",
      date: "July 14, 2023",
      image: workerPortrait, 
      mini: true
    },
    {
      title: "ABOUT US",
      date: "October 26, 2022",
      image: redBags,
      mini: true
    }
  ];

  return (
    <div className="min-h-screen bg-[#1a1a1a] flex flex-col font-sans text-foreground selection:bg-primary selection:text-white">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Main Content Area */}
        <div className="w-full bg-[#1a1a1a] border-t border-black">
          <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              
              {/* Left Column: Services & What's News */}
              <div className="lg:col-span-2 space-y-8">
                 {/* Services Header */}
                 <div className="mb-4">
                    <h3 className="flex items-center text-[13px] font-bold uppercase text-white mb-4 before:content-[''] before:w-1.5 before:h-1.5 before:bg-white before:mr-2 before:rotate-45">
                      SERVICES
                    </h3>
                 </div>

                 {/* What's News Header */}
                 <div>
                    <h3 className="flex items-center text-[13px] font-bold uppercase text-white mb-4 before:content-[''] before:w-1.5 before:h-1.5 before:bg-white before:mr-2 before:rotate-45">
                      WHAT'S NEWS
                    </h3>
                    
                    <div className="bg-[#222] p-0 mb-4 group cursor-pointer hover:bg-[#2a2a2a] transition-colors flex gap-4">
                      <div className="w-48 h-32 shrink-0 overflow-hidden">
                         <img src={overhead} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                      </div>
                      <div className="py-2 pr-2">
                        <h4 className="font-heading font-bold text-white text-[15px] mb-2 uppercase group-hover:text-primary transition-colors">HORIZON LLOYD</h4>
                        <p className="text-[10px] text-gray-400 mb-2 flex items-center">
                           <span className="w-1 h-1 bg-gray-500 rounded-full mr-2"></span>
                           April 24, 2023
                        </p>
                        <p className="text-[11px] text-gray-300 leading-relaxed line-clamp-3">
                          We are the world's leading testing, inspection and certification company. We are recognized as the global benchmark for quality.
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {newsItems.slice(1).map((item, i) => (
                          <div key={i} className="flex bg-[#222] p-0 hover:bg-[#2a2a2a] transition-colors cursor-pointer group">
                            <div className="w-20 h-20 shrink-0 overflow-hidden">
                              <img src={item.image} className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <div className="flex flex-col justify-center p-3">
                              <span className="text-[9px] font-bold text-gray-500 uppercase mb-1">CLIENTS</span>
                              <h5 className="font-bold text-[11px] text-white uppercase group-hover:text-primary transition-colors leading-tight mb-1">{item.title}</h5>
                              <span className="text-[9px] text-gray-500">{item.date}</span>
                            </div>
                          </div>
                      ))}
                    </div>
                 </div>
              </div>

              {/* Middle/Right Column: Most Read */}
              <div className="lg:col-span-2">
                  <div className="border-t-[3px] border-primary mb-6">
                    <span className="bg-primary text-white text-[10px] font-bold px-3 py-1 uppercase inline-block">Most Read</span>
                  </div>
                  
                  {/* Large Featured Card */}
                  <div className="relative aspect-[16/9] w-full group overflow-hidden cursor-pointer mb-4">
                     <img src={workers} className="w-full h-full object-cover brightness-[0.8] group-hover:brightness-100 transition-all duration-500" />
                     
                     <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>

                     <div className="absolute bottom-0 left-0 w-full p-6">
                        <div className="mb-2">
                           <span className="bg-primary text-white text-[9px] font-bold px-1.5 py-0.5 uppercase">Lifting</span>
                        </div>
                        <h3 className="text-lg md:text-xl font-heading font-bold text-white mb-2 uppercase group-hover:text-primary transition-colors leading-tight">
                           LIFTING EQUIPMENT ENGINEERS ASSOCIATION
                        </h3>
                        <div className="flex justify-between items-center border-t border-white/20 pt-2">
                          <span className="text-[10px] text-gray-400 flex items-center">
                             <span className="w-1 h-1 bg-white rounded-full mr-2"></span>
                             August 16, 2023
                          </span>
                        </div>
                     </div>
                     
                     {/* Nav Arrows Overlay */}
                     <div className="absolute top-1/2 left-0 w-full flex justify-between px-2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                       <div className="w-8 h-8 bg-primary flex items-center justify-center text-white cursor-pointer hover:bg-white hover:text-black transition-colors">
                         <ChevronRight className="h-4 w-4 rotate-180" />
                       </div>
                       <div className="w-8 h-8 bg-primary flex items-center justify-center text-white cursor-pointer hover:bg-white hover:text-black transition-colors">
                         <ChevronRight className="h-4 w-4" />
                       </div>
                     </div>
                  </div>

                  {/* Two Smaller Cards Below */}
                  <div className="grid grid-cols-2 gap-4">
                     <div className="bg-[#222] aspect-[16/9] relative group cursor-pointer overflow-hidden">
                        <img src={towers} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 p-3 border-l-2 border-primary">
                           <h5 className="text-[10px] font-bold text-white uppercase truncate">LAST PROJECTS</h5>
                        </div>
                     </div>
                     <div className="bg-[#222] aspect-[16/9] relative group cursor-pointer overflow-hidden">
                        <img src={shackles} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
                         <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 p-3 border-l-2 border-primary">
                           <h5 className="text-[10px] font-bold text-white uppercase truncate">HORIZON LLOYD</h5>
                        </div>
                     </div>
                  </div>
              </div>

            </div>
          </div>
        </div>

        {/* Certificates Section */}
        <SectionDivider title="CERTIFICATES" />
        
        <div className="w-full bg-[#1a1a1a] pb-12">
           <div className="container mx-auto px-4">
              
              {/* Projects Card inside Certificates section per screenshot */}
              <div className="mt-8 mb-4">
                 <h3 className="flex items-center text-[13px] font-bold uppercase text-white mb-8 before:content-[''] before:w-1.5 before:h-1.5 before:bg-white before:mr-2 before:rotate-45">
                   PROJECTS
                 </h3>
                 <div className="w-full max-w-[300px]">
                    <div className="bg-[#222] p-0 group cursor-pointer border border-[#333]">
                       <div className="aspect-[4/3] overflow-hidden">
                          <img src={towers} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                       </div>
                       <div className="p-4 bg-[#1a1a1a]">
                          <h4 className="text-white font-heading font-bold uppercase text-[11px] mb-1">LAST PROJECTS</h4>
                          <span className="block w-4 h-0.5 bg-primary"></span>
                       </div>
                    </div>
                 </div>
              </div>

              <div className="mt-8">
                 <h3 className="flex items-center text-[13px] font-bold uppercase text-white mb-4 before:content-[''] before:w-1.5 before:h-1.5 before:bg-white before:mr-2 before:rotate-45">
                   CAREER
                 </h3>
              </div>

           </div>
        </div>

        {/* Clients Section - Black divider */}
        <div className="relative w-full flex justify-center items-center my-12">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10"></div>
            </div>
            <div className="relative z-10 bg-black px-8 py-2 shadow-lg border-y border-white/10">
              <h2 className="text-white font-heading font-bold uppercase tracking-wider text-sm md:text-base">
                CLIENTS
              </h2>
            </div>
        </div>

         <div className="container mx-auto px-4 pb-12 bg-[#1a1a1a]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
               
               {/* OHSAS 18001 */}
               <div className="aspect-[16/9] bg-white overflow-hidden group cursor-pointer relative flex items-center justify-center p-2">
                  <img src={ohsas18001} className="w-full h-full object-contain" />
                   <div className="absolute bottom-2 left-2 right-2 text-[8px] font-bold text-white uppercase drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] leading-tight text-center">OCCUPATIONAL HEALTH & SAFETY MANAGEMENT SYSTEM STANDARDS</div>
               </div>
               
               {/* ISO 14001 */}
               <div className="aspect-[16/9] bg-white overflow-hidden group cursor-pointer relative flex items-center justify-center p-2">
                  <img src={iso14001} className="w-full h-full object-contain" />
                   <div className="absolute bottom-2 left-2 right-2 text-[8px] font-bold text-white uppercase drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] text-center">ENVIRONMENTAL MANAGEMENT SYSTEM</div>
               </div>
               
               {/* LEEA */}
               <div className="aspect-[16/9] bg-[#003399] overflow-hidden group cursor-pointer relative flex items-center justify-center">
                  <img src={leea} className="w-full h-full object-cover" />
                   <div className="absolute bottom-2 left-2 right-2 text-[8px] font-bold text-white uppercase drop-shadow-md text-center">LIFTING EQUIPMENT ENGINEERS ASSOCIATION</div>
               </div>

               {/* Job Enrollment */}
               <div className="aspect-[16/9] bg-white overflow-hidden group cursor-pointer relative flex items-center justify-center">
                  <img src={workerPortrait} className="w-full h-full object-cover" />
                  <div className="absolute bottom-2 left-2 text-[8px] font-bold text-white uppercase drop-shadow-md bg-black/50 px-1">JOB ENROLLMENT</div>
               </div>

            </div>
         </div>

      </main>

      <Footer />
    </div>
  );
}
