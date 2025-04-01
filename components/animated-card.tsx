"use client"

import type React from "react"

import { useState } from "react"
import { ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

interface AnimatedCardProps {
  company: {
    name: string
    description: string
    image: string
    slug: string
  }
}

export function AnimatedCard({ company }: AnimatedCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)
  const [isFlipping, setIsFlipping] = useState(false)

  const handleFlip = (e: React.MouseEvent) => {
    e.preventDefault()
    if (!isFlipping) {
      setIsFlipping(true)
      setIsFlipped(true)

      // After flip animation completes, navigate to the company page
      setTimeout(() => {
        // window.location.href = `/companies/${company.slug}`
        window.location.href = `/${company.slug}`

      }, 800)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="relative h-[320px] perspective-1000"
    >
      <div
        className={`relative w-full h-full transition-all duration-800 preserve-3d ${isFlipped ? "rotate-y-180" : ""}`}
        style={{
          transformStyle: "preserve-3d",
          transition: "transform 0.8s",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front of card */}
        <div
          className="absolute w-full h-full backface-hidden border rounded-lg bg-background p-2 overflow-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="flex flex-col space-y-2 h-full">
            <div className="aspect-square overflow-hidden rounded-lg bg-muted">
              <img
                src={company.image || "/placeholder.svg"}
                alt={company.name}
                className="object-cover w-full h-full transition-transform group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col space-y-1 p-2 flex-grow">
              <h3 className="font-semibold">{company.name}</h3>
              <p className="text-sm text-muted-foreground line-clamp-2">{company.description}</p>
              <div className="flex items-center pt-2 mt-auto cursor-pointer" onClick={handleFlip}>
                <span className="text-sm font-medium text-primary">Read more</span>
                <ChevronRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div
          className="absolute w-full h-full backface-hidden border rounded-lg bg-background p-6 rotate-y-180 flex flex-col justify-center items-center"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">{company.name}</h3>
            <p className="text-muted-foreground mb-4">Loading project details...</p>
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

