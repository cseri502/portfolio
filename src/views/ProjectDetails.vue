<script setup lang="ts">
import { onMounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Icon } from '@iconify/vue'
import { useLocales } from '../composables/useLocales'
import { useProjects } from '../composables/useProjects'
import Tag from '../components/Tag.vue'
import projects from '../data/projects.json';

const { t, currentLanguage } = useLocales();
const { setActiveTab } = useProjects()
const route = useRoute()
const router = useRouter()

const project = computed(() => {
  const id = parseInt(route.params.id as string)
  return projects.find(p => p.id === id)
})

const goBackToProjects = () => {
  setActiveTab('projects')
  router.push('/projects?tab=projects')
}

onMounted(() => {
  if (!project.value) {
    goBackToProjects()
  }
})
</script>

<template>
  <div v-if="project" class="bg-gray-50 dark:bg-gray-950 min-h-screen pt-16">
    <!-- Header -->
    <div
      class="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200/30 dark:border-gray-700/30 sticky top-0 z-20">
      <div class="container mx-auto px-4 py-3 sm:py-4">
        <div class="flex items-center justify-between">
          <button @click="goBackToProjects"
            class="inline-flex items-center text-sky-500 hover:text-sky-600 transition-colors">
            <Icon icon="ph:arrow-left" class="mr-1 sm:mr-2 w-4 h-4 sm:w-5 sm:h-5" />
            <span class="text-sm sm:text-base">{{ t.projects.details.backTo.projects }}</span>
          </button>
          <h1 class="text-lg sm:text-xl font-bold text-gray-900 dark:text-white text-center flex-1 mx-4 truncate">
            {{ project.title }}
          </h1>
          <div class="w-12"></div> <!-- Spacer for balance -->
        </div>
      </div>
    </div>

    <!-- Content -->
    <div class="container mx-auto px-4 py-6 sm:py-8">
      <div class="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg">
        <!-- Project header -->
        <div class="p-6 border-b border-gray-200/30 dark:border-gray-700/30">
          <div class="flex flex-wrap gap-2 mb-4">
            <Tag v-for="tag in project.tags" :text="tag" :isSmall="false" />
          </div>
          <div class="flex flex-wrap gap-4 mb-4">
            <a v-if="project.github" :href="project.github" target="_blank" rel="noopener noreferrer"
              class="inline-flex items-center text-gray-700 dark:text-gray-300 hover:text-sky-500 dark:hover:text-sky-500 transition-colors">
              <Icon icon="ph:github-logo" class="mr-2 w-5 h-5" />
              GitHub Repository
            </a>
            <a v-if="project.demo" :href="project.demo" target="_blank" rel="noopener noreferrer"
              class="inline-flex items-center text-gray-700 dark:text-gray-300 hover:text-sky-500 dark:hover:text-sky-500 transition-colors">
              <Icon icon="ph:globe" class="mr-2 w-5 h-5" />
              {{ t.projects.details.demo }}
            </a>
          </div>
        </div>

        <!-- Project image -->
        <div v-if="project.image" class="w-full h-80 sm:h-96 bg-gray-200/50 dark:bg-gray-700/50">
          <img :src="project.image" :alt="project.title" class="w-full h-full object-cover" />
        </div>
        <div v-else
          class="w-full h-80 sm:h-96 bg-gradient-to-r from-sky-500 to-indigo-500 flex items-center justify-center">
          <Icon icon="ph:code" class="w-20 h-20 text-white opacity-80" />
        </div>

        <!-- Project content -->
        <div class="p-6">
          <div class="mb-8">
            <h2 class="text-xl font-semibold mb-4 text-gray-900 dark:text-white flex items-center">
              <Icon icon="ph:info" class="mr-2 w-5 h-5 text-sky-500" />
              {{ t.projects.details.projectOverview }}
            </h2>
            <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <p class="text-gray-700 dark:text-gray-300 leading-relaxed">{{ project.description[currentLanguage] }}</p>
            </div>
          </div>

          <div class="mb-8">
            <h2 class="text-xl font-semibold mb-4 text-gray-900 dark:text-white flex items-center">
              <Icon icon="ph:list" class="mr-2 w-5 h-5 text-sky-500" />
              {{ t.projects.details.features }}
            </h2>
            <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <ul class="space-y-3">
                <li v-for="(feature, index) in project.features[currentLanguage]" :key="index" 
                  class="flex items-start text-gray-700 dark:text-gray-300">
                  <Icon icon="ph:check-circle" class="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>{{ feature }}</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Actions -->
          <div class="flex flex-col sm:flex-row gap-4">
            <a v-if="project.demo" :href="project.demo" target="_blank" rel="noopener noreferrer"
              class="flex-1 bg-gradient-to-r from-sky-500 to-indigo-500 text-white px-6 py-3 rounded-lg hover:from-sky-600 hover:to-indigo-600 transition-all duration-300 text-center font-medium inline-flex items-center justify-center">
              <Icon icon="ph:globe" class="mr-2 w-5 h-5" />
              View Live Demo
            </a>
            <a v-if="project.github" :href="project.github" target="_blank" rel="noopener noreferrer"
              class="flex-1 bg-gray-800 dark:bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-900 dark:hover:bg-gray-600 transition-all duration-300 text-center font-medium inline-flex items-center justify-center">
              <Icon icon="ph:github-logo" class="mr-2 w-5 h-5" />
              View Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>