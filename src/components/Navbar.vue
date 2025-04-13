<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { Icon } from '@iconify/vue'
import { useLocales, type Language } from '../composables/useLocales';

defineProps<{
  isDarkMode: boolean
}>()

const emit = defineEmits(['toggle-dark-mode'])

const isMenuOpen = ref(false)
const isScrolled = ref(false)
const isLanguageMenuOpen = ref(false)
const { t, currentLanguage, setLanguage } = useLocales();

const languageOptions = [
  { code: 'en', name: 'English', icon: 'twemoji:flag-united-kingdom' },
  { code: 'hu', name: 'Magyar', icon: 'twemoji:flag-hungary' },
  { code: 'de', name: 'Deutsch', icon: 'twemoji:flag-germany' }
]

const currentLanguageOption = computed(() =>
  languageOptions.find(opt => opt.code === currentLanguage.value) || languageOptions[0]
)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  if (isMenuOpen.value) isLanguageMenuOpen.value = false
}

const toggleLanguageMenu = () => {
  isLanguageMenuOpen.value = !isLanguageMenuOpen.value
}

const changeLanguage = (lang: string) => {
  setLanguage(lang as Language)
  isLanguageMenuOpen.value = false
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header class="w-full fixed top-0 z-50 transition-all duration-300 rounded-md"
    :class="isScrolled ? 'bg-white/25 dark:bg-gray-950/80 backdrop-blur-md' : 'bg-transparent'">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center py-3">
        <router-link to="/" class="text-xl font-bold text-sky-500">
          <img src="/abstract-shape.png" alt="icon" class="w-8 h-8" />
        </router-link>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center space-x-4">
          <router-link v-for="item in t.navItems" :key="item.link" :to="item.link" class="nav-link">
            {{ item.text }}
          </router-link>
        </nav>

        <!-- Control buttons -->
        <div class="flex items-center space-x-2">
          <!-- Language Selector -->
          <div class="relative">
            <button @click="toggleLanguageMenu" class="p-2 text-gray-700 dark:text-gray-300 hover:text-sky-500 dark:hover:text-sky-500 
                    transition-colors duration-200 bg-gray-200/50 dark:bg-gray-800/50 rounded-md 
                    flex items-center cursor-pointer" aria-label="Change language">
              <Icon :icon="currentLanguageOption.icon" class="w-5 h-5" />
              <Icon v-if="!isLanguageMenuOpen" icon="ph:caret-down" class="w-4 h-4 ml-1 md:block hidden" />
              <Icon v-else icon="ph:caret-up" class="w-4 h-4 ml-1 md:block hidden" />
            </button>

            <div v-if="isLanguageMenuOpen" class="absolute right-0 mt-2 w-40 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md 
                    rounded-md shadow-lg py-1 z-50">
              <button v-for="option in languageOptions" :key="option.code" @click="changeLanguage(option.code)" class="flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 
                      hover:bg-gray-100/80 dark:hover:bg-gray-700/80"
                :class="{ 'bg-gray-100/80 dark:bg-gray-700/80': currentLanguage === option.code }">
                <Icon :icon="option.icon" class="w-5 h-5 mr-2" />
                {{ option.name }}
              </button>
            </div>
          </div>

          <!-- Dark mode toggle -->
          <button @click="emit('toggle-dark-mode')" class="p-2 text-gray-700 dark:text-gray-300 hover:text-sky-500 dark:hover:text-sky-500 
                  transition-colors duration-200 bg-gray-200/50 dark:bg-gray-800/50 rounded-md cursor-pointer"
            aria-label="Toggle dark mode">
            <Icon :icon="isDarkMode ? 'ph:moon' : 'ph:sun'" class="w-5 h-5" />
          </button>

          <!-- Mobile menu toggle -->
          <button @click="toggleMenu"
            class="p-2 text-gray-700 dark:text-gray-300 bg-gray-200/50 dark:bg-gray-800/50 rounded-md md:hidden"
            aria-label="Toggle menu">
            <Icon :icon="isMenuOpen ? 'ph:x' : 'ph:list'" class="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Navigation -->
    <div v-if="isMenuOpen" class="md:hidden bg-white/90 dark:bg-gray-900/90 backdrop-blur-md">
      <div class="px-2 pt-2 pb-3 space-y-1 flex flex-col">
        <router-link v-for="item in t.navItems" :key="item.link" :to="item.link" class="nav-link block"
          @click="isMenuOpen = false">
          {{ item.text }}
        </router-link>
      </div>
    </div>
  </header>
</template>