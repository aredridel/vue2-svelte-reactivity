import vue from '@legacy-vue/vite-plugin-vue2'
import {defineConfig} from "vite";
import {svelte} from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  plugins: [vue(), svelte()]
});
