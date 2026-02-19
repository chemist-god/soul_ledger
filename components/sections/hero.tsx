import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import Image from "next/image";

export function Hero() {
    return (
        <Section className="pt-10 pb-16 md:pt-16 md:pb-32 bg-[#F9F9F5] overflow-hidden">
            <div className="container px-4 md:px-6 relative flex flex-col items-center text-center">

                {/* Headline & Subheadline */}
                <div className="max-w-4xl space-y-8 mb-4 z-10">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-[5.5rem] text-foreground leading-[1.05]">
                        The intelligent platform <br />
                        for travel and spend
                    </h1>
                </div>

                {/* Hero Image Composition */}
                <div className="relative w-full max-w-[1000px] mx-auto mt-4">
                    {/* Main Phone Image */}
                    <div className="relative z-10 flex justify-center">
                        <Image
                            src="/images/img_1.png"
                            alt="Perk Platform Interface"
                            width={400}
                            height={800}
                            className="w-[280px] sm:w-[320px] md:w-[380px] lg:w-[420px] h-auto object-contain drop-shadow-2xl"
                            priority
                        />
                    </div>

                    {/* Floating Elements - Positioned relative to the container */}

                    {/* Top Left: Ana Torres */}
                    <div className="absolute top-[10%] left-[5%] md:left-[10%] lg:left-[15%] z-20 hidden sm:block animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
                        <Image
                            src="/images/img_3.jpeg"
                            alt="Ana Torres"
                            width={220}
                            height={80}
                            className="w-[140px] md:w-[180px] lg:w-[220px] h-auto rounded-xl shadow-lg"
                        />
                    </div>

                    {/* Mid Left: Expense submitted */}
                    <div className="absolute top-[35%] left-[0%] md:left-[2%] lg:left-[8%] z-20 hidden sm:block animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
                        <Image
                            src="/images/img_4.jpeg"
                            alt="Expense submitted"
                            width={180}
                            height={60}
                            className="w-[120px] md:w-[150px] lg:w-[180px] h-auto rounded-full shadow-lg"
                        />
                    </div>

                    {/* Bottom Left: Flight Ticket */}
                    <div className="absolute bottom-[10%] left-[2%] md:left-[5%] lg:left-[5%] z-20 hidden sm:block animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400">
                        <Image
                            src="/images/img_2.jpeg"
                            alt="Flight Ticket"
                            width={300}
                            height={160}
                            className="w-[200px] md:w-[260px] lg:w-[320px] h-auto rounded-xl shadow-xl"
                        />
                    </div>

                    {/* Right: Set the budget */}
                    <div className="absolute top-[30%] right-[0%] md:right-[2%] lg:right-[5%] z-0 hidden sm:block animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
                        <Image
                            src="/images/img_6.jpeg"
                            alt="Set the budget"
                            width={340}
                            height={200}
                            className="w-[220px] md:w-[280px] lg:w-[340px] h-auto rounded-xl shadow-xl"
                        />
                    </div>

                    {/* Bottom Right: Mark Adams */}
                    <div className="absolute bottom-[5%] right-[5%] md:right-[10%] lg:right-[12%] z-20 hidden sm:block animate-in fade-in slide-in-from-bottom-4 duration-700 delay-600">
                        <Image
                            src="/images/img_5.jpeg"
                            alt="Mark Adams"
                            width={220}
                            height={80}
                            className="w-[150px] md:w-[190px] lg:w-[240px] h-auto rounded-xl shadow-lg"
                        />
                    </div>
                </div>

                {/* Footer / Trusted By - Optional, keeping minimal or removing as per design focus */}
                <div className="mt-20 flex flex-col items-center gap-4 text-sm text-foreground/80">
                    <div className="flex items-center gap-1 text-black font-semibold">
                        <span className="w-5 h-5 rounded-full border border-black flex items-center justify-center text-xs">C</span>
                        <span>4.6</span>
                        <span className="mx-1">|</span>
                        <span>1,536 reviews</span>
                    </div>
                </div>
            </div>
        </Section>
    );
}
