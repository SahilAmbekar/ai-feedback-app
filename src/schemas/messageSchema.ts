import {z} from "zod";

export const MessageSchema = z.object({
    content: z.string().min(10, {message: "Please enter more in message"}).max(300, {message: "Message cannot be more then 300 characters"})
})