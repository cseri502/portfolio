<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { computed, inject, ref } from 'vue'
import en from '../locales/en.json';
import de from '../locales/de.json';
import hu from '../locales/hu.json';

const translations = {
  en,
  de,
  hu,
};

const currentLanguage = inject('language', ref('en'))

const t = computed(() => {
  return translations[currentLanguage.value as keyof typeof translations]
})
</script>

<template>
  <footer class="bg-gray-100/80 dark:bg-gray-800/80 backdrop-blur-sm py-8 relative z-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="mb-4 md:mb-0">
          <p class="text-gray-600 dark:text-gray-400">{{ t.footer.text }}</p>
        </div>
        <div class="flex space-x-4">
          <a href="https://github.com/cseri502" target="_blank" rel="noopener noreferrer"
            class="text-gray-600 dark:text-gray-400 hover:text-sky-500 dark:hover:text-sky-500">
            <Icon icon="mdi:github" class="w-6 h-6" />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer"
            class="text-gray-600 dark:text-gray-400 hover:text-sky-500 dark:hover:text-sky-500">
            <Icon icon="mdi:linkedin" class="w-6 h-6" />
          </a>
          <a href="mailto:your-email@example.com"
            class="text-gray-600 dark:text-gray-400 hover:text-sky-500 dark:hover:text-sky-500">
            <Icon icon="mdi:email" class="w-6 h-6" />
          </a>
          <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer"
            class="text-gray-600 dark:text-gray-400 hover:text-sky-500 dark:hover:text-sky-500">
            <Icon icon="mdi:facebook" class="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>