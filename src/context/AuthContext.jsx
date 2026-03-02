"use client";

import { createContext, useContext, useState, useEffect, useCallback } from "react";
import {
    getToken,
    setToken as persistToken,
    removeToken,
    decodeToken,
    generateToken,
} from "@/lib/auth";
import USERS from "@/data/credentials";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); // true while we check sessionStorage

    // On mount, rehydrate from sessionStorage
    useEffect(() => {
        const token = getToken();
        if (token) {
            const payload = decodeToken(token);
            if (payload?.id) {
                setUser(payload);
            }
        }
        setLoading(false);
    }, []);

    /**
     * Login with identifier (email or phone) + password.
     * Returns { success, message }
     */
    const login = useCallback((identifier, password) => {
        const trimmed = identifier.trim().toLowerCase();

        const matched = USERS.find(
            (u) =>
                (u.email.toLowerCase() === trimmed || u.phone === trimmed) &&
                u.password === password
        );

        if (!matched) {
            return { success: false, message: "Invalid credentials. Please try again." };
        }

        const token = generateToken(matched);
        persistToken(token);
        const payload = decodeToken(token);
        setUser(payload);
        return { success: true, message: "Login successful" };
    }, []);

    const logout = useCallback(() => {
        removeToken();
        setUser(null);
    }, []);

    return (
        <AuthContext.Provider value={{ user, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error("useAuth must be used inside <AuthProvider>");
    return ctx;
}
