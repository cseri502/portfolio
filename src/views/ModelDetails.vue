<script setup lang="ts">
import { onMounted, computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Icon } from '@iconify/vue'
import { useLocales } from '../composables/useLocales'
import { useProjects } from '../composables/useProjects'
import STLViewer from '../components/StlViewer.vue'
import Tag from '../components/Tag.vue'
import models from '../data/models.json'

const { t, currentLanguage } = useLocales()
const { setActiveTab } = useProjects()
const route = useRoute()
const router = useRouter()
const activeTab = ref('info') // 'info' or 'viewer'

const model = computed(() => {
  const id = parseInt(route.params.id as string)
  return models.find(m => m.id === id)
})

const goBackToProjects = () => {
  setActiveTab('models')
  router.push('/projects?tab=models')
}

onMounted(() => {
  if (!model.value) {
    goBackToProjects()
  }
})

</script>

<template>
  <div v-if="model" class="bg-gray-50 dark:bg-gray-950 min-h-screen pt-16">
    <!-- Header -->
    <div
      class="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200/30 dark:border-gray-700/30 sticky top-0 z-20">
      <div class="px-4 py-3 sm:py-4 flex justify-start">
        <button @click="goBackToProjects"
          class="inline-flex items-center text-sky-500 hover:text-sky-600 transition-colors">
          <Icon icon="ph:arrow-left" class="mr-1 sm:mr-2 w-4 h-4 sm:w-5 sm:h-5" />
          <span class="text-sm sm:text-base">{{ t.projects.details.backTo.models }}</span>
        </button>
      </div>
    </div>

    <!-- Mobile Tab Navigation -->
    <div
      class="lg:hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 sticky top-[60px] z-10">
      <div class="flex">
        <button @click="activeTab = 'info'" :class="[
          'flex-1 py-3 px-4 text-center font-medium transition-colors',
          activeTab === 'info'
            ? 'text-sky-600 dark:text-sky-400 border-b-2 border-sky-600 dark:border-sky-400 bg-sky-50 dark:bg-sky-900/20'
            : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
        ]">
          <Icon icon="ph:info" class="w-5 h-5 mx-auto mb-1" />
          <div class="text-sm">{{ t.projects.modelDetails.mobileNav[0] }}</div>
        </button>
        <button @click="activeTab = 'viewer'" :class="[
          'flex-1 py-3 px-4 text-center font-medium transition-colors',
          activeTab === 'viewer'
            ? 'text-sky-600 dark:text-sky-400 border-b-2 border-sky-600 dark:border-sky-400 bg-sky-50 dark:bg-sky-900/20'
            : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
        ]">
          <Icon icon="ph:cube" class="w-5 h-5 mx-auto mb-1" />
          <div class="text-sm">{{ t.projects.modelDetails.mobileNav[1] }}</div>
        </button>
      </div>
    </div>

    <!-- Desktop: Split screen layout -->
    <div class="hidden lg:flex h-[calc(100vh-80px)]">
      <!-- Left side - Model information -->
      <div class="w-2/5 overflow-y-auto bg-white dark:bg-gray-900">
        <div class="p-8">
          <!-- Model header -->
          <div class="mb-8">
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">{{ model.title }}</h2>
            <div class="flex flex-wrap gap-2 mb-6">
              <Tag v-for="tag in model.tags" :text="tag" :isSmall="false" />
            </div>
            <p class="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              {{ model.description[currentLanguage] }}
            </p>
          </div>

          <!-- Specifications -->
          <div class="mb-8">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
              <Icon icon="ph:ruler" class="mr-2 w-5 h-5 text-sky-500" />
              {{ t.projects.modelDetails.specifications.title }}
            </h3>
            <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <div v-if="model.dimensions" class="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <div class="text-sm text-gray-500 dark:text-gray-400">{{ t.projects.modelDetails.specifications.dimensions }}</div>
                  <div class="font-medium text-gray-900 dark:text-white">
                    {{ model.dimensions.width }} × {{ model.dimensions.height }} × {{ model.dimensions.depth }} {{
                      model.dimensions.unit }}
                  </div>
                </div>
                <div>
                  <div class="text-sm text-gray-500 dark:text-gray-400">{{ t.projects.modelDetails.specifications.volume }}</div>
                  <div class="font-medium text-gray-900 dark:text-white">
                    {{ (model.dimensions.width * model.dimensions.height * model.dimensions.depth).toFixed(2) }} {{
                      model.dimensions.unit }}³
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Print Settings -->
          <div v-if="model.printSettings" class="mb-8">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
              <Icon icon="ph:gear" class="mr-2 w-5 h-5 text-sky-500" />
              {{ t.projects.modelDetails.printSettings.title }}
            </h3>
            <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <div class="text-sm text-gray-500 dark:text-gray-400">{{ t.projects.modelDetails.printSettings.layerHeight }}</div>
                  <div class="font-medium text-gray-900 dark:text-white">{{ model.printSettings.layerHeight }}mm</div>
                </div>
                <div>
                  <div class="text-sm text-gray-500 dark:text-gray-400">{{ t.projects.modelDetails.printSettings.infill }}</div>
                  <div class="font-medium text-gray-900 dark:text-white">{{ model.printSettings.infill }}%</div>
                </div>
                <div class="col-span-2">
                  <div class="text-sm text-gray-500 dark:text-gray-400">{{ t.projects.modelDetails.printSettings.printTime }}</div>
                  <div class="font-medium text-gray-900 dark:text-white">{{ model.printSettings.printTime }}</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Actions -->
          <div class="flex space-x-4">
            <a :href="model.stlFile" download
              class="flex-1 bg-gradient-to-r from-blue-500 to-sky-500 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-sky-600 transition-all duration-300 text-center font-medium">
              <Icon icon="ph:download" class="mr-2 w-5 h-5 inline" />
              {{ t.projects.modelDetails.download }}
            </a>
          </div>
        </div>
      </div>

      <!-- Right side - 3D viewer -->
      <div class="w-3/5 bg-gray-100 dark:bg-gray-800 relative">
        <div class="absolute inset-4 bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
          <!-- Viewer controls -->
          <div class="absolute top-4 right-4 z-10 flex space-x-2">
            <button
              class="p-2 bg-white/90 dark:bg-gray-800/90 rounded-lg shadow-lg text-gray-600 dark:text-gray-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
              title="Reset View">
              <Icon icon="ph:house" class="w-5 h-5" />
            </button>
            <button
              class="p-2 bg-white/90 dark:bg-gray-800/90 rounded-lg shadow-lg text-gray-600 dark:text-gray-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
              title="Fullscreen">
              <Icon icon="ph:arrows-out" class="w-5 h-5" />
            </button>
          </div>

          <!-- Loading state -->
          <div class="absolute inset-0 flex items-center justify-center bg-gray-50 dark:bg-gray-800">
            <div class="text-center">
              <Icon icon="ph:cube" class="w-12 h-12 text-gray-400 dark:text-gray-600 mb-4 animate-pulse" />
              <div class="text-gray-500 dark:text-gray-400">Loading 3D model...</div>
            </div>
          </div>

          <!-- STL Viewer -->
          <STLViewer :src="model.stlFile" class="w-full h-full" />
        </div>

        <!-- Instructions -->
        <div
          class="absolute bottom-4 left-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
          <h4 class="font-medium text-gray-900 dark:text-white mb-2">{{ t.projects.modelDetails.controls.title }}</h4>
          <div class="text-sm text-gray-600 dark:text-gray-400 space-y-1">
            <div class="flex items-center">
              <Icon icon="ph:mouse" class="w-4 h-4 mr-2" />
              <span>{{ t.projects.modelDetails.controls.rotate }}</span>
            </div>
            <div class="flex items-center">
              <Icon icon="ph:mouse" class="w-4 h-4 mr-2" />
              <span>{{ t.projects.modelDetails.controls.move }}</span>
            </div>
            <div class="flex items-center">
              <Icon icon="ph:mouse" class="w-4 h-4 mr-2" />
              <span>{{ t.projects.modelDetails.controls.zoom }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile: Tabbed content -->
    <div class="lg:hidden">
      <!-- Info Tab -->
      <div v-show="activeTab === 'info'" class="bg-white dark:bg-gray-900 min-h-[calc(100vh-120px)]">
        <div class="p-4 sm:p-6">
          <!-- Model header -->
          <div class="mb-6">
            <div class="flex flex-wrap gap-2 mb-4">
              <span v-for="tag in model.tags" :key="tag"
                class="text-xs sm:text-sm px-2 sm:px-3 py-1 bg-sky-500/10 text-sky-700 dark:text-sky-300 rounded-md">
                {{ tag }}
              </span>
            </div>
            <p class="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
              {{ model.description[currentLanguage] }}
            </p>
          </div>

          <!-- Specifications -->
          <div class="mb-6">
            <h3 class="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
              <Icon icon="ph:ruler" class="mr-2 w-4 h-4 sm:w-5 sm:h-5 text-sky-500" />
              {{ t.projects.modelDetails.specifications.title }}
            </h3>
            <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 sm:p-6">
              <div v-if="model.dimensions" class="space-y-3 sm:space-y-4">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <div class="text-xs sm:text-sm text-gray-500 dark:text-gray-400">{{ t.projects.modelDetails.specifications.dimensions }}</div>
                    <div class="font-medium text-gray-900 dark:text-white text-sm sm:text-base">
                      {{ model.dimensions.width }} × {{ model.dimensions.height }} × {{ model.dimensions.depth }} {{
                        model.dimensions.unit }}
                    </div>
                  </div>
                  <div>
                    <div class="text-xs sm:text-sm text-gray-500 dark:text-gray-400">{{ t.projects.modelDetails.specifications.volume }}</div>
                    <div class="font-medium text-gray-900 dark:text-white text-sm sm:text-base">
                      {{ (model.dimensions.width * model.dimensions.height * model.dimensions.depth).toFixed(2) }} {{
                        model.dimensions.unit }}³
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Print Settings -->
          <div v-if="model.printSettings" class="mb-6">
            <h3 class="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
              <Icon icon="ph:gear" class="mr-2 w-4 h-4 sm:w-5 sm:h-5 text-sky-500" />
              {{ t.projects.modelDetails.printSettings.title }}
            </h3>
            <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 sm:p-6">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <div class="text-xs sm:text-sm text-gray-500 dark:text-gray-400">{{ t.projects.modelDetails.printSettings.layerHeight }}</div>
                  <div class="font-medium text-gray-900 dark:text-white text-sm sm:text-base">{{
                    model.printSettings.layerHeight }}mm</div>
                </div>
                <div>
                  <div class="text-xs sm:text-sm text-gray-500 dark:text-gray-400">{{ t.projects.modelDetails.printSettings.infill }}</div>
                  <div class="font-medium text-gray-900 dark:text-white text-sm sm:text-base">{{
                    model.printSettings.infill }}%</div>
                </div>
                <div class="sm:col-span-2">
                  <div class="text-xs sm:text-sm text-gray-500 dark:text-gray-400">{{ t.projects.modelDetails.printSettings.printTime }}</div>
                  <div class="font-medium text-gray-900 dark:text-white text-sm sm:text-base">{{
                    model.printSettings.printTime }}</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Actions -->
          <div
            class="sticky bottom-0 bg-white dark:bg-gray-900 pt-4 pb-4 sm:pb-6 border-t border-gray-200 dark:border-gray-700 -mx-4 sm:-mx-6 px-4 sm:px-6 mt-8">
            <a :href="model.stlFile" download
              class="w-full bg-gradient-to-r from-blue-500 to-sky-500 text-white px-6 py-3 sm:py-4 rounded-lg hover:from-blue-600 hover:to-sky-600 transition-all duration-300 text-center font-medium flex items-center justify-center">
              <Icon icon="ph:download" class="mr-2 w-5 h-5" />
              {{ t.projects.modelDetails.download }}
            </a>
          </div>
        </div>
      </div>

      <!-- 3D Viewer Tab -->
      <div v-show="activeTab === 'viewer'" class="bg-gray-100 dark:bg-gray-800 h-[calc(100vh-120px)] p-2 sm:p-4">
        <div class="h-full bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden relative">
          <!-- Mobile viewer controls -->
          <div class="absolute top-2 sm:top-4 right-2 sm:right-4 z-10 flex space-x-1 sm:space-x-2">
            <button
              class="p-2 bg-white/90 dark:bg-gray-800/90 rounded-lg shadow-lg text-gray-600 dark:text-gray-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
              title="Reset View">
              <Icon icon="ph:house" class="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button
              class="p-2 bg-white/90 dark:bg-gray-800/90 rounded-lg shadow-lg text-gray-600 dark:text-gray-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
              title="Fullscreen">
              <Icon icon="ph:arrows-out" class="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          <!-- Loading state -->
          <div class="absolute inset-0 flex items-center justify-center bg-gray-50 dark:bg-gray-800">
            <div class="text-center">
              <Icon icon="ph:cube"
                class="w-8 h-8 sm:w-12 sm:h-12 text-gray-400 dark:text-gray-600 mb-2 sm:mb-4 animate-pulse" />
              <div class="text-gray-500 dark:text-gray-400 text-sm sm:text-base">Loading 3D model...</div>
            </div>
          </div>

          <!-- STL Viewer -->
          <STLViewer :src="model.stlFile" class="w-full h-full" />

          <!-- Mobile Instructions -->
          <div
            class="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-lg p-3 sm:p-4 shadow-lg">
            <h4 class="font-medium text-gray-900 dark:text-white mb-2 text-sm sm:text-base">{{ t.projects.modelDetails.touchControls.title }}</h4>
            <div class="text-xs sm:text-sm text-gray-600 dark:text-gray-400 space-y-1">
              <div class="flex items-center">
                <Icon icon="ph:hand" class="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                <span>{{ t.projects.modelDetails.touchControls.rotate }}</span>
              </div>
              <div class="flex items-center">
                <Icon icon="ph:arrows-out" class="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                <span>{{ t.projects.modelDetails.touchControls.zoom }}</span>
              </div>
              <div class="flex items-center">
                <Icon icon="ph:hand" class="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                <span>{{ t.projects.modelDetails.touchControls.move }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>