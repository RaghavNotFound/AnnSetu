"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import {
    Mail,
    Phone,
    Lock,
    AlertCircle,
    Loader2,
    Eye,
    EyeOff,
    Thermometer,
    BarChart3,
    Users,
    Wifi,
} from "lucide-react";

const FEATURES = [
    { icon: Wifi, label: "Real-time IoT", desc: "Live sensor monitoring" },
    { icon: BarChart3, label: "Smart Analytics", desc: "Inventory insights" },
    { icon: Thermometer, label: "Climate Control", desc: "Temperature tracking" },
    { icon: Users, label: "Farmer Portal", desc: "Easy management" },
];

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
        <div className="min-h-screen flex bg-[#060d06]">
            {/* ───── Left panel — immersive branding ───── */}
            <div className="hidden lg:flex lg:w-[55%] relative overflow-hidden items-center justify-center">
                {/* Rich gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0a1a0a] via-[#143214] to-[#1a4a1a]" />

                {/* Subtle grid overlay */}
                <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
                        backgroundSize: "60px 60px",
                    }}
                />

                {/* Floating orbs */}
                <div className="absolute top-[10%] left-[15%] w-72 h-72 rounded-full bg-emerald-500/10 blur-3xl animate-float" />
                <div className="absolute bottom-[15%] right-[10%] w-96 h-96 rounded-full bg-green-400/8 blur-3xl animate-float-reverse" />
                <div className="absolute top-[55%] left-[60%] w-48 h-48 rounded-full bg-teal-400/10 blur-2xl animate-float-slow" />

                {/* Decorative ring */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-white/[0.03] animate-spin-slow" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] rounded-full border border-white/[0.05]" />

                {/* Content */}
                <div className="relative z-10 max-w-lg px-14">
                    {/* Logo with glow */}
                    <div className="relative w-20 h-20 mb-10">
                        <div className="absolute inset-0 bg-emerald-400/20 rounded-2xl blur-xl" />
                        <div className="relative w-20 h-20 bg-gradient-to-br from-emerald-400/20 to-emerald-600/10 backdrop-blur-sm border border-white/10 rounded-2xl flex items-center justify-center">
                            <img
                                src="/ann-setu-logo.svg"
                                alt="Ann Setu"
                                className="w-12 h-12 brightness-0 invert"
                            />
                        </div>
                    </div>

                    <h1 className="text-5xl font-extrabold text-white leading-tight tracking-tight mb-3">
                        Ann Setu
                    </h1>
                    <p className="text-lg text-emerald-100/50 font-medium mb-2">
                        Cold Storage Intelligence Platform
                    </p>
                    <p className="text-[15px] text-white/35 leading-relaxed max-w-sm">
                        Monitor inventory, loading docks, IoT sensors and billing
                        from one unified dashboard.
                    </p>

                    {/* Feature cards */}
                    <div className="mt-12 grid grid-cols-2 gap-3">
                        {FEATURES.map((f) => {
                            const Icon = f.icon;
                            return (
                                <div
                                    key={f.label}
                                    className="group flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm hover:bg-white/[0.06] hover:border-white/[0.1] transition-all duration-300 cursor-default"
                                >
                                    <div className="shrink-0 w-9 h-9 rounded-lg bg-emerald-500/15 flex items-center justify-center mt-0.5 group-hover:bg-emerald-500/25 transition-colors duration-300">
                                        <Icon size={16} className="text-emerald-400" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-white/80 group-hover:text-white transition-colors">
                                            {f.label}
                                        </p>
                                        <p className="text-xs text-white/30 mt-0.5">
                                            {f.desc}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* ───── Right panel — login form ───── */}
            <div className="flex-1 flex items-center justify-center px-6 py-12 bg-gradient-to-br from-gray-50 via-white to-emerald-50/30 relative">
                {/* Subtle top-right accent glow */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

                <div className="w-full max-w-md relative z-10">
                    {/* Mobile logo */}
                    <div className="flex lg:hidden flex-col items-center mb-8">
                        <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/20 mb-3">
                            <img
                                src="/ann-setu-logo.svg"
                                alt="Ann Setu"
                                className="w-9 h-9 brightness-0 invert"
                            />
                        </div>
                        <h2 className="text-xl font-bold text-gray-800">
                            Ann Setu
                        </h2>
                    </div>

                    {/* Form card */}
                    <div className="animate-fadeInUp bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl shadow-gray-200/60 border border-gray-100/80 p-8 sm:p-10">
                        <h2 className="text-2xl font-bold text-gray-900 mb-1">
                            Welcome back
                        </h2>
                        <p className="text-sm text-gray-400 mb-8">
                            Sign in with your email or mobile number
                        </p>

                        {/* Error banner */}
                        {error && (
                            <div className="flex items-center gap-2 bg-red-50 border border-red-200 text-red-600 text-sm rounded-xl px-4 py-3 mb-6 animate-fadeInUp">
                                <AlertCircle size={16} className="shrink-0" />
                                {error}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                            {/* Identifier */}
                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-2">
                                    Email or Mobile Number
                                </label>
                                <div className="relative group">
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-emerald-500 transition-colors">
                                        {/^\d/.test(identifier) ? (
                                            <Phone size={18} />
                                        ) : (
                                            <Mail size={18} />
                                        )}
                                    </span>
                                    <input
                                        id="login-identifier"
                                        type="text"
                                        required
                                        value={identifier}
                                        onChange={(e) =>
                                            setIdentifier(e.target.value)
                                        }
                                        placeholder="you@example.com  or  9876543210"
                                        autoComplete="username"
                                        className="w-full pl-12 pr-4 py-3.5 bg-gray-50/80 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-400 focus:bg-white transition-all duration-200 placeholder:text-gray-400"
                                    />
                                </div>
                            </div>

                            {/* Password */}
                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-2">
                                    Password
                                </label>
                                <div className="relative group">
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-emerald-500 transition-colors">
                                        <Lock size={18} />
                                    </span>
                                    <input
                                        id="login-password"
                                        type={showPassword ? "text" : "password"}
                                        required
                                        value={password}
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                        placeholder="Enter your password"
                                        autoComplete="current-password"
                                        className="w-full pl-12 pr-12 py-3.5 bg-gray-50/80 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-400 focus:bg-white transition-all duration-200 placeholder:text-gray-400"
                                    />
                                    <button
                                        type="button"
                                        tabIndex={-1}
                                        onClick={() =>
                                            setShowPassword((v) => !v)
                                        }
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition"
                                    >
                                        {showPassword ? (
                                            <EyeOff size={18} />
                                        ) : (
                                            <Eye size={18} />
                                        )}
                                    </button>
                                </div>
                            </div>

                            {/* Remember + Forgot */}
                            <div className="flex items-center justify-between text-sm">
                                <label className="flex items-center gap-2 text-gray-500 cursor-pointer select-none">
                                    <input
                                        type="checkbox"
                                        className="accent-emerald-500 w-4 h-4 rounded"
                                    />
                                    Remember me
                                </label>
                                <a
                                    href="#"
                                    className="text-emerald-600 hover:text-emerald-700 font-medium hover:underline transition-colors"
                                >
                                    Forgot password?
                                </a>
                            </div>

                            {/* Submit */}
                            <button
                                id="login-submit"
                                type="submit"
                                disabled={submitting}
                                className="w-full flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-emerald-500 to-green-500 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-green-600 hover:shadow-lg hover:shadow-emerald-500/25 hover:-translate-y-0.5 active:translate-y-0 active:shadow-md transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
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
                                    "Sign In"
                                )}
                            </button>
                        </form>

                        {/* Footer */}
                        <p className="text-center text-sm text-gray-400 mt-8">
                            Don&apos;t have an account?{" "}
                            <a
                                href="#"
                                className="text-emerald-600 font-medium hover:underline"
                            >
                                Contact Admin
                            </a>
                        </p>
                    </div>

                    {/* Dev credentials */}
                    <div className="animate-fadeInUp-delay mt-5 bg-amber-50/80 backdrop-blur-sm border border-amber-200/60 rounded-2xl px-5 py-4 text-xs text-amber-700">
                        <p className="font-semibold mb-1.5">🔑 Dev Credentials</p>
                        <div className="grid grid-cols-[auto_1fr_1fr] gap-x-3 gap-y-1">
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
        </div>
    );
}
