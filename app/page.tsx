"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Clock, Mail, Menu, Phone, Search, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { CompaniesDropdown } from "@/components/companies-dropdown"
import { AnimatedCard } from "@/components/animated-card"
import { AnimatedSection } from "@/components/animated-section"
import { ServicesDropdown } from "@/components/services-dropdown"

export default function Home() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isContactSubmitting, setIsContactSubmitting] = useState(false)
  const [isContactSubmitted, setIsContactSubmitted] = useState(false)

  const [newsletterEmail, setNewsletterEmail] = useState("")
  const [isNewsletterSubmitting, setIsNewsletterSubmitting] = useState(false)
  const [isNewsletterSubmitted, setIsNewsletterSubmitted] = useState(false)

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setContactForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsContactSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsContactSubmitting(false)
      setIsContactSubmitted(true)
      setContactForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    }, 1500)
  }

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsNewsletterSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsNewsletterSubmitting(false)
      setIsNewsletterSubmitted(true)
      setNewsletterEmail("")

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsNewsletterSubmitted(false)
      }, 5000)
    }, 1500)
  }

  const services = [
    {
      name: "Web Development",
      description: "Custom websites and web applications built with the latest technologies",
      image: "/images/services/web.jpeg?height=300&width=300",
      slug: "services",
    },
    {
      name: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android",
      image: "/images/services/mobile.jpeg?height=300&width=300",
      slug: "services",
    },
    {
      name: "UI/UX Design",
      description: "User-centered design that enhances user experience and engagement",
      image: "/images/services/ux.jpeg?height=300&width=300",
      slug: "services",
    },
    {
      name: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment services",
      image: "/images/services/cloud.jpeg?height=300&width=300",
      slug: "services",
    },
    {
      name: "AI Integration",
      description: "Artificial intelligence and machine learning solutions for businesses",
      image: "/images/services/ai.jpeg?height=300&width=300",
      slug: "services",
    },
    {
      name: "Consulting",
      description: "Expert technology consulting and digital transformation strategies",
      image: "/images/services/consulting.jpeg?height=300&width=300",
      slug: "services",
    },
  ]

  const portfolio = [
    {
      id: 1,
      project_name: "Web Development",
      image: "/images/Portfolio Section/enery.jpeg"
    },
    {
      id: 2,
      project_name: "Mobile Apps",
      image: "/images/Portfolio Section/financial.jpeg"
    },
    {
      id: 3,
      project_name: "UI/UX Design",
      image: "/images/Portfolio Section/hospital.jpeg"
    },
    {
      id: 4,
      project_name: "Cloud Solutions",
      image: "/images/Portfolio Section/intentory2.jpeg"
    }
    ,
    {
      id: 5,
      project_name: "AI Integration",
      image: "/images/Portfolio Section/enterprice.jpeg"
    }
    ,
    {
      id: 6,
      project_name: "web-development",
      image: "/images/Portfolio Section/supply chain.jpeg"
    }
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
              <span>Call Us: (+91) 9751633118</span>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <Mail className="h-4 w-4 mr-2" />
              <span>Email: ceo@sentinixtechsolutions.com</span>
            </div>
          </div>
          {/* Top bar right section intentionally left empty */}
          <div></div>
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
              <Link href="/" className="flex items-center text-lg font-medium text-foreground px-1">
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
            {isSearchOpen ? (
              <div className="relative hidden md:flex items-center">
                <Input type="search" placeholder="Search..." className="w-[200px] pr-8" autoFocus />
                <X
                  className="absolute right-2 h-4 w-4 text-muted-foreground cursor-pointer"
                  onClick={() => setIsSearchOpen(false)}
                />
              </div>
            ) : (
              <Button variant="ghost" size="icon" className="hidden md:flex" onClick={() => setIsSearchOpen(true)}>
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Button>
            )}
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
                        <span>Mon - Fri 9:00AM - 6:00PM</span>
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
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-background via-background to-muted relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern"></div>
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-2"
                >
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Innovative Software <span className="text-orange-500">Development</span>
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    We create custom software solutions that drive business growth and digital transformation for
                    companies of all sizes.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex flex-col gap-2 min-[400px]:flex-row"
                >
                  <Button size="lg" className="px-8 bg-orange-500 hover:bg-orange-600" asChild>
                    <Link href="/contact">Get Started</Link>
                  </Button>
                  <Button size="lg" variant="outline" className="px-8" asChild>
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-center justify-center"
              >
                <div className="relative aspect-video overflow-hidden rounded-xl border bg-muted md:aspect-square lg:aspect-video">
                  <img
                    src="/images/home page/home1.jpeg?height=720&width=1280"
                    alt="Software Development"
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 bg-orange-500 rounded-sm grid grid-cols-2 grid-rows-2 gap-0.5 p-1">
                        <div className="bg-orange-300"></div>
                        <div className="bg-orange-300"></div>
                        <div className="bg-orange-300"></div>
                        <div className="bg-orange-400"></div>
                      </div>
                      <span className="text-white font-medium">SentinixTech Solutions</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <AnimatedSection>
          <section className="w-full py-12 md:py-24 bg-background" id="about">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-orange-100 text-orange-500 px-3 py-1 text-sm font-medium">
                    About Us
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Who We Are</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Sentinix is a leading software development company dedicated to creating innovative digital
                    solutions that help businesses thrive in today's competitive landscape.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2">
                <div className="flex flex-col gap-4">
                  <h3 className="text-xl font-bold">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To deliver exceptional software solutions that empower businesses to achieve their goals through
                    technology innovation and digital transformation.
                  </p>
                  <h3 className="text-xl font-bold">Our Vision</h3>
                  <p className="text-muted-foreground">
                    To be the most trusted technology partner for businesses worldwide, known for our technical
                    excellence, SentinixTech solutions, and exceptional client service.
                  </p>
                </div>
                <div className="relative aspect-video overflow-hidden rounded-xl border">
                  <img
                    src="/images/home page/about us.jpeg?height=400&width=600"
                    alt="Our Team"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <div className="flex justify-center mt-8">
                <Button variant="outline" className="group" asChild>
                  <Link href="/about">
                    Learn More About Us
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Services Section */}
        <AnimatedSection>
          <section className="w-full py-12 md:py-24 bg-muted">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-orange-100 text-orange-500 px-3 py-1 text-sm font-medium">
                    Our Services
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What We Offer</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    We provide a comprehensive range of software development services to meet your business needs.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
                {services.map((service) => (
                  <AnimatedCard key={service.slug} company={service} />
                ))}
              </div>
              <div className="flex justify-center mt-8">
                <Button className="bg-orange-500 hover:bg-orange-600 group" asChild>
                  <Link href="/services">
                    View All Services
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Portfolio Section */}
        <AnimatedSection>
          <section className="w-full py-12 md:py-24 bg-background">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-orange-100 text-orange-500 px-3 py-1 text-sm font-medium">
                    Our Portfolio
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Recent Projects</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Explore our latest work and see how we've helped businesses achieve their goals.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
                {portfolio.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: item.id * 0.1 }}
                    className="group relative overflow-hidden rounded-lg border"
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={`${item.image}?height=300&width=400&text=Project+${item.id}`}
                        alt={`Project ${item.id}`}
                        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 text-white">
                        <h3 className="font-bold">Project {item.id}</h3>
                        <p className="text-sm text-white/80">{item.project_name}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="flex justify-center mt-8">
                <Button variant="outline" className="group" asChild>
                  <Link href="/portfolio">
                    View All Projects
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Contact Section */}
        <AnimatedSection>
          <section className="w-full py-12 md:py-24 bg-background">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-orange-100 text-orange-500 px-3 py-1 text-sm font-medium">
                    Contact Us
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get In Touch</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Have a project in mind? Let's discuss how we can help you achieve your goals.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="mt-1 bg-orange-100 p-2 rounded-full">
                      <Phone className="h-5 w-5 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-muted-foreground">(+91) 9751633118</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="mt-1 bg-orange-100 p-2 rounded-full">
                      <Mail className="h-5 w-5 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-muted-foreground">ceo@sentinixtechsolutions.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="mt-1 bg-orange-100 p-2 rounded-full">
                      <Clock className="h-5 w-5 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="font-medium">Office Hours</h3>
                      <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  {isContactSubmitted ? (
                    <div className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-lg">
                      <h3 className="font-bold text-lg mb-2">Message Sent!</h3>
                      <p>Thank you for contacting us. We'll get back to you as soon as possible.</p>
                      <Button
                        className="mt-4 bg-green-600 hover:bg-green-700"
                        onClick={() => setIsContactSubmitted(false)}
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleContactSubmit} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium">
                            Name
                          </label>
                          <Input
                            id="name"
                            name="name"
                            value={contactForm.name}
                            onChange={handleContactChange}
                            placeholder="Your name"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium">
                            Email
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={contactForm.email}
                            onChange={handleContactChange}
                            placeholder="Your email"
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium">
                          Subject
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          value={contactForm.subject}
                          onChange={handleContactChange}
                          placeholder="Subject"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={contactForm.message}
                          onChange={handleContactChange}
                          placeholder="Your message"
                          className="w-full min-h-[120px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          required
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-orange-500 hover:bg-orange-600"
                        disabled={isContactSubmitting}
                      >
                        {isContactSubmitting ? (
                          <>
                            <span className="animate-spin mr-2">
                              <svg
                                className="h-4 w-4"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <circle
                                  className="opacity-25"
                                  cx="12"
                                  cy="12"
                                  r="10"
                                  stroke="currentColor"
                                  strokeWidth="4"
                                ></circle>
                                <path
                                  className="opacity-75"
                                  fill="currentColor"
                                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                ></path>
                              </svg>
                            </span>
                            Sending...
                          </>
                        ) : (
                          "Send Message"
                        )}
                      </Button>
                    </form>
                  )}
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
              <h3 className="text-lg font-medium mb-4">Newsletter</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Subscribe to our newsletter to receive updates and news.
              </p>
              {isNewsletterSubmitted ? (
                <div className="bg-green-100 text-green-700 p-3 rounded-md text-sm">
                  Thanks for subscribing! You'll receive our updates soon.
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex space-x-2">
                  <Input
                    placeholder="Your email"
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    required
                    className="max-w-[220px]"
                  />
                  <Button type="submit" disabled={isNewsletterSubmitting} className="bg-orange-500 hover:bg-orange-600">
                    {isNewsletterSubmitting ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        <span>...</span>
                      </span>
                    ) : (
                      "Subscribe"
                    )}
                  </Button>
                </form>
              )}
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

