"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, MessageCircle, BookOpen } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const navItems = [
    { href: "/recipes", label: "Recipes" },
    { href: "/calculator", label: "Calculator" },
    { href: "/goals", label: "Goals" },
    { href: "/blog", label: "Blog" },
    { href: "/shop", label: "Shop" },
    { href: "/pricing", label: "Pricing" },
    { href: "/affiliate", label: "Affiliates", icon: <BookOpen className="h-4 w-4" /> },
    { href: "/chat", label: "AI Nutritionist", icon: <MessageCircle className="h-4 w-4" /> },
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-md fixed w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold">
              The Influencer&apos;s Plate
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink 
                key={item.href}
                href={item.href}
                isActive={isActive(item.href)}
              >
                {item.icon && <span className="mr-2">{item.icon}</span>}
                {item.label}
              </NavLink>
            ))}
            <Button asChild>
              <Link href="/signin">Sign In</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-gray-900"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <MobileNavLink
                  key={item.href}
                  href={item.href}
                  isActive={isActive(item.href)}
                >
                  {item.icon && <span className="mr-2">{item.icon}</span>}
                  {item.label}
                </MobileNavLink>
              ))}
              <Button asChild className="w-full mt-4">
                <Link href="/signin">Sign In</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

function NavLink({ href, children, isActive }: { href: string; children: React.ReactNode; isActive: boolean }) {
  return (
    <Link
      href={href}
      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center ${
        isActive 
          ? "text-primary bg-primary/10" 
          : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
      }`}
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ href, children, isActive }: { href: string; children: React.ReactNode; isActive: boolean }) {
  return (
    <Link
      href={href}
      className={`block px-3 py-2 rounded-md text-base font-medium flex items-center ${
        isActive 
          ? "text-primary bg-primary/10" 
          : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
      }`}
    >
      {children}
    </Link>
  );
}