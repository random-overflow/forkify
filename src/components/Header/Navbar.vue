<template>
  <nav>
    <ul class="flex">
      <li>
        <button class="bg-none text-dorado font-bold text-sm">
          <PencilAltIcon class="h-7 w-7 mx-1 text-froly" />
          <span>Add Recipe</span>
        </button>
      </li>
      <li>
        <button class="bg-none text-dorado font-bold text-sm">
          <BookmarkIcon class="h-7 w-7 mx-1 text-froly" />
          <span>Bookmark</span>
        </button>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { PencilAltIcon, BookmarkIcon } from '@heroicons/vue/outline';

export default defineComponent({
  components: { PencilAltIcon, BookmarkIcon }
});
</script>