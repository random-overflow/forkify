<template>
  <div
    class="
      container
      m-0
      lg:mx-auto
      xl:my-16
      grid grid-cols-3 grid-rows-layout
      bg-white
      min-h-0
      max-w-7xl
      rounded-lg
      shadow-xl
    "
  >
    <Header class="col-span-3" />
    <Results class="col-span-3 md:col-span-1" />
    <Recipe class="col-span-3 md:col-span-2" />
  </div>
  <AddRecipe v-if="showModal" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import Header from "./components/Header/Header.vue";
import Results from "./components/Results.vue";
import Recipe from "./components/Recipe.vue";
import AddRecipe from "./components/AddRecipe.vue";
import { mapState } from "vuex";

export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
    Header,
    Results,
    Recipe,
    AddRecipe,
  },
  computed: {
    ...mapState({
      showModal: (state: any) => state.userRecipes.showModal,
    }),
  },
});
</script>
