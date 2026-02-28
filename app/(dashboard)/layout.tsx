import { MainSidebar } from "@/components/layout/sidebar";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { COLORS } from "@/lib/gen-variable";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <SidebarProvider>
            <MainSidebar />
            <SidebarInset className={`bg-[${COLORS.background}] min-h-screen`}>
                {children}
            </SidebarInset>
        </SidebarProvider>
    );
}
