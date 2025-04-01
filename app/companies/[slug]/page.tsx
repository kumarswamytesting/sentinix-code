"use client"

import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Globe, MapPin } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AnimatedSection } from "@/components/animated-section"

// This would typically come from a database or API
const companies = {
  techcorp: {
    name: "TechCorp",
    description: "Enterprise software solutions for streamlined operations",
    fullDescription:
      "TechCorp is a leading provider of enterprise software solutions designed to streamline operations and enhance productivity. Our partnership with TechCorp resulted in the development of a comprehensive digital transformation strategy that included custom software development, cloud migration, and implementation of AI-driven analytics.",
    industry: "Technology",
    location: "San Francisco, CA",
    founded: "2005",
    website: "techcorp.example.com",
    projectTitle: "Enterprise Digital Transformation",
    projectDescription:
      "We partnered with TechCorp to develop a comprehensive digital transformation strategy that included custom software development, cloud migration, and implementation of AI-driven analytics.",
    challenges: [
      "Legacy systems with limited scalability",
      "Siloed data across multiple departments",
      "Inefficient manual processes",
      "Growing security concerns",
    ],
    solutions: [
      "Custom enterprise resource planning (ERP) system",
      "Cloud migration with AWS infrastructure",
      "AI-powered analytics dashboard",
      "Automated workflow processes",
      "Enhanced security protocols",
    ],
    results: [
      "35% increase in operational efficiency",
      "50% reduction in manual data entry",
      "Real-time visibility across all departments",
      "Scalable infrastructure supporting 200% growth",
      "99.9% system uptime",
    ],
    images: [
      "/images/companies/tech corp.jpg?height=600&width=800",
      "/images/Portfolio Section/account integration.jpeg?height=600&width=800",
      "/images/Portfolio Section/hospital.jpeg?height=600&width=800",
      "/images/Portfolio Section/financial.jpeg?height=600&width=800",
    ],
    testimonial: {
      quote:
        "Sentinix transformed our operations with their innovative solutions. Their team's expertise and dedication were instrumental in our successful digital transformation journey.",
      author: "Sarah Johnson",
      title: "CTO, TechCorp",
    },
  },
  greenenergy: {
    name: "GreenEnergy",
    description: "Renewable energy monitoring and optimization platform",
    fullDescription:
      "GreenEnergy is a pioneer in renewable energy solutions, focusing on solar and wind power generation. Our collaboration with GreenEnergy involved creating an advanced monitoring and optimization platform that uses IoT sensors and real-time analytics to maximize energy production efficiency.",
    industry: "Renewable Energy",
    location: "Copenhagen, Denmark",
    founded: "2010",
    website: "greenenergy.example.com",
    projectTitle: "Renewable Energy Monitoring Platform",
    projectDescription:
      "We developed an advanced monitoring and optimization platform that uses IoT sensors and real-time analytics to maximize energy production efficiency for GreenEnergy's solar and wind installations.",
    challenges: [
      "Inefficient monitoring of distributed energy assets",
      "Limited real-time data analysis capabilities",
      "Manual maintenance scheduling",
      "Difficulty predicting optimal energy production conditions",
    ],
    solutions: [
      "IoT sensor integration across all energy assets",
      "Real-time monitoring dashboard with predictive analytics",
      "Automated maintenance scheduling system",
      "Weather pattern analysis for production optimization",
      "Mobile application for field technicians",
    ],
    results: [
      "28% increase in energy production efficiency",
      "45% reduction in maintenance costs",
      "Predictive maintenance reducing downtime by 60%",
      "Enhanced decision-making through real-time data",
      "Scalable platform supporting 500+ energy assets",
    ],
    images: [
      "/images/companies/green.jpg?height=600&width=800",
      "/images/companies/green.jpg?height=600&width=800",
      "/images/Portfolio Section/intentory2.jpeg?height=600&width=800",
      "/images/Portfolio Section/inventory.jpeg?height=600&width=800",
    ],
    testimonial: {
      quote:
        "The monitoring platform developed by Sentinix has revolutionized how we manage our renewable energy assets. The insights gained have directly translated to improved efficiency and reduced costs.",
      author: "Lars Nielsen",
      title: "Operations Director, GreenEnergy",
    },
  },
  healthplus: {
    name: "HealthPlus",
    description: "Patient management system for healthcare providers",
    fullDescription:
      "HealthPlus is a healthcare technology company dedicated to improving patient care through innovative digital solutions. We worked with HealthPlus to create a comprehensive patient management system that streamlines administrative tasks, enhances communication, and improves overall patient experience.",
    industry: "Healthcare",
    location: "Boston, MA",
    founded: "2012",
    website: "healthplus.example.com",
    projectTitle: "Integrated Patient Management System",
    projectDescription:
      "We created a comprehensive patient management system that streamlines administrative tasks, enhances communication between providers and patients, and improves overall patient experience.",
    challenges: [
      "Fragmented patient records across multiple systems",
      "Inefficient appointment scheduling processes",
      "Limited patient engagement outside of visits",
      "Compliance with strict healthcare regulations",
      "Integration with existing hospital systems",
    ],
    solutions: [
      "Centralized electronic health record (EHR) system",
      "Patient portal with secure messaging and appointment scheduling",
      "Automated reminder system reducing no-shows",
      "HIPAA-compliant data storage and transmission",
      "API integrations with laboratory and pharmacy systems",
    ],
    results: [
      "40% reduction in administrative workload",
      "30% decrease in appointment no-shows",
      "95% patient satisfaction rating",
      "Seamless integration with 15+ healthcare systems",
      "Full regulatory compliance with audit trails",
    ],
    images: [
      "/images/companies/health.jpg?height=600&width=800",
      "/images/companies/health.jpg?height=600&width=800",
      "/images/Portfolio Section/hospital.jpeg?height=600&width=800",
      "/images/Portfolio Section/hospital.jpeg?height=600&width=800",
    ],
    testimonial: {
      quote:
        "The patient management system developed by Sentinix has transformed our practice. We've seen significant improvements in efficiency, patient satisfaction, and our ability to deliver quality care.",
      author: "Dr. Michael Chen",
      title: "Medical Director, HealthPlus",
    },
  },
  retailpro: {
    name: "RetailPro",
    description: "Omnichannel retail solution with inventory management",
    fullDescription:
      "RetailPro is a leading retail technology company providing solutions for both online and brick-and-mortar stores. Our partnership with RetailPro focused on developing an omnichannel retail platform that unifies inventory management, customer data, and sales processes across all retail channels.",
    industry: "Retail",
    location: "Chicago, IL",
    founded: "2008",
    website: "retailpro.example.com",
    projectTitle: "Omnichannel Retail Platform",
    projectDescription:
      "We developed an integrated omnichannel retail platform that unifies inventory management, customer data, and sales processes across online and physical store locations.",
    challenges: [
      "Disconnected inventory systems between online and physical stores",
      "Inconsistent customer experience across channels",
      "Limited visibility into real-time sales and inventory data",
      "Inefficient order fulfillment processes",
      "Lack of personalized customer engagement",
    ],
    solutions: [
      "Unified inventory management system across all channels",
      "Centralized customer database with 360-degree view",
      "Real-time sales analytics dashboard",
      "Optimized order fulfillment with ship-from-store capabilities",
      "AI-powered product recommendations",
    ],
    results: [
      "25% increase in overall sales",
      "42% improvement in inventory turnover",
      "60% reduction in out-of-stock situations",
      "35% higher average order value through personalization",
      "Seamless customer experience across all touchpoints",
    ],
    images: [
      "/images/companies/retailpro.jpg?height=600&width=800",
      "/images/Portfolio Section/account integration.jpeg?height=600&width=800",
      "/images/Portfolio Section/ecomers.jpeg?height=600&width=800",
      "/images/Portfolio Section/inventory.jpeg?height=600&width=800",
    ],
    testimonial: {
      quote:
        "Sentinix delivered a game-changing omnichannel solution that has transformed our retail operations. The platform has not only improved our efficiency but has significantly enhanced our customers' shopping experience.",
      author: "Jennifer Williams",
      title: "VP of Digital, RetailPro",
    },
  },
  financehub: {
    name: "FinanceHub",
    description: "Financial analytics and reporting dashboard",
    fullDescription:
      "FinanceHub is a financial technology company specializing in data analytics and reporting solutions for financial institutions. We collaborated with FinanceHub to create a sophisticated analytics dashboard that provides real-time insights, automated reporting, and predictive financial modeling.",
    industry: "Financial Services",
    location: "New York, NY",
    founded: "2015",
    website: "financehub.example.com",
    projectTitle: "Financial Analytics Dashboard",
    projectDescription:
      "We created a sophisticated analytics dashboard that provides real-time insights, automated reporting, and predictive financial modeling for institutional clients.",
    challenges: [
      "Complex data integration from multiple financial sources",
      "Time-consuming manual reporting processes",
      "Limited predictive analysis capabilities",
      "Strict security and compliance requirements",
      "Need for customizable visualizations for different user roles",
    ],
    solutions: [
      "Automated data integration from 20+ financial sources",
      "Real-time dashboard with customizable reporting",
      "Machine learning models for predictive financial analysis",
      "Bank-grade security with multi-factor authentication",
      "Role-based access control and visualization options",
    ],
    results: [
      "85% reduction in report generation time",
      "Improved decision-making through real-time insights",
      "Predictive models with 92% accuracy rate",
      "Full compliance with financial regulations",
      "Scalable solution supporting 10,000+ concurrent users",
    ],
    images: [
      "/images/companies/financehib.jpg?height=600&width=800",
      "/images/Portfolio Section/financial.jpeg?height=600&width=800",
      "/images/Portfolio Section/inventory.jpeg?height=600&width=800",
      "/images/Portfolio Section/intentory2.jpeg?height=600&width=800",
    ],
    testimonial: {
      quote:
        "The analytics dashboard developed by Sentinix has revolutionized how we process and analyze financial data. The insights gained have directly contributed to our strategic decision-making and growth.",
      author: "Robert Keller",
      title: "Chief Analytics Officer, FinanceHub",
    },
  },
  logisticsmaster: {
    name: "LogisticsMaster",
    description: "Supply chain optimization and tracking system",
    fullDescription:
      "LogisticsMaster is a global logistics company specializing in supply chain management and optimization. Our work with LogisticsMaster involved developing an end-to-end supply chain tracking and optimization system that provides real-time visibility, predictive analytics, and automated decision-making capabilities.",
    industry: "Logistics & Supply Chain",
    location: "Singapore",
    founded: "2007",
    website: "logisticsmaster.example.com",
    projectTitle: "Supply Chain Optimization Platform",
    projectDescription:
      "We developed an end-to-end supply chain tracking and optimization system that provides real-time visibility, predictive analytics, and automated decision-making capabilities.",
    challenges: [
      "Limited visibility across global supply chain",
      "Inefficient route planning and resource allocation",
      "Delayed response to supply chain disruptions",
      "Manual tracking and reporting processes",
      "Integration with diverse supplier systems",
    ],
    solutions: [
      "Real-time tracking system with IoT integration",
      "AI-powered route optimization algorithms",
      "Predictive analytics for disruption management",
      "Automated reporting and alert system",
      "Open API architecture for supplier integration",
    ],
    results: [
      "30% reduction in transportation costs",
      "25% improvement in on-time delivery performance",
      "60% faster response to supply chain disruptions",
      "Complete end-to-end visibility across global operations",
      "Successful integration with 200+ supplier systems",
    ],
    images: [
      "/images/companies/logistics.jpg?height=600&width=800",
      "/images/Portfolio Section/account integration.jpeg?height=600&width=800",
      "/images/Portfolio Section/enterprice.jpeg?height=600&width=800",
      "/images/Portfolio Section/intentory2.jpeg?height=600&width=800",
    ],
    testimonial: {
      quote:
        "Sentinix's supply chain platform has transformed our global logistics operations. The visibility and optimization capabilities have resulted in significant cost savings and improved service levels for our customers.",
      author: "David Wong",
      title: "Global Supply Chain Director, LogisticsMaster",
    },
  },
}

