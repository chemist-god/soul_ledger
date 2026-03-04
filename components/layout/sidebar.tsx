"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
    ChevronsUpDown,
    UserCircle,
    BadgeCheck,
    LogOut,
    LifeBuoy,
    ChevronDown,
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
import { BRAND, COLORS, USER, NAV_MAIN, NAV_SETTINGS, ROUTES, TOAST, VERSION } from "@/lib/gen-variable"

export function MainSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const pathname = usePathname()
    const { setOpenMobile, isMobile } = useSidebar()

    // Track which collapsible groups are open
    const [openGroups, setOpenGroups] = React.useState<string[]>(() => {
        // Auto-open My Tasks group if we're on a sub-route
        if (pathname?.startsWith("/tasks/")) return ["My Tasks"]
        return []
    })

    const toggleGroup = (title: string) => {
        setOpenGroups(prev =>
            prev.includes(title) ? prev.filter(g => g !== title) : [...prev, title]
        )
    }

    return (
        <Sidebar className={`border-r border-black/5 bg-[${COLORS.background}]`} {...props}>
            <SidebarHeader className="h-16 flex items-center px-6 border-b border-black/5">
                <Link href={ROUTES.home} className="flex items-center gap-2 w-full mt-2" onClick={() => isMobile && setOpenMobile(false)}>
                    <Logo className={`h-8 w-auto text-[${COLORS.primary}]`} />
                    <span className="font-bold text-xl tracking-tight text-black">{BRAND.name}</span>
                </Link>
            </SidebarHeader>

            <SidebarContent className="px-3 py-4 gap-6">
                <SidebarGroup>
                    <SidebarGroupLabel className="text-xs font-medium text-black/50 uppercase tracking-wider mb-2 px-3">
                        Main
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {NAV_MAIN.map((item) => {
                                const hasChildren = item.children && item.children.length > 0
                                const isGroupOpen = openGroups.includes(item.title)
                                const isParentActive = pathname === item.url || pathname?.startsWith(item.url + "/")
                                const isExactActive = pathname === item.url

                                if (hasChildren) {
                                    return (
                                        <SidebarMenuItem key={item.title}>
                                            {/* Parent collapsible row */}
                                            <SidebarMenuButton
                                                tooltip={item.title}
                                                onClick={() => toggleGroup(item.title)}
                                                className={`rounded-xl h-11 transition-all cursor-pointer w-full ${isParentActive
                                                    ? `bg-[${COLORS.primary}]/15 text-black font-semibold`
                                                    : "text-black/70 hover:bg-black/5 hover:text-black font-medium"
                                                    }`}
                                            >
                                                <div className="flex items-center gap-3 px-3 w-full h-full">
                                                    <item.icon className={`h-5 w-5 ${isParentActive ? `text-[${COLORS.primary}]` : "text-black/50"}`} />
                                                    <span className="text-[14px] flex-1">{item.title}</span>
                                                    <ChevronDown
                                                        className={`h-4 w-4 text-black/40 transition-transform duration-200 ${isGroupOpen ? "rotate-180" : ""}`}
                                                    />
                                                </div>
                                            </SidebarMenuButton>

                                            {/* Children sub-items */}
                                            {isGroupOpen && (
                                                <div className="mt-1 ml-4 pl-3 border-l-2 border-black/8 space-y-0.5">
                                                    {item.children!.map((child) => {
                                                        const isChildActive = pathname === child.url
                                                        return (
                                                            <SidebarMenuButton
                                                                key={child.title}
                                                                asChild
                                                                isActive={isChildActive}
                                                                tooltip={child.title}
                                                                className={`rounded-xl h-10 transition-all ${isChildActive
                                                                    ? `bg-[${COLORS.primary}] text-black font-semibold shadow-sm`
                                                                    : "text-black/60 hover:bg-black/5 hover:text-black font-medium"
                                                                    }`}
                                                            >
                                                                <Link
                                                                    href={child.url}
                                                                    className="flex items-center gap-3 px-3 w-full h-full"
                                                                    onClick={() => isMobile && setOpenMobile(false)}
                                                                >
                                                                    <child.icon className={`h-4 w-4 ${isChildActive ? "text-black" : "text-black/40"}`} />
                                                                    <span className="text-[13px]">{child.title}</span>
                                                                </Link>
                                                            </SidebarMenuButton>
                                                        )
                                                    })}
                                                </div>
                                            )}
                                        </SidebarMenuItem>
                                    )
                                }

                                return (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton
                                            asChild
                                            isActive={isExactActive}
                                            tooltip={item.title}
                                            className={`rounded-xl h-11 transition-all ${isExactActive
                                                ? `bg-[${COLORS.primary}] text-black font-semibold shadow-sm`
                                                : "text-black/70 hover:bg-black/5 hover:text-black font-medium"
                                                }`}
                                        >
                                            <Link href={item.url} className="flex items-center gap-3 px-3 w-full h-full" onClick={() => isMobile && setOpenMobile(false)}>
                                                <item.icon className={`h-5 w-5 ${isExactActive ? "text-black" : "text-black/50"}`} />
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
                            {NAV_SETTINGS.map((item) => (
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

            <Link href={ROUTES.docs} className="mt-auto p-4 mx-3 mb-4 bg-black/5 hover:bg-black-[0.08] transition-colors rounded-2xl block" onClick={() => isMobile && setOpenMobile(false)}>
                <div className="flex items-center gap-3">
                    <div className={`h-8 w-8 rounded-full bg-[${COLORS.primary}]/20 flex flex-col items-center justify-center`}>
                        <LifeBuoy className="h-4 w-4 text-green-700" />
                    </div>
                    <div>
                        <p className="text-[13px] font-semibold text-black">Need help?</p>
                        <p className="text-[12px] text-black/60 group-hover:text-black/80 transition-colors">Check our docs</p>
                    </div>
                </div>
            </Link>

            <SidebarFooter className={`border-t border-black/5 p-4 bg-[${COLORS.background}]`}>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton
                                    size="lg"
                                    className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground rounded-xl hover:bg-black/5 transition-colors"
                                >
                                    <Avatar className={`h-10 w-10 border-2 border-[${COLORS.primary}]`}>
                                        <AvatarImage src={USER.avatar} alt={USER.name} className="object-cover" />
                                        <AvatarFallback className="bg-black/5 text-black font-semibold">{USER.initials}</AvatarFallback>
                                    </Avatar>
                                    <div className="flex flex-col overflow-hidden leading-tight gap-0.5 ml-1">
                                        <span className="text-[14px] font-semibold text-black truncate">{USER.name}</span>
                                        <span className="text-[12px] text-black/60 truncate">{USER.email}</span>
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
                                        <Avatar className={`h-9 w-9 border-2 border-[${COLORS.primary}]`}>
                                            <AvatarImage src={USER.avatar} alt={USER.name} />
                                            <AvatarFallback className="bg-black/5 text-black font-semibold">{USER.initials}</AvatarFallback>
                                        </Avatar>
                                        <div className="flex flex-col leading-tight gap-0.5">
                                            <span className="text-[14px] font-semibold text-black truncate">{USER.name}</span>
                                            <span className="text-[12px] text-black/60 truncate">{USER.email}</span>
                                        </div>
                                    </div>
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator className="bg-black/5" />
                                <DropdownMenuGroup className="p-1">
                                    <Link href={ROUTES.settings} onClick={() => isMobile && setOpenMobile(false)}>
                                        <DropdownMenuItem className="cursor-pointer rounded-xl h-10 hover:bg-black/5 focus:bg-black/5 text-black">
                                            <UserCircle className="mr-2 h-4 w-4" />
                                            <span>Account Settings</span>
                                        </DropdownMenuItem>
                                    </Link>
                                </DropdownMenuGroup>
                                <DropdownMenuSeparator className="bg-black/5" />
                                <div className="p-1">
                                    <Link href={ROUTES.login} onClick={() => {
                                        if (isMobile) setOpenMobile(false);
                                        toast.success(TOAST.signOut.title);
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

            {/* Version badge */}
            <Link
                href={`${ROUTES.settings}?tab=about`}
                onClick={() => isMobile && setOpenMobile(false)}
                className="flex items-center justify-between px-5 py-2 group"
            >
                <span className="font-mono text-[10px] text-black/25 group-hover:text-black/50 transition-colors tracking-tight">
                    v{VERSION.current}
                </span>
                <span
                    className={`
                        text-[9px] font-semibold uppercase tracking-widest px-2 py-0.5 rounded-full transition-colors
                        ${VERSION.channel === "stable"
                            ? `bg-[${COLORS.primary}]/15 text-green-700 group-hover:bg-[${COLORS.primary}]/30`
                            : VERSION.channel === "beta"
                                ? "bg-orange-100 text-orange-600 group-hover:bg-orange-200"
                                : "bg-blue-100 text-blue-600 group-hover:bg-blue-200"
                        }
                    `}
                >
                    {VERSION.channel}
                </span>
            </Link>
            <SidebarRail />
        </Sidebar>
    )
}
