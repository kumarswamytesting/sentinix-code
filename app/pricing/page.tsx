"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Check, Clock, HelpCircle, Mail, Menu, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CompaniesDropdown } from "@/components/companies-dropdown"
import { ServicesDropdown } from "@/components/services-dropdown"
import { AnimatedSection } from "@/components/animated-section"

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annually">("monthly")

  // Update the pricing plans data structure to better match the reference image
  const pricingPlans = {
    monthly: [
      {
        name: "Basic",
        description: "For small businesses and startups",
        price: "$99",
        period: "per month",
        features: [
          "1 POS terminal",
          "Basic inventory management",
          "Sales reporting",
          "Customer database",
          "Email support",
          "Regular updates",
        ],
        cta: "Get Started",
        popular: false,
      },
      {
        name: "Professional",
        description: "For growing businesses with multiple needs",
        price: "$199",
        period: "per month",
        features: [
          "Up to 3 POS terminals",
          "Advanced inventory management",
          "Comprehensive reporting",
          "Customer loyalty program",
          "Employee management",
          "24/7 priority support",
          "Mobile app access",
        ],
        cta: "Choose Professional",
        popular: true,
      },
      {
        name: "Enterprise",
        description: "For large businesses with complex requirements",
        price: "$399",
        period: "per month",
        features: [
          "Unlimited POS terminals",
          "Multi-location support",
          "Advanced analytics",
          "API access",
          "Custom integrations",
          "Dedicated account manager",
          "24/7 priority support",
          "On-site training",
        ],
        cta: "Contact Us",
        popular: false,
      },
    ],
    annually: [
      {
        name: "Basic",
        description: "For small businesses and startups",
        price: "$79",
        period: "per month, billed annually",
        features: [
          "1 POS terminal",
          "Basic inventory management",
          "Sales reporting",
          "Customer database",
          "Email support",
          "Regular updates",
        ],
        cta: "Get Started",
        popular: false,
      },
      {
        name: "Professional",
        description: "For growing businesses with multiple needs",
        price: "$159",
        period: "per month, billed annually",
        features: [
          "Up to 3 POS terminals",
          "Advanced inventory management",
          "Comprehensive reporting",
          "Customer loyalty program",
          "Employee management",
          "24/7 priority support",
          "Mobile app access",
        ],
        cta: "Choose Professional",
        popular: true,
      },
      {
        name: "Enterprise",
        description: "For large businesses with complex requirements",
        price: "$319",
        period: "per month, billed annually",
        features: [
          "Unlimited POS terminals",
          "Multi-location support",
          "Advanced analytics",
          "API access",
          "Custom integrations",
          "Dedicated account manager",
          "24/7 priority support",
          "On-site training",
        ],
        cta: "Contact Us",
        popular: false,
      },
    ],
  }

  const faqs = [
    {
      question: "Do you offer a free trial?",
      answer:
        "Yes, we offer a 14-day free trial for all our plans. No credit card required. You can try all features and see which plan works best for your business.",
    },
    {
      question: "Can I change my plan later?",
      answer:
        "Yes, you can upgrade or downgrade your plan at any time. If you upgrade, the new rate will be prorated for the remainder of your billing cycle. If you downgrade, the new rate will take effect at the start of your next billing cycle.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards including Visa, Mastercard, American Express, and Discover. We also accept PayPal for annual subscriptions.",
    },
    {
      question: "Is there a setup fee?",
      answer: "No, there are no setup fees for any of our plans. You only pay the monthly or annual subscription fee.",
    },
    {
      question: "Do you offer discounts for non-profits?",
      answer:
        "Yes, we offer a 20% discount for verified non-profit organizations. Please contact our sales team with your non-profit documentation to apply for the discount.",
    },
    {
      question: "What kind of support is included?",
      answer:
        "All plans include email support. The Professional and Enterprise plans include 24/7 priority support via email, chat, and phone. The Enterprise plan also includes a dedicated account manager.",
    },
  ]

  const currentPlans = billingCycle === "monthly" ? pricingPlans.monthly : pricingPlans.annually

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
              <span>Call Us:  (+91) 9751633118</span>
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
              <Link href="/pricing" className="flex items-center text-lg font-medium text-foreground px-1">
                Pricing
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
                  Simple, Transparent Pricing
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Choose the Right <span className="text-orange-500">Plan</span> for Your Business
                </h1>
                <p className="text-muted-foreground md:text-xl/relaxed max-w-2xl mx-auto">
                  No hidden fees. No contracts. Cancel anytime. All plans include a 14-day free trial.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <AnimatedSection>
          <section className="w-full py-12 md:py-24 bg-background">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center mb-10">
                <Tabs
                  defaultValue="monthly"
                  className="w-full"
                  onValueChange={(value) => setBillingCycle(value as "monthly" | "annually")}
                >
                  <div className="flex justify-center mb-12">
                    <TabsList className="grid w-full max-w-md grid-cols-2 p-1 rounded-lg bg-muted">
                      <TabsTrigger value="monthly" className="rounded-md py-3 px-4 data-[state=active]:bg-white">
                        Monthly
                      </TabsTrigger>
                      <TabsTrigger value="annually" className="rounded-md py-3 px-4 data-[state=active]:bg-white">
                        Annually
                        <span className="ml-2 text-orange-500 font-medium">Save 20%</span>
                      </TabsTrigger>
                    </TabsList>
                  </div>

                  <TabsContent value="monthly">
                    <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
                      {currentPlans.map((plan, index) => (
                        <PricingCard key={index} plan={plan} />
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="annually">
                    <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
                      {currentPlans.map((plan, index) => (
                        <PricingCard key={index} plan={plan} />
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>

              <div className="mt-20 text-center">
                <h2 className="text-2xl font-bold mb-2">Need a custom solution?</h2>
                <p className="text-muted-foreground mb-6">
                  Contact us for a tailored quote based on your specific requirements.
                </p>
                <Button className="bg-orange-500 hover:bg-orange-600 px-8 py-6 text-base">Request Custom Quote</Button>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Features Comparison */}
        <AnimatedSection>
          <section className="w-full py-12 md:py-24 bg-muted">
            <div className="container px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter mb-4">Compare Features</h2>
                <p className="text-muted-foreground md:text-lg">See which plan is right for your business needs.</p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4 font-medium">Feature</th>
                      <th className="p-4 font-medium text-center">Basic</th>
                      <th className="p-4 font-medium text-center bg-orange-50 border-x border-orange-100">
                        Professional
                      </th>
                      <th className="p-4 font-medium text-center">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-4 font-medium">POS Terminals</td>
                      <td className="p-4 text-center">1</td>
                      <td className="p-4 text-center bg-orange-50 border-x border-orange-100">Up to 3</td>
                      <td className="p-4 text-center">Unlimited</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">Inventory Management</td>
                      <td className="p-4 text-center">Basic</td>
                      <td className="p-4 text-center bg-orange-50 border-x border-orange-100">Advanced</td>
                      <td className="p-4 text-center">Advanced</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">Reporting</td>
                      <td className="p-4 text-center">Basic</td>
                      <td className="p-4 text-center bg-orange-50 border-x border-orange-100">Comprehensive</td>
                      <td className="p-4 text-center">Advanced Analytics</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">Customer Loyalty Program</td>
                      <td className="p-4 text-center">—</td>
                      <td className="p-4 text-center bg-orange-50 border-x border-orange-100">
                        <Check className="mx-auto h-5 w-5 text-green-500" />
                      </td>
                      <td className="p-4 text-center">
                        <Check className="mx-auto h-5 w-5 text-green-500" />
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">Multi-location Support</td>
                      <td className="p-4 text-center">—</td>
                      <td className="p-4 text-center bg-orange-50 border-x border-orange-100">—</td>
                      <td className="p-4 text-center">
                        <Check className="mx-auto h-5 w-5 text-green-500" />
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">API Access</td>
                      <td className="p-4 text-center">—</td>
                      <td className="p-4 text-center bg-orange-50 border-x border-orange-100">—</td>
                      <td className="p-4 text-center">
                        <Check className="mx-auto h-5 w-5 text-green-500" />
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">Mobile App Access</td>
                      <td className="p-4 text-center">—</td>
                      <td className="p-4 text-center bg-orange-50 border-x border-orange-100">
                        <Check className="mx-auto h-5 w-5 text-green-500" />
                      </td>
                      <td className="p-4 text-center">
                        <Check className="mx-auto h-5 w-5 text-green-500" />
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">Support</td>
                      <td className="p-4 text-center">Email</td>
                      <td className="p-4 text-center bg-orange-50 border-x border-orange-100">24/7 Priority</td>
                      <td className="p-4 text-center">24/7 Priority + Dedicated Manager</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">Custom Development</td>
                      <td className="p-4 text-center">—</td>
                      <td className="p-4 text-center bg-orange-50 border-x border-orange-100">—</td>
                      <td className="p-4 text-center">
                        <Check className="mx-auto h-5 w-5 text-green-500" />
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium">On-site Training</td>
                      <td className="p-4 text-center">—</td>
                      <td className="p-4 text-center bg-orange-50 border-x border-orange-100">—</td>
                      <td className="p-4 text-center">
                        <Check className="mx-auto h-5 w-5 text-green-500" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* FAQ Section */}
        <AnimatedSection>
          <section className="w-full py-12 md:py-24 bg-background">
            <div className="container px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter mb-4">Frequently Asked Questions</h2>
                <p className="text-muted-foreground md:text-lg">
                  Find answers to common questions about our pricing and services.
                </p>
              </div>

              <div className="max-w-3xl mx-auto grid gap-6">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-muted rounded-lg p-6"
                  >
                    <h3 className="text-lg font-bold mb-2 flex items-start">
                      <HelpCircle className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{faq.question}</span>
                    </h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <p className="text-muted-foreground mb-4">Still have questions? We're here to help.</p>
                <Button className="bg-orange-500 hover:bg-orange-600">Contact Our Team</Button>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection>
          <section className="w-full py-12 md:py-24 bg-orange-500 text-white">
            <div className="container px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold tracking-tighter mb-4">Ready to Get Started?</h2>
                <p className="text-white/90 md:text-lg mb-8">
                  Try any plan free for 14 days. No credit card required. Cancel anytime.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-white text-orange-500 hover:bg-orange-50">Start Free Trial</Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white/10">
                    Schedule a Demo
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
                  <span className="text-sm text-muted-foreground">(+91)9751633118</span>
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

// Update the interface for PricingPlanProps to remove notIncluded since we're not using it anymore
interface PricingPlanProps {
  name: string
  description: string
  price: string
  period: string
  features: string[]
  cta: string
  popular: boolean
}

function PricingCard({ plan }: { plan: PricingPlanProps }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`rounded-lg border ${
        plan.popular ? "border-orange-100 bg-orange-50" : "bg-background"
      } p-8 shadow-sm relative h-full flex flex-col`}
    >
      {plan.popular && (
        <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white text-sm font-bold px-4 py-2 rounded-full">
          Most Popular
        </div>
      )}
      <div className="mb-6">
        <h3 className="text-3xl font-bold mb-2">{plan.name}</h3>
        <p className="text-muted-foreground">{plan.description}</p>
      </div>
      <div className="mb-8">
        <div className="text-5xl font-bold mb-1">{plan.price}</div>
        <div className="text-muted-foreground">{plan.period}</div>
      </div>
      <div className="space-y-6 mb-8 flex-grow">
        <h4 className="text-lg font-semibold">What's included:</h4>
        <ul className="space-y-4">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <Button
        className={`w-full py-6 text-base ${
          plan.popular ? "bg-orange-500 hover:bg-orange-600" : "bg-background hover:bg-muted border border-input"
        }`}
      >
        {plan.cta}
      </Button>
    </motion.div>
  )
}

