"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MobileNav } from "./mobile-nav"

export function ImprovedHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setScrolled(scrollPosition > 50)

      // Update active section based on scroll position
      const sections = ["contact", "events", "ministries", "services", "about", "home"]

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#ministries", label: "Ministries" },
    { href: "#events", label: "Events" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-amber-100" : "bg-white/90 backdrop-blur-sm",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="#home" className="flex items-center space-x-3 group">
            <Image
              src="/klm-logo.png"
              alt="Kingdom of Light Ministries Logo"
              width={48}
              height={48}
              className={cn(
                "object-contain transition-all duration-300 group-hover:scale-110",
                scrolled ? "h-10 w-10" : "h-12 w-12",
              )}
            />
            <div>
              <h1
                className={cn(
                  "font-bold text-gray-900 transition-all duration-300 group-hover:text-amber-600",
                  scrolled ? "text-lg" : "text-xl",
                )}
              >
                Kingdom of Light Ministries
              </h1>
              <p className="text-xs text-amber-600 font-medium">Spreading God's Light and Love</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative py-2 px-1 font-medium transition-all duration-300 hover:text-amber-600",
                  activeSection === item.href.slice(1) ? "text-amber-600" : "text-gray-700",
                )}
              >
                {item.label}
                {activeSection === item.href.slice(1) && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-500 rounded-full transition-all duration-300"></span>
                )}
              </Link>
            ))}
            <Button className="btn-primary ml-4">Visit Us</Button>
          </nav>

          {/* Mobile Navigation */}
          <MobileNav />
        </div>
      </div>
    </header>
  )
}
