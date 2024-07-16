import { db } from '@/lib/db';
import { getVerificationTokenByEmail } from '@/data/verification-token';
import { v4 as uuidv4 } from 'uuid';

export const generateVerificationToken = async (identifier: string) => {
    const token = uuidv4()
    const expires = new Date(new Date().getTime() + 3600 * 1000)

    const existingToken = await getVerificationTokenByEmail(identifier)
    if (existingToken) {
        await db.verificationToken.delete({
            where: {
                id: existingToken.id
            },
        })
    }

    const verificationToken = await db.verificationToken.create({
        data: {
            identifier,
            token,
            expires
        }
    })

    return verificationToken
}