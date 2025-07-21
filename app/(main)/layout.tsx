"use client";
import { Container } from "@/components/core/_components/container";
import Spinner from "@/components/core/_components/spinner";
import { SiteHeader } from "@/components/main/_components/site-header";
import SiteSidebar from "@/components/main/_components/site-sidebar";
import SearchCommand from "@/components/tools/_components/search-command";
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation";
const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  if (isLoading) {
    return (
      <Container
        size={"2xl"}
        height={"full"}
        padding={"md"}
        alignment={"center"}
      >
        <Spinner size="xxl" />
      </Container>
    );
  }

  if (!isAuthenticated) {
    return redirect("/");
  }
  return (
    <SidebarProvider>
      <SiteSidebar />
      <SidebarInset>
        <SiteHeader />
        <main className="flex-1 h-full overflow-y-auto">
          <SearchCommand />
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default MainLayout;
