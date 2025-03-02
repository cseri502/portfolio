<script setup lang="ts">
import { ref, inject } from 'vue'
import { Icon } from '@iconify/vue'
import { computed } from 'vue'
import SkillCard from '../components/SkillCard.vue'
import EducationItem from '../components/EducationItem.vue'
import ContactForm from '../components/ContactForm.vue'
import Title from '../components/Title.vue'
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

const skills = [
  { name: 'HTML', icon: 'vscode-icons:file-type-html', category: 'Frontend' },
  { name: 'CSS', icon: 'devicon:css3', category: 'Frontend' },
  { name: 'SASS', icon: 'vscode-icons:file-type-sass', category: 'Frontend' },
  { name: 'LESS', icon: 'vscode-icons:file-type-less', category: 'Frontend' },
  { name: 'JavaScript', icon: 'vscode-icons:file-type-js-official', category: 'Frontend' },
  { name: 'TypeScript', icon: 'vscode-icons:file-type-typescript-official', category: 'Frontend' },
  { name: 'jQuery', icon: 'devicon:jquery', category: 'Frontend' },
  { name: 'Vue', icon: 'devicon:vuejs', category: 'Frontend' },
  { name: 'React', icon: 'devicon:react', category: 'Frontend' },
  { name: 'TailwindCSS', icon: 'vscode-icons:file-type-tailwind', category: 'Frontend' },
  { name: 'Bootstrap', icon: 'logos:bootstrap', category: 'Frontend' },
  { name: 'C#', icon: 'devicon:csharp', category: 'Backend' },
  { name: 'C++', icon: 'vscode-icons:file-type-cpp3', category: 'Backend' },
  { name: 'Python', icon: 'vscode-icons:file-type-python', category: 'Backend' },
  { name: 'ASP.NET', icon: 'logos:dotnet', category: 'Backend' },
  { name: 'Node.JS', icon: 'logos:nodejs-icon', category: 'Backend' },
  { name: 'MongoDB', icon: 'vscode-icons:file-type-mongo', category: 'Database' },
  { name: 'MySQL', icon: 'logos:mysql', category: 'Database' },
  { name: 'Git', icon: 'logos:git-icon', category: 'Tools' },
  { name: 'Bash', icon: 'logos:bash-icon', category: 'Tools' },
]

const certifications = [
  { name: 'Introduction to Networks', organization: 'Cisco CCNA', date: '2022', category: 'Networking' },
  { name: 'Routing and Switching Essentials', organization: 'Cisco CCNA', date: '2022', category: 'Networking' },
  { name: 'Scaling Networks', organization: 'Cisco CCNA', date: '2023', category: 'Networking' },
  { name: 'Connecting Networks', organization: 'Cisco CCNA', date: '2023', category: 'Networking' },
  { name: 'HTML and CSS', organization: 'Certiport ITS', date: '2025', category: 'Development' },
  { name: 'JavaScript', organization: 'Certiport ITS', date: '2025', category: 'Development' },
  { name: 'Python', organization: 'Certiport ITS', date: '2025', category: 'Development' },
  { name: 'HTML5 Application Development', organization: 'Certiport ITS', date: '2025', category: 'Development' },
  { name: 'Device Configuration and Management', organization: 'Certiport ITS', date: '2025', category: 'System' },
]

const education = [
  {
    institution: 'DSZC Mechwart',
    degree: 'System Administrator',
    startYear: 2019,
    endYear: 2024,
    description: 'Specialized in Windows/Linux server administration, Cisco networking, and system administration.'
  },
  {
    institution: 'DE-IK',
    degree: 'Bsc Computer Science',
    startYear: 2024,
    endYear: null,
    description: 'Currently pursuing a degree in Computer Science.'
  }
]

const filterCategory = ref('All')
const certFilterCategory = ref('All')

const filteredSkills = computed(() => {
  if (filterCategory.value === 'All') {
    return skills
  }
  return skills.filter(skill => skill.category === filterCategory.value)
})

const filteredCertifications = computed(() => {
  if (certFilterCategory.value === 'All') {
    return certifications
  }
  return certifications.filter(cert => cert.category === certFilterCategory.value)
})

const sortedEducation = computed(() => {
  return education.sort((a, b) => {
    if (a.startYear !== b.startYear) {
      return b.startYear - a.startYear;
    }

    return (a.endYear || Infinity) - (b.endYear || Infinity);
  });
});

