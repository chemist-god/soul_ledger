"use client"

import React, { useState, Suspense } from "react"
import { useSearchParams } from "next/navigation"
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
    Lock,
    Globe,
    EyeOff,
    Search,
    Coins,
    ArrowRight,
    Users,
    AlarmClock,
    Link2,
    LayoutGrid,
    TrendingUp,
} from "lucide-react"
import {
    COLORS,
    GOAL_CATEGORIES,
    MOCK_STAKES,
    MOCK_TODOS,
    ROUTES,
    TOAST,
    MockStake,
    StakeOutcome,
} from "@/lib/gen-variable"
import Link from "next/link"

const STATUS_TABS: { label: string; value: "all" | StakeOutcome }[] = [
    { label: "All", value: "all" },
    { label: "Active", value: "active" },
    { label: "Returned", value: "returned" },
    { label: "Forfeited", value: "forfeited" },
]

const OUTCOME_CONFIG: Record<StakeOutcome, { icon: React.ReactNode; pill: string; label: string }> = {
    active: { icon: <TrendingUp className="h-4 w-4 text-amber-500" />, pill: "bg-amber-100 text-amber-700", label: "Active" },
    returned: { icon: <CheckCircle2 className="h-4 w-4 text-emerald-500" />, pill: "bg-emerald-100 text-emerald-700", label: "Returned ✅" },
    forfeited: { icon: <XCircle className="h-4 w-4 text-red-500" />, pill: "bg-red-100 text-red-600", label: "Forfeited ❌" },
}

const emptyForm = {
    title: "",
    description: "",
    amount: "",
    category: "Learning",
    deadline: "",
    visibility: "public" as "public" | "private",
    linkMode: "existing" as "existing" | "scratch",
    linkedTodoId: "",
}

