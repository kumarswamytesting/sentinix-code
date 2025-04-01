"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Calendar, Clock, Mail, Menu, Phone, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CompaniesDropdown } from "@/components/companies-dropdown"
import { ServicesDropdown } from "@/components/services-dropdown"
import { AnimatedSection } from "@/components/animated-section"

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: "The Future of POS Systems: Trends to Watch in 2023",
    slug: "future-of-pos-systems-2023",
    excerpt:
      "Explore the emerging trends in point-of-sale technology that are reshaping the retail and hospitality industries.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.",
    category: "Technology",
    tags: ["POS", "Retail", "Technology Trends"],
    image: "/images/Portfolio Section/pos.jpeg?height=600&width=800",
    author: {
      name: "Alex Johnson",
      role: "CTO",
      avatar: "/images/avator/avator.jpg?height=100&width=100",
    },
    date: "June 15, 2023",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "How Cloud-Based Accounting Is Transforming Small Businesses",
    slug: "cloud-based-accounting-small-businesses",
    excerpt:
      "Discover how small businesses are leveraging cloud accounting solutions to streamline operations and improve financial management.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.",
    category: "Finance",
    tags: ["Accounting", "Cloud Solutions", "Small Business"],
    image: "/images/Portfolio Section/account integration.jpeg?height=600&width=800",
    author: {
      name: "Sarah Chen",
      role: "Financial Analyst",
      avatar: "/images/avator/avator.jpg?height=100&width=100",
    },
    date: "May 28, 2023",
    readTime: "7 min read",
  },
  {
    id: 3,
    title: "Restaurant Kiosks: Enhancing Customer Experience and Efficiency",
    slug: "restaurant-kiosks-customer-experience",
    excerpt:
      "Learn how self-service kiosks are revolutionizing the dining experience and helping restaurants operate more efficiently.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.",
    category: "Hospitality",
    tags: ["Restaurants", "Kiosks", "Customer Experience"],
    image: "/images/Portfolio Section/kiosk.jpeg?height=600&width=800",
    author: {
      name: "Michael Rodriguez",
      role: "UX Designer",
      avatar: "/images/avator/avator.jpg?height=100&width=100",
    },
    date: "April 12, 2023",
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "Mobile App Development: Native vs. Cross-Platform in 2023",
    slug: "native-vs-cross-platform-2023",
    excerpt:
      "A comprehensive comparison of native and cross-platform mobile app development approaches for businesses in 2023.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.",
    category: "Development",
    tags: ["Mobile Apps", "React Native", "Swift", "Kotlin"],
    image: "/images/Portfolio Section/mobile.jpeg?height=600&width=800",
    author: {
      name: "Emily Patel",
      role: "Mobile Developer",
      avatar: "/images/avator/avator.jpg?height=100&width=100",
    },
    date: "March 5, 2023",
    readTime: "8 min read",
  },
  {
    id: 5,
    title: "Web Application Security: Best Practices for Businesses",
    slug: "web-application-security-best-practices",
    excerpt:
      "Essential security practices every business should implement to protect their web applications from common threats.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.",
    category: "Security",
    tags: ["Cybersecurity", "Web Development", "Data Protection"],
    image: "/images/Portfolio Section/web.jpeg?height=600&width=800",
    author: {
      name: "David Kim",
      role: "Security Specialist",
      avatar: "/images/avator/avator.jpg?height=100&width=100",
    },
    date: "February 18, 2023",
    readTime: "10 min read",
  },
  {
    id: 6,
    title: "Migrating to the Cloud: A Step-by-Step Guide for Businesses",
    slug: "cloud-migration-step-by-step-guide",
    excerpt:
      "A practical guide to help businesses successfully plan and execute their migration to cloud infrastructure.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.",
    category: "Cloud",
    tags: ["Cloud Migration", "AWS", "Azure", "Google Cloud"],
    image: "/images/Portfolio Section/cloud.jpeg?height=600&width=800",
    author: {
      name: "Jennifer Wilson",
      role: "Cloud Architect",
      avatar: "/images/avator/avator.jpg?height=100&width=100",
    },
    date: "January 30, 2023",
    readTime: "12 min read",
  },
  {
    id: 7,
    title: "The Impact of AI on Modern Software Development",
    slug: "ai-impact-software-development",
    excerpt:
      "Exploring how artificial intelligence is changing the landscape of software development and what it means for businesses.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.",
    category: "Technology",
    tags: ["AI", "Machine Learning", "Software Development"],
    image: "/images/Portfolio Section/ai.jpeg?height=600&width=800",
    author: {
      name: "Robert Taylor",
      role: "AI Researcher",
      avatar: "/images/avator/avator.jpg?height=100&width=100",
    },
    date: "December 12, 2022",
    readTime: "9 min read",
  },
  {
    id: 8,
    title: "Optimizing E-commerce Performance for Better Conversion Rates",
    slug: "ecommerce-performance-optimization",
    excerpt: "Practical strategies to improve your e-commerce website's performance and boost conversion rates.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.",
    category: "E-commerce",
    tags: ["Performance", "Conversion Rate", "UX Design"],
    image: "/images/Portfolio Section/ecomers.jpeg?height=600&width=800",
    author: {
      name: "Lisa Martinez",
      role: "E-commerce Specialist",
      avatar: "/images/avator/avator.jpg?height=100&width=100",
    },
    date: "November 5, 2022",
    readTime: "7 min read",
  },
]

