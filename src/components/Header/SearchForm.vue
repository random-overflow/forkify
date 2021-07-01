<template>
  <form
    class="
      flex flex-row
      items-center
      bg-white
      rounded-full
      pl-4
      xl:pl-12
      focus-within:shadow-xl
      m-4
      sm:m-0
    "
    action="#"
    @submit.prevent="search(query)"
  >
    <input
      class="flex-shrink w-full md:w-64 lg:w-72 xl:w-80 border-none bg-none"
      type="text"
      placeholder="Search over 1,000,000 recipes..."
      v-model="query"
    />
    <button class="font-semibold px-4 lg:px-7 ml-auto" @click="search(query)">
      <SearchIcon class="h-6 w-6 mx-1 text-white" />
      <div class="hidden lg:block">Search</div>
    </button>
  </form>
</template>

<script>
import { SearchIcon } from "@heroicons/vue/outline";
import { mapActions } from "vuex";

export default {
  components: {
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
};
</script>

<style>
</style>