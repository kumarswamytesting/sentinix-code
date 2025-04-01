import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pricing - Sentinix",
  description: "Explore our transparent pricing plans and choose the perfect option for your business needs.",
}

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

