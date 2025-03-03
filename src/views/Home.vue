<script setup lang="ts">
import { ref, inject, computed } from 'vue'
import { Icon } from '@iconify/vue'
import SkillCard from '../components/SkillCard.vue'
import EducationItem from '../components/EducationItem.vue'
import ContactForm from '../components/ContactForm.vue'
import Title from '../components/Title.vue'
import en from '../locales/en.json'
import de from '../locales/de.json'
import hu from '../locales/hu.json'

const translations = {
  en,
  de,
  hu,
}

const currentLanguage = inject('language', ref('en'))

const t = computed(() => {
  return translations[currentLanguage.value as keyof typeof translations]
})

enum SkillCategories {
  'All' = 0,
  'Frontend' = 1,
  'Backend' = 2,
  'Database' = 3,
  'Other' = 4,
}

const skills = [
  { name: 'HTML', icon: 'vscode-icons:file-type-html', category: SkillCategories.Frontend },
  { name: 'CSS', icon: 'devicon:css3', category: SkillCategories.Frontend },
  { name: 'SASS', icon: 'vscode-icons:file-type-sass', category: SkillCategories.Frontend },
  { name: 'LESS', icon: 'vscode-icons:file-type-less', category: SkillCategories.Frontend },
  { name: 'JavaScript', icon: 'vscode-icons:file-type-js-official', category: SkillCategories.Frontend },
  { name: 'TypeScript', icon: 'vscode-icons:file-type-typescript-official', category: SkillCategories.Frontend },
  { name: 'jQuery', icon: 'devicon:jquery', category: SkillCategories.Frontend },
  { name: 'Vue', icon: 'devicon:vuejs', category: SkillCategories.Frontend },
  { name: 'React', icon: 'devicon:react', category: SkillCategories.Frontend },
  { name: 'TailwindCSS', icon: 'vscode-icons:file-type-tailwind', category: SkillCategories.Frontend },
  { name: 'Bootstrap', icon: 'logos:bootstrap', category: SkillCategories.Frontend },
  
  { name: 'C#', icon: 'devicon:csharp', category: SkillCategories.Backend },
  { name: 'C++', icon: 'vscode-icons:file-type-cpp3', category: SkillCategories.Backend },
  { name: 'Python', icon: 'vscode-icons:file-type-python', category: SkillCategories.Backend },
  { name: 'ASP.NET', icon: 'logos:dotnet', category: SkillCategories.Backend },
  { name: 'Node.JS', icon: 'logos:nodejs-icon', category: SkillCategories.Backend },
  
  { name: 'MongoDB', icon: 'vscode-icons:file-type-mongo', category: SkillCategories.Database },
  { name: 'MySQL', icon: 'logos:mysql', category: SkillCategories.Database },
  
  { name: 'Git', icon: 'logos:git-icon', category: SkillCategories.Other },
  { name: 'Bash', icon: 'logos:bash-icon', category: SkillCategories.Other },
]

enum CertCategories {
  'All' = 0,
  'Networking' = 1,
  'Development' = 2,
  'IT' = 3,
}

