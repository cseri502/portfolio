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
    <div v-if="project.image" class="h-48 bg-cover bg-center relative group"
      :style="{ backgroundImage: `url(${project.image})` }">
      <div
        class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
        <Icon icon="ph:code"
          class="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </div>
    <div v-else
      class="h-48 bg-gradient-to-r from-blue-500 to-sky-500 flex items-center justify-center relative group">
      <Icon icon="ph:code" class="w-16 h-16 text-white opacity-80" />
      <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
    </div>

    <!-- Project details -->
    <div class="p-6 flex-grow flex flex-col">
      <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">{{ project.title }}</h3>
      <p class="text-gray-600 dark:text-gray-400 mb-4 flex-grow">{{ project.description }}</p>

      <!-- Links -->
      <div v-if="project.github || project.demo" class="mb-4 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
        <div class="flex items-center mb-2">
          <Icon icon="ph:link" class="w-4 h-4 text-gray-500 dark:text-gray-400 mr-2" />
          <span class="text-sm font-medium text-gray-700 dark:text-gray-300">{{ t.projects.page.links }}</span>
        </div>
        <div class="flex flex-wrap gap-3">
          <a v-if="project.github" :href="project.github" target="_blank" rel="noopener noreferrer"
            class="inline-flex items-center text-xs text-gray-600 dark:text-gray-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors">
            <Icon icon="ph:github-logo" class="w-3 h-3 mr-1" />
            GitHub
          </a>
          <a v-if="project.demo" :href="project.demo" target="_blank" rel="noopener noreferrer"
            class="inline-flex items-center text-xs text-gray-600 dark:text-gray-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors">
            <Icon icon="ph:globe" class="w-3 h-3 mr-1" />
            {{ t.projects.details.demo }}
          </a>
        </div>
      </div>

      <!-- Tags -->
      <div class="flex flex-wrap gap-2 mb-4">
        <Tag v-for="tag in project.tags" :key="tag" :text="tag" :isSmall="true" />
      </div>
    </div>

    <!-- View details section -->
    <div class="p-4 pt-0 mt-auto">
      <router-link :to="`/projects/${project.id}`"
        class="w-full bg-gradient-to-r from-blue-500 to-sky-500 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-sky-600 transition-all duration-300 inline-flex items-center justify-center group">
        <Icon icon="ph:info" class="mr-2 w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
        <span>{{ t.projects.card }}</span>
        <Icon icon="ph:arrow-right" class="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
      </router-link>
    </div>
  </div>
</template>