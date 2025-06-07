import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  title: string
  subtitle: string
  centered?: boolean
  className?: string
  accent?: boolean
}

export function SectionHeader({ title, subtitle, centered = true, className, accent = false }: SectionHeaderProps) {
  return (
    <div className={cn("mb-16", centered && "text-center", className)}>
      <h2
        className={cn(
          "text-3xl md:text-4xl lg:text-5xl font-bold mb-6 relative inline-block",
          accent && "gradient-text",
        )}
      >
        {title}
        <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full"></span>
      </h2>
      <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">{subtitle}</p>
    </div>
  )
}
