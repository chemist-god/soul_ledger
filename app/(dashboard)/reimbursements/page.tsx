"use client"

import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage } from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Plus, Receipt, Search, Filter, CheckCircle2, XCircle, Clock, FileText } from "lucide-react"
import { toast } from "sonner"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

const requests = [
    { id: "REQ-0129", user: "David Chen", role: "Engineering", amount: "$2,400.00", desc: "New MacBook Pro M3", date: "Today", status: "pending", category: "Hardware", img: "/images/img_4.jpeg" },
    { id: "REQ-0128", user: "Sarah Jenkins", role: "Marketing", amount: "$850.50", desc: "Q1 Campaign Facebook Ads", date: "Yesterday", status: "pending", category: "Ads", img: "/images/img_3.jpeg" },
    { id: "REQ-0127", user: "Mark Adams", role: "VP Finance", amount: "$4,200.00", desc: "Client Dinner - NYC", date: "Feb 19, 2026", status: "approved", category: "Meals", img: "/images/img_5.jpeg" },
    { id: "REQ-0126", user: "Emily Clark", role: "Design", amount: "$120.00", desc: "Figma Professional Plan", date: "Feb 18, 2026", status: "paid", category: "Software", img: "/images/img_2.jpeg" },
    { id: "REQ-0125", user: "John Doe", role: "Sales", amount: "$65.00", desc: "Uber to Airport", date: "Feb 15, 2026", status: "rejected", category: "Travel", img: "/images/img_6.jpeg" },
]

