"use client"

import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage } from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Plus, CreditCard, Lock, Eye, AlertCircle, Settings, Snowflake, Unlock } from "lucide-react"
import { toast } from "sonner"
import { COLORS, USER, TOAST } from "@/lib/gen-variable"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

export default function CardsPage() {
    return (
        <div className="flex flex-col w-full min-h-screen">
            <header className={`flex h-16 shrink-0 items-center justify-between border-b border-black/5 px-4 sm:px-6 bg-[${COLORS.background}] sticky top-0 z-20`}>
                <div className="flex items-center gap-2">
                    <SidebarTrigger className="-ml-2 text-black/70 hover:text-black hover:bg-black/5" />
                    <Separator orientation="vertical" className="mr-2 h-4 bg-black/10" />
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbPage className="text-black font-semibold text-[14px]">Corporate Cards</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                    <Button className={`h-9 rounded-full bg-[${COLORS.primary}] text-black hover:bg-[${COLORS.primaryHover}] font-semibold flex items-center shadow-sm text-[13px] px-3 sm:px-4`}>
                        <Plus className="sm:mr-2 h-4 w-4" /> <span className="hidden sm:inline">Issue Card</span>
                    </Button>
                </div>
            </header>

            <main className={`flex-1 p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8 bg-[${COLORS.background}]`}>
                <div className="flex flex-col gap-1">
                    <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-black">Your Cards</h1>
                    <p className="text-black/60 text-[14px] sm:text-[15px]">Manage your virtual and physical corporate cards.</p>
                </div>

                <Tabs defaultValue="virtual" className="w-full">
                    <TabsList className="bg-black/5 p-1 rounded-xl h-10 w-full sm:w-auto overflow-x-auto flex flex-nowrap shrink-0 snap-x">
                        <TabsTrigger value="virtual" className="flex-1 sm:flex-none text-[13px] font-semibold rounded-lg data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-sm px-4 whitespace-nowrap snap-center">
                            Virtual Cards <span className="ml-2 bg-black/10 text-black px-1.5 py-0.5 rounded-full text-[10px]">3</span>
                        </TabsTrigger>
                        <TabsTrigger value="physical" className="flex-1 sm:flex-none text-[13px] font-semibold rounded-lg data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-sm px-4 whitespace-nowrap snap-center">
                            Physical Cards
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="virtual" className="mt-6 space-y-6">
                        {/* CSS Grid ensures perfect alignment and responsiveness: 1 col on mobile, 2 on lg screens, 3 on xl */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">

                            {/* Card Item 1 */}
                            <div className="flex flex-col gap-4">
                                <div className="h-56 rounded-2xl bg-gradient-to-br from-gray-900 to-black p-6 flex flex-col justify-between text-white shadow-lg relative overflow-hidden group w-full max-w-sm mx-auto sm:max-w-none">
                                    <div className="absolute top-0 right-0 p-8 w-full h-full pointer-events-none overflow-hidden">
                                        <div className={`absolute top-[-20%] right-[-10%] w-48 h-48 bg-[${COLORS.primary}]/20 rounded-full blur-[80px]`} />
                                    </div>
                                    <div className="flex justify-between items-start z-10 w-full">
                                        <div className="flex items-center gap-2">
                                            <span className="font-bold tracking-tight text-xl">perk</span>
                                            <span className="px-2 py-0.5 rounded-md bg-white/10 text-[10px] font-medium uppercase tracking-wider backdrop-blur-sm">Virtual</span>
                                        </div>
                                        <Snowflake className="h-5 w-5 text-white/50" />
                                    </div>
                                    <div className="z-10 w-full">
                                        <div className="text-lg tracking-widest font-mono text-white/90">
                                            <span className="mr-3">••••</span>
                                            <span className="mr-3">••••</span>
                                            <span className="mr-3">••••</span>
                                            <span>4092</span>
                                        </div>
                                        <div className="flex justify-between items-end mt-4">
                                            <div className="flex flex-col">
                                                <span className="text-[10px] text-white/50 uppercase tracking-widest font-semibold mb-1">Cardholder</span>
                                                <span className="text-[14px] font-medium">Ana Torres</span>
                                            </div>
                                            <div className="flex flex-col text-right">
                                                <span className="text-[10px] text-white/50 uppercase tracking-widest font-semibold mb-1">CVC</span>
                                                <span className="text-[14px] font-medium">•••</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <Card className="rounded-xl border-black/5 shadow-sm bg-white overflow-hidden w-full max-w-sm mx-auto sm:max-w-none">
                                    <CardHeader className="pb-3 px-5 pt-5">
                                        <div className="flex justify-between items-center">
                                            <CardTitle className="text-sm font-bold text-black flex items-center gap-2">
                                                <div className="w-2 h-2 rounded-full bg-[#BAFF4C]" /> Active
                                            </CardTitle>
                                            <span className="text-xs font-semibold text-black/50">Software Subscriptions</span>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="px-5 pb-5 space-y-4">
                                        <div>
                                            <div className="flex justify-between items-end mb-2">
                                                <span className="text-2xl font-bold text-black">$8,450.00 <span className="text-[13px] font-medium text-black/40">spent</span></span>
                                                <span className="text-[13px] font-semibold text-black/60">$10,000.00 limit</span>
                                            </div>
                                            <Progress value={84.5} className="h-2 bg-black/5 [&>div]:bg-black" />
                                        </div>
                                        <div className="flex gap-2">
                                            <Button
                                                variant="outline"
                                                onClick={() => toast(TOAST.cardReveal.title, { description: TOAST.cardReveal.description })}
                                                className="flex-1 h-9 rounded-lg border-black/10 text-black hover:bg-black/5 font-semibold text-[13px]"
                                            >
                                                <Eye className="mr-2 h-4 w-4 text-black/50" /> Reveal Details
                                            </Button>
                                            <Button
                                                variant="outline"
                                                size="icon"
                                                onClick={() => toast(TOAST.cardSettings.title, { description: TOAST.cardSettings.description })}
                                                className="h-9 w-9 rounded-lg border-black/10 text-black hover:bg-black/5"
                                            >
                                                <Settings className="h-4 w-4 text-black/50" />
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>

                            {/* Card Item 2 */}
                            <div className="flex flex-col gap-4">
                                <div className={`h-56 rounded-2xl bg-[${COLORS.primary}] p-6 flex flex-col justify-between text-black shadow-lg relative overflow-hidden group w-full max-w-sm mx-auto sm:max-w-none`}>
                                    <div className="absolute top-0 right-0 p-8 w-full h-full pointer-events-none overflow-hidden">
                                        <div className="absolute bottom-[-20%] left-[-10%] w-48 h-48 bg-white/40 rounded-full blur-[80px]" />
                                    </div>
                                    <div className="flex justify-between items-start z-10 w-full">
                                        <div className="flex items-center gap-2">
                                            <span className="font-bold tracking-tight text-xl">perk</span>
                                            <span className="px-2 py-0.5 rounded-md bg-black/10 text-[10px] font-medium uppercase tracking-wider backdrop-blur-sm">Virtual</span>
                                        </div>
                                        <CreditCard className="h-5 w-5 text-black/50" />
                                    </div>
                                    <div className="z-10 w-full">
                                        <div className="text-lg tracking-widest font-mono text-black/90">
                                            <span className="mr-3">••••</span>
                                            <span className="mr-3">••••</span>
                                            <span className="mr-3">••••</span>
                                            <span>8823</span>
                                        </div>
                                        <div className="flex justify-between items-end mt-4">
                                            <div className="flex flex-col">
                                                <span className="text-[10px] text-black/50 uppercase tracking-widest font-semibold mb-1">Cardholder</span>
                                                <span className="text-[14px] font-medium">{USER.name}</span>
                                            </div>
                                            <div className="flex flex-col text-right">
                                                <span className="text-[10px] text-black/50 uppercase tracking-widest font-semibold mb-1">CVC</span>
                                                <span className="text-[14px] font-medium">•••</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <Card className="rounded-xl border-black/5 shadow-sm bg-white overflow-hidden w-full max-w-sm mx-auto sm:max-w-none">
                                    <CardHeader className="pb-3 px-5 pt-5">
                                        <div className="flex justify-between items-center">
                                            <CardTitle className="text-sm font-bold text-black flex items-center gap-2">
                                                <div className="w-2 h-2 rounded-full bg-[#BAFF4C]" /> Active
                                            </CardTitle>
                                            <span className="text-xs font-semibold text-black/50">Travel & Meals</span>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="px-5 pb-5 space-y-4">
                                        <div>
                                            <div className="flex justify-between items-end mb-2">
                                                <span className="text-2xl font-bold text-black">$124.50 <span className="text-[13px] font-medium text-black/40">spent</span></span>
                                                <span className="text-[13px] font-semibold text-black/60">$2,000.00 limit</span>
                                            </div>
                                            <Progress value={6.2} className="h-2 bg-black/5 [&>div]:bg-[#BAFF4C]" />
                                        </div>
                                        <div className="flex gap-2">
                                            <Button
                                                variant="outline"
                                                onClick={() => toast("Verification Required", { description: "Please enter your password or use Touch ID to reveal card numbers." })}
                                                className="flex-1 h-9 rounded-lg border-black/10 text-black hover:bg-black/5 font-semibold text-[13px]"
                                            >
                                                <Eye className="mr-2 h-4 w-4 text-black/50" /> Reveal Details
                                            </Button>
                                            <Button
                                                variant="outline"
                                                size="icon"
                                                onClick={() => toast("Card Settings", { description: "Opening configuration drawer..." })}
                                                className="h-9 w-9 rounded-lg border-black/10 text-black hover:bg-black/5"
                                            >
                                                <Settings className="h-4 w-4 text-black/50" />
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>

                            {/* Card Item 3 (Locked) */}
                            <div className="flex flex-col gap-4">
                                <div className="h-56 rounded-2xl bg-gray-100 p-6 flex flex-col justify-between text-black/40 shadow-sm relative overflow-hidden group w-full max-w-sm mx-auto sm:max-w-none border border-black/5">
                                    <div className="absolute inset-0 backdrop-blur-[2px] z-0" />
                                    <div className="flex justify-between items-start z-10 w-full opacity-60">
                                        <div className="flex items-center gap-2">
                                            <span className="font-bold tracking-tight text-xl">perk</span>
                                            <span className="px-2 py-0.5 rounded-md bg-black/10 text-[10px] font-medium uppercase tracking-wider">Virtual</span>
                                        </div>
                                        <div className="h-8 w-8 rounded-full bg-black/5 flex items-center justify-center backdrop-blur-md shadow-sm border border-black/5">
                                            <Lock className="h-4 w-4 text-black/50" />
                                        </div>
                                    </div>
                                    <div className="z-10 w-full opacity-50">
                                        <div className="text-lg tracking-widest font-mono">
                                            <span className="mr-3">••••</span>
                                            <span className="mr-3">••••</span>
                                            <span className="mr-3">••••</span>
                                            <span>1994</span>
                                        </div>
                                        <div className="flex justify-between items-end mt-4">
                                            <div className="flex flex-col">
                                                <span className="text-[10px] uppercase tracking-widest font-semibold mb-1">Cardholder</span>
                                                <span className="text-[14px] font-medium">Ana Torres</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <Card className="rounded-xl border-black/5 shadow-sm bg-white overflow-hidden w-full max-w-sm mx-auto sm:max-w-none opacity-80">
                                    <CardHeader className="pb-3 px-5 pt-5">
                                        <div className="flex justify-between items-center">
                                            <CardTitle className="text-sm font-bold text-black/40 flex items-center gap-2">
                                                <div className="w-2 h-2 rounded-full bg-red-400" /> Locked
                                            </CardTitle>
                                            <span className="text-xs font-semibold text-black/40">Marketing Ads</span>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="px-5 pb-5 space-y-4">
                                        <div>
                                            <div className="flex justify-between items-end mb-2">
                                                <span className="text-2xl font-bold text-black/40">$0.00 <span className="text-[13px] font-medium">spent</span></span>
                                                <span className="text-[13px] font-semibold text-black/40">$5,000.00 limit</span>
                                            </div>
                                            <Progress value={0} className="h-2 bg-black/5" />
                                        </div>
                                        <div className="flex gap-2">
                                            <Button
                                                variant="outline"
                                                onClick={() => toast.success(TOAST.cardUnlocked.title, {
                                                    description: TOAST.cardUnlocked.description,
                                                    icon: <Unlock className={`h-5 w-5 text-[${COLORS.primary}]`} />
                                                })}
                                                className="flex-1 h-9 rounded-lg border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700 font-semibold text-[13px] bg-red-50/50"
                                            >
                                                Unlock Card
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>

                        </div>
                    </TabsContent>
                    <TabsContent value="physical" className="mt-6">
                        <div className="flex flex-col items-center justify-center p-8 sm:p-16 text-center border-2 border-black/5 border-dashed rounded-3xl bg-white max-w-4xl mx-auto shadow-sm transition-all hover:border-black/10">
                            <div className="relative mb-6">
                                <div className={`absolute inset-0 bg-[${COLORS.primary}]/20 blur-2xl rounded-full`} />
                                <div className={`h-20 w-20 bg-[${COLORS.primary}]/10 rounded-2xl flex items-center justify-center relative border border-[${COLORS.primary}]/20 text-[${COLORS.primary}]`}>
                                    <CreditCard className="h-10 w-10 text-black/70" />
                                </div>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-black mb-3">No Physical Cards Active</h3>
                            <p className="text-black/60 text-[14px] sm:text-[15px] max-w-md mb-8 leading-relaxed">
                                You currently don't have any active physical corporate cards assigned to you. Request one below to start spending in-person.
                            </p>
                            <Button
                                onClick={() => toast(TOAST.cardRequest.title, {
                                    description: TOAST.cardRequest.description,
                                    icon: <CreditCard className={`h-5 w-5 text-[${COLORS.primary}]`} />
                                })}
                                className={`h-11 rounded-full bg-[${COLORS.primary}] text-black hover:bg-[${COLORS.primaryHover}] font-semibold shadow-sm text-[14px] px-8 transition-transform hover:scale-[1.02]`}
                            >
                                Request Physical Card
                            </Button>
                        </div>
                    </TabsContent>
                </Tabs>
            </main>
        </div>
    )
}
