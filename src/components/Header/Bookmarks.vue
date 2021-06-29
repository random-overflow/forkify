<template>
  <div class="absolute w-96 bg-white py-12 px-8 right-0">
    <div class="flex flex-row">
      <ExclamationIcon class="h-7 w-7 mx-1 text-froly" />
      <p>No bookmarks yet. Find a nice recipe and bookmark it ;)</p>
    </div>
  </div>
</template>

<script>
import { ExclamationIcon } from "@heroicons/vue/outline";

export default {
  components: {
    ExclamationIcon,
  },
};
</script>

<style></style>
