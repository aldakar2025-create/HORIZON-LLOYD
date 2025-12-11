import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRight, Calendar, User, Folder } from "lucide-react";

// Asset Imports
import iso9001 from "@assets/ISOOOO-850x560_1765445342432.png";
import iso14001 from "@assets/14001-700x560_1765445342430.jpg";
import ohsas18001 from "@assets/18001-800x560_1765445342430.jpg";
import leea from "@assets/LEEA_1765445342433.png";
import workerPortrait from "@assets/30173604-asian-male-worker-wearing-a-hardhat-smiling-and-looki_1765445342431.jpg";

export default function Certificates() {
  
  const posts = [
    {
      title: "LIFTING EQUIPMENT ENGINEERS ASSOCIATION",
      categories: ["Certificates", "Special"],
      image: leea,
      excerpt: "HORIZON LLOYD COMPANY IS A QUALIFIED COMPANY HAVE A QUALIFIED TEAM OF INSPECTORS. ( LEEA CERTIFIED",
    },
    {
      title: "QUALITY MANAGEMENT SYSTEM",
      categories: ["Certificates", "Special"],
      image: iso9001,
      excerpt: "ISO 9001 CERTIFIED.",
    },
    {
      title: "OCCUPATIONAL HEALTH & SAFETY MANAGEMENT SYSTEM STANDARDS",
      categories: ["Certificates", "Clients", "Special"],
      image: ohsas18001,
      excerpt: "ISO 45001:2018",
    },
    {
      title: "ENVIROMENTAL MANAGEMENT SYSTEM",
      categories: ["Certificates", "Clients", "Special"],
      image: iso14001,
      excerpt: "ISO 14001",
    },
    {
      title: "LIFTING EQUIPMENT ENGINEERS ASSOCIATION",
      categories: ["Certificates", "Clients", "Special"],
      image: leea,
      excerpt: "HORIZON LLOYD I guarantees the safe and efficient functioning of your equipment by detecting defects",
    },
    {
      title: "JOB ENROLLMENT",
      categories: ["Career", "Certificates", "Clients", "News", "Special", "Uncategorized"],
      image: workerPortrait,
      excerpt: "FOR JOBS ENROLLMENT CONTAC US AT: sales@horizoneg.com",
    }
  ];

  return (
    <div className="min-h-screen bg-[#1a1a1a] flex flex-col font-sans text-foreground selection:bg-primary selection:text-white">
      <Navbar />
      
      <main className="flex-grow">
        
        {/* Page Title */}
        <div className="bg-[#111] border-b border-white/10 py-8">
           <div className="container mx-auto px-4">
              <div className="flex items-center gap-2 text-xs text-gray-500 mb-2 uppercase">
                <span>Home</span>
                <ChevronRight className="h-3 w-3" />
                <span>Certificates</span>
              </div>
              <h1 className="text-3xl font-heading font-bold text-white uppercase border-l-4 border-primary pl-4">
                Category : Certificates
              </h1>
           </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Main Content Area */}
            <div className="lg:col-span-2">
              
              {/* Feature Post */}
              <div className="mb-12 border-b border-white/10 pb-12">
                <div className="relative aspect-video w-full overflow-hidden mb-6 bg-white flex items-center justify-center p-8">
                   <img src={leea} className="max-h-full w-auto object-contain" alt="LEEA Featured" />
                   <Badge className="absolute top-4 left-4 bg-primary hover:bg-primary/90 text-white border-none rounded-none text-xs uppercase">
                      Feature post
                   </Badge>
                </div>
                
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {["Certificates", "Services", "Special", "Uncategorized"].map(cat => (
                      <span key={cat} className="text-[10px] uppercase font-bold text-primary border border-primary/30 px-2 py-0.5">
                        {cat}
                      </span>
                    ))}
                  </div>
                  
                  <h2 className="text-2xl font-heading font-bold text-white uppercase leading-tight">
                    LIFTING EQUIPMENT ENGINEERS ASSOCIATION
                  </h2>
                  
                  <div className="prose prose-invert max-w-none text-gray-400 text-sm leading-relaxed">
                    <p>
                      LIFTING GEARS TEST AND INSPECTION ACCORDING TO BRITISH STANDARD AND LEEA ACADEMY. 
                      LIFTING GEARS INSPECTION AND TESTING. Snatch Block Test And Inspection. 
                      Chain Block Test And Inspection. Chain Lever Block Test And Inspection. 
                      Hooks Test And Inspection. Webbing Sling Test And Inspection. Shackles Test And Inspection.
                    </p>
                  </div>
                </div>
              </div>

              {/* Post Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {posts.map((post, idx) => (
                  <div key={idx} className="bg-[#222] border border-white/5 group hover:border-primary/50 transition-colors flex flex-col h-full">
                    <div className="aspect-[16/10] overflow-hidden bg-white p-4 flex items-center justify-center relative">
                      <img src={post.image} className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105" alt={post.title} />
                      <div className="absolute top-0 left-0 w-full h-full bg-black/5 group-hover:bg-transparent transition-colors"></div>
                    </div>
                    
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex flex-wrap gap-1 mb-3">
                        {post.categories.slice(0, 3).map(cat => (
                          <span key={cat} className="text-[9px] uppercase font-bold text-gray-500 hover:text-primary cursor-pointer">
                            {cat}
                            {cat !== post.categories[post.categories.length-1] && <span className="text-gray-700 mx-1">/</span>}
                          </span>
                        ))}
                      </div>
                      
                      <h3 className="text-lg font-heading font-bold text-white uppercase leading-tight mb-3 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      
                      <p className="text-sm text-gray-400 mb-6 line-clamp-3 flex-grow">
                        {post.excerpt}
                      </p>
                      
                      <Button variant="outline" size="sm" className="w-fit rounded-none border-primary text-primary hover:bg-primary hover:text-white uppercase text-xs font-bold tracking-wider">
                        Read More
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* Right Sidebar (Matching Home Sidebar Style) */}
            <div className="lg:col-span-1 border-l border-white/10 pl-8 hidden lg:block">
              <div className="space-y-8 sticky top-24">
                
                {/* Search Widget */}
                <div className="bg-[#222] p-6">
                  <h3 className="text-sm font-bold text-white uppercase mb-4 border-l-2 border-primary pl-3">Search</h3>
                  <div className="flex">
                    <input type="text" placeholder="Search..." className="w-full bg-[#1a1a1a] border border-white/10 px-3 py-2 text-sm text-white focus:outline-none focus:border-primary" />
                    <button className="bg-primary px-3 text-white">
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                {/* Categories Widget */}
                <div className="bg-[#222] p-6">
                  <h3 className="text-sm font-bold text-white uppercase mb-4 border-l-2 border-primary pl-3">Categories</h3>
                  <ul className="space-y-2">
                    {["Certificates", "Career", "Clients", "News", "Projects", "Services", "Special", "Uncategorized"].map(cat => (
                      <li key={cat} className="flex justify-between items-center text-sm text-gray-400 hover:text-primary cursor-pointer border-b border-white/5 pb-2 last:border-0">
                        <span>{cat}</span>
                        <ChevronRight className="h-3 w-3" />
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Recent Posts Widget */}
                <div className="bg-[#222] p-6">
                  <h3 className="text-sm font-bold text-white uppercase mb-4 border-l-2 border-primary pl-3">Recent Posts</h3>
                  <div className="space-y-4">
                    {posts.slice(0, 3).map((post, idx) => (
                      <div key={idx} className="flex gap-3 group cursor-pointer">
                        <div className="w-16 h-16 bg-white shrink-0 p-1 flex items-center justify-center">
                          <img src={post.image} className="max-w-full max-h-full object-contain" />
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-white uppercase group-hover:text-primary transition-colors line-clamp-2 leading-tight mb-1">
                            {post.title}
                          </h4>
                          <span className="text-[10px] text-gray-500">August 21, 2022</span>
                        </div>
                      </div>
                    ))}
                  </div>
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
