<script setup lang="ts">
import { Icon } from '@iconify/vue'
import contacts from '../data/contacts.json';
import { useLocales } from '../composables/useLocales'

const { t } = useLocales();
</script>

<template>
  <footer class="bg-gray-100/80 dark:bg-gray-800/80 backdrop-blur-sm py-8 relative z-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="mb-4 md:mb-0">
          <p class="text-gray-600 dark:text-gray-400">{{ t.footer.text }}</p>
        </div>
        <div class="flex space-x-4">
          <a v-for="(contact, index) in contacts" :key="index" :href="contact.link"
            :target="contact.external ? '_blank' : ''" :rel="contact.external ? 'noopener noreferrer' : ''"
            class="text-gray-600 dark:text-gray-400 hover:text-sky-500 dark:hover:text-sky-500">
            <Icon :icon="contact.icon" class="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>