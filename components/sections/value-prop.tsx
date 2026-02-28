import { Section } from "@/components/ui/section";
import { CheckCircle2 } from "lucide-react";
import { VALUE_PROP_ITEMS } from "@/lib/gen-variable";

export function ValueProp() {
    return (
        <Section background="muted">
            <div className="flex flex-col gap-12 lg:grid lg:grid-cols-2 lg:gap-24 items-center">
                <div className="order-2 lg:order-1">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-4 translate-y-8">
                            <div className="h-64 rounded-2xl bg-white shadow-lg p-6 flex items-center justify-center text-center">
                                <span className="text-muted-foreground font-medium">Manual Processes</span>
                            </div>
                            <div className="h-48 rounded-2xl bg-white shadow-lg p-6 flex items-center justify-center text-center">
                                <span className="text-muted-foreground font-medium">Lost Receipts</span>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="h-48 rounded-2xl bg-white shadow-lg p-6 flex items-center justify-center text-center">
                                <span className="text-muted-foreground font-medium">Policy Violations</span>
                            </div>
                            <div className="h-64 rounded-2xl bg-white shadow-lg p-6 flex items-center justify-center text-center">
                                <span className="text-muted-foreground font-medium">Wasted Hours</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center space-y-6 order-1 lg:order-2">
                    <div className="inline-block rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-600 w-fit">
                        The Problem
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        We call this <span className="text-red-500">shadow work</span>.
                    </h2>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                        Every company has it. It&apos;s the work behind the work, slowing people
                        down and costing companies more than they realize.
                    </p>
                    <ul className="grid gap-3">
                        {VALUE_PROP_ITEMS.map((item) => (
                            <li key={item} className="flex items-center gap-2">
                                <CheckCircle2 className="h-5 w-5 text-red-500" />
                                <span className="text-muted-foreground line-through decoration-red-500/50 decoration-2">
                                    {item}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Section>
    );
}
