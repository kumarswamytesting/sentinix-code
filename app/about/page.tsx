"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2, Clock, Mail, Menu, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { CompaniesDropdown } from "@/components/companies-dropdown"
import { AnimatedSection } from "@/components/animated-section"
import { ServicesDropdown } from "@/components/services-dropdown"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "CEO & Founder",
      image: "/placeholder.svg?height=400&width=400",
      bio: "With over 15 years of experience in software development and business leadership, Alex founded Sentinix with a vision to create innovative solutions that drive digital transformation.",
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Sarah leads our technical strategy and innovation initiatives, bringing her expertise in cloud architecture, AI, and enterprise software development.",
    },
    {
      name: "Michael Rodriguez",
      role: "Design Director",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Michael oversees our design team, ensuring all our products deliver exceptional user experiences through intuitive interfaces and beautiful aesthetics.",
    },
    {
      name: "Emily Patel",
      role: "Head of Client Success",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Emily ensures our clients receive the highest level of service and support, managing relationships and driving successful project outcomes.",
    },
  ]

  const values = [
    {
      title: "Innovation",
      description: "We constantly push boundaries to create cutting-edge solutions that address complex challenges.",
      icon: "🚀",
    },
    {
      title: "Excellence",
      description:
        "We are committed to delivering the highest quality in everything we do, from code to client service.",
      icon: "✨",
    },
    {
      title: "Collaboration",
      description:
        "We believe in the power of teamwork, both internally and with our clients, to achieve exceptional results.",
      icon: "🤝",
    },
    {
      title: "Integrity",
      description: "We operate with honesty, transparency, and ethical principles in all our business practices.",
      icon: "🛡️",
    },
    {
      title: "Client Focus",
      description:
        "We prioritize understanding our clients' needs and delivering solutions that exceed their expectations.",
      icon: "👥",
    },
    {
      title: "Continuous Learning",
      description: "We foster a culture of growth and development, staying at the forefront of technology trends.",
      icon: "📚",
    },
  ]

  const milestones = [
    {
      year: "2015",
      title: "Company Founded",
      description: "Sentinix was established with a mission to deliver innovative software solutions.",
    },
    {
      year: "2017",
      title: "First Major Enterprise Client",
      description: "Secured our first Fortune 500 client, marking a significant milestone in our growth.",
    },
    {
      year: "2019",
      title: "International Expansion",
      description: "Opened our first international office, extending our services to clients worldwide.",
    },
    {
      year: "2021",
      title: "AI Division Launch",
      description: "Established a dedicated AI and machine learning division to enhance our service offerings.",
    },
    {
      year: "2023",
      title: "Industry Recognition",
      description: "Received multiple industry awards for innovation and excellence in software development.",
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
              <span>Office Times: Mon - Fri 9:00Am - 6:00PM</span>
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
          {/* <div className="flex items-center space-x-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Login
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Register
            </Link>
          </div> */}
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
              <Link href="/about" className="flex items-center text-lg font-medium text-foreground px-1">
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
                  About Us
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Transforming Ideas into <span className="text-orange-500">Digital Excellence</span>
                </h1>
                <p className="text-muted-foreground md:text-xl/relaxed">
                  We are a team of passionate technologists dedicated to creating innovative software solutions that
                  help businesses thrive in the digital age.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <AnimatedSection>
          <section className="w-full py-12 md:py-24 bg-background">
            <div className="container px-4 md:px-6">
              <div className="grid gap-12 md:grid-cols-2 items-center">
                <div>
                  <h2 className="text-3xl font-bold tracking-tighter mb-4">Our Story</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Founded in 2015, Sentinix began with a simple mission: to help businesses leverage technology to
                      achieve their goals. What started as a small team of developers has grown into a full-service
                      software development company with clients across the globe.
                    </p>
                    <p>
                      Our journey has been defined by a relentless pursuit of excellence and innovation. We've
                      consistently pushed the boundaries of what's possible, embracing new technologies and
                      methodologies to deliver exceptional results for our clients.
                    </p>
                    <p>
                      Today, Sentinix stands as a trusted partner for businesses seeking digital transformation. Our
                      diverse team of experts brings together a wealth of knowledge and experience across various
                      industries and technologies, allowing us to tackle complex challenges with confidence and
                      creativity.
                    </p>
                  </div>
                  <div className="mt-6">
                    <Button className="bg-orange-500 hover:bg-orange-600 group" asChild>
                      <Link href="/services">
                        Learn More About Our Services
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <div className="aspect-square overflow-hidden rounded-xl border">
                    <img
                      src="/images/our story/our story-3.jpeg?height=600&width=600"
                      alt="Sentinix Team"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="absolute -bottom-6 -left-6 bg-orange-500 rounded-lg p-6 text-white">
                    <div className="text-4xl font-bold">8+</div>
                    <div className="text-sm">Years of Excellence</div>
                  </div>
                  <div className="absolute -top-6 -right-6 bg-background rounded-lg p-6 shadow-lg">
                    <div className="text-4xl font-bold text-orange-500">200+</div>
                    <div className="text-sm">Projects Delivered</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Our Values Section */}
        <AnimatedSection>
          <section className="w-full py-12 md:py-24 bg-muted">
            <div className="container px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter mb-4">Our Core Values</h2>
                <p className="text-muted-foreground md:text-lg">
                  These principles guide everything we do, from how we develop software to how we interact with our
                  clients.
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-background rounded-lg p-6 shadow-sm border"
                  >
                    <div className="text-3xl mb-4">{value.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Our Team Section */}
        <AnimatedSection>
          <section className="w-full py-12 md:py-24 bg-background">
            <div className="container px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter mb-4">Meet Our Leadership Team</h2>
                <p className="text-muted-foreground md:text-lg">
                  Our talented team brings together diverse expertise and a shared passion for technology.
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="relative overflow-hidden rounded-lg mb-4">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4 text-white">
                          <div className="flex space-x-3">
                            <a href="#" className="text-white hover:text-orange-300">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                <rect width="4" height="12" x="2" y="9" />
                                <circle cx="4" cy="4" r="2" />
                              </svg>
                            </a>
                            <a href="#" className="text-white hover:text-orange-300">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-orange-500 mb-2">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Company Milestones */}
        <AnimatedSection>
          <section className="w-full py-12 md:py-24 bg-muted">
            <div className="container px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter mb-4">Our Journey</h2>
                <p className="text-muted-foreground md:text-lg">
                  Key milestones that have shaped our growth and success over the years.
                </p>
              </div>
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-orange-200"></div>

                <div className="space-y-12">
                  {milestones.map((milestone, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className={`relative flex items-center ${index % 2 === 0 ? "justify-start md:justify-end" : "justify-start"} md:flex-row`}
                    >
                      <div className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:text-right md:pr-8" : "md:pl-8"}`}>
                        <div className="bg-background rounded-lg p-6 shadow-sm border">
                          <div className="text-orange-500 font-bold text-xl mb-2">{milestone.year}</div>
                          <h3 className="text-lg font-bold mb-2">{milestone.title}</h3>
                          <p className="text-muted-foreground">{milestone.description}</p>
                        </div>
                      </div>
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-orange-500 border-4 border-background z-10 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Why Choose Us */}
        <AnimatedSection>
          <section className="w-full py-12 md:py-24 bg-background">
            <div className="container px-4 md:px-6">
              <div className="grid gap-12 md:grid-cols-2 items-center">
                <div>
                  <h2 className="text-3xl font-bold tracking-tighter mb-4">Why Choose Sentinix</h2>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle2 className="h-6 w-6 text-orange-500 mr-3 mt-0.5" />
                      <div>
                        <h3 className="font-bold text-lg">Technical Excellence</h3>
                        <p className="text-muted-foreground">
                          Our team comprises top-tier developers, designers, and engineers who are experts in their
                          respective fields.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="h-6 w-6 text-orange-500 mr-3 mt-0.5" />
                      <div>
                        <h3 className="font-bold text-lg">Collaborative Approach</h3>
                        <p className="text-muted-foreground">
                          We work closely with our clients, ensuring their vision and requirements are at the center of
                          everything we do.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="h-6 w-6 text-orange-500 mr-3 mt-0.5" />
                      <div>
                        <h3 className="font-bold text-lg">Innovative Solutions</h3>
                        <p className="text-muted-foreground">
                          We leverage cutting-edge technologies and methodologies to deliver forward-thinking solutions
                          that drive results.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="h-6 w-6 text-orange-500 mr-3 mt-0.5" />
                      <div>
                        <h3 className="font-bold text-lg">Proven Track Record</h3>
                        <p className="text-muted-foreground">
                          Our portfolio of successful projects across various industries speaks to our capability and
                          reliability.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="h-6 w-6 text-orange-500 mr-3 mt-0.5" />
                      <div>
                        <h3 className="font-bold text-lg">End-to-End Service</h3>
                        <p className="text-muted-foreground">
                          From initial concept to deployment and ongoing support, we provide comprehensive service
                          throughout the entire project lifecycle.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8">
                    <Button className="bg-orange-500 hover:bg-orange-600 group" asChild>
                      <Link href="/contact">
                        Contact Us Today
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-square overflow-hidden rounded-lg">
                    <img
                      src="/images/Why Choose Sentinix/img-1.jpeg?height=300&width=300"
                      alt="Team collaboration"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="aspect-square overflow-hidden rounded-lg mt-8">
                    <img
                      src="/images/Why Choose Sentinix/img-2.jpeg?height=300&width=300"
                      alt="Modern office"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="aspect-square overflow-hidden rounded-lg">
                    <img
                      src="/images/Why Choose Sentinix/img-3.jpeg?height=300&width=300"
                      alt="Development process"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="aspect-square overflow-hidden rounded-lg mt-8">
                    <img
                      src="/images/Why Choose Sentinix/img-4.jpeg?height=300&width=300"
                      alt="Client meeting"
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection>
          <section className="w-full py-12 md:py-24 bg-orange-500 text-white">
            <div className="container px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold tracking-tighter mb-4">Ready to Transform Your Business?</h2>
                <p className="text-white/90 md:text-lg mb-8">
                  Let's discuss how our software solutions can help you achieve your business goals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-white text-orange-500 hover:bg-orange-50" asChild>
                    <Link href="/contact">Schedule a Consultation</Link>
                  </Button>
                  <Button variant="outline" className="border-white text-orange-500 hover:bg-white/10" asChild>
                    <Link href="/portfolio">View Our Portfolio</Link>
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
                  <span className="text-sm text-muted-foreground">Mon - Fri: 9:00 AM - 6:00 PM</span>
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

