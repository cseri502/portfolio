<template>
  <div class="flex justify-center">
    <div class="w-full max-w-md">
      <!-- MD+ -->
      <div class="hidden md:flex justify-center overflow-x-auto pb-2">
        <div class="inline-flex rounded-lg border border-gray-200 dark:border-gray-700 p-1 bg-gray-50 dark:bg-gray-800">
          <button
            v-for="(category, index) in categories"
            :key="category"
            @click="$emit('update:modelValue', index)"
            class="px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            :class="modelValue === index
              ? 'bg-sky-500 text-white shadow-md'
              : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'"
          >
            {{ category }}
          </button>
        </div>
      </div>

      <!-- SM -->
      <div class="md:hidden flex flex-wrap justify-center gap-2 p-2">
        <button
          v-for="(category, index) in categories"
          :key="category"
          @click="$emit('update:modelValue', index)"
          class="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
          :class="modelValue === index
            ? 'bg-sky-500 text-white shadow-md'
            : 'border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'"
        >
          {{ category }}
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  categories: string[];
  modelValue: number;
}>();

defineEmits<{
  (e: 'update:modelValue', value: number): void;
}>();
</script>
