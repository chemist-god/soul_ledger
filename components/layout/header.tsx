"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Logo } from "@/components/icons/logo"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Globe, User, ChevronDown, ChevronRight } from "lucide-react"
import { toast } from "sonner"
import { BRAND, COLORS, ROUTES, NAV_HEADER, TOAST } from "@/lib/gen-variable"

export function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 w-full z-50 pt-4 px-4 md:px-8 transition-all duration-300">
            <div className={`mx-auto flex h-16 w-full max-w-7xl items-center justify-between rounded-full bg-[${COLORS.background}]/70 backdrop-blur-md px-6 lg:px-8 shadow-sm border border-black/5`}>
                <Link href={ROUTES.home} className="flex items-center gap-2 mr-6">
                    <Logo className={`h-8 w-auto text-[${COLORS.primary}]`} />
                    <span className="font-bold text-xl tracking-tight text-black">
                        {BRAND.name}
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-8 text-[14px] font-medium text-black">
                    {NAV_HEADER.map((item) => (
                        <Link key={item.label} href={item.url} className="hover:text-black/70 transition-colors">
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-3">
                    <div className="hidden lg:flex items-center gap-1 cursor-pointer text-black hover:text-black/70 transition-colors mr-2">
                        <Globe className="h-[18px] w-[18px]" />
                        <ChevronDown className="h-4 w-4" />
                    </div>

                    <div className="hidden md:flex items-center gap-2 lg:gap-3">
                        <Button
                            onClick={() => toast(TOAST.bookDemo.title, { description: TOAST.bookDemo.description })}
                            className={`bg-[${COLORS.primary}] text-black hover:bg-[${COLORS.primaryHover}] font-semibold rounded-full px-5 h-10 text-[14px]`}
                        >
                            Book a demo <ChevronRight className="ml-1 h-4 w-4" />
                        </Button>
                        <Button
                            variant="outline"
                            className={`rounded-full px-5 h-10 border-foreground/20 text-black hover:bg-[${COLORS.primary}] hover:border-[${COLORS.primary}] hover:text-black font-semibold transition-colors text-[14px] bg-transparent`}
                            asChild
                        >
                            <Link href={ROUTES.getStarted}>
                                Get started <ChevronRight className="ml-1 h-4 w-4" />
                            </Link>
                        </Button>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => toast(TOAST.accountAccess.title, { description: TOAST.accountAccess.description })}
                            className="w-10 h-10 rounded-full hover:bg-black/5 text-black"
                        >
                            <User className="h-[20px] w-[20px]" />
                            <span className="sr-only">Account</span>
                        </Button>
                    </div>

                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="md:hidden text-black hover:bg-black/5 rounded-full">
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent
                            side="top"
                            className={`w-[92%] sm:max-w-md mx-auto top-[76px] rounded-3xl bg-[${COLORS.background}]/85 backdrop-blur-2xl border border-black/10 p-6 shadow-2xl data-[state=closed]:duration-200 data-[state=open]:duration-300`}
                            style={{
                                left: "50%",
                                transform: "translateX(-50%)",
                                right: "auto"
                            }}
                        >
                            <div className="flex flex-col gap-6 mt-2">
                                {/* Mobile Header Logo */}
                                <Link href={ROUTES.home} className="flex items-center gap-2 mb-2">
                                    <Logo className={`h-7 w-auto text-[${COLORS.primary}]`} />
                                    <span className="font-bold text-xl tracking-tight text-black">
                                        {BRAND.name}
                                    </span>
                                </Link>

                                {/* Navigation Links */}
                                <nav className="flex flex-col gap-5">
                                    {NAV_HEADER.map((item) => (
                                        <Link key={item.label} href={item.url} className="text-xl font-semibold text-black hover:text-black/70 transition-colors">
                                            {item.label}
                                        </Link>
                                    ))}
                                </nav>

                                <div className="h-px bg-black/10 my-1" />

                                {/* Mobile CTAs */}
                                <div className="flex flex-col gap-3 pb-4">
                                    <Button
                                        onClick={() => toast(TOAST.bookDemo.title, { description: TOAST.bookDemo.description })}
                                        className={`w-full h-12 bg-[${COLORS.primary}] text-black hover:bg-[${COLORS.primaryHover}] rounded-full font-semibold text-base shadow-sm`}
                                    >
                                        Book a demo <ChevronRight className="ml-1 h-5 w-5" />
                                    </Button>
                                    <Button variant="outline" className={`w-full h-12 rounded-full border-black/20 text-black hover:bg-[${COLORS.primary}] hover:border-[${COLORS.primary}] hover:text-black font-semibold transition-colors text-base bg-transparent`} asChild>
                                        <Link href={ROUTES.getStarted}>
                                            Get started <ChevronRight className="ml-1 h-5 w-5" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}
