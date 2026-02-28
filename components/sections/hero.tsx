import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import Image from "next/image";
import { Clock, Star } from "lucide-react";

export function Hero() {
    return (
        <Section className="pt-32 pb-16 md:pt-36 md:pb-32 bg-[#F9F9F5] overflow-hidden">
            <div className="container px-4 md:px-6 relative flex flex-col items-center text-center">

                {/* Headline & Subheadline */}
                <div className="max-w-4xl space-y-8 mb-0 z-10">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-[5.5rem] text-foreground leading-[1.05]">
                        The intelligent platform <br />
                        for travel and spend
                    </h1>
                </div>

                {/* Hero Image Composition */}
                <div className="relative w-full max-w-[1200px] mx-auto -mt-8 sm:-mt-12 md:-mt-20 h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px]">
                    {/* Main Phone Image - Centered */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[240px] sm:w-[280px] md:w-[320px] lg:w-[360px]">
                        <Image
                            src="/images/img_1.png"
                            alt="Perk Platform Interface"
                            width={400}
                            height={800}
                            className="w-full h-auto object-contain drop-shadow-2xl"
                            priority
                        />
                    </div>

                    {/* Floating Elements */}

                    {/* Top Left: Ana Torres */}
                    <div className="absolute top-[15%] left-[5%] md:left-[10%] lg:left-[18%] z-20 hidden sm:block animate-in fade-in zoom-in duration-700 delay-200">
                        <Image
                            src="/images/img_3.jpeg"
                            alt="Ana Torres"
                            width={220}
                            height={80}
                            className="w-[140px] md:w-[160px] lg:w-[180px] h-auto rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
                        />
                    </div>

                    {/* Mid Left (Mobile & Desktop): Expense submitted / Arriving on time */}
                    <div className="absolute top-[35%] sm:top-[45%] left-[-2%] sm:left-[2%] md:left-[5%] lg:left-[12%] z-20 block animate-in fade-in zoom-in duration-700 delay-300">
                        <Image
                            src="/images/img_4.jpeg"
                            alt="Expense submitted"
                            width={180}
                            height={60}
                            className="w-[130px] sm:w-[120px] md:w-[140px] lg:w-[160px] h-auto rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
                        />
                    </div>

                    {/* Bottom Left: Flight Ticket */}
                    <div className="absolute bottom-[15%] left-[5%] md:left-[8%] lg:left-[15%] z-20 hidden sm:block animate-in fade-in zoom-in duration-700 delay-400">
                        <Image
                            src="/images/img_2.jpeg"
                            alt="Flight Ticket"
                            width={300}
                            height={160}
                            className="w-[200px] md:w-[240px] lg:w-[280px] h-auto rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
                        />
                    </div>

                    {/* Right: Set the budget - Vertically centered */}
                    <div className="absolute top-1/2 -translate-y-1/2 right-[2%] md:right-[5%] lg:right-[12%] z-0 hidden sm:block animate-in fade-in zoom-in duration-700 delay-500">
                        <Image
                            src="/images/img_6.jpeg"
                            alt="Set the budget"
                            width={340}
                            height={200}
                            className="w-[220px] md:w-[260px] lg:w-[300px] h-auto rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
                        />
                    </div>

                    {/* Top Right (Mobile), Bottom Right (Desktop): Mark Adams */}
                    <div className="absolute top-[5%] sm:top-auto sm:bottom-[10%] right-[-2%] sm:right-[8%] md:right-[12%] lg:right-[18%] z-20 block animate-in fade-in zoom-in duration-700 delay-600">
                        <Image
                            src="/images/img_5.jpeg"
                            alt="Mark Adams"
                            width={220}
                            height={80}
                            className="w-[140px] sm:w-[150px] md:w-[190px] lg:w-[240px] h-auto rounded-xl shadow-lg"
                        />
                    </div>
                </div>

                {/* Reviews / Trusted By - Bottom Right Absolute */}
                <div className="absolute bottom-4 right-4 hidden md:flex items-center gap-3 text-sm">
                    <Clock className="w-5 h-5 text-foreground" />
                    <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <Star key={i} className="w-4 h-4 fill-foreground text-foreground" />
                        ))}
                    </div>
                    <div className="font-semibold text-foreground">
                        4.6 <span className="mx-1 text-muted-foreground">|</span> 1,536 reviews
                    </div>
                </div>
            </div>
        </Section>
    );
}
