<template>
  <body>
    In Vue
    {{ counterRef }}
    <button @click="counterRef.value++">++</button>

    <div ref="svelteRef" v-once v-html=""></div>
  </body>
</template>

<script setup>
import { customRef, ref, onMounted } from "vue";
import { mount, flushSync } from "svelte";
import { counter, toRef } from "./test.svelte.js";
import SvelteTest from "./test.svelte";

// For debugging and interactive experimentation
window.counter = counter;

const counterRef = toRef(counter);
counter.value++;

const svelteRef = ref();
onMounted(() => {
	const app = mount(SvelteTest, { target: svelteRef.value, props: {} });
	flushSync();
});
</script>
