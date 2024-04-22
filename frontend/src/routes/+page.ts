import type {PageLoad,  } from "./$types.js";
import { fail, superValidate } from "sveltekit-superforms";
import { formSchema } from "./schema.js";
import { zod } from "sveltekit-superforms/adapters";
 
export const load: PageLoad = async () => {

  const todos: string[]= localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')!) : [];


  return {
    form: await superValidate(zod(formSchema)),
    todos
  };
};