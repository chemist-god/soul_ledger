import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
    children: ReactNode;
    className?: string;
    id?: string;
    background?: "white" | "muted" | "dark" | "perk-green";
}

export function Section({
    children,
    className,
    id,
    background = "white",
}: SectionProps) {
    const bgStyles = {
        white: "bg-background",
        muted: "bg-muted/50",
        dark: "bg-[#0a0a0a] text-white",
        "perk-green": "bg-perk-green text-white",
    };

    return (
        <section
            id={id}
            className={cn(
                "py-16 md:py-24",
                bgStyles[background],
                className
            )}
        >
            <div className="container mx-auto px-4 md:px-6">{children}</div>
        </section>
    );
}
