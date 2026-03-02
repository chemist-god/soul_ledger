// ============================================================
//  gen-variable.ts — Central Application Constants
//  Single source of truth for all hardcoded values.
//  Import what you need: import { COLORS, ROUTES, USER } from "@/lib/gen-variable"
// ============================================================

import {
    LayoutDashboard,
    CheckSquare,
    Globe2,
    BarChart3,
    Settings2,
    Flame,
    ShieldCheck,
    Zap,
    Trophy,
    Users,
    Target,
    TrendingUp,
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
            date: "2026-03-01",
            title: "Initial Beta Release — Seed",
            notes: [
                "Core dashboard with active goals and stakes overview",
                "Goal creation with deadline and stake amount",
                "My Tasks view with status tracking (Active, Completed, Failed)",
                "Community marketplace to explore and stake on public goals",
                "Achievement badges and gamification system",
                "Analytics dashboard: success rate, streaks, and progress charts",
                "Settings: account, notifications, wallet connection, security",
                "Public landing page with hero, features, and social proof",
                "Authentication flows: login, sign-up, forgot/reset password",
            ],
        },
    ]

// ─────────────────────────────────────────────
// 2. BRAND
// ─────────────────────────────────────────────
export const BRAND = {
    /** Short display name shown in nav and cards */
    name: "SmartTodo",
    /** Capitalised display name */
    displayName: "Smart Todo",
    /** Full legal / marketing name */
    fullName: "SmartTodo",
    /** One-line tagline */
    tagline: "Set goals. Stake your commitment. Prove yourself.",
    /** Footer blurb */
    description:
        "The accountability platform that turns your goals into commitments. Stake money, invite friends, and prove them wrong.",
    /** Copyright entity */
    copyright: "SmartTodo",
}

// ─────────────────────────────────────────────
// 3. APP METADATA (used in Next.js Metadata export)
// ─────────────────────────────────────────────
export const META = {
    title: `Smart Todo — Stake Your Goals. Prove Yourself.`,
    description:
        "Set tasks and long-term goals, stake money as proof of commitment, invite accountability partners, and join a community that holds each other to their word.",
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
    tasks: "/tasks",
    community: "/community",
    analytics: "/analytics",
    docs: "/docs",
    settings: "/settings",
    settingsWallet: "/settings/wallet",
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
        title: "My Tasks",
        url: ROUTES.tasks,
        icon: CheckSquare,
    },
    {
        title: "Community",
        url: ROUTES.community,
        icon: Globe2,
    },
    {
        title: "Analytics",
        url: ROUTES.analytics,
        icon: BarChart3,
    },
]

export const NAV_SETTINGS = [
    {
        title: "Settings",
        url: ROUTES.settings,
        icon: Settings2,
    },
]

/** Header desktop/mobile nav links */
export const NAV_HEADER = [
    { label: "How it Works", url: "#features" },
    { label: "Community", url: "#" },
    { label: "Leaderboard", url: "#" },
    { label: "Pricing", url: "#" },
]

// ─────────────────────────────────────────────
// 7. GOAL / TASK CATEGORIES (filter chips)
// ─────────────────────────────────────────────
export const GOAL_CATEGORIES = [
    "All",
    "Fitness",
    "Learning",
    "Finance",
    "Career",
    "Health",
    "Creativity",
    "Mindfulness",
] as const

export type GoalCategory = (typeof GOAL_CATEGORIES)[number]

