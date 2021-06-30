<template>
  <RecipesList :recipes="results" />
</template>

<script lang="ts">
import { mapGetters } from "vuex";
import RecipesList from "./RecipesList.vue";

export default {
  components: {
    RecipesList,
  },
  computed: {
    ...mapGetters({
      results: "searchResults/results",
    }),
  },
};
</script>

<style></style>
