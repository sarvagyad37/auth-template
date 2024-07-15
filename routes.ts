/**
 * An array of public routes
 * These do not require authentication
 * @type {string[]}
 */
export const publicRoutes = [
    "/",
]

/**
 * An array of authenticated routes
 * These routes will redirect logged in users to /settings
 * @type {string[]}
 */
export const authRoutes = [
    "/auth/login",
    "/auth/register",
    "/auth/error"
]

/**
 * The prefix for API authenticated route
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth"

/**
 * The default redirect path after logging in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings"