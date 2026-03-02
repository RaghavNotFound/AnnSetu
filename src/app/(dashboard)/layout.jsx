"use client";

import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import AuthGuard from "@/components/AuthGuard";

export default function DashboardLayout({ children }) {
    return (
        <AuthGuard>
            <div className="flex min-h-screen bg-[#F0F2F5]">
                <Sidebar />
                <div className="w-[220px] flex-shrink-0" />
                <div className="flex-1 min-w-0 flex flex-col">
                    <Header />
                    <main className="flex-1 overflow-x-hidden overflow-y-auto" style={{ padding: "24px 28px" }}>
                        {children}
                    </main>
                </div>
            </div>
        </AuthGuard>
    );
}
