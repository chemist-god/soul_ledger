"use client"

import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage } from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Calendar, Download, TrendingUp, TrendingDown, ArrowUpRight, BarChart3, PieChart as PieChartIcon, Activity } from "lucide-react"
import { toast } from "sonner"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip, PieChart, Pie, Cell } from "recharts"
import { COLORS, MONTHLY_SPEND, CATEGORY_SPEND, MOCK_STATS, TOAST } from "@/lib/gen-variable"


export default function AnalyticsPage() {
    return (
        <div className="flex flex-col w-full min-h-screen">
            <header className={`flex h-16 shrink-0 items-center justify-between border-b border-black/5 px-4 sm:px-6 bg-[${COLORS.background}] sticky top-0 z-20`}>
                <div className="flex items-center gap-2">
                    <SidebarTrigger className="-ml-2 text-black/70 hover:text-black hover:bg-black/5" />
                    <Separator orientation="vertical" className="mr-2 h-4 bg-black/10" />
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbPage className="text-black font-semibold text-[14px]">Analytics</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                    <Button variant="outline" className="hidden sm:flex h-9 rounded-full border-black/10 text-black hover:bg-black/5 bg-transparent text-[13px] font-semibold">
                        <Calendar className="mr-2 h-4 w-4" />
                        Last 30 Days
                    </Button>
                    <Button
                        onClick={() => toast(TOAST.exportReport.title, { description: TOAST.exportReport.description })}
                        className="h-9 rounded-full bg-black text-white hover:bg-black/80 font-semibold flex items-center shadow-sm text-[13px] px-3 sm:px-4"
                    >
                        <Download className="sm:mr-2 h-4 w-4" /> <span className="hidden sm:inline">Export Report</span>
                    </Button>
                </div>
            </header>

            <main className={`flex-1 p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8 bg-[${COLORS.background}]`}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-black">Spend Analytics</h1>
                        <p className="text-black/60 text-[14px] sm:text-[15px]">Real-time insights into your company's spending patterns.</p>
                    </div>
                    <Button variant="outline" className="sm:hidden w-full justify-center h-10 rounded-xl border-black/10 text-black bg-white font-semibold flex items-center shadow-sm">
                        <Calendar className="mr-2 h-4 w-4" />
                        Date Range: Last 30 Days
                    </Button>
                </div>

                {/* Top Metrics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                    <Card className="rounded-3xl border-none shadow-sm bg-black text-white p-6 relative overflow-hidden flex flex-col justify-between min-h-[160px]">
                        <div className={`absolute top-[-20%] right-[-10%] w-32 h-32 bg-[${COLORS.primary}]/30 rounded-full blur-[50px] pointer-events-none`} />
                        <div className="relative z-10 flex justify-between items-start">
                            <span className="text-white/60 font-medium text-[14px]">Total Spend (MTD)</span>
                            <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md">
                                <Activity className={`h-4 w-4 text-[${COLORS.primary}]`} />
                            </div>
                        </div>
                        <div className="relative z-10 mt-4">
                            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{MOCK_STATS.totalSpendMTD}</h2>
                            <div className="flex items-center gap-2 mt-2">
                                <span className={`flex items-center text-[${COLORS.primary}] font-semibold text-[13px] bg-[${COLORS.primary}]/10 px-2 py-0.5 rounded-md`}>
                                    <TrendingUp className="mr-1 h-3 w-3" /> {MOCK_STATS.totalSpendMTDChange}
                                </span>
                                <span className="text-white/40 text-[13px]">vs last month</span>
                            </div>
                        </div>
                    </Card>

                    <Card className="rounded-3xl border-black/5 shadow-sm bg-white p-6 relative overflow-hidden flex flex-col justify-between min-h-[160px]">
                        <div className="relative z-10 flex justify-between items-start">
                            <span className="text-black/50 font-medium text-[14px]">Avg. Transaction</span>
                            <div className="h-8 w-8 rounded-full bg-black/5 flex items-center justify-center">
                                <BarChart3 className="h-4 w-4 text-black/60" />
                            </div>
                        </div>
                        <div className="relative z-10 mt-4">
                            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-black">{MOCK_STATS.avgTransaction}</h2>
                            <div className="flex items-center gap-2 mt-2">
                                <span className="flex items-center text-red-500 font-semibold text-[13px] bg-red-50 px-2 py-0.5 rounded-md">
                                    <TrendingDown className="mr-1 h-3 w-3" /> {MOCK_STATS.avgTransactionChange}
                                </span>
                                <span className="text-black/40 text-[13px]">vs last month</span>
                            </div>
                        </div>
                    </Card>

                    <Card className={`rounded-3xl border-black/5 shadow-sm bg-[${COLORS.primary}] p-6 relative overflow-hidden flex flex-col justify-between min-h-[160px]`}>
                        <div className="relative z-10 flex justify-between items-start">
                            <span className="text-black/60 font-medium text-[14px]">Active Cards</span>
                            <div className="h-8 w-8 rounded-full bg-white/40 flex items-center justify-center">
                                <PieChartIcon className="h-4 w-4 text-black/80" />
                            </div>
                        </div>
                        <div className="relative z-10 mt-4">
                            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-black">{MOCK_STATS.activeCards}</h2>
                            <div className="flex items-center gap-2 mt-2">
                                <span className="flex items-center text-black font-semibold text-[13px] bg-white/40 px-2 py-0.5 rounded-md">
                                    <TrendingUp className="mr-1 h-3 w-3" /> {MOCK_STATS.activeCardsChange}
                                </span>
                                <span className="text-black/50 text-[13px]">new this month</span>
                            </div>
                        </div>
                    </Card>
                </div>

                {/* Charts Grid */}
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                    {/* Area Chart: Spend Over Time */}
                    <Card className="xl:col-span-2 rounded-3xl border-black/5 shadow-sm bg-white overflow-hidden">
                        <CardHeader className="p-6 pb-2 border-b border-black/5">
                            <CardTitle className="text-lg font-bold text-black flex items-center justify-between">
                                Spend Over Time
                                <Button variant="ghost" size="sm" className="hidden sm:flex text-black/50 hover:text-black">
                                    View details <ArrowUpRight className="ml-1 w-4 h-4" />
                                </Button>
                            </CardTitle>
                            <CardDescription className="text-[14px] text-black/50">Tracking overall company expenditure across all active cards.</CardDescription>
                        </CardHeader>
                        <CardContent className="p-6">
                            <div className="h-[300px] w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <AreaChart data={MONTHLY_SPEND} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                                        <defs>
                                            <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor={COLORS.primary} stopOpacity={0.4} />
                                                <stop offset="95%" stopColor={COLORS.primary} stopOpacity={0} />
                                            </linearGradient>
                                        </defs>
                                        <XAxis
                                            dataKey="name"
                                            axisLine={false}
                                            tickLine={false}
                                            tick={{ fill: '#888888', fontSize: 12 }}
                                            dy={10}
                                        />
                                        <YAxis
                                            axisLine={false}
                                            tickLine={false}
                                            tick={{ fill: '#888888', fontSize: 12 }}
                                            tickFormatter={(value) => `$${value / 1000}k`}
                                            dx={-10}
                                        />
                                        <CartesianGrid vertical={false} stroke="#E5E7EB" strokeDasharray="4 4" />
                                        <Tooltip
                                            cursor={{ stroke: '#111111', strokeWidth: 1, strokeDasharray: '4 4' }}
                                            content={({ active, payload, label }) => {
                                                if (active && payload && payload.length) {
                                                    return (
                                                        <div className="bg-black text-white text-xs font-semibold px-3 py-2 rounded-lg shadow-lg">
                                                            <div className="text-white/60 mb-1">{label}</div>
                                                            <div className="text-[14px]">${payload[0].value?.toLocaleString()}</div>
                                                        </div>
                                                    );
                                                }
                                                return null;
                                            }}
                                        />
                                        <Area
                                            type="monotone"
                                            dataKey="total"
                                            stroke="#111111"
                                            strokeWidth={3}
                                            fillOpacity={1}
                                            fill="url(#colorTotal)"
                                            activeDot={{ r: 6, fill: COLORS.primary, stroke: "#111111", strokeWidth: 2 }}
                                        />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Donut Chart: Spend by Category */}
                    <Card className="rounded-3xl border-black/5 shadow-sm bg-white overflow-hidden flex flex-col">
                        <CardHeader className="p-6 pb-2 border-b border-black/5">
                            <CardTitle className="text-lg font-bold text-black">Top Categories</CardTitle>
                            <CardDescription className="text-[14px] text-black/50">Where your team is spending most.</CardDescription>
                        </CardHeader>
                        <CardContent className="p-6 flex-1 flex flex-col justify-center">
                            <div className="h-[220px] w-full relative">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie
                                            data={CATEGORY_SPEND}
                                            cx="50%"
                                            cy="50%"
                                            innerRadius={60}
                                            outerRadius={90}
                                            paddingAngle={2}
                                            dataKey="value"
                                            stroke="none"
                                        >
                                            {CATEGORY_SPEND.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={entry.color} />
                                            ))}
                                        </Pie>
                                        <Tooltip
                                            content={({ active, payload }) => {
                                                if (active && payload && payload.length) {
                                                    return (
                                                        <div className="bg-white border border-black/10 text-black text-xs font-semibold px-3 py-2 rounded-lg shadow-lg flex items-center gap-2">
                                                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: payload[0].payload.color }} />
                                                            {payload[0].name}: ${payload[0].value?.toLocaleString()}
                                                        </div>
                                                    );
                                                }
                                                return null;
                                            }}
                                        />
                                    </PieChart>
                                </ResponsiveContainer>
                                <div className="absolute inset-0 flex items-center justify-center flex-col pointer-events-none">
                                    <span className="text-sm font-semibold text-black/50">Total</span>
                                    <span className="text-xl font-bold text-black">{MOCK_STATS.categorySpendTotal}</span>
                                </div>
                            </div>

                            <div className="mt-8 space-y-3">
                                {CATEGORY_SPEND.map((category, i) => (
                                    <div key={i} className="flex items-center justify-between text-sm">
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 rounded-md" style={{ backgroundColor: category.color }} />
                                            <span className="font-medium text-black/80">{category.name}</span>
                                        </div>
                                        <span className="font-semibold text-black">${category.value.toLocaleString()}</span>
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
