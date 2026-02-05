<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { Icon } from '@iconify/vue'
// @ts-ignore
import Typewriter from 'typewriter-effect/dist/core'
import SkillCard from '../components/SkillCard.vue'
import EducationItem from '../components/EducationItem.vue'
import ContactForm from '../components/ContactForm.vue'
import Title from '../components/Title.vue'
import CategorySelector from '../components/CategorySelector.vue'
import skillsData from '../data/skills.json'
import certificationsData from '../data/certifications.json'
import projectsData from '../data/projects.json';
import contactData from '../data/contacts.json';
import { useLocales } from '../composables/useLocales'

const { t, currentLanguage } = useLocales();

const skills = skillsData.items;
const certifications = certificationsData.items;
const certCategories = certificationsData.categories;

const activeCertCategory = ref(certCategories.All);
const typewriterInstance = ref<Typewriter | null>(null);

const updateTypewriter = () => {
  if (typewriterInstance.value) {
    typewriterInstance.value.stop();
  }

  const app = document.getElementById('role-span') as HTMLSpanElement

  typewriterInstance.value = new Typewriter(app, {
    strings: t.value.hero.role,
    autoStart: true,
    loop: true,
    delay: 75,
  });
}

watch(currentLanguage, () => {
  updateTypewriter();
});

onMounted(() => {
  updateTypewriter();
});

const sortedEducation = computed(() => {
  return t.value.education.items.sort((a, b) => {
    if (a.startYear !== b.startYear) {
      return b.startYear - a.startYear;
    }
    return (a.endYear || Infinity) - (b.endYear || Infinity);
  });
});

