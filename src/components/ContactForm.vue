<script setup lang="ts">
import { ref, inject, computed } from 'vue'
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

const name = ref('')
const email = ref('')
const message = ref('')
const isSubmitting = ref(false)
const isSuccess = ref(false)
const errorMessage = ref('')

const submitForm = async () => {
  isSubmitting.value = true
  errorMessage.value = ''

  try {
    // TODO: implement actual form submission logic
    // Simulate form submission delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Simulate successful submission
    isSuccess.value = true
    name.value = ''
    email.value = ''
    message.value = ''

    // Reset success message after 5 seconds
    setTimeout(() => {
      isSuccess.value = false
    }, 5000)
  } catch (error) {
    errorMessage.value = 'There was an error sending your message. Please try again.'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <form @submit.prevent="submitForm" class="glass-card p-6">
    <h3 class="text-xl font-semibold mb-4 text-gray-900 dark:text-white">{{ t.contactForm.title }}</h3>

    <div class="mb-4">
      <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
        {{ t.contactForm.name }}
      </label>
      <input id="name" v-model="name" type="text" required
        class="w-full px-3 py-2 border border-gray-300/50 dark:border-gray-600/50 bg-white/70 dark:bg-gray-700/70 backdrop-blur-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary rounded-md" />
    </div>

    <div class="mb-4">
      <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
        {{ t.contactForm.email }}
      </label>
      <input id="email" v-model="email" type="email" required
        class="w-full px-3 py-2 border border-gray-300/50 dark:border-gray-600/50 bg-white/70 dark:bg-gray-700/70 backdrop-blur-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary rounded-md" />
    </div>

    <div class="mb-4">
      <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
        {{ t.contactForm.message }}
      </label>
      <textarea id="message" v-model="message" rows="4" required
        class="w-full px-3 py-2 border border-gray-300/50 dark:border-gray-600/50 bg-white/70 dark:bg-gray-700/70 backdrop-blur-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary rounded-md"></textarea>
    </div>

    <div v-if="isSuccess"
      class="mb-4 p-3 bg-green-100/70 text-green-800 dark:bg-green-800/20 dark:text-green-400 backdrop-blur-sm rounded-md">
      {{ t.contactForm.success }}
    </div>

    <div v-if="errorMessage"
      class="mb-4 p-3 bg-red-100/70 text-red-800 dark:bg-red-800/20 dark:text-red-400 backdrop-blur-sm rounded-md">
      {{ errorMessage }}
    </div>

    <button type="submit" class="btn btn-primary w-full" :disabled="isSubmitting">
      <span v-if="isSubmitting">{{ t.contactForm.sending }}</span>
      <span v-else>{{ t.contactForm.send }}</span>
    </button>
  </form>
</template>