<template>
  <div
    class="fixed top-0 left-0 h-screen w-screen bg-black opacity-60 z-20"
    @click="toggleModal()"
  ></div>
  <div
    class="
      fixed
      top-0
      md:top-1/2
      left-0
      md:left-1/2
      w-screen
      md:max-w-max
      h-screen
      md:h-auto
      bg-white
      md:transform
      md:-translate-x-1/2 md:-translate-y-1/2
      p-16
      z-20
      overflow-y-scroll
    "
  >
    <button
      class="absolute top-2 right-2 bg-none text-dorado font-extrabold"
      @click="toggleModal()"
    >
      x
    </button>
    <form
      class="grid grid-cols-2 gap-x-9 gap-y-6 md:gap-y-14"
      action="#"
      @submit.prevent="addRecipe(userRecipe)"
    >
      <div
        class="col-span-2 md:col-span-1 grid grid-cols-6 gap-y-3 items-center"
      >
        <h3 class="col-span-6 uppercase text-xl font-bold">Recipe Data</h3>
        <label class="col-span-2">Title</label>
        <input class="col-span-4" type="text" v-model="userRecipe.title" />
        <label class="col-span-2">URL</label>
        <input
          class="col-span-4"
          type="text"
          v-model="userRecipe.publisher_url"
        />
        <label class="col-span-2">Image URL</label>
        <input class="col-span-4" type="text" v-model="userRecipe.image_url" />
        <label class="col-span-2">Publisher</label>
        <input class="col-span-4" type="text" v-model="userRecipe.publisher" />
        <label class="col-span-2">Prep. Time</label>
        <input
          class="col-span-4"
          type="number"
          v-model.number="userRecipe.prep_time"
        />
      </div>
      <div
        class="col-span-2 md:col-span-1 grid grid-cols-6 gap-y-3 items-center"
      >
        <h3 class="col-span-6 uppercase text-xl font-bold">Ingredient</h3>
        <template v-for="index in 5" :key="index">
          <label class="col-span-2">Ingredient {{ index }}</label>
          <input
            class="col-span-4"
            type="text"
            v-model="userRecipe.ingredients[index]"
          />
        </template>
      </div>
      <button class="col-span-2 justify-self-center" type="submit">
        Add Recipe
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import { mapActions } from "vuex";
import { Recipe } from "../api/recipesApi";
export default {
  data: () => {
    let userRecipe: Recipe = { ingredients: [], prep_time: 0 };
    return {
      userRecipe,
    };
  },
  methods: {
    ...mapActions({
      addRecipe: "userRecipes/addRecipe",
      toggleModal: "userRecipes/toggleModal",
    }),
  },
};
</script>

<style></style>
