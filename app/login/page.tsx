"use client"

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Logo } from "@/components/icons/logo";
import { CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

export default function LoginPage() {
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
                            Welcome back
                        </h2>
                        <p className="mt-2 text-sm text-muted-foreground">
                            Please enter your details to sign in.
                        </p>
                    </div>

                    <div className="mt-10">
                        <div>
                            <form onSubmit={(e) => { e.preventDefault(); toast("Authenticating", { description: "Verifying your credentials..." }) }} className="space-y-5">
                                <div className="space-y-2">
                                    <Label htmlFor="email">Work email</Label>
                                    <Input id="email" name="email" type="email" autoComplete="email" required className="h-11 shadow-sm" />
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <Label htmlFor="password">Password</Label>
                                        <Link href="/forgot-password" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
                                            Forgot password?
                                        </Link>
                                    </div>
                                    <Input id="password" name="password" type="password" autoComplete="current-password" required className="h-11 shadow-sm" />
                                </div>

                                <div className="pt-2">
                                    <Button type="submit" className="w-full bg-[#BAFF4C] text-black hover:bg-[#a3e63d] h-11 text-base font-semibold shadow-sm rounded-lg">
                                        Sign in
                                    </Button>
                                </div>
                            </form>
                        </div>

                        <div className="mt-8">
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                    <div className="w-full border-t border-border" />
                                </div>
                                <div className="relative flex justify-center text-sm font-medium leading-6">
                                    <span className="bg-background px-6 text-muted-foreground">Or continue with</span>
                                </div>
                            </div>

                            <div className="mt-6 grid grid-cols-2 gap-4">
                                <Button
                                    variant="outline"
                                    type="button"
                                    onClick={() => toast("SSO Login", { description: "Connecting to your Google Workspace account..." })}
                                    className="w-full h-11 bg-background hover:bg-muted text-foreground flex items-center justify-center gap-2"
                                >
                                    <svg className="h-5 w-5" aria-hidden="true" viewBox="0 0 24 24">
                                        <path
                                            d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z"
                                            fill="#EA4335"
                                        />
                                        <path
                                            d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z"
                                            fill="#4285F4"
                                        />
                                        <path
                                            d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z"
                                            fill="#FBBC05"
                                        />
                                        <path
                                            d="M12.0004 24.0001C15.2404 24.0001 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.26538 14.29L1.27539 17.385C3.25539 21.31 7.3104 24.0001 12.0004 24.0001Z"
                                            fill="#34A853"
                                        />
                                    </svg>
                                    Google
                                </Button>
                                <Button
                                    variant="outline"
                                    type="button"
                                    onClick={() => toast("SSO Login", { description: "Connecting to your Microsoft Azure/365 account..." })}
                                    className="w-full h-11 bg-background hover:bg-muted text-foreground flex items-center justify-center gap-2"
                                >
                                    <svg className="h-5 w-5" aria-hidden="true" viewBox="0 0 21 21">
                                        <path fill="#f25022" d="M1 1h9v9H1z" />
                                        <path fill="#00a4ef" d="M1 11h9v9H1z" />
                                        <path fill="#7fba00" d="M11 1h9v9h-9z" />
                                        <path fill="#ffb900" d="M11 11h9v9h-9z" />
                                    </svg>
                                    Microsoft
                                </Button>
                            </div>
                        </div>

                        <p className="mt-10 text-center text-sm text-muted-foreground">
                            Don't have an account?{" "}
                            <Link href="/get-started" className="font-semibold leading-6 text-foreground hover:text-primary transition-colors">
                                Sign up
                            </Link>
                        </p>
                    </div>
                </div>
            </div>

            {/* Right Side - Visual / Aesthetic */}
            <div className="relative hidden w-0 flex-1 lg:block bg-foreground overflow-hidden">
                <div className="absolute inset-0 h-full w-full object-cover">
                    <div className="absolute inset-0 bg-[#BAFF4C]/10 mix-blend-multiply" />

                    {/* Decorative Background Elements */}
                    <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#BAFF4C] rounded-full mix-blend-screen mix-blend-overlay filter blur-[100px] opacity-20 pointer-events-none" />
                    <div className="absolute top-1/4 -right-24 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-[100px] opacity-10 pointer-events-none" />

                    <div className="flex h-full flex-col justify-center px-16 xl:px-24 relative z-10 w-full max-w-2xl mx-auto">
                        <div>
                            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-background mb-8 leading-[1.1]">
                                Welcome to the future of corporate spend.
                            </h2>

                            <div className="space-y-6 text-background/80">
                                <div className="flex items-center gap-4">
                                    <div className="h-10 w-10 rounded-full bg-[#BAFF4C]/20 flex items-center justify-center shrink-0">
                                        <CheckCircle2 className="h-6 w-6 text-[#BAFF4C]" />
                                    </div>
                                    <p className="text-lg font-medium">Gain real-time insights</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="h-10 w-10 rounded-full bg-[#BAFF4C]/20 flex items-center justify-center shrink-0">
                                        <CheckCircle2 className="h-6 w-6 text-[#BAFF4C]" />
                                    </div>
                                    <p className="text-lg font-medium">Close your books faster</p>
                                </div>
                            </div>

                            <div className="mt-16 bg-background/10 backdrop-blur-md rounded-2xl p-8 border border-background/20 relative">
                                <div className="absolute top-10 right-10">
                                    <Image
                                        src="/images/img_4.jpeg"
                                        alt="Expense submitted"
                                        width={140}
                                        height={50}
                                        className="rounded-full shadow-lg"
                                    />
                                </div>
                                <div className="flex items-center gap-4 mb-4">
                                    <Image
                                        src="/images/img_5.jpeg"
                                        alt="Mark Adams"
                                        width={60}
                                        height={60}
                                        className="rounded-full border-2 border-[#BAFF4C] object-cover h-[60px] w-[60px]"
                                    />
                                    <div>
                                        <p className="text-background font-semibold text-lg">Mark Adams</p>
                                        <p className="text-[#BAFF4C] text-sm font-medium">VP Finance at GlobalCorp</p>
                                    </div>
                                </div>
                                <p className="text-background text-lg md:text-xl italic leading-relaxed font-medium mt-4 lg:w-3/4">
                                    "Getting started was seamless, and logging back in feels like entering a control room tailored for financial clarity."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
