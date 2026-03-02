/**
 * Simple token helpers that work with sessionStorage.
 * The "token" is a base-64 encoded JSON payload — good enough for a
 * temporary dev-only auth flow. Replace with JWT / OAuth later.
 */

const TOKEN_KEY = "annsetu_auth_token";

/** Generate a fake token from user data */
export function generateToken(user) {
    const payload = {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        iat: Date.now(),
    };
    return btoa(JSON.stringify(payload));
}

/** Persist token for the session */
export function setToken(token) {
    if (typeof window !== "undefined") {
        sessionStorage.setItem(TOKEN_KEY, token);
    }
}

/** Read current token (null if absent) */
export function getToken() {
    if (typeof window === "undefined") return null;
    return sessionStorage.getItem(TOKEN_KEY);
}

/** Remove token (logout) */
export function removeToken() {
    if (typeof window !== "undefined") {
        sessionStorage.removeItem(TOKEN_KEY);
    }
}

/** Decode the token back to a user payload, returns null on failure */
export function decodeToken(token) {
    try {
        return JSON.parse(atob(token));
    } catch {
        return null;
    }
}

/** Check if a valid token exists */
export function isAuthenticated() {
    const token = getToken();
    if (!token) return false;
    const payload = decodeToken(token);
    return !!payload?.id;
}
