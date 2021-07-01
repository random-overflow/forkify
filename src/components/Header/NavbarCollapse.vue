<template>
  <div
    class="
      absolute
      w-full
      bg-white
      py-1
      top-24
      right-0
      z-10
      border-b-8 border-froly
      shadow-2xl
    "
  >
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
      <div class="flex flex-row justify-center items-center m-auto">
        <BookmarkIcon class="h-7 w-7 mx-1 text-froly" />
        <span>Bookmark</span>
      </div>
    </button>
    <Bookmarks v-show="showBookmarks" class="md:hidden" />
  </div>
</template>

<script lang="ts">
import { PencilAltIcon, BookmarkIcon, MenuIcon } from "@heroicons/vue/outline";
import { mapActions, mapState } from "vuex";
import Bookmarks from "./Bookmarks.vue";
import SearchForm from "./SearchForm.vue";

export default {
  components: { PencilAltIcon, BookmarkIcon, MenuIcon, Bookmarks, SearchForm },
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