"use client"

import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage } from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FileDown, Search, Filter, SlidersHorizontal, ArrowDown, ArrowUp, CheckCircle2 } from "lucide-react"
import { toast } from "sonner"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const transactions = [
    { id: "TX-9982", merchant: "AWS Services", sub: "us-east-1", category: "Software", card: "Ana's Virtual ••4092", date: "Today, 10:24 AM", amount: "-$1,240.00", status: "cleared", img: "/images/img_4.jpeg" },
    { id: "TX-9981", merchant: "Lyft", sub: "Ride to airport", category: "Travel", card: "Travel Card ••1842", date: "Yesterday, 3:45 PM", amount: "-$42.50", status: "pending", img: "/images/img_5.jpeg" },
    { id: "TX-9980", merchant: "GitHub", sub: "Copilot seats", category: "Software", card: "Ana's Virtual ••4092", date: "Feb 19, 2026", amount: "-$240.00", status: "cleared", img: "/images/img_3.jpeg" },
    { id: "TX-9979", merchant: "Sweetgreen", sub: "Team lunch", category: "Meals", card: "Office Card ••9911", date: "Feb 18, 2026", amount: "-$124.80", status: "cleared", img: "/images/img_2.jpeg" },
    { id: "TX-9978", merchant: "Figma", sub: "Annual plan", category: "Software", card: "Ana's Virtual ••4092", date: "Feb 15, 2026", amount: "-$1,800.00", status: "cleared", img: "/images/img_6.jpeg" },
    { id: "TX-9977", merchant: "WeWork", sub: "Monthly lease", category: "Office", card: "Office Card ••9911", date: "Feb 14, 2026", amount: "-$4,500.00", status: "cleared", img: "/images/img_2.jpeg" },
    { id: "TX-9976", merchant: "Delta Airlines", sub: "Flight to SF", category: "Travel", card: "Travel Card ••1842", date: "Feb 12, 2026", amount: "-$650.00", status: "cleared", img: "/images/img_3.jpeg" },
    { id: "TX-9975", merchant: "Stripe", sub: "Payment gateway fee", category: "Finance", card: "Ana's Virtual ••4092", date: "Feb 10, 2026", amount: "-$85.50", status: "cleared", img: "/images/img_4.jpeg" },
]

