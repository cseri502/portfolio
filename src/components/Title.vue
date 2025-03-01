<template>
    <h2 class="section-title text-sky-500">
        &lt; <span class="text-gray-900 dark:text-white">{{ title }}</span> /&gt;
    </h2>
</template>

<script setup lang="ts">
defineProps<{
    title: string
}>()
</script>
