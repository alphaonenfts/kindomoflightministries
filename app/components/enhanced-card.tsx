"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface EnhancedCardProps {
  title: string
  icon: React.ReactNode
  children: React.ReactNode
  className?: string
  variant?: "default" | "ministry" | "service"
}

export function EnhancedCard({ title, icon, children, className, variant = "default" }: EnhancedCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const getVariantClasses = () => {
    switch (variant) {
      case "ministry":
        return "border-amber-200 hover:border-amber-300 hover:shadow-amber-100/50"
      case "service":
        return "border-gray-200 hover:border-amber-300 hover:shadow-lg"
      default:
        return "border-amber-200 hover:border-amber-300 hover:shadow-amber-100/50"
    }
  }

  return (
    <Card
      className={cn(
        "transition-all duration-300 cursor-pointer group",
        getVariantClasses(),
        isHovered && "shadow-xl transform -translate-y-2",
        className,
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center space-x-3">
          <div
            className={cn(
              "text-amber-600 transition-all duration-300 group-hover:scale-110",
              isHovered && "animate-float",
            )}
          >
            {icon}
          </div>
          <span className="group-hover:text-amber-700 transition-colors">{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">{children}</CardContent>
    </Card>
  )
}
