<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed, inject } from 'vue'
import { Icon } from '@iconify/vue'
import en from '../locales/en.json';
import de from '../locales/de.json';
import hu from '../locales/hu.json';

defineProps<{
  isDarkMode: boolean,
  currentLanguage: string
}>()

const emit = defineEmits(['toggle-dark-mode', 'change-language'])

const currentLanguage = inject('language', ref('en'))
const isMenuOpen = ref(false)
const isScrolled = ref(false)
const isLanguageMenuOpen = ref(false)

const translations = {
  en,
  de,
  hu,
};

const t = computed(() => {
  return translations[currentLanguage.value as keyof typeof translations]
})

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  if (isMenuOpen.value) {
    isLanguageMenuOpen.value = false
  }
}

const toggleLanguageMenu = () => {
  isLanguageMenuOpen.value = !isLanguageMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const changeLanguage = (lang: string) => {
  emit('change-language', lang)
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
  <header
    class="w-full fixed top-0 z-50 transition-all duration-300 rounded-md"
    :class="[isScrolled ? 'bg-white/80 dark:bg-gray-950/80 backdrop-blur-md' : 'bg-transparent']"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center py-3">
        <div class="flex items-center">
          <router-link to="/" class="text-xl font-bold text-sky-500">
            <img src="/abstract-shape.png" alt="icon" class="w-8 h-8" />
          </router-link>
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center space-x-4">
          <router-link v-for="item in t.navItems" :to="item.link" class="nav-link">{{ item.text }}</router-link>
        </nav>

        <div class="hidden md:flex items-center space-x-4">
          <!-- Language Selector -->
          <div class="relative">
            <button 
              @click="toggleLanguageMenu"
              class="p-2 text-gray-700 dark:text-gray-300 hover:text-sky-500 dark:hover:text-sky-500 transition-colors duration-200 bg-gray-200/50 dark:bg-gray-800/50 rounded-md flex items-center"
              aria-label="Change language"
            >
              <Icon 
                :icon="currentLanguage === 'en' ? 'twemoji:flag-united-kingdom' : currentLanguage === 'de' ? 'twemoji:flag-germany' : 'twemoji:flag-hungary'"
                class="w-5 h-5" 
              />
              <Icon icon="ph:caret-down" class="w-4 h-4 ml-1" />
            </button>
            
            <!-- Language Dropdown -->
            <div 
              v-if="isLanguageMenuOpen" 
              class="absolute right-0 mt-2 w-40 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-md shadow-lg py-1 z-50"
            >
              <button 
                @click="changeLanguage('en')"
                class="flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100/80 dark:hover:bg-gray-700/80"
                :class="{'bg-gray-100/80 dark:bg-gray-700/80': currentLanguage === 'en'}"
              >
                <Icon icon="twemoji:flag-united-kingdom" class="w-5 h-5 mr-2" />
                English
              </button>
              <button 
                @click="changeLanguage('hu')"
                class="flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100/80 dark:hover:bg-gray-700/80"
                :class="{'bg-gray-100/80 dark:bg-gray-700/80': currentLanguage === 'hu'}"
              >
                <Icon icon="twemoji:flag-hungary" class="w-5 h-5 mr-2" />
                Magyar
              </button>
              <button 
                @click="changeLanguage('de')"
                class="flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100/80 dark:hover:bg-gray-700/80"
                :class="{'bg-gray-100/80 dark:bg-gray-700/80': currentLanguage === 'de'}"
              >
                <Icon icon="twemoji:flag-germany" class="w-5 h-5 mr-2" />
                Deutsch
              </button>
            </div>
          </div>
          
          <button
            @click="emit('toggle-dark-mode')"
            class="p-2 text-gray-700 dark:text-gray-300 hover:text-sky-500 dark:hover:text-sky-500 transition-colors duration-200 bg-gray-200/50 dark:bg-gray-800/50 rounded-md"
            aria-label="Toggle dark mode"
          >
            <Icon :icon="!isDarkMode ? 'ph:sun' : 'ph:moon'" class="w-5 h-5" />
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <div class="flex items-center md:hidden">
          <!-- Mobile Language Selector -->
          <div class="relative mr-2">
            <button 
              @click="toggleLanguageMenu"
              class="p-2 text-gray-700 dark:text-gray-300 bg-gray-200/50 dark:bg-gray-800/50 rounded-md"
              aria-label="Change language"
            >
              <Icon 
                :icon="currentLanguage === 'en' ? 'twemoji:flag-united-kingdom' : currentLanguage === 'de' ? 'twemoji:flag-germany' : 'twemoji:flag-hungary'"
                class="w-5 h-5" 
              />
            </button>
            
            <!-- Mobile Language Dropdown -->
            <div 
              v-if="isLanguageMenuOpen" 
              class="absolute right-0 mt-2 w-40 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-md shadow-lg py-1 z-50"
            >
              <button 
                @click="changeLanguage('en')"
                class="flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100/80 dark:hover:bg-gray-700/80"
                :class="{'bg-gray-100/80 dark:bg-gray-700/80': currentLanguage === 'en'}"
              >
                <Icon icon="twemoji:flag-united-kingdom" class="w-5 h-5 mr-2" />
                English
              </button>
              <button 
                @click="changeLanguage('hu')"
                class="flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100/80 dark:hover:bg-gray-700/80"
                :class="{'bg-gray-100/80 dark:bg-gray-700/80': currentLanguage === 'hu'}"
              >
                <Icon icon="twemoji:flag-hungary" class="w-5 h-5 mr-2" />
                Magyar
              </button>
              <button 
                @click="changeLanguage('de')"
                class="flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100/80 dark:hover:bg-gray-700/80"
                :class="{'bg-gray-100/80 dark:bg-gray-700/80': currentLanguage === 'de'}"
              >
                <Icon icon="twemoji:flag-germany" class="w-5 h-5 mr-2" />
                Deutsch
              </button>
            </div>
          </div>
          
          <button
            @click="emit('toggle-dark-mode')"
            class="p-2 mr-2 text-gray-700 dark:text-gray-300 bg-gray-200/50 dark:bg-gray-800/50 rounded-md"
            aria-label="Toggle dark mode"
          >
            <Icon v-if="isDarkMode" icon="ph:sun" class="w-5 h-5" />
            <Icon v-else icon="ph:moon" class="w-5 h-5" />
          </button>
          <button
            @click="toggleMenu"
            class="p-2 text-gray-700 dark:text-gray-300 bg-gray-200/50 dark:bg-gray-800/50 rounded-md"
            aria-label="Toggle menu"
          >
            <Icon v-if="isMenuOpen" icon="ph:x" class="w-6 h-6" />
            <Icon v-else icon="ph:list" class="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Navigation -->
    <div
      v-if="isMenuOpen"
      class="md:hidden bg-white/90 dark:bg-gray-900/90 backdrop-blur-md"
    >
      <div class="px-2 pt-2 pb-3 space-y-1">
        <router-link @click="closeMenu" to="/#about" class="nav-link block">About</router-link>
        <router-link @click="closeMenu" to="/#education" class="nav-link block">Education</router-link>
        <router-link @click="closeMenu" to="/#skills" class="nav-link block">Skills</router-link>
        <router-link @click="closeMenu" to="/projects" class="nav-link block">Projects</router-link>
        <router-link @click="closeMenu" to="/#contact" class="nav-link block">Contact</router-link>
      </div>
    </div>
  </header>
</template>