import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import {
    Plane,
    Receipt,
    CreditCard,
    Users,
    ShieldCheck,
    Globe2,
} from "lucide-react";
import { FEATURES } from "@/lib/gen-variable";

const icons = [Plane, Receipt, CreditCard, ShieldCheck, Users, Globe2];

export function Features() {
    return (
        <Section id="features" className="bg-slate-50">
            <div className="flex flex-col items-center justify-center gap-4 text-center max-w-[800px] mx-auto mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Everything you need to <span className="text-perk-green">travel</span>{" "}
                    and <span className="text-perk-green">spend</span> smarter.
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                    One platform to book trips, manage expenses, and control spend.
                </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {FEATURES.map((feature, i) => {
                    const Icon = icons[i]
                    return (
                        <Card
                            key={feature.title}
                            className="flex flex-col items-start gap-4 p-8 transition-all hover:shadow-lg border-transparent hover:border-perk-green/20"
                        >
                            <div className="rounded-full bg-perk-green/10 p-4">
                                <Icon className="h-6 w-6 text-perk-green" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <h3 className="text-xl font-bold">{feature.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </Card>
                    )
                })}
            </div>
        </Section>
    );
}
