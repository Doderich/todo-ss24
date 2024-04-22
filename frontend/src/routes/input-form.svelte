<script lang="ts">
  import * as Form from "$lib/components/ui/form";
  import { Input } from "$lib/components/ui/input";
  import { formSchema, type FormSchema } from "./schema";
  import {
    type SuperValidated,
    type Infer,
    superForm,
  } from "sveltekit-superforms";
  import { zodClient } from "sveltekit-superforms/adapters";
 
  export let data: SuperValidated<Infer<FormSchema>>;
 
  const form = superForm(data, {
    validators: zodClient(formSchema),
  });
 
  const { form: formData, enhance } = form;
</script>
 
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