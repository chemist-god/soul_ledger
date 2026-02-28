"use client"

import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage } from "@/components/ui/breadcrumb"
import { Input } from "@/components/ui/input"
import { Search, BookOpen, CreditCard, Receipt, Settings2, ShieldCheck, Zap, ArrowRight, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { toast } from "sonner"

const categories = [
    {
        title: "Getting Started",
        description: "Learn the basics of setting up your account, onboarding employees, and funding your first wallet.",
        icon: BookOpen,
        color: "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
    },
    {
        title: "Corporate Cards",
        description: "Everything you need to know about issuing, locking, or setting spend limits on physical and virtual cards.",
        icon: CreditCard,
        color: "bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400"
    },
    {
        title: "Reimbursements",
        description: "A guide to submitting expenses, creating approval workflows, and processing direct deposits.",
        icon: Receipt,
        color: "bg-orange-50 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400"
    },
    {
        title: "Account & Settings",
        description: "Managing your business profile, adjusting push notifications, and controlling 2FA security protocols.",
        icon: Settings2,
        color: "bg-purple-50 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400"
    },
    {
        title: "Compliance & KYB",
        description: "Uploading formation documents, answering beneficial ownership questions, and verifying your identity.",
        icon: ShieldCheck,
        color: "bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400"
    },
    {
        title: "Developer API",
        description: "Documentation for endpoints, webhooks, rate limits, and securing your Secret API Keys.",
        icon: Zap,
        color: "bg-[#BAFF4C]/20 text-green-800 dark:bg-[#BAFF4C]/10 dark:text-[#BAFF4C]"
    }
]

export default function DocsPage() {
    return (
        <div className="flex flex-col w-full min-h-screen bg-[#F3F4ED]">
            <header className="flex h-14 sm:h-16 shrink-0 items-center justify-between border-b border-black/5 px-4 sm:px-6 bg-[#F3F4ED] sticky top-0 z-20">
                <div className="flex items-center gap-2">
                    <SidebarTrigger className="-ml-2 text-black/70 hover:text-black hover:bg-black/5" />
                    <Separator orientation="vertical" className="mr-2 h-4 bg-black/10" />
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbPage className="text-black font-semibold text-[13px] sm:text-[14px]">Documentation Center</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </header>

            <main className="flex-1 p-4 sm:p-6 md:p-8 w-full max-w-7xl mx-auto space-y-8 sm:space-y-12">

                {/* Hero Section */}
                <div className="rounded-2xl sm:rounded-3xl border border-black shadow-lg bg-black text-white relative overflow-hidden py-10 px-5 sm:py-16 sm:px-12">
                    <div className="absolute top-[-50%] right-[-10%] w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-[#BAFF4C]/20 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none" />
                    <div className="absolute bottom-[-50%] left-[-10%] w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] bg-blue-500/20 rounded-full blur-[70px] sm:blur-[100px] pointer-events-none" />

                    <div className="relative z-10 max-w-3xl">
                        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-3 sm:mb-4">How can we help?</h1>
                        <p className="text-[14px] sm:text-[16px] lg:text-lg text-white/70 mb-6 sm:mb-8 max-w-xl leading-relaxed">
                            Search our comprehensive guides, API references, and tutorials to get the most out of your financial stack.
                        </p>

                        <div className="relative max-w-2xl group">
                            <Search className="absolute left-4 sm:left-5 top-1/2 -translate-y-1/2 h-5 w-5 sm:h-6 sm:w-6 text-black/40 group-focus-within:text-[#BAFF4C] transition-colors" />
                            <Input
                                placeholder="Search articles, endpoints..."
                                className="h-12 sm:h-16 pl-12 sm:pl-14 pr-4 sm:pr-6 rounded-xl sm:rounded-2xl bg-white text-black text-[14px] sm:text-[16px] border-none focus-visible:ring-4 focus-visible:ring-[#BAFF4C]/50 transition-all font-medium placeholder:text-black/40 shadow-xl"
                            />
                        </div>
                    </div>
                </div>

                {/* Categories Grid */}
                <div>
                    <div className="mb-5 sm:mb-6 flex items-center justify-between">
                        <h2 className="text-[20px] sm:text-2xl font-bold text-black tracking-tight">Browse Categories</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
                        {categories.map((category) => (
                            <Link key={category.title} href="#" className="group block h-full">
                                <div className="bg-white border border-black/5 rounded-2xl sm:rounded-3xl p-5 sm:p-7 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 h-full flex flex-col cursor-pointer hover:border-black/10">
                                    <div className={`h-10 w-10 sm:h-12 sm:w-12 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-sm ${category.color}`}>
                                        <category.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                                    </div>
                                    <h3 className="text-[16px] sm:text-[18px] font-bold text-black mb-2 flex items-center justify-between">
                                        {category.title}
                                        <ArrowRight className="h-4 w-4 text-black/20 group-hover:text-black/80 group-hover:translate-x-1 transition-all" />
                                    </h3>
                                    <p className="text-[13px] sm:text-[14px] text-black/60 leading-relaxed block flex-1">
                                        {category.description}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Popular Articles & FAQ */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
                    <div className="lg:col-span-2">
                        <h2 className="text-[20px] sm:text-2xl font-bold text-black tracking-tight mb-5 sm:mb-6">Frequently Asked Questions</h2>
                        <div className="bg-white border border-black/5 rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm">
                            <div className="divide-y divide-black/5 px-5 sm:px-8">
                                <details className="group py-4 sm:py-6 cursor-pointer">
                                    <summary className="font-semibold text-[15px] sm:text-[16px] outline-none list-none flex items-center justify-between text-black hover:text-[#BAFF4C] transition-colors">
                                        How long does KYB verification take?
                                        <span className="transition group-open:rotate-45 block text-2xl font-light leading-none text-black/40">+</span>
                                    </summary>
                                    <div className="pt-3 sm:pt-4 pb-1">
                                        <p className="text-[14px] sm:text-[15px] text-black/60 leading-relaxed">Most verifications are processed within 24 hours of document submission. If further information is required regarding corporate structure or directors, our compliance team will email you directly.</p>
                                    </div>
                                </details>
                                <details className="group py-4 sm:py-6 cursor-pointer">
                                    <summary className="font-semibold text-[15px] sm:text-[16px] outline-none list-none flex items-center justify-between text-black hover:text-[#BAFF4C] transition-colors">
                                        Can I issue cards with foreign addresses?
                                        <span className="transition group-open:rotate-45 block text-2xl font-light leading-none text-black/40">+</span>
                                    </summary>
                                    <div className="pt-3 sm:pt-4 pb-1">
                                        <p className="text-[14px] sm:text-[15px] text-black/60 leading-relaxed">Currently, physical cards can only be mailed to verified business or employee addresses within the United States. However, virtual cards can be issued instantly for remote or international employees.</p>
                                    </div>
                                </details>
                                <details className="group py-4 sm:py-6 cursor-pointer">
                                    <summary className="font-semibold text-[15px] sm:text-[16px] outline-none list-none flex items-center justify-between text-black hover:text-[#BAFF4C] transition-colors">
                                        What happens when my Wallet balance is low?
                                        <span className="transition group-open:rotate-45 block text-2xl font-light leading-none text-black/40">+</span>
                                    </summary>
                                    <div className="pt-3 sm:pt-4 pb-1">
                                        <p className="text-[14px] sm:text-[15px] text-black/60 leading-relaxed">If Auto-Reload is enabled, your connected Funding Source will automatically trigger an ACH transfer when your balance drops below your chosen threshold. Otherwise, cards will decline transactions until funds are added.</p>
                                    </div>
                                </details>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-1">
                        <div className="bg-[#BAFF4C]/10 border border-[#BAFF4C]/30 rounded-2xl sm:rounded-3xl p-5 sm:p-8">
                            <h3 className="text-[16px] sm:text-lg font-bold text-black mb-1.5 sm:mb-2">Still stranded?</h3>
                            <p className="text-[13px] sm:text-[14px] text-black/70 mb-5 sm:mb-6 leading-relaxed">Our enterprise support team is available 24/7. We typically respond in under 5 minutes.</p>
                            <button
                                onClick={() => toast("Support ticket created", {
                                    description: "Our team will reach out to ana@techflow.com shortly.",
                                    action: { label: "Undo", onClick: () => console.log("Undo") }
                                })}
                                className="w-full bg-black text-white hover:bg-black/80 font-semibold py-3 sm:py-3.5 rounded-xl shadow-sm transition-colors text-[13px] sm:text-[14px]"
                            >
                                Contact Support
                            </button>
                            <button
                                onClick={() => toast.success("All systems operational", {
                                    description: "API, Issuing, and Dashboard are running normally.",
                                    icon: <CheckCircle2 className="h-5 w-5 text-[#BAFF4C]" />
                                })}
                                className="w-full bg-transparent border border-black/10 text-black hover:bg-black/5 font-semibold py-3 sm:py-3.5 rounded-xl transition-colors text-[13px] sm:text-[14px] mt-2.5 sm:mt-3"
                            >
                                View System Status
                            </button>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    )
}
