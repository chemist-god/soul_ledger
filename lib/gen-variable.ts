// ============================================================
//  gen-variable.ts — Central Application Constants
//  Single source of truth for all hardcoded values.
//  Import what you need: import { COLORS, ROUTES, USER } from "@/lib/gen-variable"
// ============================================================

import {
    LayoutDashboard,
    Receipt,
    CreditCard,
    Wallet,
    PieChart,
    Building2,
    Settings2,
} from "lucide-react"

// ─────────────────────────────────────────────
// 1. VERSIONING & RELEASES
// ─────────────────────────────────────────────
export const VERSION = {
    /** Current application version (mirrors package.json) */
    current: "0.1.0",
    /** Human-readable release name */
    codename: "Seed",
    /** Release date */
    releaseDate: "2026-02-28",
    /** Build channel */
    channel: "beta" as "alpha" | "beta" | "stable",
}

export const RELEASES: {
    version: string
    date: string
    title: string
    notes: string[]
}[] = [
        {
            version: "0.1.0",
            date: "2026-02-28",
            title: "Initial Beta Release",
            notes: [
                "Core dashboard with spend analytics",
                "Corporate card management (virtual & physical)",
                "Transaction ledger with filtering",
                "Reimbursements workflow",
                "Settings: account, notifications, security, API access",
                "Public landing page with hero, features, and testimonials",
                "Authentication flows: login, sign-up, forgot/reset password",
            ],
        },
    ]

// ─────────────────────────────────────────────
// 2. BRAND
// ─────────────────────────────────────────────
export const BRAND = {
    /** Short display name shown in nav and cards */
    name: "perk",
    /** Capitalised display name */
    displayName: "Perk",
    /** Full legal / marketing name */
    fullName: "Perk.com",
    /** One-line tagline */
    tagline: "The intelligent platform for travel and spend.",
    /** Footer blurb */
    description:
        "The intelligent platform for travel and spend. Real work. Real business. Real impact.",
    /** Copyright entity */
    copyright: "Perk.com",
}

// ─────────────────────────────────────────────
// 3. APP METADATA (used in Next.js Metadata export)
// ─────────────────────────────────────────────
export const META = {
    title: `${BRAND.displayName} — Corporate Spend Management`,
    description:
        "Manage corporate cards, travel bookings, and expense reimbursements all in one place.",
    /** OG / social share image path */
    ogImage: "/images/img_1.png",
}

// ─────────────────────────────────────────────
// 4. COLORS  (Tailwind arbitrary values)
// ─────────────────────────────────────────────
export const COLORS = {
    /** Primary brand lime-green */
    primary: "#BAFF4C",
    /** Darker lime-green used for hover states */
    primaryHover: "#a3e63d",
    /** Dashboard / sidebar background */
    background: "#F3F4ED",
    /** Landing page hero background */
    heroBackground: "#F9F9F5",
}

// ─────────────────────────────────────────────
// 5. ROUTES
// ─────────────────────────────────────────────
export const ROUTES = {
    home: "/",
    dashboard: "/dashboard",
    transactions: "/transactions",
    cards: "/cards",
    reimbursements: "/reimbursements",
    analytics: "/analytics",
    docs: "/docs",
    settings: "/settings",
    settingsCompany: "/settings/company",
    login: "/login",
    getStarted: "/get-started",
    forgotPassword: "/forgot-password",
    resetPassword: "/reset-password",
}

// ─────────────────────────────────────────────
// 6. NAVIGATION — Sidebar
// ─────────────────────────────────────────────
export const NAV_MAIN = [
    {
        title: "Overview",
        url: ROUTES.dashboard,
        icon: LayoutDashboard,
    },
    {
        title: "Transactions",
        url: ROUTES.transactions,
        icon: Receipt,
    },
    {
        title: "Corporate Cards",
        url: ROUTES.cards,
        icon: CreditCard,
    },
    {
        title: "Reimbursements",
        url: ROUTES.reimbursements,
        icon: Wallet,
    },
    {
        title: "Analytics",
        url: ROUTES.analytics,
        icon: PieChart,
    },
]

export const NAV_SETTINGS = [
    {
        title: "Company Profile",
        url: ROUTES.settingsCompany,
        icon: Building2,
    },
    {
        title: "Settings",
        url: ROUTES.settings,
        icon: Settings2,
    },
]

/** Header desktop/mobile nav links */
export const NAV_HEADER = [
    { label: "Product", url: "#" },
    { label: "Solutions", url: "#" },
    { label: "Customers", url: "#" },
    { label: "Pricing", url: "#" },
    { label: "Integrations", url: "#" },
]

// ─────────────────────────────────────────────
// 7. TRANSACTION CATEGORIES (filter chips)
// ─────────────────────────────────────────────
export const TX_CATEGORIES = [
    "All",
    "Software",
    "Travel",
    "Meals",
    "Office",
    "Finance",
    "Equipment",
] as const

