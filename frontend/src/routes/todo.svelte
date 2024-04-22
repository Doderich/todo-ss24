<script lang="ts">
    import {createEventDispatcher} from 'svelte';
    import {fade} from 'svelte/transition';
    import { Button } from '$lib/components/ui/button';
    import {Input} from '$lib/components/ui/input';
    const dispatch = createEventDispatcher();

  // App passes a Todo object as a prop.
  export let todo: string;
</script>


<div class="flex p-2 w-fit gap-2" transition:fade>
    <Input value={todo}  />
    <Button on:click={() => dispatch('delete')}>Delete</Button>
</div>