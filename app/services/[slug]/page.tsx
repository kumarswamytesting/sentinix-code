"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Check, Clock, Mail, Menu, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { CompaniesDropdown } from "@/components/companies-dropdown"
import { ServicesDropdown } from "@/components/services-dropdown"
import { AnimatedSection } from "@/components/animated-section"

// Sample services data - this would typically come from a database or API
const services = [
  {
    id: 1,
    name: "POS System Development",
    slug: "pos-system-development",
    shortDescription: "Custom point-of-sale solutions for retail and hospitality businesses",
    description:
      "Our POS system development service provides tailored solutions for retail stores, restaurants, and hospitality businesses. We create intuitive, feature-rich point-of-sale systems that streamline operations, improve customer experience, and boost your bottom line.",
    icon: "💻",
    image: "/images/Portfolio Section/pos-3.jpeg?height=600&width=800",
    features: [
      "Custom UI/UX design tailored to your brand",
      "Inventory management and tracking",
      "Customer relationship management",
      "Sales analytics and reporting",
      "Multi-location support",
      "Employee management and permissions",
      "Integration with payment processors",
      "Mobile POS options",
    ],
    benefits: [
      "Streamlined checkout process",
      "Reduced wait times for customers",
      "Improved inventory accuracy",
      "Enhanced customer data collection",
      "Better business insights through reporting",
      "Increased employee productivity",
      "Reduced training time with intuitive interfaces",
    ],
    process: [
      {
        title: "Discovery",
        description:
          "We begin by understanding your business needs, workflows, and goals to create a tailored POS solution.",
      },
      {
        title: "Design",
        description:
          "Our team designs an intuitive interface that aligns with your brand and optimizes the user experience.",
      },
      {
        title: "Development",
        description:
          "We build your custom POS system using modern technologies and best practices for reliability and performance.",
      },
      {
        title: "Testing",
        description: "Rigorous testing ensures your system works flawlessly across all devices and scenarios.",
      },
      {
        title: "Deployment",
        description:
          "We handle the installation and setup of your new POS system with minimal disruption to your business.",
      },
      {
        title: "Training & Support",
        description:
          "Comprehensive training for your staff and ongoing support ensure you get the most from your system.",
      },
    ],
    caseStudies: [
      {
        title: "Local Restaurant Chain",
        description:
          "Implemented a custom POS system across 5 locations, resulting in 30% faster service times and 20% increase in average order value through strategic upselling features.",
      },
      {
        title: "Boutique Retail Store",
        description:
          "Developed an integrated POS and inventory management system that reduced stockouts by 45% and improved cash flow through better inventory forecasting.",
      },
    ],
  },
  {
    id: 2,
    name: "Accounting Integration",
    slug: "accounting-integration",
    shortDescription: "Seamless integration with popular accounting software and ERP systems",
    description:
      "Our accounting integration services connect your business systems with popular accounting software like QuickBooks, Xero, and Sage. We ensure smooth data flow between your POS, inventory, and financial systems for accurate reporting and simplified operations.",
    icon: "📊",
    image: "/placeholder.svg?height=600&width=800",
    features: [
      "Integration with QuickBooks, Xero, Sage, and more",
      "Automated data synchronization",
      "Custom financial reporting",
      "Tax calculation and management",
      "Multi-currency support",
      "Audit trail and compliance features",
      "Accounts payable and receivable automation",
      "Payroll system integration",
    ],
    benefits: [
      "Eliminated manual data entry and associated errors",
      "Real-time financial visibility",
      "Reduced accounting costs",
      "Faster month-end closing process",
      "Improved cash flow management",
      "Better tax compliance",
      "Streamlined audit processes",
    ],
    process: [
      {
        title: "Assessment",
        description:
          "We evaluate your current systems and accounting needs to determine the optimal integration approach.",
      },
      {
        title: "Planning",
        description:
          "Our team creates a detailed integration plan that maps data flows and defines synchronization rules.",
      },
      {
        title: "Development",
        description: "We build secure API connections between your systems and accounting software.",
      },
      {
        title: "Data Migration",
        description: "Historical data is carefully migrated to ensure continuity and accuracy.",
      },
      {
        title: "Testing",
        description: "Comprehensive testing verifies data integrity and system performance.",
      },
      {
        title: "Training",
        description: "We provide training for your accounting team on the new integrated systems.",
      },
    ],
    caseStudies: [
      {
        title: "Manufacturing Company",
        description:
          "Integrated ERP system with QuickBooks, reducing monthly closing time from 5 days to 1 day and improving financial reporting accuracy by 99.8%.",
      },
      {
        title: "E-commerce Business",
        description:
          "Connected Shopify store with Xero accounting software, automating order-to-invoice process and reducing accounting workload by 15 hours per week.",
      },
    ],
  },
  {
    id: 3,
    name: "Kiosk Integration For Restaurants",
    slug: "kiosk-integration",
    shortDescription: "Self-service kiosk solutions to enhance customer experience in restaurants",
    description:
      "Our restaurant kiosk integration service helps food service businesses implement self-ordering systems that reduce wait times, increase order accuracy, and improve customer satisfaction. We create intuitive interfaces that integrate seamlessly with your existing POS and kitchen systems.",
    icon: "🍽️",
    image: "/placeholder.svg?height=600&width=800",
    features: [
      "User-friendly touchscreen interfaces",
      "Customizable menu displays with images",
      "Special requests and modifications handling",
      "Upselling and cross-selling features",
      "Payment processing integration",
      "Real-time kitchen notifications",
      "Order status tracking for customers",
      "Loyalty program integration",
    ],
    benefits: [
      "Reduced wait times for customers",
      "Increased average order value",
      "Improved order accuracy",
      "Reduced labor costs",
      "Enhanced customer experience",
      "Valuable customer data collection",
      "Ability to serve more customers during peak hours",
    ],
    process: [
      {
        title: "Menu Analysis",
        description: "We analyze your menu to create an optimal digital presentation that encourages upselling.",
      },
      {
        title: "Interface Design",
        description: "Our team designs an intuitive, branded interface that customers of all ages can easily navigate.",
      },
      {
        title: "Hardware Selection",
        description: "We help you select the right kiosk hardware that balances quality, durability, and cost.",
      },
      {
        title: "Software Development",
        description: "Custom software is developed to handle orders, payments, and kitchen communication.",
      },
      {
        title: "POS Integration",
        description: "Seamless integration with your existing POS system ensures consistent data across all platforms.",
      },
      {
        title: "Deployment & Training",
        description: "We handle installation and provide staff training to ensure a smooth transition.",
      },
    ],
    caseStudies: [
      {
        title: "Fast Casual Restaurant Chain",
        description:
          "Implemented self-service kiosks across 12 locations, resulting in 35% faster order processing and 22% increase in average check size.",
      },
      {
        title: "Airport Food Court",
        description:
          "Deployed multilingual kiosks that reduced wait times by 65% during peak hours and increased daily transaction volume by 40%.",
      },
    ],
  },
  {
    id: 4,
    name: "Mobile App Development",
    slug: "mobile-app-development",
    shortDescription: "Native and cross-platform mobile applications for iOS and Android",
    description:
      "Our mobile app development service creates powerful, user-friendly applications for iOS and Android platforms. Whether you need a customer-facing app or an internal tool for your business, we deliver high-quality mobile solutions that engage users and drive results.",
    icon: "📱",
    image: "/placeholder.svg?height=600&width=800",
    features: [
      "Native iOS and Android development",
      "Cross-platform solutions with React Native",
      "User-centered design and testing",
      "Offline functionality",
      "Push notifications and real-time updates",
      "Secure authentication and data protection",
      "Analytics and user behavior tracking",
      "App Store and Google Play submission",
    ],
    benefits: [
      "Enhanced customer engagement",
      "Improved brand visibility and recognition",
      "New revenue streams",
      "Valuable customer data collection",
      "Competitive advantage in your market",
      "Increased customer loyalty",
      "Streamlined business processes",
    ],
    process: [
      {
        title: "Discovery",
        description: "We work with you to define your app's goals, target audience, and key features.",
      },
      {
        title: "UX/UI Design",
        description: "Our designers create intuitive, engaging interfaces that align with your brand identity.",
      },
      {
        title: "Development",
        description: "Experienced developers build your app using the most appropriate technologies for your needs.",
      },
      {
        title: "Quality Assurance",
        description: "Rigorous testing across devices and scenarios ensures your app works flawlessly.",
      },
      {
        title: "Deployment",
        description: "We handle the submission process to app stores and ensure compliance with all requirements.",
      },
      {
        title: "Maintenance & Updates",
        description: "Ongoing support keeps your app running smoothly and up-to-date with platform changes.",
      },
    ],
    caseStudies: [
      {
        title: "Retail Loyalty App",
        description:
          "Developed a customer loyalty app that increased repeat purchases by 45% and boosted average customer lifetime value by 60%.",
      },
      {
        title: "Field Service Management",
        description:
          "Created a mobile solution for a service company that reduced administrative time by 30% and improved first-time fix rates by 25%.",
      },
    ],
  },
  {
    id: 5,
    name: "Web Application Development",
    slug: "web-application-development",
    shortDescription: "Custom web applications with responsive design and modern architecture",
    description:
      "Our web application development service builds powerful, scalable solutions for businesses of all sizes. Using modern frameworks and best practices, we create responsive web applications that work seamlessly across devices and provide exceptional user experiences.",
    icon: "🌐",
    image: "/placeholder.svg?height=600&width=800",
    features: [
      "Responsive design for all devices",
      "Progressive Web App (PWA) capabilities",
      "Modern frontend frameworks (React, Vue, Angular)",
      "Robust backend development",
      "Database design and optimization",
      "API development and integration",
      "Performance optimization",
      "Security best practices implementation",
    ],
    benefits: [
      "Accessible from any device with a browser",
      "No installation required for users",
      "Easier maintenance and updates",
      "Improved operational efficiency",
      "Enhanced data security",
      "Scalable architecture for growth",
      "Seamless integration with existing systems",
    ],
    process: [
      {
        title: "Requirements Analysis",
        description: "We work closely with you to understand your business needs and technical requirements.",
      },
      {
        title: "Architecture Design",
        description: "Our architects design a scalable, secure system that meets your current and future needs.",
      },
      {
        title: "UI/UX Design",
        description: "User-centered design ensures an intuitive, engaging experience for all users.",
      },
      {
        title: "Development",
        description: "Our development team builds your application using modern frameworks and best practices.",
      },
      {
        title: "Testing",
        description: "Comprehensive testing ensures functionality, performance, and security meet our high standards.",
      },
      {
        title: "Deployment & Training",
        description: "We handle deployment and provide training to ensure a smooth transition.",
      },
    ],
    caseStudies: [
      {
        title: "Healthcare Provider Portal",
        description:
          "Developed a secure patient management system that improved administrative efficiency by 40% and enhanced patient communication.",
      },
      {
        title: "Real Estate Management Platform",
        description:
          "Created a property management application that centralized operations and reduced vacancy rates by 15% through better lead management.",
      },
    ],
  },
  {
    id: 6,
    name: "Cloud Solutions",
    slug: "cloud-solutions",
    shortDescription: "Scalable cloud infrastructure and deployment services",
    description:
      "Our cloud solutions service helps businesses leverage the power of cloud computing for improved scalability, reliability, and cost efficiency. We provide comprehensive cloud strategy, migration, and management services tailored to your specific business needs.",
    icon: "☁️",
    image: "/placeholder.svg?height=600&width=800",
    features: [
      "Cloud strategy and architecture design",
      "Migration to AWS, Azure, or Google Cloud",
      "Hybrid and multi-cloud solutions",
      "Serverless architecture implementation",
      "Containerization with Docker and Kubernetes",
      "Cloud security and compliance",
      "Cost optimization and management",
      "24/7 monitoring and support",
    ],
    benefits: [
      "Improved scalability and flexibility",
      "Reduced infrastructure costs",
      "Enhanced disaster recovery capabilities",
      "Better performance and reliability",
      "Increased security and compliance",
      "Faster deployment of new features",
      "Pay-as-you-go pricing models",
    ],
    process: [
      {
        title: "Assessment",
        description: "We evaluate your current infrastructure and business needs to develop the right cloud strategy.",
      },
      {
        title: "Planning",
        description: "Our team creates a detailed migration plan that minimizes disruption to your business.",
      },
      {
        title: "Architecture Design",
        description: "We design a cloud architecture that optimizes performance, security, and cost-efficiency.",
      },
      {
        title: "Migration",
        description: "Careful migration of your applications and data to the cloud environment.",
      },
      {
        title: "Optimization",
        description: "Continuous refinement of your cloud infrastructure to improve performance and reduce costs.",
      },
      {
        title: "Management & Support",
        description: "Ongoing monitoring, maintenance, and support to ensure optimal operation.",
      },
    ],
    caseStudies: [
      {
        title: "Financial Services Firm",
        description:
          "Migrated legacy systems to AWS, improving system reliability from 99.5% to 99.99% uptime while reducing infrastructure costs by 35%.",
      },
      {
        title: "E-learning Platform",
        description:
          "Implemented auto-scaling cloud architecture that handled a 500% increase in users during peak periods with no performance degradation.",
      },
    ],
  },
]

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  // Find the service that matches the slug
  const service = services.find((s) => s.slug === params.slug)

  // If no service is found, show a not found message
  if (!service) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Service not found</h1>
        <p className="mt-4">The service you're looking for doesn't exist.</p>
        <Link href="/services" className="mt-4 text-orange-500 hover:underline">
          Back to Services
        </Link>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Top Bar */}
      <div className="hidden md:block w-full bg-muted py-2">
        <div className="container flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center text-sm text-muted-foreground">
              <Clock className="h-4 w-4 mr-2" />
              <span>Office Times: Mon - Fri 9:00 - 17:00</span>
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
              <Link
                href="/pricing"
                className="flex items-center text-lg font-medium text-muted-foreground transition-colors hover:text-orange-500"
              >
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
        <section className="w-full py-16 md:py-24 bg-gradient-to-br from-background via-background to-muted relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern"></div>
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-start">
              <Link href="/services" className="flex items-center text-muted-foreground hover:text-orange-500 mb-6">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Services
              </Link>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-4 max-w-3xl"
              >
                <div className="inline-block rounded-lg bg-orange-100 text-orange-500 px-3 py-1 text-sm font-medium mb-2">
                  {service.icon} Service
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">{service.name}</h1>
                <p className="text-muted-foreground md:text-xl/relaxed">{service.description}</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Service Image */}
        <AnimatedSection>
          <section className="w-full py-12 md:py-16 bg-background">
            <div className="container px-4 md:px-6">
              <div className="rounded-xl overflow-hidden">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.name}
                  className="w-full h-auto object-cover"
                  style={{ maxHeight: "500px" }}
                />
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Features Section */}
        <AnimatedSection>
          <section className="w-full py-12 md:py-24 bg-muted">
            <div className="container px-4 md:px-6">
              <div className="grid gap-12 md:grid-cols-2">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Key Features</h2>
                  <ul className="space-y-4">
                    {service.features.map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-start"
                      >
                        <Check className="h-6 w-6 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-6">Benefits</h2>
                  <ul className="space-y-4">
                    {service.benefits.map((benefit, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-start"
                      >
                        <Check className="h-6 w-6 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Process Section */}
        <AnimatedSection>
          <section className="w-full py-12 md:py-24 bg-background">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold mb-12 text-center">Our Process</h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {service.process.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-muted p-6 rounded-lg border"
                  >
                    <div className="w-12 h-12 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center text-xl font-bold mb-4">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Case Studies Section */}
        <AnimatedSection>
          <section className="w-full py-12 md:py-24 bg-muted">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold mb-12 text-center">Success Stories</h2>
              <div className="grid gap-8 md:grid-cols-2">
                {service.caseStudies.map((caseStudy, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-background p-8 rounded-lg border"
                  >
                    <h3 className="text-xl font-bold mb-4">{caseStudy.title}</h3>
                    <p className="text-muted-foreground">{caseStudy.description}</p>
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
                <h2 className="text-3xl font-bold tracking-tighter mb-4">Ready to Get Started?</h2>
                <p className="text-white/90 md:text-lg mb-8">
                  Contact us today to discuss how our {service.name.toLowerCase()} services can help your business grow
                  and succeed.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-white text-orange-500 hover:bg-orange-50">Schedule a Consultation</Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white/10">
                    View Pricing
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
                {services.map((s) => (
                  <li key={s.id}>
                    <Link
                      href={`/services/${s.slug}`}
                      className={`text-sm ${s.slug === service.slug ? "text-orange-500 font-medium" : "text-muted-foreground hover:text-orange-500"}`}
                    >
                      {s.name}
                    </Link>
                  </li>
                ))}
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