export type TxCategory = (typeof TX_CATEGORIES)[number]

// ─────────────────────────────────────────────
// 8. MOCK USER
// ─────────────────────────────────────────────
export const USER = {
    name: "Ana Torres",
    firstName: "Ana",
    lastName: "Torres",
    initials: "AT",
    email: "ana@techflow.com",
    phone: "+1 (555) 000-0000",
    role: "CFO at TechFlow",
    avatar: "/images/img_3.jpeg",
    company: "TechFlow",
}

// ─────────────────────────────────────────────
// 9. IMAGE PATHS
// ─────────────────────────────────────────────
export const IMAGES = {
    heroPhone: "/images/img_1.png",
    flightTicket: "/images/img_2.jpeg",
    avatar: "/images/img_3.jpeg",         // Ana Torres
    expenseSubmitted: "/images/img_4.jpeg",
    markAdams: "/images/img_5.jpeg",
    setBudget: "/images/img_6.jpeg",
}

// ─────────────────────────────────────────────
// 10. MOCK TRANSACTIONS
// ─────────────────────────────────────────────
export const MOCK_TRANSACTIONS = [
    {
        id: "TX-9982",
        merchant: "AWS Services",
        sub: "us-east-1",
        category: "Software",
        card: "Ana's Virtual ••4092",
        date: "Today, 10:24 AM",
        amount: "-$1,240.00",
        status: "cleared",
        img: IMAGES.expenseSubmitted,
    },
    {
        id: "TX-9981",
        merchant: "Lyft",
        sub: "Ride to airport",
        category: "Travel",
        card: "Travel Card ••1842",
        date: "Yesterday, 3:45 PM",
        amount: "-$42.50",
        status: "pending",
        img: IMAGES.markAdams,
    },
    {
        id: "TX-9980",
        merchant: "GitHub",
        sub: "Copilot seats",
        category: "Software",
        card: "Ana's Virtual ••4092",
        date: "Feb 19, 2026",
        amount: "-$240.00",
        status: "cleared",
        img: IMAGES.avatar,
    },
    {
        id: "TX-9979",
        merchant: "Sweetgreen",
        sub: "Team lunch",
        category: "Meals",
        card: "Office Card ••9911",
        date: "Feb 18, 2026",
        amount: "-$124.80",
        status: "cleared",
        img: IMAGES.flightTicket,
    },
    {
        id: "TX-9978",
        merchant: "Figma",
        sub: "Annual plan",
        category: "Software",
        card: "Ana's Virtual ••4092",
        date: "Feb 15, 2026",
        amount: "-$1,800.00",
        status: "cleared",
        img: IMAGES.setBudget,
    },
    {
        id: "TX-9977",
        merchant: "WeWork",
        sub: "Monthly lease",
        category: "Office",
        card: "Office Card ••9911",
        date: "Feb 14, 2026",
        amount: "-$4,500.00",
        status: "cleared",
        img: IMAGES.flightTicket,
    },
    {
        id: "TX-9976",
        merchant: "Delta Airlines",
        sub: "Flight to SF",
        category: "Travel",
        card: "Travel Card ••1842",
        date: "Feb 12, 2026",
        amount: "-$650.00",
        status: "cleared",
        img: IMAGES.avatar,
    },
    {
        id: "TX-9975",
        merchant: "Stripe",
        sub: "Payment gateway fee",
        category: "Finance",
        card: "Ana's Virtual ••4092",
        date: "Feb 10, 2026",
        amount: "-$85.50",
        status: "cleared",
        img: IMAGES.expenseSubmitted,
    },
]

// ─────────────────────────────────────────────
// 11. MOCK APPROVALS
// ─────────────────────────────────────────────
export const MOCK_APPROVALS = [
    {
        user: "Mark Adams",
        role: "VP Finance",
        amount: "$4,200.00",
        desc: "Q1 Campaign Setup",
        img: IMAGES.markAdams,
    },
    {
        user: "Sarah Jenkins",
        role: "Marketing",
        amount: "$850.50",
        desc: "Facebook Ads",
        img: IMAGES.avatar,
    },
    {
        user: "David Chen",
        role: "Engineering",
        amount: "$2,400.00",
        desc: "New MacBook Pro",
        img: IMAGES.expenseSubmitted,
    },
]

