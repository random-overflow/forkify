<template>
  <div class="absolute w-full bg-wood pt-1 right-0 z-10 shadow-2xl">
    <SearchForm class="sm:hidden" />
    <button
      class="
        w-full
        bg-none
        text-dorado
        font-bold
        text-sm
        rounded-none
        h-full
        hover:bg-ebb
        hover:scale-100
        py-6
      "
      @click="toggleModal()"
    >
      <div class="flex flex-row justify-center items-center m-auto">
        <PencilAltIcon class="h-7 w-7 mx-1 text-froly" />
        <span>Add Recipe</span>
      </div>
    </button>
    <button
      class="
        w-full
        bg-none
        text-dorado
        font-bold
        text-sm
        rounded-none
        h-full
        hover:bg-ebb
        hover:scale-100
        py-6
      "
      @click="toggleBookmarks()"
    >
      <div class="flex flex-row items-center m-auto">
        <BookmarkIcon class="h-7 w-7 mx-1 text-froly" />
        <span>Bookmark</span>
      </div>
      <ChevronUpIcon
        v-if="showBookmarks"
        class="absolute right-8 h-7 w-7 text-dorado"
      />
      <ChevronDownIcon v-else class="absolute right-8 h-7 w-7 text-dorado" />
    </button>
    <Bookmarks v-show="showBookmarks" class="md:hidden" :absolute="false" />
    <div class="m-0 py-1 w-full bg-gradient-to-br from-corn to-froly"></div>
  </div>
</template>

<script lang="ts">
import {
  PencilAltIcon,
  BookmarkIcon,
  MenuIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/vue/outline";
import { mapActions, mapState } from "vuex";
import Bookmarks from "./Bookmarks.vue";
import SearchForm from "./SearchForm.vue";

export default {
  components: {
    PencilAltIcon,
    BookmarkIcon,
    MenuIcon,
    ChevronDownIcon,
    ChevronUpIcon,
    Bookmarks,
    SearchForm,
  },
  computed: {
    ...mapState({
      showBookmarks: (state: any) => state.bookmarks.showBookmarks,
    }),
  },
  methods: {
    ...mapActions({
      toggleBookmarks: "bookmarks/toggleBookmarks",
      toggleModal: "userRecipes/toggleModal",
    }),
  },
};
</script>

<style>
</style>