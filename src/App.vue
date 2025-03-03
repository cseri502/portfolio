<script setup lang="ts">
import { ref, watch, onMounted, provide, computed } from 'vue'
import axios from 'axios'
import { useRoute } from 'vue-router'
import { useDark, useToggle } from '@vueuse/core'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import en from './locales/en.json';
import de from './locales/de.json';
import hu from './locales/hu.json';

const translations = { en, de, hu };

const isDark = useDark({
  selector: 'html',
  attribute: 'data-theme',
  valueDark: 'dark',
  valueLight: 'light',
});
const toggleDark = useToggle(isDark)

const route = useRoute()
const currentLanguage = ref('en')

provide('language', currentLanguage)

const t = computed(() => {
  return translations[currentLanguage.value as keyof typeof translations]
});

async function setDefaultLanguage() {
  try {
    const response = await axios.get('https://ipapi.co/json/');
    const countryCode = response.data.country_code;

    const languageMap: Record<string, string> = {
      'US': 'en',
      'HU': 'hu',
      'DE': 'de',
    };

    const defaultLanguage = languageMap[countryCode] || 'en';
    changeLanguage(defaultLanguage);

  } catch (error) {
    console.error('Error fetching country data:', error);
    currentLanguage.value = 'en';
  }
}

const changeLanguage = (lang: string) => {
  currentLanguage.value = lang
  localStorage.setItem('language', lang)
  document.title = t.value.title;
}

onMounted(() => {
  const savedLanguage = localStorage.getItem('language')

  if (savedLanguage) {
    currentLanguage.value = savedLanguage
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
    <Navbar :isDarkMode="isDark" :currentLanguage="currentLanguage" @toggle-dark-mode="() => toggleDark()"
      @change-language="changeLanguage" />

    <main class="flex-grow relative z-10 font-inter">
      <router-view />
    </main>

    <Footer />
  </div>
</template>