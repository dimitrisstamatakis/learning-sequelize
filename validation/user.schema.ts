// schemas/user.schema.ts
import { z } from 'zod';

export const createUserSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email format'),
});

export type CreateUserDTO = z.infer<typeof createUserSchema>;

export const getUserSchema = z.object({
    email: z.string().email('Invalid email format'),
});

export type GetUserDTO = z.infer<typeof getUserSchema>;
