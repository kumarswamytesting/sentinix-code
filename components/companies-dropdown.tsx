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

const companies = [
  {
    name: "TechCorp",
    description: "Enterprise software solutions for streamlined operations",
    slug: "techcorp",
  },
  {
    name: "GreenEnergy",
    description: "Renewable energy monitoring and optimization platform",
    slug: "greenenergy",
  },
  {
    name: "HealthPlus",
    description: "Patient management system for healthcare providers",
    slug: "healthplus",
  },
  {
    name: "RetailPro",
    description: "Omnichannel retail solution with inventory management",
    slug: "retailpro",
  },
  {
    name: "FinanceHub",
    description: "Financial analytics and reporting dashboard",
    slug: "financehub",
  },
  {
    name: "LogisticsMaster",
    description: "Supply chain optimization and tracking system",
    slug: "logisticsmaster",
  },
]

export function CompaniesDropdown() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className="text-lg font-medium bg-transparent text-muted-foreground hover:text-foreground data-[state=open]:text-foreground"
            showArrow={true}
          >
            Companies
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {companies.map((company) => (
                <ListItem key={company.slug} title={company.name} href={`/companies/${company.slug}`}>
                  {company.description}
                </ListItem>
              ))}
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

