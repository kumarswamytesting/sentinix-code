"use client"

import * as React from "react"
import Link from "next/link"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const services = [
  {
    name: "POS System Development",
    description: "Custom point-of-sale solutions for retail and hospitality businesses",
    slug: "pos-system-development",
  },
  {
    name: "Accounting Integration",
    description: "Seamless integration with popular accounting software and ERP systems",
    slug: "accounting-integration",
  },
  {
    name: "Kiosk Integration For Restaurants",
    description: "Self-service kiosk solutions to enhance customer experience in restaurants",
    slug: "kiosk-integration",
  },
  {
    name: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android",
    slug: "mobile-app-development",
  },
  {
    name: "Web Application Development",
    description: "Custom web applications with responsive design and modern architecture",
    slug: "web-application-development",
  },
  {
    name: "Cloud Solutions",
    description: "Scalable cloud infrastructure and deployment services",
    slug: "cloud-solutions",
  },
]

export function ServicesDropdown() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className="text-lg font-medium bg-transparent text-muted-foreground hover:text-foreground data-[state=open]:text-foreground"
            showArrow={true}
          >
            Services
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[500px]">
              {services.map((service) => (
                <ListItem key={service.slug} title={service.name} href={`/services/${service.slug}`}>
                  {service.description}
                </ListItem>
              ))}
              <ListItem title="All Services" href="/services" className="border-t pt-3 mt-2">
                View all our services
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <Link
          ref={ref as React.Ref<HTMLAnchorElement>}
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-orange-50 hover:text-orange-600"
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
        </Link>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"

