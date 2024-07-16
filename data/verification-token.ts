import { db } from "@/lib/db";

export const getVerificationTokenByEmail = async (
    identifier: string
) => {
    try {
        const verificationToken = await db.verificationToken.findFirst({
            where: { identifier }
        })
        return verificationToken
    } catch {
        return null
    }
}

export const getVerificationTokenByToken = async (
    token: string
) => {
    try {
        const verificationToken = await db.verificationToken.findUnique({
            where: { token }
        })
        return verificationToken
    } catch {
        return null
    }
}
