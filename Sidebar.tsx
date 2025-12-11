import { Facebook, Twitter, Instagram, Youtube, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import ArticleCard from "./ArticleCard";
import dataStream from "@assets/generated_images/abstract_digital_data_stream_background.png";
import gamingSetup from "@assets/generated_images/high_tech_gaming_setup_with_rgb_lighting.png";

export default function Sidebar() {
  const trendingPosts = [
    {
      title: "The RTX 5090 Leaks: What We Know So Far",
      date: "Oct 12, 2025"
    },
    {
      title: "Why Cyberpunk 2077 is Finally The Game We Wanted",
      date: "Oct 10, 2025"
    },
    {
      title: "Top 10 Mechanical Keyboards for Programming",
      date: "Oct 08, 2025"
    },
    {
      title: "AI in Gaming: NPC Revolution Incoming",
      date: "Oct 05, 2025"
    }
  ];

  const categories = [
    { name: "Hardware", count: 42 },
    { name: "Gaming", count: 128 },
    { name: "Software", count: 64 },
    { name: "Reviews", count: 25 },
    { name: "Guides", count: 18 },
  ];

  return (
    <aside className="space-y-8">
      
      {/* Social Widget */}
      <div className="bg-card border border-border p-6 rounded-sm">
        <h3 className="text-lg font-heading font-bold uppercase border-l-4 border-primary pl-3 mb-6">
          Stay Connected
        </h3>
        <div className="grid grid-cols-2 gap-3">
          <Button className="w-full justify-start bg-[#3b5998] hover:bg-[#3b5998]/90 text-white rounded-sm h-10">
            <Facebook className="mr-2 h-4 w-4" /> Facebook
          </Button>
          <Button className="w-full justify-start bg-[#1DA1F2] hover:bg-[#1DA1F2]/90 text-white rounded-sm h-10">
            <Twitter className="mr-2 h-4 w-4" /> Twitter
          </Button>
          <Button className="w-full justify-start bg-[#C13584] hover:bg-[#C13584]/90 text-white rounded-sm h-10">
            <Instagram className="mr-2 h-4 w-4" /> Instagram
          </Button>
          <Button className="w-full justify-start bg-[#FF0000] hover:bg-[#FF0000]/90 text-white rounded-sm h-10">
            <Youtube className="mr-2 h-4 w-4" /> Youtube
          </Button>
        </div>
      </div>

      {/* Trending Posts */}
      <div className="bg-card border border-border p-6 rounded-sm">
        <h3 className="text-lg font-heading font-bold uppercase border-l-4 border-primary pl-3 mb-6 flex items-center justify-between">
          <span>Trending</span>
          <TrendingUp className="h-4 w-4 text-primary" />
        </h3>
        <div className="flex flex-col gap-6">
          {trendingPosts.map((post, idx) => (
            <div key={idx} className="flex gap-4 group cursor-pointer">
              <div className="text-4xl font-heading font-black text-border group-hover:text-primary/50 transition-colors leading-none -mt-1">
                {idx + 1}
              </div>
              <div className="flex flex-col">
                <h4 className="text-sm font-bold font-heading leading-tight group-hover:text-primary transition-colors mb-1">
                  {post.title}
                </h4>
                <span className="text-xs text-muted-foreground">{post.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="bg-card border border-border p-6 rounded-sm">
        <h3 className="text-lg font-heading font-bold uppercase border-l-4 border-primary pl-3 mb-6">
          Categories
        </h3>
        <div className="flex flex-col gap-2">
          {categories.map((cat) => (
            <div key={cat.name} className="flex justify-between items-center py-2 border-b border-border/50 last:border-0 group cursor-pointer">
              <span className="text-sm font-medium group-hover:text-primary transition-colors flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"/>
                {cat.name}
              </span>
              <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                {cat.count}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Ad / Promo Space */}
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm group cursor-pointer">
        <img 
          src={dataStream} 
          alt="Ad" 
          className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center border-2 border-primary/20 m-2">
          <span className="text-primary font-bold tracking-widest uppercase text-xs mb-2">Advertisement</span>
          <h4 className="text-2xl font-heading font-black text-white mb-4">
            JOIN THE FUTURE
          </h4>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white uppercase font-bold text-xs">
            Learn More
          </Button>
        </div>
      </div>

    </aside>
  );
}
