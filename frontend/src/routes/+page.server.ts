import { fail, superValidate } from "sveltekit-superforms";
import { formSchema, type Todo } from "./schema.js";
import { zod } from "sveltekit-superforms/adapters";
import { env } from "$env/dynamic/public";
import type { Actions, ServerLoad } from "@sveltejs/kit";
 
export const load: ServerLoad = async () => {
  const todos: Todo[]= await fetch(`${env.PUBLIC_API_URL}/todos`).then(res => res.json());
  return {
    form: await superValidate(zod(formSchema)),
    todos
  };
};


export const actions: Actions = {
  create: async (event) => {
    const form = await superValidate(event, zod(formSchema));
    if (!form.valid) {
      return fail(400, {
        form,
      });
    }

    const res = await fetch(`${env.PUBLIC_API_URL}/todos/${form.data.text}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      return fail(res.status, {
        form,
      });
    }

    const todos: Todo[] = await fetch(`${env.PUBLIC_API_URL}/todos`).then(res => res.json());
    return {
      form,
      todos,
    };
  },

  delete: async (event) => {
    const form = await superValidate(event, zod(formSchema));
    console.log(form);

    if (!form.valid) {
      return fail(400, {
        form,
      });
    }

    const res = await fetch(`${env.PUBLIC_API_URL}/todos/${form.data.text}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      return fail(res.status);
    }

    const todos: Todo[] = await fetch(`${env.PUBLIC_API_URL}/todos`).then(res => res.json());
    return {
      todos,
    };
  },

};