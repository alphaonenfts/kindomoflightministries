"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#ministries", label: "Ministries" },
    { href: "#events", label: "Events" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white">
        <div className="flex flex-col gap-6 pt-6">
          <div className="flex items-center gap-3">
            <Image
              src="/klm-logo.png"
              alt="Kingdom of Light Ministries Logo"
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
            />
            <div>
              <h3 className="font-bold text-lg">Kingdom of Light Ministries</h3>
              <p className="text-xs text-amber-600">Spreading God's Light and Love</p>
            </div>
          </div>
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-2 py-3 text-lg hover:text-amber-600 transition-colors border-b border-gray-100 hover:border-amber-200"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button className="mt-4 bg-amber-600 hover:bg-amber-700 text-white">Visit Us</Button>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  )
}
