import Link from "next/link";
import { Logo } from "@/components/icons/logo";

const footerLinks = {
    Product: ["Platform", "Travel", "Expenses", "Cards", "Events"],
    Solutions: ["Finance Teams", "Travel Managers", "Travelers", "Small Business"],
    Company: ["About Us", "Careers", "Press", "Contact"],
    Resources: ["Blog", "Guides", "Help Center", "Status"],
};

export function Footer() {
    return (
        <footer className="bg-muted py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
                    <div className="col-span-2 md:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <Logo className="h-8 w-8 text-perk-green" />
                            <span className="text-xl font-bold tracking-tight">Perk</span>
                        </Link>
                        <p className="max-w-xs text-sm text-muted-foreground">
                            The intelligent platform for travel and spend. Real work. Real business. Real impact.
                        </p>
                    </div>
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <h3 className="mb-4 text-sm font-semibold">{category}</h3>
                            <ul className="space-y-3">
                                {links.map((link) => (
                                    <li key={link}>
                                        <Link
                                            href="#"
                                            className="text-sm text-muted-foreground hover:text-foreground hover:underline"
                                        >
                                            {link}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row">
                    <p className="text-xs text-muted-foreground">
                        © {new Date().getFullYear()} Perk.com. All rights reserved.
                    </p>
                    <div className="flex gap-4">
                        <Link href="#" className="text-xs text-muted-foreground hover:underline">
                            Terms
                        </Link>
                        <Link href="#" className="text-xs text-muted-foreground hover:underline">
                            Privacy
                        </Link>
                        <Link href="#" className="text-xs text-muted-foreground hover:underline">
                            Cookies
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
