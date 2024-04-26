<script lang="ts">
    import {fade} from 'svelte/transition';
    import { Button } from '$lib/components/ui/button';
	import type { Todo } from './schema';
	import { enhance } from '$app/forms';
	import { Input } from '$lib/components/ui/input';
  export let todo: Todo;

</script>


<div class="w-fit" transition:fade>
  <form method="POST" action="?/delete" use:enhance>
    <div class=" flex gap-2 justify-center items-center">
    <Input name="text" id="text" value={todo.todo} readonly />
    <Button variant="destructive" size="sm" type="submit">
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" {...$$props}>
	<path fill="white" d="M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6zM8 9h8v10H8zm7.5-5l-1-1h-5l-1 1H5v2h14V4z" />
</svg>
    </Button>
    </div>
  </form>
</div>