"use server";

import * as z from "zod";
import bcrypt from "bcryptjs";

import { RegisterSchema } from "@/schemas";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";

export const register = async (data: z.infer<typeof RegisterSchema>) => {
    const validatedFields = RegisterSchema.safeParse(data);

    if (!validatedFields.success) {
        return { error: "Invalid fields" };
    }

    const { email, password, name } = validatedFields.data;
    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await getUserByEmail(email);

    if (existingUser) {
        return { error: "Invalid fields" };
    }

    await db.user.create({
        data: {
            email,
            password: hashedPassword,
            name,
        }
    });

    // TODO: send email verification

    return { success: "User registered" };
}