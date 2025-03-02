<script setup lang="ts">
import { Icon } from '@iconify/vue'

defineProps<{
  name: string
  icon: string
}>()
</script>

<template>
  <div class="glass-card flex flex-col items-center p-4 hover:scale-105 transition-all duration-200">
    <Icon :icon="icon" class="w-10 h-10 mb-3" />
    <span class="text-sm font-medium font-inter text-gray-900 dark:text-white">{{ name }}</span>
  </div>
</template>