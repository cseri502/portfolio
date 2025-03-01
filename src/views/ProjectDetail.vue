<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Icon } from '@iconify/vue'

const route = useRoute()
const router = useRouter()

const projects = ref([
  {
    id: 1,
    title: 'Project One',
    description: 'A detailed description of the project, its goals, and the problems it solves. This section should provide comprehensive information about what the project does and why it was created.',
    image: null,
    tags: ['Vue', 'TypeScript', 'TailwindCSS'],
    github: 'https://github.com/cseri502/project-one',
    demo: 'https://project-one-demo.com',
    features: [
      'Feature one description',
      'Feature two description',
      'Feature three description'
    ],
    challenges: 'Description of challenges faced during development and how they were overcome.',
    learnings: 'What was learned from working on this project.'
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'A detailed description of the project, its goals, and the problems it solves. This section should provide comprehensive information about what the project does and why it was created.',
    image: null,
    tags: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/cseri502/project-two',
    demo: 'https://project-two-demo.com',
    features: [
      'Feature one description',
      'Feature two description',
      'Feature three description'
    ],
    challenges: 'Description of challenges faced during development and how they were overcome.',
    learnings: 'What was learned from working on this project.'
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'A detailed description of the project, its goals, and the problems it solves. This section should provide comprehensive information about what the project does and why it was created.',
    image: null,
    tags: ['C#', 'ASP.NET', 'SQL'],
    github: 'https://github.com/cseri502/project-three',
    demo: null,
    features: [
      'Feature one description',
      'Feature two description',
      'Feature three description'
    ],
    challenges: 'Description of challenges faced during development and how they were overcome.',
    learnings: 'What was learned from working on this project.'
  },
  {
    id: 4,
    title: 'Project Four',
    description: 'A detailed description of the project, its goals, and the problems it solves. This section should provide comprehensive information about what the project does and why it was created.',
    image: null,
    tags: ['Python', 'Django', 'PostgreSQL'],
    github: 'https://github.com/cseri502/project-four',
    demo: 'https://project-four-demo.com',
    features: [
      'Feature one description',
      'Feature two description',
      'Feature three description'
    ],
    challenges: 'Description of challenges faced during development and how they were overcome.',
    learnings: 'What was learned from working on this project.'
  }
])

const project = computed(() => {
  const id = parseInt(route.params.id as string)
  return projects.value.find(p => p.id === id)
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
          Back to Projects
        </router-link>
      </div>
      
      <div class="glass-card">
        <!-- Project header -->
        <div class="p-6 border-b border-gray-200/30 dark:border-gray-700/30">
          <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">{{ project.title }}</h1>
          <div class="flex flex-wrap gap-2 mb-4">
            <span 
              v-for="tag in project.tags" 
              :key="tag"
              class="text-xs px-2 py-1 bg-sky-500/10 text-sky-500 rounded-sm"
            >
              {{ tag }}
            </span>
          </div>
          <div class="flex space-x-4">
            <a 
              v-if="project.github" 
              :href="project.github" 
              target="_blank" 
              rel="noopener noreferrer"
              class="inline-flex items-center text-gray-700 dark:text-gray-300 hover:text-sky-500 dark:hover:text-sky-500"
            >
              <Icon icon="ph:github-logo" class="mr-1 w-5 h-5" />
              GitHub Repository
            </a>
            <a 
              v-if="project.demo" 
              :href="project.demo" 
              target="_blank" 
              rel="noopener noreferrer"
              class="inline-flex items-center text-gray-700 dark:text-gray-300 hover:text-sky-500 dark:hover:text-sky-500"
            >
              <Icon icon="ph:globe" class="mr-1 w-5 h-5" />
              Live Demo
            </a>
          </div>
        </div>
        
        <!-- Project image -->
        <div v-if="project.image" class="w-full h-80 bg-gray-200/50 dark:bg-gray-700/50 backdrop-blur-sm">
          <img :src="project.image" :alt="project.title" class="w-full h-full object-cover" />
        </div>
        <div v-else class="w-full h-80 bg-gray-200/50 dark:bg-gray-700/50 backdrop-blur-sm flex items-center justify-center">
          <Icon icon="ph:image" class="w-16 h-16 text-gray-400 dark:text-gray-600" />
        </div>
        
        <!-- Project content -->
        <div class="p-6">
          <div class="mb-8">
            <h2 class="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Project Overview</h2>
            <p class="text-gray-700 dark:text-gray-300">{{ project.description }}</p>
          </div>
          
          <div class="mb-8">
            <h2 class="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Features</h2>
            <ul class="list-disc pl-5 text-gray-700 dark:text-gray-300">
              <li v-for="(feature, index) in project.features" :key="index" class="mb-2">
                {{ feature }}
              </li>
            </ul>
          </div>
          
          <div class="mb-8">
            <h2 class="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Challenges & Solutions</h2>
            <p class="text-gray-700 dark:text-gray-300">{{ project.challenges }}</p>
          </div>
          
          <div>
            <h2 class="text-xl font-semibold mb-4 text-gray-900 dark:text-white">What I Learned</h2>
            <p class="text-gray-700 dark:text-gray-300">{{ project.learnings }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>