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

const pricingPlans = {
  monthly: [
    {
      name: "Starter",
      description: "Perfect for small businesses and startups",
      price: "$1,499",
      features: [
        "Custom website development",
        "Mobile responsive design",
        "Basic SEO optimization",
        "Contact form integration",
        "5 pages included",
        "1 month of support",
      ],
      notIncluded: ["E-commerce functionality", "Custom database integration", "Advanced analytics", "API development"],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses with specific needs",
      price: "$3,999",
      features: [
        "Everything in Starter",
        "E-commerce functionality",
        "Custom database integration",
        "Advanced SEO optimization",
        "Content management system",
        "Up to 15 pages",
        "3 months of support",
        "Performance optimization",
      ],
      notIncluded: ["Custom API development", "Third-party integrations", "Advanced security features"],
      cta: "Choose Professional",
      popular: true,
    },
    {
      name: "Enterprise",
      description: "Tailored solutions for large organizations",
      price: "Custom",
      features: [
        "Everything in Professional",
        "Custom API development",
        "Third-party integrations",
        "Advanced security features",
        "Dedicated project manager",
        "Unlimited pages",
        "12 months of support",
        "Performance monitoring",
        "Regular maintenance",
        "Priority support",
      ],
      notIncluded: [],
      cta: "Contact Us",
      popular: false,
    },
  ],
  annually: [
    {
      name: "Starter",
      description: "Perfect for small businesses and startups",
      price: "$14,990",
      features: [
        "Custom website development",
        "Mobile responsive design",
        "Basic SEO optimization",
        "Contact form integration",
        "5 pages included",
        "12 months of support",
        "Quarterly performance reviews",
      ],
      notIncluded: ["E-commerce functionality", "Custom database integration", "Advanced analytics", "API development"],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses with specific needs",
      price: "$39,990",
      features: [
        "Everything in Starter",
        "E-commerce functionality",
        "Custom database integration",
        "Advanced SEO optimization",
        "Content management system",
        "Up to 15 pages",
        "12 months of support",
        "Performance optimization",
        "Monthly performance reviews",
      ],
      notIncluded: ["Custom API development", "Third-party integrations", "Advanced security features"],
      cta: "Choose Professional",
      popular: true,
    },
    {
      name: "Enterprise",
      description: "Tailored solutions for large organizations",
      price: "Custom",
      features: [
        "Everything in Professional",
        "Custom API development",
        "Third-party integrations",
        "Advanced security features",
        "Dedicated project manager",
        "Unlimited pages",
        "24 months of support",
        "Performance monitoring",
        "Regular maintenance",
        "Priority support",
        "Weekly performance reviews",
      ],
      notIncluded: [],
      cta: "Contact Us",
      popular: false,
    },
  ],
}

const faqs = [
  {
    question: "How long does it take to complete a project?",
    answer:
      "Project timelines vary depending on complexity and scope. A typical website project takes 4-8 weeks, while more complex applications can take 3-6 months. We'll provide a detailed timeline during our initial consultation.",
  },
  {
    question: "Do you offer ongoing maintenance and support?",
    answer:
      "Yes, we offer various maintenance and support packages to keep your software running smoothly. Each pricing tier includes a specific support period, and we can customize extended support plans based on your needs.",
  },
  {
    question: "Can I upgrade my plan later?",
    answer:
      "You can upgrade your plan at any time. We'll assess your current implementation and provide a seamless transition to a higher tier with additional features and capabilities.",
  },
  {
    question: "Do you offer custom solutions outside of these packages?",
    answer:
      "Yes, we specialize in custom software development. If our standard packages don't meet your specific requirements, we'll work with you to create a tailored solution that addresses your unique business needs.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept various payment methods including credit cards, bank transfers, and PayPal. For larger projects, we typically structure payments in milestones throughout the development process.",
  },
  {
    question: "Is there a money-back guarantee?",
    answer:
      "We work on a milestone-based approach, where you approve completed work before proceeding to the next phase. While we don't offer traditional refunds, this approach ensures you're satisfied with the deliverables at each stage of development.",
  },
]

