import {z} from "zod";

export const signupInputs = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    name: z.string().optional(),
})

export const signinInputs = z.object({
    email: z.string().email(),
    password: z.string().min(6),
})

export const createBlogInputs = z.object({
    title: z.string(),
    content: z.string(),
})

export const updateBlogInputs = z.object({
    id: z.string(),
    title: z.string(),
    content: z.string(),
})

export type SigninInputs = z.infer<typeof signinInputs>;
export type SignupInputs = z.infer<typeof signupInputs>;
export type CreateBlogInputs = z.infer<typeof createBlogInputs>;
export type UpdateBlogInputs = z.infer<typeof updateBlogInputs>;