const certifications = [
  {
    name: 'Introduction to Networks',
    organization: 'Cisco CCNA',
    date: 2022,
    file: 'CCNA_R-S-_Introduction_to_Networks_certificate.pdf',
    category: CertCategories.Networking
  },
  {
    name: 'Routing and Switching Essentials',
    organization: 'Cisco CCNA',
    date: 2022,
    file: 'CCNA_R-S-_Routing_and_Switching_Essentials_certificate.pdf',
    category: CertCategories.Networking
  },
  {
    name: 'Scaling Networks',
    organization: 'Cisco CCNA',
    date: 2023,
    file: 'CCNA_R-S-_Scaling_Networks_certificate.pdf',
    category: CertCategories.Networking
  },
  {
    name: 'Connecting Networks',
    organization: 'Cisco CCNA',
    date: 2023,
    file: 'CCNA_R-S-_Connecting_Networks_certificate.pdf',
    category: CertCategories.Networking
  },
  {
    name: 'HTML and CSS',
    organization: 'Certiport ITS',
    date: 2025,
    file: 'Cert62865252306.pdf',
    category: CertCategories.Development
  },
  {
    name: 'JavaScript',
    organization: 'Certiport ITS',
    date: 2025,
    file: 'Cert89412100609.pdf',
    category: CertCategories.Development
  },
  {
    name: 'Python',
    organization: 'Certiport ITS',
    date: 2025,
    file: 'Cert83853654138.pdf',
    category: CertCategories.Development
  },
  {
    name: 'HTML5 Application Development',
    organization: 'Certiport ITS',
    date: 2025,
    file: 'Cert6466175417.pdf',
    category: CertCategories.Development
  },
  {
    name: 'Device Configuration and Management',
    organization: 'Certiport ITS',
    date: 2025,
    file: 'Cert50761751679.pdf',
    category: CertCategories.IT
  },
  {
    name: 'IT Essentials: PC Hardware and Software',
    organization: 'Cisco',
    date: 2021,
    file: 'IT_Essentials_certificate.pdf',
    category: CertCategories.IT
  }
];

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

const sortedEducation = computed(() => {
  return education.sort((a, b) => {
    if (a.startYear !== b.startYear) {
      return b.startYear - a.startYear;
    }
    return (a.endYear || Infinity) - (b.endYear || Infinity);
  });
});

const activeSkillCategory = ref(SkillCategories.All);
const activeCertCategory = ref(CertCategories.All);

const displayedSkills = computed(() => {
  if (activeSkillCategory.value === SkillCategories.All) {
    return skills;
  }
  return skills.filter(skill => skill.category === activeSkillCategory.value);
});

const displayedCertifications = computed(() => {
  if (activeCertCategory.value === CertCategories.All) {
    return [...certifications].sort((a, b) => b.date - a.date);
  }

  return certifications
    .filter(cert => cert.category === activeCertCategory.value)
    .sort((a, b) => b.date - a.date);
});