// ─────────────────────────────────────────────
// 12. MOCK DASHBOARD STATS
// ─────────────────────────────────────────────
export const MOCK_STATS = {
    totalSpend: "$45,231.89",
    totalSpendChange: "+20.1%",
    availableLimit: "$104,768.11",
    totalLimit: "$150,000.00",
    limitUsedPercent: 30,
    pendingApprovals: 12,
    urgentApprovals: 4,
    recentTransactionCount: 24,
    topCategory: "Software",
    topCategoryChange: "-4%",
    // Analytics page
    totalSpendMTD: "$124,500",
    totalSpendMTDChange: "+12.5%",
    avgTransaction: "$485.20",
    avgTransactionChange: "-2.4%",
    activeCards: 42,
    activeCardsChange: "+4",
    categorySpendTotal: "$87k",
    // Hero section rating
    heroRating: "4.6",
    heroReviews: "1,536",
}

// ─────────────────────────────────────────────
// 13. MOCK ANALYTICS DATA
// ─────────────────────────────────────────────
export const MONTHLY_SPEND = [
    { name: "Jan", total: 45000 },
    { name: "Feb", total: 52000 },
    { name: "Mar", total: 48000 },
    { name: "Apr", total: 61000 },
    { name: "May", total: 59000 },
    { name: "Jun", total: 68000 },
    { name: "Jul", total: 65000 },
]

export const CATEGORY_SPEND = [
    { name: "Software", value: 35000, color: COLORS.primary },
    { name: "Travel", value: 25000, color: "#111111" },
    { name: "Meals", value: 15000, color: "#888888" },
    { name: "Equipment", value: 12000, color: "#EEEEEE" },
]

// ─────────────────────────────────────────────
// 14. FOOTER LINKS
// ─────────────────────────────────────────────
export const FOOTER_LINKS: Record<string, string[]> = {
    Product: ["Platform", "Travel", "Expenses", "Cards", "Events"],
    Solutions: ["Finance Teams", "Travel Managers", "Travelers", "Small Business"],
    Company: ["About Us", "Careers", "Press", "Contact"],
    Resources: ["Blog", "Guides", "Help Center", "Status"],
}

// ─────────────────────────────────────────────
// 15. FEATURES SECTION
// ─────────────────────────────────────────────
export const FEATURES = [
    {
        title: "Global Travel Inventory",
        description:
            "Access the world's largest inventory of flights, hotels, trains, and cars.",
    },
    {
        title: "Automated Expenses",
        description:
            "Receipts match to transactions automatically. No manual entry required.",
    },
    {
        title: "Corporate Cards",
        description:
            "Issue physical and virtual cards with built-in policy controls.",
    },
    {
        title: "Policy & Approval",
        description:
            "Set granular policies and automate approvals to keep spend in check.",
    },
    {
        title: "Group Events",
        description:
            "Plan and manage company offsites and team gatherings effortlessly.",
    },
    {
        title: "24/7 Support",
        description:
            "Real human support available in 15 seconds, anywhere in the world.",
    },
]

// ─────────────────────────────────────────────
// 16. TESTIMONIALS
// ─────────────────────────────────────────────
export const TESTIMONIALS = [
    {
        quote:
            "Perk has completely transformed how we handle business travel. The platform is intuitive, and the support is incredible.",
        name: "Jane Doe",
        title: "CFO, TechCorp",
        initials: "JD",
    },
    {
        quote:
            "Finally, a tool that my team actually wants to use. Booking is fast, and expense reporting happens automatically.",
        name: "Mark Smith",
        title: "VP Operations, ScaleUp",
        initials: "MS",
    },
]

export const TESTIMONIAL_STAT = {
    rank: "#1",
    label: "Rated Travel Management Software",
    source: "on G2 Crowd",
}

// ─────────────────────────────────────────────
// 17. VALUE PROP ("Shadow Work") LIST
// ─────────────────────────────────────────────
export const VALUE_PROP_ITEMS = [
    "Endless booking and rebooking",
    "Uploading receipts manually",
    "Chasing approvals",
    "Reconciling messy data",
]

