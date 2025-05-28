<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { useLocales } from '../composables/useLocales'

interface IModel {
  id: number
  title: string
  description: string
  thumbnail: string | null
  stlFile: string
  tags: string[]
  dimensions?: {
    width: number
    height: number
    depth: number
    unit: string
  }
  printSettings?: {
    layerHeight: number
    infill: number
    printTime: string
  }
}

defineProps<{
  model: IModel
}>()

const { t } = useLocales()
</script>

<template>
  <div class="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col">
    <!-- Model thumbnail/preview -->
    <div v-if="model.thumbnail" class="h-48 bg-cover bg-center relative group" :style="{ backgroundImage: `url(${model.thumbnail})` }">
      <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
        <Icon icon="ph:cube" class="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </div>
    <div v-else class="h-48 bg-gradient-to-r from-blue-500 to-sky-500 flex items-center justify-center relative group">
      <Icon icon="ph:cube" class="w-16 h-16 text-white opacity-80" />
      <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
    </div>

    <!-- Model details -->
    <div class="p-6 flex-grow flex flex-col">
      <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">{{ model.title }}</h3>
      <p class="text-gray-600 dark:text-gray-400 mb-4 flex-grow">{{ model.description }}</p>

      <!-- Dimensions -->
      <div v-if="model.dimensions" class="mb-4 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
        <div class="flex items-center mb-2">
          <Icon icon="ph:ruler" class="w-4 h-4 text-gray-500 dark:text-gray-400 mr-2" />
          <span class="text-sm font-medium text-gray-700 dark:text-gray-300">{{ t.projects.modelDetails.specifications.dimensions }}</span>
        </div>
        <div class="text-sm text-gray-600 dark:text-gray-400">
          {{ model.dimensions.width }} × {{ model.dimensions.height }} × {{ model.dimensions.depth }} {{ model.dimensions.unit }}
        </div>
      </div>

      <!-- Tags -->
      <div class="flex flex-wrap gap-2 mb-4">
        <span v-for="tag in model.tags" :key="tag" class="text-xs px-2 py-1 bg-blue-500/10 text-blue-700 dark:text-blue-300 rounded-md">
          {{ tag }}
        </span>
      </div>
    </div>

    <!-- View details section -->
    <div class="p-4 pt-0 mt-auto">
      <router-link :to="`/models/${model.id}`" class="w-full bg-gradient-to-r from-blue-500 to-sky-500 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-sky-600 transition-all duration-300 inline-flex items-center justify-center group">
        <Icon icon="ph:cube" class="mr-2 w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
        <span>{{ t.projects.modelDetails.viewIn3D }}</span>
        <Icon icon="ph:arrow-right" class="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
      </router-link>
    </div>
  </div>
</template>