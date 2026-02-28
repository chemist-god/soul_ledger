"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Logo } from "@/components/icons/logo";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import { toast } from "sonner";

export default function ForgotPasswordPage() {
    return (
        <div className="flex min-h-screen w-full font-sans bg-background">
            {/* Left Side - Form */}
            <div className="flex w-full flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:w-1/2 lg:px-20 xl:px-24 box-border">
                <div className="mx-auto w-full max-w-sm lg:w-[400px]">
                    <div className="mb-0 md:mb-8">
                        <Link href="/" className="flex items-center gap-2 mb-10">
                            <Logo className="h-8 w-auto text-primary" />
                            <span className="font-bold text-xl tracking-tight">perk</span>
                        </Link>
                        <h2 className="text-3xl font-bold tracking-tight text-foreground">
                            Forgot password?
                        </h2>
                        <p className="mt-2 text-sm text-muted-foreground">
                            No worries, we'll send you reset instructions.
                        </p>
                    </div>

                    <div className="mt-10">
                        <div>
                            <form onSubmit={(e) => { e.preventDefault(); toast.success("Recovery Email Sent", { description: "If an account exists, a link was sent to your inbox." }) }} className="space-y-6">
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" name="email" type="email" autoComplete="email" placeholder="Enter your email" required className="h-11 shadow-sm" />
                                </div>

                                <div className="pt-2">
                                    <Button type="submit" className="w-full bg-[#BAFF4C] text-black hover:bg-[#a3e63d] h-11 text-base font-semibold shadow-sm rounded-lg">
                                        Reset password
                                    </Button>
                                </div>
                            </form>
                        </div>

                        <div className="mt-10 text-center">
                            <Link href="/login" className="inline-flex items-center gap-2 text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors">
                                <ArrowLeft className="h-4 w-4" />
                                Back to log in
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side - Visual / Aesthetic */}
            <div className="relative hidden w-0 flex-1 lg:block bg-foreground overflow-hidden">
                <div className="absolute inset-0 h-full w-full object-cover">
                    <div className="absolute inset-0 bg-[#BAFF4C]/10 mix-blend-multiply" />

                    {/* Decorative Background Elements */}
                    <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#BAFF4C] rounded-full mix-blend-screen mix-blend-overlay filter blur-[100px] opacity-20 pointer-events-none" />
                    <div className="absolute bottom-1/4 -right-24 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-[100px] opacity-10 pointer-events-none" />

                    <div className="flex h-full flex-col justify-center px-16 xl:px-24 relative z-10 w-full max-w-2xl mx-auto">
                        <div>
                            <div className="bg-[#BAFF4C]/20 backdrop-blur-md rounded-2xl p-3 inline-flex mb-8">
                                <CheckCircle2 className="h-8 w-8 text-[#BAFF4C]" />
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-background mb-8 leading-[1.1]">
                                Secure and hassle-free access.
                            </h2>

                            <p className="text-background/80 text-lg lg:text-xl leading-relaxed max-w-lg">
                                We prioritize your security. Quickly regain access to your Perk dashboard and continue managing your corporate expenses with ease.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
