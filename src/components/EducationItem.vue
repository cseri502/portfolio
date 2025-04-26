<script setup lang="ts">
defineProps<{
  institution: string
  degree: string
  period: string
  description: string
}>()
</script>

<template>
  <div class="glass-card p-5">
    <div class="flex flex-col md:flex-row md:items-center justify-between mb-2">
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{{ degree }}</h3>
      <span class="text-sm text-sky-500">{{ period }}</span>
    </div>
    <p class="text-gray-700 dark:text-gray-300 font-medium mb-2">{{ institution }}</p>
    <p class="text-gray-600 dark:text-gray-400">{{ description }}</p>
  </div>
</template>