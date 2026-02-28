import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { Star } from "lucide-react";
import { TESTIMONIALS, TESTIMONIAL_STAT } from "@/lib/gen-variable";

export function Testimonials() {
    return (
        <Section background="dark">
            <div className="flex flex-col items-center justify-center gap-4 text-center mb-12">
                <div className="flex items-center gap-1 text-yellow-400 mb-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="fill-current h-5 w-5" />
                    ))}
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">
                    Loved by finance teams and travelers alike
                </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {TESTIMONIALS.map((t) => (
                    <Card key={t.name} className="bg-neutral-900 border-neutral-800 text-white p-8">
                        <p className="mb-6 leading-relaxed text-neutral-300">
                            &ldquo;{t.quote}&rdquo;
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="h-10 w-10 rounded-full bg-perk-green/20 flex items-center justify-center text-perk-green font-bold">
                                {t.initials}
                            </div>
                            <div>
                                <p className="font-semibold">{t.name}</p>
                                <p className="text-sm text-neutral-400">{t.title}</p>
                            </div>
                        </div>
                    </Card>
                ))}
                <Card className="bg-neutral-900 border-neutral-800 text-white p-8 flex flex-col items-center justify-center text-center gap-4">
                    <div className="text-4xl font-bold text-perk-green">{TESTIMONIAL_STAT.rank}</div>
                    <p className="text-lg font-medium">{TESTIMONIAL_STAT.label}</p>
                    <p className="text-sm text-neutral-400">{TESTIMONIAL_STAT.source}</p>
                </Card>
            </div>
        </Section>
    );
}
