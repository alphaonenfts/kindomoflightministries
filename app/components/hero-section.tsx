"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface HeroSectionProps {
  title: string
  subtitle: string
  primaryButtonText: string
  secondaryButtonText: string
}

export function HeroSection({ title, subtitle, primaryButtonText, secondaryButtonText }: HeroSectionProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white overflow-hidden min-h-screen flex items-center"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        {/* Light rays */}
        <div
          className={cn(
            "absolute top-0 left-1/4 w-1/2 h-full bg-gradient-to-r from-transparent via-amber-500/20 to-transparent rotate-45 transform -translate-x-full",
            isLoaded && "animate-[ray-move_8s_ease-in-out_infinite]",
          )}
        ></div>
        <div
          className={cn(
            "absolute top-0 right-1/4 w-1/3 h-full bg-gradient-to-r from-transparent via-amber-400/15 to-transparent -rotate-45 transform translate-x-full",
            isLoaded && "animate-[ray-move_12s_ease-in-out_infinite_2s]",
          )}
        ></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-5xl mx-auto text-center">
          <h1
            className={cn(
              "text-4xl md:text-6xl lg:text-7xl font-bold mb-8 opacity-0 text-shadow",
              isLoaded && "animate-[fade-in-up_1s_forwards_0.3s]",
            )}
          >
            <span className="block">Welcome to</span>
            <span className="block gradient-text">Kingdom of Light</span>
            <span className="block">Ministries</span>
          </h1>

          <p
            className={cn(
              "text-xl md:text-2xl lg:text-3xl mb-12 text-amber-100 opacity-0 leading-relaxed",
              isLoaded && "animate-[fade-in-up_1s_forwards_0.6s]",
            )}
          >
            {subtitle}
          </p>

          <div
            className={cn(
              "flex flex-col sm:flex-row gap-6 justify-center opacity-0",
              isLoaded && "animate-[fade-in-up_1s_forwards_0.9s]",
            )}
          >
            <Button size="lg" className="btn-primary text-lg px-8 py-4 animate-glow">
              {primaryButtonText}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-800 transition-all hover:scale-105 text-lg px-8 py-4"
            >
              {secondaryButtonText}
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
