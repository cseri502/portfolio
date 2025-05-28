<script setup lang="ts">
    defineProps<{ text: string, isSmall: boolean }>()
</script>

<template>
    <span :class="isSmall ? 'text-xs px-2' : 'text-sm px-3'"
        class="py-1 bg-sky-500/10 text-sky-600 dark:text-sky-300 rounded-md">{{ text }}</span>
</template>
