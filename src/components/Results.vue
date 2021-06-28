<template>
  <div class="py-4">
    <ul v-if="!isSearching">
      <li v-for="result in results" :key="result.id">
        <a
          href="#"
          class="flex flex-row hover:bg-wood py-3 px-7"
          :class="[currentId == result.id ? 'bg-wood' : '']"
          @click="showRecipe(result.id)"
        >
          <img
            :src="result.image_url"
            :alt="results.title"
            class="h-14 w-14 mr-6 rounded-full"
          />
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

<script>
import { mapActions, mapGetters, mapState } from "vuex";
import { RefreshIcon } from "@heroicons/vue/outline";

export default {
  components: {
    RefreshIcon,
  },
  computed: {
    ...mapGetters({
      results: "searchResults/results",
    }),
    ...mapState({
      isSearching: (state) => state.searchResults.isSearching,
      currentId: (state) => state.recipe.recipe.recipe_id,
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
