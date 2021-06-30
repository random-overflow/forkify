<template>
  <div class="py-4">
    <ul v-if="!isSearching">
      <li v-for="result in recipes" :key="result.recipe_id">
        <a
          href="#"
          class="flex flex-row hover:bg-wood py-3 px-7"
          :class="[currentId == result.recipe_id ? 'bg-wood' : '']"
          @click="showRecipe(result.recipe_id)"
        >
          <div class="recipeimg--rounded relative h-14 w-14 mr-6 flex-shrink-0">
            <img
              :src="result.image_url"
              :alt="result.title"
              class="h-14 w-14 rounded-full object-cover"
            />
          </div>

          <div class="flex flex-col">
            <h4 class="text-froly">
              {{ result.title }}
            </h4>
            <p class="text-dorado">{{ result.publisher }}</p>
          </div>
        </a>
      </li>
    </ul>
    <div v-else class="flex justify-center items-center">
      <RefreshIcon class="h-10 w-10 mx-1 text-froly animate-spin" />
    </div>
  </div>
</template>

<script lang="ts">
import { mapActions, mapState } from "vuex";
import { RefreshIcon } from "@heroicons/vue/outline";

export default {
  components: {
    RefreshIcon,
  },
  props: {
    recipes: {
      type: Array as any,
      required: true,
    },
  },
  computed: {
    ...mapState({
      isSearching: (state: any) => state.searchResults.isSearching,
      currentId: (state: any) => state.recipe.recipe?.recipe_id,
    }),
  },
  methods: {
    ...mapActions({
      showRecipe: "recipe/getRecipe",
    }),
  },
};
</script>

<style></style>
