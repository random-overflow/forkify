<template>
  <div class="flex flex-col">
    <RecipesList :recipes="results" />
    <div class="flex flex-row justify-evenly px-6">
      <button
        v-if="existsPrevPage"
        @click="prevPage()"
        class="
          bg-none bg-wood
          py-1
          px-3
          capitalize
          text-froly
          mr-auto
          font-bold
        "
      >
        <ArrowLeftIcon class="mr-1 h-4 w-4" />
        Page {{ page - 1 }}
      </button>
      <button
        v-if="existsNextPage"
        @click="nextPage()"
        class="
          bg-none bg-wood
          py-1
          px-3
          capitalize
          text-froly
          ml-auto
          font-bold
        "
      >
        Page {{ page + 1 }}
        <ArrowRightIcon class="ml-1 h-4 w-4" />
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { mapActions, mapGetters, mapState } from "vuex";
import RecipesList from "./RecipesList.vue";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/vue/outline";

export default {
  components: {
    RecipesList,
    ArrowRightIcon,
    ArrowLeftIcon,
  },
  computed: {
    ...mapGetters({
      results: "searchResults/results",
      existsNextPage: "searchResults/existNextPage",
      existsPrevPage: "searchResults/existPrevPage",
    }),
    ...mapState({
      page: (state: any) => state.searchResults.page,
    }),
  },
  methods: {
    ...mapActions({
      prevPage: "searchResults/prevPage",
      nextPage: "searchResults/nextPage",
    }),
  },
};
</script>

<style></style>
