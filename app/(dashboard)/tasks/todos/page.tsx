"use client"

import React, { useState } from "react"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog"
import { toast } from "sonner"
import {
    Plus,
    CheckCircle2,
    XCircle,
    Clock,
    Trash2,
    ArrowRight,
    Search,
    ListTodo,
    AlarmClock,
    LayoutGrid,
    Lock
} from "lucide-react"
import { COLORS, GOAL_CATEGORIES, MOCK_TODOS, ROUTES, TOAST, MockTodo, TodoStatus } from "@/lib/gen-variable"
import Link from "next/link"

const STATUS_TABS: { label: string; value: "all" | TodoStatus }[] = [
    { label: "All", value: "all" },
    { label: "Active", value: "active" },
    { label: "Completed", value: "completed" },
    { label: "Failed", value: "failed" },
]

const PRIORITY_COLORS: Record<string, string> = {
    High: "bg-red-50 text-red-600 border-red-100",
    Medium: "bg-amber-50 text-amber-600 border-amber-100",
    Low: "bg-emerald-50 text-emerald-700 border-emerald-100",
}

const STATUS_CONFIG: Record<string, { icon: React.ReactNode; pill: string }> = {
    active: {
        icon: <Clock className="h-4 w-4 text-amber-500" />,
        pill: "bg-amber-100 text-amber-700",
    },
    completed: {
        icon: <CheckCircle2 className="h-4 w-4 text-emerald-500" />,
        pill: "bg-emerald-100 text-emerald-700",
    },
    failed: {
        icon: <XCircle className="h-4 w-4 text-red-500" />,
        pill: "bg-red-100 text-red-600",
    },
}

const emptyForm = {
    title: "",
    description: "",
    category: "Learning",
    priority: "Medium" as "High" | "Medium" | "Low",
    deadline: "",
}

