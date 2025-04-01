"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Clock, Mail, Menu, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { CompaniesDropdown } from "@/components/companies-dropdown"
import { ServicesDropdown } from "@/components/services-dropdown"
import { AnimatedSection } from "@/components/animated-section"

export default function CompaniesPage() {
  const companies = [
    {
      name: "TechCorp",
      description: "Enterprise software solutions for streamlined operations",
      image: "/images/companies/tech corp.jpg?height=400&width=600",
      slug: "techcorp",
    },
    {
      name: "GreenEnergy",
      description: "Renewable energy monitoring and optimization platform",
      image: "/images/companies/green.jpg?height=400&width=600",
      slug: "greenenergy",
    },
    {
      name: "HealthPlus",
      description: "Patient management system for healthcare providers",
      image: "/images/companies/health.jpg?height=400&width=600",
      slug: "healthplus",
    },
    {
      name: "RetailPro",
      description: "Omnichannel retail solution with inventory management",
      image: "/images/companies/retailpro.jpg?height=400&width=600",
      slug: "retailpro",
    },
    {
      name: "FinanceHub",
      description: "Financial analytics and reporting dashboard",
      image: "/images/companies/financehib.jpg?height=400&width=600",
      slug: "financehub",
    },
    {
      name: "LogisticsMaster",
      description: "Supply chain optimization and tracking system",
      image: "/images/companies/logistics.jpg?height=400&width=600",
      slug: "logisticsmaster",
    },
  ]

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
              <span>Call Us:(+91) 9751633118</span>
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
              <Link
                href="/portfolio"
                className="flex items-center text-lg font-medium text-muted-foreground transition-colors hover:text-orange-500 px-1"
              >
                Portfolio
              </Link>
              <Link
                href="/pricing"
                className="flex items-center text-lg font-medium text-muted-foreground transition-colors hover:text-orange-500 px-1"
              >
                Pricing
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
                  <Link href="/pricing" className="text-lg font-medium">
                    Pricing
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
                        <span>Mon - Fri 9:00AM - 5:00PM</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 mr-2" />
                        <span>(+91) 9751633118</span>
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
                  Our Clients
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Companies That <span className="text-orange-500">Trust Us</span>
                </h1>
                <p className="text-muted-foreground md:text-xl/relaxed">
                  We've partnered with leading companies across various industries to deliver exceptional software
                  solutions.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Companies Section */}
        <AnimatedSection>
          <section className="w-full py-12 md:py-24 bg-background">
            <div className="container px-4 md:px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {companies.map((company, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group"
                  >
                    <Link href={`/companies/${company.slug}`} className="block">
                      <div className="overflow-hidden rounded-lg border mb-4">
                        <img
                          src={company.image || "/placeholder.svg"}
                          alt={company.name}
                          className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-orange-500 transition-colors">
                        {company.name}
                      </h3>
                      <p className="text-muted-foreground">{company.description}</p>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection>
          <section className="w-full py-12 md:py-24 bg-orange-500 text-white">
            <div className="container px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold tracking-tighter mb-4">Ready to Join Our Success Stories?</h2>
                <p className="text-white/90 md:text-lg mb-8">
                  Let's discuss how our software solutions can help you achieve your business goals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-white text-orange-500 hover:bg-orange-50">
                    <a href="/contact">Schedule a Consultation</a>
                  </Button>
                  <Button variant="outline" className="border-white text-orange-500 hover:bg-white/10">

                    <a href="/services"> View Our Services</a>
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
                  <Link href="/pricing" className="text-sm text-muted-foreground hover:text-orange-500">
                    Pricing
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
                  <span className="text-sm text-muted-foreground"> (+91) 9751633118</span>
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

