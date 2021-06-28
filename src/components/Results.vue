<template>
  <div class="py-4">
    <ul v-if="!isSearching">
      <li v-for="result in results" :key="result.id">
        <a href="#" class="flex flex-row hover:bg-wood py-3 px-7">
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
      <RefreshIcon class="h-10 w-10 mx-1 text-froly" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
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
      isSearching: (state) => state.searchResults.isSearching, //"searchResults/isSearching",
    }),
  },
};
</script>

<style></style>
