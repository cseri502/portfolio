<script setup lang="ts">
import { watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useDark, useToggle } from '@vueuse/core'
import { useLocales, type Language } from './composables/useLocales'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

const isDark = useDark({
  selector: 'html',
  attribute: 'data-theme',
  valueDark: 'dark',
  valueLight: 'light',
});
const toggleDark = useToggle(isDark)

const route = useRoute();
const { setLanguage } = useLocales();

async function setDefaultLanguage() {
  const defaultLanguage = navigator.language.split('-')[0] || 'en';
  setLanguage(defaultLanguage as Language);
}

onMounted(() => {
  const savedLanguage = localStorage.getItem('language') as Language;

  if (savedLanguage) {
    setLanguage(savedLanguage);
  }
  else {
    setDefaultLanguage();
  }
})

watch(() => route.path, () => {
  window.scrollTo(0, 0)
})
</script>

<template>
  <div
    class="min-h-screen flex flex-col transition-colors duration-300 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 overflow-hidden">
    <Navbar :isDarkMode="isDark" @toggle-dark-mode="() => toggleDark()" />

    <main class="flex-grow relative z-10 font-inter">
      <router-view />
    </main>

    <Footer />
  </div>
</template>