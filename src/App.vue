<template>
  <div
    class="
      container
      mx-auto
      my-16
      grid grid-cols-3 grid-rows-layout
      bg-white
      min-h-screen
      max-w-7xl
      rounded-lg
      shadow-xl
    "
  >
    <Header class="col-span-3" />
    <Results class="col-span-1" />
    <Recipe class="col-span-2" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import Header from "./components/Header/Header.vue";
import Results from "./components/Results.vue";
import Recipe from "./components/Recipe.vue";

export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
    Header,
    Results,
    Recipe,
  },
});
</script>
