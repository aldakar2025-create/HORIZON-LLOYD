import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Search, Menu, X, Facebook, Twitter, Linkedin, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Logo from "./Logo";

export default function Navbar() {
  const [location] = useLocation();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "CAREER", href: "/career" },
    { name: "CLIENTS", href: "/clients" },
    { name: "PROJECTS", href: "/projects" },
    { name: "SERVICES", href: "/services" },
    { name: "CERTIFICATES", href: "/certificates" },
    { name: "ABOUT US", href: "/about" },
  ];

  return (
    <header className="flex flex-col w-full">
      {/* Top Logo Area */}
      <div className="w-full bg-[#111] border-b border-white/5 hidden md:block">
        <Logo />
      </div>

      {/* Main Navigation Bar - Red Background */}
      <nav className="sticky top-0 z-50 w-full bg-primary text-white shadow-md">
        <div className="container mx-auto px-4 h-12 flex items-center justify-between">
          
          {/* Mobile Menu Trigger */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] bg-[#111] border-r border-white/10 p-0 text-white">
              <div className="p-6 border-b border-white/10">
                <Logo />
              </div>
              <div className="flex flex-col">
                {navLinks.map((link) => (
                  <Link key={link.name} href={link.href}>
                    <a className={`px-6 py-4 text-sm font-bold border-b border-white/5 hover:bg-primary transition-colors ${location === link.href ? 'bg-primary' : ''}`}>
                      {link.name}
                    </a>
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center h-full">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                <a className={`h-full flex items-center px-4 text-[13px] font-bold tracking-wide hover:bg-black/20 transition-colors border-r border-white/10 first:border-l ${location === link.href ? 'bg-black/20' : ''}`}>
                  {link.name}
                </a>
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center h-full border-l border-white/10 pl-2">
            <div className="hidden md:flex items-center gap-1">
              <a href="#" className="p-2 hover:bg-black/10 transition-colors"><Facebook className="h-3.5 w-3.5" /></a>
              <a href="#" className="p-2 hover:bg-black/10 transition-colors"><Twitter className="h-3.5 w-3.5" /></a>
              <a href="#" className="p-2 hover:bg-black/10 transition-colors"><Linkedin className="h-3.5 w-3.5" /></a>
              <a href="#" className="p-2 hover:bg-black/10 transition-colors"><Youtube className="h-3.5 w-3.5" /></a>
            </div>
            <div className="w-[1px] h-6 bg-white/20 mx-2 hidden md:block"></div>
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-white hover:bg-black/10 h-full w-10 rounded-none"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}
