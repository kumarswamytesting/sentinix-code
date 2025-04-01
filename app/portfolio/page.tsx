"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Clock, ExternalLink, Mail, Menu, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CompaniesDropdown } from "@/components/companies-dropdown"
import { ServicesDropdown } from "@/components/services-dropdown"
import { AnimatedSection } from "@/components/animated-section"

export default function PortfolioPage() {
  const [filter, setFilter] = useState("all")

  const portfolioItems = [
    {
      id: 1,
      title: "Enterprise Resource Planning System",
      client: "TechCorp",
      category: "web-application",
      tags: ["ERP", "Cloud", "Enterprise"],
      image: "/images/Portfolio Section/enterprice.jpeg?height=600&width=800",
      description: "Custom ERP solution with integrated modules for finance, HR, inventory, and operations.",
      link: "/companies/techcorp",
    },
    {
      id: 2,
      title: "Renewable Energy Monitoring Platform",
      client: "GreenEnergy",
      category: "iot",
      tags: ["IoT", "Analytics", "Renewable Energy"],
      image: "/images/Portfolio Section/enery.jpeg?height=600&width=800",
      description: "IoT-based monitoring system for solar and wind energy installations with real-time analytics.",
      link: "/companies/greenenergy",
    },
    {
      id: 3,
      title: "Patient Management System",
      client: "HealthPlus",
      category: "web-application",
      tags: ["Healthcare", "HIPAA", "Patient Care"],
      image: "/images/Portfolio Section/hospital.jpeg?height=600&width=800",
      description: "Comprehensive patient management solution for healthcare providers with secure data handling.",
      link: "/companies/healthplus",
    },
    {
      id: 4,
      title: "Omnichannel Retail Platform",
      client: "RetailPro",
      category: "e-commerce",
      tags: ["Retail", "Inventory", "Omnichannel"],
      image: "/images/Portfolio Section/inventory.jpeg?height=600&width=800",
      description: "Unified retail platform connecting online and physical store operations with inventory management.",
      link: "/companies/retailpro",
    },
    {
      id: 5,
      title: "Financial Analytics Dashboard",
      client: "FinanceHub",
      category: "data-analytics",
      tags: ["Finance", "Analytics", "Reporting"],
      image: "/images/Portfolio Section/intentory2.jpeg?height=600&width=800",
      description: "Advanced analytics dashboard for financial institutions with predictive modeling capabilities.",
      link: "/companies/financehub",
    },
    {
      id: 6,
      title: "Supply Chain Optimization System",
      client: "LogisticsMaster",
      category: "iot",
      tags: ["Logistics", "Supply Chain", "Optimization"],
      image: "/images/Portfolio Section/supply chain.jpeg?height=600&width=800",
      description: "End-to-end supply chain tracking and optimization system with real-time visibility.",
      link: "/companies/logisticsmaster",
    },
    {
      id: 7,
      title: "Restaurant POS System",
      client: "DineEasy",
      category: "pos-system",
      tags: ["Restaurant", "POS", "Payments"],
      image: "/images/Portfolio Section/pos.jpeg?height=600&width=800",
      description: "Modern point-of-sale system for restaurants with order management and payment processing.",
      link: "#",
    },
    {
      id: 8,
      title: "E-commerce Mobile App",
      client: "ShopQuick",
      category: "mobile-app",
      tags: ["E-commerce", "Mobile", "Shopping"],
      image: "/images/Portfolio Section/ecomers.jpeg?height=600&width=800",
      description: "Feature-rich mobile shopping application with personalized recommendations and secure checkout.",
      link: "#",
    },
    {
      id: 9,
      title: "Smart Home Automation",
      client: "HomeConnect",
      category: "iot",
      tags: ["IoT", "Smart Home", "Automation"],
      image: "/images/Portfolio Section/smart home.jpeg?height=600&width=800",
      description: "Integrated smart home system connecting various devices and providing centralized control.",
      link: "#",
    },
  ]

  const filteredItems = filter === "all" ? portfolioItems : portfolioItems.filter((item) => item.category === filter)

  return (
    <div className="flex min-h-screen flex-col">
      {/* Top Bar */}
      <div className="hidden md:block w-full bg-muted py-2">
        <div className="container flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center text-sm text-muted-foreground">
              <Clock className="h-4 w-4 mr-2" />
              <span>Office Times: Mon - Fri 9:00AM - 6:00PM</span>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <Phone className="h-4 w-4 mr-2" />
              <span>Call Us: (+91) 9751633118</span>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <Mail className="h-4 w-4 mr-2" />
              <span>Email: ceo@sentinixtechsolutions.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            {/* <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Login
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Register
            </Link> */}
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-orange-500 rounded-sm grid grid-cols-2 grid-rows-2 gap-0.5 p-1">
                <div className="bg-orange-300"></div>
                <div className="bg-orange-300"></div>
                <div className="bg-orange-300"></div>
                <div className="bg-orange-400"></div>
              </div>
              <span className="text-xl font-bold">Sentinix</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link
                href="/"
                className="flex items-center text-lg font-medium text-muted-foreground transition-colors hover:text-orange-500 px-1"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="flex items-center text-lg font-medium text-muted-foreground transition-colors hover:text-orange-500 px-1"
              >
                About Us
              </Link>
              <CompaniesDropdown />
              <ServicesDropdown />
              <Link href="/portfolio" className="flex items-center text-lg font-medium text-foreground px-1">
                Portfolio
              </Link>
              <Link
                href="/blog"
                className="flex items-center text-lg font-medium text-muted-foreground transition-colors hover:text-orange-500 px-1"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="flex items-center text-lg font-medium text-muted-foreground transition-colors hover:text-orange-500 px-1"
              >
                Contact Us
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4 mt-8">
                  <Link href="/" className="text-lg font-medium">
                    Home
                  </Link>
                  <Link href="/about" className="text-lg font-medium">
                    About Us
                  </Link>
                  <Link href="/companies" className="text-lg font-medium">
                    Companies
                  </Link>
                  <Link href="/services" className="text-lg font-medium">
                    Services
                  </Link>
                  <Link href="/portfolio" className="text-lg font-medium">
                    Portfolio
                  </Link>
                  <Link href="/blog" className="text-lg font-medium">
                    Blog
                  </Link>
                  <Link href="/contact" className="text-lg font-medium">
                    Contact Us
                  </Link>
                  <div className="pt-4 border-t">
                    <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>Mon - Fri 9:00AM - 6:00PM</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 mr-2" />
                        <span> (+91) 9751633118</span>
                      </div>
                      <div className="flex items-center">
                        <Mail className="h-4 w-4 mr-2" />
                        <span>ceo@sentinixtechsolutions.com</span>
                      </div>
                    </div>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 bg-gradient-to-br from-background via-background to-muted relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern"></div>
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <div className="inline-block rounded-lg bg-orange-100 text-orange-500 px-3 py-1 text-sm font-medium mb-2">
                  Our Portfolio
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Showcasing Our <span className="text-orange-500">Success Stories</span>
                </h1>
                <p className="text-muted-foreground md:text-xl/relaxed">
                  Explore our diverse portfolio of projects that demonstrate our expertise and commitment to delivering
                  exceptional results.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <AnimatedSection>
          <section className="w-full py-12 md:py-24 bg-background">
            <div className="container px-4 md:px-6">
              <div className="mb-12">
                <Tabs defaultValue="all" className="w-full" onValueChange={setFilter}>
                  <div className="flex justify-center">
                    <TabsList className="grid grid-cols-3 md:grid-cols-7 w-full max-w-3xl">
                      <TabsTrigger value="all">All</TabsTrigger>
                      <TabsTrigger value="web-application">Web Apps</TabsTrigger>
                      <TabsTrigger value="mobile-app">Mobile Apps</TabsTrigger>
                      <TabsTrigger value="e-commerce">E-commerce</TabsTrigger>
                      <TabsTrigger value="iot">IoT</TabsTrigger>
                      <TabsTrigger value="data-analytics">Analytics</TabsTrigger>
                      <TabsTrigger value="pos-system">POS Systems</TabsTrigger>
                    </TabsList>
                  </div>
                  <TabsContent value="all" className="mt-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredItems.map((item) => (
                        <PortfolioCard key={item.id} item={item} />
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="web-application" className="mt-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredItems.map((item) => (
                        <PortfolioCard key={item.id} item={item} />
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="mobile-app" className="mt-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredItems.map((item) => (
                        <PortfolioCard key={item.id} item={item} />
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="e-commerce" className="mt-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredItems.map((item) => (
                        <PortfolioCard key={item.id} item={item} />
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="iot" className="mt-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredItems.map((item) => (
                        <PortfolioCard key={item.id} item={item} />
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="data-analytics" className="mt-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredItems.map((item) => (
                        <PortfolioCard key={item.id} item={item} />
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="pos-system" className="mt-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredItems.map((item) => (
                        <PortfolioCard key={item.id} item={item} />
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Process Section */}
        <AnimatedSection>
          <section className="w-full py-12 md:py-24 bg-muted">
            <div className="container px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter mb-4">Our Development Process</h2>
                <p className="text-muted-foreground md:text-lg">
                  We follow a structured approach to ensure every project is delivered with excellence.
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-4">
                <ProcessCard
                  number="01"
                  title="Discovery"
                  description="We start by understanding your business goals, target audience, and project requirements."
                />
                <ProcessCard
                  number="02"
                  title="Planning"
                  description="Our team creates a detailed roadmap with timelines, milestones, and resource allocation."
                />
                <ProcessCard
                  number="03"
                  title="Development"
                  description="We build your solution using agile methodologies, with regular updates and feedback cycles."
                />
                <ProcessCard
                  number="04"
                  title="Delivery"
                  description="After thorough testing, we deploy your solution and provide ongoing support and maintenance."
                />
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Testimonials Section */}
        <AnimatedSection>
          <section className="w-full py-12 md:py-24 bg-background">
            <div className="container px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter mb-4">Client Testimonials</h2>
                <p className="text-muted-foreground md:text-lg">
                  Don't just take our word for it. Here's what our clients have to say about working with us.
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <TestimonialCard
                  quote="Sentinix transformed our operations with their innovative solutions. Their team's expertise and dedication were instrumental in our successful digital transformation journey."
                  author="Sarah Johnson"
                  title="CTO, TechCorp"
                />
                <TestimonialCard
                  quote="The monitoring platform developed by Sentinix has revolutionized how we manage our renewable energy assets. The insights gained have directly translated to improved efficiency and reduced costs."
                  author="Lars Nielsen"
                  title="Operations Director, GreenEnergy"
                />
                <TestimonialCard
                  quote="The patient management system developed by Sentinix has transformed our practice. We've seen significant improvements in efficiency, patient satisfaction, and our ability to deliver quality care."
                  author="Dr. Michael Chen"
                  title="Medical Director, HealthPlus"
                />
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection>
          <section className="w-full py-12 md:py-24 bg-orange-500 text-white">
            <div className="container px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold tracking-tighter mb-4">Ready to Start Your Project?</h2>
                <p className="text-white/90 md:text-lg mb-8">
                  Let's discuss how we can help you achieve your business goals with our custom software solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-white text-orange-500 hover:bg-orange-50">Schedule a Consultation</Button>
                  <Button variant="outline" className="border-white text-orange-500 hover:bg-white/10">
                    View Our Services
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>
      </main>

      <footer className="w-full border-t bg-muted py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="h-8 w-8 bg-orange-500 rounded-sm grid grid-cols-2 grid-rows-2 gap-0.5 p-1">
                  <div className="bg-orange-300"></div>
                  <div className="bg-orange-300"></div>
                  <div className="bg-orange-300"></div>
                  <div className="bg-orange-400"></div>
                </div>
                <span className="text-xl font-bold">Sentinix</span>
              </Link>
              <p className="text-sm text-muted-foreground mb-4">
                Innovative software development solutions for businesses of all sizes.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-muted-foreground hover:text-orange-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-orange-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-orange-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-orange-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-sm text-muted-foreground hover:text-orange-500">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-sm text-muted-foreground hover:text-orange-500">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-sm text-muted-foreground hover:text-orange-500">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="text-sm text-muted-foreground hover:text-orange-500">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-sm text-muted-foreground hover:text-orange-500">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm text-muted-foreground hover:text-orange-500">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/services/web-development"
                    className="text-sm text-muted-foreground hover:text-orange-500"
                  >
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link href="/services/mobile-apps" className="text-sm text-muted-foreground hover:text-orange-500">
                    Mobile Apps
                  </Link>
                </li>
                <li>
                  <Link href="/services/ui-ux-design" className="text-sm text-muted-foreground hover:text-orange-500">
                    UI/UX Design
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/cloud-solutions"
                    className="text-sm text-muted-foreground hover:text-orange-500"
                  >
                    Cloud Solutions
                  </Link>
                </li>
                <li>
                  <Link href="/services/ai-integration" className="text-sm text-muted-foreground hover:text-orange-500">
                    AI Integration
                  </Link>
                </li>
                <li>
                  <Link href="/services/consulting" className="text-sm text-muted-foreground hover:text-orange-500">
                    Consulting
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Phone className="h-5 w-5 mr-2 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">(+91)  9751633118</span>
                </li>
                <li className="flex items-start">
                  <Mail className="h-5 w-5 mr-2 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">ceo@sentinixtechsolutions.com</span>
                </li>
                <li className="flex items-start">
                  <Clock className="h-5 w-5 mr-2 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Mon - Fri: 9:00 AM - 5:00 PM</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-center text-sm text-muted-foreground mb-4 md:mb-0">
              © 2023 Sentinix. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-orange-500">
                Terms of Service
              </Link>
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-orange-500">
                Privacy Policy
              </Link>
              <Link href="/cookies" className="text-sm text-muted-foreground hover:text-orange-500">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

