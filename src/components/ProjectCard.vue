<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { useLocales } from '../composables/useLocales'
import Tag from './Tag.vue';

const { t } = useLocales();

interface IProject {
  id: number;
  title: string;
  description: string;
  image: string | null;
  tags: string[];
  github: string;
  demo: string | null;
}

defineProps<{
  project: IProject;
}>();
</script>

<template>
  <div
    class="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col">
    <!-- Project image -->
    <div v-if="project.image" class="h-48 bg-cover bg-center" :style="{ backgroundImage: `url(${project.image})` }">
    </div>
    <div v-else class="h-48 bg-gradient-to-r from-sky-500 to-indigo-500 flex items-center justify-center">
      <Icon icon="ph:code" class="w-16 h-16 text-white opacity-80" />
    </div>

    <!-- Project details -->
    <div class="p-6 flex-grow flex flex-col">
      <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">{{ project.title }}</h3>
      <p class="text-gray-600 dark:text-gray-400 mb-4 flex-grow">{{ project.description }}</p>

      <!-- Tags -->
      <div class="flex flex-wrap gap-2 mb-4">
        <Tag v-for="tag in project.tags" :key="tag" :text="tag" :isSmall="true" />
      </div>
    </div>

    <!-- View details and links section -->
    <div class="p-4 pt-0 mt-auto flex justify-between">
      <router-link :to="`/projects/${project.id}`" class="text-sky-500 hover:underline inline-flex items-center">
        {{ t.projects.card }}
        <Icon icon="ph:arrow-right" class="ml-1 w-4 h-4" />
      </router-link>

      <div class="flex space-x-3">
        <a v-if="project.github" :href="project.github" target="_blank" rel="noopener noreferrer"
          class="text-gray-600 dark:text-gray-400 hover:text-sky-500 dark:hover:text-sky-500"
          aria-label="GitHub Repository">
          <Icon icon="ph:github-logo" class="w-5 h-5" />
        </a>
        <a v-if="project.demo" :href="project.demo" target="_blank" rel="noopener noreferrer"
          class="text-gray-600 dark:text-gray-400 hover:text-sky-500 dark:hover:text-sky-500" aria-label="Live Demo">
          <Icon icon="ph:globe" class="w-5 h-5" />
        </a>
      </div>
    </div>
  </div>
</template>