const projects = [
  {
    id: 1,
    title: 'Portfolio Website',
    description: 'Personal portfolio built with Vue.js and TailwindCSS',
    image: null, // Will be replaced with actual image later
    technologies: ['Vue', 'TypeScript', 'TailwindCSS'],
    link: '/projects/1'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A full-stack application for managing tasks and projects',
    image: null, // Will be replaced with actual image later
    technologies: ['React', 'Node.js', 'MongoDB'],
    link: '/projects/2'
  }
]
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
            <p class="text-xl text-gray-700 dark:text-gray-300 mb-8">
              {{ t.hero.role }}
            </p>
            <div class="flex flex-wrap gap-3">
              <a href="#about" class="btn btn-primary">{{ t.hero.learnMore }}</a>
              <a href="#contact" class="btn btn-outline">{{ t.hero.contactMe }}</a>
            </div>
          </div>
          <div class="md:w-1/2 flex justify-center">
            <div class="w-64 h-64 rounded-full bg-gradient-to-br from-sky-400 to-sky-600 p-1 shadow-lg">
              <div class="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center">
                <Icon icon="ph:user" class="w-32 h-32 text-sky-500" />
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
          <p class="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
            {{ t.about.content }}
          </p>
          <a href="/cv.pdf" target="_blank" class="btn btn-primary inline-flex items-center">
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
              :degree="edu.degree" :period="`${edu.startYear} - ${edu.endYear || 'present'}`"
              :description="edu.description" />
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="bg-white dark:bg-gray-900 py-20 relative">
      <div class="section-container">
        <Title :title="t.skills.title" />

        <!-- Skills Tabs -->
        <div class="mb-12">
          <div class="flex justify-center overflow-x-auto pb-2">
            <div
              class="inline-flex rounded-lg border border-gray-200 dark:border-gray-700 p-1 bg-gray-50 dark:bg-gray-800">
              <button v-for="(category, index) in t.skills.categories" :key="category"
                @click="activeSkillCategory = index"
                class="px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200" :class="activeSkillCategory === index
                  ? 'bg-sky-500 text-white shadow-md'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'">
                {{ category }}
              </button>
            </div>
          </div>

          <div class="mt-8">
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              <SkillCard v-for="skill in displayedSkills" :key="skill.name" :name="skill.name" :icon="skill.icon" />
            </div>
          </div>
        </div>

        <!-- Certifications Section -->
        <div class="mt-16 pt-8 border-t border-gray-100 dark:border-gray-800">
          <h3 class="text-center text-2xl font-bold mb-8 text-gray-900 dark:text-white">{{ t.skills.certifications }}
          </h3>

          <!-- Certification Tabs -->
          <div class="flex justify-center overflow-x-auto pb-2">
            <div
              class="inline-flex rounded-lg border border-gray-200 dark:border-gray-700 p-1 bg-gray-50 dark:bg-gray-800">
              <button v-for="(category, index) in t.skills.certCategories" :key="category"
                @click="activeCertCategory = index"
                class="px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200" :class="activeCertCategory === index
                  ? 'bg-sky-500 text-white shadow-md'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'">
                {{ category }}
              </button>
            </div>
          </div>

          <div class="max-w-3xl mx-auto mt-8">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
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

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div v-for="project in projects" :key="project.id"
            class="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            <div class="h-48 bg-gradient-to-r from-sky-500 to-indigo-500 flex items-center justify-center">
              <Icon icon="ph:code" class="w-16 h-16 text-white" />
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">{{ project.title }}</h3>
              <p class="text-gray-600 dark:text-gray-400 mb-4">{{ project.description }}</p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span v-for="tech in project.technologies" :key="tech"
                  class="text-xs px-2 py-1 bg-sky-500/10 text-sky-500 rounded-md">
                  {{ tech }}
                </span>
              </div>
              <router-link :to="project.link" class="btn btn-sm btn-primary inline-flex items-center mt-2">
                {{ t.projects.viewProject }}
                <Icon icon="ph:arrow-right" class="ml-1 w-4 h-4" />
              </router-link>
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
                <div class="flex items-start">
                  <div class="bg-sky-500/10 p-3 rounded-full mr-4">
                    <Icon icon="ph:envelope" class="w-5 h-5 text-sky-500" />
                  </div>
                  <div>
                    <h4 class="font-medium text-gray-900 dark:text-white">{{ t.contact.email }}</h4>
                    <a href="mailto:david@mailbox.com"
                      class="text-gray-600 dark:text-gray-400 hover:text-sky-500 dark:hover:text-sky-500">
                      david@mailbox.com
                    </a>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="bg-sky-500/10 p-3 rounded-full mr-4">
                    <Icon icon="ph:github-logo" class="w-5 h-5 text-sky-500" />
                  </div>
                  <div>
                    <h4 class="font-medium text-gray-900 dark:text-white">{{ t.contact.github }}</h4>
                    <a href="https://github.com/cseri502" target="_blank" rel="noopener noreferrer"
                      class="text-gray-600 dark:text-gray-400 hover:text-sky-500 dark:hover:text-sky-500">
                      github.com/cseri502
                    </a>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="bg-sky-500/10 p-3 rounded-full mr-4">
                    <Icon icon="ph:linkedin-logo" class="w-5 h-5 text-sky-500" />
                  </div>
                  <div>
                    <h4 class="font-medium text-gray-900 dark:text-white">{{ t.contact.linkedin }}</h4>
                    <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer"
                      class="text-gray-600 dark:text-gray-400 hover:text-sky-500 dark:hover:text-sky-500">
                      linkedin.com/in/yourprofile
                    </a>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="bg-sky-500/10 p-3 rounded-full mr-4">
                    <Icon icon="ph:facebook-logo" class="w-5 h-5 text-sky-500" />
                  </div>
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