const displayedCertifications = computed(() => {
  if (activeCertCategory.value === certCategories.All) {
    return [...certifications].sort((a, b) => b.date - a.date);
  }

  return certifications
    .filter(cert => cert.category === activeCertCategory.value)
    .sort((a, b) => b.date - a.date);
});
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 py-24 relative">
      <div class="section-container">
        <div class="flex flex-col md:flex-row items-center">
          <div class="md:w-1/2 mb-8 md:mb-0">
            <h1 class="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              {{ t.hero.greeting }} <span class="text-sky-500">{{ t.hero.name }}</span>
            </h1>
            <p class="text-xl font-mono text-gray-700 dark:text-gray-300 mb-8">
              &#47;&#47; <span id="role-span"></span>
            </p>
            <div class="flex flex-wrap gap-3">
              <a href="#about" class="btn btn-primary">{{ t.hero.learnMore }}</a>
              <a href="#contact" class="btn btn-outline">{{ t.hero.contactMe }}</a>
            </div>
          </div>
          <div class="md:w-1/2 flex justify-center">
            <div class="relative">
              <div
                class="absolute -inset-2 w-84 h-84 rounded-full bg-gradient-to-br from-sky-400 to-sky-600 blur-md opacity-70 animate-pulse">
              </div>
              <!-- Main frame -->
              <div
                class="w-80 h-80 rounded-full bg-gradient-to-br from-sky-400 to-sky-600 p-1.5 shadow-xl relative z-10">
                <div class="w-full h-full rounded-full bg-[url('/IMG_146.jpg')] bg-cover"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="bg-white dark:bg-gray-900 py-20 relative">
      <div class="section-container">
        <Title :title="t.about.title" />
        <div class="max-w-3xl mx-auto text-center">
          <p class="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed"
            v-html="t.about.content.replace(/\n/g, '<br>')"></p>
          <a v-if="false" href="/cv.pdf" target="_blank" class="btn btn-primary inline-flex items-center">
            <Icon icon="ph:file-pdf" class="mr-2 w-5 h-5" />
            {{ t.about.cv }}
          </a>
        </div>
      </div>
    </section>

    <!-- Education & Experience Section -->
    <section id="education" class="bg-gray-50 dark:bg-gray-950 py-20 relative">
      <div class="section-container">
        <Title :title="t.education.title" />
        <div class="max-w-3xl mx-auto">
          <div class="space-y-8">
            <EducationItem v-for="(edu, index) in sortedEducation" :key="index" :institution="edu.institution"
              :degree="edu.degree" :period="`${edu.startYear} - ${edu.endYear || t.education.present}`"
              :description="edu.description" />
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="bg-white dark:bg-gray-900 py-20 relative">
      <div class="section-container">
        <Title :title="t.skills.title" />

        <div class="mb-12">
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            <SkillCard v-for="skill in skills" :key="skill.name" :name="skill.name" :icon="skill.icon" />
          </div>
        </div>

        <!-- Certifications Section -->
        <div class="mt-16 pt-8 border-t border-gray-100 dark:border-gray-800">
          <h3 class="text-center text-2xl font-bold text-gray-900 dark:text-white">{{ t.skills.certifications }}
          </h3>
          <p class="text-center text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">{{ t.skills.certInfo }}</p>

          <!-- Certification Tabs -->
          <CategorySelector :categories="t.skills.certCategories" v-model="activeCertCategory" />

          <div class="max-w-6xl mx-auto mt-8">
            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              <div v-for="cert in displayedCertifications" :key="cert.name"
                class="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-100 dark:border-gray-700 flex items-start hover:shadow-md transition-shadow duration-200">
                <Icon icon="ph:certificate" class="w-6 h-6 text-sky-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <a :href="`/certificates/${cert.file}`" target="_blank" rel="noopener noreferrer">
                    <h4
                      class="font-medium text-gray-900 dark:text-white duration-200 transition-colors hover:text-sky-200 hover:underline cursor-pointer">
                      {{ cert.name }}</h4>
                  </a>
                  <p class="text-sm text-gray-600 dark:text-gray-400">{{ cert.organization }} | {{ cert.date }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="bg-gray-50 dark:bg-gray-950 py-20 relative">
      <div class="section-container">
        <Title :title="t.projects.title" />
        <p class="text-center text-gray-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
          {{ t.projects.description }}
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div
            v-for="project in projectsData.filter(p => ['Matrixia', 'Vault of Algorithms', 'GoMovies', 'Type Master'].includes(p.title))"
            :key="project.id"
            class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow duration-200 relative">
            
            <div class="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
              <div class="absolute right-6 bottom-6 text-6xl text-sky-800 dark:text-sky-500">
                <Icon icon="mdi:matrix" v-if="project.title === 'Matrixia'" />
                <Icon icon="ph:vault-duotone" v-if="project.title === 'Vault of Algorithms'" />
                <Icon icon="bxs:movie-play" v-if="project.title === 'GoMovies'" />
                <Icon icon="material-symbols-light:keyboard-rounded" v-if="project.title === 'Type Master'" />
              </div>
            </div>

            <div class="relative z-10">
              <div class="flex items-center mb-4">
                <div class="bg-sky-500/10 p-3 rounded-md mr-3 flex-shrink-0">
                  <Icon icon="ph:code" class="w-6 h-6 text-sky-500" />
                </div>
                <h3 class="text-xl font-bold text-gray-900 dark:text-white">{{ project.title }}</h3>
              </div>

              <p class="text-gray-600 dark:text-gray-400 mb-4">{{ project.description[currentLanguage] }}</p>

              <div class="flex flex-wrap gap-2 mb-4">
                <span v-for="tech in project.tags" :key="tech"
                  class="text-xs px-2 py-1 bg-sky-500/10 text-sky-700 dark:text-sky-300 rounded-md">
                  {{ tech }}
                </span>
              </div>

              <div class="mt-4">
                <router-link :to="`projects/${project.id}`"
                  class="inline-flex items-center px-3 py-1.5 text-sm bg-sky-600 hover:bg-sky-700 text-white rounded-md transition-colors duration-200">
                  {{ t.projects.viewProject }}
                  <Icon icon="ph:arrow-right" class="ml-1 w-4 h-4" />
                </router-link>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-10">
          <router-link to="/projects" class="btn btn-outline">
            {{ t.projects.viewAll }}
          </router-link>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="bg-white dark:bg-gray-900 py-20 relative">
      <div class="section-container">
        <Title :title="t.contact.title" />

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div>
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 h-full">
              <h3 class="text-xl font-semibold mb-6 text-gray-900 dark:text-white">{{ t.contact.info }}</h3>

              <div class="space-y-6">
                <div v-for="(item, index) in contactData" :key="index" class="flex items-start">
                  <div class="bg-sky-500/10 p-3 rounded-full mr-4 flex-shrink-0">
                    <Icon :icon="item.icon" class="w-5 h-5 text-sky-500" />
                  </div>
                  <div class="min-w-0 flex-1">
                    <h4 class="font-medium text-gray-900 dark:text-white">{{ item.title }}</h4>
                    <a :href="item.type === 'email' ? `mailto:${item.link}` : item.link"
                      :target="item.external ? '_blank' : ''" :rel="item.external ? 'noopener noreferrer' : ''"
                      class="text-gray-600 dark:text-gray-400 hover:text-sky-500 dark:hover:text-sky-500 break-all overflow-hidden text-ellipsis">
                      {{ item.link }}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>