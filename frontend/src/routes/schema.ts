import { z } from "zod";
 
export const formSchema = z.object({
  text: z.string().min(2),
});
 
export const TodoSchema = z.object({
  id: z.string(),
  todo: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export type Todo = z.infer<typeof TodoSchema>;

export type FormSchema = typeof formSchema;