interface PortfolioItemProps {
  id: number
  title: string
  client: string
  category: string
  tags: string[]
  image: string
  description: string
  link: string
}

function PortfolioCard({ item }: { item: PortfolioItemProps }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-lg border bg-background"
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={item.image || "/placeholder.svg"}
          alt={item.title}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium text-orange-500 bg-orange-100 px-2 py-1 rounded-full">
            {item.client}
          </span>
          <div className="flex space-x-1">
            {item.tags.slice(0, 2).map((tag, index) => (
              <span key={index} className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{item.description}</p>
        <Link
          href={item.link}
          className="inline-flex items-center text-sm font-medium text-orange-500 hover:text-orange-600"
        >
          View Project <ExternalLink className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  )
}

function ProcessCard({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center text-center"
    >
      <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mb-4">
        <span className="text-2xl font-bold text-orange-500">{number}</span>
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  )
}

function TestimonialCard({ quote, author, title }: { quote: string; author: string; title: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-background rounded-lg p-6 shadow-sm border"
    >
      <div className="mb-4 text-orange-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-8 w-8"
        >
          <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
          <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
        </svg>
      </div>
      <p className="text-muted-foreground mb-4 italic">{quote}</p>
      <div>
        <p className="font-bold">{author}</p>
        <p className="text-sm text-muted-foreground">{title}</p>
      </div>
    </motion.div>
  )
}

