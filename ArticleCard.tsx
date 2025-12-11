import { Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ArticleCardProps {
  image: string;
  category: string;
  title: string;
  date: string;
  author: string;
  excerpt?: string;
  size?: "small" | "medium" | "large";
}

export default function ArticleCard({ 
  image, 
  category, 
  title, 
  date, 
  author,
  excerpt,
  size = "medium" 
}: ArticleCardProps) {
  
  if (size === "small") {
    return (
      <div className="flex gap-4 group cursor-pointer mb-6">
        <div className="w-24 h-24 shrink-0 overflow-hidden rounded-sm">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h4 className="text-sm font-heading font-bold leading-snug group-hover:text-primary transition-colors line-clamp-2 mb-2">
            {title}
          </h4>
          <div className="flex items-center text-xs text-muted-foreground">
            <Clock className="h-3 w-3 mr-1" />
            {date}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="group cursor-pointer flex flex-col h-full bg-card border border-border/50 rounded-sm overflow-hidden hover:border-primary/50 transition-colors">
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <Badge className="bg-primary hover:bg-primary text-white border-none rounded-none px-2 py-1 uppercase text-xs font-bold shadow-lg">
            {category}
          </Badge>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center text-xs text-muted-foreground mb-3 font-medium uppercase tracking-wide">
          <span className="text-primary mr-2">{author}</span>
          <span>•</span>
          <span className="ml-2">{date}</span>
        </div>
        
        <h3 className="text-xl md:text-2xl font-heading font-bold leading-tight mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        {excerpt && (
          <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed mb-4">
            {excerpt}
          </p>
        )}
        
        <div className="mt-auto pt-4 border-t border-border/50">
           <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground group-hover:text-foreground transition-colors">
             Read More
           </span>
        </div>
      </div>
    </div>
  );
}
