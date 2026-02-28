"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
    CreditCard,
    LayoutDashboard,
    LifeBuoy,
    Receipt,
    Send,
    Settings2,
    PieChart,
    Wallet,
    LogOut,
    Building2,
    ChevronsUpDown,
    UserCircle,
    BadgeCheck
} from "lucide-react"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarRail,
    SidebarSeparator,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    useSidebar,
} from "@/components/ui/sidebar"
import { Logo } from "@/components/icons/logo"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { toast } from "sonner"

const data = {
    user: {
        name: "Ana Torres",
        email: "ana@techflow.com",
        avatar: "/images/img_3.jpeg",
    },
    navMain: [
        {
            title: "Overview",
            url: "/dashboard",
            icon: LayoutDashboard,
        },
        {
            title: "Transactions",
            url: "/transactions",
            icon: Receipt,
        },
        {
            title: "Corporate Cards",
            url: "/cards",
            icon: CreditCard,
        },
        {
            title: "Reimbursements",
            url: "/reimbursements",
            icon: Wallet,
        },
        {
            title: "Analytics",
            url: "/analytics",
            icon: PieChart,
        },
    ],
    navSettings: [
        {
            title: "Company Profile",
            url: "/settings/company",
            icon: Building2,
        },
        {
            title: "Settings",
            url: "/settings",
            icon: Settings2,
        },
    ]
}

export function MainSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const pathname = usePathname()
    const { setOpenMobile, isMobile } = useSidebar()

    return (
        <Sidebar className="border-r border-black/5 bg-[#F3F4ED]" {...props}>
            <SidebarHeader className="h-16 flex items-center px-6 border-b border-black/5">
                <Link href="/" className="flex items-center gap-2 w-full mt-2" onClick={() => isMobile && setOpenMobile(false)}>
                    <Logo className="h-8 w-auto text-[#BAFF4C]" />
                    <span className="font-bold text-xl tracking-tight text-black">perk</span>
                </Link>
            </SidebarHeader>
            <SidebarContent className="px-3 py-4 gap-6">
                <SidebarGroup>
                    <SidebarGroupLabel className="text-xs font-medium text-black/50 uppercase tracking-wider mb-2 px-3">
                        Main
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {data.navMain.map((item) => {
                                const isActive = pathname === item.url || pathname?.startsWith(item.url + '/')
                                return (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton
                                            asChild
                                            isActive={isActive}
                                            tooltip={item.title}
                                            className={`rounded-xl h-11 transition-all ${isActive
                                                ? 'bg-[#BAFF4C] text-black font-semibold shadow-sm'
                                                : 'text-black/70 hover:bg-black/5 hover:text-black font-medium'
                                                }`}
                                        >
                                            <Link href={item.url} className="flex items-center gap-3 px-3 w-full h-full" onClick={() => isMobile && setOpenMobile(false)}>
                                                <item.icon className={`h-5 w-5 ${isActive ? 'text-black' : 'text-black/50'}`} />
                                                <span className="text-[14px]">{item.title}</span>
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                )
                            })}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <SidebarGroup>
                    <SidebarGroupLabel className="text-xs font-medium text-black/50 uppercase tracking-wider mb-2 px-3">
                        Preferences
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {data.navSettings.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton
                                        asChild
                                        tooltip={item.title}
                                        className="rounded-xl h-11 text-black/70 hover:bg-black/5 hover:text-black font-medium transition-all"
                                    >
                                        <Link href={item.url} className="flex items-center gap-3 px-3 w-full h-full" onClick={() => isMobile && setOpenMobile(false)}>
                                            <item.icon className="h-5 w-5 text-black/50" />
                                            <span className="text-[14px]">{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            <Link href="/docs" className="mt-auto p-4 mx-3 mb-4 bg-black/5 hover:bg-black-[0.08] transition-colors rounded-2xl block" onClick={() => isMobile && setOpenMobile(false)}>
                <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-[#BAFF4C]/20 flex flex-col items-center justify-center">
                        <LifeBuoy className="h-4 w-4 text-green-700" />
                    </div>
                    <div>
                        <p className="text-[13px] font-semibold text-black">Need help?</p>
                        <p className="text-[12px] text-black/60 group-hover:text-black/80 transition-colors">Check our docs</p>
                    </div>
                </div>
            </Link>

            <SidebarFooter className="border-t border-black/5 p-4 bg-[#F3F4ED]">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton
                                    size="lg"
                                    className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground rounded-xl hover:bg-black/5 transition-colors"
                                >
                                    <Avatar className="h-10 w-10 border-2 border-[#BAFF4C]">
                                        <AvatarImage src={data.user.avatar} alt={data.user.name} className="object-cover" />
                                        <AvatarFallback className="bg-black/5 text-black font-semibold">AT</AvatarFallback>
                                    </Avatar>
                                    <div className="flex flex-col overflow-hidden leading-tight gap-0.5 ml-1">
                                        <span className="text-[14px] font-semibold text-black truncate">{data.user.name}</span>
                                        <span className="text-[12px] text-black/60 truncate">{data.user.email}</span>
                                    </div>
                                    <ChevronsUpDown className="ml-auto h-4 w-4 text-black/50" />
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-2xl bg-white border-black/10 shadow-lg"
                                side={isMobile ? "bottom" : "right"}
                                align="end"
                                sideOffset={4}
                            >
                                <DropdownMenuLabel className="p-0 font-normal">
                                    <div className="flex items-center gap-3 px-3 py-3">
                                        <Avatar className="h-9 w-9 border-2 border-[#BAFF4C]">
                                            <AvatarImage src={data.user.avatar} alt={data.user.name} />
                                            <AvatarFallback className="bg-black/5 text-black font-semibold">AT</AvatarFallback>
                                        </Avatar>
                                        <div className="flex flex-col leading-tight gap-0.5">
                                            <span className="text-[14px] font-semibold text-black truncate">{data.user.name}</span>
                                            <span className="text-[12px] text-black/60 truncate">{data.user.email}</span>
                                        </div>
                                    </div>
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator className="bg-black/5" />
                                <DropdownMenuGroup className="p-1">
                                    <Link href="/settings" onClick={() => isMobile && setOpenMobile(false)}>
                                        <DropdownMenuItem className="cursor-pointer rounded-xl h-10 hover:bg-black/5 focus:bg-black/5 text-black">
                                            <UserCircle className="mr-2 h-4 w-4" />
                                            <span>Account Settings</span>
                                        </DropdownMenuItem>
                                    </Link>
                                    <Link href="/settings/company" onClick={() => isMobile && setOpenMobile(false)}>
                                        <DropdownMenuItem className="cursor-pointer rounded-xl h-10 hover:bg-black/5 focus:bg-black/5 text-black">
                                            <BadgeCheck className="mr-2 h-4 w-4" />
                                            <span>Company Profile</span>
                                        </DropdownMenuItem>
                                    </Link>
                                </DropdownMenuGroup>
                                <DropdownMenuSeparator className="bg-black/5" />
                                <div className="p-1">
                                    <Link href="/login" onClick={() => {
                                        if (isMobile) setOpenMobile(false);
                                        toast.success("Signed out successfully");
                                    }}>
                                        <DropdownMenuItem className="cursor-pointer rounded-xl h-10 hover:bg-red-50 focus:bg-red-50 text-red-600 focus:text-red-700">
                                            <LogOut className="mr-2 h-4 w-4" />
                                            <span>Sign out</span>
                                        </DropdownMenuItem>
                                    </Link>
                                </div>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    )
}
