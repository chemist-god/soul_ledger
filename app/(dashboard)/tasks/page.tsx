"use client"

import { useState } from "react"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage } from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Plus, Filter, Clock, CheckCircle2, XCircle, Globe2, Lock } from "lucide-react"
import { COLORS, MOCK_GOALS, GOAL_CATEGORIES } from "@/lib/gen-variable"

const statusConfig = {
    active: { label: "Active", icon: Clock, className: "bg-blue-100 text-blue-700 border-blue-200" },
    completed: { label: "Completed", icon: CheckCircle2, className: "bg-green-100 text-green-700 border-green-200" },
    failed: { label: "Failed", icon: XCircle, className: "bg-red-100 text-red-700 border-red-200" },
    pending: { label: "Pending", icon: Clock, className: "bg-black/5 text-black/60 border-black/10" },
}

export default function TasksPage() {
    const [activeFilter, setActiveFilter] = useState<"all" | "active" | "completed" | "failed">("all")

    const filtered = activeFilter === "all" ? MOCK_GOALS : MOCK_GOALS.filter(g => g.status === activeFilter)
    const counts = {
        all: MOCK_GOALS.length,
        active: MOCK_GOALS.filter(g => g.status === "active").length,
        completed: MOCK_GOALS.filter(g => g.status === "completed").length,
        failed: MOCK_GOALS.filter(g => g.status === "failed").length,
    }

    return (
        <div className="flex flex-col w-full min-h-screen">
            <header className={`flex h-16 shrink-0 items-center justify-between border-b border-black/5 px-6 bg-[${COLORS.background}]`}>
                <div className="flex items-center gap-2">
                    <SidebarTrigger className="-ml-2 text-black/70 hover:text-black hover:bg-black/5" />
                    <Separator orientation="vertical" className="mr-2 h-4 bg-black/10" />
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbPage className="text-black font-semibold text-[14px]">My Tasks</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
                <div className="flex items-center gap-3">
                    <Button variant="outline" className="hidden md:flex h-9 rounded-full border-black/10 text-black hover:bg-black/5 bg-transparent text-[13px] font-semibold">
                        <Filter className="mr-2 h-4 w-4" />
                        Filter
                    </Button>
                    <Button className={`h-9 rounded-full bg-[${COLORS.primary}] text-black hover:bg-[${COLORS.primaryHover}] font-semibold shadow-sm text-[13px]`}>
                        <Plus className="mr-2 h-4 w-4" /> New Goal
                    </Button>
                </div>
            </header>

            <main className={`flex-1 p-6 md:p-8 space-y-6 bg-[${COLORS.background}]`}>
                <div className="flex flex-col gap-1">
                    <h1 className="text-3xl font-bold tracking-tight text-black">My Tasks</h1>
                    <p className="text-black/60 text-[15px]">All your goals, stakes, and progress in one place.</p>
                </div>

                {/* Status Filter Tabs */}
                <div className="flex items-center gap-2 flex-wrap">
                    {(["all", "active", "completed", "failed"] as const).map((f) => (
                        <button
                            key={f}
                            onClick={() => setActiveFilter(f)}
                            className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all border ${activeFilter === f
                                ? `bg-[${COLORS.primary}] text-black border-[${COLORS.primary}] shadow-sm`
                                : "bg-transparent text-black/60 border-black/10 hover:bg-black/5 hover:text-black"
                                }`}
                        >
                            {f.charAt(0).toUpperCase() + f.slice(1)}
                            <span className="ml-1.5 text-xs opacity-70">({counts[f]})</span>
                        </button>
                    ))}
                </div>

                {/* Goals List */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {filtered.map((goal) => {
                        const status = statusConfig[goal.status]
                        const StatusIcon = status.icon
                        return (
                            <Card
                                key={goal.id}
                                className={`rounded-2xl border-black/5 shadow-sm bg-white overflow-hidden transition-all hover:shadow-md cursor-pointer group ${goal.status === "completed" ? "opacity-80" : ""}`}
                            >
                                <div className={`h-1.5 w-full ${goal.status === "active" ? `bg-[${COLORS.primary}]` : goal.status === "completed" ? "bg-green-400" : goal.status === "failed" ? "bg-red-400" : "bg-black/10"}`} />
                                <CardContent className="p-5 space-y-4">
                                    {/* Top Row */}
                                    <div className="flex items-start justify-between gap-3">
                                        <div className="flex items-center gap-3">
                                            <Avatar className="h-10 w-10 border border-black/5 shrink-0">
                                                <AvatarImage src={goal.img} className="object-cover" />
                                                <AvatarFallback className={`bg-[${COLORS.primary}] text-black text-xs font-bold`}>{goal.title.substring(0, 2)}</AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <p className="text-sm font-bold text-black leading-tight">{goal.title}</p>
                                                <p className="text-xs text-black/50 font-medium mt-0.5">{goal.category}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-1.5 shrink-0">
                                            {goal.isPublic
                                                ? <Globe2 className="h-3.5 w-3.5 text-black/30" />
                                                : <Lock className="h-3.5 w-3.5 text-black/30" />
                                            }
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-xs text-black/60 leading-relaxed">{goal.description}</p>

                                    {/* Progress */}
                                    {goal.status !== "failed" && (
                                        <div className="space-y-1.5">
                                            <div className="flex justify-between text-xs text-black/50">
                                                <span className="font-medium">{goal.progress}% complete</span>
                                                {goal.status === "active" && (
                                                    <span className="flex items-center gap-1">
                                                        <Clock className="h-3 w-3" />
                                                        {goal.daysLeft === 0 ? "Due today!" : `${goal.daysLeft}d left`}
                                                    </span>
                                                )}
                                            </div>
                                            <Progress value={goal.progress} className={`h-1.5 bg-black/5 [&>[data-slot=progress-indicator]]:${goal.status === "completed" ? "bg-green-400" : `bg-[${COLORS.primary}]`}`} />
                                        </div>
                                    )}

                                    {/* Footer */}
                                    <div className="flex items-center justify-between pt-1 border-t border-black/5">
                                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border flex items-center gap-1.5 ${status.className}`}>
                                            <StatusIcon className="h-3 w-3" />
                                            {status.label}
                                        </span>
                                        <div className="flex flex-col items-end">
                                            <span className="text-[11px] text-black/40 font-medium">Staked</span>
                                            <span className="text-sm font-bold text-black">{goal.stake}</span>
                                        </div>
                                    </div>

                                    {/* CTA for active goals */}
                                    {goal.status === "active" && (
                                        <Button className={`w-full h-9 rounded-xl bg-[${COLORS.primary}] text-black hover:bg-[${COLORS.primaryHover}] font-semibold text-[13px] opacity-0 group-hover:opacity-100 transition-all`}>
                                            Mark Complete
                                        </Button>
                                    )}
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>
            </main>
        </div>
    )
}
