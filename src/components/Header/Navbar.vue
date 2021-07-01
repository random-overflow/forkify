<template>
  <nav class="h-full">
    <ul class="flex h-full">
      <li>
        <button
          class="
            bg-none
            text-dorado
            font-bold
            text-sm
            rounded-none
            h-full
            hover:bg-ebb
            hover:scale-100
          "
          @click="toggleModal()"
        >
          <PencilAltIcon class="h-7 w-7 mx-1 text-froly" />
          <span>Add Recipe</span>
        </button>
      </li>
      <li
        class="relative"
        @mouseover="toggleBookmarks(true)"
        @mouseleave="toggleBookmarks(false)"
      >
        <button
          class="
            bg-none
            text-dorado
            font-bold
            text-sm
            rounded-none
            h-full
            hover:bg-ebb
            hover:scale-100
          "
        >
          <BookmarkIcon class="h-7 w-7 mx-1 text-froly" />
          <span>Bookmark</span>
        </button>
        <Bookmarks v-show="showBookmarks" />
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { PencilAltIcon, BookmarkIcon } from "@heroicons/vue/outline";
import { mapActions, mapState } from "vuex";
import Bookmarks from "./Bookmarks.vue";

export default {
  components: { PencilAltIcon, BookmarkIcon, Bookmarks },
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