export default function TodosPage() {
    const [todos, setTodos] = useState<MockTodo[]>(MOCK_TODOS)
    const [activeTab, setActiveTab] = useState<"all" | TodoStatus>("all")
    const [search, setSearch] = useState("")
    const [showCreate, setShowCreate] = useState(false)
    const [form, setForm] = useState(emptyForm)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const filtered = todos.filter((t) => {
        const matchTab = activeTab === "all" || t.status === activeTab
        const matchSearch = t.title.toLowerCase().includes(search.toLowerCase())
        return matchTab && matchSearch
    })

    const handleCreate = async () => {
        if (!form.title.trim() || !form.deadline) return
        setIsSubmitting(true)
        await new Promise((r) => setTimeout(r, 600))

        const newTodo: MockTodo = {
            id: `todo-${Date.now()}`,
            title: form.title.trim(),
            description: form.description.trim(),
            category: form.category,
            priority: form.priority,
            deadline: new Date(form.deadline).toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" }),
            daysLeft: Math.max(0, Math.ceil((new Date(form.deadline).getTime() - Date.now()) / 86400000)),
            status: "active",
            createdAt: new Date().toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" }),
            hasStake: false,
        }

        setTodos((prev) => [newTodo, ...prev])
        setIsSubmitting(false)
        setShowCreate(false)
        setForm(emptyForm)
        toast.success(TOAST.todoCreated.title, { description: TOAST.todoCreated.description })
    }

    const handleDelete = (id: string) => {
        setTodos((prev) => prev.filter((t) => t.id !== id))
        toast(TOAST.todoDeleted.title, { description: TOAST.todoDeleted.description })
    }

    const handleComplete = (id: string) => {
        setTodos((prev) => prev.map((t) => t.id === id ? { ...t, status: "completed" as const } : t))
        toast.success(TOAST.todoCompleted.title, { description: TOAST.todoCompleted.description })
    }

    return (
        <div className="flex flex-col w-full min-h-screen font-sans">
            {/* Header / Nav */}
            <header className={`flex h-16 shrink-0 items-center justify-between border-b border-black/[0.04] px-4 sm:px-8 bg-[${COLORS.background}] sticky top-0 z-20`}>
                <div className="flex items-center gap-3">
                    <SidebarTrigger className="-ml-2 text-black/60 hover:text-black hover:bg-black/5 transition-colors" />
                    <Separator orientation="vertical" className="h-5 bg-black/[0.08]" />
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <Link href={ROUTES.tasks} className="text-black/50 text-[13px] hover:text-black font-semibold transition-colors">My Tasks</Link>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage className="text-black font-bold text-[14px]">Todos</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
                <Button
                    onClick={() => setShowCreate(true)}
                    className={`h-9 sm:h-10 rounded-full bg-black text-white hover:bg-black/80 font-bold flex items-center shadow-md text-[13px] sm:text-[14px] px-4 sm:px-5 transition-transform active:scale-95`}
                >
                    <Plus className="mr-1.5 h-4 w-4" /> New Todo
                </Button>
            </header>

            <main className={`flex-1 p-4 sm:p-8 md:p-10 space-y-8 md:space-y-10 bg-[${COLORS.background}] max-w-6xl mx-auto w-full`}>
                {/* Page title area */}
                <div className="flex flex-col gap-2">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-black flex items-center gap-3">
                        <ListTodo className={`h-8 w-8 sm:h-10 sm:w-10 text-[${COLORS.primary}] drop-shadow-sm`} /> Todos
                    </h1>
                    <p className="text-black/60 text-[15px] sm:text-[16px] font-medium max-w-lg leading-relaxed">
                        Plan your commitments. When you're ready to make them real, add a stake to back them with money.
                    </p>
                </div>

                {/* Stats row - Handcrafted look */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                    {[
                        { label: "Active", value: todos.filter(t => t.status === "active").length, color: "text-black", labelColor: "text-black/50" },
                        { label: "Completed", value: todos.filter(t => t.status === "completed").length, color: "text-emerald-600", labelColor: "text-emerald-700/60" },
                        { label: "Failed", value: todos.filter(t => t.status === "failed").length, color: "text-red-600", labelColor: "text-red-700/60" },
                    ].map((stat) => (
                        <div key={stat.label} className="rounded-3xl p-6 bg-white border border-black/[0.04] shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex flex-col gap-1 hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-shadow">
                            <span className={`text-4xl sm:text-5xl font-black tracking-tighter ${stat.color}`}>{stat.value}</span>
                            <span className={`text-[13px] sm:text-[14px] font-bold tracking-widest uppercase ${stat.labelColor}`}>{stat.label}</span>
                        </div>
                    ))}
                </div>

                {/* Search + Filter tabs - Premium segmented control feel */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 py-2">
                    <div className="flex items-center gap-1 bg-black/[0.03] p-1.5 rounded-2xl w-full sm:w-auto overflow-x-auto hide-scrollbar border border-black/[0.02]">
                        {STATUS_TABS.map((tab) => (
                            <button
                                key={tab.value}
                                onClick={() => setActiveTab(tab.value)}
                                className={`flex-1 sm:flex-none px-5 py-2.5 rounded-xl text-[13px] sm:text-[14px] font-bold transition-all whitespace-nowrap ${activeTab === tab.value
                                    ? "bg-white text-black shadow-[0_1px_5px_rgba(0,0,0,0.05)]"
                                    : "text-black/50 hover:text-black hover:bg-black/5"
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                    <div className="relative w-full sm:max-w-xs">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-black/40" />
                        <Input
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search your commitments…"
                            className="pl-11 rounded-2xl border-black/[0.06] bg-white h-12 text-[14px] font-medium placeholder:text-black/40 shadow-sm focus-visible:ring-2 focus-visible:ring-[${COLORS.primary}]/50 focus-visible:border-[${COLORS.primary}] w-full transition-all"
                        />
                    </div>
                </div>

                {/* Todo list */}
                {filtered.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-24 text-center bg-white rounded-3xl border border-black/[0.04] border-dashed shadow-sm">
                        <div className="h-16 w-16 bg-black/[0.02] rounded-full flex items-center justify-center mb-5">
                            <ListTodo className="h-8 w-8 text-black/30" />
                        </div>
                        <h3 className="text-xl font-bold text-black mb-1">It's quiet here</h3>
                        <p className="text-black/50 text-[14px] font-medium max-w-sm">You haven't added any todos for this view yet. Create one to get started.</p>
                        <Button
                            onClick={() => setShowCreate(true)}
                            variant="outline"
                            className="mt-6 h-10 rounded-xl border-black/10 font-bold px-6 shadow-sm hover:bg-black/5"
                        >
                            New Todo
                        </Button>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {filtered.map((todo) => {
                            const status = STATUS_CONFIG[todo.status]
                            return (
                                <div
                                    key={todo.id}
                                    className="group bg-white rounded-[24px] border border-black/[0.04] p-5 sm:p-7 flex flex-col sm:flex-row gap-5 shadow-[0_2px_10px_rgba(0,0,0,0.015)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden"
                                >
                                    {/* Subtle gradient background based on status for active items */}
                                    {todo.status === "active" && (
                                        <div className={`absolute top-0 right-0 w-40 h-40 bg-[${COLORS.primary}]/10 rounded-bl-[100px] blur-[40px] pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity`} />
                                    )}

                                    <div className="flex-1 min-w-0 flex flex-col justify-center relative z-10">
                                        <div className="flex flex-wrap items-center gap-3 mb-2.5">
                                            {status.icon}
                                            <span className="text-[17px] sm:text-[19px] font-black text-black tracking-tight truncate">{todo.title}</span>
                                            <span className={`text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-lg border ${PRIORITY_COLORS[todo.priority]}`}>
                                                {todo.priority}
                                            </span>
                                            {todo.hasStake && (
                                                <span className={`text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-lg bg-[${COLORS.primary}] text-black shadow-[0_2px_10px_rgba(186,255,76,0.5)] flex items-center gap-1.5`}>
                                                    <Lock className="h-3 w-3 inline-block" /> Staked
                                                </span>
                                            )}
                                        </div>
                                        {todo.description && (
                                            <p className="text-[14px] sm:text-[15px] leading-relaxed text-black/60 mb-5 line-clamp-2 md:pr-12 font-medium">{todo.description}</p>
                                        )}

                                        <div className="flex flex-wrap items-center gap-4 text-[13px] text-black/50 font-bold">
                                            <span className="flex items-center gap-1.5 text-black/70 bg-black/[0.03] px-3 py-1.5 rounded-lg border border-black/[0.02]">
                                                <AlarmClock className="h-4 w-4 text-black/40" />
                                                {todo.deadline}
                                            </span>

                                            {todo.status === "active" && todo.daysLeft > 0 && (
                                                <span className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border ${todo.daysLeft <= 3 ? "bg-red-50 text-red-600 border-red-100" : "bg-black/[0.03] text-black/70 border-black/[0.02]"}`}>
                                                    {todo.daysLeft} {todo.daysLeft === 1 ? 'day' : 'days'} left
                                                </span>
                                            )}

                                            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/[0.03] text-black/70 border border-black/[0.02]">
                                                <div className="h-1.5 w-1.5 rounded-full bg-black/30" />
                                                {todo.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Actions */}
                                    <div className="flex flex-row sm:flex-col items-center justify-end sm:justify-center gap-3 shrink-0 pt-5 sm:pt-0 border-t border-black/5 sm:border-t-0 sm:border-l sm:pl-7 relative z-10 w-full sm:w-auto">
                                        {todo.status === "active" && (
                                            <>
                                                {!todo.hasStake && (
                                                    <Link href={`${ROUTES.stakes}?todoId=${todo.id}&todoTitle=${encodeURIComponent(todo.title)}`} className="flex-1 sm:flex-none w-full">
                                                        <Button
                                                            size="default"
                                                            className={`w-full h-11 rounded-xl bg-[${COLORS.primary}] text-black hover:bg-[${COLORS.primaryHover}] font-bold text-[14px] px-5 shadow-[0_2px_10px_rgba(186,255,76,0.3)] transition-transform active:scale-95`}
                                                        >
                                                            Add Stake
                                                        </Button>
                                                    </Link>
                                                )}
                                                <Button
                                                    size="default"
                                                    variant="outline"
                                                    onClick={() => handleComplete(todo.id)}
                                                    className="flex-1 sm:flex-none w-full h-11 rounded-xl border-black/[0.08] bg-white text-black hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-200 font-bold text-[14px] px-5 shadow-sm transition-transform active:scale-95"
                                                >
                                                    Mark Done
                                                </Button>
                                            </>
                                        )}
                                        <Button
                                            size="icon"
                                            variant="ghost"
                                            onClick={() => handleDelete(todo.id)}
                                            className="h-11 w-11 rounded-xl hover:bg-red-50 hover:text-red-600 text-black/30 transition-colors shrink-0"
                                            aria-label="Delete todo"
                                        >
                                            <Trash2 className="h-4.5 w-4.5" />
                                        </Button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                )}
            </main>

            {/* Create Todo Dialog - Premium Styling */}
            <Dialog open={showCreate} onOpenChange={setShowCreate}>
                <DialogContent className="sm:max-w-lg rounded-[32px] border border-black/[0.05] bg-white p-0 overflow-hidden shadow-2xl">
                    <DialogHeader className="px-6 sm:px-8 pt-8 pb-5 border-b border-black/[0.03] bg-white relative">
                        <div className={`absolute top-0 left-0 w-full h-1 bg-[${COLORS.primary}]`} />
                        <DialogTitle className="text-2xl font-black text-black tracking-tight flex items-center gap-3">
                            <div className={`h-10 w-10 rounded-xl bg-[${COLORS.primary}]/10 flex items-center justify-center`}>
                                <ListTodo className={`h-5 w-5 text-black`} />
                            </div>
                            New Todo
                        </DialogTitle>
                        <DialogDescription className="text-black/60 text-[14px] mt-2 font-medium">
                            Plan your commitment to yourself. You can back it with a stake later to lock it in.
                        </DialogDescription>
                    </DialogHeader>

                    <div className="px-6 sm:px-8 py-6 space-y-6 bg-black/[0.015]">
                        <div className="space-y-2">
                            <Label className="text-[14px] font-bold text-black/80">Title <span className="text-red-500">*</span></Label>
                            <Input
                                value={form.title}
                                onChange={(e) => setForm({ ...form, title: e.target.value })}
                                placeholder="e.g. Read Rich Dad Poor Dad"
                                className={`rounded-xl border-black/[0.08] bg-white h-12 text-[15px] font-medium placeholder:text-black/30 shadow-sm focus-visible:ring-2 focus-visible:ring-[${COLORS.primary}]/50 focus-visible:border-[${COLORS.primary}]`}
                            />
                        </div>

                        <div className="space-y-2">
                            <Label className="text-[14px] font-bold text-black/80">Description</Label>
                            <Textarea
                                value={form.description}
                                onChange={(e) => setForm({ ...form, description: e.target.value })}
                                placeholder="Add more context about this commitment…"
                                className={`rounded-xl border-black/[0.08] bg-white text-[15px] font-medium placeholder:text-black/30 shadow-sm focus-visible:ring-2 focus-visible:ring-[${COLORS.primary}]/50 focus-visible:border-[${COLORS.primary}] resize-none min-h-[100px] p-4`}
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label className="text-[14px] font-bold text-black/80">Category</Label>
                                <Select value={form.category} onValueChange={(v) => setForm({ ...form, category: v })}>
                                    <SelectTrigger className={`rounded-xl border-black/[0.08] bg-white h-12 text-[14px] font-medium shadow-sm focus:ring-2 focus:ring-[${COLORS.primary}]/50 focus:border-[${COLORS.primary}]`}>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent className="rounded-xl border-black/[0.05] shadow-lg">
                                        {GOAL_CATEGORIES.filter(c => c !== "All").map((c) => (
                                            <SelectItem key={c} value={c} className="text-[14px] font-medium py-2.5">{c}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <Label className="text-[14px] font-bold text-black/80">Priority</Label>
                                <Select value={form.priority} onValueChange={(v) => setForm({ ...form, priority: v as typeof form.priority })}>
                                    <SelectTrigger className={`rounded-xl border-black/[0.08] bg-white h-12 text-[14px] font-medium shadow-sm focus:ring-2 focus:ring-[${COLORS.primary}]/50 focus:border-[${COLORS.primary}]`}>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent className="rounded-xl border-black/[0.05] shadow-lg">
                                        {["High", "Medium", "Low"].map((p) => (
                                            <SelectItem key={p} value={p} className="text-[14px] font-medium py-2.5">{p}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label className="text-[14px] font-bold text-black/80">Deadline <span className="text-red-500">*</span></Label>
                            <Input
                                type="date"
                                value={form.deadline}
                                onChange={(e) => setForm({ ...form, deadline: e.target.value })}
                                className={`rounded-xl border-black/[0.08] bg-white h-12 text-[14px] font-medium shadow-sm focus-visible:ring-2 focus-visible:ring-[${COLORS.primary}]/50 focus-visible:border-[${COLORS.primary}]`}
                            />
                        </div>
                    </div>

                    <div className="px-6 sm:px-8 pb-8 pt-4 flex flex-col sm:flex-row gap-3 bg-black/[0.015]">
                        <Button
                            variant="outline"
                            onClick={() => setShowCreate(false)}
                            className="flex-1 h-12 rounded-xl border-black/[0.08] bg-white text-black/70 font-bold hover:bg-black/5 hover:text-black transition-colors"
                        >
                            Cancel
                        </Button>
                        <Button
                            onClick={handleCreate}
                            disabled={!form.title.trim() || !form.deadline || isSubmitting}
                            className={`flex-1 h-12 rounded-xl bg-black text-white hover:bg-black/80 font-bold rounded-xl flex items-center justify-center gap-2 shadow-md transition-all active:scale-95 disabled:opacity-50`}
                        >
                            {isSubmitting ? (
                                <span className="flex items-center gap-2">
                                    <div className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                                    Creating…
                                </span>
                            ) : (
                                <>Create Todo <ArrowRight className="h-4 w-4 ml-1" /></>
                            )}
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}
