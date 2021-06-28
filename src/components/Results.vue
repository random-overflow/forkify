<template>
  <div class="py-4">
    <ul>
      <li
        v-for="result in results"
        :key="result.id"
        class="flex flex-row hover:bg-wood py-3 px-7"
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
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      results: "searchResults/results",
    }),
  },
};
</script>

<style></style>