// ─────────────────────────────────────────────
// 8. MOCK USER
// ─────────────────────────────────────────────
export const USER = {
    name: "Kofi Mensah",
    firstName: "Kofi",
    lastName: "Mensah",
    initials: "KM",
    email: "kofi@smarttodo.app",
    phone: "+1 (555) 000-0000",
    role: "The Hustler",
    avatar: "/images/img_3.jpeg",
    company: "SmartTodo",
    /** Total $ staked across all goals */
    totalStaked: "$420.00",
    /** Lifetime goal success rate */
    successRate: 78,
    /** Current streak in days */
    streak: 14,
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
// 10. MOCK GOALS / TASKS
// ─────────────────────────────────────────────
export type GoalStatus = "active" | "completed" | "failed" | "pending"

export const MOCK_GOALS = [
    {
        id: "GOAL-001",
        title: "Read Rich Dad Poor Dad",
        description: "Finish the entire book and write a 1-page summary.",
        category: "Learning",
        deadline: "Mar 03, 2026",
        daysLeft: 2,
        stake: "$50.00",
        status: "active" as GoalStatus,
        progress: 60,
        img: IMAGES.avatar,
        isPublic: true,
    },
    {
        id: "GOAL-002",
        title: "Gym — Consistent for 30 Days",
        description: "Work out at least 5x per week for one full month.",
        category: "Fitness",
        deadline: "Mar 31, 2026",
        daysLeft: 30,
        stake: "$120.00",
        status: "active" as GoalStatus,
        progress: 13,
        img: IMAGES.markAdams,
        isPublic: true,
    },
    {
        id: "GOAL-003",
        title: "Complete HTML & CSS Course",
        description: "Finish the full curriculum and build a portfolio project.",
        category: "Learning",
        deadline: "Mar 21, 2026",
        daysLeft: 20,
        stake: "$75.00",
        status: "active" as GoalStatus,
        progress: 35,
        img: IMAGES.expenseSubmitted,
        isPublic: false,
    },
    {
        id: "GOAL-004",
        title: "No Sugar for 2 Weeks",
        description: "Zero added sugar, fruit allowed. Log meals daily.",
        category: "Health",
        deadline: "Feb 28, 2026",
        daysLeft: 0,
        stake: "$40.00",
        status: "completed" as GoalStatus,
        progress: 100,
        img: IMAGES.flightTicket,
        isPublic: true,
    },
    {
        id: "GOAL-005",
        title: "Launch a Side-Project Landing Page",
        description: "Design and ship a fully live landing page with a waitlist.",
        category: "Career",
        deadline: "Feb 15, 2026",
        daysLeft: 0,
        stake: "$100.00",
        status: "failed" as GoalStatus,
        progress: 55,
        img: IMAGES.setBudget,
        isPublic: false,
    },
]

// ─────────────────────────────────────────────
// 11. MOCK COMMUNITY STAKERS
// ─────────────────────────────────────────────
export const MOCK_COMMUNITY_GOALS = [
    {
        user: "Ama Owusu",
        role: "Habit Builder",
        stake: "$80.00",
        goal: "Meditate 10 mins daily for 21 days",
        category: "Mindfulness",
        backers: 3,
        img: IMAGES.markAdams,
        daysLeft: 18,
    },
    {
        user: "James Osei",
        role: "The Student",
        stake: "$60.00",
        goal: "Finish Python for Everybody Course",
        category: "Learning",
        backers: 1,
        img: IMAGES.avatar,
        daysLeft: 12,
    },
    {
        user: "Nana Brew",
        role: "The Hustler",
        stake: "$150.00",
        goal: "Run 5K every day for a month",
        category: "Fitness",
        backers: 7,
        img: IMAGES.expenseSubmitted,
        daysLeft: 25,
    },
]

// ─────────────────────────────────────────────
// 12. MOCK DASHBOARD STATS
// ─────────────────────────────────────────────
export const MOCK_STATS = {
    // Dashboard overview
    activeGoals: 3,
    activeGoalsChange: "+1 this week",
    totalStaked: "$245.00",
    totalStakedChange: "+$75 this week",
    successRate: 78,
    successRateChange: "+3%",
    currentStreak: 14,
    longestStreak: 21,
    goalsCompletedAllTime: 12,
    goalsFailedAllTime: 3,
    // Analytics page
    totalEarned: "$340.00",
    totalEarnedChange: "+12.5%",
    avgGoalDuration: "18 days",
    avgStakeAmount: "$65.00",
    communityStakers: 4,
    // Hero section social proof
    heroRating: "4.8",
    heroReviews: "2,140",
    heroUsersCount: "12,000+",
}

// ─────────────────────────────────────────────
// 13. MOCK ANALYTICS DATA
// ─────────────────────────────────────────────
export const MONTHLY_GOALS = [
    { name: "Sep", completed: 2, failed: 1 },
    { name: "Oct", completed: 3, failed: 0 },
    { name: "Nov", completed: 4, failed: 2 },
    { name: "Dec", completed: 5, failed: 1 },
    { name: "Jan", completed: 6, failed: 1 },
    { name: "Feb", completed: 7, failed: 0 },
    { name: "Mar", completed: 4, failed: 1 },
]

export const GOAL_CATEGORY_BREAKDOWN = [
    { name: "Fitness", value: 5, color: COLORS.primary },
    { name: "Learning", value: 4, color: "#111111" },
    { name: "Health", value: 2, color: "#888888" },
    { name: "Career", value: 3, color: "#EEEEEE" },
]

// ─────────────────────────────────────────────
// 14. FOOTER LINKS
// ─────────────────────────────────────────────
export const FOOTER_LINKS: Record<string, string[]> = {
    Product: ["How it Works", "Staking System", "Community", "Analytics", "Achievements"],
    Solutions: ["Students", "Freelancers", "Habit Builders", "Team Challenges"],
    Company: ["About Us", "Manifesto", "Blog", "Contact"],
    Resources: ["FAQ", "Help Center", "Changelog", "Status"],
}

// ─────────────────────────────────────────────
// 15. FEATURES SECTION
// ─────────────────────────────────────────────
export const FEATURES = [
    {
        title: "Self-Staking Goals",
        description:
            "Put your money where your mouth is. Stake an amount on any goal — if you succeed, you keep it all.",
    },
    {
        title: "Financial Accountability",
        description:
            "Failing a goal forfeits your stake, creating a real financial consequence that makes you think twice before quitting.",
    },
    {
        title: "Accountability Partners",
        description:
            "Invite friends to vouch for your goals or stake money on your success. Shared commitment, shared victory.",
    },
    {
        title: "Community Marketplace",
        description:
            "Discover other users' public goals and stake on them. Support a stranger, earn if they succeed.",
    },
    {
        title: "Streaks & Achievements",
        description:
            "Unlock badges, maintain streaks, and build a track record that proves your discipline over time.",
    },
    {
        title: "Progress Analytics",
        description:
            "Track your success rate, total staked, goals completed, and category trends with a beautiful analytics dashboard.",
    },
]

// ─────────────────────────────────────────────
// 16. TESTIMONIALS
// ─────────────────────────────────────────────
export const TESTIMONIALS = [
    {
        quote:
            "I finally finished reading 12 books this year. Staking $40 on each one was the only thing that actually made me follow through. Smart Todo changed everything for me.",
        name: "Kofi Mensah",
        title: "Software Engineer & Habit Builder",
        initials: "KM",
    },
    {
        quote:
            "I dropped out of the gym three times before. Then I staked $120, made it public, and had 6 friends watching me. I didn't miss a single day. The accountability is real.",
        name: "Ama Owusu",
        title: "Freelance Designer & Fitness Enthusiast",
        initials: "AO",
    },
]

export const TESTIMONIAL_STAT = {
    rank: "78%",
    label: "of staked goals are completed",
    source: "vs 8% industry average for self-set goals",
}

// ─────────────────────────────────────────────
// 17. VALUE PROP ("Shadow Work") LIST
// ─────────────────────────────────────────────
export const VALUE_PROP_ITEMS = [
    "Setting goals you never follow through on",
    "Losing motivation after day one",
    "Saying \"I'll start Monday\" again and again",
    "Letting yourself down with no consequences",
]

// ─────────────────────────────────────────────
// 18. TOAST MESSAGES
// ─────────────────────────────────────────────
export const TOAST = {
    signOut: {
        title: "Signed out. See you tomorrow!",
    },
    getStarted: {
        title: "Welcome aboard!",
        description: "Let's set your first goal and stake it.",
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
        description: "Connecting with Google...",
    },
    goalCreated: {
        title: "Goal Staked! 🔥",
        description: "Your commitment is locked in. Don't let yourself down.",
    },
    goalCompleted: {
        title: "Goal Completed! 🎉",
        description: "You proved yourself. Your stake has been returned.",
    },
    goalFailed: {
        title: "Goal Failed",
        description: "Your stake has been forfeited. Get back up and try again.",
    },
    stakeOnFriend: {
        title: "Stake Placed!",
        description: "You're now backing this person. Check back for updates.",
    },
    exportStarted: {
        title: "Exporting Progress",
        description: "Your analytics report is generating and will download shortly.",
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
        title: "Lost in the void...",
        description: "Attempting to return to the dashboard...",
    },
    notFoundGoBack: {
        title: "Going Back",
        description: "Returning to the previous page...",
    },
    walletConnected: {
        title: "Wallet Connected! 💰",
        description: "Your wallet is ready for staking.",
    },
}

// ─────────────────────────────────────────────
// 19. SETTINGS — Active Sessions (mock)
// ─────────────────────────────────────────────
export const MOCK_SESSIONS = [
    {
        device: "Mac OS • Chrome",
        location: "Accra, Ghana",
        status: "Active Now",
        isCurrent: true,
        type: "laptop" as const,
    },
    {
        device: "iPhone 15 Pro • Safari",
        location: "Accra, Ghana",
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
    placeholderKey: "st_live_51XXXXXXXXXXXXXXX",
    /** Monthly API request quota */
    monthlyQuota: 100_000,
    /** Current usage */
    currentUsage: 18_200,
    /** Quota reset date */
    quotaResetDate: "Apr 01, 2026",
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
// 22. ACHIEVEMENTS (mock)
// ─────────────────────────────────────────────
export const MOCK_ACHIEVEMENTS = [
    {
        id: "first-stake",
        title: "First Stake",
        description: "Staked money on your very first goal.",
        icon: "🔥",
        unlockedAt: "Mar 01, 2026",
        unlocked: true,
    },
    {
        id: "seven-day-streak",
        title: "7-Day Streak",
        description: "Active on the platform 7 days in a row.",
        icon: "⚡",
        unlockedAt: "Mar 07, 2026",
        unlocked: true,
    },
    {
        id: "community-backer",
        title: "Community Backer",
        description: "Staked on another user's goal for the first time.",
        icon: "🤝",
        unlockedAt: "Mar 08, 2026",
        unlocked: true,
    },
    {
        id: "double-down",
        title: "Double Down",
        description: "Complete 2 goals in the same week.",
        icon: "🏆",
        unlockedAt: null,
        unlocked: false,
    },
    {
        id: "big-staker",
        title: "Big Staker",
        description: "Stake $100+ on a single goal.",
        icon: "💰",
        unlockedAt: null,
        unlocked: false,
    },
]

// ─────────────────────────────────────────────
// 23. SUPPORT — FAQ entries
// ─────────────────────────────────────────────
export const FAQ_ITEMS = [
    {
        question: "What happens to my stake if I fail a goal?",
        answer:
            "If you fail to complete a goal by its deadline, your staked amount is forfeited. If friends staked on you succeeding, they get their money back. Smart Todo earns a small commission on failed stakes to keep the platform running.",
    },
    {
        question: "How do I mark a goal as complete?",
        answer:
            "Navigate to 'My Tasks', open your active goal, and click 'Mark as Complete'. You may be prompted to upload a proof photo or note. Once submitted, your stake is released back to your wallet.",
    },
    {
        question: "Can I withdraw my stake before the deadline?",
        answer:
            "Early withdrawal is treated as a forfeit. Your stake will be deducted as if you failed the goal. This is by design — real commitment means no easy exits.",
    },
    {
        question: "How does community staking work?",
        answer:
            "When you make a goal public, anyone on the platform can stake on your success. If you complete the goal, your backers receive a proportional share of the earnings. If you fail, backers get their money back and Smart Todo takes a small fee.",
    },
]
