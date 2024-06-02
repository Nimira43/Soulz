'use server'

import { RegisterSchema, registerSchema } from "@/lib/schemas/registerSchema";

export async function registerUser(data: RegisterSchema) {
    const validated = registerSchema.safeParse(data)

    if (!validated.success) {
        return {error: validated.error.errors}
    }
    const {name, email, password}  = validated.data
    
}