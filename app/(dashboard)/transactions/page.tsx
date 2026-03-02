"use client"

import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage } from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FileDown, Search, SlidersHorizontal, ArrowDown, Flame, CheckCircle2, XCircle, Clock } from "lucide-react"
import { toast } from "sonner"
import { COLORS, MOCK_GOALS, TOAST } from "@/lib/gen-variable"
import { Card, CardContent } from "@/components/ui/card"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

// Map goals → stake ledger entries
const stakeEntries = MOCK_GOALS.map((goal) => ({
    id: goal.id,
    title: goal.title,
    category: goal.category,
    status: goal.status,
    stake: goal.stake,
    deadline: goal.deadline,
    img: goal.img,
    type:
        goal.status === "completed"
            ? ("returned" as const)
            : goal.status === "failed"
                ? ("forfeited" as const)
                : ("locked" as const),
}))

const typeConfig = {
    locked: {
        label: "Locked In",
        icon: Flame,
        className: "text-blue-600 bg-blue-50 border-blue-200",
        amountClass: "text-black",
        prefix: "",
    },
    returned: {
        label: "Returned",
        icon: CheckCircle2,
        className: "text-green-700 bg-green-50 border-green-200",
        amountClass: "text-green-600",
        prefix: "+",
    },
    forfeited: {
        label: "Forfeited",
        icon: XCircle,
        className: "text-red-600 bg-red-50 border-red-200",
        amountClass: "text-red-500",
        prefix: "-",
    },
}

export default function StakeLedgerPage() {
    return (
        <div className="flex flex-col w-full min-h-screen">
            <header className={`flex h-16 shrink-0 items-center justify-between border-b border-black/5 px-6 bg-[${COLORS.background}] sticky top-0 z-20`}>
                <div className="flex items-center gap-2">
                    <SidebarTrigger className="-ml-2 text-black/70 hover:text-black hover:bg-black/5" />
                    <Separator orientation="vertical" className="mr-2 h-4 bg-black/10" />
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbPage className="text-black font-semibold text-[14px]">Stake Ledger</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
                <div className="flex items-center gap-3">
                    <Button
                        variant="outline"
                        onClick={() => toast(TOAST.exportStarted.title, {
                            description: TOAST.exportStarted.description,
                            icon: <FileDown className={`h-5 w-5 text-[${COLORS.primary}]`} />,
                        })}
                        className="h-9 rounded-full border-black/10 text-black hover:bg-black/5 bg-transparent text-[13px] font-semibold"
                    >
                        <FileDown className="mr-2 h-4 w-4" />
                        Export
                    </Button>
                </div>
            </header>

            <main className={`flex-1 p-6 md:p-8 space-y-6 bg-[${COLORS.background}]`}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight text-black">Stake Ledger</h1>
                        <p className="text-black/60 text-[14px] mt-1">A full history of all your staked goals and their outcomes.</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-black/40" />
                            <Input
                                placeholder="Search goals..."
                                className={`h-9 w-[200px] lg:w-[280px] pl-9 rounded-full bg-white border-black/10 text-[13px] focus-visible:ring-[${COLORS.primary}]`}
                            />
                        </div>
                        <Button variant="outline" size="icon" className="h-9 w-9 rounded-full border-black/10 bg-white hover:bg-black/5 shrink-0">
                            <SlidersHorizontal className="h-4 w-4 text-black/70" />
                        </Button>
                    </div>
                </div>

                {/* Summary Cards */}
                <div className="grid grid-cols-3 gap-4">
                    <Card className="rounded-2xl border-black/5 shadow-sm bg-white p-4 flex flex-col gap-1">
                        <p className="text-xs text-black/50 font-medium flex items-center gap-1.5"><Flame className={`h-3.5 w-3.5 text-[${COLORS.primary}]`} /> Total Locked</p>
                        <p className="text-2xl font-bold text-black">$245.00</p>
                    </Card>
                    <Card className="rounded-2xl border-black/5 shadow-sm bg-white p-4 flex flex-col gap-1">
                        <p className="text-xs text-black/50 font-medium flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-green-500" /> Total Returned</p>
                        <p className="text-2xl font-bold text-green-600">+$40.00</p>
                    </Card>
                    <Card className="rounded-2xl border-black/5 shadow-sm bg-white p-4 flex flex-col gap-1">
                        <p className="text-xs text-black/50 font-medium flex items-center gap-1.5"><XCircle className="h-3.5 w-3.5 text-red-400" /> Total Forfeited</p>
                        <p className="text-2xl font-bold text-red-500">-$100.00</p>
                    </Card>
                </div>

                <Card className="rounded-2xl border-black/5 shadow-sm bg-white overflow-hidden">
                    <CardContent className="p-0">
                        <Table>
                            <TableHeader className="bg-black/[0.02]">
                                <TableRow className="border-black/5 hover:bg-transparent">
                                    <TableHead className="text-black/50 font-medium text-xs uppercase h-11 pl-6">Goal</TableHead>
                                    <TableHead className="text-black/50 font-medium text-xs uppercase hidden md:table-cell h-11">Category</TableHead>
                                    <TableHead className="text-black/50 font-medium text-xs uppercase hidden lg:table-cell h-11">Status</TableHead>
                                    <TableHead className="text-black/50 font-medium text-xs uppercase h-11">
                                        <div className="flex items-center gap-1 cursor-pointer hover:text-black/80">
                                            Deadline <ArrowDown className="h-3 w-3" />
                                        </div>
                                    </TableHead>
                                    <TableHead className="text-right text-black/50 font-medium text-xs uppercase h-11 pr-6">Stake</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {stakeEntries.map((entry) => {
                                    const config = typeConfig[entry.type]
                                    const Icon = config.icon
                                    return (
                                        <TableRow key={entry.id} className="border-black/5 cursor-pointer hover:bg-black/[0.03] transition-colors">
                                            <TableCell className="font-medium py-4 pl-6">
                                                <div className="flex flex-col">
                                                    <span className="text-[14px] font-semibold text-black">{entry.title}</span>
                                                    <span className="text-xs text-black/50 font-mono">{entry.id}</span>
                                                </div>
                                            </TableCell>
                                            <TableCell className="hidden md:table-cell py-4">
                                                <div className="inline-flex items-center rounded-full border border-black/10 px-2.5 py-0.5 text-xs font-medium text-black/70 bg-white whitespace-nowrap">
                                                    {entry.category}
                                                </div>
                                            </TableCell>
                                            <TableCell className="hidden lg:table-cell py-4">
                                                <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border ${config.className}`}>
                                                    <Icon className="h-3 w-3" />
                                                    {config.label}
                                                </span>
                                            </TableCell>
                                            <TableCell className="text-[13px] text-black/60 py-4 whitespace-nowrap">{entry.deadline}</TableCell>
                                            <TableCell className="text-right py-4 pr-6">
                                                <span className={`text-[14px] font-bold ${config.amountClass}`}>
                                                    {config.prefix}{entry.stake}
                                                </span>
                                            </TableCell>
                                        </TableRow>
                                    )
                                })}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </main>
        </div>
    )
}
