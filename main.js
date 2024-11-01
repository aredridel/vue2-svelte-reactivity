import Vue from "vue";
import "svelte"
import App from "./app.vue";
const app = Vue.extend(App);

new app({el: document.body});

