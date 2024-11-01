<script>
  import { counter } from "./test.svelte.js";
</script>

In svelte
{counter.value}
<button onclick={() => counter.value++}>++</button>
