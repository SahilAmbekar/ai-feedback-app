import {z} from "zod";

export const signInSchema = z.object({
    identifier: z.string(), // also known as username 
    password: z.string().min(4, {message: "Password cannot be less then 4 characters"}),
})