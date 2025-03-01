<script setup lang="ts">
import { ref, computed } from 'vue'
import { Icon } from '@iconify/vue'
import ProjectCard from '../components/ProjectCard.vue'

const projects = ref([
  {
    id: 1,
    title: 'Project One',
    description: 'A brief description of the project and what technologies were used.',
    image: null,
    tags: ['Vue', 'TypeScript', 'TailwindCSS'],
    github: 'https://github.com/cseri502/project-one',
    demo: 'https://project-one-demo.com'
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'A brief description of the project and what technologies were used.',
    image: null,
    tags: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/cseri502/project-two',
    demo: 'https://project-two-demo.com'
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'A brief description of the project and what technologies were used.',
    image: null,
    tags: ['C#', 'ASP.NET', 'SQL'],
    github: 'https://github.com/cseri502/project-three',
    demo: null
  },
  {
    id: 4,
    title: 'Project Four',
    description: 'A brief description of the project and what technologies were used.',
    image: null,
    tags: ['Python', 'Django', 'PostgreSQL'],
    github: 'https://github.com/cseri502/project-four',
    demo: 'https://project-four-demo.com'
  }
])

const filterTag = ref('')

const filteredProjects = computed(() => {
  if (!filterTag.value) {
    return projects.value
  }
  return projects.value.filter(project => 
    project.tags.some(tag => tag.toLowerCase().includes(filterTag.value.toLowerCase()))
  )
})

const allTags = computed(() => {
  const tags = new Set<string>()
  projects.value.forEach(project => {
    project.tags.forEach(tag => tags.add(tag))
  })
  return Array.from(tags).sort()
})
</script>

<template>
  <div class="bg-gray-50/80 dark:bg-gray-950/80 backdrop-blur-sm min-h-screen py-16 relative">
    <div class="section-container">
      <h1 class="text-4xl font-bold mb-2 text-gray-900 dark:text-white">Projects</h1>
      <p class="text-gray-700 dark:text-gray-300 mb-8 max-w-2xl">
        Here are some of the projects I've worked on. You can filter them by technology or click on a project to see more details.
      </p>
      
      <!-- Filter by tag -->
      <div class="mb-8">
        <div class="flex flex-wrap gap-2">
          <button
            @click="filterTag = ''"
            class="px-3 py-1 text-sm transition-colors duration-200 rounded-sm"
            :class="filterTag === '' ? 'bg-sky-500 text-white' : 'bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm text-gray-700 dark:text-gray-300 border border-gray-200/30 dark:border-gray-700/30'"
          >
            All
          </button>
          <button
            v-for="tag in allTags"
            :key="tag"
            @click="filterTag = tag"
            class="px-3 py-1 text-sm transition-colors duration-200 rounded-sm"
            :class="filterTag === tag ? 'bg-sky-500 text-white' : 'bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm text-gray-700 dark:text-gray-300 border border-gray-200/30 dark:border-gray-700/30'"
          >
            {{ tag }}
          </button>
        </div>
      </div>
      
      <!-- Projects grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard 
          v-for="project in filteredProjects" 
          :key="project.id"
          :project="project"
        />
      </div>
      
      <!-- Empty state -->
      <div v-if="filteredProjects.length === 0" class="text-center py-12">
        <Icon icon="ph:folder-open" class="w-16 h-16 mx-auto text-gray-400 dark:text-gray-600" />
        <h3 class="mt-4 text-lg font-medium text-gray-900 dark:text-white">No projects found</h3>
        <p class="mt-2 text-gray-600 dark:text-gray-400">
          No projects match the selected filter. Try selecting a different technology.
        </p>
      </div>
    </div>
  </div>
</template>