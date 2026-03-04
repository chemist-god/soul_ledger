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
import { Badge } from "@/components/ui/badge"
import { toast } from "sonner"
import {
    Plus,
    CheckCircle2,
    XCircle,
    Clock,
    Coins,
    Trash2,
    ArrowRight,
    Search,
    ListTodo,
    AlarmClock,
    LayoutGrid,
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
    High: "bg-red-100 text-red-600",
    Medium: "bg-amber-100 text-amber-600",
    Low: "bg-emerald-100 text-emerald-700",
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
        <div className="flex flex-col w-full min-h-screen">
            {/* Header */}
            <header className={`flex h-16 shrink-0 items-center justify-between border-b border-black/5 px-4 sm:px-6 bg-[${COLORS.background}] sticky top-0 z-20`}>
                <div className="flex items-center gap-2">
                    <SidebarTrigger className="-ml-2 text-black/70 hover:text-black hover:bg-black/5" />
                    <Separator orientation="vertical" className="mr-2 h-4 bg-black/10" />
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <Link href={ROUTES.tasks} className="text-black/50 text-[13px] hover:text-black font-medium">My Tasks</Link>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage className="text-black font-semibold text-[14px]">Todos</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
                <Button
                    onClick={() => setShowCreate(true)}
                    className={`h-9 rounded-full bg-black text-white hover:bg-black/80 font-semibold flex items-center shadow-sm text-[13px] px-4`}
                >
                    <Plus className="mr-1.5 h-4 w-4" /> New Todo
                </Button>
            </header>

            <main className={`flex-1 p-4 sm:p-6 md:p-8 space-y-6 bg-[${COLORS.background}]`}>
                {/* Page title */}
                <div>
                    <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-black flex items-center gap-2">
                        <ListTodo className="h-7 w-7" /> Todos
                    </h1>
                    <p className="text-black/60 text-[14px] mt-1">Plan your commitments. Add a stake to back them with real money.</p>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-3 sm:gap-4">
                    {[
                        { label: "Active", value: todos.filter(t => t.status === "active").length, color: "text-amber-600", bg: "bg-amber-50" },
                        { label: "Completed", value: todos.filter(t => t.status === "completed").length, color: "text-emerald-600", bg: "bg-emerald-50" },
                        { label: "Failed", value: todos.filter(t => t.status === "failed").length, color: "text-red-600", bg: "bg-red-50" },
                    ].map((stat) => (
                        <div key={stat.label} className={`rounded-2xl p-4 sm:p-5 ${stat.bg} flex flex-col gap-1`}>
                            <span className={`text-2xl sm:text-3xl font-bold ${stat.color}`}>{stat.value}</span>
                            <span className="text-[13px] text-black/60 font-medium">{stat.label}</span>
                        </div>
                    ))}
                </div>

                {/* Search + Filter tabs */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                    <div className="relative flex-1 w-full">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-black/40" />
                        <Input
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search todos…"
                            className="pl-9 rounded-xl border-black/10 bg-white h-10 text-[14px] focus-visible:ring-1 focus-visible:ring-black/20 w-full"
                        />
                    </div>
                    <div className="flex items-center gap-1.5 bg-white border border-black/8 rounded-xl p-1 flex-shrink-0">
                        {STATUS_TABS.map((tab) => (
                            <button
                                key={tab.value}
                                onClick={() => setActiveTab(tab.value)}
                                className={`px-3 py-1.5 rounded-lg text-[13px] font-medium transition-all ${activeTab === tab.value
                                    ? `bg-[${COLORS.primary}] text-black shadow-sm`
                                    : "text-black/60 hover:text-black"
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Todo list */}
                {filtered.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-20 text-center">
                        <LayoutGrid className="h-10 w-10 text-black/20 mb-4" />
                        <p className="text-black/50 font-medium">No todos found</p>
                        <p className="text-black/40 text-[13px] mt-1">Create your first todo to get started</p>
                    </div>
                ) : (
                    <div className="space-y-3">
                        {filtered.map((todo) => {
                            const status = STATUS_CONFIG[todo.status]
                            return (
                                <div
                                    key={todo.id}
                                    className="group bg-white rounded-2xl border border-black/5 p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center gap-4 hover:shadow-md transition-shadow"
                                >
                                    {/* Left accent bar */}
                                    <div className={`w-full sm:w-1 sm:self-stretch h-1 sm:h-auto rounded-full ${todo.status === "active" ? `bg-[${COLORS.primary}]` : todo.status === "completed" ? "bg-emerald-400" : "bg-red-400"}`} />

                                    <div className="flex-1 min-w-0">
                                        <div className="flex flex-wrap items-center gap-2 mb-1">
                                            {status.icon}
                                            <span className="text-[15px] font-semibold text-black truncate">{todo.title}</span>
                                            <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${PRIORITY_COLORS[todo.priority]}`}>
                                                {todo.priority}
                                            </span>
                                            {todo.hasStake && (
                                                <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full bg-[${COLORS.primary}]/20 text-black/70`}>
                                                    🔒 Staked
                                                </span>
                                            )}
                                        </div>
                                        {todo.description && (
                                            <p className="text-[13px] text-black/55 mb-2 line-clamp-1">{todo.description}</p>
                                        )}
                                        <div className="flex flex-wrap items-center gap-3 text-[12px] text-black/50">
                                            <span className="flex items-center gap-1">
                                                <AlarmClock className="h-3.5 w-3.5" />
                                                {todo.deadline}
                                                {todo.status === "active" && todo.daysLeft > 0 && (
                                                    <span className={`ml-1 font-semibold ${todo.daysLeft <= 3 ? "text-red-500" : "text-black/60"}`}>
                                                        · {todo.daysLeft}d left
                                                    </span>
                                                )}
                                            </span>
                                            <Badge variant="outline" className="text-[11px] h-5 border-black/10 text-black/50 font-medium">{todo.category}</Badge>
                                        </div>
                                    </div>

                                    {/* Actions */}
                                    <div className="flex items-center gap-2 shrink-0">
                                        {todo.status === "active" && (
                                            <>
                                                {!todo.hasStake && (
                                                    <Link href={`${ROUTES.stakes}?todoId=${todo.id}&todoTitle=${encodeURIComponent(todo.title)}`}>
                                                        <Button
                                                            size="sm"
                                                            className={`h-8 rounded-xl bg-[${COLORS.primary}] text-black hover:bg-[${COLORS.primaryHover}] font-semibold text-[12px] px-3 flex items-center gap-1.5`}
                                                        >
                                                            <Coins className="h-3.5 w-3.5" /> Add Stake
                                                        </Button>
                                                    </Link>
                                                )}
                                                <Button
                                                    size="sm"
                                                    variant="outline"
                                                    onClick={() => handleComplete(todo.id)}
                                                    className="h-8 rounded-xl border-black/10 text-black/70 hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-200 font-semibold text-[12px] px-3 flex items-center gap-1.5"
                                                >
                                                    <CheckCircle2 className="h-3.5 w-3.5" /> Done
                                                </Button>
                                            </>
                                        )}
                                        <Button
                                            size="sm"
                                            variant="ghost"
                                            onClick={() => handleDelete(todo.id)}
                                            className="h-8 w-8 rounded-xl hover:bg-red-50 hover:text-red-500 text-black/30 p-0"
                                        >
                                            <Trash2 className="h-3.5 w-3.5" />
                                        </Button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                )}
            </main>

            {/* Create Todo Dialog */}
            <Dialog open={showCreate} onOpenChange={setShowCreate}>
                <DialogContent className="sm:max-w-lg rounded-3xl border-black/10 bg-white p-0 overflow-hidden">
                    <DialogHeader className={`px-6 pt-6 pb-4 border-b border-black/5 bg-[${COLORS.background}]`}>
                        <DialogTitle className="text-xl font-bold text-black flex items-center gap-2">
                            <ListTodo className="h-5 w-5" /> New Todo
                        </DialogTitle>
                        <DialogDescription className="text-black/55 text-[13px]">
                            Plan your commitment. You can add a stake to it afterwards.
                        </DialogDescription>
                    </DialogHeader>

                    <div className="px-6 py-5 space-y-4">
                        <div className="space-y-1.5">
                            <Label className="text-[13px] font-semibold text-black/70">Title <span className="text-red-500">*</span></Label>
                            <Input
                                value={form.title}
                                onChange={(e) => setForm({ ...form, title: e.target.value })}
                                placeholder="e.g. Read Rich Dad Poor Dad"
                                className="rounded-xl border-black/10 h-11 text-[14px] focus-visible:ring-1 focus-visible:ring-black/20"
                            />
                        </div>

                        <div className="space-y-1.5">
                            <Label className="text-[13px] font-semibold text-black/70">Description</Label>
                            <Textarea
                                value={form.description}
                                onChange={(e) => setForm({ ...form, description: e.target.value })}
                                placeholder="Add more context about this commitment…"
                                className="rounded-xl border-black/10 text-[14px] focus-visible:ring-1 focus-visible:ring-black/20 resize-none min-h-[90px]"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            <div className="space-y-1.5">
                                <Label className="text-[13px] font-semibold text-black/70">Category</Label>
                                <Select value={form.category} onValueChange={(v) => setForm({ ...form, category: v })}>
                                    <SelectTrigger className="rounded-xl border-black/10 h-10 text-[13px]">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent className="rounded-xl">
                                        {GOAL_CATEGORIES.filter(c => c !== "All").map((c) => (
                                            <SelectItem key={c} value={c} className="text-[13px]">{c}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-1.5">
                                <Label className="text-[13px] font-semibold text-black/70">Priority</Label>
                                <Select value={form.priority} onValueChange={(v) => setForm({ ...form, priority: v as typeof form.priority })}>
                                    <SelectTrigger className="rounded-xl border-black/10 h-10 text-[13px]">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent className="rounded-xl">
                                        {["High", "Medium", "Low"].map((p) => (
                                            <SelectItem key={p} value={p} className="text-[13px]">{p}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <Label className="text-[13px] font-semibold text-black/70">Deadline <span className="text-red-500">*</span></Label>
                            <Input
                                type="date"
                                value={form.deadline}
                                onChange={(e) => setForm({ ...form, deadline: e.target.value })}
                                className="rounded-xl border-black/10 h-10 text-[13px] focus-visible:ring-1 focus-visible:ring-black/20"
                            />
                        </div>
                    </div>

                    <div className={`px-6 pb-6 pt-2 flex flex-col sm:flex-row gap-2 border-t border-black/5 bg-[${COLORS.background}]`}>
                        <Button
                            variant="outline"
                            onClick={() => setShowCreate(false)}
                            className="flex-1 h-11 rounded-xl border-black/10 text-black/70 font-semibold"
                        >
                            Cancel
                        </Button>
                        <Button
                            onClick={handleCreate}
                            disabled={!form.title.trim() || !form.deadline || isSubmitting}
                            className={`flex-1 h-11 rounded-xl bg-black text-white hover:bg-black/80 font-semibold flex items-center justify-center gap-2`}
                        >
                            {isSubmitting ? (
                                <span className="flex items-center gap-2">
                                    <div className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                                    Creating…
                                </span>
                            ) : (
                                <>Create Todo <ArrowRight className="h-4 w-4" /></>
                            )}
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}