// Get unique categories from blog posts
const categories = ["All", ...new Set(blogPosts.map((post) => post.category))]

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("All")
  const [visiblePosts, setVisiblePosts] = useState(6)
  const [isLoading, setIsLoading] = useState(false)

  // Filter posts based on search query and active category
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = activeCategory === "All" || post.category === activeCategory
    return matchesSearch && matchesCategory
  })

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
              <Link
                href="/pricing"
                className="flex items-center text-lg font-medium text-muted-foreground transition-colors hover:text-orange-500 px-1"
              >
                Pricing
              </Link>
              <Link href="/blog" className="flex items-center text-lg font-medium text-foreground px-1">
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
                  Our Blog
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Insights & <span className="text-orange-500">Resources</span>
                </h1>
                <p className="text-muted-foreground md:text-xl/relaxed max-w-2xl mx-auto">
                  Stay updated with the latest trends, tips, and insights in technology and business.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Blog Content Section */}
        <AnimatedSection>
          <section className="w-full py-12 md:py-24 bg-background">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col md:flex-row gap-8">
                {/* Main Content */}
                <div className="w-full md:w-2/3">
                  {/* Search Bar */}
                  <div className="mb-8">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        placeholder="Search articles..."
                        className="pl-10"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Category Tabs */}
                  <div className="mb-8">
                    <Tabs defaultValue="All" onValueChange={setActiveCategory}>
                      <TabsList className="w-full overflow-x-auto flex whitespace-nowrap">
                        {categories.map((category) => (
                          <TabsTrigger key={category} value={category} className="flex-shrink-0">
                            {category}
                          </TabsTrigger>
                        ))}
                      </TabsList>
                    </Tabs>
                  </div>

                  {/* Blog Posts Grid */}
                  {filteredPosts.length > 0 ? (
                    <div className="grid gap-8">
                      {filteredPosts.slice(0, visiblePosts).map((post, index) => (
                        <BlogPostCard key={post.id} post={post} index={index} />
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <h3 className="text-xl font-medium mb-2">No posts found</h3>
                      <p className="text-muted-foreground">
                        Try adjusting your search or filter to find what you're looking for.
                      </p>
                    </div>
                  )}

                  {/* Pagination */}
                  {filteredPosts.length > visiblePosts && (
                    <div className="mt-12 flex justify-center">
                      <Button
                        className="bg-orange-500 hover:bg-orange-600"
                        onClick={() => {
                          setIsLoading(true)
                          // Simulate loading delay
                          setTimeout(() => {
                            setVisiblePosts((prev) => prev + 3)
                            setIsLoading(false)
                          }, 800)
                        }}
                        disabled={isLoading}
                      >
                        {isLoading ? (
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
                            Loading...
                          </span>
                        ) : (
                          "Load More"
                        )}
                      </Button>
                    </div>
                  )}
                </div>

                {/* Sidebar */}
                <div className="w-full md:w-1/3">
                  {/* Recent Posts */}
                  <div className="mb-8 bg-muted p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-4">Recent Posts</h3>
                    <div className="space-y-4">
                      {blogPosts.slice(0, 4).map((post) => (
                        <div key={post.id} className="flex items-start gap-3">
                          <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                            <img
                              src={post.image || "/placeholder.svg"}
                              alt={post.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <Link
                              href={`/blog/${post.slug}`}
                              className="font-medium hover:text-orange-500 line-clamp-2"
                            >
                              {post.title}
                            </Link>
                            <div className="text-xs text-muted-foreground mt-1">{post.date}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Categories */}
                  <div className="mb-8 bg-muted p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-4">Categories</h3>
                    <div className="space-y-2">
                      {categories
                        .filter((cat) => cat !== "All")
                        .map((category) => (
                          <div
                            key={category}
                            className="flex items-center justify-between cursor-pointer hover:text-orange-500"
                            onClick={() => setActiveCategory(category)}
                          >
                            <span>{category}</span>
                            <span className="text-xs bg-background px-2 py-1 rounded-full">
                              {blogPosts.filter((post) => post.category === category).length}
                            </span>
                          </div>
                        ))}
                    </div>
                  </div>

                  {/* Popular Tags */}
                  <div className="mb-8 bg-muted p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-4">Popular Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {Array.from(new Set(blogPosts.flatMap((post) => post.tags)))
                        .slice(0, 10)
                        .map((tag) => (
                          <div
                            key={tag}
                            className="bg-background text-sm px-3 py-1 rounded-full hover:bg-orange-100 hover:text-orange-500 cursor-pointer"
                          >
                            {tag}
                          </div>
                        ))}
                    </div>
                  </div>

                  {/* Newsletter Signup */}
                  <div className="bg-orange-500 text-white p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-2">Subscribe to Our Newsletter</h3>
                    <p className="mb-4 text-white/90">
                      Get the latest articles and resources sent straight to your inbox.
                    </p>
                    <div className="space-y-2">
                      <Input
                        placeholder="Your email address"
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus-visible:ring-white"
                      />
                      <Button className="w-full bg-white text-orange-500 hover:bg-orange-50">Subscribe</Button>
                    </div>
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
                <h2 className="text-3xl font-bold tracking-tighter mb-4">Have a Project in Mind?</h2>
                <p className="text-white/90 md:text-lg mb-8">
                  Let's discuss how our services can help your business grow and succeed.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-white text-orange-500 hover:bg-orange-50">Get in Touch</Button>
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

interface BlogPostProps {
  post: {
    id: number
    title: string
    slug: string
    excerpt: string
    category: string
    tags: string[]
    image: string
    author: {
      name: string
      role: string
      avatar: string
    }
    date: string
    readTime: string
  }
  index: number
}

function BlogPostCard({ post, index }: BlogPostProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col md:flex-row gap-6 border-b pb-8"
    >
      <div className="w-full md:w-1/3">
        <div className="aspect-video rounded-lg overflow-hidden">
          <img
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
      <div className="w-full md:w-2/3">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-medium bg-orange-100 text-orange-500 px-2 py-1 rounded-full">
            {post.category}
          </span>
          <span className="text-xs text-muted-foreground flex items-center">
            <Calendar className="h-3 w-3 mr-1" /> {post.date}
          </span>
          <span className="text-xs text-muted-foreground flex items-center">
            <Clock className="h-3 w-3 mr-1" /> {post.readTime}
          </span>
        </div>
        <h3 className="text-xl font-bold mb-2">
          <Link href={`/blog/${post.slug}`} className="hover:text-orange-500">
            {post.title}
          </Link>
        </h3>
        <p className="text-muted-foreground mb-4">{post.excerpt}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full overflow-hidden">
              <img
                src={post.author.avatar || "/placeholder.svg"}
                alt={post.author.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="text-sm font-medium">{post.author.name}</div>
              <div className="text-xs text-muted-foreground">{post.author.role}</div>
            </div>
          </div>
          <Link
            href={`/blog/${post.slug}`}
            className="text-orange-500 hover:text-orange-600 font-medium flex items-center"
          >
            Read More <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

