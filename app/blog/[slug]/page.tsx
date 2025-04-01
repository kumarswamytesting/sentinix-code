"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Calendar, Clock, Facebook, Linkedin, Mail, Menu, Phone, Twitter, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { CompaniesDropdown } from "@/components/companies-dropdown"
import { ServicesDropdown } from "@/components/services-dropdown"
import { AnimatedSection } from "@/components/animated-section"
import { Tag } from "lucide-react"

// Sample blog posts data - this would typically come from a database or API
const blogPosts = [
  {
    id: 1,
    title: "The Future of POS Systems: Trends to Watch in 2023",
    slug: "future-of-pos-systems-2023",
    excerpt:
      "Explore the emerging trends in point-of-sale technology that are reshaping the retail and hospitality industries.",
    content: `
      <p>The point-of-sale (POS) landscape is rapidly evolving, driven by technological advancements and changing consumer expectations. As we move through 2023, several key trends are emerging that will shape the future of POS systems across retail, hospitality, and service industries.</p>
      
      <h2>Cloud-Based POS Solutions</h2>
      <p>Cloud technology has revolutionized POS systems by offering greater flexibility, scalability, and accessibility. Cloud-based POS solutions allow businesses to access their data from anywhere, making it easier to manage multiple locations and enabling real-time updates and reporting. This trend is accelerating as businesses recognize the benefits of reduced hardware costs, automatic software updates, and improved data security.</p>
      
      <h2>Mobile POS Expansion</h2>
      <p>Mobile POS systems continue to gain traction, particularly in retail and restaurant environments. These systems allow staff to process transactions anywhere in the store or at tableside, reducing wait times and enhancing customer experience. The latest mobile POS solutions integrate seamlessly with other business systems and offer features like inventory management, customer relationship management, and analytics.</p>
      
      <h2>Contactless Payment Integration</h2>
      <p>The demand for contactless payment options has surged in recent years, and POS systems are adapting accordingly. Modern POS solutions now routinely support NFC payments, digital wallets like Apple Pay and Google Pay, and even cryptocurrency transactions. This trend is expected to continue as consumers increasingly prefer the convenience and security of contactless payments.</p>
      
      <h2>AI and Machine Learning Applications</h2>
      <p>Artificial intelligence and machine learning are transforming POS systems from simple transaction processors to intelligent business tools. AI-powered POS systems can analyze customer data to provide personalized recommendations, predict inventory needs, detect fraudulent transactions, and optimize pricing strategies. As these technologies mature, we can expect even more sophisticated applications that help businesses make data-driven decisions.</p>
      
      <h2>Enhanced Customer Experience Features</h2>
      <p>Today's POS systems are increasingly focused on improving the customer experience. Features like customer-facing displays, personalized loyalty programs, and targeted promotions based on purchase history are becoming standard. Some advanced systems even incorporate augmented reality to help customers visualize products or virtual fitting rooms to try on clothes digitally.</p>
      
      <h2>Integration with E-commerce Platforms</h2>
      <p>As omnichannel retail becomes the norm, POS systems that seamlessly integrate with e-commerce platforms are essential. These integrated solutions ensure consistent inventory management, pricing, and customer data across all sales channels. This trend is particularly important for businesses that operate both physical stores and online shops, as it provides a unified view of operations and customer interactions.</p>
      
      <h2>Advanced Analytics and Reporting</h2>
      <p>Data is increasingly valuable for business decision-making, and modern POS systems are responding with more sophisticated analytics and reporting capabilities. Today's systems offer real-time dashboards, customizable reports, and predictive analytics that help businesses understand sales patterns, customer behavior, and operational efficiency. These insights enable more informed decisions about inventory, staffing, marketing, and overall business strategy.</p>
      
      <h2>Conclusion</h2>
      <p>The future of POS systems is bright, with continued innovation driving greater functionality, efficiency, and customer satisfaction. Businesses that stay abreast of these trends and invest in modern POS solutions will be well-positioned to meet evolving consumer expectations and gain a competitive edge in their respective markets.</p>
      
      <p>As technology continues to advance, we can expect POS systems to become even more integrated with other business systems, more intelligent in their data analysis, and more focused on enhancing the customer experience. The most successful businesses will be those that view their POS system not just as a tool for processing transactions, but as a central component of their overall business strategy.</p>
    `,
    category: "Technology",
    tags: ["POS", "Retail", "Technology Trends"],
    image: "/images/Portfolio Section/pos.jpeg?height=600&width=800",
    author: {
      name: "Alex Johnson",
      role: "CTO",
      avatar: "/images/avator/avator.jpg?height=100&width=100",
      bio: "Alex has over 15 years of experience in retail technology and has helped numerous businesses implement cutting-edge POS solutions.",
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
    content: `
      <p>Cloud-based accounting software has revolutionized financial management for small businesses, offering unprecedented accessibility, efficiency, and insights. This transformation is enabling small business owners to take greater control of their finances and make more informed decisions.</p>
      
      <h2>The Evolution of Small Business Accounting</h2>
      <p>Traditionally, small business accounting involved manual bookkeeping or desktop software that was often cumbersome, limited to a single computer, and required regular backups and updates. Cloud accounting has changed this paradigm by moving financial data and processing to secure online servers, accessible from anywhere with an internet connection.</p>
      
      <h2>Key Benefits for Small Businesses</h2>
      
      <h3>Accessibility and Collaboration</h3>
      <p>Perhaps the most significant advantage of cloud accounting is the ability to access financial data from anywhere, at any time. Business owners can check their financial position while traveling, meeting with clients, or working from home. Additionally, cloud solutions facilitate collaboration between business owners, staff, and accountants, as multiple users can access the system simultaneously with appropriate permission levels.</p>
      
      <h3>Real-Time Financial Visibility</h3>
      <p>Cloud accounting provides real-time updates on financial status, allowing business owners to make decisions based on current data rather than outdated reports. This visibility extends to cash flow, profit and loss, outstanding invoices, and other critical financial metrics that influence day-to-day operations and strategic planning.</p>
      
      <h3>Automation and Efficiency</h3>
      <p>Modern cloud accounting platforms automate many time-consuming tasks, such as data entry, bank reconciliations, and recurring invoices. This automation reduces errors, saves time, and allows business owners and their staff to focus on more valuable activities. Some systems can even use artificial intelligence to categorize transactions and suggest accounting entries.</p>
      
      <h3>Cost-Effective Scalability</h3>
      <p>Cloud accounting solutions typically operate on a subscription model, eliminating the need for large upfront investments in software. As a business grows, the accounting system can easily scale to accommodate increased transaction volumes, additional users, or more complex financial requirements. This scalability makes cloud accounting particularly suitable for startups and growing businesses.</p>
      
      <h3>Integration Capabilities</h3>
      <p>Cloud accounting platforms often integrate seamlessly with other business systems, such as point-of-sale, inventory management, customer relationship management, and e-commerce platforms. These integrations create a cohesive ecosystem that streamlines operations and provides a more comprehensive view of the business.</p>
      
      <h2>Implementation Considerations</h2>
      <p>While the benefits of cloud accounting are substantial, small businesses should consider several factors when implementing a new system:</p>
      
      <ul>
        <li>Data security and privacy compliance</li>
        <li>Internet reliability and backup procedures</li>
        <li>Training requirements for staff</li>
        <li>Integration with existing systems</li>
        <li>Customization needs for industry-specific requirements</li>
      </ul>
      
      <h2>The Future of Small Business Accounting</h2>
      <p>As cloud accounting technology continues to evolve, we can expect even greater automation through artificial intelligence and machine learning, more sophisticated financial analytics, and enhanced integration with emerging technologies like blockchain for secure transactions and smart contracts.</p>
      
      <h2>Conclusion</h2>
      <p>Cloud-based accounting is not just changing how small businesses manage their finances; it's transforming how they operate and compete in the marketplace. By providing real-time insights, automating routine tasks, and facilitating collaboration, cloud accounting empowers small business owners to make more informed decisions, improve cash flow management, and focus on growth strategies.</p>
      
      <p>For small businesses still using traditional accounting methods, the transition to cloud-based solutions represents a significant opportunity to improve efficiency, gain better financial visibility, and position the business for future success in an increasingly digital economy.</p>
    `,
    category: "Finance",
    tags: ["Accounting", "Cloud Solutions", "Small Business"],
    image: "/images/Portfolio Section/account integration.jpeg?height=600&width=800",
    author: {
      name: "Sarah Chen",
      role: "Financial Analyst",
      avatar: "/images/avator/avator.jpg?height=100&width=100",
      bio: "Sarah specializes in financial technology and has helped dozens of small businesses optimize their accounting processes.",
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
      bio: "Michael is a UX designer specializing in creating intuitive interfaces for restaurant technology.",
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
      bio: "Emily has developed over 30 mobile applications for iOS and Android platforms.",
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
      bio: "David is a certified information security specialist with expertise in web application security.",
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
      bio: "Jennifer has helped dozens of companies successfully migrate their infrastructure to the cloud.",
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
      bio: "Robert specializes in the application of AI and machine learning in software development processes.",
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
    image: "images/Portfolio Section/ecomers.jpeg?height=600&width=800",
    author: {
      name: "Lisa Martinez",
      role: "E-commerce Specialist",
      avatar: "/images/avator/avator.jpg?height=100&width=100",
      bio: "Lisa has helped numerous e-commerce businesses optimize their websites for better performance and higher conversion rates.",
    },
    date: "November 5, 2022",
    readTime: "7 min read",
  },
]

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // Find the blog post that matches the slug
  const post = blogPosts.find((p) => p.slug === params.slug)

  // Get related posts (same category, excluding current post)
  const relatedPosts = post ? blogPosts.filter((p) => p.category === post.category && p.id !== post.id).slice(0, 3) : []

  // If no post is found, show a not found message
  if (!post) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Blog post not found</h1>
        <p className="mt-4">The blog post you're looking for doesn't exist.</p>
        <Link href="/blog" className="mt-4 text-orange-500 hover:underline">
          Back to Blog
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
              <Link
                href="/pricing"
                className="flex items-center text-lg font-medium text-muted-foreground transition-colors hover:text-orange-500"
              >
                Pricing
              </Link>
              <Link href="/blog" className="flex items-center text-lg font-medium text-foreground">
                Blog
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
        {/* Blog Post Header */}
        <section className="w-full py-16 md:py-24 bg-gradient-to-br from-background via-background to-muted relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern"></div>
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-start">
              <Link href="/blog" className="flex items-center text-muted-foreground hover:text-orange-500 mb-6">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Link>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-4 max-w-3xl"
              >
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{post.title}</h1>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <img
                      src={post.author.avatar || "/placeholder.svg"}
                      alt={post.author.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-medium">{post.author.name}</div>
                    <div className="text-sm text-muted-foreground">{post.author.role}</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <AnimatedSection>
          <section className="w-full py-8 bg-background">
            <div className="container px-4 md:px-6">
              <div className="rounded-xl overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-auto object-cover"
                  style={{ maxHeight: "500px" }}
                />
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Blog Content */}
        <AnimatedSection>
          <section className="w-full py-12 md:py-16 bg-background">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col md:flex-row gap-8">
                {/* Main Content */}
                <div className="w-full md:w-2/3">
                  <article className="prose prose-lg max-w-none">
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                  </article>

                  {/* Tags */}
                  <div className="mt-8 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <div
                        key={tag}
                        className="bg-muted text-sm px-3 py-1 rounded-full hover:bg-orange-100 hover:text-orange-500 cursor-pointer"
                      >
                        <Tag className="h-3 w-3 inline mr-1" />
                        {tag}
                      </div>
                    ))}
                  </div>

                  {/* Share */}
                  <div className="mt-8 border-t border-b py-6">
                    <div className="flex items-center justify-between">
                      <div className="font-medium">Share this article</div>
                      <div className="flex gap-3">
                        <Button variant="ghost" size="icon" className="rounded-full">
                          <Facebook className="h-5 w-5" />
                        </Button>
                        <Button variant="ghost" size="icon" className="rounded-full">
                          <Twitter className="h-5 w-5" />
                        </Button>
                        <Button variant="ghost" size="icon" className="rounded-full">
                          <Linkedin className="h-5 w-5" />
                        </Button>
                        <Button variant="ghost" size="icon" className="rounded-full">
                          <Mail className="h-5 w-5" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Author Bio */}
                  <div className="mt-8 bg-muted p-6 rounded-lg">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                        <img
                          src={post.author.avatar || "/placeholder.svg"}
                          alt={post.author.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">About {post.author.name}</h3>
                        <div className="text-sm text-muted-foreground mb-2">{post.author.role}</div>
                        <p>{post.author.bio}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="w-full md:w-1/3">
                  {/* Recent Posts */}
                  <div className="mb-8 bg-muted p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-4">Recent Posts</h3>
                    <div className="space-y-4">
                      {blogPosts
                        .filter((p) => p.id !== post.id)
                        .slice(0, 4)
                        .map((recentPost) => (
                          <div key={recentPost.id} className="flex items-start gap-3">
                            <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                              <img
                                src={recentPost.image || "/placeholder.svg"}
                                alt={recentPost.title}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div>
                              <Link
                                href={`/blog/${recentPost.slug}`}
                                className="font-medium hover:text-orange-500 line-clamp-2"
                              >
                                {recentPost.title}
                              </Link>
                              <div className="text-xs text-muted-foreground mt-1">{recentPost.date}</div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>

                  {/* Categories */}
                  <div className="mb-8 bg-muted p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-4">Categories</h3>
                    <div className="space-y-2">
                      {Array.from(new Set(blogPosts.map((p) => p.category))).map((category) => (
                        <div
                          key={category}
                          className="flex items-center justify-between cursor-pointer hover:text-orange-500"
                        >
                          <span>{category}</span>
                          <span className="text-xs bg-background px-2 py-1 rounded-full">
                            {blogPosts.filter((p) => p.category === category).length}
                          </span>
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
                      <input
                        type="email"
                        placeholder="Your email address"
                        className="w-full px-3 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white"
                      />
                      <Button className="w-full bg-white text-orange-500 hover:bg-orange-50">Subscribe</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <AnimatedSection>
            <section className="w-full py-12 md:py-24 bg-muted">
              <div className="container px-4 md:px-6">
                <h2 className="text-3xl font-bold mb-8 text-center">Related Articles</h2>
                <div className="grid gap-8 md:grid-cols-3">
                  {relatedPosts.map((relatedPost, index) => (
                    <motion.div
                      key={relatedPost.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-background rounded-lg overflow-hidden border"
                    >
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={relatedPost.image || "/placeholder.svg"}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs font-medium bg-orange-100 text-orange-500 px-2 py-1 rounded-full">
                            {relatedPost.category}
                          </span>
                          <span className="text-xs text-muted-foreground">{relatedPost.date}</span>
                        </div>
                        <h3 className="text-xl font-bold mb-2">
                          <Link href={`/blog/${relatedPost.slug}`} className="hover:text-orange-500">
                            {relatedPost.title}
                          </Link>
                        </h3>
                        <p className="text-muted-foreground mb-4 line-clamp-2">{relatedPost.excerpt}</p>
                        <Link
                          href={`/blog/${relatedPost.slug}`}
                          className="text-orange-500 hover:text-orange-600 font-medium flex items-center"
                        >
                          Read More <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          </AnimatedSection>
        )}

        {/* CTA Section */}
        <AnimatedSection>
          <section className="w-full py-12 md:py-24 bg-orange-500 text-white">
            <div className="container px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold tracking-tighter mb-4">Ready to Get Started?</h2>
                <p className="text-white/90 md:text-lg mb-8">
                  Contact us today to discuss how our services can help your business grow and succeed.
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

