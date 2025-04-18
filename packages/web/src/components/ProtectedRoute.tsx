import React, { useMemo } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/hooks/use-auth";
import { SidebarInset, SidebarProvider } from "./ui/sidebar";
import { AppSidebar } from "./app-sidebar";
import { TopBar } from "@/components/top-bar-with-realtime";
import { useIsMobile } from "@/hooks/use-mobile";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { user, isAuthenticated } = useAuth();
  const isMobile = useIsMobile();

  if (!isAuthenticated || !user) {
    console.log("Not authenticated or no user");
    return <Navigate to="/login" />;
  }

  // Memoize the sidebar to prevent unnecessary rerenders
  const sidebar = useMemo(() => {
    return !isMobile && <AppSidebar className="hidden md:flex h-screen" />;
  }, [isMobile]);

  return (
    <SidebarProvider>
      <div className="flex min-h-screen flex-col overflow-hidden bg-background">
        <div className="flex w-screen">
          {sidebar}
          <SidebarInset className="flex-1 w-full">
            <TopBar />
            <main className="flex-1 overflow-y-auto p-2 sm:p-4 pb-16 md:pb-4">
              <div className="max-w-7xl mx-auto">{children}</div>
            </main>
          </SidebarInset>
        </div>
      </div>
    </SidebarProvider>
  );
}
