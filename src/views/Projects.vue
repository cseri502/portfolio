<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { Icon } from '@iconify/vue'
import { useLocales } from '../composables/useLocales'
import { useProjects } from '../composables/useProjects'
import ProjectCard from '../components/ProjectCard.vue'
import ModelCard from '../components/ModelCard.vue'
import Title from '../components/Title.vue'
import projects from '../data/projects.json'
import models from '../data/models.json'

const { t, currentLanguage } = useLocales()
const { activeTab, setActiveTab } = useProjects()
const filterTag = ref('')

const route = useRoute()
onMounted(() => {
  if (route.query.tab === 'models') {
    setActiveTab('models')
  }
})

const filteredProjects = computed(() => {
  if (!filterTag.value) {
    return projects
  }
  return projects.filter(project =>
    project.tags.some(tag => tag.toLowerCase().includes(filterTag.value.toLowerCase()))
  )
})

const filteredModels = computed(() => {
  if (!filterTag.value) {
    return models
  }
  return models.filter(model =>
    model.tags.some(tag => tag.toLowerCase().includes(filterTag.value.toLowerCase()))
  )
})

const allProjectTags = computed(() => {
  const tags = new Set<string>()
  projects.forEach(project => {
    project.tags.forEach(tag => tags.add(tag))
  })
  return Array.from(tags).sort()
})

const allModelTags = computed(() => {
  const tags = new Set<string>()
  models.forEach(model => {
    model.tags.forEach(tag => tags.add(tag))
  })
  return Array.from(tags).sort()
})

const currentTags = computed(() => {
  return activeTab.value === 'projects' ? allProjectTags.value : allModelTags.value
})

const currentItems = computed(() => {
  return activeTab.value === 'projects' ? filteredProjects.value : filteredModels.value
})

function switchTab(tab: string) {
  setActiveTab(tab)
  filterTag.value = ''
}</script>

<template>
  <div class="bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 backdrop-blur-sm min-h-screen py-16 relative">
    <div class="section-container">
      <Title :title="t.projects.page.title" />
      <p class="text-center text-gray-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
        Explore my portfolio of software projects and 3D modeling work. Each project showcases different skills and technologies.
      </p>

      <!-- Tab Navigation -->
      <div class="flex justify-center mb-8">
        <div class="w-1/2 flex flex-col md:flex-row bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-lg p-1 border border-gray-200/30 dark:border-gray-700/30">
          <button @click="switchTab('projects')" 
            class="w-full px-6 py-2 rounded-md transition-all duration-150 flex items-center justify-center"
            :class="activeTab === 'projects' ? 'bg-sky-500 text-white shadow-lg' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'">
            <Icon icon="ph:code" class="mr-2 w-5 h-5" />
            Software Projects
            <span class="ml-2 text-sm opacity-75">({{ projects.length }})</span>
          </button>
          <button @click="switchTab('models')" 
            class="w-full px-6 py-2 rounded-md transition-all duration-150 flex items-center justify-center"
            :class="activeTab === 'models' ? 'bg-sky-500 text-white shadow-lg' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'">
            <Icon icon="ph:cube" class="mr-2 w-5 h-5" />
            3D Models
            <span class="ml-2 text-sm opacity-75">({{ models.length }})</span>
          </button>
        </div>
      </div>

      <!-- Filter by tag -->
      <div class="mb-8">
        <div class="flex flex-wrap gap-2 justify-center">
          <button @click="filterTag = ''" class="px-3 py-1 text-sm transition-colors duration-200 rounded-sm cursor-pointer"
            :class="[
              filterTag === '' ? 'text-white' : 'bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm text-gray-700 dark:text-gray-300 border border-gray-200/30 dark:border-gray-700/30',
              activeTab === 'projects' && filterTag === '' ? 'bg-sky-500' : '',
              activeTab === 'models' && filterTag === '' ? 'bg-sky-500' : ''
            ]">
            {{ activeTab === 'projects' ? t.projects.page.all : 'All Models' }}
          </button>
          <button v-for="tag in currentTags" :key="tag" @click="filterTag = tag"
            class="px-3 py-1 text-sm transition-colors duration-200 rounded-sm cursor-pointer"
            :class="[
              filterTag === tag ? 'text-white' : 'bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm text-gray-700 dark:text-gray-300 border border-gray-200/30 dark:border-gray-700/30',
              activeTab === 'projects' && filterTag === tag ? 'bg-sky-500' : '',
              activeTab === 'models' && filterTag === tag ? 'bg-sky-500' : ''
            ]">
            {{ tag }}
          </button>
        </div>
      </div>

      <!-- Projects/Models grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Software Projects -->
        <template v-if="activeTab === 'projects'">
          <ProjectCard v-for="project in filteredProjects" :key="project.id" :project="{
            id: project.id,
            title: project.title,
            description: project.description[currentLanguage],
            demo: project.demo,
            github: project.github,
            image: project.image,
            tags: project.tags
          }" />
        </template>

        <!-- 3D Models -->
        <template v-else>
          <ModelCard v-for="model in filteredModels" :key="model.id" :model="{
            id: model.id,
            title: model.title,
            description: model.description[currentLanguage],
            thumbnail: model.thumbnail,
            stlFile: model.stlFile,
            tags: model.tags,
            dimensions: model.dimensions,
            printSettings: model.printSettings
          }" />
        </template>
      </div>

      <!-- Empty state -->
      <div v-if="currentItems.length === 0" class="text-center py-12">
        <Icon :icon="activeTab === 'projects' ? 'ph:folder-open' : 'ph:cube'" class="w-16 h-16 mx-auto text-gray-400 dark:text-gray-600" />
        <h3 class="mt-4 text-lg font-medium text-gray-900 dark:text-white">
          {{ activeTab === 'projects' ? t.projects.page.noProjects : 'No models found' }}
        </h3>
        <p class="mt-2 text-gray-600 dark:text-gray-400">
          {{ activeTab === 'projects' ? t.projects.page.noItemsFound : 'Try adjusting your filter or check back later for new models.' }}
        </p>
      </div>
    </div>
  </div>
</template>