export default function TransactionsPage() {
    return (
        <div className="flex flex-col w-full min-h-screen">
            <header className="flex h-16 shrink-0 items-center justify-between border-b border-black/5 px-6 bg-[#F3F4ED] sticky top-0 z-20">
                <div className="flex items-center gap-2">
                    <SidebarTrigger className="-ml-2 text-black/70 hover:text-black hover:bg-black/5" />
                    <Separator orientation="vertical" className="mr-2 h-4 bg-black/10" />
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbPage className="text-black font-semibold text-[14px]">Transactions</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
                <div className="flex items-center gap-3">
                    <Button
                        variant="outline"
                        onClick={() => toast("Export Started", {
                            description: "Your CSV is generating and will download shortly.",
                            icon: <FileDown className="h-5 w-5 text-[#BAFF4C]" />
                        })}
                        className="h-9 rounded-full border-black/10 text-black hover:bg-black/5 bg-transparent text-[13px] font-semibold"
                    >
                        <FileDown className="mr-2 h-4 w-4" />
                        Export CSV
                    </Button>
                </div>
            </header>

            <main className="flex-1 p-6 md:p-8 space-y-6 bg-[#F3F4ED]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight text-black">Company Transactions</h1>
                        <p className="text-black/60 text-[14px] mt-1">Review and manage all corporate spending.</p>
                    </div>

                    <div className="flex items-center gap-2">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-black/40" />
                            <Input
                                placeholder="Search merchant..."
                                className="h-9 w-[200px] lg:w-[300px] pl-9 rounded-full bg-white border-black/10 text-[13px] focus-visible:ring-[#BAFF4C]"
                            />
                        </div>
                        <Button variant="outline" size="icon" className="h-9 w-9 rounded-full border-black/10 bg-white hover:bg-black/5 shrink-0">
                            <SlidersHorizontal className="h-4 w-4 text-black/70" />
                        </Button>
                    </div>
                </div>

                <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
                    <Button variant="secondary" className="h-8 rounded-full bg-black text-white hover:bg-black/80 text-xs px-4">All</Button>
                    <Button variant="outline" className="h-8 rounded-full border-black/10 bg-white hover:bg-black/5 text-black text-xs px-4 border-dashed">Software</Button>
                    <Button variant="outline" className="h-8 rounded-full border-black/10 bg-white hover:bg-black/5 text-black text-xs px-4 border-dashed">Travel</Button>
                    <Button variant="outline" className="h-8 rounded-full border-black/10 bg-white hover:bg-black/5 text-black text-xs px-4 border-dashed">Meals</Button>
                    <Button variant="outline" className="h-8 rounded-full border-black/10 bg-white hover:bg-black/5 text-black text-xs px-4 border-dashed">Office</Button>
                    <Button variant="ghost" className="h-8 rounded-full hover:bg-transparent text-black/60 hover:text-black text-xs px-3">
                        <Filter className="mr-2 h-3 w-3" /> More Filters
                    </Button>
                </div>

                <Card className="rounded-2xl border-black/5 shadow-sm bg-white overflow-hidden">
                    <CardContent className="p-0">
                        <Table>
                            <TableHeader className="bg-black/[0.02]">
                                <TableRow className="border-black/5 hover:bg-transparent">
                                    <TableHead className="text-black/50 font-medium text-xs uppercase h-11 pl-6">Merchant</TableHead>
                                    <TableHead className="text-black/50 font-medium text-xs uppercase hidden xl:table-cell h-11">Transaction ID</TableHead>
                                    <TableHead className="text-black/50 font-medium text-xs uppercase hidden md:table-cell h-11">Category</TableHead>
                                    <TableHead className="text-black/50 font-medium text-xs uppercase hidden lg:table-cell h-11">Card Details</TableHead>
                                    <TableHead className="text-black/50 font-medium text-xs uppercase h-11">
                                        <div className="flex items-center gap-1 cursor-pointer hover:text-black/80">
                                            Date <ArrowDown className="h-3 w-3" />
                                        </div>
                                    </TableHead>
                                    <TableHead className="text-right text-black/50 font-medium text-xs uppercase h-11 pr-6">Amount</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {transactions.map((tx, i) => (
                                    <TableRow key={i} className="border-black/5 py-4 cursor-pointer hover:bg-black/[0.03] transition-colors group">
                                        <TableCell className="font-medium py-4 pl-6">
                                            <div className="flex items-center gap-3">
                                                <Avatar className="h-10 w-10 border border-black/5">
                                                    <AvatarImage src={tx.img} className="object-cover" />
                                                    <AvatarFallback className="bg-[#BAFF4C] text-black text-[13px] font-bold">{tx.merchant.substring(0, 2)}</AvatarFallback>
                                                </Avatar>
                                                <div className="flex flex-col">
                                                    <span className="text-[14px] font-semibold text-black">{tx.merchant}</span>
                                                    <span className="text-xs text-black/50 font-medium">{tx.sub}</span>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell className="hidden xl:table-cell py-4">
                                            <span className="text-[13px] text-black/60 font-mono bg-black/5 px-2 py-0.5 rounded-md">{tx.id}</span>
                                        </TableCell>
                                        <TableCell className="hidden md:table-cell py-4">
                                            <div className="inline-flex items-center rounded-full border border-black/10 px-2.5 py-0.5 text-xs font-medium text-black/70 bg-white whitespace-nowrap">
                                                {tx.category}
                                            </div>
                                        </TableCell>
                                        <TableCell className="hidden lg:table-cell py-4">
                                            <div className="flex flex-col">
                                                <span className="text-[13px] text-black/80">{tx.card}</span>
                                                {tx.status === "pending" ? (
                                                    <span className="text-[11px] font-semibold text-orange-500 flex items-center gap-1 mt-0.5"><div className="w-1.5 h-1.5 rounded-full bg-orange-500" /> Pending</span>
                                                ) : (
                                                    <span className="text-[11px] font-medium text-black/40 mt-0.5">Cleared</span>
                                                )}
                                            </div>
                                        </TableCell>
                                        <TableCell className="text-[13px] text-black/60 py-4 whitespace-nowrap">{tx.date}</TableCell>
                                        <TableCell className="text-right py-4 pr-6">
                                            <span className="text-[14px] font-bold text-black">{tx.amount}</span>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>

                <div className="flex items-center justify-between text-xs text-black/50 pt-2 px-2">
                    <span>Showing 1 to 8 of 24 entries</span>
                    <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" className="h-7 text-xs border-black/10" disabled>Previous</Button>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => toast("Fetching transactions", { description: "Loading the next page of results..." })}
                            className="h-7 text-xs border-black/10"
                        >
                            Next
                        </Button>
                    </div>
                </div>
            </main>
        </div>
    )
}
