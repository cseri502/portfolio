<script setup lang="ts">
import { ref, computed } from 'vue'
import { Icon } from '@iconify/vue'
import { useLocales } from '../composables/useLocales'
import ProjectCard from '../components/ProjectCard.vue'
import Title from '../components/Title.vue'
import projects from '../data/projects.json';

const { t, currentLanguage } = useLocales();
const filterTag = ref('')

const filteredProjects = computed(() => {
  if (!filterTag.value) {
    return projects
  }
  return projects.filter(project =>
    project.tags.some(tag => tag.toLowerCase().includes(filterTag.value.toLowerCase()))
  )
})

const allTags = computed(() => {
  const tags = new Set<string>()
  projects.forEach(project => {
    project.tags.forEach(tag => tags.add(tag))
  })
  return Array.from(tags).sort()
})
</script>

<template>
  <div
    class="bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 backdrop-blur-sm min-h-screen py-16 relative">
    <div class="section-container">
      <Title :title="t.projects.page.title" />
      <p class="text-center text-gray-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
        {{ t.projects.page.subtitle }}
      </p>

      <!-- Filter by tag -->
      <div class="mb-8">
        <div class="flex flex-wrap gap-2">
          <button @click="filterTag = ''" class="px-3 py-1 text-sm transition-colors duration-200 rounded-sm cursor-pointer"
            :class="filterTag === '' ? 'bg-sky-500 text-white' : 'bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm text-gray-700 dark:text-gray-300 border border-gray-200/30 dark:border-gray-700/30'">
            {{ t.projects.page.all }}
          </button>
          <button v-for="tag in allTags" :key="tag" @click="filterTag = tag"
            class="px-3 py-1 text-sm transition-colors duration-200 rounded-sm cursor-pointer"
            :class="filterTag === tag ? 'bg-sky-500 text-white' : 'bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm text-gray-700 dark:text-gray-300 border border-gray-200/30 dark:border-gray-700/30'">
            {{ tag }}
          </button>
        </div>
      </div>

      <!-- Projects grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard v-for="project in filteredProjects" :key="project.id" :project="{
          id: project.id,
          title: project.title,
          description: project.description[currentLanguage],
          demo: project.demo,
          github: project.github,
          image: project.image,
          tags: project.tags
        }" />
      </div>

      <!-- Empty state -->
      <div v-if="filteredProjects.length === 0" class="text-center py-12">
        <Icon icon="ph:folder-open" class="w-16 h-16 mx-auto text-gray-400 dark:text-gray-600" />
        <h3 class="mt-4 text-lg font-medium text-gray-900 dark:text-white">{{ t.projects.page.noProjects }}</h3>
        <p class="mt-2 text-gray-600 dark:text-gray-400">
          {{ t.projects.page.noItemsFound }}
        </p>
      </div>
    </div>
  </div>
</template>