<template>
  <body>
	<CounterVue />

    <div ref="svelteRoot" v-once></div>
  </body>
</template>

<script setup>
import CounterVue from "./counter.vue";
import { ref, onMounted } from "vue";
import { mount, flushSync } from "svelte";
import CounterSvelte from "./counter.svelte";

const svelteRoot = ref();
onMounted(() => {
	const app = mount(CounterSvelte, { target: svelteRoot.value, props: {} });
});
</script>
