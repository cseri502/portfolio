<script setup lang="ts">
import { Icon } from '@iconify/vue'

defineProps<{
  project: {
    id: number
    title: string
    description: string
    image: string | null
    tags: string[]
    github: string | null
    demo: string | null
  }
}>()
</script>

<template>
  <div class="glass-card flex flex-col h-full hover:bg-white/80 dark:hover:bg-gray-700/80 transition-colors duration-200">
    <div v-if="project.image" class="h-48 overflow-hidden rounded-t-md">
      <img :src="project.image" :alt="project.title" class="w-full h-full object-cover" />
    </div>
    <div v-else class="h-48 bg-gray-200/50 dark:bg-gray-700/50 backdrop-blur-sm flex items-center justify-center rounded-t-md">
      <Icon icon="ph:code" class="w-12 h-12 text-gray-400 dark:text-gray-500" />
    </div>
    
    <div class="p-4 flex-grow">
      <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">{{ project.title }}</h3>
      <p class="text-gray-600 dark:text-gray-400 mb-4">
        {{ project.description }}
      </p>
      <div class="flex flex-wrap gap-2 mb-4">
        <span 
          v-for="tag in project.tags" 
          :key="tag"
          class="text-xs px-2 py-1 bg-sky-500/10 text-sky-500 rounded-md"
        >
          {{ tag }}
        </span>
      </div>
    </div>
    
    <div class="p-4 pt-0 mt-auto flex justify-between">
      <router-link :to="`/projects/${project.id}`" class="text-sky-500 hover:underline inline-flex items-center">
        View Details
        <Icon icon="ph:arrow-right" class="ml-1 w-4 h-4" />
      </router-link>
      
      <div class="flex space-x-3">
        <a 
          v-if="project.github" 
          :href="project.github" 
          target="_blank" 
          rel="noopener noreferrer"
          class="text-gray-600 dark:text-gray-400 hover:text-sky-500 dark:hover:text-sky-500"
          aria-label="GitHub Repository"
        >
          <Icon icon="ph:github-logo" class="w-5 h-5" />
        </a>
        <a 
          v-if="project.demo" 
          :href="project.demo" 
          target="_blank" 
          rel="noopener noreferrer"
          class="text-gray-600 dark:text-gray-400 hover:text-sky-500 dark:hover:text-sky-500"
          aria-label="Live Demo"
        >
          <Icon icon="ph:globe" class="w-5 h-5" />
        </a>
      </div>
    </div>
  </div>
</template>