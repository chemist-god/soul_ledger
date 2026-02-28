"use client"

import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage } from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { User, Bell, Lock, Shield, Settings2, HelpCircle, Eye, EyeOff, Smartphone, Laptop, Globe, MessageSquare, Copy, CheckCircle2, AlertTriangle, Key } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"

export default function SettingsPage() {
    const [showKey, setShowKey] = useState(false);

    return (
        <div className="flex flex-col w-full min-h-screen">
            <header className="flex h-16 shrink-0 items-center justify-between border-b border-black/5 px-4 sm:px-6 bg-[#F3F4ED] sticky top-0 z-20">
                <div className="flex items-center gap-2">
                    <SidebarTrigger className="-ml-2 text-black/70 hover:text-black hover:bg-black/5" />
                    <Separator orientation="vertical" className="mr-2 h-4 bg-black/10" />
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbPage className="text-black font-semibold text-[14px]">General Settings</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </header>

            <main className="flex-1 p-4 sm:p-6 md:p-8 bg-[#F3F4ED]">
                <div className="max-w-5xl mx-auto">
                    <div className="mb-8">
                        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-black">Settings</h1>
                        <p className="text-black/60 text-[14px] sm:text-[15px] mt-1">Manage your personal account settings and preferences.</p>
                    </div>

                    <Tabs defaultValue="account" className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {/* Vertical Tabs Sidebar */}
                        <div className="md:col-span-1 border-r-0 md:border-r border-black/5 md:pr-6 h-fit overflow-x-auto pb-4 md:pb-0">
                            <TabsList className="flex flex-row md:flex-col h-auto bg-transparent items-start w-max md:w-full space-x-2 md:space-x-0 md:space-y-1 p-0">
                                <TabsTrigger value="account" className="md:w-full justify-start text-[14px] font-medium px-4 py-2.5 rounded-xl data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-sm data-[state=active]:border data-[state=active]:border-black/5 border border-transparent text-black/60 hover:text-black hover:bg-black/5 transition-all">
                                    <User className="mr-3 h-4 w-4 shrink-0" /> Account Details
                                </TabsTrigger>
                                <TabsTrigger value="notifications" className="md:w-full justify-start text-[14px] font-medium px-4 py-2.5 rounded-xl data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-sm data-[state=active]:border data-[state=active]:border-black/5 border border-transparent text-black/60 hover:text-black hover:bg-black/5 transition-all">
                                    <Bell className="mr-3 h-4 w-4 shrink-0" /> Notifications
                                </TabsTrigger>
                                <TabsTrigger value="security" className="md:w-full justify-start text-[14px] font-medium px-4 py-2.5 rounded-xl data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-sm data-[state=active]:border data-[state=active]:border-black/5 border border-transparent text-black/60 hover:text-black hover:bg-black/5 transition-all">
                                    <Lock className="mr-3 h-4 w-4 shrink-0" /> Privacy & Security
                                </TabsTrigger>
                                <TabsTrigger value="api" className="md:w-full justify-start text-[14px] font-medium px-4 py-2.5 rounded-xl data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-sm data-[state=active]:border data-[state=active]:border-black/5 border border-transparent text-black/60 hover:text-black hover:bg-black/5 transition-all">
                                    <Shield className="mr-3 h-4 w-4 shrink-0" /> API Access
                                </TabsTrigger>
                                <Separator className="hidden md:block my-2 bg-black/5 w-full" />
                                <TabsTrigger value="preferences" className="md:w-full justify-start text-[14px] font-medium px-4 py-2.5 rounded-xl data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-sm data-[state=active]:border data-[state=active]:border-black/5 border border-transparent text-black/60 hover:text-black hover:bg-black/5 transition-all">
                                    <Settings2 className="mr-3 h-4 w-4 shrink-0" /> App Preferences
                                </TabsTrigger>
                                <TabsTrigger value="support" className="md:w-full justify-start text-[14px] font-medium px-4 py-2.5 rounded-xl data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-sm data-[state=active]:border data-[state=active]:border-black/5 border border-transparent text-black/60 hover:text-black hover:bg-black/5 transition-all">
                                    <HelpCircle className="mr-3 h-4 w-4 shrink-0" /> Help & Support
                                </TabsTrigger>
                            </TabsList>
                        </div>

                        {/* Content Area */}
                        <div className="md:col-span-3 space-y-6">

                            {/* Tab 1: Account Details */}
                            <TabsContent value="account" className="m-0 space-y-6">
                                <Card className="rounded-3xl border-black/5 shadow-sm bg-white overflow-hidden">
                                    <CardHeader className="border-b border-black/5 px-6 py-5 bg-black/[0.02]">
                                        <CardTitle className="text-lg">Personal Information</CardTitle>
                                        <CardDescription>Update your personal details below.</CardDescription>
                                    </CardHeader>
                                    <CardContent className="p-6">
                                        <div className="flex items-center gap-6 mb-8">
                                            <div className="h-24 w-24 rounded-full bg-[#BAFF4C] flex items-center justify-center text-black font-bold text-2xl border-4 border-white shadow-sm shrink-0">
                                                AT
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <Button
                                                    variant="outline"
                                                    onClick={() => toast("Profile updated", {
                                                        description: "Your new avatar has been applied successfully.",
                                                        icon: <CheckCircle2 className="h-5 w-5 text-[#BAFF4C]" />
                                                    })}
                                                    className="h-9 rounded-full border-black/10 text-black hover:bg-black/5 bg-transparent text-[13px] font-semibold"
                                                >
                                                    Change Avatar
                                                </Button>
                                                <Button
                                                    variant="ghost"
                                                    onClick={() => toast("Avatar removed", {
                                                        description: "Your avatar has been reset to the default initials.",
                                                    })}
                                                    className="text-[13px] text-red-600 hover:text-red-700 hover:bg-red-50 h-8 rounded-full"
                                                >
                                                    Remove
                                                </Button>
                                            </div>
                                        </div>
                                        <div className="border-t border-black/5 pt-6 pb-2">
                                            <div className="flex justify-between items-center group cursor-pointer rounded-xl p-3 -mx-3 hover:bg-black/[0.02] transition-colors">
                                                <div className="flex flex-col gap-1">
                                                    <span className="text-[13px] font-semibold text-black/50">Full Name</span>
                                                    <span className="text-[15px] font-medium text-black group-hover:underline decoration-black/20 underline-offset-4">Ana Torres</span>
                                                </div>
                                                <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">Edit</Button>
                                            </div>
                                            <div className="flex justify-between items-center group cursor-pointer rounded-xl p-3 -mx-3 hover:bg-black/[0.02] transition-colors">
                                                <div className="flex flex-col gap-1">
                                                    <span className="text-[13px] font-semibold text-black/50">Email Address</span>
                                                    <span className="text-[15px] font-medium text-black group-hover:underline decoration-black/20 underline-offset-4">ana@techflow.com</span>
                                                </div>
                                                <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">Edit</Button>
                                            </div>
                                            <div className="flex justify-between items-center group cursor-pointer rounded-xl p-3 -mx-3 hover:bg-black/[0.02] transition-colors">
                                                <div className="flex flex-col gap-1">
                                                    <span className="text-[13px] font-semibold text-black/50">Phone Number</span>
                                                    <span className="text-[15px] font-medium text-black group-hover:underline decoration-black/20 underline-offset-4">+1 (555) 000-0000</span>
                                                </div>
                                                <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">Edit</Button>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="rounded-3xl border-red-100 shadow-sm bg-red-50/30 overflow-hidden">
                                    <CardHeader className="px-6 py-5">
                                        <CardTitle className="text-lg text-red-600">Danger Zone</CardTitle>
                                        <CardDescription className="text-red-600/60">Irreversible actions regarding your account.</CardDescription>
                                    </CardHeader>
                                    <CardContent className="px-6 pb-6 pt-0">
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 border border-red-100 bg-white rounded-2xl">
                                            <div>
                                                <h4 className="font-semibold text-[14px]">Delete Account</h4>
                                                <p className="text-[13px] text-black/50 mt-1">Permanently remove your Data and Profile. This cannot be undone.</p>
                                            </div>
                                            <Button
                                                variant="destructive"
                                                onClick={() => toast("Account Deletion Requested", {
                                                    description: "A secure link has been sent to ana@techflow.com to confirm deletion.",
                                                    icon: <AlertTriangle className="h-5 w-5 text-red-500" />
                                                })}
                                                className="bg-red-600 text-white hover:bg-red-700 font-semibold rounded-full px-6"
                                            >
                                                Delete Account
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>

                            {/* Tab 2: Notifications */}
                            <TabsContent value="notifications" className="m-0 space-y-6">
                                <Card className="rounded-3xl border-black/5 shadow-sm bg-white overflow-hidden">
                                    <CardHeader className="border-b border-black/5 px-6 py-5 bg-black/[0.02]">
                                        <CardTitle className="text-lg">Email Notifications</CardTitle>
                                        <CardDescription>Manage how we communicate with you via email.</CardDescription>
                                    </CardHeader>
                                    <CardContent className="p-0">
                                        <div className="divide-y divide-black/5">
                                            <div className="flex flex-row items-center justify-between p-6">
                                                <div className="flex flex-col gap-1 max-w-[80%]">
                                                    <Label htmlFor="marketing-emails" className="text-[15px] font-semibold text-black">Marketing & Product Updates</Label>
                                                    <span className="text-[13px] text-black/50 leading-relaxed">Receive emails about new features, tips, and promotional offers.</span>
                                                </div>
                                                <Switch className="data-[state=checked]:bg-[#BAFF4C] shrink-0" id="marketing-emails" />
                                            </div>
                                            <div className="flex flex-row items-center justify-between p-6">
                                                <div className="flex flex-col gap-1 max-w-[80%]">
                                                    <Label htmlFor="security-alerts" className="text-[15px] font-semibold text-black">Security Alerts</Label>
                                                    <span className="text-[13px] text-black/50 leading-relaxed">Urgent notifications about your account security (Cannot be disabled).</span>
                                                </div>
                                                <Switch className="data-[state=checked]:bg-[#BAFF4C] shrink-0 opacity-50" id="security-alerts" defaultChecked disabled />
                                            </div>
                                            <div className="flex flex-row items-center justify-between p-6">
                                                <div className="flex flex-col gap-1 max-w-[80%]">
                                                    <Label htmlFor="transaction-digests" className="text-[15px] font-semibold text-black">Weekly Transaction Digests</Label>
                                                    <span className="text-[13px] text-black/50 leading-relaxed">A weekly summary of your corporate card spending and team expenses.</span>
                                                </div>
                                                <Switch className="data-[state=checked]:bg-[#BAFF4C] shrink-0" id="transaction-digests" defaultChecked />
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                                <Card className="rounded-3xl border-black/5 shadow-sm bg-white overflow-hidden">
                                    <CardHeader className="border-b border-black/5 px-6 py-5 bg-black/[0.02]">
                                        <CardTitle className="text-lg">Push Notifications</CardTitle>
                                        <CardDescription>Manage alerts sent directly to your mobile device.</CardDescription>
                                    </CardHeader>
                                    <CardContent className="p-0">
                                        <div className="divide-y divide-black/5">
                                            <div className="flex flex-row items-center justify-between p-6">
                                                <div className="flex flex-col gap-1 max-w-[80%]">
                                                    <Label htmlFor="push-approvals" className="text-[15px] font-semibold text-black">Reimbursement Approvals</Label>
                                                    <span className="text-[13px] text-black/50 leading-relaxed">Get notified instantly when an employee submits a new request.</span>
                                                </div>
                                                <Switch className="data-[state=checked]:bg-[#BAFF4C] shrink-0" id="push-approvals" defaultChecked />
                                            </div>
                                            <div className="flex flex-row items-center justify-between p-6">
                                                <div className="flex flex-col gap-1 max-w-[80%]">
                                                    <Label htmlFor="push-limits" className="text-[15px] font-semibold text-black">Card Limit Warnings</Label>
                                                    <span className="text-[13px] text-black/50 leading-relaxed">Alerts when a corporate card approaches its monthly limit.</span>
                                                </div>
                                                <Switch className="data-[state=checked]:bg-[#BAFF4C] shrink-0" id="push-limits" defaultChecked />
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>

                            {/* Tab 3: Privacy & Security */}
                            <TabsContent value="security" className="m-0 space-y-6">
                                <Card className="rounded-3xl border-black/5 shadow-sm bg-white overflow-hidden">
                                    <CardHeader className="border-b border-black/5 px-6 py-5 bg-black/[0.02]">
                                        <CardTitle className="text-lg">Password & Multi-Factor</CardTitle>
                                        <CardDescription>Secure your account against unauthorized access.</CardDescription>
                                    </CardHeader>
                                    <CardContent className="p-6 space-y-6">
                                        <div className="grid gap-2 mb-2">
                                            <Label className="text-black/80 font-semibold text-[13px]">Current Password</Label>
                                            <Input type="password" placeholder="••••••••" className="rounded-xl border-black/10 h-11 px-4 focus-visible:ring-[#BAFF4C] transition-colors" />
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="grid gap-2">
                                                <Label className="text-black/80 font-semibold text-[13px]">New Password</Label>
                                                <Input type="password" placeholder="••••••••" className="rounded-xl border-black/10 h-11 px-4 focus-visible:ring-[#BAFF4C] transition-colors" />
                                            </div>
                                            <div className="grid gap-2">
                                                <Label className="text-black/80 font-semibold text-[13px]">Confirm New Password</Label>
                                                <Input type="password" placeholder="••••••••" className="rounded-xl border-black/10 h-11 px-4 focus-visible:ring-[#BAFF4C] transition-colors" />
                                            </div>
                                        </div>
                                        <Button
                                            className="h-10 rounded-full bg-black text-white hover:bg-black/80 font-semibold px-6 shadow-sm"
                                            onClick={() => toast.success("Password Updated", {
                                                description: "Your new password has been saved securely.",
                                                icon: <Lock className="h-5 w-5 text-[#BAFF4C]" />
                                            })}
                                        >
                                            Update Password
                                        </Button>

                                        <Separator className="bg-black/5 my-6" />

                                        <div className="flex flex-col justify-between items-start sm:flex-row sm:items-center gap-5 p-5 border border-black/10 rounded-2xl bg-[#BAFF4C]/5 relative overflow-hidden">
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#BAFF4C]/10" />
                                            <div className="relative z-10 flex-1">
                                                <div className="flex flex-wrap items-center gap-2 mb-1.5 ">
                                                    <h4 className="font-bold text-[15px] leading-tight">Two-Factor Authentication (2FA)</h4>
                                                    <span className="bg-red-100 text-red-700 text-[10px] uppercase px-2 py-0.5 rounded-full font-bold whitespace-nowrap">Disabled</span>
                                                </div>
                                                <p className="text-[13px] text-black/60 max-w-sm leading-relaxed">Protect your account with an extra layer of security requiring a code from your mobile device.</p>
                                            </div>
                                            <Button
                                                variant="outline"
                                                onClick={() => toast("2FA Setup Started", {
                                                    description: "Scan the QR code with your authenticator app on the next screen.",
                                                })}
                                                className="relative z-10 w-full sm:w-auto shrink-0 border-black/10 hover:border-black/20 hover:bg-black/5 text-black font-semibold rounded-xl bg-white h-11 sm:h-auto"
                                            >
                                                Enable 2FA
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                                <Card className="rounded-3xl border-black/5 shadow-sm bg-white overflow-hidden">
                                    <CardHeader className="border-b border-black/5 px-6 py-5 bg-black/[0.02]">
                                        <CardTitle className="text-lg">Active Sessions</CardTitle>
                                        <CardDescription>Review devices currently logged into your account.</CardDescription>
                                    </CardHeader>
                                    <CardContent className="p-0">
                                        <div className="divide-y divide-black/5">
                                            <div className="flex items-center justify-between p-6">
                                                <div className="flex items-start sm:items-center gap-4">
                                                    <div className="h-10 w-10 rounded-full bg-[#BAFF4C]/20 flex items-center justify-center text-green-700 shrink-0 mt-1 sm:mt-0">
                                                        <Laptop className="h-5 w-5" />
                                                    </div>
                                                    <div className="flex flex-col gap-1.5 sm:gap-1">
                                                        <div className="flex flex-wrap items-center gap-2">
                                                            <span className="text-[14px] font-bold text-black leading-tight">Mac OS • Chrome</span>
                                                            <span className="text-[9px] text-green-700 font-bold uppercase bg-green-100 px-2 py-0.5 rounded-full whitespace-nowrap">Current Session</span>
                                                        </div>
                                                        <span className="text-[13px] text-black/50 leading-tight">San Francisco, CA • Active Now</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-start sm:items-center justify-between gap-4 p-6 hover:bg-black/[0.02] transition-colors">
                                                <div className="flex items-start sm:items-center gap-4">
                                                    <div className="h-10 w-10 rounded-full bg-black/5 flex items-center justify-center text-black/50 shrink-0 mt-1 sm:mt-0">
                                                        <Smartphone className="h-5 w-5" />
                                                    </div>
                                                    <div className="flex flex-col gap-1.5 sm:gap-1">
                                                        <span className="text-[14px] font-semibold text-black leading-tight">iPhone 14 Pro • iOS App</span>
                                                        <span className="text-[13px] text-black/50 leading-tight">San Francisco, CA • Last active 2h ago</span>
                                                    </div>
                                                </div>
                                                <Button variant="ghost" className="text-red-600 hover:text-red-700 hover:bg-red-50 text-[13px] font-semibold h-8 rounded-full px-4 -mr-2 sm:mr-0 shrink-0">
                                                    Revoke
                                                </Button>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>

                            {/* Tab 4: API Access */}
                            <TabsContent value="api" className="m-0 space-y-6">
                                <Card className="rounded-3xl border-black/5 shadow-sm bg-white overflow-hidden">
                                    <CardHeader className="border-b border-black/5 px-6 py-5 bg-black/[0.02] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                        <div>
                                            <CardTitle className="text-lg">Developer API Keys</CardTitle>
                                            <CardDescription>Keys to access the platform API and integrate with your software.</CardDescription>
                                        </div>
                                        <Button
                                            onClick={() => toast("New API Key Generated", {
                                                description: "Your previous key will be expired in 24 hours.",
                                                icon: <Key className="h-5 w-5 text-[#BAFF4C]" />
                                            })}
                                            className="shrink-0 h-9 rounded-full bg-black text-white hover:bg-black/80 text-[13px] font-semibold shadow-sm"
                                        >
                                            Generate New Key
                                        </Button>
                                    </CardHeader>
                                    <CardContent className="p-6">
                                        <div className="space-y-4">
                                            <div className="flex flex-col gap-2">
                                                <Label className="font-semibold text-[13px] text-black/80">Production Secret Key</Label>
                                                <div className="flex relative">
                                                    <Input
                                                        readOnly
                                                        type={showKey ? "text" : "password"}
                                                        value="pk_live_51XXXXXXXXXXXXXXX"
                                                        className="font-mono text-[14px] rounded-xl border-black/10 pr-24 h-12 bg-black/5 text-black"
                                                    />
                                                    <div className="absolute right-2 top-2 bottom-2 flex items-center gap-1">
                                                        <Button variant="ghost" size="icon" className="h-8 w-8 text-black/50 hover:text-black hover:bg-black/5 rounded-lg" onClick={() => setShowKey(!showKey)}>
                                                            {showKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                                        </Button>
                                                        <Button
                                                            variant="ghost"
                                                            size="icon"
                                                            onClick={async () => {
                                                                await navigator.clipboard.writeText("pk_live_51XXXXXXXXXXXXXXX");
                                                                toast("Copied to clipboard", { description: "API Secret Key copied to clipboard." });
                                                            }}
                                                            className="h-8 w-8 text-black/50 hover:text-black hover:bg-black/5 rounded-lg"
                                                        >
                                                            <Copy className="h-4 w-4" />
                                                        </Button>
                                                    </div>
                                                </div>
                                                <p className="text-[12px] text-red-600 font-medium mt-1">Do not share your Secret Key. Keep it secure and hidden from client-side code.</p>
                                            </div>

                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="rounded-3xl border-black/5 shadow-sm bg-white overflow-hidden">
                                    <CardHeader className="border-b border-black/5 px-6 py-5 bg-black/[0.02]">
                                        <CardTitle className="text-lg">API Usage Limitations</CardTitle>
                                        <CardDescription>Your current billing period API quota.</CardDescription>
                                    </CardHeader>
                                    <CardContent className="p-6">
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="font-semibold text-black text-[14px]">Monthly Requests</span>
                                            <span className="text-[13px] text-black/60 font-mono font-medium">42,500 / 100,000</span>
                                        </div>
                                        <div className="w-full h-2.5 bg-black/5 rounded-full overflow-hidden">
                                            <div className="h-full bg-[#BAFF4C] rounded-full transition-all duration-1000" style={{ width: '42.5%' }} />
                                        </div>
                                        <p className="text-[12px] text-black/50 mt-4">Resetting on Mar 01, 2026. <a href="#" className="underline font-medium hover:text-black">Upgrade plan for higher limits.</a></p>
                                    </CardContent>
                                </Card>
                            </TabsContent>

                            {/* Tab 5: App Preferences */}
                            <TabsContent value="preferences" className="m-0 space-y-6">
                                <Card className="rounded-3xl border-black/5 shadow-sm bg-white overflow-hidden">
                                    <CardHeader className="border-b border-black/5 px-6 py-5 bg-black/[0.02]">
                                        <CardTitle className="text-lg">Appearance</CardTitle>
                                        <CardDescription>Customize how the dashboard looks on your device.</CardDescription>
                                    </CardHeader>
                                    <CardContent className="p-6">
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                            <button className="flex flex-col items-center gap-3 p-4 border-2 border-[#BAFF4C] bg-black/[0.02] rounded-2xl transition-all cursor-pointer">
                                                <div className="w-full h-24 bg-white rounded-xl shadow-sm border border-black/10 flex flex-col p-3 space-y-2">
                                                    <div className="h-3 w-1/3 bg-black/10 rounded-full" />
                                                    <div className="h-3 w-full bg-black/5 rounded-full" />
                                                    <div className="h-3 w-2/3 bg-black/5 rounded-full" />
                                                </div>
                                                <span className="font-semibold text-[14px] text-black">Light Mode</span>
                                            </button>
                                            <button className="flex flex-col items-center gap-3 p-4 border-2 border-transparent hover:border-black/10 bg-black/[0.02] rounded-2xl transition-all opacity-80 cursor-pointer">
                                                <div className="w-full h-24 bg-zinc-900 rounded-xl shadow-sm border border-black/10 flex flex-col p-3 space-y-2">
                                                    <div className="h-3 w-1/3 bg-white/20 rounded-full" />
                                                    <div className="h-3 w-full bg-white/10 rounded-full" />
                                                    <div className="h-3 w-2/3 bg-white/10 rounded-full" />
                                                </div>
                                                <span className="font-medium text-[14px] text-black">Dark Mode</span>
                                            </button>
                                            <button className="flex flex-col items-center gap-3 p-4 border-2 border-transparent hover:border-black/10 bg-black/[0.02] rounded-2xl transition-all opacity-80 cursor-pointer">
                                                <div className="w-full h-24 bg-gradient-to-br from-white to-zinc-800 rounded-xl shadow-sm border border-black/10 flex items-center justify-center">
                                                    <Laptop className="h-8 w-8 text-black/50" />
                                                </div>
                                                <span className="font-medium text-[14px] text-black">System Sync</span>
                                            </button>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="rounded-3xl border-black/5 shadow-sm bg-white overflow-hidden">
                                    <CardHeader className="border-b border-black/5 px-6 py-5 bg-black/[0.02]">
                                        <CardTitle className="text-lg">Localization</CardTitle>
                                        <CardDescription>Adjust your language, timezone, and regional settings.</CardDescription>
                                    </CardHeader>
                                    <CardContent className="p-6 space-y-6">
                                        <div className="grid gap-2">
                                            <Label className="text-black/80 font-semibold text-[13px]">Language</Label>
                                            <div className="h-11 px-4 border border-black/10 rounded-xl flex items-center justify-between cursor-pointer hover:border-[#BAFF4C] transition-colors bg-black/[0.02]">
                                                <span className="text-[14px] text-black font-medium">English (US)</span>
                                                <Globe className="h-4 w-4 text-black/40" />
                                            </div>
                                        </div>
                                        <div className="grid gap-2">
                                            <Label className="text-black/80 font-semibold text-[13px]">Timezone</Label>
                                            <div className="h-11 px-4 border border-black/10 rounded-xl flex items-center justify-between cursor-pointer hover:border-[#BAFF4C] transition-colors bg-black/[0.02]">
                                                <span className="text-[14px] text-black font-medium">(UTC-08:00) Pacific Time (US & Canada)</span>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>

                            {/* Tab 6: Help & Support */}
                            <TabsContent value="support" className="m-0 space-y-6">
                                <Card className="rounded-3xl border border-black shadow-lg bg-black text-white relative overflow-hidden">
                                    <div className="absolute top-[-50%] right-[-10%] w-[400px] h-[400px] bg-[#BAFF4C]/20 rounded-full blur-[100px] pointer-events-none" />
                                    <CardContent className="p-8 relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                                        <div>
                                            <div className="h-12 w-12 rounded-2xl bg-[#BAFF4C] flex items-center justify-center text-black mb-5 shadow-sm">
                                                <MessageSquare className="h-6 w-6" />
                                            </div>
                                            <h2 className="text-2xl font-bold mb-2 tracking-tight">Need direct assistance?</h2>
                                            <p className="text-white/70 text-[14px] max-w-sm leading-relaxed">Our enterprise support team is available 24/7 to solve your integration, billing, and account issues.</p>
                                        </div>
                                        <Button
                                            onClick={() => toast("Support ticket created", {
                                                description: "Ticket #4182 has been opened. We will respond shortly.",
                                            })}
                                            className="shrink-0 h-11 rounded-full bg-white text-black hover:bg-[#BAFF4C] font-bold px-8 transition-colors shadow-sm text-[14px]"
                                        >
                                            Open Support Ticket
                                        </Button>
                                    </CardContent>
                                </Card>

                                <Card className="rounded-3xl border-black/5 shadow-sm bg-white overflow-hidden">
                                    <CardHeader className="border-b border-black/5 px-6 py-5 bg-black/[0.02]">
                                        <CardTitle className="text-lg">Frequently Asked Questions</CardTitle>
                                        <CardDescription>Quick answers to common questions.</CardDescription>
                                    </CardHeader>
                                    <CardContent className="p-0">
                                        <div className="divide-y divide-black/5 px-6">
                                            <details className="group py-5 cursor-pointer">
                                                <summary className="font-semibold text-[15px] outline-none list-none flex items-center justify-between text-black hover:text-[#BAFF4C] transition-colors">
                                                    How do I issue a new virtual card?
                                                    <span className="transition group-open:rotate-45 block text-2xl font-light leading-none text-black/40">+</span>
                                                </summary>
                                                <div className="pt-3 pb-1">
                                                    <p className="text-[14px] text-black/60 leading-relaxed">Navigate to the Corporate Cards tab, switch to Virtual Cards, and click the "Issue New Card" button in the top right corner. You can set customized spending limits immediately upon creation.</p>
                                                </div>
                                            </details>
                                            <details className="group py-5 cursor-pointer">
                                                <summary className="font-semibold text-[15px] outline-none list-none flex items-center justify-between text-black hover:text-[#BAFF4C] transition-colors">
                                                    What happens when an employee reimbursement is rejected?
                                                    <span className="transition group-open:rotate-45 block text-2xl font-light leading-none text-black/40">+</span>
                                                </summary>
                                                <div className="pt-3 pb-1">
                                                    <p className="text-[14px] text-black/60 leading-relaxed">The employee will receive an automated email notification detailing the reason for rejection (if provided). The request will be permanently marked as "Rejected" in your historical log.</p>
                                                </div>
                                            </details>
                                            <details className="group py-5 cursor-pointer">
                                                <summary className="font-semibold text-[15px] outline-none list-none flex items-center justify-between text-black hover:text-[#BAFF4C] transition-colors">
                                                    How do I reset my API Secret Key?
                                                    <span className="transition group-open:rotate-45 block text-2xl font-light leading-none text-black/40">+</span>
                                                </summary>
                                                <div className="pt-3 pb-1">
                                                    <p className="text-[14px] text-black/60 leading-relaxed">Head over to the API Access tab in settings and click "Generate New Key". Beware that revoking an active key will immediately disconnect any active integrations using it.</p>
                                                </div>
                                            </details>
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
