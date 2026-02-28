import { SVGProps } from "react"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage } from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Plus, CreditCard, ArrowUpRight, ArrowDownRight, MoreHorizontal, FileText, PieChart } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    COLORS, USER, MOCK_TRANSACTIONS, MOCK_APPROVALS, MOCK_STATS
} from "@/lib/gen-variable"

export default function DashboardPage() {
    return (
        <div className="flex flex-col w-full min-h-screen">
            <header className={`flex h-16 shrink-0 items-center justify-between border-b border-black/5 px-6 bg-[${COLORS.background}]`}>
                <div className="flex items-center gap-2">
                    <SidebarTrigger className="-ml-2 text-black/70 hover:text-black hover:bg-black/5" />
                    <Separator orientation="vertical" className="mr-2 h-4 bg-black/10" />
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbPage className="text-black font-semibold text-[14px]">Overview</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
                <div className="flex items-center gap-3">
                    <Button variant="outline" className="hidden md:flex h-9 rounded-full border-black/10 text-black hover:bg-black/5 bg-transparent text-[13px] font-semibold">
                        <FileText className="mr-2 h-4 w-4" />
                        Export
                    </Button>
                    <Button className={`h-9 rounded-full bg-[${COLORS.primary}] text-black hover:bg-[${COLORS.primaryHover}] font-semibold shadow-sm text-[13px]`}>
                        <Plus className="mr-2 h-4 w-4" /> New Expense
                    </Button>
                </div>
            </header>

            <main className={`flex-1 p-6 md:p-8 space-y-8 bg-[${COLORS.background}]`}>
                <div className="flex flex-col gap-1">
                    <h1 className="text-3xl font-bold tracking-tight text-black">Welcome back, {USER.firstName}!</h1>
                    <p className="text-black/60 text-[15px]">Here&apos;s what&apos;s happening with your corporate spend today.</p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    <Card className="rounded-2xl border-black/5 shadow-sm bg-white overflow-hidden relative">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 z-10 relative">
                            <CardTitle className="text-sm font-semibold text-black/60">Total Spend</CardTitle>
                            <div className={`h-8 w-8 rounded-full bg-[${COLORS.primary}]/20 flex items-center justify-center`}>
                                <CreditCard className={`h-4 w-4 text-[${COLORS.primary}]`} />
                            </div>
                        </CardHeader>
                        <CardContent className="z-10 relative">
                            <div className="text-3xl font-bold text-black">{MOCK_STATS.totalSpend}</div>
                            <p className="text-xs text-black/60 font-medium flex items-center mt-1">
                                <ArrowUpRight className="mr-1 h-3 w-3 text-red-500" />
                                <span className="text-red-500 font-semibold mr-1">{MOCK_STATS.totalSpendChange}</span> from last month
                            </p>
                        </CardContent>
                        <div className={`absolute -bottom-8 -right-8 w-32 h-32 bg-[${COLORS.primary}]/10 rounded-full blur-2xl z-0 pointer-events-none`} />
                    </Card>

                    <Card className="rounded-2xl border-black/5 shadow-sm bg-white relative overflow-hidden">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 z-10 relative">
                            <CardTitle className="text-sm font-semibold text-black/60">Available Limit</CardTitle>
                            <div className="h-8 w-8 rounded-full bg-black/5 flex items-center justify-center">
                                <WalletIcon className="h-4 w-4 text-black/70" />
                            </div>
                        </CardHeader>
                        <CardContent className="z-10 relative">
                            <div className="text-3xl font-bold text-black">{MOCK_STATS.availableLimit}</div>
                            <div className="mt-3 h-1.5 w-full bg-black/5 rounded-full overflow-hidden">
                                <div className={`h-full bg-[${COLORS.primary}] rounded-full w-[${MOCK_STATS.limitUsedPercent}%]`} />
                            </div>
                            <p className="text-xs text-black/50 font-medium mt-2">
                                {MOCK_STATS.totalLimit} total limit
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="rounded-2xl border-black/5 shadow-sm bg-white">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-semibold text-black/60">Pending Approvals</CardTitle>
                            <div className="h-8 w-8 rounded-full bg-orange-100 flex items-center justify-center">
                                <FileText className="h-4 w-4 text-orange-600" />
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold text-black">{MOCK_STATS.pendingApprovals}</div>
                            <p className="text-xs text-black/60 font-medium mt-1">
                                {MOCK_STATS.urgentApprovals} require urgent review
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="rounded-2xl border-black/5 shadow-sm bg-black text-white relative overflow-hidden">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 z-10 relative">
                            <CardTitle className="text-sm font-medium text-white/70">Top Category</CardTitle>
                            <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center">
                                <PieChart className={`h-4 w-4 text-[${COLORS.primary}]`} />
                            </div>
                        </CardHeader>
                        <CardContent className="z-10 relative">
                            <div className="text-3xl font-bold text-white">{MOCK_STATS.topCategory}</div>
                            <p className="text-xs text-white/70 font-medium flex items-center mt-1">
                                <ArrowDownRight className={`mr-1 h-3 w-3 text-[${COLORS.primary}]`} />
                                <span className={`text-[${COLORS.primary}] font-semibold mr-1`}>{MOCK_STATS.topCategoryChange}</span> from last month
                            </p>
                        </CardContent>
                        <div className={`absolute -top-12 -right-12 w-40 h-40 bg-[${COLORS.primary}]/20 rounded-full blur-3xl z-0 pointer-events-none`} />
                    </Card>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
                    <Card className="col-span-4 rounded-2xl border-black/5 shadow-sm bg-white">
                        <CardHeader className="pb-4">
                            <CardTitle className="text-lg font-bold text-black">Recent Transactions</CardTitle>
                            <CardDescription className="text-[13px] text-black/60">
                                You made {MOCK_STATS.recentTransactionCount} transactions this week.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow className="border-black/5 hover:bg-transparent">
                                        <TableHead className="text-black/50 font-medium text-xs uppercase">Merchant</TableHead>
                                        <TableHead className="text-black/50 font-medium text-xs uppercase hidden sm:table-cell">Category</TableHead>
                                        <TableHead className="text-black/50 font-medium text-xs uppercase hidden md:table-cell">Date</TableHead>
                                        <TableHead className="text-right text-black/50 font-medium text-xs uppercase">Amount</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {MOCK_TRANSACTIONS.slice(0, 5).map((tx, i) => (
                                        <TableRow key={i} className="border-black/5 py-4 cursor-pointer hover:bg-black/5 transition-colors">
                                            <TableCell className="font-medium py-4">
                                                <div className="flex items-center gap-3">
                                                    <Avatar className="h-9 w-9 border border-black/5">
                                                        <AvatarImage src={tx.img} className="object-cover" />
                                                        <AvatarFallback className={`bg-[${COLORS.primary}] text-black text-xs font-bold`}>{tx.merchant.substring(0, 2)}</AvatarFallback>
                                                    </Avatar>
                                                    <div className="flex flex-col">
                                                        <span className="text-sm font-semibold text-black">{tx.merchant}</span>
                                                        <span className="text-xs text-black/50 font-medium">{tx.sub}</span>
                                                    </div>
                                                </div>
                                            </TableCell>
                                            <TableCell className="hidden sm:table-cell py-4">
                                                <div className="inline-flex items-center rounded-full border border-black/10 px-2.5 py-0.5 text-xs font-medium text-black/70 bg-black/5">
                                                    {tx.category}
                                                </div>
                                            </TableCell>
                                            <TableCell className="hidden md:table-cell text-sm text-black/60 py-4">{tx.date}</TableCell>
                                            <TableCell className="text-right text-sm font-semibold text-black py-4">{tx.amount}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>

                    <Card className="col-span-3 rounded-2xl border-black/5 shadow-sm bg-white">
                        <CardHeader className="flex flex-row items-center justify-between pb-4">
                            <div className="space-y-1">
                                <CardTitle className="text-lg font-bold text-black">Awaiting Approval</CardTitle>
                                <CardDescription className="text-[13px] text-black/60">
                                    Expenses that need your attention.
                                </CardDescription>
                            </div>
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-black/60 hover:text-black">
                                <MoreHorizontal className="h-5 w-5" />
                            </Button>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-6">
                                {MOCK_APPROVALS.map((req, i) => (
                                    <div key={i} className="flex items-center justify-between group">
                                        <div className="flex items-center gap-3">
                                            <Avatar className="h-10 w-10 border border-black/5">
                                                <AvatarImage src={req.img} className="object-cover" />
                                                <AvatarFallback className="bg-black/5 text-black font-semibold">{req.user.substring(0, 2)}</AvatarFallback>
                                            </Avatar>
                                            <div className="flex flex-col">
                                                <span className="text-sm font-semibold text-black">{req.user}</span>
                                                <span className="text-xs text-black/50 font-medium truncate max-w-[120px] sm:max-w-xs">{req.desc}</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span className="text-sm font-bold text-black">{req.amount}</span>
                                            <Button size="sm" className={`hidden group-hover:block px-3 h-7 text-xs rounded-full bg-[${COLORS.primary}] text-black hover:bg-[${COLORS.primaryHover}] font-semibold transition-all`}>
                                                Approve
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    )
}

function WalletIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
            <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
            <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
        </svg>
    )
}
