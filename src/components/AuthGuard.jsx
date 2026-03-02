"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

/**
 * Wrap any page/layout that requires authentication.
 * While checking, shows a simple loading spinner.
 * If the user has no valid token, redirects to /login.
 */
export default function AuthGuard({ children }) {
    const { user, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!loading && !user) {
            router.replace("/login");
        }
    }, [loading, user, router]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#F0F2F5]">
                <div className="flex flex-col items-center gap-3">
                    <div className="w-10 h-10 border-4 border-[#33cc33] border-t-transparent rounded-full animate-spin" />
                    <p className="text-sm text-gray-500 font-medium">Loading…</p>
                </div>
            </div>
        );
    }

    if (!user) return null; // will redirect above

    return children;
}
