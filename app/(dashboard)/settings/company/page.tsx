"use client"

import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage } from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Building2, Save, Upload, CreditCard, ShieldCheck, Download, Plus, Receipt, CheckCircle2 } from "lucide-react"
import { toast } from "sonner"

export default function CompanyProfilePage() {
    return (
        <div className="flex flex-col w-full min-h-screen">
            <header className="flex h-16 shrink-0 items-center justify-between border-b border-black/5 px-4 sm:px-6 bg-[#F3F4ED] sticky top-0 z-20">
                <div className="flex items-center gap-2">
                    <SidebarTrigger className="-ml-2 text-black/70 hover:text-black hover:bg-black/5" />
                    <Separator orientation="vertical" className="mr-2 h-4 bg-black/10" />
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbPage className="text-black font-semibold text-[14px]">Company Profile</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                    <Button
                        onClick={() => toast.success("Changes Saved", {
                            description: "Company profile details have been successfully updated.",
                            icon: <CheckCircle2 className="h-5 w-5 text-[#BAFF4C]" />
                        })}
                        className="h-9 rounded-full bg-[#BAFF4C] text-black hover:bg-[#a3e63d] font-semibold flex items-center shadow-sm text-[13px] px-4"
                    >
                        <Save className="mr-2 h-4 w-4" /> Save Changes
                    </Button>
                </div>
            </header>

            <main className="flex-1 p-4 sm:p-6 md:p-8 bg-[#F3F4ED]">
                <div className="max-w-4xl mx-auto space-y-8">
                    <div>
                        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-black">Company Profile</h1>
                        <p className="text-black/60 text-[14px] sm:text-[15px] mt-1">Manage your organization's business details and branding.</p>
                    </div>

                    <Tabs defaultValue="general" className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {/* Left column: Nav/context */}
                        <div className="md:col-span-1 space-y-1">
                            <TabsList className="flex flex-col h-auto bg-transparent items-start w-full space-y-1 p-0">
                                <TabsTrigger
                                    value="general"
                                    className="w-full justify-start text-[14px] font-medium px-4 py-2.5 rounded-xl data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-sm data-[state=active]:border data-[state=active]:border-black/5 border border-transparent text-black/60 hover:text-black hover:bg-black/5"
                                >
                                    General Info
                                </TabsTrigger>
                                <TabsTrigger
                                    value="billing"
                                    className="w-full justify-start text-[14px] font-medium px-4 py-2.5 rounded-xl data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-sm data-[state=active]:border data-[state=active]:border-black/5 border border-transparent text-black/60 hover:text-black hover:bg-black/5"
                                >
                                    Billing Details
                                </TabsTrigger>
                                <TabsTrigger
                                    value="compliance"
                                    className="w-full justify-start text-[14px] font-medium px-4 py-2.5 rounded-xl data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-sm data-[state=active]:border data-[state=active]:border-black/5 border border-transparent text-black/60 hover:text-black hover:bg-black/5"
                                >
                                    Compliance
                                </TabsTrigger>
                            </TabsList>
                        </div>

                        {/* Right column: Form fields */}
                        <div className="md:col-span-3 space-y-6">

                            <TabsContent value="general" className="m-0 space-y-6">
                                <Card className="rounded-3xl border-black/5 shadow-sm bg-white overflow-hidden">
                                    <CardHeader className="border-b border-black/5 bg-black/[0.02] px-6 py-5">
                                        <CardTitle className="text-lg">Business Details</CardTitle>
                                        <CardDescription>This information will appear on receipts and invoices.</CardDescription>
                                    </CardHeader>
                                    <CardContent className="p-6 space-y-6">
                                        {/* Logo Upload Placeholder */}
                                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                                            <div className="h-20 w-20 rounded-2xl bg-black/5 flex items-center justify-center border border-black/10 overflow-hidden relative group cursor-pointer shrink-0">
                                                <Building2 className="h-8 w-8 text-black/30 group-hover:opacity-0 transition-opacity" />
                                                <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <Upload className="h-5 w-5 text-white mb-1" />
                                                    <span className="text-[10px] text-white font-semibold uppercase tracking-wider">Upload</span>
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <h4 className="text-[14px] font-semibold text-black">Company Logo</h4>
                                                <p className="text-[13px] text-black/50 mb-2">Recommended size: 400x400px. Max 2MB.</p>
                                                <div className="flex gap-2">
                                                    <Button
                                                        variant="outline"
                                                        size="sm"
                                                        onClick={() => toast("Upload Started", { description: "Processing your new company logo..." })}
                                                        className="h-8 text-xs font-semibold rounded-lg"
                                                    >
                                                        Upload New
                                                    </Button>
                                                    <Button
                                                        variant="ghost"
                                                        size="sm"
                                                        onClick={() => toast("Logo Removed", { description: "Reverted to the default company initials." })}
                                                        className="h-8 text-xs font-semibold text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg"
                                                    >
                                                        Remove
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid gap-2">
                                            <Label htmlFor="companyName" className="text-black/80 font-semibold text-[13px]">Company Name</Label>
                                            <Input id="companyName" defaultValue="TechFlow Inc." className="rounded-xl border-black/10 h-11 px-4 focus-visible:ring-[#BAFF4C] focus-visible:border-[#BAFF4C] transition-colors" />
                                        </div>

                                        <div className="grid gap-2">
                                            <Label htmlFor="taxId" className="text-black/80 font-semibold text-[13px]">Tax ID (EIN/VAT)</Label>
                                            <Input id="taxId" defaultValue="XX-XXXXXXX" className="rounded-xl border-black/10 h-11 px-4 focus-visible:ring-[#BAFF4C] focus-visible:border-[#BAFF4C] transition-colors font-mono" />
                                        </div>

                                        <div className="grid gap-2">
                                            <Label htmlFor="website" className="text-black/80 font-semibold text-[13px]">Website URL</Label>
                                            <Input id="website" defaultValue="https://techflow.com" className="rounded-xl border-black/10 h-11 px-4 focus-visible:ring-[#BAFF4C] focus-visible:border-[#BAFF4C] transition-colors text-black/70" />
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="rounded-3xl border-black/5 shadow-sm bg-white overflow-hidden">
                                    <CardHeader className="border-b border-black/5 bg-black/[0.02] px-6 py-5">
                                        <CardTitle className="text-lg">Registered Address</CardTitle>
                                        <CardDescription>The primary physical location of your business.</CardDescription>
                                    </CardHeader>
                                    <CardContent className="p-6 space-y-6">
                                        <div className="grid gap-2">
                                            <Label htmlFor="address1" className="text-black/80 font-semibold text-[13px]">Address Line 1</Label>
                                            <Input id="address1" defaultValue="1200 Market Street" className="rounded-xl border-black/10 h-11 px-4 focus-visible:ring-[#BAFF4C] focus-visible:border-[#BAFF4C] transition-colors" />
                                        </div>
                                        <div className="grid gap-2">
                                            <Label htmlFor="address2" className="text-black/80 font-semibold text-[13px]">Address Line 2 (Optional)</Label>
                                            <Input id="address2" defaultValue="Suite 400" className="rounded-xl border-black/10 h-11 px-4 focus-visible:ring-[#BAFF4C] focus-visible:border-[#BAFF4C] transition-colors" />
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="grid gap-2">
                                                <Label htmlFor="city" className="text-black/80 font-semibold text-[13px]">City</Label>
                                                <Input id="city" defaultValue="San Francisco" className="rounded-xl border-black/10 h-11 px-4 focus-visible:ring-[#BAFF4C] transition-colors" />
                                            </div>
                                            <div className="grid gap-2">
                                                <Label htmlFor="state" className="text-black/80 font-semibold text-[13px]">State/Province</Label>
                                                <Input id="state" defaultValue="CA" className="rounded-xl border-black/10 h-11 px-4 focus-visible:ring-[#BAFF4C] transition-colors" />
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="grid gap-2">
                                                <Label htmlFor="zip" className="text-black/80 font-semibold text-[13px]">ZIP/Postal Code</Label>
                                                <Input id="zip" defaultValue="94102" className="rounded-xl border-black/10 h-11 px-4 focus-visible:ring-[#BAFF4C] transition-colors" />
                                            </div>
                                            <div className="grid gap-2">
                                                <Label htmlFor="country" className="text-black/80 font-semibold text-[13px]">Country</Label>
                                                <Input id="country" defaultValue="United States" className="rounded-xl border-black/10 h-11 px-4 focus-visible:ring-[#BAFF4C] transition-colors" />
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>

                            <TabsContent value="billing" className="m-0 space-y-6">
                                <Card className="rounded-3xl border-black/5 shadow-sm bg-white overflow-hidden">
                                    <CardHeader className="border-b border-black/5 bg-black/[0.02] px-6 py-5">
                                        <CardTitle className="text-lg">Payment Methods</CardTitle>
                                        <CardDescription>Manage cards used to pay your platform subscription.</CardDescription>
                                    </CardHeader>
                                    <CardContent className="p-6">
                                        <div className="p-4 rounded-xl border border-[#BAFF4C]/30 bg-[#BAFF4C]/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 relative overflow-hidden">
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#BAFF4C]/20 rounded-full blur-3xl pointer-events-none" />
                                            <div className="flex items-center gap-4 relative z-10">
                                                <div className="h-12 w-16 rounded-lg bg-black text-white flex items-center justify-center font-bold italic tracking-tighter text-lg shadow-sm">
                                                    VISA
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-[14px] font-bold text-black flex items-center gap-2">
                                                        •••• 8832 <span className="bg-[#BAFF4C]/20 text-green-800 text-[10px] uppercase font-bold px-2 py-0.5 rounded-full">Primary</span>
                                                    </span>
                                                    <span className="text-[13px] text-black/60">Expires 12/28</span>
                                                </div>
                                            </div>
                                            <Button variant="outline" size="sm" className="hidden sm:flex rounded-full text-xs font-semibold h-8 border-black/10 hover:bg-black/5 z-10 relative">
                                                Edit
                                            </Button>
                                        </div>

                                        <Button
                                            variant="outline"
                                            onClick={() => toast("Feature Restricted", { description: "Please contact support to add additional payment methods." })}
                                            className="w-full rounded-xl border-dashed border-black/20 text-black/60 hover:text-black hover:bg-black/5 hover:border-black/30 bg-transparent h-12 font-semibold"
                                        >
                                            <Plus className="mr-2 h-4 w-4" /> Add Payment Method
                                        </Button>
                                    </CardContent>
                                </Card>

                                <Card className="rounded-3xl border-black/5 shadow-sm bg-white overflow-hidden">
                                    <CardHeader className="border-b border-black/5 bg-black/[0.02] px-6 py-5">
                                        <CardTitle className="text-lg">Billing History</CardTitle>
                                        <CardDescription>View and download previous invoices.</CardDescription>
                                    </CardHeader>
                                    <CardContent className="p-0">
                                        <div className="divide-y divide-black/5">
                                            {[
                                                { date: "Feb 01, 2026", amount: "$299.00", status: "Paid", inv: "INV-2026-002" },
                                                { date: "Jan 01, 2026", amount: "$299.00", status: "Paid", inv: "INV-2026-001" },
                                                { date: "Dec 01, 2025", amount: "$299.00", status: "Paid", inv: "INV-2025-012" },
                                            ].map((inv, i) => (
                                                <div key={i} className="flex items-center justify-between p-4 sm:p-6 hover:bg-black/[0.02] transition-colors">
                                                    <div className="flex items-center gap-4">
                                                        <div className="h-10 w-10 rounded-full bg-black/5 flex items-center justify-center text-black/50 shrink-0">
                                                            <Receipt className="h-4 w-4" />
                                                        </div>
                                                        <div className="flex flex-col">
                                                            <span className="text-[14px] font-semibold text-black">{inv.date}</span>
                                                            <span className="text-[12px] text-black/50 font-mono">{inv.inv}</span>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-4">
                                                        <span className="text-[14px] font-bold text-black hidden sm:inline-block">{inv.amount}</span>
                                                        <Button
                                                            variant="ghost"
                                                            size="icon"
                                                            onClick={() => toast("Downloading Invoice", { description: `${inv.inv} is being saved to your device.` })}
                                                            className="h-8 w-8 text-black/50 hover:text-black"
                                                        >
                                                            <Download className="h-4 w-4" />
                                                        </Button>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>

                            <TabsContent value="compliance" className="m-0 space-y-6">
                                <Card className="rounded-3xl border-black/5 shadow-sm bg-white overflow-hidden">
                                    <CardHeader className="border-b border-black/5 bg-black/[0.02] px-6 py-5 flex flex-row items-center justify-between">
                                        <div>
                                            <CardTitle className="text-lg flex items-center gap-2">
                                                KYB Verification <ShieldCheck className="h-5 w-5 text-green-600" />
                                            </CardTitle>
                                            <CardDescription>Know Your Business regulatory requirements.</CardDescription>
                                        </div>
                                        <div className="bg-green-100 text-green-800 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full hidden sm:block">
                                            Verified
                                        </div>
                                    </CardHeader>
                                    <CardContent className="p-6">
                                        <div className="space-y-4">
                                            <p className="text-[14px] text-black/70 leading-relaxed max-w-2xl">
                                                Your business identity has been fully verified. No further action is required at this time. We will notify you if any annual compliance documents need to be uploaded.
                                            </p>

                                            <div className="bg-black/5 border border-black/5 rounded-2xl p-4 flex items-center justify-between">
                                                <div className="flex items-center gap-3">
                                                    <div className="h-10 w-10 bg-white rounded-xl shadow-sm border border-black/5 flex items-center justify-center">
                                                        <ShieldCheck className="h-5 w-5 text-black/40" />
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <span className="text-[13px] font-semibold text-black">Articles of Incorporation</span>
                                                        <span className="text-[12px] text-black/50">Uploaded Oct 12, 2025</span>
                                                    </div>
                                                </div>
                                                <Button
                                                    variant="ghost"
                                                    onClick={() => toast("Opening Document", { description: "Decrypting KYB payload..." })}
                                                    className="text-[13px] font-medium text-black"
                                                >
                                                    View
                                                </Button>
                                            </div>

                                            <div className="bg-black/5 border border-black/5 rounded-2xl p-4 flex items-center justify-between">
                                                <div className="flex items-center gap-3">
                                                    <div className="h-10 w-10 bg-white rounded-xl shadow-sm border border-black/5 flex items-center justify-center">
                                                        <ShieldCheck className="h-5 w-5 text-black/40" />
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <span className="text-[13px] font-semibold text-black">Beneficial Ownership (BOI)</span>
                                                        <span className="text-[12px] text-black/50">Uploaded Oct 12, 2025</span>
                                                    </div>
                                                </div>
                                                <Button
                                                    variant="ghost"
                                                    onClick={() => toast("Opening Document", { description: "Decrypting KYB payload..." })}
                                                    className="text-[13px] font-medium text-black"
                                                >
                                                    View
                                                </Button>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>

                        </div>
                    </Tabs>
                </div>
            </main>
        </div>
    )
}
