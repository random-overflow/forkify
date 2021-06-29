<template>
  <div class="absolute w-96 bg-white py-1 right-0 z-10">
    <div v-if="isEmpty" class="flex flex-row py-11 px-8">
      <ExclamationIcon class="h-7 w-7 mx-1 text-froly" />
      <p>No bookmarks yet. Find a nice recipe and bookmark it ;)</p>
    </div>
    <ul v-else class="py-4 z-10">
      <li v-for="bookmark in bookmarks" :key="bookmark.recipe_id">
        <a
          href="#"
          class="flex flex-row hover:bg-wood py-3 px-7"
          :class="[currentId == bookmark.recipe_id ? 'bg-wood' : '']"
          @click="showRecipe(bookmark.recipe_id)"
        >
          <img
            :src="bookmark.image_url"
            :alt="bookmark.title"
            class="h-14 w-14 mr-6 rounded-full"
          />
          <div class="flex flex-col">
            <h4 class="text-froly">{{ bookmark.title }}</h4>
            <p>{{ bookmark.publisher }}</p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { ExclamationIcon } from "@heroicons/vue/outline";
import { mapActions, mapGetters, mapState } from "vuex";

export default {
  components: {
    ExclamationIcon,
  },
  computed: {
    ...mapGetters({
      recipe: "recipe/recipe",
      isBookmarked: "bookmarks/isBookmarked",
      isEmpty: "bookmarks/isEmpty",
    }),
    ...mapState({
      bookmarks: (state: any) => state.bookmarks.recipes,
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
