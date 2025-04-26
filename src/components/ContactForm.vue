<script setup lang="ts">
import { ref, onMounted } from 'vue'
import emailjs from '@emailjs/browser'
import { useLocales } from '../composables/useLocales'

const { t } = useLocales();

const name = ref('')
const email = ref('')
const message = ref('')
const isSubmitting = ref(false)
const isSuccess = ref(false)
const errorMessage = ref('')
const privacyConsent = ref(false)

onMounted(() => {
  emailjs.init({
    publicKey: "GgbAAqKVbpFjjp3g-"
  })
})

const submitForm = async () => {
  isSubmitting.value = true
  errorMessage.value = ''

  try {
    if (!privacyConsent.value) {
      errorMessage.value = t.value.contactForm.privacyError
      isSubmitting.value = false
      return
    }

    const templateParams = {
      from_name: name.value,
      from_email: email.value,
      message: message.value
    }

    await emailjs.send(
      "service_lrzhv2g",
      "template_akr5e3b",
      templateParams
    )

    isSuccess.value = true
    name.value = ''
    email.value = ''
    message.value = ''
    privacyConsent.value = false

    setTimeout(() => {
      isSuccess.value = false
    }, 5000)
  } catch (error) {
    console.error("Error sending email:", error)
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

    <div class="mb-4 flex items-start">
      <div class="flex items-center h-5">
        <input id="privacy" v-model="privacyConsent" type="checkbox" required
          class="w-4 h-4 border border-gray-300 dark:border-gray-600 bg-white/70 dark:bg-gray-700/70 text-primary focus:ring-primary focus:ring-2 rounded" />
      </div>
      <div class="ml-3 text-sm">
        <label for="privacy" class="text-gray-700 dark:text-gray-300">
          {{ t.contactForm.privacyConsent }}
        </label>
      </div>
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