function StakesPageContent() {
    const searchParams = useSearchParams()
    const prefilledTodoId = searchParams.get("todoId") ?? ""
    const prefilledTodoTitle = searchParams.get("todoTitle") ?? ""

    const [stakes, setStakes] = useState<MockStake[]>(MOCK_STAKES)
    const [activeTab, setActiveTab] = useState<"all" | StakeOutcome>("all")
    const [search, setSearch] = useState("")
    const [showCreate, setShowCreate] = useState(() => !!prefilledTodoId)
    const [form, setForm] = useState({
        ...emptyForm,
        linkedTodoId: prefilledTodoId,
        linkMode: prefilledTodoId ? "existing" as const : "scratch" as const,
    })
    const [isSubmitting, setIsSubmitting] = useState(false)

    const filteredStakes = stakes.filter((s) => {
        const matchTab = activeTab === "all" || s.status === activeTab
        const matchSearch = s.title.toLowerCase().includes(search.toLowerCase())
        return matchTab && matchSearch
    })

    const selectedTodo = MOCK_TODOS.find(t => t.id === form.linkedTodoId)

    const totalStaked = stakes.filter(s => s.status === "active").reduce((a, s) => a + s.amount, 0)
    const totalReturned = stakes.filter(s => s.status === "returned").reduce((a, s) => a + s.amount, 0)
    const totalForfeited = stakes.filter(s => s.status === "forfeited").reduce((a, s) => a + s.amount, 0)

    const handleCreate = async () => {
        const title = form.linkMode === "existing" && selectedTodo
            ? selectedTodo.title
            : form.title.trim()
        if (!title || !form.amount || !form.deadline) return
        setIsSubmitting(true)
        await new Promise((r) => setTimeout(r, 700))

        const newStake: MockStake = {
            id: `stake-${Date.now()}`,
            title,
            description: form.description.trim(),
            amount: parseFloat(form.amount),
            currency: "USD",
            linkedTodoId: form.linkMode === "existing" ? form.linkedTodoId : undefined,
            linkedTodoTitle: form.linkMode === "existing" ? selectedTodo?.title : undefined,
            deadline: new Date(form.deadline).toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" }),
            daysLeft: Math.max(0, Math.ceil((new Date(form.deadline).getTime() - Date.now()) / 86400000)),
            status: "active",
            visibility: form.visibility,
            backers: 0,
            category: form.category,
            createdAt: new Date().toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" }),
        }

        setStakes((prev) => [newStake, ...prev])
        setIsSubmitting(false)
        setShowCreate(false)
        setForm(emptyForm)
        toast.success(TOAST.stakeCreated.title, { description: TOAST.stakeCreated.description })
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
                                <BreadcrumbPage className="text-black font-semibold text-[14px]">Stakes</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
                <Button
                    onClick={() => setShowCreate(true)}
                    className={`h-9 rounded-full bg-black text-white hover:bg-black/80 font-semibold flex items-center shadow-sm text-[13px] px-4`}
                >
                    <Plus className="mr-1.5 h-4 w-4" /> New Stake
                </Button>
            </header>

            <main className={`flex-1 p-4 sm:p-6 md:p-8 space-y-6 bg-[${COLORS.background}]`}>
                {/* Page title */}
                <div>
                    <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-black flex items-center gap-2">
                        <Coins className="h-7 w-7" /> Stakes
                    </h1>
                    <p className="text-black/60 text-[14px] mt-1">Put your money where your mouth is. Link to a todo or create a standalone stake.</p>
                </div>

                {/* Financial summary */}
                <div className="grid grid-cols-3 gap-3 sm:gap-4">
                    <div className={`rounded-2xl p-4 sm:p-5 bg-black text-white flex flex-col gap-1 relative overflow-hidden`}>
                        <div className={`absolute top-0 right-0 w-20 h-20 bg-[${COLORS.primary}]/20 rounded-full blur-2xl`} />
                        <span className="text-xl sm:text-2xl font-bold">${totalStaked}</span>
                        <span className="text-[12px] text-white/60 font-medium">Locked In</span>
                    </div>
                    <div className="rounded-2xl p-4 sm:p-5 bg-emerald-50 flex flex-col gap-1">
                        <span className="text-xl sm:text-2xl font-bold text-emerald-600">${totalReturned}</span>
                        <span className="text-[12px] text-emerald-600/70 font-medium">Returned</span>
                    </div>
                    <div className="rounded-2xl p-4 sm:p-5 bg-red-50 flex flex-col gap-1">
                        <span className="text-xl sm:text-2xl font-bold text-red-500">${totalForfeited}</span>
                        <span className="text-[12px] text-red-500/70 font-medium">Forfeited</span>
                    </div>
                </div>

                {/* Search + filters */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                    <div className="relative flex-1 w-full">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-black/40" />
                        <Input
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search stakes…"
                            className="pl-9 rounded-xl border-black/10 bg-white h-10 text-[14px] focus-visible:ring-1 focus-visible:ring-black/20 w-full"
                        />
                    </div>
                    <div className="flex items-center gap-1.5 bg-white border border-black/8 rounded-xl p-1 flex-shrink-0">
                        {STATUS_TABS.map((tab) => (
                            <button
                                key={tab.value}
                                onClick={() => setActiveTab(tab.value)}
                                className={`px-3 py-1.5 rounded-lg text-[12px] sm:text-[13px] font-medium transition-all ${activeTab === tab.value
                                    ? `bg-[${COLORS.primary}] text-black shadow-sm`
                                    : "text-black/60 hover:text-black"
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Stakes list */}
                {filteredStakes.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-20 text-center">
                        <LayoutGrid className="h-10 w-10 text-black/20 mb-4" />
                        <p className="text-black/50 font-medium">No stakes found</p>
                        <p className="text-black/40 text-[13px] mt-1">Create your first stake to lock in your commitment</p>
                    </div>
                ) : (
                    <div className="space-y-3">
                        {filteredStakes.map((stake) => {
                            const outcome = OUTCOME_CONFIG[stake.status]
                            return (
                                <div
                                    key={stake.id}
                                    className="group bg-white rounded-2xl border border-black/5 p-4 sm:p-5 hover:shadow-md transition-shadow"
                                >
                                    <div className="flex flex-col sm:flex-row sm:items-start gap-3">
                                        {/* Amount bubble */}
                                        <div className={`flex-shrink-0 h-14 w-14 rounded-2xl flex items-center justify-center font-bold text-[15px] ${stake.status === "active"
                                            ? `bg-[${COLORS.primary}] text-black`
                                            : stake.status === "returned"
                                                ? "bg-emerald-100 text-emerald-700"
                                                : "bg-red-100 text-red-600"
                                            }`}>
                                            ${stake.amount}
                                        </div>

                                        <div className="flex-1 min-w-0">
                                            <div className="flex flex-wrap items-center gap-2 mb-1">
                                                {outcome.icon}
                                                <span className="text-[15px] font-semibold text-black">{stake.title}</span>
                                                <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${outcome.pill}`}>
                                                    {outcome.label}
                                                </span>
                                                <span className="flex items-center gap-1 text-[11px] text-black/40">
                                                    {stake.visibility === "public"
                                                        ? <Globe className="h-3 w-3" />
                                                        : <EyeOff className="h-3 w-3" />}
                                                    {stake.visibility}
                                                </span>
                                            </div>

                                            {stake.description && (
                                                <p className="text-[13px] text-black/55 mb-2 line-clamp-1">{stake.description}</p>
                                            )}

                                            <div className="flex flex-wrap items-center gap-3 text-[12px] text-black/50">
                                                {stake.linkedTodoTitle && (
                                                    <span className="flex items-center gap-1">
                                                        <Link2 className="h-3.5 w-3.5" /> {stake.linkedTodoTitle}
                                                    </span>
                                                )}
                                                <span className="flex items-center gap-1">
                                                    <AlarmClock className="h-3.5 w-3.5" /> {stake.deadline}
                                                    {stake.status === "active" && stake.daysLeft > 0 && (
                                                        <span className={`ml-1 font-semibold ${stake.daysLeft <= 3 ? "text-red-500" : "text-black/60"}`}>
                                                            · {stake.daysLeft}d left
                                                        </span>
                                                    )}
                                                </span>
                                                {stake.visibility === "public" && (
                                                    <span className="flex items-center gap-1">
                                                        <Users className="h-3.5 w-3.5" /> {stake.backers} {stake.backers === 1 ? "backer" : "backers"}
                                                    </span>
                                                )}
                                                <Badge variant="outline" className="text-[11px] h-5 border-black/10 text-black/50 font-medium">{stake.category}</Badge>
                                            </div>
                                        </div>

                                        {/* Lock icon for active */}
                                        {stake.status === "active" && (
                                            <div className="flex-shrink-0">
                                                <div className="h-9 w-9 rounded-xl bg-black/5 flex items-center justify-center">
                                                    <Lock className="h-4 w-4 text-black/50" />
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                )}
            </main>

            {/* Create Stake Dialog */}
            <Dialog open={showCreate} onOpenChange={setShowCreate}>
                <DialogContent className="sm:max-w-lg rounded-3xl border-black/10 bg-white p-0 overflow-hidden">
                    <DialogHeader className={`px-6 pt-6 pb-4 border-b border-black/5 bg-[${COLORS.background}]`}>
                        <DialogTitle className="text-xl font-bold text-black flex items-center gap-2">
                            <Coins className="h-5 w-5" /> New Stake
                        </DialogTitle>
                        <DialogDescription className="text-black/55 text-[13px]">
                            Back your commitment with real money. No excuses.
                        </DialogDescription>
                    </DialogHeader>

                    <div className="px-6 py-5 space-y-4 max-h-[65vh] overflow-y-auto">
                        {/* Link mode toggle */}
                        <div className="space-y-2">
                            <Label className="text-[13px] font-semibold text-black/70">Link to</Label>
                            <div className="flex gap-2">
                                {[
                                    { label: "Existing Todo", value: "existing" as const },
                                    { label: "Create from Scratch", value: "scratch" as const },
                                ].map((opt) => (
                                    <button
                                        key={opt.value}
                                        onClick={() => setForm({ ...form, linkMode: opt.value, linkedTodoId: opt.value === "existing" ? prefilledTodoId : "" })}
                                        className={`flex-1 py-2 rounded-xl text-[13px] font-semibold transition-all border ${form.linkMode === opt.value
                                            ? `bg-black text-white border-black`
                                            : "bg-white text-black/60 border-black/10 hover:border-black/30"
                                            }`}
                                    >
                                        {opt.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Existing todo selector */}
                        {form.linkMode === "existing" ? (
                            <div className="space-y-1.5">
                                <Label className="text-[13px] font-semibold text-black/70">Select Todo <span className="text-red-500">*</span></Label>
                                <Select value={form.linkedTodoId} onValueChange={(v) => setForm({ ...form, linkedTodoId: v })}>
                                    <SelectTrigger className="rounded-xl border-black/10 h-11 text-[13px]">
                                        <SelectValue placeholder="Pick a todo to stake on…" />
                                    </SelectTrigger>
                                    <SelectContent className="rounded-xl">
                                        {MOCK_TODOS.filter(t => t.status === "active").map((t) => (
                                            <SelectItem key={t.id} value={t.id} className="text-[13px]">
                                                {t.title}
                                                {t.hasStake && <span className="ml-2 text-black/40">(already staked)</span>}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                {selectedTodo && (
                                    <div className="p-3 rounded-xl bg-black/4 border border-black/6 text-[12px] text-black/60">
                                        📌 {selectedTodo.description || "No description"} · Due: {selectedTodo.deadline}
                                    </div>
                                )}
                            </div>
                        ) : (
                            <>
                                <div className="space-y-1.5">
                                    <Label className="text-[13px] font-semibold text-black/70">Title <span className="text-red-500">*</span></Label>
                                    <Input
                                        value={form.title}
                                        onChange={(e) => setForm({ ...form, title: e.target.value })}
                                        placeholder="e.g. Run 5km every day for 30 days"
                                        className="rounded-xl border-black/10 h-11 text-[14px] focus-visible:ring-1 focus-visible:ring-black/20"
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <Label className="text-[13px] font-semibold text-black/70">Description</Label>
                                    <Textarea
                                        value={form.description}
                                        onChange={(e) => setForm({ ...form, description: e.target.value })}
                                        placeholder="What are you committing to?"
                                        className="rounded-xl border-black/10 text-[14px] focus-visible:ring-1 focus-visible:ring-black/20 resize-none min-h-[80px]"
                                    />
                                </div>
                            </>
                        )}

                        {/* Amount */}
                        <div className="space-y-1.5">
                            <Label className="text-[13px] font-semibold text-black/70">Stake Amount (USD) <span className="text-red-500">*</span></Label>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-black/50 font-semibold text-[15px]">$</span>
                                <Input
                                    type="number"
                                    min="1"
                                    value={form.amount}
                                    onChange={(e) => setForm({ ...form, amount: e.target.value })}
                                    placeholder="50"
                                    className="pl-7 rounded-xl border-black/10 h-11 text-[14px] focus-visible:ring-1 focus-visible:ring-black/20"
                                />
                            </div>
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
                                <Label className="text-[13px] font-semibold text-black/70">Deadline <span className="text-red-500">*</span></Label>
                                <Input
                                    type="date"
                                    value={form.deadline}
                                    onChange={(e) => setForm({ ...form, deadline: e.target.value })}
                                    className="rounded-xl border-black/10 h-10 text-[13px] focus-visible:ring-1 focus-visible:ring-black/20"
                                />
                            </div>
                        </div>

                        {/* Visibility */}
                        <div className="space-y-1.5">
                            <Label className="text-[13px] font-semibold text-black/70">Visibility</Label>
                            <div className="flex gap-2">
                                {[
                                    { label: "🌍 Public", value: "public" as const, desc: "Community can see & stake on you" },
                                    { label: "🔒 Private", value: "private" as const, desc: "Only visible to you" },
                                ].map((opt) => (
                                    <button
                                        key={opt.value}
                                        onClick={() => setForm({ ...form, visibility: opt.value })}
                                        className={`flex-1 px-3 py-2.5 rounded-xl text-[12px] font-semibold transition-all border text-left ${form.visibility === opt.value
                                            ? `border-[${COLORS.primary}] bg-[${COLORS.primary}]/10 text-black`
                                            : "border-black/10 text-black/50 hover:border-black/30"
                                            }`}
                                    >
                                        <div>{opt.label}</div>
                                        <div className="text-[11px] font-normal opacity-70 mt-0.5">{opt.desc}</div>
                                    </button>
                                ))}
                            </div>
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
                            disabled={
                                isSubmitting ||
                                !form.deadline ||
                                !form.amount ||
                                (form.linkMode === "existing" ? !form.linkedTodoId : !form.title.trim())
                            }
                            className={`flex-1 h-11 rounded-xl bg-[${COLORS.primary}] text-black hover:bg-[${COLORS.primaryHover}] font-bold flex items-center justify-center gap-2`}
                        >
                            {isSubmitting ? (
                                <span className="flex items-center gap-2">
                                    <div className="h-4 w-4 rounded-full border-2 border-black/30 border-t-black animate-spin" />
                                    Locking in…
                                </span>
                            ) : (
                                <>Lock In Stake 🔒 <ArrowRight className="h-4 w-4" /></>
                            )}
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default function StakesPage() {
    return (
        <Suspense fallback={<div className="flex items-center justify-center h-screen text-black/50">Loading stakes…</div>}>
            <StakesPageContent />
        </Suspense>
    )
}
