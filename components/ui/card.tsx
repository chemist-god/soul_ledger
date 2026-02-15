import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CardProps {
    children: ReactNode;
    className?: string;
}

export function Card({ children, className }: CardProps) {
    return (
        <div
            className={cn(
                "rounded-2xl border bg-card text-card-foreground shadow-sm p-6",
                className
            )}
        >
            {children}
        </div>
    );
}
