<template>
  <div class="bg-wood">
    <div v-if="isSearching" class="flex justify-center items-center">
      <RefreshIcon class="h-10 w-10 mx-1 text-froly animate-spin" />
    </div>
    <div v-else-if="recipe">
      <div class="recipeimg relative h-96">
        <img
          :src="recipe.image_url"
          :alt="recipe.title"
          class="w-full h-full object-cover"
        />
        <h1
          class="
            py-3
            w-1/2
            transform
            -skew-y-6
            -translate-x-1/2
            translate-y-1/4
            text-center
            absolute
            bottom-0
            left-1/2
            text-4xl
            uppercase
            font-bold
            bg-gradient-to-br
            from-corn
            to-froly
            text-white
          "
        >
          <span class="py-3 px-5 decoration-clone">{{ recipe.title }}</span>
        </h1>
      </div>
      <div class="flex flex-row pt-14 pb-8 px-14">
        <div class="flex flex-row items-center pr-11">
          <ClockIcon class="h-7 w-7 mx-2 text-froly" />
          <span class="font-bold mr-1">{{
            recipe.prep_time != undefined ? recipe.prep_time : "N"
          }}</span>
          <span class="uppercase"> Minutes</span>
        </div>
        <div class="flex flex-row items-center">
          <UsersIcon class="h-7 w-7 mx-2 text-froly" />
          <span class="font-bold mr-1">N</span>
          <span class="uppercase"> Servings</span>
          <div class="flex flex-row ml-4">
            <MinusCircleIcon class="h-7 w-7 text-froly" />
            <PlusCircleIcon class="h-7 w-7 text-froly" />
          </div>
        </div>
        <button
          v-if="isBookmarked"
          @click="removeBookmark()"
          class="p-2 rounded-full ml-auto"
        >
          <BookmarkSolidIcon class="h-7 w-7" />
        </button>
        <button v-else @click="addBookmark()" class="p-2 rounded-full ml-auto">
          <BookmarkIcon class="h-7 w-7" />
        </button>
      </div>
      <div class="flex flex-col justify-center items-center bg-ebb px-14 py-10">
        <h1 class="uppercase text-center text-froly font-bold text-xl mb-8">
          Recipe ingredients
        </h1>
        <ul class="grid grid-cols-2 gap-6">
          <li
            v-for="ingredient in recipe.ingredients"
            :key="ingredient"
            class="flex flex-row"
          >
            <div class="w-7">
              <CheckIcon class="h-7 w-7 text-froly" />
            </div>
            <span>{{ ingredient }}</span>
          </li>
        </ul>
      </div>
      <div class="flex flex-col justify-center items-center px-14 py-10">
        <h1 class="uppercase text-center text-froly font-bold text-xl mb-8">
          How to cook it
        </h1>
        <p>
          This recipe was carefully designed and tested by Closet Cooking.
          Please check out directions at their website.
        </p>
        <button>Directions <ArrowRightIcon class="ml-1 h-4 w-4" /></button>
      </div>
    </div>
    <div
      v-else
      class="flex flex-row mx-auto py-12 max-w-sm font-semibold text-lg"
    >
      <EmojiHappyIcon class="h-10 w-10 mx-2 text-froly" />
      <p>Start by searching for a recipe or an ingredient. Have fun!</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  PencilAltIcon,
  BookmarkIcon,
  EmojiHappyIcon,
  RefreshIcon,
  ClockIcon,
  UsersIcon,
  PlusCircleIcon,
  MinusCircleIcon,
  CheckIcon,
  ArrowRightIcon,
} from "@heroicons/vue/outline";
import { BookmarkIcon as BookmarkSolidIcon } from "@heroicons/vue/solid";
import { mapActions, mapGetters, mapState } from "vuex";
import recipe from "../store/modules/recipe";
import store from "../store";

export default defineComponent({
  components: {
    PencilAltIcon,
    BookmarkIcon,
    BookmarkSolidIcon,
    EmojiHappyIcon,
    RefreshIcon,
    ClockIcon,
    UsersIcon,
    PlusCircleIcon,
    MinusCircleIcon,
    CheckIcon,
    ArrowRightIcon,
  },
  computed: {
    ...mapGetters({
      recipe: "recipe/recipe",
      isBookmarked: "bookmarks/isBookmarked",
    }),
    ...mapState({
      isSearching: (state: any) => state.recipe.isSearching,
    }),
  },
  methods: {
    ...mapActions({
      addBookmark: "bookmarks/addBookmark",
      removeBookmark: "bookmarks/removeBookmark",
    }),
  },
});
</script>
