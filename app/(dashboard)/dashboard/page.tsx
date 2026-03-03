import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage } from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Plus, Flame, TrendingUp, Target, Trophy, Users, ArrowUpRight, CheckCircle2, XCircle, Clock, Calendar } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import {
    COLORS, USER, MOCK_GOALS, MOCK_COMMUNITY_GOALS, MOCK_STATS, MOCK_ACHIEVEMENTS
} from "@/lib/gen-variable"

const statusConfig = {
    active: { label: "Active", className: "bg-blue-100 text-blue-700 border-blue-200" },
    completed: { label: "Completed", className: "bg-green-100 text-green-700 border-green-200" },
    failed: { label: "Failed", className: "bg-red-100 text-red-700 border-red-200" },
    pending: { label: "Pending", className: "bg-black/5 text-black/60 border-black/10" },
}

export default function DashboardPage() {
    const activeGoals = MOCK_GOALS.filter(g => g.status === "active")

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
                    <Button className={`h-9 rounded-full bg-[${COLORS.primary}] text-black hover:bg-[${COLORS.primaryHover}] font-semibold shadow-sm text-[13px]`}>
                        <Plus className="mr-2 h-4 w-4" /> New Goal
                    </Button>
                </div>
            </header>

            <main className={`flex-1 p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8 bg-[${COLORS.background}]`}>
                {/* Welcome */}
                <div className="flex flex-col gap-1 sm:gap-2">
                    <div className="flex items-center gap-2 text-black/50 text-[13px] sm:text-sm mb-1">
                        <Calendar className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                        <span className="font-medium">
                            {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
                        </span>
                    </div>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-black flex items-center flex-wrap gap-x-2 gap-y-1">
                        <span>
                            {(() => {
                                const hours = new Date().getHours();
                                if (hours < 12) return "Good Morning";
                                if (hours < 18) return "Good Afternoon";
                                return "Good Evening";
                            })()},
                        </span>
                        <span className={`text-[${COLORS.primary}] drop-shadow-sm`}>{USER.firstName.toLowerCase()}</span>
                        <span className="animate-bounce-short inline-block ml-1">👋</span>
                    </h1>
                    <p className="text-black/60 text-[14px] sm:text-[15px] mt-1">
                        You&apos;re on a <span className="font-bold text-black">{MOCK_STATS.currentStreak}-day streak.</span> Keep going — don&apos;t break the chain.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {/* Active Goals */}
                    <Card className="rounded-2xl border-black/5 shadow-sm bg-white overflow-hidden relative">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 z-10 relative">
                            <CardTitle className="text-sm font-semibold text-black/60">Active Goals</CardTitle>
                            <div className={`h-8 w-8 rounded-full bg-[${COLORS.primary}]/20 flex items-center justify-center`}>
                                <Target className={`h-4 w-4 text-[${COLORS.primary}]`} />
                            </div>
                        </CardHeader>
                        <CardContent className="z-10 relative">
                            <div className="text-3xl font-bold text-black">{MOCK_STATS.activeGoals}</div>
                            <p className="text-xs text-black/60 font-medium flex items-center mt-1">
                                <ArrowUpRight className="mr-1 h-3 w-3 text-green-500" />
                                <span className="text-green-600 font-semibold mr-1">{MOCK_STATS.activeGoalsChange}</span>
                            </p>
                        </CardContent>
                        <div className={`absolute -bottom-8 -right-8 w-32 h-32 bg-[${COLORS.primary}]/10 rounded-full blur-2xl z-0 pointer-events-none`} />
                    </Card>

                    {/* Total Staked */}
                    <Card className="rounded-2xl border-black/5 shadow-sm bg-white relative overflow-hidden">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 z-10 relative">
                            <CardTitle className="text-sm font-semibold text-black/60">Total Staked</CardTitle>
                            <div className="h-8 w-8 rounded-full bg-orange-100 flex items-center justify-center">
                                <Flame className="h-4 w-4 text-orange-500" />
                            </div>
                        </CardHeader>
                        <CardContent className="z-10 relative">
                            <div className="text-3xl font-bold text-black">{MOCK_STATS.totalStaked}</div>
                            <p className="text-xs text-black/60 font-medium mt-1">
                                <span className="text-orange-500 font-semibold">{MOCK_STATS.totalStakedChange}</span>
                            </p>
                        </CardContent>
                    </Card>

                    {/* Success Rate */}
                    <Card className="rounded-2xl border-black/5 shadow-sm bg-white">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-semibold text-black/60">Success Rate</CardTitle>
                            <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                                <TrendingUp className="h-4 w-4 text-green-600" />
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold text-black">{MOCK_STATS.successRate}%</div>
                            <div className="mt-3 h-1.5 w-full bg-black/5 rounded-full overflow-hidden">
                                <div className={`h-full bg-[${COLORS.primary}] rounded-full`} style={{ width: `${MOCK_STATS.successRate}%` }} />
                            </div>
                            <p className="text-xs text-black/50 font-medium mt-2">{MOCK_STATS.goalsCompletedAllTime} completed out of {MOCK_STATS.goalsCompletedAllTime + MOCK_STATS.goalsFailedAllTime}</p>
                        </CardContent>
                    </Card>

                    {/* Streak */}
                    <Card className="rounded-2xl border-black/5 shadow-sm bg-black text-white relative overflow-hidden">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 z-10 relative">
                            <CardTitle className="text-sm font-medium text-white/70">Current Streak</CardTitle>
                            <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center">
                                <Trophy className={`h-4 w-4 text-[${COLORS.primary}]`} />
                            </div>
                        </CardHeader>
                        <CardContent className="z-10 relative">
                            <div className="text-3xl font-bold text-white">{MOCK_STATS.currentStreak} days</div>
                            <p className="text-xs text-white/70 font-medium mt-1">
                                Best: <span className={`text-[${COLORS.primary}] font-semibold`}>{MOCK_STATS.longestStreak} days</span>
                            </p>
                        </CardContent>
                        <div className={`absolute -top-12 -right-12 w-40 h-40 bg-[${COLORS.primary}]/20 rounded-full blur-3xl z-0 pointer-events-none`} />
                    </Card>
                </div>

                {/* Main Grid: Active Goals + Community */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
                    {/* Active Goals List */}
                    <Card className="col-span-4 rounded-2xl border-black/5 shadow-sm bg-white">
                        <CardHeader className="flex flex-row items-center justify-between pb-4">
                            <div className="space-y-1">
                                <CardTitle className="text-lg font-bold text-black">Active Stakes</CardTitle>
                                <CardDescription className="text-[13px] text-black/60">
                                    {activeGoals.length} goal{activeGoals.length !== 1 ? "s" : ""} currently locked in.
                                </CardDescription>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-5">
                            {activeGoals.map((goal) => {
                                const status = statusConfig[goal.status]
                                return (
                                    <div key={goal.id} className="group flex flex-col gap-3 p-4 rounded-xl border border-black/5 hover:border-perk-green/40 hover:bg-perk-green/5 transition-all cursor-pointer">
                                        <div className="flex items-start justify-between gap-3">
                                            <div className="flex items-center gap-3">
                                                <Avatar className="h-10 w-10 border border-black/5">
                                                    <AvatarImage src={goal.img} className="object-cover" />
                                                    <AvatarFallback className={`bg-[${COLORS.primary}] text-black text-xs font-bold`}>{goal.title.substring(0, 2)}</AvatarFallback>
                                                </Avatar>
                                                <div>
                                                    <p className="text-sm font-bold text-black leading-tight">{goal.title}</p>
                                                    <p className="text-xs text-black/50 font-medium">{goal.category}</p>
                                                </div>
                                            </div>
                                            <div className="flex flex-col items-end gap-1 shrink-0">
                                                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${status.className}`}>{status.label}</span>
                                                <span className="text-sm font-bold text-black">{goal.stake}</span>
                                            </div>
                                        </div>
                                        <div className="space-y-1.5">
                                            <div className="flex justify-between items-center text-xs text-black/50">
                                                <span className="font-medium">{goal.progress}% complete</span>
                                                <span className="flex items-center gap-1">
                                                    <Clock className="h-3 w-3" />
                                                    {goal.daysLeft === 0 ? "Due today!" : `${goal.daysLeft}d left`}
                                                </span>
                                            </div>
                                            <Progress value={goal.progress} className={`h-1.5 bg-black/5 [&>[data-slot=progress-indicator]]:bg-[${COLORS.primary}]`} />
                                        </div>
                                    </div>
                                )
                            })}
                        </CardContent>
                    </Card>

                    {/* Right Column: Community + Achievements */}
                    <div className="col-span-3 flex flex-col gap-6">
                        {/* Community Goals */}
                        <Card className="rounded-2xl border-black/5 shadow-sm bg-white flex-1">
                            <CardHeader className="flex flex-row items-center justify-between pb-4">
                                <div className="space-y-1">
                                    <CardTitle className="text-lg font-bold text-black">Community</CardTitle>
                                    <CardDescription className="text-[13px] text-black/60">Goals you can stake on.</CardDescription>
                                </div>
                                <div className="h-8 w-8 rounded-full bg-black/5 flex items-center justify-center">
                                    <Users className="h-4 w-4 text-black/60" />
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {MOCK_COMMUNITY_GOALS.map((item, i) => (
                                        <div key={i} className="flex items-center justify-between group cursor-pointer">
                                            <div className="flex items-center gap-3">
                                                <Avatar className="h-9 w-9 border border-black/5">
                                                    <AvatarImage src={item.img} className="object-cover" />
                                                    <AvatarFallback className="bg-black/5 text-black font-semibold">{item.user.substring(0, 2)}</AvatarFallback>
                                                </Avatar>
                                                <div className="flex flex-col">
                                                    <span className="text-sm font-semibold text-black">{item.user}</span>
                                                    <span className="text-xs text-black/50 font-medium truncate max-w-[130px]">{item.goal}</span>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2 shrink-0">
                                                <span className="text-sm font-bold text-black">{item.stake}</span>
                                                <Button size="sm" className={`hidden group-hover:flex px-3 h-7 text-xs rounded-full bg-[${COLORS.primary}] text-black hover:bg-[${COLORS.primaryHover}] font-semibold transition-all`}>
                                                    Stake
                                                </Button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Recent Achievements */}
                        <Card className="rounded-2xl border-black/5 shadow-sm bg-white">
                            <CardHeader className="pb-4">
                                <CardTitle className="text-lg font-bold text-black">Achievements</CardTitle>
                                <CardDescription className="text-[13px] text-black/60">Your recent unlocks.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-3 gap-3">
                                    {MOCK_ACHIEVEMENTS.slice(0, 3).map((ach) => (
                                        <div key={ach.id} className={`flex flex-col items-center gap-1.5 p-3 rounded-xl border transition-all ${ach.unlocked ? `border-[${COLORS.primary}]/30 bg-[${COLORS.primary}]/5` : "border-black/5 bg-black/2 opacity-50"}`}>
                                            <span className="text-2xl">{ach.icon}</span>
                                            <span className="text-[11px] font-bold text-black text-center leading-tight">{ach.title}</span>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Goal History */}
                <Card className="rounded-2xl border-black/5 shadow-sm bg-white">
                    <CardHeader className="pb-4">
                        <CardTitle className="text-lg font-bold text-black">Goal History</CardTitle>
                        <CardDescription className="text-[13px] text-black/60">All your past goals and their outcomes.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="divide-y divide-black/5">
                            {MOCK_GOALS.map((goal) => {
                                const status = statusConfig[goal.status]
                                return (
                                    <div key={goal.id} className="flex items-center justify-between py-3">
                                        <div className="flex items-center gap-3">
                                            {goal.status === "completed" ? <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" /> :
                                                goal.status === "failed" ? <XCircle className="h-5 w-5 text-red-400 shrink-0" /> :
                                                    <Clock className={`h-5 w-5 text-[${COLORS.primary}] shrink-0`} />}
                                            <div>
                                                <p className="text-sm font-semibold text-black">{goal.title}</p>
                                                <p className="text-xs text-black/50">{goal.category} · {goal.deadline}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3 shrink-0">
                                            <span className="text-sm font-bold text-black">{goal.stake}</span>
                                            <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${status.className}`}>{status.label}</span>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </CardContent>
                </Card>
            </main>
        </div>
    )
}
