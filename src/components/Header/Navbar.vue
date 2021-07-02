<template>
  <nav class="hidden md:block h-full">
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
            md:px-4
            lg:px-7
          "
          @click="toggleModal()"
        >
          <div class="flex flex-col lg:flex-row justify-center items-center">
            <PencilAltIcon class="h-7 w-7 mx-1 text-froly" />
            <span>Add Recipe</span>
          </div>
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
            md:px-4
            lg:px-7
          "
        >
          <div class="flex flex-col lg:flex-row justify-center items-center">
            <BookmarkIcon class="h-7 w-7 mx-1 text-froly" />
            <span>Bookmark</span>
          </div>
        </button>
        <Bookmarks v-show="showBookmarks" />
      </li>
    </ul>
  </nav>
  <button
    class="md:hidden absolute right-0 sm:relative bg-none text-dorado"
    @click="collapseNav = !collapseNav"
  >
    <MenuIcon v-if="collapseNav" class="h-7 w-7" />
    <XIcon v-else class="h-7 w-7" />
  </button>
  <div class="absolute top-24" v-show="!collapseNav">
    <NavbarCollapse />
    <div
      class="left-0 h-screen w-screen bg-black opacity-20 z-10"
      @click="collapseNav = !collapseNav"
    ></div>
  </div>
</template>

<script lang="ts">
import {
  PencilAltIcon,
  BookmarkIcon,
  MenuIcon,
  XIcon,
} from "@heroicons/vue/outline";
import { mapActions, mapState } from "vuex";
import Bookmarks from "./Bookmarks.vue";
import NavbarCollapse from "./NavbarCollapse.vue";

export default {
  components: {
    PencilAltIcon,
    BookmarkIcon,
    MenuIcon,
    XIcon,
    Bookmarks,
    NavbarCollapse,
  },
  data: () => {
    return {
      collapseNav: true,
    };
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
