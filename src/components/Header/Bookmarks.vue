<template>
  <div
    :class="{ absolute: absolute }"
    class="w-full md:w-96 bg-ebb md:bg-white py-1 right-0 z-10"
  >
    <div v-if="isEmpty" class="flex flex-row py-11 px-8">
      <ExclamationIcon class="h-7 w-7 mx-1 text-froly" />
      <p>No bookmarks yet. Find a nice recipe and bookmark it ;)</p>
    </div>
    <recipes-list :recipes="bookmarks" />
  </div>
</template>

<script lang="ts">
import { ExclamationIcon } from "@heroicons/vue/outline";
import { mapGetters, mapState } from "vuex";
import RecipesList from "../RecipesList.vue";

export default {
  props: {
    absolute: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  components: {
    ExclamationIcon,
    RecipesList,
  },
  computed: {
    ...mapGetters({
      isEmpty: "bookmarks/isEmpty",
    }),
    ...mapState({
      bookmarks: (state: any) => state.bookmarks.recipes,
    }),
  },
};
</script>

<style></style>