export default function ReimbursementsPage() {
    return (
        <div className="flex flex-col w-full min-h-screen">
            <header className="flex h-16 shrink-0 items-center justify-between border-b border-black/5 px-4 sm:px-6 bg-[#F3F4ED] sticky top-0 z-20">
                <div className="flex items-center gap-2">
                    <SidebarTrigger className="-ml-2 text-black/70 hover:text-black hover:bg-black/5" />
                    <Separator orientation="vertical" className="mr-2 h-4 bg-black/10" />
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbPage className="text-black font-semibold text-[14px]">Reimbursements</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                    <Button
                        onClick={() => toast("Drafting Request", { description: "Opening the reimbursement request form..." })}
                        className="h-9 rounded-full bg-black text-white hover:bg-black/80 font-semibold flex items-center shadow-sm text-[13px] px-3 sm:px-4"
                    >
                        <Plus className="sm:mr-2 h-4 w-4" /> <span className="hidden sm:inline">New Request</span>
                    </Button>
                </div>
            </header>

            <main className="flex-1 p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8 bg-[#F3F4ED]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-black">Reimbursements</h1>
                        <p className="text-black/60 text-[14px] sm:text-[15px]">Review out-of-pocket expenses submitted by your team.</p>
                    </div>
                </div>

                <Tabs defaultValue="all" className="w-full">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                        <TabsList className="bg-black/5 p-1 rounded-xl h-10 w-full sm:w-auto overflow-x-auto flex flex-nowrap shrink-0">
                            <TabsTrigger value="all" className="flex-1 sm:flex-none text-[13px] font-semibold rounded-lg data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-sm px-4 whitespace-nowrap">
                                All Requests
                            </TabsTrigger>
                            <TabsTrigger value="pending" className="flex-1 sm:flex-none text-[13px] font-semibold rounded-lg data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-sm px-4 whitespace-nowrap">
                                Pending <span className="ml-2 bg-orange-100 text-orange-700 px-1.5 py-0.5 rounded-full text-[10px]">2</span>
                            </TabsTrigger>
                            <TabsTrigger value="approved" className="flex-1 sm:flex-none text-[13px] font-semibold rounded-lg data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-sm px-4 whitespace-nowrap">
                                Approved
                            </TabsTrigger>
                            <TabsTrigger value="paid" className="flex-1 sm:flex-none text-[13px] font-semibold rounded-lg data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-sm px-4 whitespace-nowrap">
                                Paid
                            </TabsTrigger>
                        </TabsList>

                        <div className="flex items-center gap-2">
                            <div className="relative flex-1 sm:flex-none">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-black/40" />
                                <Input
                                    placeholder="Search requests..."
                                    className="h-10 w-full sm:w-[250px] pl-9 rounded-full bg-white border-black/10 text-[13px] focus-visible:ring-[#BAFF4C]"
                                />
                            </div>
                            <Button variant="outline" size="icon" className="h-10 w-10 rounded-full border-black/10 bg-white hover:bg-black/5 shrink-0">
                                <Filter className="h-4 w-4 text-black/70" />
                            </Button>
                        </div>
                    </div>

                    <TabsContent value="all" className="m-0">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

                            {/* Requests List */}
                            <div className="md:col-span-7 xl:col-span-8 space-y-4">
                                {requests.map((req, i) => (
                                    <Card key={i} className="rounded-2xl border-black/5 shadow-sm bg-white overflow-hidden hover:border-[#BAFF4C]/50 transition-colors cursor-pointer group">
                                        <CardContent className="p-4 sm:p-5">
                                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">

                                                {/* User Info & Desc */}
                                                <div className="flex items-start gap-3 sm:gap-4">
                                                    <Avatar className="h-10 w-10 border border-black/5">
                                                        <AvatarImage src={req.img} className="object-cover" />
                                                        <AvatarFallback className="bg-black/5 text-black font-semibold">{req.user.substring(0, 2)}</AvatarFallback>
                                                    </Avatar>
                                                    <div className="flex flex-col">
                                                        <div className="flex items-center gap-2 mb-1">
                                                            <span className="text-[14px] font-bold text-black">{req.user}</span>
                                                            <span className="text-[11px] font-medium text-black/50 hidden sm:inline-block">• {req.role}</span>
                                                        </div>
                                                        <span className="text-[13px] font-medium text-black/80">{req.desc}</span>
                                                        <div className="flex items-center gap-3 mt-2">
                                                            <span className="text-[12px] text-black/50 flex items-center gap-1">
                                                                <FileText className="h-3 w-3" /> {req.id}
                                                            </span>
                                                            <span className="text-[12px] text-black/50">{req.date}</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Amount & Status */}
                                                <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center border-t border-black/5 sm:border-none pt-3 sm:pt-0 mt-2 sm:mt-0">
                                                    <span className="text-[16px] font-bold text-black sm:mb-2">{req.amount}</span>

                                                    {req.status === 'pending' && (
                                                        <Badge variant="secondary" className="bg-orange-100 text-orange-700 hover:bg-orange-100 pointer-events-none rounded-md px-2 py-0.5 text-[11px] font-semibold border-none">
                                                            <Clock className="mr-1 h-3 w-3" /> Pending Review
                                                        </Badge>
                                                    )}
                                                    {req.status === 'approved' && (
                                                        <Badge variant="secondary" className="bg-[#BAFF4C]/20 text-green-800 hover:bg-[#BAFF4C]/20 pointer-events-none rounded-md px-2 py-0.5 text-[11px] font-semibold border-none">
                                                            <CheckCircle2 className="mr-1 h-3 w-3" /> Approved
                                                        </Badge>
                                                    )}
                                                    {req.status === 'paid' && (
                                                        <Badge variant="secondary" className="bg-black/5 text-black/60 hover:bg-black/5 pointer-events-none rounded-md px-2 py-0.5 text-[11px] font-semibold border-none">
                                                            Paid
                                                        </Badge>
                                                    )}
                                                    {req.status === 'rejected' && (
                                                        <Badge variant="secondary" className="bg-red-50 text-red-600 hover:bg-red-50 pointer-events-none rounded-md px-2 py-0.5 text-[11px] font-semibold border-none">
                                                            <XCircle className="mr-1 h-3 w-3" /> Rejected
                                                        </Badge>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Action Buttons for Pending */}
                                            {req.status === 'pending' && (
                                                <div className="flex items-center gap-2 mt-4 pt-4 border-t border-black/5 relative z-10">
                                                    <Button
                                                        onClick={() => toast.success("Request Approved", {
                                                            description: `${req.amount} has been approved for ${req.user}.`,
                                                            icon: <CheckCircle2 className="h-5 w-5 text-[#BAFF4C]" />
                                                        })}
                                                        className="flex-1 sm:flex-none h-9 rounded-lg bg-[#BAFF4C] text-black hover:bg-[#a3e63d] font-semibold text-[13px]"
                                                    >
                                                        Approve
                                                    </Button>
                                                    <Button
                                                        variant="outline"
                                                        onClick={() => toast("Request Rejected", { description: "The employee will be notified via email." })}
                                                        className="flex-1 sm:flex-none h-9 rounded-lg border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700 font-semibold text-[13px] bg-red-50/50"
                                                    >
                                                        Reject
                                                    </Button>
                                                </div>
                                            )}
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>

                            {/* Summary Sidebar */}
                            <div className="md:col-span-5 xl:col-span-4 flex flex-col gap-6">
                                <Card className="rounded-2xl border-black/5 shadow-sm bg-black text-white relative overflow-hidden">
                                    <div className="absolute top-[-20%] right-[-10%] w-48 h-48 bg-[#BAFF4C]/20 rounded-full blur-[60px]" />
                                    <CardContent className="p-6 relative z-10 flex flex-col justify-between">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">
                                                <Receipt className="h-5 w-5 text-[#BAFF4C]" />
                                            </div>
                                            <div>
                                                <h3 className="text-white font-bold">Pending Total</h3>
                                                <p className="text-white/60 text-[12px]">Awaiting your approval</p>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="text-4xl font-bold tracking-tight mb-2">$3,250.50</div>
                                            <p className="text-white/70 text-[13px]">Across 2 requests this week.</p>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="rounded-2xl border-black/5 shadow-sm bg-white">
                                    <CardContent className="p-6">
                                        <h3 className="text-black font-bold mb-4">Reimbursement Policy</h3>
                                        <div className="space-y-3 text-[13px] text-black/70">
                                            <div className="flex items-start gap-2">
                                                <CheckCircle2 className="h-4 w-4 text-[#BAFF4C] shrink-0 mt-0.5" />
                                                <p>Receipts required for expenses over <strong>$25.00</strong>.</p>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <CheckCircle2 className="h-4 w-4 text-[#BAFF4C] shrink-0 mt-0.5" />
                                                <p>Meals are capped at <strong>$75.00/day</strong> per person.</p>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <CheckCircle2 className="h-4 w-4 text-[#BAFF4C] shrink-0 mt-0.5" />
                                                <p>Payouts are processed on the <strong>15th</strong> and <strong>last day</strong> of month.</p>
                                            </div>
                                        </div>
                                        <Button
                                            variant="link"
                                            onClick={() => toast("Loading Policy", { description: "Opening corporate reimbursement guidelines..." })}
                                            className="px-0 mt-2 text-black/50 hover:text-black"
                                        >
                                            Read full policy →
                                        </Button>
                                    </CardContent>
                                </Card>
                            </div>

                        </div>
                    </TabsContent>

                    <TabsContent value="pending" className="mt-6">
                        <div className="flex flex-col items-center justify-center p-8 sm:p-14 text-center border-2 border-black/5 border-dashed rounded-3xl bg-white max-w-3xl mx-auto shadow-sm transition-all hover:border-black/10">
                            <div className="relative mb-5">
                                <div className="absolute inset-0 bg-orange-500/10 blur-xl rounded-full" />
                                <div className="h-16 w-16 bg-orange-50 rounded-2xl flex items-center justify-center relative border border-orange-100/50 text-orange-600">
                                    <Clock className="h-8 w-8 text-orange-500" />
                                </div>
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-black mb-2">No Pending Requests</h3>
                            <p className="text-black/50 text-[14px] max-w-sm mb-2 leading-relaxed">
                                Great job! You have no pending reimbursement requests awaiting your review at this time.
                            </p>
                        </div>
                    </TabsContent>
                    <TabsContent value="approved" className="mt-6">
                        <div className="flex flex-col items-center justify-center p-8 sm:p-14 text-center border-2 border-black/5 border-dashed rounded-3xl bg-white max-w-3xl mx-auto shadow-sm transition-all hover:border-black/10">
                            <div className="relative mb-5">
                                <div className="absolute inset-0 bg-[#BAFF4C]/20 blur-xl rounded-full" />
                                <div className="h-16 w-16 bg-[#BAFF4C]/10 rounded-2xl flex items-center justify-center relative border border-[#BAFF4C]/30 text-green-700">
                                    <CheckCircle2 className="h-8 w-8 text-green-700" />
                                </div>
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-black mb-2">No Approved Requests</h3>
                            <p className="text-black/50 text-[14px] max-w-sm mb-2 leading-relaxed">
                                You haven't approved any reimbursement requests yet. They will appear here once approved.
                            </p>
                        </div>
                    </TabsContent>
                    <TabsContent value="paid" className="mt-6">
                        <div className="flex flex-col items-center justify-center p-8 sm:p-14 text-center border-2 border-black/5 border-dashed rounded-3xl bg-white max-w-3xl mx-auto shadow-sm transition-all hover:border-black/10">
                            <div className="relative mb-5">
                                <div className="absolute inset-0 bg-black/5 blur-xl rounded-full" />
                                <div className="h-16 w-16 bg-black/5 rounded-2xl flex items-center justify-center relative border border-black/10 text-black/70">
                                    <Receipt className="h-8 w-8 text-black/60" />
                                </div>
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-black mb-2">No Paid Requests</h3>
                            <p className="text-black/50 text-[14px] max-w-sm mb-2 leading-relaxed">
                                No reimbursement requests have been marked as paid yet. History will be preserved here.
                            </p>
                        </div>
                    </TabsContent>
                </Tabs>
            </main>
        </div>
    )
}
