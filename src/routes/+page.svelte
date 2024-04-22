<script lang="ts">
	import InputForm from "./input-form.svelte";
    import Todo from "./todo.svelte";
    import type { PageData } from "./$types.js";
    import * as Form from "$lib/components/ui/form";
    import { Input } from "$lib/components/ui/input";
    import { formSchema, type FormSchema } from "./schema";
    import {
        type SuperValidated,
        type Infer,
        superForm,
    } from "sveltekit-superforms";
    import { zodClient } from "sveltekit-superforms/adapters";

    export let data: PageData;
 
  const form = superForm(data.form, {
    validators: zodClient(formSchema),
  });
 
  const { form: formData, enhance } = form;


    const createTodo = (event: SubmitEvent) => {
        const formData = new FormData(event.target);
        console.log(formData.get("text"));
        const todo: string = "todo";
        data.todos.push(todo);
    
    };

    const deleteTodo = (text:string) => {
        const index = data.todos.findIndex((todo: string) => todo === text);
        data.todos.splice(index, 1);
    };

</script>

<div class="w-full h-20 flex items-center justify-center" >
    <h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight text-center">Todos</h1>
</div>
<div class="w-full flex items-center flex-col">
    <div class="flex justify-center items-center flex-col w-1/2">
        <form on:submit|preventDefault={createTodo}>
            <div class="flex justify-center gap-2 items-start">
                <div>
                    <Form.Field {form} name="text">
                        <Form.Control let:attrs>
                        <Input {...attrs} bind:value={$formData.text} />
                    </Form.Control>
                    <Form.FieldErrors />
                    </Form.Field>
                </div>
                <Form.Button>Submit</Form.Button>
            </div>
        </form>
        <div class="w-full flex items-center flex-col">
        {#each data.todos as todo}
        <Todo
            {todo}
            on:delete={() => deleteTodo(todo)}
        />
        {/each}
        </div>
    </div>
</div>