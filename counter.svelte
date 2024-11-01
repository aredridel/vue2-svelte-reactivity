<script>
  import { counter } from "./counter.svelte.js";
</script>

In svelte
{counter.count}
<button onclick={() => counter.count++}>++</button>
