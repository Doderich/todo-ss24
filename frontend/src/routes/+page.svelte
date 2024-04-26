<script lang="ts">
	import InputForm from "./input-form.svelte";
    import Todo from "./todo.svelte";
    import type { PageData } from "./$types.js";
    import * as Form from "$lib/components/ui/form";
    import { Input } from "$lib/components/ui/input";
    import { formSchema, type FormSchema } from "./schema";
    import {
        superForm,
    } from "sveltekit-superforms";
    import { zodClient } from "sveltekit-superforms/adapters";
    export let data: PageData;
 
    const form = superForm(data.form, {
        validators: zodClient(formSchema),
    });
 
  const { form: formData, enhance } = form;
</script>

<div class="w-full h-full flex justify-start items-center flex-col">
    <h1 class="scroll-m-20 m-4 text-4xl font-extrabold tracking-tight text-center">Todos</h1>
    <div class="w-fit flex justify-start items-start flex-col gap-4">
        <form method="POST" action="?/create" use:enhance>
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
        <div class="w-full flex items-start justify-start flex-col">
            {#each data.todos as todo}
                <Todo
                    {todo}
                />
            {/each}
        </div>
    </div>
</div>
       