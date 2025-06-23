// src/router/route.guards.ts

import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'

/**
 * گارد بررسی کلید Premium
 *
 * - اگر `key` یک رشتهٔ ۸ رقمی حروف و عدد باشد پذیرفته می‌شود.
 * - در غیر این صورت کاربر به روت اصلی (`/`) هدایت می‌شود.
 *
 * @param to   مقصد ناوبری
 * @param from مبدأ ناوبری
 * @param next تابع ادامه یا ریدایرکت
 */
export function premiumGuard(to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext): boolean {
    const key = to.params.key
    const isValidKey = typeof key === 'string' && /^[A-Za-z0-9]{8}$/.test(key)

    if (isValidKey) {
        next()
        return true
    } else {
        console.warn(`Invalid premium key: ${key}`)
        next({ path: '/' })
        return false
    }
}
