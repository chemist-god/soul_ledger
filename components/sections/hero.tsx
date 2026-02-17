import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import Image from "next/image";

export function Hero() {
    return (
        <Section className="pt-24 pb-20 md:pt-32 md:pb-32 bg-white overflow-hidden">
            <div className="container px-4 md:px-6 relative">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
                    <div className="flex flex-col justify-center space-y-8 z-10">
                        <div className="space-y-6">
                            <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl xl:text-7xl/none text-foreground">
                                The intelligent platform for <br className="hidden lg:block" />
                                <span className="text-primary relative inline-block">
                                    travel
                                    <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary/20 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                        <path d="M0 5 Q 50 10 100 5 L 100 0 Q 50 5 0 0 Z" fill="currentColor" />
                                    </svg>
                                </span> and <span className="text-primary relative inline-block">
                                    spend
                                    <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary/20 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                        <path d="M0 5 Q 50 10 100 5 L 100 0 Q 50 5 0 0 Z" fill="currentColor" />
                                    </svg>
                                </span>.
                            </h1>
                            <p className="max-w-[600px] text-muted-foreground text-lg md:text-xl leading-relaxed">
                                Real work. Real business. Real impact. From booking to
                                reconciliation, Perk keeps everything moving—no chasing, no
                                checking, no wasted time.
                            </p>
                        </div>
                        <div className="flex flex-col gap-4 min-[400px]:flex-row items-start">
                            <Button size="lg" className="h-14 px-8 text-base font-semibold bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all hover:scale-105">
                                Book a demo
                            </Button>
                            <Button size="lg" variant="outline" className="h-14 px-8 text-base hover:bg-muted transition-all">
                                Try for free
                            </Button>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground pt-4">
                            <div className="flex -space-x-3">
                                {[2, 3, 4, 5].map((i) => (
                                    <div
                                        key={i}
                                        className="h-10 w-10 rounded-full border-2 border-background bg-muted flex items-center justify-center overflow-hidden"
                                    >
                                        <Image src={`/images/img_${i}.jpeg`} alt="User" width={40} height={40} className="object-cover w-full h-full" />
                                    </div>
                                ))}
                            </div>
                            <div>
                                <div className="flex items-center gap-1 text-yellow-500">
                                    {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
                                </div>
                                <p className="font-medium text-foreground">Trusted by 1000+ companies</p>
                            </div>
                        </div>
                    </div>
                    <div className="mx-auto w-full max-w-[600px] lg:max-w-none relative lg:-mr-20">
                        {/* Background decorative elements */}
                        <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
                        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-blue-100/50 rounded-full blur-3xl -z-10" />

                        <div className="relative">
                            <Image
                                src="/images/img_1.png"
                                alt="Perk Platform Interface"
                                width={800}
                                height={600}
                                className="rounded-xl shadow-2xl border border-border/50 bg-background/50 backdrop-blur-sm"
                                priority
                            />
                            {/* Floating UI Elements for "Shadow Work" vs "Perk" contrast */}
                            <div className="absolute -left-12 bottom-20 bg-white p-4 rounded-lg shadow-xl border border-border hidden md:block animate-bounce duration-[3000ms]">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                                        ✓
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold">Expense Approved</p>
                                        <p className="text-xs text-muted-foreground">Just now</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
