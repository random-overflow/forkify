<template>
    <div class="bg-wood">
        <div class="flex flex-row mx-auto py-12 max-w-sm font-semibold text-lg">
            <EmojiHappyIcon class="h-10 w-10 mx-2 text-froly" />
            <p>Start by searching for a recipe or an ingredient. Have fun!</p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { PencilAltIcon, BookmarkIcon, EmojiHappyIcon } from '@heroicons/vue/outline';

export default defineComponent({
    components: { PencilAltIcon, BookmarkIcon, EmojiHappyIcon }
});
</script>