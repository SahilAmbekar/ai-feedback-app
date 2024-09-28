import {z} from "zod";

export const userNameValidation = z
    .string()
    .min(2, "Username must be atleast of 2 characters")
    .max(20, "Username cannot be more then 20 characters")
    .regex( /^[a-zA-Z0-9_]+$/, "Username must not contain any special characters")

export const singUpSchema = z.object({
    username: userNameValidation,
    email: z.string().email({message: "Invalide email address"}),
    password: z.string().min(6, {message: "password must be atleast 6 characters"})
})