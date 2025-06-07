import { cn } from "@/lib/utils"

interface SectionDividerProps {
  inverted?: boolean
  className?: string
}

export function SectionDivider({ inverted = false, className }: SectionDividerProps) {
  return <div className={cn("section-divider", inverted && "inverted", className)}></div>
}
