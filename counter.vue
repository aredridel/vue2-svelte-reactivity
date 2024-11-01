<template>
  <div>
    In Vue
    {{ counterRef.count }}
    <button @click="counterRef.count++">++</button>
  </div>
</template>

<script setup>
import { counter } from "./counter.svelte.js";
import { toRef } from "./toref.svelte.js";
const counterRef = toRef(counter);
</script>