interface PricingPlanProps {
  name: string
  description: string
  price: string
  features: string[]
  notIncluded: string[]
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
        plan.popular ? "border-orange-200 bg-orange-50" : "bg-background"
      } p-6 shadow-sm relative`}
    >
      {plan.popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
          Most Popular
        </div>
      )}
      <div className="mb-6">
        <h3 className="text-2xl font-bold">{plan.name}</h3>
        <p className="text-muted-foreground mt-1">{plan.description}</p>
      </div>
      <div className="mb-6">
        <div className="text-4xl font-bold">{plan.price}</div>
        {plan.price !== "Custom" && <div className="text-muted-foreground text-sm mt-1">One-time payment</div>}
      </div>
      <div className="space-y-4 mb-6">
        <h4 className="font-medium">What's included:</h4>
        <ul className="space-y-2">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>

        {plan.notIncluded.length > 0 && (
          <>
            <h4 className="font-medium">Not included:</h4>
            <ul className="space-y-2">
              {plan.notIncluded.map((feature, index) => (
                <li key={index} className="flex items-start text-muted-foreground">
                  <span className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0">—</span>
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
      <Button
        className={`w-full ${
          plan.popular ? "bg-orange-500 hover:bg-orange-600" : "bg-background hover:bg-muted border border-input"
        }`}
      >
        {plan.cta}
      </Button>
    </motion.div>
  )
}

export default function PricingClientPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annually">("monthly")
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
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Login
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Register
            </Link>
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
            <nav className="hidden gap-6 md:flex">
              <Link
                href="/"
                className="flex items-center text-lg font-medium text-muted-foreground transition-colors hover:text-orange-500"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="flex items-center text-lg font-medium text-muted-foreground transition-colors hover:text-orange-500"
              >
                About Us
              </Link>
              <CompaniesDropdown />
              <ServicesDropdown />
              <Link
                href="/portfolio"
                className="flex items-center text-lg font-medium text-muted-foreground transition-colors hover:text-orange-500"
              >
                Portfolio
              </Link>
              <Link href="/pricing" className="flex items-center text-lg font-medium text-foreground">
                Pricing
              </Link>
              <Link
                href="/contact"
                className="flex items-center text-lg font-medium text-muted-foreground transition-colors hover:text-orange-500"
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
                  Pricing Plans
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Transparent <span className="text-orange-500">Pricing</span> for Your Needs
                </h1>
                <p className="text-muted-foreground md:text-xl/relaxed">
                  Choose the perfect plan for your business with our flexible pricing options.
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
                  className="w-full max-w-md"
                  onValueChange={(value) => setBillingCycle(value as "monthly" | "annually")}
                >
                  <div className="flex justify-center mb-8">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="monthly">Monthly</TabsTrigger>
                      <TabsTrigger value="annually">
                        Annually
                        <span className="ml-2 rounded-full bg-orange-100 px-2 py-0.5 text-xs text-orange-600">
                          Save 15%
                        </span>
                      </TabsTrigger>
                    </TabsList>
                  </div>

                  <TabsContent value="monthly">
                    <div className="grid gap-6 md:grid-cols-3">
                      {currentPlans.map((plan, index) => (
                        <PricingCard key={index} plan={plan} />
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="annually">
                    <div className="grid gap-6 md:grid-cols-3">
                      {currentPlans.map((plan, index) => (
                        <PricingCard key={index} plan={plan} />
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>

              <div className="mt-16 text-center">
                <h2 className="text-2xl font-bold mb-2">Need a custom solution?</h2>
                <p className="text-muted-foreground mb-6">
                  Contact us for a tailored quote based on your specific requirements.
                </p>
                <Button className="bg-orange-500 hover:bg-orange-600">Request Custom Quote</Button>
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
                      <th className="p-4 font-medium text-center">Starter</th>
                      <th className="p-4 font-medium text-center bg-orange-50 border-x border-orange-100">
                        Professional
                      </th>
                      <th className="p-4 font-medium text-center">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-4 font-medium">Custom Website Development</td>
                      <td className="p-4 text-center">
                        <Check className="mx-auto h-5 w-5 text-green-500" />
                      </td>
                      <td className="p-4 text-center bg-orange-50 border-x border-orange-100">
                        <Check className="mx-auto h-5 w-5 text-green-500" />
                      </td>
                      <td className="p-4 text-center">
                        <Check className="mx-auto h-5 w-5 text-green-500" />
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">Mobile Responsive Design</td>
                      <td className="p-4 text-center">
                        <Check className="mx-auto h-5 w-5 text-green-500" />
                      </td>
                      <td className="p-4 text-center bg-orange-50 border-x border-orange-100">
                        <Check className="mx-auto h-5 w-5 text-green-500" />
                      </td>
                      <td className="p-4 text-center">
                        <Check className="mx-auto h-5 w-5 text-green-500" />
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">SEO Optimization</td>
                      <td className="p-4 text-center">Basic</td>
                      <td className="p-4 text-center bg-orange-50 border-x border-orange-100">Advanced</td>
                      <td className="p-4 text-center">Premium</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">E-commerce Functionality</td>
                      <td className="p-4 text-center">—</td>
                      <td className="p-4 text-center bg-orange-50 border-x border-orange-100">
                        <Check className="mx-auto h-5 w-5 text-green-500" />
                      </td>
                      <td className="p-4 text-center">
                        <Check className="mx-auto h-5 w-5 text-green-500" />
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">Custom Database Integration</td>
                      <td className="p-4 text-center">—</td>
                      <td className="p-4 text-center bg-orange-50 border-x border-orange-100">
                        <Check className="mx-auto h-5 w-5 text-green-500" />
                      </td>
                      <td className="p-4 text-center">
                        <Check className="mx-auto h-5 w-5 text-green-500" />
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">Content Management System</td>
                      <td className="p-4 text-center">—</td>
                      <td className="p-4 text-center bg-orange-50 border-x border-orange-100">
                        <Check className="mx-auto h-5 w-5 text-green-500" />
                      </td>
                      <td className="p-4 text-center">
                        <Check className="mx-auto h-5 w-5 text-green-500" />
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">Custom API Development</td>
                      <td className="p-4 text-center">—</td>
                      <td className="p-4 text-center bg-orange-50 border-x border-orange-100">—</td>
                      <td className="p-4 text-center">
                        <Check className="mx-auto h-5 w-5 text-green-500" />
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">Third-party Integrations</td>
                      <td className="p-4 text-center">—</td>
                      <td className="p-4 text-center bg-orange-50 border-x border-orange-100">—</td>
                      <td className="p-4 text-center">
                        <Check className="mx-auto h-5 w-5 text-green-500" />
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">Support Period</td>
                      <td className="p-4 text-center">1 month</td>
                      <td className="p-4 text-center bg-orange-50 border-x border-orange-100">3 months</td>
                      <td className="p-4 text-center">12 months</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">Dedicated Project Manager</td>
                      <td className="p-4 text-center">—</td>
                      <td className="p-4 text-center bg-orange-50 border-x border-orange-100">—</td>
                      <td className="p-4 text-center">
                        <Check className="mx-auto h-5 w-5 text-green-500" />
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium">Priority Support</td>
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
                  Choose the plan that's right for your business and start your digital transformation journey today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-white text-orange-500 hover:bg-orange-50">View Plans</Button>
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

