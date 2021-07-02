<template>
  <div
    class="
      flex flex-flex-row
      justify-center
      sm:justify-between
      items-center
      bg-wood
      h-24
      rounded-lg
    "
  >
    <img
      class="h-14 sm:ml-5 transform"
      src="../../assets/logo.png"
      alt="Forkify Logo"
    />
    <SearchForm class="hidden sm:flex" />
    <Navbar />
  </div>
</template>

<script lang="ts">
import Navbar from "./Navbar.vue";
import SearchForm from "./SearchForm.vue";

export default {
  name: "Header",
  components: {
    Navbar,
    SearchForm,
  },
};
</script>