export default function CompanyPage({ params }: { params: { slug: string } }) {
  const company = companies[params.slug as keyof typeof companies]

  if (!company) {
    return <div>Company not found</div>
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold">Sentinix</span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="hidden md:flex">
              <a href="/contact">
              Get Started</a>
            </Button>
            <Button className="hidden md:flex">
              <a href="/contact"> Contact Us</a>
             </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container py-8 md:py-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link
              href="/"
              className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid gap-8 md:grid-cols-[2fr_1fr]"
          >
            <div>
              <motion.h1 variants={itemVariants} className="text-3xl font-bold tracking-tight md:text-4xl mb-4">
                {company.projectTitle}
              </motion.h1>
              <motion.p variants={itemVariants} className="text-xl text-muted-foreground mb-8">
                {company.projectDescription}
              </motion.p>

              <motion.div variants={itemVariants} className="aspect-video overflow-hidden rounded-lg border mb-8">
                <img
                  src={company.images[0] || "/placeholder.svg"}
                  alt={`${company.name} Project`}
                  className="object-cover w-full h-full"
                />
              </motion.div>

              <AnimatedSection>
                <Tabs defaultValue="overview" className="mb-8">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="challenges">Challenges & Solutions</TabsTrigger>
                    <TabsTrigger value="results">Results</TabsTrigger>
                  </TabsList>
                  <TabsContent value="overview" className="pt-6">
                    <div className="space-y-4">
                      <p>{company.fullDescription}</p>
                      <div className="grid grid-cols-2 gap-4 mt-6">
                        {company.images.slice(1).map((image, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="aspect-video overflow-hidden rounded-lg border"
                          >
                            <img
                              src={image || "/placeholder.svg"}
                              alt={`${company.name} Project ${index + 2}`}
                              className="object-cover w-full h-full"
                            />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="challenges" className="pt-6">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-semibold mb-4">Challenges</h3>
                        <ul className="space-y-2">
                          {company.challenges.map((challenge, index) => (
                            <motion.li
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.3, delay: index * 0.1 }}
                              className="flex items-start"
                            >
                              <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-primary" />
                              <span>{challenge}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-4">Solutions</h3>
                        <ul className="space-y-2">
                          {company.solutions.map((solution, index) => (
                            <motion.li
                              key={index}
                              initial={{ opacity: 0, x: 20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.3, delay: index * 0.1 }}
                              className="flex items-start"
                            >
                              <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-primary" />
                              <span>{solution}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="results" className="pt-6">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold mb-4">Key Results</h3>
                        <ul className="space-y-2">
                          {company.results.map((result, index) => (
                            <motion.li
                              key={index}
                              initial={{ opacity: 0, y: 10 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.3, delay: index * 0.1 }}
                              className="flex items-start"
                            >
                              <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-primary" />
                              <span>{result}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="bg-muted p-6 rounded-lg border"
                      >
                        <blockquote className="text-lg italic mb-4">"{company.testimonial.quote}"</blockquote>
                        <div>
                          <div className="font-semibold">{company.testimonial.author}</div>
                          <div className="text-sm text-muted-foreground">{company.testimonial.title}</div>
                        </div>
                      </motion.div>
                    </div>
                  </TabsContent>
                </Tabs>
              </AnimatedSection>
            </div>

            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="sticky top-24 rounded-lg border p-6 space-y-6"
              >
                <div>
                  <h2 className="text-2xl font-bold mb-4">{company.name}</h2>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm">
                      <Globe className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">Industry:</span>
                      <span className="ml-auto font-medium">{company.industry}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">Location:</span>
                      <span className="ml-auto font-medium">{company.location}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">Founded:</span>
                      <span className="ml-auto font-medium">{company.founded}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Globe className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">Website:</span>
                      <span className="ml-auto font-medium">{company.website}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold">Project Timeline</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center">
                        <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span>Project Duration</span>
                      </div>
                      <span className="font-medium">6 months</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center">
                        <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span>Completed</span>
                      </div>
                      <span className="font-medium">2023</span>
                    </div>
                  </div>
                </div>

                <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                  <Button className="w-full">
                    <a href="/contact">
                    Contact Us About This Project</a></Button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </main>
      <footer className="w-full border-t bg-background py-6 md:py-12">
        <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 Sentinix. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-sm font-medium text-muted-foreground underline-offset-4 hover:underline">
              Terms
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground underline-offset-4 hover:underline">
              Privacy
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground underline-offset-4 hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

