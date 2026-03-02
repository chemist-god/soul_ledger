import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage } from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Clock, Users, Search, TrendingUp } from "lucide-react"
import { COLORS, MOCK_COMMUNITY_GOALS, MOCK_STATS } from "@/lib/gen-variable"

export default function CommunityPage() {
    return (
        <div className="flex flex-col w-full min-h-screen">
            <header className={`flex h-16 shrink-0 items-center justify-between border-b border-black/5 px-6 bg-[${COLORS.background}]`}>
                <div className="flex items-center gap-2">
                    <SidebarTrigger className="-ml-2 text-black/70 hover:text-black hover:bg-black/5" />
                    <Separator orientation="vertical" className="mr-2 h-4 bg-black/10" />
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbPage className="text-black font-semibold text-[14px]">Community</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
                <div className="flex items-center gap-3">
                    <Button variant="outline" className="hidden md:flex h-9 rounded-full border-black/10 text-black hover:bg-black/5 bg-transparent text-[13px] font-semibold">
                        <Search className="mr-2 h-4 w-4" />
                        Search Goals
                    </Button>
                </div>
            </header>

            <main className={`flex-1 p-6 md:p-8 space-y-8 bg-[${COLORS.background}]`}>
                <div className="flex flex-col gap-1">
                    <h1 className="text-3xl font-bold tracking-tight text-black">Community Marketplace</h1>
                    <p className="text-black/60 text-[15px]">Discover public goals and stake on people you believe in.</p>
                </div>

                {/* Stats bar */}
                <div className="grid grid-cols-3 gap-4">
                    <Card className="rounded-2xl border-black/5 shadow-sm bg-white p-4 flex flex-col gap-1">
                        <p className="text-xs text-black/50 font-medium">Active Public Goals</p>
                        <p className="text-2xl font-bold text-black">847</p>
                    </Card>
                    <Card className="rounded-2xl border-black/5 shadow-sm bg-white p-4 flex flex-col gap-1">
                        <p className="text-xs text-black/50 font-medium">Total Staked Community</p>
                        <p className="text-2xl font-bold text-black">$38.4k</p>
                    </Card>
                    <Card className="rounded-2xl border-black/5 shadow-sm bg-white p-4 flex flex-col gap-1">
                        <p className="text-xs text-black/50 font-medium">Avg. Success Rate</p>
                        <p className="text-2xl font-bold text-black">{MOCK_STATS.successRate}%</p>
                    </Card>
                </div>

                {/* Community Goals Grid */}
                <div>
                    <h2 className="text-lg font-bold text-black mb-4 flex items-center gap-2">
                        <TrendingUp className={`h-5 w-5 text-[${COLORS.primary}]`} />
                        Trending Goals
                    </h2>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                        {MOCK_COMMUNITY_GOALS.map((item, i) => (
                            <Card key={i} className="rounded-2xl border-black/5 shadow-sm bg-white hover:shadow-md transition-all cursor-pointer group">
                                <CardHeader className="pb-3">
                                    <div className="flex items-start justify-between gap-3">
                                        <div className="flex items-center gap-3">
                                            <Avatar className="h-10 w-10 border border-black/5">
                                                <AvatarImage src={item.img} className="object-cover" />
                                                <AvatarFallback className="bg-black/5 text-black font-semibold">{item.user.substring(0, 2)}</AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <CardTitle className="text-sm font-bold text-black leading-tight">{item.user}</CardTitle>
                                                <CardDescription className="text-xs text-black/50">{item.role}</CardDescription>
                                            </div>
                                        </div>
                                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full bg-[${COLORS.primary}]/10 text-black/70 border border-[${COLORS.primary}]/20`}>
                                            {item.category}
                                        </span>
                                    </div>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <p className="text-sm font-semibold text-black leading-snug">{item.goal}</p>
                                    <div className="flex items-center justify-between text-xs text-black/50">
                                        <span className="flex items-center gap-1">
                                            <Clock className="h-3 w-3" />
                                            {item.daysLeft}d remaining
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Users className="h-3 w-3" />
                                            {item.backers} backer{item.backers !== 1 ? "s" : ""}
                                        </span>
                                        <span className="font-bold text-black">{item.stake} staked</span>
                                    </div>
                                    <Button
                                        className={`w-full h-9 rounded-xl bg-[${COLORS.primary}] text-black hover:bg-[${COLORS.primaryHover}] font-semibold text-[13px] opacity-0 group-hover:opacity-100 transition-all`}
                                    >
                                        Stake on this Goal
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    )
}
