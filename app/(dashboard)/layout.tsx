import { MainSidebar } from "@/components/layout/sidebar";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <SidebarProvider>
            <MainSidebar />
            <SidebarInset className="bg-[#F3F4ED] min-h-screen">
                {children}
            </SidebarInset>
        </SidebarProvider>
    );
}