const categories = ['All', 'Frontend', 'Backend', 'Database', 'Tools']
const certCategories = ['All', 'Networking', 'Development', 'System']
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gray-50 dark:bg-gray-950 py-20 relative">
      <div class="section-container">
        <div class="flex flex-col md:flex-row items-center">
          <div class="md:w-1/2 mb-8 md:mb-0">
            <h1 class="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              {{ t.hero.greeting }} <span class="text-sky-500">{{ t.hero.name }}</span>
            </h1>
            <p class="text-xl text-gray-700 dark:text-gray-300 mb-6">
              {{ t.hero.role }}
            </p>
            <div class="flex space-x-4">
              <a href="#about" class="btn btn-primary">{{ t.hero.learnMore }}</a>
              <a href="#contact" class="btn btn-outline">{{ t.hero.contactMe }}</a>
            </div>
          </div>
          <div class="md:w-1/2 flex justify-center">
            <div class="w-64 h-64 bg-sky-500/10 flex items-center justify-center rounded-md backdrop-blur-sm">
              <Icon icon="ph:user" class="w-32 h-32 text-sky-500" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm py-16 relative">
      <div class="section-container">
        <Title :title="t.about.title" />
        <div class="max-w-3xl mx-auto text-center">
          <p class="text-lg text-gray-700 dark:text-gray-300 mb-8">
            {{ t.about.content }}
          </p>
          <a href="/cv.pdf" target="_blank" class="btn btn-primary inline-flex items-center">
            <Icon icon="ph:file-pdf" class="mr-2 w-5 h-5" />
            {{ t.about.cv }}
          </a>
        </div>
      </div>
    </section>

    <!-- Education Section (moved up) -->
    <section id="education" class="bg-gray-50/80 dark:bg-gray-950/80 backdrop-blur-sm py-16 relative">
      <div class="section-container">
        <Title :title="t.education.title" />
        <div class="max-w-3xl mx-auto">
          <div class="space-y-8">
            <EducationItem v-for="(edu, index) in sortedEducation" :key="index" :institution="edu.institution"
              :degree="edu.degree" :period="`${edu.startYear} - ${edu.endYear || 'present'}`"
              :description="edu.description" />
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm py-16 relative">
      <div class="section-container">
        <Title :title="t.skills.title" />

        <div class="flex justify-center mb-8">
          <div
            class="inline-flex border border-gray-200/30 dark:border-gray-700/30 rounded-md overflow-hidden backdrop-blur-sm">
            <button v-for="category in categories" :key="category" @click="filterCategory = category"
              class="px-4 py-2 text-sm font-medium transition-colors duration-200"
              :class="filterCategory === category ? 'bg-sky-500 text-white' : 'bg-white/70 dark:bg-gray-800/70 text-gray-700 dark:text-gray-300 hover:bg-gray-100/70 dark:hover:bg-gray-700/70'">
              {{ category }}
            </button>
          </div>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          <SkillCard v-for="skill in filteredSkills" :key="skill.name" :name="skill.name" :icon="skill.icon" />
        </div>

        <div class="mt-16">
          <h3 class="section-subtitle text-center text-gray-900 dark:text-white">{{ t.skills.certifications }}</h3>

          <div class="flex justify-center mb-8 mt-6">
            <div
              class="inline-flex border border-gray-200/30 dark:border-gray-700/30 rounded-md overflow-hidden backdrop-blur-sm">
              <button v-for="category in certCategories" :key="category" @click="certFilterCategory = category"
                class="px-4 py-2 text-sm font-medium transition-colors duration-200"
                :class="certFilterCategory === category ? 'bg-sky-500 text-white' : 'bg-white/70 dark:bg-gray-800/70 text-gray-700 dark:text-gray-300 hover:bg-gray-100/70 dark:hover:bg-gray-700/70'">
                {{ category }}
              </button>
            </div>
          </div>

          <div class="max-w-3xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div v-for="cert in filteredCertifications" :key="cert.name" class="glass-card p-4 flex items-start">
              <Icon icon="ph:certificate" class="w-6 h-6 text-sky-500 mr-3 mt-1" />
              <div>
                <h4 class="font-medium text-gray-900 dark:text-white">{{ cert.name }}</h4>
                <p class="text-sm text-gray-600 dark:text-gray-400">{{ cert.organization }} | {{ cert.date }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Preview Section -->
    <section class="bg-gray-50/80 dark:bg-gray-950/80 backdrop-blur-sm py-16 relative">
      <div class="section-container">
        <Title :title="t.projects.title" />
        <p class="text-center text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          {{ t.projects.description }}
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Project cards will be populated later -->
          <div class="glass-card flex flex-col h-full">
            <div
              class="h-48 bg-gray-200/50 dark:bg-gray-700/50 backdrop-blur-sm flex items-center justify-center rounded-t-md">
              <Icon icon="ph:code" class="w-12 h-12 text-gray-400 dark:text-gray-500" />
            </div>
            <div class="p-4 flex-grow">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">Project Title</h3>
              <p class="text-gray-600 dark:text-gray-400 mb-4">
                Project description will be added later.
              </p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="text-xs px-2 py-1 bg-sky-500/10 text-sky-500 rounded-md">Vue</span>
                <span class="text-xs px-2 py-1 bg-sky-500/10 text-sky-500 rounded-md">TypeScript</span>
              </div>
            </div>
            <div class="p-4 pt-0 mt-auto">
              <router-link to="/projects/1" class="text-sky-500 hover:underline inline-flex items-center">
                {{ t.projects.viewProject }}
                <Icon icon="ph:arrow-right" class="ml-1 w-4 h-4" />
              </router-link>
            </div>
          </div>

          <!-- Placeholder cards -->
          <div class="glass-card flex flex-col h-full">
            <div
              class="h-48 bg-gray-200/50 dark:bg-gray-700/50 backdrop-blur-sm flex items-center justify-center rounded-t-md">
              <Icon icon="ph:code" class="w-12 h-12 text-gray-400 dark:text-gray-500" />
            </div>
            <div class="p-4 flex-grow">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">Project Title</h3>
              <p class="text-gray-600 dark:text-gray-400 mb-4">
                Project description will be added later.
              </p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="text-xs px-2 py-1 bg-sky-500/10 text-sky-500 rounded-md">React</span>
                <span class="text-xs px-2 py-1 bg-sky-500/10 text-sky-500 rounded-md">Node.js</span>
              </div>
            </div>
            <div class="p-4 pt-0 mt-auto">
              <router-link to="/projects/2" class="text-sky-500 hover:underline inline-flex items-center">
                {{ t.projects.viewProject }}
                <Icon icon="ph:arrow-right" class="ml-1 w-4 h-4" />
              </router-link>
            </div>
          </div>
        </div>

        <div class="text-center mt-8">
          <router-link to="/projects" class="btn btn-outline">
            {{ t.projects.viewAll }}
          </router-link>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm py-16 relative">
      <div class="section-container">
        <Title :title="t.contact.title" />

        <div class="flex flex-col md:flex-row gap-8">
          <div class="md:w-1/2">
            <ContactForm />
          </div>

          <div class="md:w-1/2">
            <div class="glass-card p-6 h-full">
              <h3 class="text-xl font-semibold mb-4 text-gray-900 dark:text-white">{{ t.contact.info }}</h3>

              <div class="space-y-4">
                <div class="flex items-start">
                  <Icon icon="ph:envelope" class="w-5 h-5 text-sky-500 mr-3 mt-1" />
                  <div>
                    <h4 class="font-medium text-gray-900 dark:text-white">{{ t.contact.email }}</h4>
                    <a href="mailto:your-email@example.com"
                      class="text-gray-600 dark:text-gray-400 hover:text-sky-500 dark:hover:text-sky-500">
                      david@mailbox.com
                    </a>
                  </div>
                </div>

                <div class="flex items-start">
                  <Icon icon="ph:github-logo" class="w-5 h-5 text-sky-500 mr-3 mt-1" />
                  <div>
                    <h4 class="font-medium text-gray-900 dark:text-white">{{ t.contact.github }}</h4>
                    <a href="https://github.com/cseri502" target="_blank" rel="noopener noreferrer"
                      class="text-gray-600 dark:text-gray-400 hover:text-sky-500 dark:hover:text-sky-500">
                      github.com/cseri502
                    </a>
                  </div>
                </div>

                <div class="flex items-start">
                  <Icon icon="ph:linkedin-logo" class="w-5 h-5 text-sky-500 mr-3 mt-1" />
                  <div>
                    <h4 class="font-medium text-gray-900 dark:text-white">{{ t.contact.linkedin }}</h4>
                    <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer"
                      class="text-gray-600 dark:text-gray-400 hover:text-sky-500 dark:hover:text-sky-500">
                      linkedin.com/in/yourprofile
                    </a>
                  </div>
                </div>

                <div class="flex items-start">
                  <Icon icon="ph:facebook-logo" class="w-5 h-5 text-sky-500 mr-3 mt-1" />
                  <div>
                    <h4 class="font-medium text-gray-900 dark:text-white">{{ t.contact.facebook }}</h4>
                    <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer"
                      class="text-gray-600 dark:text-gray-400 hover:text-sky-500 dark:hover:text-sky-500">
                      facebook.com/davidcseresznyes05
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>