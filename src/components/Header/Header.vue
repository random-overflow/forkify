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
    <img class="h-14 ml-5" src="../../assets/logo.png" alt="Forkify Logo" />
    <form class="flex items-center bg-white rounded-full pl-12" action="#">
      <input
        class="w-80 border-none bg-none"
        type="text"
        placeholder="Search over 1,000,000 recipes..."
        v-model="query"
      />
      <button class="font-semibold" @click="search(query)">
        <SearchIcon class="h-6 w-6 mx-1 text-white" />
        Search
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