// ─────────────────────────────────────────────
// 18. TOAST MESSAGES
// ─────────────────────────────────────────────
export const TOAST = {
    signOut: {
        title: "Signed out successfully",
    },
    bookDemo: {
        title: "Demo Requested",
        description: "Our team will reach out to you shortly.",
    },
    accountAccess: {
        title: "Account Access",
        description: "Securely logging into your profile...",
    },
    loginAuth: {
        title: "Authenticating",
        description: "Verifying your credentials...",
    },
    ssoGoogle: {
        title: "SSO Login",
        description: "Connecting to your Google Workspace account...",
    },
    ssoMicrosoft: {
        title: "SSO Login",
        description: "Connecting to your Microsoft Azure/365 account...",
    },
    exportStarted: {
        title: "Export Started",
        description: "Your CSV is generating and will download shortly.",
    },
    exportReport: {
        title: "Exporting Report",
        description:
            "Your analytics dashboard data is being compiled into a PDF.",
    },
    fetchTransactions: {
        title: "Fetching transactions",
        description: "Loading the next page of results...",
    },
    cardReveal: {
        title: "Verification Required",
        description:
            "Please enter your password or use Touch ID to reveal card numbers.",
    },
    cardSettings: {
        title: "Card Settings",
        description: "Opening configuration drawer...",
    },
    cardUnlocked: {
        title: "Card Unlocked",
        description: "This virtual card is now active and ready for transactions.",
    },
    cardRequest: {
        title: "Request Submitted",
        description:
            "Your physical card is being printed and will arrive in 3-5 business days.",
    },
    passwordUpdated: {
        title: "Password Updated",
        description: "Your new password has been saved securely.",
    },
    tfaSetup: {
        title: "2FA Setup Started",
        description:
            "Scan the QR code with your authenticator app on the next screen.",
    },
    apiKeyGenerated: {
        title: "New API Key Generated",
        description: "Your previous key will be expired in 24 hours.",
    },
    apiKeyCopied: {
        title: "Copied to clipboard",
        description: "API Secret Key copied to clipboard.",
    },
    avatarUpdated: {
        title: "Profile updated",
        description: "Your new avatar has been applied successfully.",
    },
    avatarRemoved: {
        title: "Avatar removed",
        description: "Your avatar has been reset to the default initials.",
    },
    accountDeletion: {
        title: "Account Deletion Requested",
        description: `A secure link has been sent to ${USER.email} to confirm deletion.`,
    },
    supportTicket: {
        title: "Support ticket created",
        description: "Ticket #4182 has been opened. We will respond shortly.",
    },
    notFoundDashboard: {
        title: "Reticulating Splines",
        description: "Attempting to return to the dashboard...",
    },
    notFoundGoBack: {
        title: "Time Travel Initiated",
        description: "Going back to the previous sector...",
    },
}

// ─────────────────────────────────────────────
// 19. SETTINGS — Active Sessions (mock)
// ─────────────────────────────────────────────
export const MOCK_SESSIONS = [
    {
        device: "Mac OS • Chrome",
        location: "San Francisco, CA",
        status: "Active Now",
        isCurrent: true,
        type: "laptop" as const,
    },
    {
        device: "iPhone 14 Pro • iOS App",
        location: "San Francisco, CA",
        status: "Last active 2h ago",
        isCurrent: false,
        type: "mobile" as const,
    },
]

// ─────────────────────────────────────────────
// 20. SETTINGS — API
// ─────────────────────────────────────────────
export const API_CONFIG = {
    /** Placeholder production key for display purposes */
    placeholderKey: "pk_live_51XXXXXXXXXXXXXXX",
    /** Monthly API request quota */
    monthlyQuota: 100_000,
    /** Current usage */
    currentUsage: 42_500,
    /** Quota reset date */
    quotaResetDate: "Mar 01, 2026",
}

// ─────────────────────────────────────────────
// 21. SETTINGS — Localization defaults
// ─────────────────────────────────────────────
export const LOCALE_DEFAULTS = {
    language: "English (US)",
    timezone: "(UTC-08:00) Pacific Time (US & Canada)",
    currency: "USD",
    dateFormat: "MM/DD/YYYY",
}

// ─────────────────────────────────────────────
// 22. CORPORATE CARDS (mock)
// ─────────────────────────────────────────────
export const MOCK_CARDS = {
    virtual: [
        {
            last4: "4092",
            label: "Software Subscriptions",
            cardholder: USER.name,
            theme: "dark" as const,
            status: "active" as const,
            spent: 8450,
            limit: 10000,
        },
        {
            last4: "8823",
            label: "Travel & Meals",
            cardholder: USER.name,
            theme: "lime" as const,
            status: "active" as const,
            spent: 124.5,
            limit: 2000,
        },
        {
            last4: "1994",
            label: "Marketing Ads",
            cardholder: USER.name,
            theme: "gray" as const,
            status: "locked" as const,
            spent: 0,
            limit: 5000,
        },
    ],
}

// ─────────────────────────────────────────────
// 23. SUPPORT — FAQ entries
// ─────────────────────────────────────────────
export const FAQ_ITEMS = [
    {
        question: "How do I issue a new virtual card?",
        answer:
            'Navigate to the Corporate Cards tab, switch to Virtual Cards, and click the "Issue New Card" button in the top right corner. You can set customized spending limits immediately upon creation.',
    },
    {
        question: "What happens when an employee reimbursement is rejected?",
        answer:
            'The employee will receive an automated email notification detailing the reason for rejection (if provided). The request will be permanently marked as "Rejected" in your historical log.',
    },
    {
        question: "How do I reset my API Secret Key?",
        answer:
            'Head over to the API Access tab in settings and click "Generate New Key". Beware that revoking an active key will immediately disconnect any active integrations using it.',
    },
]
