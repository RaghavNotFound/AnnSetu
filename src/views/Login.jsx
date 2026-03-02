"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { AlertCircle, Loader2, Eye, EyeOff } from "lucide-react";

export default function Login() {
    const { login, user, loading: authLoading } = useAuth();
    const router = useRouter();

    const [identifier, setIdentifier] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
        if (!authLoading && user) {
            router.replace("/");
        }
    }, [authLoading, user, router]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSubmitting(true);

        await new Promise((r) => setTimeout(r, 400));

        const result = login(identifier.trim(), password);

        if (result.success) {
            router.push("/");
        } else {
            setError(result.message);
            setSubmitting(false);
        }
    };

    if (authLoading) return null;
    if (user) return null;

    return (
        <div className="min-h-screen flex items-center justify-center bg-white px-4">
            <div className="w-full max-w-[360px]">
                {/* Heading */}
                <p className="text-base text-gray-400 mb-1">
                    Please enter your details
                </p>
                <h1 className="text-3xl font-bold text-gray-900 mb-8">
                    Welcome back
                </h1>

                {/* Error */}
                {error && (
                    <div className="flex items-center gap-2.5 bg-red-50 border border-red-100 text-red-600 text-sm rounded-lg px-4 py-3 mb-5">
                        <AlertCircle size={16} className="shrink-0" />
                        <span>{error}</span>
                    </div>
                )}

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    {/* Email / Phone */}
                    <input
                        id="login-identifier"
                        type="text"
                        required
                        autoFocus
                        value={identifier}
                        onChange={(e) => setIdentifier(e.target.value)}
                        placeholder="Email address or Mobile number"
                        autoComplete="username"
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-colors"
                    />

                    {/* Password */}
                    <div className="relative">
                        <input
                            id="login-password"
                            type={showPassword ? "text" : "password"}
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            autoComplete="current-password"
                            className="w-full px-4 py-3 pr-11 bg-white border border-gray-300 rounded-lg text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-colors"
                        />
                        <button
                            type="button"
                            tabIndex={-1}
                            onClick={() => setShowPassword((v) => !v)}
                            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                            aria-label={
                                showPassword ? "Hide password" : "Show password"
                            }
                        >
                            {showPassword ? (
                                <EyeOff size={18} />
                            ) : (
                                <Eye size={18} />
                            )}
                        </button>
                    </div>

                    {/* Remember + Forgot */}
                    <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center gap-2 text-gray-600 cursor-pointer select-none">
                            <input
                                type="checkbox"
                                className="accent-emerald-600 w-4 h-4 rounded border-gray-300"
                            />
                            Remember for 30 days
                        </label>
                        <a
                            href="#"
                            className="text-emerald-600 font-medium hover:underline"
                        >
                            Forgot password
                        </a>
                    </div>

                    {/* Submit */}
                    <button
                        id="login-submit"
                        type="submit"
                        disabled={submitting}
                        className="w-full flex items-center justify-center gap-2 py-3
                            bg-emerald-600 text-white text-sm font-semibold rounded-lg
                            hover:bg-emerald-700 active:bg-emerald-800
                            focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:ring-offset-2
                            transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-1"
                    >
                        {submitting ? (
                            <>
                                <Loader2
                                    size={18}
                                    className="animate-spin"
                                />
                                Signing in…
                            </>
                        ) : (
                            "Sign in"
                        )}
                    </button>
                </form>

                {/* Footer */}
                <p className="text-center text-sm text-gray-500 mt-8">
                    Don&apos;t have an account?{" "}
                    <a
                        href="#"
                        className="text-emerald-600 font-medium hover:underline"
                    >
                        Contact Admin
                    </a>
                </p>

                {/* Dev credentials */}
                <div className="mt-6 bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 text-xs text-amber-700">
                    <p className="font-semibold mb-1">🔑 Dev Credentials</p>
                    <div className="grid grid-cols-[auto_1fr_1fr] gap-x-3 gap-y-0.5">
                        <span className="font-medium">Admin</span>
                        <span>admin@annsetu.com</span>
                        <span>admin123</span>
                        <span className="font-medium">Manager</span>
                        <span>manager@annsetu.com</span>
                        <span>manager123</span>
                        <span className="font-medium">Operator</span>
                        <span>9000000001</span>
                        <span>operator123</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
