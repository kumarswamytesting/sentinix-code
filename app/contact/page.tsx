"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Clock, Facebook, Instagram, Linkedin, Mail, MapPin, Menu, Phone, Send, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { CompaniesDropdown } from "@/components/companies-dropdown"
import { ServicesDropdown } from "@/components/services-dropdown"
import { AnimatedSection } from "@/components/animated-section"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

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
              <Link href="/contact" className="flex items-center text-lg font-medium text-foreground px-1">
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
        <section className="w-full py-16 md:py-24 bg-gradient-to-br from-background via-background to-muted relative overflow-hidden">
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
                  Contact Us
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Get in <span className="text-orange-500">Touch</span> With Us
                </h1>
                <p className="text-muted-foreground md:text-xl/relaxed max-w-2xl mx-auto">
                  Have questions about our services or want to discuss your project? We're here to help.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Information Cards */}
        <AnimatedSection>
          <section className="w-full py-12 md:py-16 bg-background">
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 md:grid-cols-3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-muted p-6 rounded-lg border text-center"
                >
                  <div className="mx-auto w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                    <Phone className="h-6 w-6 text-orange-500" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Phone</h3>
                  <p className="text-muted-foreground mb-2">Mon-Fri from 9am to 5pm</p>
                  <a href="tel:+15551234567" className="text-orange-500 font-medium hover:underline">
                    (+91) 9751633118
                  </a>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-muted p-6 rounded-lg border text-center"
                >
                  <div className="mx-auto w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                    <Mail className="h-6 w-6 text-orange-500" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Email</h3>
                  <p className="text-muted-foreground mb-2">Our friendly team is here to help</p>
                  <a href="mailto:ceo@sentinixtechsolutions.com" className="text-orange-500 font-medium hover:underline">
                  ceo@sentinixtechsolutions.com
                  </a>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-muted p-6 rounded-lg border text-center"
                >
                  <div className="mx-auto w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                    <MapPin className="h-6 w-6 text-orange-500" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Office</h3>
                  <p className="text-muted-foreground mb-2">Come say hello at our office</p>
                  <p className="text-sm">
                    123 Tech Boulevard, Suite 500
                    <br />
                    San Francisco, CA 94107
                  </p>
                </motion.div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Contact Form and Map */}
        <AnimatedSection>
          <section className="w-full py-12 md:py-24 bg-muted">
            <div className="container px-4 md:px-6">
              <div className="grid gap-8 md:grid-cols-2">
                {/* Contact Form */}
                <div>
                  <div className="bg-background p-8 rounded-lg border">
                    <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

                    {isSubmitted ? (
                      <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-lg mb-6">
                        <h3 className="font-bold text-lg mb-2">Message Sent!</h3>
                        <p>Thank you for contacting us. We'll get back to you as soon as possible.</p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid gap-4 md:grid-cols-2">
                          <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium">
                              Your Name
                            </label>
                            <Input
                              id="name"
                              name="name"
                              placeholder="John Doe"
                              required
                              value={formState.name}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium">
                              Email Address
                            </label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              placeholder="john@example.com"
                              required
                              value={formState.email}
                              onChange={handleChange}
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="phone" className="text-sm font-medium">
                            Phone Number (Optional)
                          </label>
                          <Input
                            id="phone"
                            name="phone"
                            placeholder="+1 (555) 123-4567"
                            value={formState.phone}
                            onChange={handleChange}
                          />
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="subject" className="text-sm font-medium">
                            Subject
                          </label>
                          <Input
                            id="subject"
                            name="subject"
                            placeholder="How can we help you?"
                            required
                            value={formState.subject}
                            onChange={handleChange}
                          />
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="message" className="text-sm font-medium">
                            Your Message
                          </label>
                          <Textarea
                            id="message"
                            name="message"
                            placeholder="Tell us about your project or inquiry..."
                            rows={5}
                            required
                            value={formState.message}
                            onChange={handleChange}
                          />
                        </div>

                        <Button
                          type="submit"
                          className="w-full bg-orange-500 hover:bg-orange-600"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
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
                            <>
                              Send Message <Send className="ml-2 h-4 w-4" />
                            </>
                          )}
                        </Button>
                      </form>
                    )}
                  </div>
                </div>

                {/* Map and Additional Info */}
                <div className="space-y-8">
                  {/* Map */}
                  <div className="bg-background rounded-lg border overflow-hidden h-[300px]">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0927348427257!2d-122.39663492392031!3d37.78117711012704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085807ded297e89%3A0x9cdf304c0b5e0a!2s123%20Main%20St%2C%20San%20Francisco%2C%20CA%2094105!5e0!3m2!1sen!2sus!4v1655338053695!5m2!1sen!2sus"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Sentinix Office Location"
                    ></iframe>
                  </div>

                  {/* Business Hours */}
                  <div className="bg-background p-6 rounded-lg border">
                    <h3 className="text-lg font-bold mb-4">Business Hours</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Monday - Friday</span>
                        <span>9:00 AM - 5:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday</span>
                        <span>Closed</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday</span>
                        <span>Closed</span>
                      </div>
                    </div>
                  </div>

                  {/* Social Media */}
                  <div className="bg-background p-6 rounded-lg border">
                    <h3 className="text-lg font-bold mb-4">Connect With Us</h3>
                    <div className="flex space-x-4">
                      <a
                        href="#"
                        className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-orange-100 hover:text-orange-500 transition-colors"
                      >
                        <Facebook className="h-5 w-5" />
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-orange-100 hover:text-orange-500 transition-colors"
                      >
                        <Twitter className="h-5 w-5" />
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-orange-100 hover:text-orange-500 transition-colors"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-orange-100 hover:text-orange-500 transition-colors"
                      >
                        <Instagram className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* FAQ Section */}
        <AnimatedSection>
          <section className="w-full py-12 md:py-24 bg-background">
            <div className="container px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter mb-4">Common Questions</h2>
                <p className="text-muted-foreground">
                  Find quick answers to frequently asked questions about our services.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-muted p-6 rounded-lg border"
                >
                  <h3 className="text-lg font-bold mb-2">What services do you offer?</h3>
                  <p className="text-muted-foreground">
                    We offer a comprehensive range of software development services including POS system development,
                    accounting integration, mobile app development, web application development, and cloud solutions.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-muted p-6 rounded-lg border"
                >
                  <h3 className="text-lg font-bold mb-2">How long does a typical project take?</h3>
                  <p className="text-muted-foreground">
                    Project timelines vary depending on complexity and scope. A typical website project takes 4-8 weeks,
                    while more complex applications can take 3-6 months. We'll provide a detailed timeline during our
                    initial consultation.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-muted p-6 rounded-lg border"
                >
                  <h3 className="text-lg font-bold mb-2">Do you offer ongoing maintenance and support?</h3>
                  <p className="text-muted-foreground">
                    Yes, we offer various maintenance and support packages to keep your software running smoothly. Each
                    pricing tier includes a specific support period, and we can customize extended support plans based
                    on your needs.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-muted p-6 rounded-lg border"
                >
                  <h3 className="text-lg font-bold mb-2">How do I get started with a project?</h3>
                  <p className="text-muted-foreground">
                    Getting started is easy! Simply fill out the contact form on this page or give us a call. We'll
                    schedule an initial consultation to discuss your project requirements, goals, and timeline, then
                    provide you with a detailed proposal.
                  </p>
                </motion.div>
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
                  Contact us today to discuss how we can help bring your ideas to life.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-white text-orange-500 hover:bg-orange-50">Schedule a Consultation</Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white/10">
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
                    href="/services/pos-system-development"
                    className="text-sm text-muted-foreground hover:text-orange-500"
                  >
                    POS System Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/accounting-integration"
                    className="text-sm text-muted-foreground hover:text-orange-500"
                  >
                    Accounting Integration
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/kiosk-integration"
                    className="text-sm text-muted-foreground hover:text-orange-500"
                  >
                    Kiosk Integration
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/mobile-app-development"
                    className="text-sm text-muted-foreground hover:text-orange-500"
                  >
                    Mobile App Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/web-application-development"
                    className="text-sm text-muted-foreground hover:text-orange-500"
                  >
                    Web Application Development
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Phone className="h-5 w-5 mr-2 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">(+91) 9751633118</span>
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

