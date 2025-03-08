<script setup lang="ts">
import { ref, onMounted, computed, inject } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Icon } from '@iconify/vue'
import projects from '../data/projects.json';
import en from '../locales/en.json'
import de from '../locales/de.json'
import hu from '../locales/hu.json'

const translations = { en, de, hu };

const currentLanguage = inject('language', ref('en'));

const route = useRoute()
const router = useRouter()

const project = computed(() => {
  const id = parseInt(route.params.id as string)
  return projects.find(p => p.id === id)
})

onMounted(() => {
  if (!project.value) {
    router.push('/projects')
  }
})
</script>

<template>
  <div v-if="project" class="bg-gray-50/80 dark:bg-gray-950/80 backdrop-blur-sm min-h-screen py-16 relative">
    <div class="section-container">
      <div class="mb-8">
        <router-link to="/projects" class="inline-flex items-center text-sky-500 hover:underline">
          <Icon icon="ph:arrow-left" class="mr-1 w-4 h-4" />
          {{ translations[currentLanguage as keyof typeof translations].projects.details.backToProjects }}
        </router-link>
      </div>

      <div class="glass-card">
        <!-- Project header -->
        <div class="p-6 border-b border-gray-200/30 dark:border-gray-700/30">
          <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">{{ project.title }}</h1>
          <div class="flex flex-wrap gap-2 mb-4">
            <span v-for="tag in project.tags" :key="tag"
              class="text-xs px-2 py-1 bg-sky-500/10 text-sky-500 rounded-sm">
              {{ tag }}
            </span>
          </div>
          <div class="flex space-x-4">
            <a v-if="project.github" :href="project.github" target="_blank" rel="noopener noreferrer"
              class="inline-flex items-center text-gray-700 dark:text-gray-300 hover:text-sky-500 dark:hover:text-sky-500">
              <Icon icon="ph:github-logo" class="mr-1 w-5 h-5" />
              GitHub Repository
            </a>
            <a v-if="project.demo" :href="project.demo" target="_blank" rel="noopener noreferrer"
              class="inline-flex items-center text-gray-700 dark:text-gray-300 hover:text-sky-500 dark:hover:text-sky-500">
              <Icon icon="ph:globe" class="mr-1 w-5 h-5" />
              {{ translations[currentLanguage as keyof typeof translations].projects.details.demo }}
            </a>
          </div>
        </div>

        <!-- Project image -->
        <div v-if="project.image" class="w-full h-80 bg-gray-200/50 dark:bg-gray-700/50 backdrop-blur-sm">
          <img :src="project.image" :alt="project.title" class="w-full h-full object-cover" />
        </div>
        <div v-else
          class="w-full h-80 bg-gray-200/50 dark:bg-gray-700/50 backdrop-blur-sm flex items-center justify-center">
          <Icon icon="ph:image" class="w-16 h-16 text-gray-400 dark:text-gray-600" />
        </div>

        <!-- Project content -->
        <div class="p-6">
          <div class="mb-8">
            <h2 class="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              {{ translations[currentLanguage as keyof typeof translations].projects.details.projectOverview }}
            </h2>
            <p class="text-gray-700 dark:text-gray-300">{{ project.description[currentLanguage as keyof typeof translations] }}</p>
          </div>

          <div class="mb-8">
            <h2 class="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              {{ translations[currentLanguage as keyof typeof translations].projects.details.features }}
            </h2>
            <ul class="list-disc pl-5 text-gray-700 dark:text-gray-300">
              <li v-for="(feature, index) in project.features[currentLanguage as keyof typeof translations]" :key="index" class="mb-2">
                {{ feature }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>