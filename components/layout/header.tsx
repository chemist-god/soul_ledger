"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Globe, User, ChevronDown } from "lucide-react"
import { Logo } from "@/components/icons/logo"

const components: { title: string; href: string; description: string }[] = [
    {
        title: "Travel Management",
        href: "/product/travel",
        description: "Book, manage, and report on business travel all in one place.",
    },
    {
        title: "Expense Management",
        href: "/product/expense",
        description: "Automate expense reports and reimbursements.",
    },
    {
        title: "Corporate Cards",
        href: "/product/cards",
        description: "Issue physical and virtual cards with built-in controls.",
    },
    {
        title: "Events",
        href: "/product/events",
        description: "Plan and manage company offsites and team gatherings.",
    },
]

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between px-4 md:px-6">
                <Link href="/" className="flex items-center gap-2 mr-6">
                    <Logo className="h-8 w-auto text-primary" />
                    <span className="font-bold text-xl tracking-tight">
                        perk
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium">
                    <Link href="#" className="hover:text-primary transition-colors">Product</Link>
                    <Link href="#" className="hover:text-primary transition-colors">Solutions</Link>
                    <Link href="#" className="hover:text-primary transition-colors">Customers</Link>
                    <Link href="#" className="hover:text-primary transition-colors">Pricing</Link>
                    <Link href="#" className="hover:text-primary transition-colors">Integrations</Link>
                </nav>

                <div className="flex items-center gap-4">
                    <div className="hidden md:flex items-center gap-2">
                        <Button variant="ghost" size="icon" className="text-muted-foreground w-9 h-9">
                            <Globe className="h-5 w-5" />
                            <span className="sr-only">Language</span>
                        </Button>
                        <ChevronDown className="h-4 w-4 text-muted-foreground -ml-1 mr-1" />
                    </div>

                    <div className="hidden md:flex items-center gap-3">
                        <Button className="bg-[#BAFF4C] text-black hover:bg-[#a3e63d] font-semibold rounded-full px-5 h-10">
                            Book a demo
                        </Button>
                        <Button variant="outline" className="rounded-full px-5 h-10 border-foreground/20 hover:bg-muted font-medium">
                            Get started
                        </Button>
                        <Button variant="ghost" size="icon" className="w-9 h-9">
                            <User className="h-5 w-5" />
                            <span className="sr-only">Account</span>
                        </Button>
                    </div>

                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="md:hidden -mr-2">
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right">
                            <nav className="flex flex-col gap-4 mt-8">
                                <Link href="#" className="text-lg font-medium">Product</Link>
                                <Link href="#" className="text-lg font-medium">Solutions</Link>
                                <Link href="#" className="text-lg font-medium">Customers</Link>
                                <Link href="#" className="text-lg font-medium">Pricing</Link>
                                <Link href="#" className="text-lg font-medium">Integrations</Link>
                                <div className="h-px bg-border my-2" />
                                <Button className="w-full bg-[#BAFF4C] text-black hover:bg-[#a3e63d] rounded-full">Book a demo</Button>
                                <Button variant="outline" className="w-full rounded-full">Get started</Button>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
