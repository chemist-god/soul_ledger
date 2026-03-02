import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import Image from "next/image";
import Link from "next/link";
import { Flame, Star } from "lucide-react";
import { IMAGES, MOCK_STATS, ROUTES } from "@/lib/gen-variable";

export function Hero() {
    return (
        <Section className="pt-32 pb-16 md:pt-36 md:pb-32 bg-[#F9F9F5] overflow-hidden">
            <div className="container px-4 md:px-6 relative flex flex-col items-center text-center">

                {/* Headline & Subheadline */}
                <div className="max-w-4xl space-y-6 mb-0 z-10">
                    <div className="inline-flex items-center gap-2 bg-perk-green/15 text-perk-green border border-perk-green/30 rounded-full px-4 py-1.5 text-sm font-semibold mb-2">
                        <Flame className="w-4 h-4" />
                        <span>{MOCK_STATS.heroUsersCount} people already staking their goals</span>
                    </div>
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-[5.5rem] text-foreground leading-[1.05]">
                        Set goals. Stake money. <br />
                        <span className="text-perk-green">Prove yourself.</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-muted-foreground text-lg md:text-xl leading-relaxed">
                        The accountability platform that uses financial stakes to make you follow through. Create a goal, lock in money, and don&apos;t quit.
                    </p>
                    <div className="flex items-center justify-center gap-4 pt-2">
                        <Link href={ROUTES.getStarted}>
                            <Button size="lg" className="bg-perk-green text-black hover:bg-perk-green/90 font-semibold px-8 h-12 rounded-xl shadow-md">
                                Start Staking Free
                            </Button>
                        </Link>
                        <Link href={ROUTES.dashboard}>
                            <Button size="lg" variant="outline" className="border-black/20 text-black hover:bg-black/5 font-medium px-8 h-12 rounded-xl">
                                See Dashboard
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Hero Image Composition */}
                <div className="relative w-full max-w-[1200px] mx-auto -mt-8 sm:-mt-12 md:-mt-20 h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px]">
                    {/* Main Phone Image - Centered */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[240px] sm:w-[280px] md:w-[320px] lg:w-[360px]">
                        <Image
                            src={IMAGES.heroPhone}
                            alt="Smart Todo Goal Tracking Interface"
                            width={400}
                            height={800}
                            className="w-full h-auto object-contain drop-shadow-2xl"
                            priority
                        />
                    </div>

                    {/* Top Left: Kofi's stake card */}
                    <div className="absolute top-[15%] left-[5%] md:left-[10%] lg:left-[18%] z-20 hidden sm:block animate-in fade-in zoom-in duration-700 delay-200">
                        <Image
                            src={IMAGES.avatar}
                            alt="Kofi stakes $50 on reading goal"
                            width={220}
                            height={80}
                            className="w-[140px] md:w-[160px] lg:w-[180px] h-auto rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
                        />
                    </div>

                    {/* Mid Left: Goal completed notification */}
                    <div className="absolute top-[35%] sm:top-[45%] left-[-2%] sm:left-[2%] md:left-[5%] lg:left-[12%] z-20 block animate-in fade-in zoom-in duration-700 delay-300">
                        <Image
                            src={IMAGES.expenseSubmitted}
                            alt="Goal completed - stake returned"
                            width={180}
                            height={60}
                            className="w-[130px] sm:w-[120px] md:w-[140px] lg:w-[160px] h-auto rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
                        />
                    </div>

                    {/* Bottom Left: Streak milestone */}
                    <div className="absolute bottom-[15%] left-[5%] md:left-[8%] lg:left-[15%] z-20 hidden sm:block animate-in fade-in zoom-in duration-700 delay-400">
                        <Image
                            src={IMAGES.flightTicket}
                            alt="14-day streak achievement"
                            width={300}
                            height={160}
                            className="w-[200px] md:w-[240px] lg:w-[280px] h-auto rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
                        />
                    </div>

                    {/* Right: Community staking */}
                    <div className="absolute top-1/2 -translate-y-1/2 right-[2%] md:right-[5%] lg:right-[12%] z-0 hidden sm:block animate-in fade-in zoom-in duration-700 delay-500">
                        <Image
                            src={IMAGES.setBudget}
                            alt="Friend stakes on your gym goal"
                            width={340}
                            height={200}
                            className="w-[220px] md:w-[260px] lg:w-[300px] h-auto rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
                        />
                    </div>

                    {/* Mark Adams */}
                    <div className="absolute top-[5%] sm:top-auto sm:bottom-[10%] right-[-2%] sm:right-[8%] md:right-[12%] lg:right-[18%] z-20 block animate-in fade-in zoom-in duration-700 delay-600">
                        <Image
                            src={IMAGES.markAdams}
                            alt="Accountability partner notification"
                            width={220}
                            height={80}
                            className="w-[140px] sm:w-[150px] md:w-[190px] lg:w-[240px] h-auto rounded-xl shadow-lg"
                        />
                    </div>
                </div>

                {/* Social Proof */}
                <div className="absolute bottom-4 right-4 hidden md:flex items-center gap-3 text-sm">
                    <Flame className="w-5 h-5 text-perk-green" />
                    <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <Star key={i} className="w-4 h-4 fill-foreground text-foreground" />
                        ))}
                    </div>
                    <div className="font-semibold text-foreground">
                        {MOCK_STATS.heroRating} <span className="mx-1 text-muted-foreground">|</span> {MOCK_STATS.heroReviews} reviews
                    </div>
                </div>
            </div>
        </Section>
    );
}
