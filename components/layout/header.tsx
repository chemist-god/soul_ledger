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
import { Menu } from "lucide-react"
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
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center">
                <Link href="/" className="mr-8 flex items-center gap-2">
                    <Logo className="h-8 w-8 text-primary" />
                    <span className="hidden font-bold sm:inline-block text-xl">
                        Perk
                    </span>
                </Link>
                <div className="hidden mr-4 md:flex">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Product</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                        <li className="row-span-3">
                                            <NavigationMenuLink asChild>
                                                <a
                                                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted to-muted/50 p-6 no-underline outline-none focus:shadow-md"
                                                    href="/"
                                                >
                                                    <Logo className="h-6 w-6 text-primary" />
                                                    <div className="mb-2 mt-4 text-lg font-medium">
                                                        Perk Platform
                                                    </div>
                                                    <p className="text-sm leading-tight text-muted-foreground">
                                                        The all-in-one platform for modern business travel and spend.
                                                    </p>
                                                </a>
                                            </NavigationMenuLink>
                                        </li>
                                        <ListItem href="/product/travel" title="Travel">
                                            Global inventory and 24/7 support.
                                        </ListItem>
                                        <ListItem href="/product/expense" title="Expenses">
                                            Automated reporting and reconciliation.
                                        </ListItem>
                                        <ListItem href="/product/cards" title="Cards">
                                            Smart corporate cards with built-in controls.
                                        </ListItem>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                        {components.map((component) => (
                                            <ListItem
                                                key={component.title}
                                                title={component.title}
                                                href={component.href}
                                            >
                                                {component.description}
                                            </ListItem>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/pricing" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        Pricing
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/customers" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        Customers
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
                <div className="flex flex-1 items-center justify-end space-x-4">
                    <nav className="flex items-center space-x-2">
                        <Button variant="ghost" className="hidden sm:inline-flex">Log in</Button>
                        <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-6">Book a demo</Button>
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className="md:hidden">
                                    <Menu className="h-5 w-5" />
                                    <span className="sr-only">Toggle menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right">
                                <nav className="flex flex-col gap-4 mt-8">
                                    <Link href="#" className="text-lg font-medium">Product</Link>
                                    <Link href="#" className="text-lg font-medium">Solutions</Link>
                                    <Link href="#" className="text-lg font-medium">Pricing</Link>
                                    <Link href="#" className="text-lg font-medium">Customers</Link>
                                    <div className="h-px bg-border my-2" />
                                    <Link href="#" className="text-lg font-medium">Log in</Link>
                                    <Button className="w-full bg-primary text-primary-foreground">Book a demo</Button>
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </nav>
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
