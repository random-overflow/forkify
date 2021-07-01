<template>
  <div
    class="
      flex flex-flex-row
      justify-between
      items-center
      bg-wood
      h-24
      rounded-lg
    "
  >
    <img
      class="h-14 sm:ml-5 m-auto"
      src="../../assets/logo.png"
      alt="Forkify Logo"
    />
    <form
      class="
        hidden
        sm:flex
        items-center
        bg-white
        rounded-full
        pl-4
        xl:pl-12
        focus-within:shadow-xl
      "
      action="#"
      @submit.prevent="search(query)"
    >
      <input
        class="
          flex-shrink
          sm:w-full
          md:w-64
          lg:w-72
          xl:w-80
          border-none
          bg-none
        "
        type="text"
        placeholder="Search over 1,000,000 recipes..."
        v-model="query"
      />
      <button class="font-semibold px-4 lg:px-7" @click="search(query)">
        <SearchIcon class="h-6 w-6 mx-1 text-white" />
        <div class="hidden lg:block">Search</div>
      </button>
    </form>
    <Navbar />
  </div>
</template>

<script lang="ts">
import Navbar from "./Navbar.vue";
import { SearchIcon } from "@heroicons/vue/outline";
import { mapActions } from "vuex";

export default {
  name: "Header",
  components: {
    Navbar,
    SearchIcon,
  },
  data: () => ({
    query: "",
  }),
  methods: {
    ...mapActions({
      search: "searchResults/getRecipesResults",
    }),
  },
  setup: () => {},
};
</script>
